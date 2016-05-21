'use strict'

import React from 'react'
import reactCSS from 'reactcss'

const { Container } = require('../layout')
const { Animate } = require('../common')


export class DocsFeature extends React.Component {
  static contextTypes = {
    mobile: React.PropTypes.bool,
  }

  render() {
    const styles = reactCSS({
      'default': {
        docsFeature: {
          background: '#49535B',
          height: '100%',
        },
        title: {
          paddingTop: '130px',
          paddingLeft: '27.25%',
          marginLeft: '20px',
          fontSize: '34px',
          color: 'rgba(255, 255, 255, .87)',
          WebkitFontSmoothing: 'antialiased',
        },
      },
      'mobile-header': {
        title: {
          paddingLeft: '0',
          marginLeft: '0',
          textAlign: 'center',
        },
      },
    }, {
      'mobile-header': this.context.mobile,
    })

    return (
      <div style={ styles.docsFeature }>
        <Container>

          <Animate>
            <div style={ styles.title }>Documentation</div>
          </Animate>

        </Container>
      </div>
    )
  }
}

export default DocsFeature
