/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {CDPSession} from '../api/CDPSession.js';
import type {Page} from '../api/Page.js';
import {Target, TargetType} from '../api/Target.js';
import {UnsupportedOperation} from '../common/Errors.js';

import type {BidiBrowser} from './Browser.js';
import type {BidiBrowserContext} from './BrowserContext.js';
import type {BrowsingContext} from './core/BrowsingContext.js';
import {BidiPage} from './Page.js';

/**
 * @internal
 */
export abstract class BidiTarget extends Target {
  readonly #browserContext: BidiBrowserContext;

  constructor(browserContext: BidiBrowserContext) {
    super();
    this.#browserContext = browserContext;
  }

  override asPage(): Promise<Page> {
    throw new UnsupportedOperation();
  }

  override browser(): BidiBrowser {
    return this.#browserContext.browser();
  }

  override browserContext(): BidiBrowserContext {
    return this.#browserContext;
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
  #browsingContext: BrowsingContext;

  constructor(
    browserContext: BidiBrowserContext,
    browsingContext: BrowsingContext
  ) {
    super(browserContext);

    this.#browsingContext = browsingContext;
  }

  override url(): string {
    return this.#browsingContext.url;
  }

  override async createCDPSession(): Promise<CDPSession> {
    // const {sessionId} = await this._browsingContext.cdpSession.send(
    //   'Target.attachToTarget',
    //   {
    //     targetId: this._browsingContext.id,
    //     flatten: true,
    //   }
    // );
    // return new CdpSessionWrapper(this._browsingContext, sessionId);
  }

  override type(): TargetType {
    return TargetType.PAGE;
  }
}

/**
 * @internal
 */
export class BiDiPageTarget extends BiDiBrowsingContextTarget {
  readonly bidiPage: BidiPage;

  constructor(
    browserContext: BidiBrowserContext,
    browsingContext: BrowsingContext
  ) {
    super(browserContext, browsingContext);

    this.bidiPage = new BidiPage(this, browsingContext);
  }

  override async page(): Promise<BidiPage> {
    return this.bidiPage;
  }
}
