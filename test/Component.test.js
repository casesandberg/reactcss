'use strict';

const expect = require('chai').expect;
var { Component } = require('../src/react-css');

describe('Component', () => {

  it('Check if its a function', () => {
    expect(Component).to.be.function;
  });

  // Add more tests here to check for css and styles props

});
