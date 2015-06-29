'use strict'

React = require('react')
ReactCSS = require('reactcss')

Container = require('../layout/Container')
Animate = require('../common/Animate')



module.exports = class DocsFeature extends ReactCSS.Component

  classes: ->
    'default':
      docsFeature:
        background: '#49535B'
        height: '100%'

      title:
        paddingTop: '130px'
        paddingLeft: '27.25%'
        marginLeft: '20px'
        fontSize: '34px'
        color: 'rgba(255, 255, 255, .87)'
        WebkitFontSmoothing: 'antialiased'

  render: ->
    <div is="docsFeature">
      <Container>

        <Animate>
          <div is="title">Documentation</div>
        </Animate>

      </Container>
    </div>
