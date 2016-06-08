---
id: react-native-props
title: Props
---

Pass state or props as parameters to the `reactCSS` method and they will automatically activate any classes that match `'key-value'` or `'key'` if value is true:
``` js
class Game2048 extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        container: {
          // styles always applied
        },
      },
      'hidden': {
        container: {
          // styles for this.state.hidden === true
        }
      }
    }, this.props, this.state)

    ...
  }
}
```
