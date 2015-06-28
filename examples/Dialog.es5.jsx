'use strict';

var React = require('react')
var ReactCSS = require('reactcss');

var Button = require('./Button.es5');



module.exports = React.createClass({
  mixins: [ ReactCSS.mixin ],

  classes: function(){
    return {
      'default': {
        dialog: {
          background: '#fff',
          boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)',
          borderRadius: '2px',
          maxWidth: '400px'
        },
        body: {
          padding: '24px'
        },
        title: {
          fontSize: '20px',
          fontWeight: '500',
          paddingBottom: '20px',
          color: 'rgba(0,0,0,.87)'
        },
        desc: {
          fontSize: '17px',
          lineHeight: '22px',
          color: 'rgba(0,0,0,.47)',
          margin: '0'
        },
        actions: {
          margin: '0',
          padding: '8px',
          display: 'flex',
          justifyContent: 'flex-end',
          listStyleType: 'none'
        },
        button: {
          marginLeft: '8px'
        },
        CancelButton: {
          background: 'red'
        }
      },
      'disabled-true': {
        AgreeButton: {
          disabled: true
        }
      }
    }
  },

  styles: function(){
    return this.css()
  },

  render: function(){
    return (
      <div is="dialog">
        <div is="body">
          <div is="title">{ this.props.title }</div>
          <p is="desc">{ this.props.description }</p>
        </div>
        <ul is="actions">
          <li is="button"><Button is="CancelButton" label="Cancel" /></li>
          <li is="button"><Button is="AgreeButton" label="Yes, I Agree" /></li>
        </ul>
      </div>
    )
  }
});
