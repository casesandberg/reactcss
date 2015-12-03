'use strict';

import { React, TestUtils, expect } from './helpers';
import ReactCSS from '../src/transform';

describe('ReactCSS', function() {

  it('should return simple css', function() {

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
        return <div />;
      }
    }

    const Component = ReactCSS(SomeComponent);
    const component = TestUtils.renderIntoDocument(<Component />);

    expect(component.styles()).to.eql({
      body: {
        background: '#fafafa',
      },
    });
  });

  it('should return complex css', function() {

    class SomeComponent extends React.Component {

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
        };
      }

      render() {
        return <div />;
      }
    }

    const Component = ReactCSS(SomeComponent);
    const component = TestUtils.renderIntoDocument(<Component color="red" />);

    expect(component.styles()).to.eql({
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
    });
  });
});
