'use strict'

React = require('react')
inline = require('./inline')


module.exports = class ReactCSSComponent extends React.Component
  css: (obj) -> inline.call(@, obj)
  styles: -> @css()
