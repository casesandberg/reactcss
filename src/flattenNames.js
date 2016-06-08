'use strict'

import _ from 'lodash'

export const flattenNames = (things) => {
  const names = []

  things.map((thing) => {
    _.isArray(thing) && flattenNames(thing).map((name) => names.push(name))
    _.isPlainObject(thing) && _.map(thing, (value, key) => {
      value === true && names.push(key)
      names.push(`${ key }-${ value }`)
    })
    _.isString(thing) && names.push(thing)
    return thing
  })

  return names
}

export default flattenNames
