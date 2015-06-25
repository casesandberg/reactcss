'use strict'

React = require('react')
ReactCSS = require('reactcss')



module.exports = class Test extends ReactCSS.Component

  classes: ->
    'default':
      body:
        background: '#aeee00'
        color: '#333'

  render: ->
    <div is="body">Test!</div>
