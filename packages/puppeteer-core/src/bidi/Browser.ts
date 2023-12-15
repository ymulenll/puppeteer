/**
 * Copyright 2022 Google Inc. All rights reserved.
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

import type {ChildProcess} from 'child_process';

import type * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import {
  Browser,
  BrowserEvent,
  type BrowserCloseCallback,
  type BrowserContextOptions,
} from '../api/Browser.js';
import type {Page} from '../api/Page.js';
import type {Target} from '../api/Target.js';
import {UnsupportedOperation} from '../common/Errors.js';
import type {Handler} from '../common/EventEmitter.js';
import {debugError} from '../common/util.js';
import type {Viewport} from '../common/Viewport.js';

import {BidiBrowserContext} from './BrowserContext.js';
import {BrowsingContext} from './BrowsingContext.js';
import type {BidiConnection} from './Connection.js';
import {BiDiBrowserTarget} from './Target.js';

/**
 * @internal
 */
export interface BidiBrowserOptions {
  process?: ChildProcess;
  closeCallback?: BrowserCloseCallback;
  connection: BidiConnection;
  defaultViewport: Viewport | null;
  ignoreHTTPSErrors?: boolean;
}

/**
 * @internal
 */
export class BidiBrowser extends Browser {
  readonly protocol = 'webDriverBiDi';

  // TODO: Update generator to include fully module
  static readonly subscribeModules: string[] = [
    'browsingContext',
    'network',
    'log',
    'script',
  ];
  static readonly subscribeCdpEvents: Bidi.Cdp.EventNames[] = [
    // Coverage
    'cdp.Debugger.scriptParsed',
    'cdp.CSS.styleSheetAdded',
    'cdp.Runtime.executionContextsCleared',
    // Tracing
    'cdp.Tracing.tracingComplete',
    // TODO: subscribe to all CDP events in the future.
    'cdp.Network.requestWillBeSent',
    'cdp.Debugger.scriptParsed',
    'cdp.Page.screencastFrame',
  ];

  static async create(opts: BidiBrowserOptions): Promise<BidiBrowser> {
    let browserName = '';
    let browserVersion = '';

    // TODO: await until the connection is established.
    try {
      const {result} = await opts.connection.send('session.new', {
        capabilities: {
          alwaysMatch: {
            acceptInsecureCerts: opts.ignoreHTTPSErrors,
          },
        },
      });
      browserName = result.capabilities.browserName ?? '';
      browserVersion = result.capabilities.browserVersion ?? '';
    } catch (err) {
      // Chrome does not support session.new.
      debugError(err);
    }

    await opts.connection.send('session.subscribe', {
      events: browserName.toLocaleLowerCase().includes('firefox')
        ? BidiBrowser.subscribeModules
        : [...BidiBrowser.subscribeModules, ...BidiBrowser.subscribeCdpEvents],
    });

    return new BidiBrowser({
      ...opts,
      browserName,
      browserVersion,
    });
  }

  #browserName = '';
  #browserVersion = '';
  #process?: ChildProcess;
  #closeCallback?: BrowserCloseCallback;
  #connection: BidiConnection;
  #defaultViewport: Viewport | null;
  readonly #browserTarget: BiDiBrowserTarget;
  readonly _browserContexts: [BidiBrowserContext, ...BidiBrowserContext[]] =
    [] as any;
  // TODO: Once BiDi has some concept matching BrowserContext, we should move
  // this map into browser context. For now, we assume that only explicitly
  // created pages go to the current BrowserContext. Otherwise, the contexts get
  // assigned to the default BrowserContext by the Browser.
  readonly #browsingContexts = new Map<
    Bidi.BrowsingContext.BrowsingContext,
    BrowsingContext
  >();

  #connectionEventHandlers = new Map<
    Bidi.BrowsingContextEvent['method'],
    Handler<any>
  >([
    ['browsingContext.contextCreated', this.#setBrowsingContext.bind(this)],
    ['browsingContext.contextDestroyed', this.#onContextDestroyed.bind(this)],
  ]);

  constructor(
    opts: BidiBrowserOptions & {
      browserName: string;
      browserVersion: string;
    }
  ) {
    super();
    this.#process = opts.process;
    this.#closeCallback = opts.closeCallback;
    this.#connection = opts.connection;
    this.#defaultViewport = opts.defaultViewport;
    this.#browserName = opts.browserName;
    this.#browserVersion = opts.browserVersion;

    this.#process?.once('close', () => {
      this.#connection.dispose();
      this.emit(BrowserEvent.Disconnected, undefined);
    });

    const defaultContext = new BidiBrowserContext(this, {
      defaultViewport: this.#defaultViewport,
      isDefault: true,
    });
    this.#browserTarget = new BiDiBrowserTarget(defaultContext);

    for (const [eventName, handler] of this.#connectionEventHandlers) {
      this.#connection.on(eventName, handler);
    }

    void this.connection
      .send('browsingContext.getTree', {})
      .then(({result: {contexts}}) => {
        for (const context of contexts) {
          this.#setBrowsingContext(context);
        }
      });
  }

  override userAgent(): never {
    throw new UnsupportedOperation();
  }

  #setBrowsingContext(info: Bidi.BrowsingContext.Info) {
    const context = new BrowsingContext(this, info);
    this.#browsingContexts.set(context.id, context);
  }

  async #onContextDestroyed(info: Bidi.BrowsingContext.Info) {
    this.#browsingContexts.delete(info.context);
  }

  get connection(): BidiConnection {
    return this.#connection;
  }

  override wsEndpoint(): string {
    return this.#connection.url;
  }

  override async close(): Promise<void> {
    for (const [eventName, handler] of this.#connectionEventHandlers) {
      this.#connection.off(eventName, handler);
    }
    if (this.#connection.closed) {
      return;
    }

    // `browser.close` can close connection before the response is received.
    await this.#connection.send('browser.close', {}).catch(debugError);
    await this.#closeCallback?.call(null);
    this.#connection.dispose();
  }

  override get connected(): boolean {
    return !this.#connection.closed;
  }

  override process(): ChildProcess | null {
    return this.#process ?? null;
  }

  override async createIncognitoBrowserContext(
    _options?: BrowserContextOptions
  ): Promise<BidiBrowserContext> {
    // TODO: implement incognito context https://github.com/w3c/webdriver-bidi/issues/289.
    return new BidiBrowserContext(this, {
      defaultViewport: this.#defaultViewport,
      isDefault: false,
    });
  }

  override async version(): Promise<string> {
    return `${this.#browserName}/${this.#browserVersion}`;
  }

  override browserContexts(): BidiBrowserContext[] {
    // TODO: implement incognito context https://github.com/w3c/webdriver-bidi/issues/289.
    return this._browserContexts;
  }

  override defaultBrowserContext(): BidiBrowserContext {
    return this._browserContexts[0];
  }

  override newPage(): Promise<Page> {
    return this._browserContexts[0].newPage();
  }

  override targets(): Target[] {
    return [
      this.#browserTarget,
      ...this._browserContexts
        .map(context => {
          return context.targets();
        })
        .flat(),
    ];
  }

  override target(): Target {
    return this.#browserTarget;
  }

  override async disconnect(): Promise<void> {
    try {
      // Fail silently if the session cannot be ended.
      await this.#connection.send('session.end', {});
    } catch (e) {
      debugError(e);
    }
    this.#connection.dispose();
  }

  supportsCdp(): boolean {
    return !this.#browserName.toLowerCase().includes('firefox');
  }

  browsingContext(id: string): BrowsingContext | undefined {
    return this.#browsingContexts.get(id);
  }
}
