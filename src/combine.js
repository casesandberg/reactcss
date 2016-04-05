'use strict';

import merge from './merge';
import mixins from './transform-mixins';
import _ from 'lodash';

export let combine = (styles, customMixins) => {
  const merged = merge(styles);
  return mixins(merged, customMixins);
};

combine = _.memoize(combine);

export default combine;
