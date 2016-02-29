'use strict'

const expect = require('chai').expect
const inline = require('../../src/inline')

describe('Plugins', () => {

  describe('React Bounds', () => {

    it('Activates class names if active bound name matches', function () {
      this.props = {
        activeBounds: ['some-bound', 'really-large'],
      }

      this.classes = () => {
        return {
          'default': {
            wrap: {
              position: 'relative',
            },
          },
          'some-bound': {
            wrap: {
              color: '#333',
            },
          },
          'really-large': {
            wrap: {
              fontSize: '24px',
            },
          },
        }
      }

      const after = {
        wrap: {
          position: 'relative',
          color: '#333',
          fontSize: '24px',
        },
      }

      expect(inline.call(this)).to.eql(after)
    })
  })
})
