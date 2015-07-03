'use strict'

React = require('react')
ReactCSS = require('reactcss')



module.exports = class Feature extends ReactCSS.Component

  classes: ->
    'default':
      feature:
        height: '440px'
        position: 'relative'

  render: ->
    <div is="feature">{ React.createElement(@props.component) }</div>
