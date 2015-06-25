'use strict'

React = require('react')
ReactCSS = require('reactcss')

HomeBody = require('../home/HomeBody')
DocsBody = require('../docs/DocsBody')



module.exports = class Body extends ReactCSS.Component

  classes: ->
    'default':
      body: {}

  render: ->
    <div is="body">
      { if @props.display is 'about'
          <HomeBody />
        else if @props.display is 'documentation'
          <DocsBody /> }
    </div>
