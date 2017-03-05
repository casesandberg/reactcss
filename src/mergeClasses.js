import _ from 'lodash'

export const mergeClasses = (classes, activeNames = []) => {
  const styles = (classes.default && _.cloneDeep(classes.default)) || {}
  activeNames.map((name) => {
    const toMerge = classes[name]
    if (toMerge) {
      _.forOwn(toMerge, (value, key) => {
        if (!styles[key]) {
          styles[key] = {}
        }

        styles[key] = { ...styles[key], ...toMerge[key] }
      })
    }

    return name
  })
  return styles
}

export default mergeClasses
