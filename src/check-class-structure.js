'use strict';

const _ = require('lodash');

module.exports = (classes) => {

  for (var className in classes) {
    var elements = classes[className];
    if (!_.isObject(elements)) {
      console.warn("Make sure the value of `#{ className }` is an object of html elements. You passed it `#{ elements }`");
    } else {

      for (var elementName in elements) {
        var css = elments[elementName];
        if (!_isObject(css)) {
          console.warn("Make sure the value of the element `#{ className }` is an object of css. You passed it `#{ elements }`");
        }
      }
    }
  }
};
