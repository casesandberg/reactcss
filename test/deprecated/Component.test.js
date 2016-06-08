/* global describe, it, beforeEach, afterEach */

import { expect } from '../helpers'
const { Component } = require('../../src/reactcss')

describe('Component', () => {
  it('Check if its a function', () => {
    expect(Component).to.be.function
  })

  // Add more tests here to check for css and styles props
})
