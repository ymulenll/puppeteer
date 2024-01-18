/**
 * @license
 * Copyright 2022 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import {BrowserEvent, type WaitForTargetOptions} from '../api/Browser.js';
import {BrowserContext, BrowserContextEvent} from '../api/BrowserContext.js';
import type {Page} from '../api/Page.js';
import type {Target} from '../api/Target.js';
import {UnsupportedOperation} from '../common/Errors.js';
import type {Viewport} from '../common/Viewport.js';
import {strongWeakRef} from '../util/WeakProxy.js';

import type {BidiBrowser} from './Browser.js';
import type {BidiPage} from './Page.js';
import {BiDiPageTarget} from './Target.js';
import type {BrowsingContext} from './core/BrowsingContext.js';
import type {UserContext} from './core/UserContext.js';

/**
 * @internal
 */
export interface BidiBrowserContextOptions {
  defaultViewport: Viewport | null;
}

/**
 * @internal
 */
export class BidiBrowserContext extends BrowserContext {
  static from(
    browser: BidiBrowser,
    userContext: UserContext,
    options: BidiBrowserContextOptions
  ): BidiBrowserContext {
    const browserContext = new BidiBrowserContext(
      browser,
      userContext,
      options
    );
    browserContext.#initialize();
    return browserContext;
  }

  #browser: BidiBrowser;
  #userContext: () => UserContext;
  #defaultViewport: Viewport | null;
  #pageTargets = new WeakMap<BrowsingContext, BiDiPageTarget>();

  private constructor(
    browser: BidiBrowser,
    userContext: UserContext,
    options: BidiBrowserContextOptions
  ) {
    super();
    this.#browser = browser;
    this.#userContext = strongWeakRef(
      userContext,
      `Browsing context no longer exists.`
    );
    this.#defaultViewport = options.defaultViewport;
  }

  #initialize() {
    const userContext = this.#userContext();
    userContext.on('browsingcontext', ({browsingContext}) => {
      const target = new BiDiPageTarget(this, browsingContext);
      this.#pageTargets.set(browsingContext, target);
      this.emit(BrowserContextEvent.TargetCreated, target);
      this.browser().emit(BrowserEvent.TargetCreated, target);

      browsingContext.on('destroyed', () => {
        this.#pageTargets.delete(browsingContext);
        this.emit(BrowserContextEvent.TargetDestroyed, target);
        this.browser().emit(BrowserEvent.TargetDestroyed, target);
      });
    });
    for (const browsingContext of userContext.browsingContexts) {
      userContext.emit('browsingcontext', {browsingContext});
    }
  }

  override targets(): Target[] {
    return [...this.#userContext().browsingContexts]
      .map(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- Set
        // up by the listeners in `#initialize`.
        browsingContext => {
          return this.#pageTargets.get(browsingContext)!;
        }
      )
      .flatMap(target => {
        return [target, target.bidiPage.targets()];
      });
  }

  override waitForTarget(
    predicate: (x: Target) => boolean | Promise<boolean>,
    options: WaitForTargetOptions = {}
  ): Promise<Target> {
    return this.#browser.waitForTarget(target => {
      return target.browserContext() === this && predicate(target);
    }, options);
  }

  override async newPage(): Promise<Page> {
    const browsingContext = await this.#userContext().createBrowsingContext(
      Bidi.BrowsingContext.CreateType.Tab
    );

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- Set
    // up by the listeners in `#initialize`.
    const target = this.#pageTargets.get(browsingContext)!;

    const page = await target.page();
    if (!page) {
      throw new Error('Page is not found');
    }
    if (this.#defaultViewport) {
      try {
        await page.setViewport(this.#defaultViewport);
      } catch {
        // No support for setViewport in Firefox.
      }
    }

    return page;
  }

  override async close(): Promise<void> {
    // TODO: implement incognito context https://github.com/w3c/webdriver-bidi/issues/289.
    return;
  }

  override browser(): BidiBrowser {
    return this.#browser;
  }

  override async pages(): Promise<BidiPage[]> {
    return [...this.#userContext().browsingContexts].map(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- Set
      // up by the listeners in `#initialize`.
      browsingContext => {
        return this.#pageTargets.get(browsingContext)!.bidiPage;
      }
    );
  }

  override isIncognito(): boolean {
    // TODO: implement incognito context https://github.com/w3c/webdriver-bidi/issues/289.
    return false;
  }

  override overridePermissions(): never {
    throw new UnsupportedOperation();
  }

  override clearPermissionOverrides(): never {
    throw new UnsupportedOperation();
  }
}
