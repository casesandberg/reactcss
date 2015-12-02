'use strict';

import React from 'react';

const transformElement = (element, classes) => {
  let newChildren;
  let newElement;
  let newProps = {};

  // const children = element.props.children;
  //
  // if (React.isValidElement(children)) {
  //   newChildren = transformElement(React.Children.only(children));
  // }
  if (element.props.is && classes) {
    newProps = Object.assign({}, element.props, { style: classes['default'][element.props.is], is: undefined });
  }

  return React.cloneElement(element, newProps, newChildren && newChildren);
};

export default function (Component) {
  return class extends Component {
    render() {
      console.log(super.styles);
      return transformElement(super.render(), super.classes && super.classes());
    }
  };
};
