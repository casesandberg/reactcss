'use strict'

import React from 'react'
import ReactCSS from 'reactcss'

export class Feature extends React.Component {
  render() {
    const styles = ReactCSS({
      'default': {
        feature: {
          height: '64px',
          position: 'relative',
        },
      },
    })

    return (
      <div style={ styles.feature }>
        <this.props.component />
      </div>
    )
  }

}

export default Feature
