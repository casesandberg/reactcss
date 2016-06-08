'use strict'

import ReactDOM from 'react-dom'
import React from 'react'
import '../node_modules/normalize.css/normalize.css'

import Docs from './components/docs/Docs'

ReactDOM.render(
  React.createElement(Docs),
  document.getElementById('root')
)
