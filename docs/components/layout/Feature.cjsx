'use strict'

React = require('react')
ReactCSS = require('reactcss')

HomeFeature = require('../home/HomeFeature')
DocsFeature = require('../docs/DocsFeature')



module.exports = class Feature extends ReactCSS.Component

  classes: ->
    'default':
      feature:
        height: '440px'
        position: 'relative'

  render: ->
    <div is="feature">
      { if @props.display is 'about'
          <HomeFeature />
        else if @props.display is 'documentation'
          <DocsFeature /> }
    </div>
