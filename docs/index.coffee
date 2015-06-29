'use strict'

React = require('react')
require('../node_modules/normalize.css/normalize.css')

Home = require('./components/docs/Docs')

React.render(
  React.createElement(Home),
  document.getElementById('root')
)
