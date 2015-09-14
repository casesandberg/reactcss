'use strict';

const merge = require('merge');
const _ = require('lodash');

module.exports = thingsToBeMerged => {

  // If its an object, lets just return it
  if (_.isObject(thingsToBeMerged) && !_.isArray(thingsToBeMerged)) {
    return thingsToBeMerged;
  }

  // If the array only has one object in it, return it
  if (thingsToBeMerged.length === 1) {
    return thingsToBeMerged[0];
  }

  // Else, lets just use the merge.js function:
  return merge.recursive.apply(this, thingsToBeMerged);

};
