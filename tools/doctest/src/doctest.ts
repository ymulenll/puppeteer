#! /usr/bin/env -S node --test-reporter spec

/**
 * Copyright 2023 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * `@puppeteer/doctest` tests `@example` code within a JavaScript file.
 *
 * There are a few reasonable assumptions for this tool to work:
 *
 * 1. Examples are written in block comments, not line comments.
 * 2. Examples do not use packages that are not available to the file it exists
 *    in. (Note the package will always be available).
 * 3. Examples are strictly written between code fences (\`\`\`) on separate
 *    lines. For example, \`\`\`console.log(1)\`\`\` is not allowed.
 * 4. Code is written using ES modules.
 *
 * By default, code blocks are interpreted as JavaScript. Use \`\`\`ts to change
 * the language. In general, the format is "\`\`\`[language] [ignore] [fail]".
 *
 * If there are several code blocks within an example, they are concatenated.
 */
import './register.js';

import {pathToFileURL} from 'node:url';

import {Glob} from 'glob';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

const {files = []} = await yargs(hideBin(process.argv))
  .scriptName('@puppeteer/doctest')
  .command('* <files..>', `JSDoc @example code tester.`)
  .positional('files', {
    describe: 'Files to test',
    type: 'string',
  })
  .array('files')
  .version(false)
  .help()
  .parse();

for await (const file of new Glob(files, {})) {
  await import(pathToFileURL(file).toString());
}
