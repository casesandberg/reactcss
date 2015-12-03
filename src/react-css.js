'use strict';

import reactcss from './transform';
import Component from './deprecated/Component';
import inline from './inline';

const ReactCSS = reactcss;

ReactCSS.Component = Component;
ReactCSS.inline = inline;
ReactCSS.mixin = {
  css: inline,
};

export default ReactCSS;
