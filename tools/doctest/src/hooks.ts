import fs from 'fs';
import assert from 'node:assert';
import {createHash} from 'node:crypto';
import {type LoadHook, type ResolveHook} from 'node:module';

import {transform, type Output} from '@swc/core';
import {parse as parseJs} from 'acorn';
import {parse as parseJsDoc, type Tag} from 'doctrine';
import {
  SourceMapConsumer,
  SourceMapGenerator,
  type RawSourceMap,
} from 'source-map';

const readFileSync = fs.readFileSync;
const existsSync = fs.existsSync;

(fs.readFileSync as any) = (...args: any[]) => {
  const path = args[0];
  if (typeof path === 'string' && path.startsWith('doctest:')) {
    return DOCTESTS.get(path);
  }
  // @ts-expect-error I don't know why.
  return readFileSync(...args) as string;
};

(fs.existsSync as any) = (...args: any[]) => {
  const path = args[0];
  if (typeof path === 'string' && path.startsWith('doctest:')) {
    return DOCTESTS.has(path);
  }
  // @ts-expect-error I don't know why.
  return existsSync(...args) as string;
};

// This is 1-indexed.
interface Position {
  line: number;
  column: number;
}

interface Comment {
  text: string;
  position: Position;
}

interface SourceLocation {
  // File path to the original source code.
  origin: string;
  // Mappings from the extracted code to the original code.
  positions: Array<{
    // The 1-indexed line number for the extracted code.
    extracted: number;
    // The position in the original code.
    original: Position;
  }>;
}

interface Example extends SourceLocation {
  language: Language;
  code: string;
  fail: boolean;
}

interface Doctest {
  url: string;
  example: Example;
}

const enum Language {
  JavaScript,
  TypeScript,
}

const CODE_FENCE = '```';
const BLOCK_COMMENT_START = ' * ';
const LANGUAGE_TO_SYNTAX = {
  [Language.TypeScript]: 'typescript',
  [Language.JavaScript]: 'ecmascript',
} as const;
const DECODER = new TextDecoder('utf-8');
const DOCTESTS = new Map<string, string>();

export const resolve: ResolveHook = async (url, context, nextResolve) => {
  try {
    return await nextResolve(url, context);
  } catch (error) {
    if (!url.startsWith('doctest:')) {
      throw error;
    }
    return {
      url,
      shortCircuit: true,
    };
  }
};

export const load: LoadHook = async (url, context, nextLoad) => {
  try {
    const output = await nextLoad(url, context);
    if (
      !output.source ||
      !url.startsWith('file:') ||
      !['module', 'commonjs'].includes(output.format)
    ) {
      return output;
    }
    if (typeof output.source !== 'string') {
      output.source = DECODER.decode(output.source);
    }

    let source = `
    import 'source-map-support/register.js';import {describe, it} from 'node:test';\n`;
    source += `describe(${JSON.stringify(url)}, () => {\n`;
    const comments = extractJSDocComments(output.source);
    for (const example of extractExamples(url, comments)) {
      const sourceUrl = createSourceUrl(url, example);
      const doctestUrl = createDoctestUrl(example.code);

      source += `it('${sourceUrl}', async () => {`;
      source += `
      try {
        await import(${JSON.stringify(doctestUrl)});
        if (${example.fail}) throw new Error('Expected failure.');
      } catch (error) {
        if (!${example.fail}) throw error;
      }
    `;
      source += `});`;

      // TODO: Parallelize.
      try {
        const doctestSource = await compileDoctest({url: doctestUrl, example});
        DOCTESTS.set(doctestUrl, doctestSource);
      } catch (error) {
        assertError(error);
        DOCTESTS.set(doctestUrl, createErrorScript(error));
      }
    }
    source += '});';
    return {
      format: 'module',
      source,
    };
  } catch (error) {
    if (!url.startsWith('doctest:')) {
      throw error;
    }
    return {
      format: 'module',
      source: DOCTESTS.get(url),
    };
  }
};

function extractJSDocComments(source: string) {
  const comments: Comment[] = [];
  parseJs(source, {
    ecmaVersion: 'latest',
    sourceType: 'module',
    locations: true,
    onComment(isBlock, text, _, __, loc) {
      if (isBlock) {
        comments.push({text, position: loc!});
      }
    },
  });
  return comments;
}

const enum Option {
  Ignore = 'ignore',
  Fail = 'fail',
}

