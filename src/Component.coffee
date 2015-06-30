'use strict'

React = require('react')
inline = require('./inline')


module.exports = class ReactCSSComponent extends React.Component
  # For New Mixins
  @contextTypes:
    mixins: React.PropTypes.object
    
  css: (obj) -> inline.call(@, obj)
  styles: -> @css()
