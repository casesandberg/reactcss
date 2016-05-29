'use strict'

React = require('react')
reactCSS = require('reactcss')

module.exports = class Ink extends React.Component

  @defaultProps =
    color: 'dark'

  handleClick: (e) =>
    left = Math.round(e.clientX - e.currentTarget.getBoundingClientRect().left)
    top = Math.round(e.clientY - e.currentTarget.getBoundingClientRect().top)
    size = Math.max(e.currentTarget.clientWidth, e.currentTarget.clientHeight)

    ripple = @refs.ripple

    ripple.style.left = left
    ripple.style.top = top
    ripple.style.width = size * 2
    ripple.style.height = size * 2
    ripple.style.transform = 'translate(-50%, -50%) scale(1)'
    ripple.style.opacity = '0'

    setTimeout (=>
      ripple.style.transform = 'translate(-50%, -50%) scale(0)'

      setTimeout (=>
        ripple.style.opacity = 1
        ), 400
      ), 400

  render: ->
    styles = reactCSS.default({
      'default':
        ink:
          position: 'relative'
          cursor: 'pointer'
          overflow: 'hidden'

        ripple:
          position: 'absolute'
          width: '10px'
          height: '10px'
          transform: 'translate(-50%, -50%) scale(0)'
          transition: 'transform 400ms cubic-bezier(.55,0,.3,1), opacity 200ms 200ms linear'
          borderRadius: '50%'
          opacity: '1'

      'color-dark':
        ripple:
          background: 'rgba(0,0,0,.1)'

      'color-light':
        ripple:
          background: 'rgba(255,255,255,.15)'
    }, @props)

    <div style={ styles.ink } onClick={ @handleClick }>
      <div style={ styles.ripple } ref="ripple" />
      { @props.children }
    </div>
