'use strict'

import React from 'react';
import ReactCSS from 'reactcss';

{ Container } = require('../layout')
{ Animate } = require('../common')



export classDocsFeature extends ReactCSS.Component

  @contextTypes:
    mobile: React.PropTypes.bool

  classes: ->
    'default':
      docsFeature:
        background: '#49535B'
        height: '100%'

      title:
        paddingTop: '130px'
        paddingLeft: '27.25%'
        marginLeft: '20px'
        fontSize: '34px'
        color: 'rgba(255, 255, 255, .87)'
        WebkitFontSmoothing: 'antialiased'

    'mobile-header':
      title:
        paddingLeft: '0'
        marginLeft: '0'
        textAlign: 'center'

  styles: -> @css
    'mobile-header': @context.mobile

  render: ->
    <div is="docsFeature">
      <Container>

        <Animate>
          <div is="title">Documentation</div>
        </Animate>

      </Container>
    </div>
