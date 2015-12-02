'use strict';

const React = require('react');
const inline = require('../inline');

class ReactCSSComponent extends React.Component {

  css(obj) {
    return inline.call(this, obj);
  }

  styles() {
    return this.css();
  }

};

// For New Mixins
ReactCSSComponent.contextTypes = {
  mixins: React.PropTypes.object,
};

module.exports = () => {
  console.warn('Extending ReactCSS.Component is deprecated in ReactCSS 1.0.0');
  return ReactCSSComponent;
};
