import _ from 'lodash'

export const flattenNames = (things = []) => {
  const names = []

  _.map(things, (thing) => {
    if (Array.isArray(thing)) {
      flattenNames(thing).map(name => names.push(name))
    } else if (_.isPlainObject(thing)) {
      _.forOwn(thing, (value, key) => {
        value === true && names.push(key)
        names.push(`${ key }-${ value }`)
      })
    } else if (_.isString(thing)) {
      names.push(thing)
    }
  })

  return names
}

export default flattenNames
