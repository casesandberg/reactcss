/* global describe, it, beforeEach, afterEach */

import { expect } from '../helpers';
import inline from '../../src/deprecated/inline';

describe('React Inline', () => {
  let that = {};

  beforeEach(() => {
    that = {};
  });

  it('return a css object from a set of true class names', () => {
    that.classes = () => {
      return {
        'base': {
          card: {
            position: 'absolute',
          },
        },
      };
    };

    const before = {
      'foo': false,
      'base': true,
    };
    const after = {
      card: {
        position: 'absolute',
      },
    };

    expect(inline.call(that, before)).to.eql(after);
  });

  it('return a css object from a bunch of class names', () => {
    that.classes = () => {
      return {
        'base': {
          card: {
            position: 'absolute',
          },
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

    expect(inline.call(that, before)).to.eql(after);
  });

  it('include the `default` class', () => {
    that.classes = () => {
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

    expect(inline.call(that)).to.eql(after);
  });

  it('include any true props that match class names', () => {
    that.props = {
      isSelected: true,
      dark: true,
    };
    that.classes = () => {
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

    expect(inline.call(that)).to.eql(after);
  });

  it('check if props and values match a class', () => {
    that.props = {
      isSelected: false,
      zDepth: 2,
    };
    that.classes = () => {
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

    expect(inline.call(that)).to.eql(after);
  });
});
