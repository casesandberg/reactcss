'use strict'

const merge = require('./merge-classes')
const mixins = require('./transform-mixins')

module.exports = (styles, customMixins) => {
  const merged = merge(styles)
  return mixins(merged, customMixins)
}
