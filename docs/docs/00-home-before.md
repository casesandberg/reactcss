```javascript
---
fileName: Before.jsx
---
var merge = require('merge');

class Button extends React.Component {

  render() {
    var styles = {
      button: {
        background: '#4A90E2'
      },
      Icon: {
        fill: '#fff'
      },
      disabledButton: {
        background: '#bbb'
      },
      disabledSpan: {
        color: '#999'
      },
      disabledIcon: {
        fill: '#999'
      }
    }
    var iconProps = styles.Icon;
    if (this.props.disabled) {
      iconProps = merge( styles.Icon,
        styles.disabledIcon )
    }

    return (
      <div style={ merge( styles.button,
        this.props.disabled && styles.disabledButton )}>
        <Icon {...iconProps }
          name={ this.props.icon } />
        <span style={ this.props.disabled &&
          styles.disabledSpan }>
          { this.props.label }
        </span>
      </div>
    )
  }
}
```
