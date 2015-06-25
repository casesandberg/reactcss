'use strict'

React = require('react')
require('../node_modules/normalize.css/normalize.css')

Shell = require('./components/layout/Shell')

React.render(
  React.createElement(Shell),
  document.getElementById('root')
)
