'use strict';

const _ = require('lodash');
const checkClassStructure = require('./check-class-structure');
let combine = require('./combine');

/*
  Inline CSS function. This is the half-way point until multiple inheritance exists
  @param declaredClasses: Object{ 'class-name': true / false }
  @returns object
*/

module.exports = function(declaredClasses) {
  // What?
  combine = require('./combine');

  const arrayOfStyles = [];

  console.log(this);

  if (!this.classes) {
    throw console.warn(`Define this.classes on \`${ this.constructor.name }\``);
  }

  // Checks structure and warns if its odd
  checkClassStructure(this.classes());

  const activateClass = (name, options) => {
    if (this.classes()[name]) {
      arrayOfStyles.push(this.classes()[name]);
    } else if (name && options && options.warn === true) {
      console.warn(`The \`${ name }\` css class does not exist on \`${ this.constructor.name }\``);
    }
  };

  activateClass('default');

  for (var prop in this.props) {
    let value = this.props[prop];
    if (!_.isObject(value)) {

      if (value === true) {
        activateClass(prop);
        activateClass(`${ prop }-true`);
      } else if (value) {
        activateClass(`${ prop }-${ value }`);
      } else {
        activateClass(`${ prop }-false`);
      }

    }
  }

  for (var name in declaredClasses) {
    let condition = declaredClasses[name];

    if (condition === true) {
      activateClass(name, { warn: true });
    }
  }

  let customMixins = {};
  if (this.context && this.context.mixins) {
    customMixins = this.context.mixins;
  }

  return combine(arrayOfStyles, customMixins);
};
