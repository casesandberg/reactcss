'use strict'

import Component from './deprecated/Component'
export hover from './components/hover'
import flattenNames from './flattenNames'
import mergeClasses from './mergeClasses'
import autoprefix from './autoprefix'

export const ReactCSS = (classes, ...activations) => {
  const activeNames = flattenNames(activations)
  const merged = mergeClasses(classes, activeNames)
  return autoprefix(merged)
}

ReactCSS.Component = Component
ReactCSS.m = Object.assign

export default ReactCSS
