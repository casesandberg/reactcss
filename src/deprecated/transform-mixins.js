'use strict'

import isObject from 'lodash/isObject'
import merge from 'merge'

/*
  Custom Props for the _mixins function
  These custom props will eventually live in a file or config somewhere
*/

const localProps = {
  borderRadius: value => {
    if (value !== null) {
      return {
        msBorderRadius: value,
        MozBorderRadius: value,
        OBorderRadius: value,
        WebkitBorderRadius: value,
        borderRadius: value,
      }
    }
  },

  boxShadow: value => {
    if (value !== null) {
      return {
        msBoxShadow: value,
        MozBoxShadow: value,
        OBoxShadow: value,
        WebkitBoxShadow: value,
        boxShadow: value,
      }
    }
  },

  userSelect: value => {
    if (value !== null) {
      return {
        WebkitTouchCallout: value,
        KhtmlUserSelect: value,
        MozUserSelect: value,
        msUserSelect: value,
        WebkitUserSelect: value,
        userSelect: value,
      }
    }
  },

  flex: value => {
    if (value !== null) {
      return {
        WebkitBoxFlex: value,
        MozBoxFlex: value,
        WebkitFlex: value,
        msFlex: value,
        flex: value,
      }
    }
  },

  flexBasis: value => {
    if (value !== null) {
      return {
        WebkitFlexBasis: value,
        flexBasis: value,
      }
    }
  },

  justifyContent: value => {
    if (value !== null) {
      return {
        WebkitJustifyContent: value,
        justifyContent: value,
      }
    }
  },

  transition: value => {
    if (value !== null) {
      return {
        msTransition: value,
        MozTransition: value,
        OTransition: value,
        WebkitTransition: value,
        transition: value,
      }
    }
  },

  transform: value => {
    if (value !== null) {
      return {
        msTransform: value,
        MozTransform: value,
        OTransform: value,
        WebkitTransform: value,
        transform: value,
      }
    }
  },

  Absolute: value => {
    if (value !== null) {
      const direction = value.split(' ')
      return {
        position: 'absolute',
        top: direction[0],
        right: direction[1],
        bottom: direction[2],
        left: direction[3],
      }
    }
  },

  Extend: (name, otherElementStyles) => {
    const otherStyle = otherElementStyles[name]
    if (otherStyle) {
      return otherStyle
    }
  },

}

const transform = (styleObject, customFuncs, parent) => {

  const customProps = merge(customFuncs, localProps)
  const obj = {}

  for (var key in styleObject) {
    var value = styleObject[key]

    // If its an object
    if (isObject(value) && !Array.isArray(value)) {
      // Lets go ahead and run again
      obj[key] = transform(value, customFuncs, styleObject)
    } else {
      // Check to see if a custom prop exists for it
      if (customProps[key]) {
        // let loop though and save the results from the function
        var customResults = customProps[key](value, parent)
        for (var customKey in customResults) {
          var customValue = customResults[customKey]
          obj[customKey] = customValue
        }
      } else {
        // If not, just copy it as-is
        obj[key] = value
      }
    }
  }

  return obj
}

module.exports = (styleObject, customFuncs, parent) => transform(styleObject, customFuncs, parent)
