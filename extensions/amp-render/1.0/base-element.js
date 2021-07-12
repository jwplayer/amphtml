/**
 * Copyright 2021 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {PreactBaseElement} from '#preact/base-element';
import {Render} from './component';

export class BaseElement extends PreactBaseElement {}

/** @override */
BaseElement['Component'] = Render;

/** @override */
BaseElement['props'] = {
  'src': {attr: 'src'},
};

/** @override */
BaseElement['usesTemplate'] = true;

/** @override */
BaseElement['lightDomTag'] = 'div';

/** @override */
BaseElement['layoutSizeDefined'] = true;