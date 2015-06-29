---
id: attaching-styles
title: Attaching Styles

---
To attach styles you use inline styles for html elements and spreads for custom components. You just map them to the name you used in the css for that element `this.styles().element`:
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
To make things easier there is a react-map-styles plugin that you can use with Webpack that introduces the `is` syntax for rapid development. You just pass is the name of the element you declared in your css. Using a lowercase name adds the css as an inline tyles, while an uppercase name applies a spread to custom components:
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
