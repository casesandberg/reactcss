/* eslint no-console: 0 */

import map from 'lodash/map'
import isObject from 'lodash/isObject'

export const checkClassStructure = (classes) => {
  map(classes, (elements, className) => {
    if (classes.hasOwnProperty(className)) {
      if (!isObject(elements)) {
        console.warn(`Make sure the value of \`${ className }\` is an object of
          html elements. You passed it \`${ elements }\``)
      } else {
        map(elements, (css, elementName) => {
          if (elements.hasOwnProperty(elementName)) {
            if (!isObject(css)) {
              console.warn(`Make sure the value of the element \`${ className }\`
                is an object of css. You passed it \`${ elements }\``)
            }
          }
        })
      }
    }
  })
}

export default checkClassStructure
