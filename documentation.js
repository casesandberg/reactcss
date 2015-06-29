webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar Docs, React;\n\nReact = __webpack_require__(1);\n\n__webpack_require__(152);\n\nDocs = __webpack_require__(156);\n\nReact.render(React.createElement(Docs), document.getElementById('root'));\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/documentation/index.coffee\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/documentation/index.coffee?");

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar Docs, DocsBody, DocsFeature, React, Shell,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\nReact = __webpack_require__(1);\n\nShell = __webpack_require__(157);\n\nDocsBody = __webpack_require__(384);\n\nDocsFeature = __webpack_require__(189);\n\nmodule.exports = Docs = (function(superClass) {\n  extend(Docs, superClass);\n\n  function Docs() {\n    return Docs.__super__.constructor.apply(this, arguments);\n  }\n\n  Docs.prototype.render = function() {\n    return React.createElement(Shell, {\n      \"feature\": DocsFeature,\n      \"body\": DocsBody,\n      \"nav\": \"documentation\"\n    });\n  };\n\n  return Docs;\n\n})(React.Component);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/components/docs/Docs.cjsx\n ** module id = 156\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/components/docs/Docs.cjsx?");

/***/ }

});