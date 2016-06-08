'use strict'

import merge from './merge'
import mixins from './transform-mixins'

export const combine = (styles, customMixins) => {
  const merged = merge(styles)
  return mixins(merged, customMixins)
}

export default combine
