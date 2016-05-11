'use strict';

import { React, TestUtils, expect, sinon } from './helpers';
import ReactCSS from '../src/react-css';

// describe('ReactCSS', function() {
//
//   const sandbox = sinon.sandbox.create();
//
//   beforeEach(() => {
//     sandbox.stub(console, 'log');
//     sandbox.stub(console, 'error');
//     return sandbox.stub(console, 'warn');
//   });
//
//   afterEach(() => {
//     return sandbox.restore();
//   });
//
//   it('should return simple css', function() {
//
//     class SomeComponent extends React.Component {
//       classes() {
//         return {
//           'default': {
//             body: {
//               background: '#fafafa',
//             },
//           },
//         };
//       }
//
//       render() {
//         return <div />;
//       }
//     }
//
//     const Component = ReactCSS(SomeComponent);
//     const component = TestUtils.renderIntoDocument(<Component />);
//
//     expect(component.styles()).to.eql({
//       body: {
//         background: '#fafafa',
//       },
//     });
//   });
//
//   it('should return complex css', function() {
//
//     class SomeComponent extends React.Component {
//       classes() {
//         return {
//           'default': {
//             title: {
//               color: this.props.color,
//             },
//             card: {
//               boxShadow: '0 0 2px rgba(0,0,0,.1)',
//             },
//           },
//         };
//       }
//
//       render() {
//         return <div />;
//       }
//     }
//
//     const Component = ReactCSS(SomeComponent);
//     const component = TestUtils.renderIntoDocument(<Component color="red" />);
//
//     expect(component.styles()).to.eql({
//       card: {
//         MozBoxShadow: '0 0 2px rgba(0,0,0,.1)',
//         OBoxShadow: '0 0 2px rgba(0,0,0,.1)',
//         WebkitBoxShadow: '0 0 2px rgba(0,0,0,.1)',
//         boxShadow: '0 0 2px rgba(0,0,0,.1)',
//         msBoxShadow: '0 0 2px rgba(0,0,0,.1)',
//       },
//       title: {
//         color: 'red',
//       },
//     });
//   });
//
//   it('should throw a deprecation warning for using the old extend', function() {
//
//     class SomeComponent extends ReactCSS.Component {
//       classes() {
//         return {
//           'default': {
//             body: {
//               background: '#fafafa',
//             },
//             title: {
//               fontSize: '24px',
//             },
//           },
//         };
//       }
//
//       render() {
//         return (
//           <div style={ this.styles().body }>
//             <div style={ this.styles().title }>Title</div>
//           </div>
//         );
//       }
//     }
//
//     const component = TestUtils.renderIntoDocument(<SomeComponent />);
//     sinon.assert.calledOnce(console.warn);
//   });
// });