function* extractExamples(
  origin: string,
  comments: Iterable<Readonly<Comment>>
): Iterable<Example> {
  interface Context {
    language: Language;
    fail: boolean;
    start: number;
  }
  for (const {text, position: loc} of comments) {
    const {tags} = parseJsDoc(text, {
      unwrap: true,
      tags: ['example'],
      lineNumbers: true,
      preserveWhitespace: true,
    });
    for (const {description, lineNumber} of tags as Array<
      Tag & {lineNumber: number}
    >) {
      if (!description) {
        continue;
      }
      const lines = description.split('\n');
      const blocks: Example[] = [];
      let context: Context | undefined;
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]!;
        const borderIndex = line.indexOf(CODE_FENCE);
        if (borderIndex === -1) {
          continue;
        }
        if (context) {
          blocks.push({
            origin: origin,
            language: context.language,
            code: lines.slice(context.start, i).join('\n'),
            positions: [
              {
                extracted: 1,
                original: {
                  line: loc.line + lineNumber + context.start,
                  column:
                    loc.column + borderIndex + BLOCK_COMMENT_START.length + 1,
                },
              },
            ],
            fail: context.fail,
          });
          context = undefined;
          continue;
        }
        const [tag, ...options] = line
          .slice(borderIndex + CODE_FENCE.length)
          .split(' ');
        if (options.includes(Option.Ignore)) {
          // Ignore the code sample.
          continue;
        }
        const fail = options.includes(Option.Fail);
        // Code starts on the next line.
        const start = i + 1;
        if (!tag || tag.match(/js|javascript/)) {
          context = {language: Language.JavaScript, fail, start};
        } else if (tag.match(/ts|typescript/)) {
          context = {language: Language.TypeScript, fail, start};
        }
      }
      if (blocks.length === 0) {
        continue;
      }
      // Merging the blocks into a single block.
      yield blocks.reduce(
        (context, {language, code, positions: [position], fail}, index) => {
          assert(position);
          return {
            origin: origin,
            language: language || context.language,
            code: `${context.code}\n${code}`,
            positions: [
              ...context.positions,
              {
                ...position,
                extracted:
                  context.code.split('\n').length +
                  context.positions.at(-1)!.extracted -
                  // We subtract this because of the accumulated '\n'.
                  (index - 1),
              },
            ],
            fail: fail || context.fail,
          };
        }
      );
    }
  }
}

function createDoctestUrl(code: string) {
  return `doctest:${createHash('md5').update(code).digest('hex')}`;
}

async function compileDoctest(test: Doctest) {
  const output = await compile(test.example.language, test.example.code);
  const map = await getExtractSourceMap(output.map, test);
  return inlineSourceMap(output.code, map);
}

async function compile(language: Language, code: string) {
  return (await transform(code, {
    sourceMaps: true,
    inlineSourcesContent: false,
    jsc: {
      parser: {
        syntax: LANGUAGE_TO_SYNTAX[language],
      },
      target: 'es2022',
    },
  })) as Required<Output>;
}

async function getExtractSourceMap(map: string, location: Doctest) {
  const sourceMap = JSON.parse(map) as RawSourceMap;
  sourceMap.file = location.url;
  sourceMap.sourceRoot = '';
  sourceMap.sources = [location.example.origin];
  const consumer = await new SourceMapConsumer(sourceMap);
  const generator = new SourceMapGenerator({
    file: consumer.file,
    sourceRoot: consumer.sourceRoot,
  });
  // We want descending order of the `generated` property.
  const positions = [...location.example.positions].reverse();
  consumer.eachMapping(mapping => {
    // Note `mapping.originalLine` is the line number with respect to the
    // extracted, raw code.
    const {extracted, original} = positions.find(({extracted}) => {
      return mapping.originalLine >= extracted;
    })!;

    // `original.line` will account for `extracted`, so we need to subtract
    // `extracted` to avoid duplicity. We also subtract 1 because `extracted` is
    // 1-indexed.
    mapping.originalLine -= extracted - 1;

    generator.addMapping({
      ...mapping,
      original: {
        line: mapping.originalLine + original.line - 1,
        column: mapping.originalColumn + original.column - 1,
      },
      generated: {
        line: mapping.generatedLine,
        column: mapping.generatedColumn,
      },
    });
  });
  return generator.toJSON();
}

function inlineSourceMap(code: string, sourceMap: RawSourceMap) {
  return `${code}\n//# sourceMappingURL=data:application/json;base64,${Buffer.from(
    JSON.stringify(sourceMap)
  ).toString('base64')}`;
}

function createSourceUrl(url: string, example: Example) {
  return `${url}:${example.positions[0]!.original.line}:${
    example.positions[0]!.original.column
  }`;
}

function assertError(error: unknown): asserts error is Error {
  if (error instanceof Error) {
    return;
  }
  throw error;
}

function createErrorScript(error: Error): string {
  return (
    'const error = new Error();\n' +
    `error.name = ${JSON.stringify(error.name)}\n` +
    `error.message = ${JSON.stringify(error.message)}\n` +
    `error.stack = ${JSON.stringify(error.stack)}\n` +
    `throw error;`
  );
}
