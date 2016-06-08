'use strict';

import React from 'react'
import reactCSS from 'reactcss'

class Container extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        container: {
          maxWidth: this.props.width + 'px',
          padding: '0 20px',
          margin: '0 auto',
          height: '100%'
        },
      },
    })

    return <div styles={ style.container }>{ this.props.children }</div>;
  }
}

Container.defaultProps = {
  width: 960,
};

module.exports = Container;
