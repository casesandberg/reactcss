'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import Header from './Header';
import Feature from './Feature';
import Body from './Body';

export class Shell extends React.Component {

  constructor() {
    super();
    this.state = {
      mobile: false,
    };
  }

  static childContextTypes = {
    mobile: React.PropTypes.bool,
  }

  static getChildContext = () => {
    return { mobile: this.state.mobile };
  }

  componentWillMount() {
    this.handleResize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize, false);
  }

  handleResize = () => {
    if (document.body.clientWidth <= 700 && this.state.mobile === false) {
      this.setState({ mobile: true });
    }

    if (document.body.clientWidth > 701 && this.state.mobile === true) {
      this.setState({ mobile: false });
    }
  }

  classes() {
    return {
      'default': {
        shell: {
          fontFamily: 'Roboto',
          background: '#eee',
          minHeight: '100%',
        },
        header: {
          zIndex: '3',
          Absolute: '0 0 auto 0',
        },
        body: {
          position: 'relative',
          zIndex: '2',
        },
      },
    };
  }

  render() {
    return (
      <div is="shell">
        <div is="header">
          <Header display={ this.props.nav } />
        </div>
        <Feature component={ this.props.feature } />
        <div is="body">
          <Body component={ this.props.body } />
        </div>
      </div>
    );
  }
}

export default ReactCSS(Shell);
