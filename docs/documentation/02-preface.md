---
id: preface
title: Preface

---
ReactCSS encourages the creation of **a bunch of little components** that hold unique styles that can be shared around an app. Take Google's Material Design as an example: A component called Raised would handle displaying drop shadows app-wide.

**Media Queries are a hack**. Period. There is no media query support with this package. We instead should be focusing on Element Queries or `Component Queries` with the idea that a component will handle displaying itself in whatever size box you give it. Look for a `react-component-queries` package coming soon.

Nth-child and css selectors should be handled by the parent that is looping the component and passed down as props. **This allows fine-grain control and complex selectors**. i.e. passing a the data type of the previous and next components to each component in a list.
