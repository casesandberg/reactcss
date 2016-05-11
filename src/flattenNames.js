'use strict';

import _ from 'lodash';

export const flattenNames = (things) => {
  var names = [];

  things.map((thing) => {
    _.isArray(thing) && flattenNames(thing).map((name) => names.push(name));
    _.isPlainObject(thing) && _.map(thing, (value, key) => {
      names.push(key + '-' + value);
    });
    _.isString(thing) && names.push(thing);
  });

  return names;
};

export default flattenNames;
