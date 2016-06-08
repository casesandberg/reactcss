---
id: react-state-props
title: State & Props
---

Pass state or props as parameters to the `reactCSS` method and they will automatically activate any classes that match `'key-value'` or `'key'` if value is true:
``` js
class Component extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        card: {
          // styles always applied
        },
      },
      'zIndex-2': {
        card: {
          // styles for <Component zIndex="2" />
        }
      },
      'hover': {
        card: {
          // styles for this.state.hover === true
        }
      }
    }, this.props, this.state)

    ...
  }
}
```
