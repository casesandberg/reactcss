'use strict'

const React = require('react')
const TestUtils = require('react-addons-test-utils')
const expect = require('chai').expect
require('testdom')('<html><body></body></html>')

const ReactCSSComponent = require('../src/Component')

describe('ReactCSS', function () {

  it('should return simple css', function () {

    class SomeComponent extends ReactCSSComponent {

      classes() {
        return {
          'default': {
            body: {
              background: '#fafafa',
            },
          },
        }
      }

      render() {
        return React.createElement('div')
      }
    }

    var someComponent = TestUtils.renderIntoDocument(React.createElement(SomeComponent, {}, 'baz'))

    expect(someComponent.styles()).to.eql({
      body: {
        background: '#fafafa',
      },
    })
  })

  it('should return complex css', function () {

    class SomeComponent extends ReactCSSComponent {

      classes() {
        return {
          'default': {
            title: {
              color: this.props.color,
            },
            card: {
              boxShadow: '0 0 2px rgba(0,0,0,.1)',
            },
          },
        }
      }

      render() {
        return React.createElement('div')
      }
    }

    var someComponent = TestUtils.renderIntoDocument(React.createElement(SomeComponent, { color: 'red' }))

    expect(someComponent.styles()).to.eql({
      card: {
        MozBoxShadow: '0 0 2px rgba(0,0,0,.1)',
        OBoxShadow: '0 0 2px rgba(0,0,0,.1)',
        WebkitBoxShadow: '0 0 2px rgba(0,0,0,.1)',
        boxShadow: '0 0 2px rgba(0,0,0,.1)',
        msBoxShadow: '0 0 2px rgba(0,0,0,.1)',
      },
      title: {
        color: 'red',
      },
    })
  })
})
