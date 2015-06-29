'use strict'

React = require('react')
ReactCSS = require('reactcss')



module.exports = class Body extends ReactCSS.Component

  classes: ->
    'default':
      body: {}

  render: ->
    <div is="body">{ React.createElement(@props.component) }</div>
