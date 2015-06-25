'use strict'

React = require('react')
ReactCSS = require('reactcss')



module.exports = class Container extends ReactCSS.Component

  classes: ->
    'default':
      cotainer:
        maxWidth: '880px'
        padding: '0 14px'
        margin: '0 auto'

  render: ->
    <div is="cotainer">{ @props.children }</div>
