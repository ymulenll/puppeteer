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

import * as Bidi from 'chromium-bidi/lib/cjs/protocol/protocol.js';

import type {WaitForTargetOptions} from '../api/Browser.js';
import {BrowserContext} from '../api/BrowserContext.js';
import type {Page} from '../api/Page.js';
import type {Target} from '../api/Target.js';
import {UnsupportedOperation} from '../common/Errors.js';
import {debugError} from '../common/util.js';
import type {Viewport} from '../common/Viewport.js';
import {assert} from '../util/assert.js';

import type {BidiBrowser} from './Browser.js';
import type {BrowsingContext} from './BrowsingContext.js';
import type {BidiConnection} from './Connection.js';
import type {BidiPage} from './Page.js';
import {BiDiBrowsingContextTarget, BiDiPageTarget} from './Target.js';

/**
 * @internal
 */
export interface BidiBrowserContextOptions {
  defaultViewport: Viewport | null;
  isDefault: boolean;
}

/**
 * @internal
 */
export class BidiBrowserContext extends BrowserContext {
  #browser: BidiBrowser;
  #defaultViewport: Viewport | null;
  #isDefault = false;
  #targets = new Map<
    Bidi.BrowsingContext.BrowsingContext,
    BiDiBrowsingContextTarget
  >();

  constructor(browser: BidiBrowser, options: BidiBrowserContextOptions) {
    super();
    this.#browser = browser;
    this.#defaultViewport = options.defaultViewport;
    this.#isDefault = options.isDefault;

    // TODO: Use event subscription.
    this.connection.on('browsingContext.contextDestroyed', info => {
      this.#targets.delete(info.context);
    });

    this.#browser._browserContexts.push(this);
  }

  get connection(): BidiConnection {
    return this.#browser.connection;
  }

  browsingContext(id: string): BrowsingContext | undefined {
    return this.#browser.browsingContext(id);
  }

  override targets(): Target[] {
    return this.#browser.targets().filter(target => {
      return target.browserContext() === this;
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
    const {result} = await this.#browser.connection.send(
      'browsingContext.create',
      {
        type: Bidi.BrowsingContext.CreateType.Tab,
      }
    );
    const context = this.#browser.browsingContext(result.context);
    assert(
      context,
      'BiDi implementation is broken; context should already be created'
    );

    const target = !context.parent
      ? new BiDiPageTarget(this, context)
      : new BiDiBrowsingContextTarget(this, context);
    this.#targets.set(context.id, target);

    const page = await target.page();
    if (!page) {
      throw new Error('Page is not found');
    }
    if (this.#defaultViewport) {
      await page.setViewport(this.#defaultViewport).catch(debugError);
    }

    return page;
  }

  override async close(): Promise<void> {
    this[Symbol.dispose]();
  }

  override browser(): BidiBrowser {
    return this.#browser;
  }

  override async pages(): Promise<BidiPage[]> {
    const results = await Promise.all(
      [...this.targets()].map(t => {
        return t.page();
      })
    );
    return results.filter((p): p is BidiPage => {
      return p !== null;
    });
  }

  override isIncognito(): boolean {
    return !this.#isDefault;
  }

  override overridePermissions(): never {
    throw new UnsupportedOperation();
  }

  override clearPermissionOverrides(): never {
    throw new UnsupportedOperation();
  }

  [Symbol.dispose](): void {
    // TODO: Implement disposed flag.
    if (this.#isDefault) {
      throw new Error('Default context cannot be closed!');
    }
    const index = this.#browser._browserContexts.findIndex(candidate => {
      return candidate === this;
    });
    assert(index >= 0);
    this.#browser._browserContexts.splice(index, 1);
    for (const target of this.#targets.values()) {
      target[Symbol.dispose]();
    }
  }
}
