'use strict';

import { expect } from './helpers';
const merge = require('../src/merge');

describe('Merge', () => {
  it('return the same object if it is passed one', () => {
    const before = {
      foo: 'bar',
      baz: 'fin',
    };
    const after = {
      foo: 'bar',
      baz: 'fin',
    };

    expect(merge(before)).to.eql(after);
  });

  return it('merge objects passed through array', () => {
    const before = [
      {
        card: {
          background: '#fff',
          margin: '0 6px',
        },
      }, {
        card: {
          margin: '0',
          boxShadow: '0 1px 4px rgba(0,0,0,.24)',
        },
      },
    ];
    const after = {
      card: {
        background: '#fff',
        margin: '0',
        boxShadow: '0 1px 4px rgba(0,0,0,.24)',
      },
    };

    expect(merge(before)).to.eql(after);
  });

});
