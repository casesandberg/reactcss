---
id: media-queries
title: Media Queries
---


Make use of [element queries](http://casesandberg.github.io/react-bounds/) as a better alternative to media queries. Truly modular components should conform and adapt to whatever size box you give them. To achieve this, top-level elements in components should have a fluid width and height. Components should strive to fill 100% of the space they are given, and leave the burden of constraining them to the parent.

[http://casesandberg.github.io/react-bounds/](http://casesandberg.github.io/react-bounds/)

```
import React from 'react'
import reactCSS from 'reactcss'
import { wrap } from 'react-bounds'

class Component extends React.Component{
  static bounds() {
    return {
      'mobile': {
        minWidth: 0,
        maxWidth: 500,
      },
    };
  }

  render(){
    var styles = reactCSS({
      'default': {
        body: {
          // automatically applied
        },
      },
      'mobile': {
        body: {
          // applied when component width < 500
        },
      },
    })

    return (
      <div style={ styles.body }>
        { this.props.children }
      </div>
    );
  }
});

export default wrap(Component)
```
