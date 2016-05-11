'use strict';

import { React, TestUtils, expect, sinon } from './helpers';
import ReactCSS from '../src/reactcss';

describe('ReactCSS', function() {
  const sandbox = sinon.sandbox.create();
  beforeEach(() => { sandbox.stub(console, 'warn'); });
  afterEach(() => { sandbox.restore(); });

  it('should return simple css', function() {
    class Component extends React.Component {
      render() {
        var styles = ReactCSS({
          'default': {
            body: {
              backgroundColor: '#fafafa',
            },
          },
        });
        return <div className="body" style={ styles.body } />;
      }
    }

    const component = TestUtils.renderIntoDocument(<Component />);
    const body = TestUtils.findRenderedDOMComponentWithClass(component, 'body');
    expect(body._style._values).to.eql({ 'background-color': 'rgb(250, 250, 250)', });
  });

  it('should return multiple css', function() {
    class Component extends React.Component {
      render() {
        var styles = ReactCSS({
          'default': {
            title: {
              color: this.props.color,
            },
            card: {
              boxShadow: '0 0 2px rgba(0,0,0,.1)',
            },
          },
        });
        return (
          <div>
            <div className="title" style={ styles.title } />
            <div className="card" style={ styles.card } />
          </div>
        );
      }
    }

    const component = TestUtils.renderIntoDocument(<Component color="red" />);
    const title = TestUtils.findRenderedDOMComponentWithClass(component, 'title');
    expect(title._style._values).to.eql({ 'color': 'red', });
    const card = TestUtils.findRenderedDOMComponentWithClass(component, 'card');
    expect(card._style._values).to.eql({ 'box-shadow': '0 0 2px rgba(0,0,0,.1)', });
  });

  it('should return complex css', function() {
    class Component extends React.Component {
      render() {
        var styles = ReactCSS({
          'default': {
            card: {
              boxShadow: '0 0 2px rgba(0,0,0,.1)',
            },
          },
          'zIndex-2': {
            card: {
              boxShadow: '0 4px 8px rgba(0,0,0,.15)',
            },
          },
        }, this.props);
        return (
          <div>
            <div className="card" style={ styles.card } />
          </div>
        );
      }
    }

    const component = TestUtils.renderIntoDocument(<Component zIndex="2" />);
    const card = TestUtils.findRenderedDOMComponentWithClass(component, 'card');
    expect(card._style._values).to.eql({ 'box-shadow': '0 4px 8px rgba(0,0,0,.15)', });
  });

  it('should throw a deprecation warning for using the old extend', function() {

    class SomeComponent extends ReactCSS.Component {
      classes() {
        return {
          'default': {
            body: {
              background: '#fafafa',
            },
            title: {
              fontSize: '24px',
            },
          },
        };
      }

      render() {
        return (
          <div style={ this.styles().body }>
            <div style={ this.styles().title }>Title</div>
          </div>
        );
      }
    }

    const component = TestUtils.renderIntoDocument(<SomeComponent />);
    sinon.assert.calledOnce(console.warn);
  });
});
