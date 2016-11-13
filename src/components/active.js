import React from 'react'

export const active = (Component, Span = 'span') => {
  return class Active extends React.Component {
    state = { active: false }
    handleMouseDown = () => this.setState({ active: true })
    handleMouseUp = () => this.setState({ active: false })

    render = () => (
      <Span onMouseDown={ this.handleMouseDown } onMouseUp={ this.handleMouseUp }>
        <Component { ...this.props } { ...this.state } />
      </Span>
    )
  }
}

export default active
