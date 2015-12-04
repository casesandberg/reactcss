'use strict';

import merge from './merge';
import mixins from './transform-mixins';

module.exports = (styles, customMixins) => {
  const merged = merge(styles);
  return mixins(merged, customMixins);
};
