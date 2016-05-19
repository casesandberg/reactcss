'use strict';

export const mergeClasses = (classes, activeNames) => {
  const styles = classes.default && Object.assign({}, classes.default) || {};
  activeNames.map((name) => {
    if (classes[name] !== null) {
      Object.assign(styles, classes[name]);
    }

    return name;
  });
  return styles;
};

export default mergeClasses;
