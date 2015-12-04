'use strict'

import React from 'react';

{ Shell } = require('../layout')
DocsBody = require('./DocsBody')
DocsFeature = require('./DocsFeature')



export classDocs extends React.Component

  render: -> <Shell feature={ DocsFeature } body={ DocsBody } nav="documentation" />
