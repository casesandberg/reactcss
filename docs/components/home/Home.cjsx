'use strict'

React = require('react')

Shell = require('../layout/Shell')
HomeBody = require('./HomeBody')
HomeFeature = require('./HomeFeature')



module.exports = class Home extends React.Component

  render: -> <Shell feature={ HomeFeature } body={ HomeBody } nav="about" />
