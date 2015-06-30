---
id: css-mixins
title: CSS Mixins

---
ReactCSS Mixins are similar to the mixins that you would use in any other CSS preprocessor. They take any key that matches a function in the mixin library and transforms it using the value. Take `boxShadow`, which adds vendor support, as an example:
```
'default':{
  card: {
    boxShadow: '0 1px 4px rgba(0, 0, 0, .24s)'
  }
}
```
is transformed because it matches `boxShadow` in the mixin library:
```
boxShadow: function(value){
  if(value){
    return{
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    }
  }
}
```
## List of Mixins
* `boxShadow` `borderRadius` `transition` `transform` - Vendor prefixes.
* `Absolute` - Set the value to 'topValue rightValue bottomValue leftValue' which transforms to position: absolute with the corresponding top, right, bottom and left values.
* `Extend` - Used for copying styles from another element in that class. Set the value as a string with the name of the element that you want to copy the styles from.

## Creating Your Own Mixins
To create new mixins, add a mixins context object where the key matches the key to replace and the value is a function that returns an object of the finalized css. All components below this will be able to use the mixin:

```
class Root extends ReactCSS.Component {
  getChildContext() {
    return {
      mixins: {
        backgroundHexAlpha: function(value){
          // value[0] is hex, value[1] is alpha
          var bigint = parseInt(value[0].replace('#', ''), 16);
          var r = (bigint >> 16) & 255;
          var g = (bigint >> 8) & 255;
          var b = bigint & 255;
          var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + value[1] + ')';

          return {
            background: rgba
          }
        }
      }  
    }
  }

  ...
}
Root.childContextTypes: {
  mixins: React.PropTypes.object
}

```
And then use it in a later component:
```
'default': {
  wrap: {
    backgroundHexAlpha: ['#000000', .1]
  }
}
```
