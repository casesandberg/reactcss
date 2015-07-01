'use strict'

React = require('react')
ReactCSS = require('reactcss')



module.exports = class Body extends ReactCSS.Component

  classes: ->
    'default':
      body: {}

  render: ->
    <div is="body">
      <style>{'
        .flexbox-fix {
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
        }
      '}</style>

      { React.createElement(@props.component) }
    </div>
