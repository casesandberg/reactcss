'use strict'

React = require('react')
ReactCSS = require('reactcss')

Container = require('../layout/Container')
Particles = require('./Particles')



module.exports = class HomeFeature extends ReactCSS.Component

  classes: ->
    'default':
      homeFeature:
        background: '#4A90E2'
        height: '100%'

      inside:
        textAlign: 'center'

      headline:
        paddingTop: '120px'
        fontSize: '34px'
        color: 'rgba(255, 255, 255, .87)'
        WebkitFontSmoothing: 'antialiased'

      install:
        marginTop: '60px'
        display: 'inline-block'
        padding: '0 18px'
        height: '54px'
        lineHeight: '54px'
        boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, .87)'
        borderRadius: '4px'
        fontSize: '20px'
        color: 'rgba(255, 255, 255, .87)'
        fontWeight: '200'

      dollar:
        paddingRight: '10px'
        color: 'rgba(255, 255, 255, .27)'

      particles:
        Absolute: 'auto 0 0 0'
        height: '130px'

  render: ->
    <div is="homeFeature">

      <Container>

        <div is="inside">

          <div is="headline">Bringing Classes back to Inline Styles</div>

          <div is="install">
            <span is="dollar">$</span>
            npm install reactcss
          </div>

        </div>

      </Container>

      <div is="particles">
        <Particles />
      </div>

    </div>
