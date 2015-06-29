'use strict'

React = require('react')
require('../../node_modules/normalize.css/normalize.css')

Docs = require('../components/docs/Docs')

React.render(
  React.createElement(Docs),
  document.getElementById('root')
)
