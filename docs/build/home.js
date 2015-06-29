webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar Home, React;\n\nReact = __webpack_require__(1);\n\n__webpack_require__(152);\n\nHome = __webpack_require__(405);\n\nReact.render(React.createElement(Home), document.getElementById('root'));\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/index.coffee\n ** module id = 0\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./docs/index.coffee?");

/***/ },

/***/ 405:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar Home, HomeBody, HomeFeature, React, Shell,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\nReact = __webpack_require__(1);\n\nShell = __webpack_require__(157);\n\nHomeBody = __webpack_require__(191);\n\nHomeFeature = __webpack_require__(185);\n\nmodule.exports = Home = (function(superClass) {\n  extend(Home, superClass);\n\n  function Home() {\n    return Home.__super__.constructor.apply(this, arguments);\n  }\n\n  Home.prototype.render = function() {\n    return React.createElement(Shell, {\n      \"feature\": HomeFeature,\n      \"body\": HomeBody,\n      \"nav\": \"about\"\n    });\n  };\n\n  return Home;\n\n})(React.Component);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/components/home/Home.cjsx\n ** module id = 405\n ** module chunks = 1\n **/\n//# sourceURL=webpack:///./docs/components/home/Home.cjsx?");

/***/ }

});