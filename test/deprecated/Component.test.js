'use strict';

import { expect } from '../helpers';
var { Component } = require('../../src/react-css');

describe('Component', () => {

  it('Check if its a function', () => {
    expect(Component).to.be.function;
  });

  // Add more tests here to check for css and styles props

});
