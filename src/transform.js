'use strict';

import React from 'react';
import _ from 'lodash';

const inline = require('./inline');

const transformElement = (_this, element, classes) => {
  let newChildren;
  let newElement;
  let newProps = {};

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

  // If there is an `is` prop and has classes
  if (element.props.is && classes) {
    newProps = Object.assign({}, element.props, { style: _this.styles() && _this.styles()[element.props.is], is: undefined });
  }

  return React.cloneElement(element, newProps, newChildren && newChildren);
};

export default function (Component) {
  return class extends Component {
    styles() {
      return inline.call(this, super.classes());
    }

    render() {
      return transformElement(this, super.render(), super.classes && super.classes());
    }
  };
};
