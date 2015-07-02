# [ReactCSS](http://reactcss.com/)

* **"Pop" classes on and off:** Use a class-based data structure, similar to traditional modifier css, that can be applied conditionally.
* **Keep styles in one place:** Html and components styles stay together. Separate the style logic from the display and business logic.
* **Simple to attach to elements:** Use the "is" syntax to effortlessly attach inline styles to html elements and spreads to custom components.

#### Sample Component
![Sample Component with ReactCSS](http://reactcss.com/reactcss-before-after.png)

## Installation & Usage

```
npm install reactcss --save
```

### Extend ReactCSS
```javascript
var ReactCSS = require('reactcss');

class Button extends ReactCSS.Component {
  ...
}
```

### Put in a Default Class
```javascript
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
```javascript
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

## Documentation
See the [Full Documentation](http://reactcss.com)
