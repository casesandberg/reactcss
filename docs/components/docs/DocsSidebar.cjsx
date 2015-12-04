'use strict'

import React from 'react';
import ReactCSS from 'reactcss';
markdown = require('../../helpers/markdown')

{ Tile } = require('react-material-design')
DocsSidebarItem = require('./DocsSidebarItem')



export classDocsSidebar extends ReactCSS.Component

  classes: ->
    'default':
      sidebar:
        paddingTop: '20px'
        position: 'relative'
        width: '100%'

      star:
        position: 'absolute'
        top: '-65px'
        left: '10px'

    'fixed':
      sidebar:
        top: '0'
        bottom: '0'
        position: 'fixed'

      star:
        bottom: '30px'
        top: 'auto'

  render: ->
    <div is="sidebar">

      <div is="star">
        <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=reactcss&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>
      </div>

      { for fileName, file of @props.files
          args = markdown.getArgs(file)
          sectionNumber = if markdown.isSubSection(fileName) then fileName.split('-')[0] else false

          <DocsSidebarItem key={ fileName }
            sidebarNumber={ sectionNumber }
            href={ "##{ args.id }" }
            active={ @props.active is args.id }
            bold={ true if sectionNumber }
            label={ args.title } /> }

    </div>
