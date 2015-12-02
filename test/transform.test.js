'use strict';

const React = require('react');
import ReactDOM from 'react-dom';
const TestUtils = require('react-addons-test-utils');
const expect = require('chai').expect;
require('testdom')('<html><body></body></html>');

const ReactCSS = require('../src/transform');

describe('transform', function() {

  it('shouldnt replace other props', function() {
    class SomeComponent extends React.Component {
      render() {
        return <div is="body" foo="bar" />;
      }
    }

    var Component = ReactCSS(SomeComponent);
    var component = TestUtils.renderIntoDocument(<Component />);

    expect(component.render().props.foo).to.exist;
  });

  it('should replace the is with style prop basic', function() {

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

      render() {
        return <div is="body" foo="bar" />;
      }
    }

    var Component = ReactCSS(SomeComponent);
    var component = TestUtils.renderIntoDocument(<Component />);

    expect(component.render().props.is).to.not.exist;
    expect(component.render().props.style).to.eql(component.styles().body);
  });

  it('should replace the is with style prop nested', function() {

    class SomeComponent extends React.Component {
      classes() {
        return {
          'default': {
            body: {
              background: '#333',
            },
            header: {
              fontSize: '27px',
            },
            subhead: {
              fontSize: '17px',
            },
          },
        };
      }

      render() {
        return (
          <div is="body">
            <div is="header">Header</div>
            <div is="subhead">Subhead</div>
          </div>
        );
      }
    }

    var Component = ReactCSS(SomeComponent);
    var component = TestUtils.renderIntoDocument(<Component />);

    expect(component.render().props.style).to.eql(component.classes().default.body);
    expect(component.render().props.children[0].props.style).to.eql(component.styles().header);
    expect(component.render().props.children[1].props.style).to.eql(component.styles().subhead);
  });

  it('should get the merged values from activations', function() {

    class SomeComponent extends React.Component {
      classes() {
        return {
          'default': {
            body: {
              background: '#fafafa',
            },
          },
          'outline': {
            body: {
              border: '2px solid #333',
            },
          },
        };
      }

      activations() {
        return {
          'outline': true,
        };
      }

      render() {
        return <div is="body" />;
      }
    }

    var Component = ReactCSS(SomeComponent);
    var component = TestUtils.renderIntoDocument(<Component />);

    expect(component.render().props.style).to.eql({
      background: '#fafafa',
      border: '2px solid #333',
    });
  });

});
