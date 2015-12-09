'use strict';

import reactcss from './transform';
import Component from './deprecated/Component';
import inline from './inline';
import Hover from './components/Hover';
import loopable from './loopable';

const ReactCSS = reactcss;

ReactCSS.Component = Component;
ReactCSS.inline = inline;
ReactCSS.mixin = {
  css: inline,
};
ReactCSS.Hover = Hover;
ReactCSS.loopable = loopable;

export default ReactCSS;
