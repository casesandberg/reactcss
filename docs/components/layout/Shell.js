'use strict'

import React from 'react'
import reactCSS from 'reactcss'

import Header from './Header'
import Feature from './Feature'
import Body from './Body'

export class Shell extends React.Component {
  static childContextTypes = {
    mobile: React.PropTypes.bool,
  }

  static getChildContext = () => {
    return { mobile: this.state.mobile }
  }

  constructor() {
    super()
    this.state = {
      mobile: false,
    }
  }

  componentWillMount() {
    this.handleResize()
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false)
  }

  handleResize = () => {
    if (document.body.clientWidth <= 700 && this.state.mobile === false) {
      this.setState({ mobile: true })
    }

    if (document.body.clientWidth > 701 && this.state.mobile === true) {
      this.setState({ mobile: false })
    }
  }

  render() {
    const styles = reactCSS({
      'default': {
        shell: {
          fontFamily: 'Roboto',
          background: '#eee',
          minHeight: '100%',
        },
        body: {
          position: 'relative',
          zIndex: '2',
        },
      },
    })

    return (
      <div style={ styles.shell }>
        <Feature component={ this.props.feature } />
        <div style={ styles.body }>
          <Body component={ this.props.body } />
        </div>
      </div>
    )
  }
}

export default Shell
