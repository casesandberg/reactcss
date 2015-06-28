'use strict';

var React = require('react')
var ReactCSS = require('reactcss');



module.exports = React.createClass({
  // Include the ReactCSS.mixin as a mixin
  mixins: [ ReactCSS.mixin ],

  getDefaultProps: function() {
    return {
      // Set a fallback backgound and color if one isnt specified
      background: '#4A90E2',
      color: 'rgba(255,255,255,.87)'
    }
  },

  classes: function(){
    return {
      // This is our default button class
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
      // This class activates when `disabled: true` is passed as props
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

  // This is necessary to make all the classes auto-activate
  styles: function(){
    return this.css()
  },

  render: function(){
    return (
      // You will notice the is syntax here, via `react-map-styles` package
      // This handles mapping the styles to the elements
      <div is="button">
        <span is="span">{ this.props.label }</span>
      </div>
    )
  }
});
