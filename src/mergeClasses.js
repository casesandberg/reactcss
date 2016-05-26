'use strict'

import _ from 'lodash'

export const mergeClasses = (classes, activeNames = []) => {
  const styles = classes.default && Object.assign({}, classes.default) || {}
  activeNames.map((name) => {
    const toMerge = classes[name]
    if (!!toMerge) {
      _.map(toMerge, (value, key) => {
        if (!styles[key]) {
          styles[key] = {}
        }

        Object.assign(styles[key], toMerge[key])
      })
    }

    return name
  })
  return styles
}

export default mergeClasses
