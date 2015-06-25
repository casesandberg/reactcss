---
id: getting-started
title: Getting Started

---
Start by installing `reactcss` via npm
```
npm install reactcss --save
```
Testing out a way longer line here:
``` fileName:Button.cjsx
var ReactCSS = require('reactcss');

var Button = React.createClass({
  mixin: [ ReactCSS.mixin ];

  classes: function(){
    'default': {
      button: {
        background: '#4A90E2'
      },
      Icon: {
        fill: '#fff'
      }
    },
    'disabled-true': {
      button: {
        background: '#bbb'
      }
      span: {
        color: '#999'
      }
      Icon: {
        fill: '#999'
      }
    }
  };

  render: function(){
    <div is="button">
      <Icon is="Icon" name={ this.props.icon }>
      <span is="span">
        { this.props.label }
      </span>
    </div>
  };
});
```
