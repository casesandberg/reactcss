'use strict'

import React from 'react'

import { Shell } from '../layout'
import DocsBody from './DocsBody'
import DocsFeature from './DocsFeature'

export const Docs = () => {
  return <Shell feature={ DocsFeature } body={ DocsBody } nav="documentation" />
}

export default Docs
