---
id: redux
title: Redux
---

Define styles and attach them to the JSX via inline styles:
``` js
const Component = () => {
  const styles = reactCSS({
    'default': {
      card: {
        background: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,.15)',
      },
      title: {
        fontSize: '2.8rem',
        color: props.color,
      },
    },
  })

  return (
    <div style={ styles.card }>
      <div style={ styles.title }>
        { this.props.title }
      </div>

      { this.props.children }
    </div>
  )
}
```
