import React from 'react'

export const hover = Component => {
  return class Hover extends React.Component {
    state = { hover: false }
    handleMouseOver = () => this.setState({ hover: true })
    handleMouseOut = () => this.setState({ hover: false })

    render = () => (
      <span onMouseOver={ this.handleMouseOver } onMouseOut={ this.handleMouseOut }>
        <Component { ...this.props } { ...this.state } />
      </span>
    )
  }
}

export default hover
