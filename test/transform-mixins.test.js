'use strict';

const expect = require('chai').expect;
const mixins = require('../src/transform-mixins');

describe('Mixins', function() {
  it('return the same object if nothing matches', function() {
    const before = {
      card: {
        position: 'absolute',
      },
    };
    const after = {
      card: {
        position: 'absolute',
      },
    };

    expect(mixins(before)).to.eql(after);
  });

  it('skip selectors whos values are strings or arrays', function() {
    const before = {
      button: 'bigger',
    };
    const after = {
      button: 'bigger',
    };
    const beforeArray = {
      button: ['bigger'],
    };
    const afterArray = {
      button: ['bigger'],
    };

    expect(mixins(before)).to.eql(after);
    expect(mixins(beforeArray)).to.eql(afterArray);
  });

  it('expand basic custom props where the output is just values', function() {
    const before = {
      card: {
        borderRadius: '2',
      },
    };
    const after = {
      card: {
        msBorderRadius: '2',
        MozBorderRadius: '2',
        OBorderRadius: '2',
        WebkitBorderRadius: '2',
        borderRadius: '2',
      },
    };

    expect(mixins(before)).to.eql(after);
  });

  it('expand custom props where the output is a complex eval', function() {
    const before = {
      card: {
        Absolute: '0 0 0 0',
      },
    };
    const after = {
      card: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
      },
    };
    expect(mixins(before)).to.eql(after);
  });

  it('expand custom props where the output is a complex eval v2', function() {
    const before = {
      card: {
        Absolute: '0 0 0 0',
        background: '#fff',
      },
    };
    const after = {
      card: {
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: '#fff',
      },
    };

    expect(mixins(before)).to.eql(after);
  });

  it('extend mixin copies styles from another element', function() {
    const before = {
      title: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,.87)',
      },
      subtitle: {
        Extend: 'title',
        fontSize: '14px',
        color: 'rgba(0,0,0,.57)',
      },
    };
    const after = {
      title: {
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: 'bold',
        color: 'rgba(0,0,0,.87)',
      },
      subtitle: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: '14px',
        color: 'rgba(0,0,0,.57)',
      },
    };

    expect(mixins(before)).to.eql(after);
  });

  it('be able to step through and epand a compex array properly', function() {
    const before = {
      body: {
        sidebar: {
          card: {
            Absolute: '0 0 0 0',
          },
        },
      },
    };
    const after = {
      body: {
        sidebar: {
          card: {
            position: 'absolute',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
          },
        },
      },
    };

    expect(mixins(before)).to.eql(after);
  });

  return it('be able to pass through functions to transform', function() {
    const customFunc = {
      AddTogetherMargin: function(value) {
        let total = 0;
        const ref = value.split(' ');
        for (var i = 0, len = ref.length; i < len; i++) {
          let number = ref[i];
          total += parseInt(number);
        }

        return {
          margin: total,
        };
      },
    };
    const before = {
      body: {
        AddTogetherMargin: '2 2',
      },
    };
    const after = {
      body: {
        margin: 4,
      },
    };

    expect(mixins(before, customFunc)).to.eql(after);
  });
});
