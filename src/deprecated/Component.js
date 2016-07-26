'use strict'

import React from 'react'
import inline from './inline'
import once from 'lodash/once'

const warning = once(() => console.warn(`Extending ReactCSS.Component
  is deprecated in ReactCSS 1.0.0`))

export class ReactCSSComponent extends React.Component {
  static contextTypes = {
    mixins: React.PropTypes.object,
  };

  css(obj) {
    warning()
    return inline.call(this, obj)
  }

  styles() {
    return this.css()
  }
}

export default ReactCSSComponent
