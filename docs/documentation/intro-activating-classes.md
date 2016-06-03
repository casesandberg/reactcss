---
id: getting-started-activating-classes
title: Activating Classes
---

Activate additional classes by passing down objects as additional parameters to `reactCSS`:
```javascript
const styles = reactCSS({
  'default': {
    card: {
      background: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,.15)',
    },
  },
  'zIndex-2': {
    card: {
      boxShadow: '0 4px 8px rgba(0,0,0,.15)',
    },
  },
}, {
  'zIndex-2': props.zIndex === 2,
})
```
