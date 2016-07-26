'use strict'

import map from 'lodash/map'
import isPlainObject from 'lodash/isPlainObject'
import isString from 'lodash/isString'

export const flattenNames = (things) => {
  const names = []

  things.map((thing) => {
    Array.isArray(thing) && flattenNames(thing).map((name) => names.push(name))
    isPlainObject(thing) && map(thing, (value, key) => {
      value === true && names.push(key)
      names.push(`${ key }-${ value }`)
    })
    isString(thing) && names.push(thing)
    return thing
  })

  return names
}

export default flattenNames
