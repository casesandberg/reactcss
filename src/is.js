'use strict';

import classNames from 'classnames';

const is = string => {

  function replace(classes, prop) {
    if (classes.replace(/\s+/g, '') === "") {
      string = string.replace(prop, '');
    }

    // if it is capitalized, set spread
    else if (classes[0] === classes[0].toUpperCase()) {
      string = string.replace(prop, `{...this.styles().${ classes }}`);
    }

    // otherwise just give it an inline style
    else {
      string = string.replace(prop, `style={this.styles().${ classes }}`);
    }
  }

  let isProp;
  while (isProp = /(is=(?:"|')(.*?)(?:"|'))/.exec(string)) {

    // The is block that should be replaced. Looks like: `is="message"`
    let prop = isProp[1];

    // The name of the value that we want to be returning from the style function.
    let elementName = isProp[2];

    replace(elementName, prop);
  }

  // Lets parse some JS too
  while (isProp = /(is=(?:{)(?!{)(.*?)(?:}))/.exec(string)) {
    // The is block that should be replaced. Looks like: `is="message"`
    let prop = isProp[1];

    // The name of the value that we want to be returning from the style function.
    let elementName = isProp[2];

    try {
      var classes = eval('(function() { return ' + isProp[2] + '})();');
    } catch (e) {
      if (e instanceof SyntaxError) {
        console.log(e.message);
      }
    }

    replace(classes, prop);
  }

  // Lets parse some JS too
  while (isProp = /(is=(?:{)(?={)(.*?})(?:}))/.exec(string)) {
    // The is block that should be replaced. Looks like: `is="message"`
    let prop = isProp[1];

    // The name of the value that we want to be returning from the style function.
    let elementName = isProp[2];
    let classes = eval('(function() { return ' + isProp[2] + '})();');

    replace(classNames(classes), prop);
  }

  return string;
};

export default is;
