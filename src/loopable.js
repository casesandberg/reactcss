'use strict';

const loopable = (i, length) => {
  const props = {};
  const setProp = (name, value) => {
    props[name] = value != null ? value : true;
  };

  i === 0 && setProp('first');
  i === length - 1 && setProp('last');
  (i === 0 || i % 2 == 0) && setProp('even');
  Math.abs(i % 2) == 1 && setProp('odd');
  setProp('child', i);

  return props;
};

export default loopable;
