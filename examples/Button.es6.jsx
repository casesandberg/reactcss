'use strict';

var React = require('react')
var ReactCSS = require('reactcss');



class Button extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        button: {
          background: this.props.background,
          display: 'inline-block',
          height: '44px',
          lineHeight: '44px',
          borderRadius: '2px'
        },
        span: {
          color: this.props.color,
          padding: '0 14px'
        }
      },
      'disabled-true': {
        button: {
          background: '#ccc'
        },
        span: {
          color: '#aaa'
        }
      }
    }
  }

  render() {
    return (
      <div is="button">
        <span is="span">{ this.props.label }</span>
      </div>
    )
  }
}

Button.defaultProps = {
  background: '#4A90E2',
  color: 'rgba(255,255,255,.87)'
}

module.exports = Button
