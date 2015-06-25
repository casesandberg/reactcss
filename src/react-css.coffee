'use strict'

React = require('react')
merge = require('merge')
_ = require('lodash')

checkClassStructure = require('../src/check-class-structure')


###
CSS in React
###
css = (styles) -> _css(styles)
css.merge = (styles) -> _merge(styles)
css.mixins = (css, customFuncs) -> _mixins(css, customFuncs)
css.resolve = -> _resolve.apply @, arguments
# css.mixin is down below

css.Component = class ReactCSSComponent extends React.Component
  css: (obj) -> css.inline.call(@, obj)

  styles: -> @css()



###
Inline CSS function. This is the half-way point until multiple inheritance exists
@param declaredClasses: Object{ 'class-name': true / false }
@returns object
###

css.inline = (declaredClasses) ->
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

  return _css(arrayOfStyles)



###
Do all the css things
@param styles: An array of style objects
@returns object
###
_css = (styles) ->
  merged = _merge(styles)
  return _mixins(merged)



###
Step through a style object and replace any custom properties as defined
@param styleObject: An object of styles
@param customFuncs: An object of functions that
@param parent: An object of the styles the next level up
@returns object
###
_mixins = (styleObject, customFuncs, parent) ->

  # These custom props will eventually live in a file or config somewhere
  customProps = customFuncs || localProps
  obj = {}

  for key, value of styleObject

    # If its an object
    if _.isObject(value) and not _.isArray(value)
      # Lets go ahead and run again
      obj[key] = _mixins(value, customFuncs, styleObject)

    else
      # Check to see if a custom prop exists for it
      if customProps[key]?
        # let loop though and save the results from the function
        customResults = customProps[key](value, parent)
        for customKey, customValue of customResults
          obj[customKey] = customValue

      # If not, just copy it as-is
      else
        obj[key] = value


  return obj



###
Merges an array of objects together
@param thingsToBeMerged: An array of things to be merged
@returns object
###
_merge = (thingsToBeMerged) ->

  # If its an object, lets just return it
  if _.isObject(thingsToBeMerged) and not _.isArray(thingsToBeMerged)
    return thingsToBeMerged

  # If the array only has one object in it, return it
  if thingsToBeMerged.length is 1
    return thingsToBeMerged[0]

  # Else, lets just use the merge.js function:
  return merge.recursive.apply @, thingsToBeMerged



###
Look through any number of arguments and always returns the last one defined.
@param defaultValue: The default "base" value
@param possibleValues...: Unlimited number of function arguments
@returns object
###
_resolve = (defaultValue, possibleValues...) ->
  valueToReturn = defaultValue

  for possibleValue in possibleValues
    if possibleValue
      valueToReturn = possibleValue

  return valueToReturn



###
Custom Props for the _mixins function
These custom props will eventually live in a file or config somewhere
###
localProps =
  borderRadius: (value) ->
    if value?
      msBorderRadius: value
      MozBorderRadius: value
      OBorderRadius: value
      WebkitBorderRadius: value
      borderRadius: value

  boxShadow: (value) ->
    if value?
      msBoxShadow: value
      MozBoxShadow: value
      OBoxShadow: value
      WebkitBoxShadow: value
      boxShadow: value

  transition: (value) ->
    if value?
      msTransition: value
      MozTransition: value
      OTransition: value
      WebkitTransition: value
      transition: value

  transform: (value) ->
    if value?
      msTransform: value
      MozTransform: value
      OTransform: value
      WebkitTransform: value
      transform: value

  Absolute: (value) ->
    if value?
      direction = value.split(" ")
      result =
        position: 'absolute'
        top: direction[0]
        right: direction[1]
        bottom: direction[2]
        left: direction[3]

  Extend: (name, otherElementStyles) ->
    if otherElementStyles[name]
      otherElementStyles[name]


# Export it all
module.exports = css



# Stupid hack until I get gulp amd to work
define = ->
