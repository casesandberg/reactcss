# [ReactCSS](http://reactcss.com/)

* **"Pop" classes on and off:** Use a class-based data structure, similar to traditional modifier css, that can be applied conditionally.
* **Keep styles in one place:** Html and components styles stay together. Separate the style logic from the display and business logic.
* **Simple to attach to elements:** Use the "is" syntax to effortlessly attach inline styles to html elements and spreads to custom components.

## Clean, Simple Code

### BEFORE
```
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

### AFTER
```
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

## Installation & Usage

```
npm install reactcss --save
```

### Extend ReactCSS
```
var ReactCSS = require('reactcss');

class Button extends ReactCSS.Component {
  ...
}
```

### Put in a Default Class
```
var ReactCSS = require('reactcss');

class Button extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        modal: {
          background: '#fff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, .48)'
        },
        title: {
          fontSize: '24px'
        },
        Content: {
          type: 'modal-content',
          padding: '20px'
        }
      }
    }
  }

  ...
}
```

### Attach styles to HTML
See [react-map-styles](http://github.com/casesandberg/react-map-styles)
```
var ReactCSS = require('reactcss');

class Button extends ReactCSS.Component {
  ...

  render() {
    return (
      <div is="modal">
        <div is="title">{ this.props.title }</div>
        <Content is="Content" />
      </div>
    )
  }
}
```
