'use strict'

React = require('react')
css = require('reactcss')


context =
  primaryColor: '#2196F3'
  accentColor: '#E91E63'
  theme: 'light'


class Tab extends React.Component
  css: css.inline

  @propTypes =
    selected: React.PropTypes.bool

  @defaultProps =
    selected: false
    color: '#fff'

  classes: ->
    'default':
      tab:
        color: @props.color
        cursor: 'pointer'
        paddingLeft: '12px'
        paddingRight: '12px'
        height: '48px'
        lineHeight: '48px'
        textAlign: 'center'
        fontSize: '14px'
        textTransform: 'uppercase'
        fontWeight: '500'
        whiteSpace: 'nowrap'
        opacity: '.47'
        transition: 'opacity 100ms linear'

    'public':
      tab: {}


    'selected':
      tab:
        opacity: '.87'

  styles: -> @css()


  handleClick: => @props.onClick(@props.tab) if @props.selectable isnt false

  render: ->
    <div is="tab" onClick={ @handleClick }>{ @props.children }</div>


module.exports = Tab
