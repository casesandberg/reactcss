_ = require('lodash')



module.exports = (classes) ->

  for className, elements of classes
    if not _.isObject(elements)
      console.warn("Make sure the value of `#{ className }` is an object of html elements. You passed it `#{ elements }`")
    else

      for elementName, css of elements
        if not _.isObject(css)
          console.warn("Make sure the value of the element `#{ className }` is an object of css. You passed it `#{ elements }`")
