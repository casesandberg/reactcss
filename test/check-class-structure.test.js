'use strict';

import { sinon } from './helpers';
const checkClassStructure = require('../src/check-class-structure');

describe('Check Class Structure', () => {
  const sandbox = sinon.sandbox.create();

  beforeEach(() => {
    sandbox.stub(console, 'log');
    sandbox.stub(console, 'error');
    return sandbox.stub(console, 'warn');
  });

  afterEach(() => {
    return sandbox.restore();
  });

  it('Accept basic class structure with no warnings', done => {
    const before = {
      'default': {
        element: {
          foo: 'bar',
        },
        title: {
          color: '#333',
        },
      },
    };
    checkClassStructure(before);
    sinon.assert.notCalled(console.warn);
    return done();
  });

  it('Warn if class key is not given an object as a value', done => {
    const before = {
      'default': 'string',
    };
    checkClassStructure(before);
    sinon.assert.calledOnce(console.warn);
    return done();
  });

  it('Warn if elements arent given an object as a value', done => {
    const before = {
      'default': {
        header: 'string',
      },
    };
    checkClassStructure(before);
    sinon.assert.calledOnce(console.warn);
    return done();
  });
});
