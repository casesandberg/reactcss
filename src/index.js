import objectAssign from 'object-assign'

import flattenNames from './flattenNames'
import mergeClasses from './mergeClasses'
import autoprefix from './autoprefix'

export hover from './components/hover'
export handleHover from './components/hover'
export handleActive from './components/active'
export loop from './loop'

export const ReactCSS = (classes, ...activations) => {
  const activeNames = flattenNames(activations)
  const merged = mergeClasses(classes, activeNames)
  return autoprefix(merged)
}

ReactCSS.m = objectAssign

export default ReactCSS
