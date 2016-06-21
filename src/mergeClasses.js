'use strict'

import map from 'lodash/map'

export const mergeClasses = (classes, activeNames = []) => {
  const styles = classes.default && Object.assign({}, classes.default) || {}
  activeNames.map((name) => {
    const toMerge = classes[name]
    if (!!toMerge) {
      map(toMerge, (value, key) => {
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
