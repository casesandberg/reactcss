'use strict';

const React = require('react');
const inline = require('./inline');

module.exports = class ReactCSSComponent extends React.Component {

  constructor() {
    super();

    // For New Mixins
    this.contextTypes = {
      mixins: React.PropTypes.object,
    };
  }

  css(obj) {
    inline.call(this, obj);
  }

  styles() {
    this.css();
  }

};
