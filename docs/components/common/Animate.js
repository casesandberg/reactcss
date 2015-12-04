'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

export class Animate extends React.Component {

  static defaultProps = {
    inStartOpacity: '0',
    inStartTransform: '',
    inStartTransition: 'all 400ms cubic-bezier(.55,0,.1,1)',
    inEndOpacity: '1',
    inEndTransform: '',
    inEndTransition: 'all 400ms cubic-bezier(.55,0,.1,1)',
    inDelay: 0,
  }

  classes() {
    return {
      'default': {
        outer: {
          opacity: this.props.inStartOpacity,
          transform: this.props.inStartTransform,
          transition: this.props.inStartTransition,
        },
      },
    };
  }

  componentDidMount() {
    const animate = this.refs.outer;

    setTimeout(() => {
      animate.style.opacity = this.props.inEndOpacity;
      animate.style.transform = this.props.inEndTransform;
      animate.style.transition = this.props.inEndTransition;
    }, this.props.inDelay);
  }

  // componentWillUnmount: ->
  //  React.findDOMNode( this.refs.outer ).style.opacity = '0'

  render() {
    return <div is="outer" ref="outer">{ this.props.children }</div>;
  }
}

export default ReactCSS(Animate);
