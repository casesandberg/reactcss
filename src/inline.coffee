'use strict'

_ = require('lodash')
checkClassStructure = require('../src/check-class-structure')
combine = require('./combine')



###
Inline CSS function. This is the half-way point until multiple inheritance exists
@param declaredClasses: Object{ 'class-name': true / false }
@returns object
###

module.exports = (declaredClasses) ->
  # What?
  combine = require('./combine')

  arrayOfStyles = []

  if not @classes?
    throw console.warn "Define this.classes on `#{ @constructor.name }`"

  # Checks structure and warns if its odd
  checkClassStructure(@classes())

  activateClass = (name, options) =>
    if @classes()[name]?
      arrayOfStyles.push(@classes()[name])
    else if name and options?.warn is true
      console.warn "The `#{name}` css class does not exist on `#{@constructor.name}`"

  activateClass('default')

  for prop, value of @props when not _.isObject(value)
    if value is true
      activateClass(prop)
      activateClass("#{ prop }-true")
    else if value
      activateClass("#{ prop }-#{ value }")
    else
      activateClass("#{ prop }-false")

  for name, condition of declaredClasses when condition is true
    activateClass(name, warn:true)

  activateClass('public')

  customMixins = {}
  if @context?.mixins
    customMixins = @context.mixins

  return combine(arrayOfStyles, customMixins)
