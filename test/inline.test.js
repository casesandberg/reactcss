'use strict';

const expect = require('chai').expect;
const inline = require('../src/inline');

describe('React Inline', () => {

  it('return a css object from a set of true class names', function() {
    this.classes = () => {
      return {
        'base': {
          card: {
            position: 'absolute',
          },
        },
      };
    };

    const before = {
      foo: false,
      'base': true,
    };
    const after = {
      card: {
        position: 'absolute',
      },
    };

    expect(inline.call(this, before)).to.eql(after);
  });

  it('return a css object from a bunch of class names', function() {
    this.classes = () => {
      return {
        'base': {
          card: {
            position: 'absolute',
          }
        },
        'outlined': {
          card: {
            border: '2px solid #aeee00',
          },
        },
        'disabled': {
          card: {
            display: 'none',
          },
        },
      };
    };

    const before = {
      'base': true,
      'outlined': true,
      'disabled': false,
    };
    const after = {
      card: {
        position: 'absolute',
        border: '2px solid #aeee00',
      },
    };

    expect(inline.call(this, before)).to.eql(after);
  });

  it('include the `default` class', function() {
    this.classes = () => {
      return {
        'default': {
          card: {
            position: 'absolute',
          },
        },
      };
    };

    const after = {
      card: {
        position: 'absolute',
      },
    };

    expect(inline.call(this)).to.eql(after);
  });

  it('include any true props that match class names', function() {
    this.props = {
      isSelected: true,
      dark: true,
    };
    this.classes = () => {
      return {
        'default': {
          card: {
            position: 'absolute',
          },
        },
        'isSelected': {
          card: {
            color: '#aeee00',
            border: '2px solid #aeee00',
          },
        },
        'dark-true': {
          card: {
            color: '#333',
          },
        },
      };
    };

    const after = {
      card: {
        position: 'absolute',
        color: '#333',
        border: '2px solid #aeee00',
      },
    };

    expect(inline.call(this, before)).to.eql(after);
  });

  it('check if props and values match a class', function() {
    this.props = {
      isSelected: false,
      zDepth: 2,
    };
    this.classes = () => {
      return {
        'default': {
          card: {
            position: 'absolute',
          },
        },
        'isSelected-false': {
          card: {
            background: 'grey',
          },
        },
        'zDepth-2': {
          card: {
            border: '2px solid #333',
          },
        },
      };
    };

    const after = {
      card: {
        position: 'absolute',
        background: 'grey',
        border: '2px solid #333',
      },
    };

    expect(inline.call(this, before)).to.eql(after);
  });
});
