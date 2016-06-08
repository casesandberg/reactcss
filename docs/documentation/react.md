---
id: react
title: React
---

Define styles in the render method and attach them to the JSX via inline styles:
``` js
class Component extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        card: {
          background: '#fff',
          boxShadow: '0 2px 4px rgba(0,0,0,.15)',
        },
        title: {
          fontSize: '2.8rem',
          color: this.props.color,
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
}
```
