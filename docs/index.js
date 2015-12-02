'use strict';

import ReactDOM from 'react-dom';
import React from 'react';
import '../node_modules/normalize.css/normalize.css';

import Home from './components/home/Home';

ReactDOM.render(
  React.createElement(Home),
  document.getElementById('root')
);
