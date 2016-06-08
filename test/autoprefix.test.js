/* global describe, it */

import { expect } from './helpers'
import autoprefix from '../src/autoprefix'

describe('Autoprefix', () => {
  it('should prefix borderRadius', () => {
    const before = {
      box: {
        borderRadius: '2px',
      },
    }
    const after = {
      box: {
        msBorderRadius: '2px',
        MozBorderRadius: '2px',
        OBorderRadius: '2px',
        WebkitBorderRadius: '2px',
        borderRadius: '2px',
      },
    }
    expect(autoprefix(before)).to.eql(after)
  })

  it('should prefix absolute', () => {
    const before = {
      box: {
        absolute: '0px 0px 0px 0px',
      },
    }
    const after = {
      box: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    }
    expect(autoprefix(before)).to.eql(after)
  })
})
