'use strict';

import classNames from 'classnames';

const is = string => {

  function replace(classes, prop) {
    classes = classes.trim();

    var outputSpreads = [];
    var outputStyle = [];

    for (var className of classes.split(' ')) {
      if (className !== '') {
        if (className[0] === className[0].toUpperCase()) {
          outputSpreads.push(`{...this.styles().${ className }}`);
        } else {
          outputStyle.push(`this.styles().${ className }`);
        }
      }
    }

    var outputString = '';

    if (outputSpreads.length) {
      outputString += outputSpreads.join(' ');
    }

    if (outputSpreads.length && outputStyle.length) {
      outputString += ' ';
    }

    if (outputStyle.length) {
      if (outputStyle.length > 1) {
        outputString += `style={ReactCSS.merge(${outputStyle.join(', ')})}`;
      } else {
        outputString += `style={${outputStyle[0]}}`;
      }
    }

    string = string.replace(prop, outputString);
  }

  let isProp;
  while (isProp = /(is=(?:"|')(.*?)(?:"|'))/.exec(string)) {
    let prop = isProp[1];
    let elementName = isProp[2];
    replace(elementName, prop);
  }

  // Lets parse some JS too
  while (isProp = /(is=(?:{)(?!{)(.*?)(?:}))/.exec(string)) {
    let prop = isProp[1];
    let elementName = isProp[2];

    try {
      var classes = eval('(function() { return ' + isProp[2] + '})();');
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.warn('"is" eval error: ', e.message);
      }
    }

    replace(classes, prop);
  }

  // Lets parse some JS objects too
  while (isProp = /(is=(?:{)(?={)(.*?})(?:}))/.exec(string)) {
    let prop = isProp[1];
    let elementName = isProp[2];

    try {
      var classes = eval('(function() { return ' + isProp[2] + '})();');
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.warn('"is" eval error: ', e.message);
      }
    }

    replace(classNames(classes), prop);
  }

  return string;
};

export default is;
