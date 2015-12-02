'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

export class Feature extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        feature: {
          height: '440px',
          position: 'relative',
        },
      },
    };
  }

  render() {
    return (
      <div is="feature">
        <this.props.component />
      </div>
    );
  }

}

export default Feature;
