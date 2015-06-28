'use strict';

var React = require('react')
var ReactCSS = require('reactcss');



module.exports = React.createClass({
  mixins: [ ReactCSS.mixin ],

  getDefaultProps: function() {
    return {
      background: '#4A90E2',
      color: 'rgba(255,255,255,.87)'
    }
  },

  classes: function(){
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
  },

  styles: function(){
    return this.css()
  },

  render: function(){
    return (
      <div is="button">
        <span is="span">{ this.props.label }</span>
      </div>
    )
  }
});
