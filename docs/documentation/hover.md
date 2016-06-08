---
id: hover
title: Hover
---

Use the hover wrapper that is included with reactCSS to add hover styles to a component. Wrap the export with the hover method and create a class in the styles object called hover:

```
import reactCSS, { hover } from 'reactcss'

class Button extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        button: {
          background: '#999',
        },
      },
      'hover': {
        button: {
          background: '#333',
        },
      },
    })

    return (
      <div style={ styles.button }>
        { props.label }
      </div>
    )
  }
}

export default hover(Button)
```
