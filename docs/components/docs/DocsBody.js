'use strict'

import React from 'react'
import reactCSS from 'reactcss'

import { Container } from '../layout'

import Docs from '../../../modules/react-documentation'

import docsFiles from '../../documentation'
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

        <Docs markdown={ docsFiles } />

      </Container>
    </div>
  )
}

export default DocsBody
