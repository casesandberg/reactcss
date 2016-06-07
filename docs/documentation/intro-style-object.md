---
id: getting-started-style-object
title: Style Object
---

Define a default styles for your elements:
```javascript
import reactCSS from 'reactcss'

const styles = reactCSS({
  'default': {
    card: {
      background: this.props.background,
      boxShadow: '0 2px 4px rgba(0,0,0,.15)',
    },
  },
})
```

Pass style definitions via inline styles:
```javascript
<div style={ styles.card } />
```
