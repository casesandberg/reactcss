'use strict';

import { React, ReactDOM, ReactDOMServer, TestUtils, expect } from './helpers';
import ReactCSS from '../src/transform';

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

  it('shouldnt touch children', function() {
    class SomeComponent extends React.Component {
      render() {
        return <div foo="foo">bar</div>;
      }
    }

    var Component = ReactCSS(SomeComponent);
    var component = TestUtils.renderIntoDocument(<Component />);

    expect(component.render().props.children).to.eql('bar');
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

  it('should `renderToStaticMarkup`', function() {

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
        return <div is="body" />;
      }
    }

    var Component = ReactCSS(SomeComponent);
    var component = ReactDOMServer.renderToStaticMarkup(<Component />);

    expect(component).to.eql('<div style="background:#fafafa;"></div>');
  });

  // it('should combine output when more than one element is in string', function() {
  //
  //   class SomeComponent extends React.Component {
  //     classes() {
  //       return {
  //         'default': {
  //           item: {
  //             border: '1px solid #333',
  //           },
  //           last: {
  //             borderBottom: 'none',
  //           },
  //         },
  //       };
  //     }
  //
  //     render() {
  //       return <div is="item last" />;
  //     }
  //   }
  //
  //   var Component = ReactCSS(SomeComponent);
  //   var component = TestUtils.renderIntoDocument(<Component />);
  //   expect(component.render().props.style).to.eql({
  //     border: '1px solid #333',
  //     borderBottom: 'none',
  //   });
  // });

  // it('should combine output more than one element is in object', function() {
  //
  //   class SomeComponent extends React.Component {
  //     classes() {
  //       return {
  //         'default': {
  //           item: {
  //             border: '1px solid #333',
  //           },
  //           last: {
  //             borderBottom: 'none',
  //           },
  //           first: {
  //             borderTop: 'none',
  //           },
  //         },
  //       };
  //     }
  //
  //     render() {
  //       return <div is={{ item: true, last: true, first: false }} />;
  //     }
  //   }
  //
  //   var Component = ReactCSS(SomeComponent);
  //   var component = TestUtils.renderIntoDocument(<Component />);
  //   expect(component.render().props.style).to.eql({
  //     border: '1px solid #333',
  //     borderBottom: 'none',
  //   });
  // });

  it('should replace the is with a spread if Uppercase', function() {
    class SomeComponent extends React.Component {
      classes() {
        return {
          'default': {
            Component: {
              color: '#aeee00',
            },
          },
        };
      }

      render() {
        return <div is="Component" />;
      }
    }

    var Component = ReactCSS(SomeComponent);
    var component = TestUtils.renderIntoDocument(<Component />);
    expect(component.render().props.color).to.eql('#aeee00');
  });

  it('should replace the is with a spread if Uppercase and combine if two', function() {
    class SomeComponent extends React.Component {
      classes() {
        return {
          'default': {
            Component: {
              color: '#aeee00',
            },
            LastComponent: {
              border: 'none',
            },
          },
        };
      }

      render() {
        return <div is="Component LastComponent" />;
      }
    }

    var Component = ReactCSS(SomeComponent);
    var component = TestUtils.renderIntoDocument(<Component />);
    expect(component.render().props.color).to.eql('#aeee00');
    expect(component.render().props.border).to.eql('none');
  });

});
