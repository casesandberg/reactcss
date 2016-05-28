```javascript
---
fileName: After.jsx
---
var React = require('react');
var ReactCSS = require('reactcss');

class Button extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        button: {
          background: '#4A90E2'
        },
        Icon: {
          fill: '#fff',
          name: this.props.icon
        }
      },
      'disabled-true': {
        button: {
          background: '#bbb'
        },
        span: {
          color: '#999'
        },
        Icon: {
          fill: '#999'
        }
      }
    }
  }

  render() {
    return (
      <div is="button">
        <Icon is="Icon" />
        <span is="span">
          { this.props.label }
        </span>
      </div>
    )
  }
}
```
