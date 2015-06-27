```
// Include the library
var ReactCSS = require('reactcss');

// Extend ReactCSS instead of React
class Component extends ReactCSS.Component {

  classes: function() {
    return {
      // The default style will be applied automatically
      'default': {
        box: {
          background: '#eee'
        },
        title: {
          color: 'rgba(0, 0, 0, .87)'
        }
      },
      // Name classes 'propName-propValue' to activate
      // via props. i.e. this.props.theme = 'dark'
      'theme-dark': {
        box: {
          background: '#333'
        },
        title: {
          color: 'rgba(255, 255, 255, .87)'
        }
      },
      // We are going to name this class here and
      // activate it down below in the @css function.
      'hovered': {
        box: {
          background: 'blue'
        },
        title: {
          color: 'rgba(255, 255, 255, .87)'
        }
      }
    }
  }

  styles: function() {
    return this.css({
      // 'className': Condition to activate
      'hovered': @state.hovered
    })
  }

  render: function() {
    return (
      // Attach styles using `is` with `react-map-styles`
      // See below for more details on attaching
      <div is\="box">
        <div is\="title">{ this.props.children }</div>
      </div>
    )
  }
}
```
