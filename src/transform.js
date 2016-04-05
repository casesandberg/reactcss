'use strict';

import React from 'react';
import _ from 'lodash';
import classnames from 'classnames';

import inline from './inline';

const transformElement = (_this, element, classes) => {
  let newProps = {};
  let newChildren = element.props.children;

  // If there are children
  const children = element.props.children;
  if (React.isValidElement(children)) {
    // call transformElement on child
    newChildren = transformElement(_this, React.Children.only(children), classes);
  } else if (_.isArray(children) || _.isObject(children)) {
    // loop through multiple children
    newChildren = React.Children.map(children, (node) => {
      return React.isValidElement(node) ? transformElement(_this, node, classes) : node;
    });
  }

  const findStyle = name => {
    return _this.styles && _this.styles() && _this.styles()[name];
  };

  // If there is an `is` prop and has classes
  if (element.props.is && classes) {
    let is = _.isObject(element.props.is) ? classnames(element.props.is) : element.props.is;
    let styles = {};

    is.split(' ').map((elName, i) => {
      let toMerge = {};
      if (elName[0] === elName[0].toUpperCase()) {
        toMerge = findStyle(elName);
      } else {
        toMerge = { style: findStyle(elName) };
      }

      styles = Object.assign({}, styles, toMerge);
    });

    newProps = Object.assign({}, element.props, styles, { is: null });
  }

  return React.cloneElement(element, newProps, newChildren);
};

export function ReactCSS(Component) {
  return class extends Component {
    styles() {
      return inline.call(this, super.activations && super.activations());
    }

    render() {
      return transformElement(this, super.render(), super.classes && super.classes());
    }
  };
};

export default ReactCSS;
