'use strict'

import React from 'react'
import reactCSS from 'reactcss'

import { Container } from '../layout'

// const docsFiles = require('../../documentation')
// const commentedFile = require('../../documentation/00-commented-file.md')

export const DocsBody = () => {
  const styles = reactCSS({
    'default': {
      docsBody: {
        paddingBottom: '80px',
      },
    },
  })

  return (
    <div style={ styles.docsBody } className="docsBody">
      <Container>

        sdfasdfasd fasdf asdf

      </Container>
    </div>
  )
}

export default DocsBody
