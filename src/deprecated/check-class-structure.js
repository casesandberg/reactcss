/* eslint no-console: 0 */

import _ from 'lodash'

export const checkClassStructure = (classes) => {
  _.map(classes, (elements, className) => {
    if (classes.hasOwnProperty(className)) {
      if (!_.isObject(elements)) {
        console.warn(`Make sure the value of \`${ className }\` is an object of
          html elements. You passed it \`${ elements }\``)
      } else {
        _.map(elements, (css, elementName) => {
          if (elements.hasOwnProperty(elementName)) {
            if (!_.isObject(css)) {
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
