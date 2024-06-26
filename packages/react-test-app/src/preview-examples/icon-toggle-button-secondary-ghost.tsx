/*
 * SPDX-FileCopyrightText: 2024 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IxIconToggleButton } from '@siemens/ix-react';
import React from 'react';

export default () => {
  return (
    <>
      <IxIconToggleButton ghost></IxIconToggleButton>
      <IxIconToggleButton pressed ghost></IxIconToggleButton>
      <IxIconToggleButton disabled ghost></IxIconToggleButton>
      <IxIconToggleButton disabled loading ghost></IxIconToggleButton>
    </>
  );
};
