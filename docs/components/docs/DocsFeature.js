'use strict'

import React from 'react'
import reactCSS from 'reactcss'

const { Container } = require('../layout')
const { Animate } = require('../common')
import { Grid } from '../../../modules/react-basic-layout'
import { Raised } from '../../../modules/react-material-design'


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
          paddingTop: '17px',
          fontSize: '24px',
          color: 'rgba(255, 255, 255, .87)',
          WebkitFontSmoothing: 'antialiased',
        },
        star: {
          position: 'absolute',
          bottom: '14px',
          left: '15px',
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
          <Grid>
            <div>
              <div style={ styles.star }>
                <Animate inDelay={ 800 }>
                  <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=reactcss&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>
                </Animate>
              </div>
            </div>

            <div>
              <Animate>
                <div style={ styles.title }>ReactCSS</div>
              </Animate>
            </div>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default DocsFeature
