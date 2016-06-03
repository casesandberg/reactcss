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
        head: {
          position: 'relative',
        },
        github: {
          position: 'absolute',
          right: '0px',
          top: '20px',
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

            <div style={ styles.head }>
              <Animate>
                <div style={ styles.title }>reactCSS</div>
              </Animate>
              <div style={ styles.github }>
                <Animate inDelay={ 800 }>
                  <a href="https://github.com/casesandberg/reactcss" target="__blank">
                    <svg style={ { width: '24px', height: '24px' } } viewBox="0 0 24 24">
                      <path fill="#fff" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                    </svg>
                  </a>
                </Animate>
              </div>
            </div>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default DocsFeature
