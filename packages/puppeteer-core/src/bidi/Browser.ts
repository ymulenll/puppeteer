/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ChildProcess} from 'child_process';

import type * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import {
  Browser,
  BrowserEvent,
  type BrowserCloseCallback,
  type BrowserContextOptions,
} from '../api/Browser.js';
import {BrowserContextEvent} from '../api/BrowserContext.js';
import type {Page} from '../api/Page.js';
import type {Target} from '../api/Target.js';
import {UnsupportedOperation} from '../common/Errors.js';
import type {Handler} from '../common/EventEmitter.js';
import {debugError} from '../common/util.js';
import type {Viewport} from '../common/Viewport.js';

import {BidiBrowserContext} from './BrowserContext.js';
import type {BidiConnection} from './Connection.js';
import type {Browser as BrowserCore} from './core/Browser.js';
import {Session} from './core/Session.js';
import {BiDiBrowserTarget, type BidiTarget} from './Target.js';

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
    const session = await Session.from(opts.connection, {
      alwaysMatch: {
        acceptInsecureCerts: opts.ignoreHTTPSErrors,
        webSocketUrl: true,
      },
    });

    const browserName = session.capabilities.browserName;
    await session.subscribe(
      browserName.toLocaleLowerCase().includes('firefox')
        ? BidiBrowser.subscribeModules
        : [...BidiBrowser.subscribeModules, ...BidiBrowser.subscribeCdpEvents]
    );

    const browser = new BidiBrowser(session.browser, opts);
    browser.#initialize();
    return browser;
  }

  #process?: ChildProcess;
  #closeCallback?: BrowserCloseCallback;
  #browserCore: BrowserCore;
  #defaultViewport: Viewport | null;
  #targets = new Map<string, BidiTarget>();
  #browserContexts: [BidiBrowserContext, ...BidiBrowserContext[]];
  #browserTarget: BiDiBrowserTarget;

  #connectionEventHandlers = new Map<
    Bidi.BrowsingContextEvent['method'],
    Handler<any>
  >([
    ['browsingContext.domContentLoaded', this.#onContextDomLoaded.bind(this)],
    ['browsingContext.fragmentNavigated', this.#onContextNavigation.bind(this)],
    ['browsingContext.navigationStarted', this.#onContextNavigation.bind(this)],
  ]);

  constructor(browserCore: BrowserCore, opts: BidiBrowserOptions) {
    super();
    this.#closeCallback = opts.closeCallback;
    this.#defaultViewport = opts.defaultViewport;
    this.#process = opts.process;
    this.#browserCore = browserCore;
    this.#browserContexts = [
      BidiBrowserContext.from(this, this.#browserCore.defaultUserContext, {
        defaultViewport: this.#defaultViewport,
      }),
    ];
    this.#browserTarget = new BiDiBrowserTarget(this.#browserContexts[0]);
  }

  #initialize() {
    this.#process?.once('close', () => {
      this.#browserCore.dispose('Browser process was destroyed.');
      this.emit(BrowserEvent.Disconnected, undefined);
    });

    for (const [eventName, handler] of this.#connectionEventHandlers) {
      this.#session.on(eventName, handler);
    }
  }

  get #session() {
    return this.#browserCore.session;
  }

  get #browserName() {
    return this.#session.capabilities.browserName;
  }

  get #browserVersion() {
    return this.#session.capabilities.browserVersion;
  }

  override userAgent(): never {
    throw new UnsupportedOperation();
  }

  #onContextDomLoaded(event: Bidi.BrowsingContext.Info) {
    const target = this.#targets.get(event.context);
    if (target) {
      this.emit(BrowserEvent.TargetChanged, target);
    }
  }

  #onContextNavigation(event: Bidi.BrowsingContext.NavigationInfo) {
    const target = this.#targets.get(event.context);
    if (target) {
      this.emit(BrowserEvent.TargetChanged, target);
      target.browserContext().emit(BrowserContextEvent.TargetChanged, target);
    }
  }

  get connection(): Session {
    return this.#browserCore.session;
  }

  override wsEndpoint(): string {
    return this.#browserCore.session.capabilities.webSocketUrl!;
  }

  override async close(): Promise<void> {
    if (this.#browserCore.disposed) {
      return;
    }
    await this.#browserCore.close().catch(debugError);
    await this.#closeCallback?.call(null);
  }

  override get connected(): boolean {
    return !this.#browserCore.disposed;
  }

  override process(): ChildProcess | null {
    return this.#process ?? null;
  }

  override async createIncognitoBrowserContext(
    _options?: BrowserContextOptions
  ): Promise<BidiBrowserContext> {
    // TODO: implement incognito context https://github.com/w3c/webdriver-bidi/issues/289.
    return this.#browserContexts[0];
  }

  override async version(): Promise<string> {
    return `${this.#browserName}/${this.#browserVersion}`;
  }

  override browserContexts(): BidiBrowserContext[] {
    // TODO: implement incognito context https://github.com/w3c/webdriver-bidi/issues/289.
    return this.#browserContexts;
  }

  override defaultBrowserContext(): BidiBrowserContext {
    return this.#browserContexts[0];
  }

  override newPage(): Promise<Page> {
    return this.defaultBrowserContext().newPage();
  }

  override targets(): Target[] {
    return [
      this.#browserTarget,
      ...this.browserContexts().flatMap(context => context.targets()),
    ];
  }

  _getTargetById(id: string): BidiTarget {
    const target = this.#targets.get(id);
    if (!target) {
      throw new Error('Target not found');
    }
    return target;
  }

  override target(): Target {
    return this.#browserTarget;
  }

  override async disconnect(): Promise<void> {
    await this.#session.end().catch(debugError);
  }
}
