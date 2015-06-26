'use strict'

React = require('react')
ReactCSS = require('reactcss')

Container = require('../layout/Container')



module.exports = class DocsFeature extends ReactCSS.Component

  classes: ->
    'default':
      docsFeature:
        background: '#49535B'
        height: '100%'

      title:
        paddingTop: '120px'
        paddingLeft: '240px'
        fontSize: '34px'
        color: 'rgba(255, 255, 255, .87)'
        WebkitFontSmoothing: 'antialiased'

  render: ->
    <div is="docsFeature">
      <Container>

        <div is="title">Documentation</div>

      </Container>
    </div>
