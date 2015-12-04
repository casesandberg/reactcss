'use strict';

import React from 'react';
import inline from '../inline';
import _ from 'lodash';

const warning = _.once(() => console.warn('Extending ReactCSS.Component is deprecated in ReactCSS 1.0.0'));

class ReactCSSComponent extends React.Component {
  css(obj) {
    warning();
    return inline.call(this, obj);
  }

  styles() {
    return this.css();
  }

  static contextTypes = {
    mixins: React.PropTypes.object,
  }

};

export default ReactCSSComponent;
