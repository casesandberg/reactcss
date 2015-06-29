'use strict'

React = require('react')

Shell = require('../layout/Shell')
DocsBody = require('./DocsBody')
DocsFeature = require('./DocsFeature')



module.exports = class Docs extends React.Component

  render: -> <Shell feature={ DocsFeature } body={ DocsBody } nav="documentation" />
