'use strict'

import mrg from 'merge'
import isObject from 'lodash/isObject'

const merge = (toMerge) => {
  // If its an object, lets just return it
  if (isObject(toMerge) && !Array.isArray(toMerge)) {
    return toMerge
  }

  // If the array only has one object in it, return it
  if (toMerge.length === 1) {
    return toMerge[0]
  }

  // Else, lets just use the merge.js function:
  return mrg.recursive.apply(this, toMerge)
}

export default merge
