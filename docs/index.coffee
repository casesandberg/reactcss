'use strict'

React = require('react')
require('../node_modules/normalize.css/normalize.css')

Home = require('./components/home/Home')

React.render(
  React.createElement(Home),
  document.getElementById('root')
)
