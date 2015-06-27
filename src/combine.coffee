'use strict'

merge = require('./merge')
mixins = require('./transform-mixins')



###
Do all the css things
@param styles: An array of style objects
@returns object
###
module.exports = (styles) ->
  merged = merge(styles)
  return mixins(merged)
