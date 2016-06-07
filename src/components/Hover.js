'use strict'

import React from 'react'

export const hover = Component => {
  return class Hover extends React.Component {
    constructor() {
      super()
      this.state = {
        hover: false,
      }
    }

    handleMouseOver = () => {
      this.setState({ hover: true })
    }

    handleMouseOut = () => {
      this.setState({ hover: false })
    }

    render() {
      return (
        <div
          onMouseOver={ this.handleMouseOver }
          onMouseOut={ this.handleMouseOut }
        >
          <Component
            {...this.props}
            {...this.state}
          />
        </div>
      )
    }
  }
}

export default hover
