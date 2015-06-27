'use strict'

React = require('react')
ReactCSS = require('reactcss')

Header = require('./Header')
Feature = require('./Feature')
Body = require('./Body')



module.exports = class Shell extends ReactCSS.Component

  state:
    selectedRoute: 'documentation' # about | documentation

  classes: ->
    'default':
      shell:
        fontFamily: 'Roboto'
        background: '#eee'
        minHeight: '100%'

      header:
        zIndex: '2'
        Absolute: '0 0 auto 0'

      body:
        position: 'relative'
        zIndex: '2'

  handleChange: (newRoute) => @setState( selectedRoute: newRoute )

  render: ->
    <div is="shell">
      <div is="header">
        <Header onChange={ @handleChange } display={ @state.selectedRoute } />
      </div>
      <Feature display={ @state.selectedRoute } />
      <div is="body">
        <Body display={ @state.selectedRoute } />
      </div>
    </div>
