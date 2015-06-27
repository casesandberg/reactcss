'use strict'

React = require('react')
ReactCSS = require('reactcss')



module.exports = class Animate extends ReactCSS.Component

  @defaultProps =
    inStartOpacity: '0'
    inStartTransform: ''
    inStartTransition: 'all 400ms cubic-bezier(.55,0,.1,1)'

    inEndOpacity: '1'
    inEndTransform: ''
    inEndTransition: 'all 400ms cubic-bezier(.55,0,.1,1)'

    inDelay: 0

  classes: ->
    'default':
      outer:
        opacity: @props.inStartOpacity
        transform: @props.inStartTransform
        transition: @props.inStartTransition

  componentDidMount: ->
    animate = React.findDOMNode( @refs.outer )

    setTimeout (=>
      animate.style.opacity = @props.inEndOpacity
      animate.style.transform = @props.inEndTransform
      animate.style.transition = @props.inEndTransition
      ), @props.inDelay

  # componentWillUnmount: ->
  #   React.findDOMNode( @refs.outer ).style.opacity = '0'

  render: ->
    <div is="outer" ref="outer">{ @props.children }</div>
