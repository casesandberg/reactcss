'use strict'

import isObject from 'lodash/isObject'
import checkClassStructure from './check-class-structure'
import combine from './combine'

/*
  Inline CSS function. This is the half-way point until multiple inheritance exists
  @param declaredClasses: Object{ 'class-name': true / false }
  @returns object
*/

module.exports = function (declaredClasses) {

  const arrayOfStyles = []

  if (!this.classes) {
    throw console.warn(`Define this.classes on \`${ this.constructor.name }\``)
  }

  // Checks structure and warns if its odd
  checkClassStructure(this.classes())

  const activateClass = (name, options) => {
    if (this.classes()[name]) {
      arrayOfStyles.push(this.classes()[name])
    } else if (name && options && options.warn === true) {
      console.warn(`The \`${ name }\` css class does not exist on \`${ this.constructor.name }\``)
    }
  }

  activateClass('default')

  for (var prop in this.props) {
    let value = this.props[prop]
    if (!isObject(value)) {

      if (value === true) {
        activateClass(prop)
        activateClass(`${ prop }-true`)
      } else if (value) {
        activateClass(`${ prop }-${ value }`)
      } else {
        activateClass(`${ prop }-false`)
      }

    }
  }

  // React Bounds
  // http://casesandberg.github.io/react-bounds/
  // Activate classes that match active bounds
  if (this.props && this.props.activeBounds) {
    for (var i = 0; i < this.props.activeBounds.length; i++) {
      var boundName = this.props.activeBounds[i]
      activateClass(boundName)
    }
  }

  for (var name in declaredClasses) {
    let condition = declaredClasses[name]

    if (condition === true) {
      activateClass(name, { warn: true })
    }
  }

  let customMixins = {}
  if (this.context && this.context.mixins) {
    customMixins = this.context.mixins
  }

  return combine(arrayOfStyles, customMixins)
}
