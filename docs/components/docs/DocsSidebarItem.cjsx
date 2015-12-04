'use strict'

import React from 'react';
import ReactCSS from 'reactcss';

{ Tile } = require('react-material-design')



export classDocsSidebarItem extends ReactCSS.Component

  classes: ->
    'default':
      sidebarItem:
        fontSize: '14px'
        textDecoration: 'none'
        color: 'rgba(0, 0, 0, .57)'

      number:
        fontSize: '14px'
        color: 'rgba(0, 0, 0, .27)'
        fontWeight: 'bold'
        paddingTop: '14px'

      li:
        paddingBottom: '8px'

    'bold':
      sidebarItem:
        fontWeight: 'bold'
        paddingTop: '14px'
        display: 'block'

    'active':
      sidebarItem:
        color: '#4A90E2'

  render: ->
    <div is="li">
      <Tile condensed>
        <div is="number">{ @props.sidebarNumber }</div>
        <a href={ @props.href } is="sidebarItem">{ @props.label }</a>
      </Tile>
    </div>
