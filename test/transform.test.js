'use strict';

const React = require('react');
import ReactDOM from 'react-dom';
const TestUtils = require('react-addons-test-utils');
const expect = require('chai').expect;
require('testdom')('<html><body></body></html>');

const ReactCSS = require('../src/transform');

describe('transform', function() {

  it('should replace the is with style prop', function() {

    class SomeComponent extends React.Component {

      classes() {
        return {
          'default': {
            body: {
              background: '#fafafa',
            },
          },
        };
      }

      activations() {
        return {
          'foo-bar': true,
        };
      }

      render() {
        return <div is="body" foo="bar" />;
      }
    }

    var Component = ReactCSS(SomeComponent);

    // check to see that is doesnt exist
    var component = TestUtils.renderIntoDocument(<Component />);
    expect(ReactDOM.findDOMNode(component)._attributes.is).to.not.exist;

    // check that random prop exists
    // expect(ReactDOM.findDOMNode(component)._attributes.foo).to.exist;

    // check to see that style has been set. This is hacky.
    var body = ReactDOM.findDOMNode(component)._attributes.style._valueForAttrModified;
    expect(body).to.eql('background:#fafafa;');
  });

  // check that setting inline styles and using the is syntax merges them.

});
