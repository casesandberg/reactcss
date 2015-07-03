---
id: attaching-styles
title: Attaching Styles

---
Use inline styles to attach styles to html elements and spreads for custom components. Map the variable to the name used in the css for that element `this.styles().element`:
```
render() {
  return (
    <div style={ this.styles().dialog }>
      <h1 style={ this.styles().title }>
        { this.props.title }
      </h1>
      <div style={ this.styles().actions }>
        <Button {...this.styles().Cancel} label="Cancel" />
        <Button {...this.styles().Accept} label="Accept" />
      </div>
    </div>
  )
}
```

## react-map-styles
To make things easier, there is the `react-map-styles` plugin. Pass is the name of the element declared in the style to the `is` prop. Use a lowercase name to set an inline style, and an uppercase name to apply a spread to custom components:
```
render() {
  return (
    <div is="dialog">
      <h1 is="title">
        { this.props.title }
      </h1>
      <div is="actions">
        <Button is="Cancel" label="Cancel" />
        <Button is="Accept" label="Accept" />
      </div>
    </div>
  )
}
```
