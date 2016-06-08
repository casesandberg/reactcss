# [ReactCSS](http://reactcss.com/)

## Inline Styles in JS with support for [React](http://reactcss.com/#react), [Redux](http://reactcss.com/#redux), [React Native](http://reactcss.com/#react-native), [Autoprefixing](http://reactcss.com/#autoprefixing), [Hover](http://reactcss.com/#hover), [Pseudo-Elements](http://reactcss.com/#pseudo-elements) & [Media Queries](http://reactcss.com/#media-queries)

## Install

```
npm install reactcss --save
```

## Style Object

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

## Activating Classes

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

## Documentation
See the [Full Documentation](http://reactcss.com)
