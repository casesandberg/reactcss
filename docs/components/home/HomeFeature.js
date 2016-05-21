'use strict';

import React from 'react';
import reactCSS from 'reactcss';

import { Container } from '../layout';
import { Animate } from '../common';
import Particles from './Particles';

export class HomeFeature extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        homeFeature: {
          background: '#4A90E2',
          height: '100%',
        },
        inside: {
          textAlign: 'center',
          zIndex: '2',
          position: 'relative',
        },
        headline: {
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingTop: '130px',
          fontSize: '34px',
          color: 'rgba(255, 255, 255, .87)',
          WebkitFontSmoothing: 'antialiased',
        },
        install: {
          marginTop: '70px',
          display: 'inline-block',
          padding: '0 18px',
          height: '54px',
          lineHeight: '54px',
          boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, .87)',
          borderRadius: '4px',
          fontSize: '20px',
          color: 'rgba(255, 255, 255, .87)',
          fontWeight: '200',
          background: '#4A90E2',
          zIndex: '2',
        },
        dollar: {
          paddingRight: '10px',
          color: 'rgba(255, 255, 255, .27)',
          userSelect: 'none',
        },
        particles: {
          Absolute: 'auto 0 0 0',
          height: '130px',
        },
      },
      'mobile': {
        install: {
          marginTop: '50px',
        },
      },
    }, {
      'mobile': this.context.mobile,
    });

    return (
      <div style={ styles.homeFeature }>
        <Container>
          <div style={ styles.inside }>

            <Animate>
              <div style={ styles.headline }>Bringing Classes to Inline Styles</div>
            </Animate>

            <Animate
              inStartTransform="translateY(70px)"
              inEndTransform="translateY(0)"
              inDelay={ 400 }
            >
              <div style={ styles.install }>
                <span style={ styles.dollar }>$</span>
                npm install reactcss
              </div>
            </Animate>

          </div>

        </Container>

        <div style={ styles.particles }>
          <Particles />
        </div>
      </div>
    );
  }
}

HomeFeature.contextTypes = {
  mobile: React.PropTypes.bool,
};

export default HomeFeature;
