'use strict'

import React from 'react'

export const Body = (props) => {
  const Component = props.component
  return (
    <div>
      <style>{ `
        .flexbox-fix {
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
        }
      ` }</style>

      <Component />
    </div>
  )
}

export default Body
