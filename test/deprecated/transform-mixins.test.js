/* global describe, it, beforeEach, afterEach */

import { expect } from '../helpers'
import mixins from '../../src/deprecated/transform-mixins'

describe('Mixins', () => {
  it('return the same object if nothing matches', () => {
    const before = {
      card: {
        position: 'absolute',
      },
    }
    const after = {
      card: {
        position: 'absolute',
      },
    }

    expect(mixins(before)).to.eql(after)
  })

  it('skip selectors whos values are strings or arrays', () => {
    const before = {
      button: 'bigger',
    }
    const after = {
      button: 'bigger',
    }
    const beforeArray = {
      button: ['bigger'],
    }
    const afterArray = {
      button: ['bigger'],
    }

    expect(mixins(before)).to.eql(after)
    expect(mixins(beforeArray)).to.eql(afterArray)
  })

  it('expand basic custom props where the output is just values', () => {
    const before = {
      card: {
        borderRadius: '2px',
      },
    }
    const after = {
      card: {
        msBorderRadius: '2px',
        MozBorderRadius: '2px',
        OBorderRadius: '2px',
        WebkitBorderRadius: '2px',
        borderRadius: '2px',
      },
    }

    expect(mixins(before)).to.eql(after)
  })

  it('expand custom props where the output is a complex eval', () => {
    const before = {
      card: {
        Absolute: '0px 0px 0px 0px',
      },
    }
    const after = {
      card: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    }
    expect(mixins(before)).to.eql(after)
  })

  it('expand custom props where the output is a complex eval v2', () => {
    const before = {
      card: {
        Absolute: '0px 0px 0px 0px',
        background: '#fff',
      },
    }
    const after = {
      card: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        background: '#fff',
      },
    }

    expect(mixins(before)).to.eql(after)
  })

  it('extend mixin copies styles from another element', () => {
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
    }
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
    }

    expect(mixins(before)).to.eql(after)
  })

  it('be able to step through and epand a compex array properly', () => {
    const before = {
      body: {
        sidebar: {
          card: {
            Absolute: '0px 0px 0px 0px',
          },
        },
      },
    }
    const after = {
      body: {
        sidebar: {
          card: {
            position: 'absolute',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          },
        },
      },
    }

    expect(mixins(before)).to.eql(after)
  })

  return it('be able to pass through functions to transform', () => {
    const customFunc = {
      AddTogetherMargin: (value) => {
        let total = 0
        let i = 0
        let len
        const ref = value.split(' ')
        for (len = ref.length; i < len; i++) {
          const number = ref[i]
          total += parseInt(number, 10)
        }

        return {
          margin: total,
        }
      },
    }
    const before = {
      body: {
        AddTogetherMargin: '2 2',
      },
    }
    const after = {
      body: {
        margin: 4,
      },
    }

    expect(mixins(before, customFunc)).to.eql(after)
  })
})
