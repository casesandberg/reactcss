---
id: preface
title: Preface

---
ReactCSS encourages you to create **a bunch of little components** that hold unique styles for you to share around your app. Take Google's Material Design as an example: You would create one component called `Raised` that handles displaying drop shadows app-wide.

**Media Queries are a hack**. Period. There is no media query support with this package. We instead should be focusing on Element Queries or `Component Queries` with the idea that a component will handle displaying itself in whatever size box you give it. Look for a `react-comonent-queries` package coming soon.

Nth-child and css selectors should be handled by the parent that is looping the component and passed down as props. **This allows you to have fine-grain control and complex selectors**. i.e. passing a the data type of the previous and next components to each component in a list.
