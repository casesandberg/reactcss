```javascript
---
fileName: Before.jsx
---
var React = require('react');
var merge = require('merge');

class Button extends React.Component {

  render() {
    var style = {
      button: {
        background: '#4A90E2'
      },
      Icon: {
        fill: '#fff'
      },
      disButton: {
        background: '#bbb'
      },
      disSpan: {
        color: '#999'
      },
      disIcon: {
        fill: '#999'
      }
    }
    var iconProps = style.Icon;
    if (this.props.disabled) {
      iconProps = merge( style.Icon,
        style.disIcon )
    }

    return (
      <div style={ merge( style.button,
      this.props.disabled && style.disButton)}>
        <Icon {...iconProps }
          name={ this.props.icon } />
        <span style={ this.props.disabled &&
          style.disSpan }>
          { this.props.label }
        </span>
      </div>
    )
  }
}
```
