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

import type * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import {BrowserEvent} from '../api/Browser.js';
import {BrowserContextEvent} from '../api/BrowserContext.js';
import type {CDPSession} from '../api/CDPSession.js';
import {Target, TargetType} from '../api/Target.js';
import {UnsupportedOperation} from '../common/Errors.js';
import {EventSubscription} from '../common/EventEmitter.js';
import {debugError} from '../common/util.js';
import {DisposableStack, disposeSymbol} from '../util/disposable.js';

import type {BidiBrowser} from './Browser.js';
import type {BidiBrowserContext} from './BrowserContext.js';
import {type BrowsingContext, CdpSessionWrapper} from './BrowsingContext.js';
import {BidiPage} from './Page.js';

/**
 * @internal
 */
export abstract class BidiTarget extends Target {
  protected _browserContext: BidiBrowserContext;

  constructor(browserContext: BidiBrowserContext) {
    super();
    this._browserContext = browserContext;
  }

  override async worker(): Promise<null> {
    return null;
  }

  override browser(): BidiBrowser {
    return this._browserContext.browser();
  }

  override browserContext(): BidiBrowserContext {
    return this._browserContext;
  }

  override opener(): never {
    throw new UnsupportedOperation();
  }

  override createCDPSession(): Promise<CDPSession> {
    throw new UnsupportedOperation();
  }
}

/**
 * @internal
 */
export class BiDiBrowserTarget extends BidiTarget {
  override url(): string {
    return '';
  }

  override type(): TargetType {
    return TargetType.BROWSER;
  }
}

/**
 * @internal
 */
export class BiDiBrowsingContextTarget extends BidiTarget {
  readonly browsingContext: BrowsingContext;
  readonly #disposables = new DisposableStack();

  constructor(
    browserContext: BidiBrowserContext,
    browsingContext: BrowsingContext
  ) {
    super(browserContext);

    this.browsingContext = browsingContext;

    this.#disposables.use(
      new EventSubscription(
        this.browsingContext.connection,
        'browsingContext.domContentLoaded',
        (info: Bidi.BrowsingContext.NavigationInfo) => {
          if (info.context === this.browsingContext.id) {
            this.browser().emit(BrowserEvent.TargetChanged, this);
          }
        }
      )
    );
    this.#disposables.use(
      new EventSubscription(
        this.browsingContext.connection,
        'browsingContext.navigationStarted',
        (info: Bidi.BrowsingContext.NavigationInfo) => {
          if (info.context === this.browsingContext.id) {
            this.browser().emit(BrowserEvent.TargetChanged, this);
            this.browserContext().emit(BrowserContextEvent.TargetChanged, this);
          }
        }
      )
    );
    this.#disposables.use(
      new EventSubscription(
        this.browsingContext.connection,
        'browsingContext.fragmentNavigated',
        (info: Bidi.BrowsingContext.NavigationInfo) => {
          if (info.context === this.browsingContext.id) {
            this.browser().emit(BrowserEvent.TargetChanged, this);
            this.browserContext().emit(BrowserContextEvent.TargetChanged, this);
          }
        }
      )
    );

    this.browsingContext.connection.onceIf(
      'browsingContext.contextDestroyed',
      info => {
        return info.context === this.browsingContext.id;
      },
      this[Symbol.dispose]
    );
  }

  get disposed(): boolean {
    return this.#disposables.disposed;
  }

  override url(): string {
    return this.browsingContext.url;
  }

  override async createCDPSession(): Promise<CDPSession> {
    const {sessionId} = await this.browsingContext.cdpSession.send(
      'Target.attachToTarget',
      {
        targetId: this.browsingContext.id,
        flatten: true,
      }
    );
    return new CdpSessionWrapper(this.browsingContext, sessionId);
  }

  override type(): TargetType {
    return TargetType.PAGE;
  }

  [disposeSymbol](): void {
    if (this.disposed) {
      return;
    }
    this.#disposables.dispose();
    this.browsingContext[Symbol.dispose]();
    this.browser().emit(BrowserEvent.TargetDestroyed, this);
    this._browserContext.emit(BrowserContextEvent.TargetDestroyed, this);
  }
}

/**
 * @internal
 */
export class BiDiPageTarget extends BiDiBrowsingContextTarget {
  #page: BidiPage;

  constructor(
    browserContext: BidiBrowserContext,
    browsingContext: BrowsingContext
  ) {
    super(browserContext, browsingContext);

    this.#page = new BidiPage(browsingContext, browserContext, this);
  }

  override async page(): Promise<BidiPage> {
    return this.#page;
  }

  override [Symbol.dispose](): void {
    void this.#page.close().catch(debugError);
    super[Symbol.dispose]();
  }
}
