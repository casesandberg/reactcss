import React from 'react'

export const active = Component => {
  return class Active extends React.Component {
    state = { active: false }
    handleMouseDown = () => this.setState({ active: true })
    handleMouseUp = () => this.setState({ active: false })

    render = () => (
      <span onMouseDown={ this.handleMouseDown } onMouseUp={ this.handleMouseUp }>
        <Component { ...this.props } { ...this.state } />
      </span>
    )
  }
}

export default active
