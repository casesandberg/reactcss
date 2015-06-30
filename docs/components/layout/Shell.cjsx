'use strict'

React = require('react')
ReactCSS = require('reactcss')

Header = require('./Header')
Feature = require('./Feature')
Body = require('./Body')



module.exports = class Shell extends ReactCSS.Component

  state:
    mobile: false

  @childContextTypes:
    mobile: React.PropTypes.bool

  getChildContext: ->
    mobile: @state.mobile

  componentWillMount: ->
    @handleResize()

  componentDidMount: ->
    window.addEventListener('resize', @handleResize, false)

  componentWillUnmount: ->
    window.removeEventListener('resize', @handleResize, false)

  handleResize: =>
    if document.body.clientWidth <= 700 && @state.mobile is false
      @setState( mobile: true )

    if document.body.clientWidth > 701 && @state.mobile is true
      @setState( mobile: false )

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

  render: ->
    <div is="shell">
      <div is="header">
        <Header display={ @props.nav } />
      </div>
      <Feature component={ @props.feature } />
      <div is="body">
        <Body component={ @props.body } />
      </div>
    </div>
