'use strict'

merge = require('./merge')
mixins = require('./transform-mixins')



###
Do all the css things
@param styles: An array of style objects
@param customMixins: Object of custom mixins
@returns object
###
module.exports = (styles, customMixins) ->
  merged = merge(styles)
  return mixins(merged, customMixins)
