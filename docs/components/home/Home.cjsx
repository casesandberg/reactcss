'use strict'

React = require('react')

{ Shell } = require('../layout')
HomeBody = require('./HomeBody')
HomeFeature = require('./HomeFeature')



module.exports = class Home extends React.Component

  render: -> <Shell feature={ HomeFeature } body={ HomeBody } nav="about" />
