---
id: redux-props
title: Props
---

Pass props to the `reactCSS` method and they will automatically activate any classes that match `'key-value'` or `'key'` if value is true:
``` js
const Component = (props) => {
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
        // styles for <Component hover={ true } />
      }
    }
  }, props)

  ...
}
```
