'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

export class Container extends React.Component {

  classes() {
    return {
      'default': {
        cotainer: {
          maxWidth: '880px',
          padding: '0 14px',
          margin: '0 auto',
        },
      },
    };
  }

  render() {
    return <div is="cotainer">{ this.props.children }</div>;
  }
}

export default ReactCSS(Container);
