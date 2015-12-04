'use strict';

import _ from 'lodash';

export const checkClassStructure = (classes) => {

  for (var className in classes) {
    var elements = classes[className];
    if (!_.isObject(elements)) {
      console.warn(`Make sure the value of \`${ className }\` is an object of html elements. You passed it \`${ elements }\``);
    } else {

      for (var elementName in elements) {
        var css = elements[elementName];
        if (!_.isObject(css)) {
          console.warn(`Make sure the value of the element \`${ className }\` is an object of css. You passed it \`${ elements }\``);
        }
      }
    }
  }
};

export default checkClassStructure;
