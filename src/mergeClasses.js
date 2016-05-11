'use strict';

export const mergeClasses = (classes, activeNames) => {
  let styles = classes.default && Object.assign({}, classes.default) || {};
  activeNames.map((name) => {
    if (classes[name] !== null) {
      Object.assign(styles, classes[name]);
    }
  });
  return styles;
};

export default mergeClasses;
