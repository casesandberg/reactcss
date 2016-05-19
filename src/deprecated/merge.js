'use strict';

import mrg from 'merge';
import _ from 'lodash';

const merge = (toMerge) => {

  // If its an object, lets just return it
  if (_.isObject(toMerge) && !_.isArray(toMerge)) {
    return toMerge;
  }

  // If the array only has one object in it, return it
  if (toMerge.length === 1) {
    return toMerge[0];
  }

  // Else, lets just use the merge.js function:
  return mrg.recursive.apply(this, toMerge);

};

export default merge;
