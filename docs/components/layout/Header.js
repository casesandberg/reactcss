'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import { Tabs } from 'react-material-design';

export class Header extends React.Component {

  static contextTypes = {
    mobile: React.PropTypes.bool,
  }

  classes() {
    return {
      'default': {
        header: {
          padding: '14px 14px 14px 0',
          display: 'flex',
          justifyContent: 'space-between',
        },
        logo: {
          padding: '12px 0 12px 24px',
          fontSize: '22px',
          fontWeight: '200',
          color: 'rgba(255, 255, 255, .87)',
          textDecoration: 'none',
        },
        nav: {
          float: 'right',
          color: 'rgba(255, 255, 255, .87)',
          textTransform: 'uppercase',
          overflow: 'hidden',
        },
        Tabs: {
          align: 'center',
        },
      },
      'mobile-header': {
        header: {
          padding: '7px',
          display: 'block',
        },
        logo: {
          float: 'left',
          fontSize: '18px',
          paddingLeft: '12px',
        },
        nav: {
          float: 'right',
        },
      },
    };
  }

  activations() {
    return {
      'mobile-header': this.context.mobile,
    };
  }

  render() {
    return (
      <div is="header" className="flexbox-fix">
        <a href="/" is="logo">ReactCSS</a>

        <div is="nav">
          <Tabs is="Tabs" selectedTab={ this.props.display === 'documentation' ? 1 : 0 }

          tabs={[
            { label: 'About', onClick: '/' },
            { label: this.context.mobile ? 'Docs' : 'Documentation', onClick: '/documentation' },
            { label: 'Github', selectable: false, onClick: 'https://github.com/casesandberg/reactcss', newTab: true },
          ]} />
        </div>
      </div>
    );
  }
}

export default ReactCSS(Header);
