'use strict'

import React from 'react'
import reactCSS from 'reactcss'

export class Container extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        cotainer: {
          maxWidth: '880px',
          padding: '0 14px',
          margin: '0 auto',
          height: '100%',
        },
      },
    })

    return <div style={ styles.cotainer }>{ this.props.children }</div>
  }
}

export default Container
