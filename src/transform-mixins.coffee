'use strict'

_ = require('lodash')
merge = require('merge')



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


transform = (styleObject, customFuncs, parent) ->

  # These custom props will eventually live in a file or config somewhere
  customProps = merge(customFuncs, localProps)
  obj = {}

  for key, value of styleObject

    # If its an object
    if _.isObject(value) and not _.isArray(value)
      # Lets go ahead and run again
      obj[key] = transform(value, customFuncs, styleObject)

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


module.exports = (styleObject, customFuncs, parent) -> transform(styleObject, customFuncs, parent)
