webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar Docs, React;\n\nReact = __webpack_require__(1);\n\n__webpack_require__(152);\n\nDocs = __webpack_require__(156);\n\nReact.render(React.createElement(Docs), document.getElementById('root'));\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/documentation/index.coffee\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/documentation/index.coffee?");

/***/ },

/***/ 156:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar Docs, DocsBody, DocsFeature, React, Shell,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\nReact = __webpack_require__(1);\n\nShell = __webpack_require__(157).Shell;\n\nDocsBody = __webpack_require__(189);\n\nDocsFeature = __webpack_require__(402);\n\nmodule.exports = Docs = (function(superClass) {\n  extend(Docs, superClass);\n\n  function Docs() {\n    return Docs.__super__.constructor.apply(this, arguments);\n  }\n\n  Docs.prototype.render = function() {\n    return React.createElement(Shell, {\n      \"feature\": DocsFeature,\n      \"body\": DocsBody,\n      \"nav\": \"documentation\"\n    });\n  };\n\n  return Docs;\n\n})(React.Component);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/components/docs/Docs.cjsx\n ** module id = 156\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/components/docs/Docs.cjsx?");

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar Animate, Container, DocsBody, DocsSidebar, Grid, Markdown, React, ReactCSS, commentedFile, docsFiles, markdown, ref, ref1,\n  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\nReact = __webpack_require__(1);\n\nReactCSS = __webpack_require__(159);\n\nmarkdown = __webpack_require__(193);\n\nref = __webpack_require__(157), Container = ref.Container, Grid = ref.Grid;\n\nref1 = __webpack_require__(190), Markdown = ref1.Markdown, Animate = ref1.Animate;\n\nDocsSidebar = __webpack_require__(383);\n\ndocsFiles = __webpack_require__(385);\n\ncommentedFile = __webpack_require__(401);\n\nmodule.exports = DocsBody = (function(superClass) {\n  extend(DocsBody, superClass);\n\n  function DocsBody() {\n    this.changeSelection = bind(this.changeSelection, this);\n    this.attachSidebar = bind(this.attachSidebar, this);\n    this.onScroll = bind(this.onScroll, this);\n    return DocsBody.__super__.constructor.apply(this, arguments);\n  }\n\n  DocsBody.prototype.state = {\n    visible: '',\n    files: {},\n    sidebarFixed: false\n  };\n\n  DocsBody.prototype.classes = function() {\n    return {\n      'default': {\n        docsBody: {\n          paddingBottom: '80px'\n        },\n        content: {\n          fontSize: '17px',\n          lineHeight: '24px',\n          color: 'rgba(0,0,0,.47)'\n        },\n        animate: {\n          marginTop: '-240px',\n          paddingBottom: '40px'\n        },\n        inner: {\n          padding: '16px'\n        },\n        file: {\n          paddingBottom: '10px'\n        }\n      }\n    };\n  };\n\n  DocsBody.prototype.componentDidMount = function() {\n    var file, files, i, len, ref2;\n    window.addEventListener('scroll', this.onScroll, false);\n    files = {};\n    ref2 = React.findDOMNode(this.refs.files).children;\n    for (i = 0, len = ref2.length; i < len; i++) {\n      file = ref2[i];\n      files[file.offsetTop] = file.id;\n    }\n    return this.setState({\n      files: files\n    });\n  };\n\n  DocsBody.prototype.componentWillUnmount = function() {\n    return window.removeEventListener('scroll', this.onScroll, false);\n  };\n\n  DocsBody.prototype.onScroll = function(e) {\n    this.changeSelection();\n    return this.attachSidebar();\n  };\n\n  DocsBody.prototype.attachSidebar = function() {\n    var sidebarTop;\n    sidebarTop = React.findDOMNode(this.refs.docsSidebar).getBoundingClientRect().top;\n    if (sidebarTop <= 0 && this.state.sidebarFixed === false) {\n      this.setState({\n        sidebarFixed: true\n      });\n    }\n    if (sidebarTop > 0 && this.state.sidebarFixed === true) {\n      return this.setState({\n        sidebarFixed: false\n      });\n    }\n  };\n\n  DocsBody.prototype.changeSelection = function() {\n    var id, mostVisible, offset, ref2, top;\n    top = document.body.scrollTop - 150;\n    mostVisible = '';\n    ref2 = this.state.files;\n    for (offset in ref2) {\n      id = ref2[offset];\n      if (offset < top) {\n        mostVisible = id;\n      }\n    }\n    if (mostVisible !== this.state.visible) {\n      return this.setState({\n        visible: mostVisible\n      });\n    }\n  };\n\n  DocsBody.prototype.render = function() {\n    var args, body, file, fileName;\n    return React.createElement(\"div\", {\n      \"style\": (this.styles().docsBody),\n      \"className\": \"docsBody\"\n    }, React.createElement(Container, null, React.createElement(Grid, {\n      \"uneven\": true,\n      \"flex\": \"1-3\"\n    }, React.createElement(Animate, {\n      \"inDelay\": 900.,\n      \"ref\": \"docsSidebar\"\n    }, React.createElement(DocsSidebar, {\n      \"files\": docsFiles,\n      \"active\": this.state.visible,\n      \"fixed\": this.state.sidebarFixed\n    })), React.createElement(\"div\", {\n      \"style\": (this.styles().content)\n    }, React.createElement(Animate, {\n      \"inStartTransform\": \"translateY(20px)\",\n      \"inEndTransform\": \"translateY(0)\",\n      \"inDelay\": 400.\n    }, React.createElement(\"div\", {\n      \"style\": (this.styles().animate)\n    }, React.createElement(Markdown, null, commentedFile))), React.createElement(\"div\", {\n      \"ref\": \"files\"\n    }, (function() {\n      var results;\n      results = [];\n      for (fileName in docsFiles) {\n        file = docsFiles[fileName];\n        args = markdown.getArgs(file);\n        body = markdown.getBody(file);\n        results.push(React.createElement(\"div\", {\n          \"key\": fileName,\n          \"id\": args.id\n        }, (markdown.isSubSection(fileName) ? React.createElement(\"h1\", null, args.title) : React.createElement(\"h2\", null, args.title)), (body.trim() ? React.createElement(\"div\", {\n          \"style\": (this.styles().file)\n        }, React.createElement(Markdown, null, body)) : void 0)));\n      }\n      return results;\n    }).call(this))))));\n  };\n\n  return DocsBody;\n\n})(ReactCSS.Component);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/components/docs/DocsBody.cjsx\n ** module id = 189\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/components/docs/DocsBody.cjsx?");

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar DocsSidebar, DocsSidebarItem, React, ReactCSS, Tile, markdown,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\nReact = __webpack_require__(1);\n\nReactCSS = __webpack_require__(159);\n\nmarkdown = __webpack_require__(193);\n\nTile = __webpack_require__(173).Tile;\n\nDocsSidebarItem = __webpack_require__(384);\n\nmodule.exports = DocsSidebar = (function(superClass) {\n  extend(DocsSidebar, superClass);\n\n  function DocsSidebar() {\n    return DocsSidebar.__super__.constructor.apply(this, arguments);\n  }\n\n  DocsSidebar.prototype.classes = function() {\n    return {\n      'default': {\n        sidebar: {\n          paddingTop: '20px',\n          position: 'relative'\n        },\n        star: {\n          position: 'absolute',\n          top: '-65px',\n          left: '10px'\n        }\n      },\n      'fixed': {\n        sidebar: {\n          top: '0',\n          bottom: '0',\n          position: 'fixed'\n        },\n        star: {\n          bottom: '30px',\n          top: 'auto'\n        }\n      }\n    };\n  };\n\n  DocsSidebar.prototype.render = function() {\n    var args, file, fileName, sectionNumber;\n    return React.createElement(\"div\", {\n      \"style\": (this.styles().sidebar)\n    }, React.createElement(\"div\", {\n      \"style\": (this.styles().star)\n    }, React.createElement(\"iframe\", {\n      \"src\": \"https://ghbtns.com/github-btn.html?user=casesandberg&repo=reactcss&type=star&count=true&size=large\",\n      \"scrolling\": \"0\",\n      \"width\": \"160px\",\n      \"height\": \"30px\",\n      \"frameBorder\": \"0\"\n    })), (function() {\n      var ref, results;\n      ref = this.props.files;\n      results = [];\n      for (fileName in ref) {\n        file = ref[fileName];\n        args = markdown.getArgs(file);\n        sectionNumber = markdown.isSubSection(fileName) ? fileName.split('-')[0] : false;\n        results.push(React.createElement(DocsSidebarItem, {\n          \"key\": fileName,\n          \"sidebarNumber\": sectionNumber,\n          \"href\": \"#\" + args.id,\n          \"active\": this.props.active === args.id,\n          \"bold\": (sectionNumber ? true : void 0),\n          \"label\": args.title\n        }));\n      }\n      return results;\n    }).call(this));\n  };\n\n  return DocsSidebar;\n\n})(ReactCSS.Component);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/components/docs/DocsSidebar.cjsx\n ** module id = 383\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/components/docs/DocsSidebar.cjsx?");

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar DocsSidebarItem, React, ReactCSS, Tile,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\nReact = __webpack_require__(1);\n\nReactCSS = __webpack_require__(159);\n\nTile = __webpack_require__(173).Tile;\n\nmodule.exports = DocsSidebarItem = (function(superClass) {\n  extend(DocsSidebarItem, superClass);\n\n  function DocsSidebarItem() {\n    return DocsSidebarItem.__super__.constructor.apply(this, arguments);\n  }\n\n  DocsSidebarItem.prototype.classes = function() {\n    return {\n      'default': {\n        sidebarItem: {\n          fontSize: '14px',\n          textDecoration: 'none',\n          color: 'rgba(0, 0, 0, .57)'\n        },\n        number: {\n          fontSize: '14px',\n          color: 'rgba(0, 0, 0, .27)',\n          fontWeight: 'bold',\n          paddingTop: '14px'\n        },\n        li: {\n          paddingBottom: '8px'\n        }\n      },\n      'bold': {\n        sidebarItem: {\n          fontWeight: 'bold',\n          paddingTop: '14px',\n          display: 'block'\n        }\n      },\n      'active': {\n        sidebarItem: {\n          color: '#4A90E2'\n        }\n      }\n    };\n  };\n\n  DocsSidebarItem.prototype.render = function() {\n    return React.createElement(\"div\", {\n      \"style\": (this.styles().li)\n    }, React.createElement(Tile, {\n      \"condensed\": true\n    }, React.createElement(\"div\", {\n      \"style\": (this.styles().number)\n    }, this.props.sidebarNumber), React.createElement(\"a\", {\n      \"href\": this.props.href,\n      \"style\": (this.styles().sidebarItem)\n    }, this.props.label)));\n  };\n\n  return DocsSidebarItem;\n\n})(ReactCSS.Component);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/components/docs/DocsSidebarItem.cjsx\n ** module id = 384\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/components/docs/DocsSidebarItem.cjsx?");

/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = {\n  '01-why-reactcss': __webpack_require__(386),\n  '02-preface': __webpack_require__(387),\n  '03-getting-started': __webpack_require__(388),\n  '03.01-install': __webpack_require__(389),\n  '03.02-include-it': __webpack_require__(390),\n  '03.03-default-class': __webpack_require__(391),\n  '03.04-attach-to-elements': __webpack_require__(392),\n  '04-creating-classes': __webpack_require__(393),\n  '04.01-default-class': __webpack_require__(394),\n  '04.02-additional-classes': __webpack_require__(395),\n  '05-activating-classes': __webpack_require__(396),\n  '05.01-automatic-activation': __webpack_require__(397),\n  '05.02-manual-activation': __webpack_require__(398),\n  '06-attaching-styles': __webpack_require__(399),\n  '07-css-mixins': __webpack_require__(400)\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/index.coffee\n ** module id = 385\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/index.coffee?");

/***/ },

/***/ 386:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: why-reactcss\\ntitle: Why ReactCSS?\\n\\n---\\nReactCSS builds upon a lot of the inline-css thinking the community has been doing with a focus on:\\n\\n## Class-based Data Structure\\n\\nReturning to a class based data structure so that you can \\\"pop\\\" css classes on and off conditionally (similar to how you would do it in a css file) with little to no code.\\n\\n## Keeping All the Styles Together\\n\\nCustom components and regular html elements are first-class citizens when it comes to styling in a component. Keeping all of the styles together helps separate the style logic from the display logic and business logic.\\n\\n\\n## An Easy Way to Attach Styles\\n\\nReactCSS introduces the \\\"is\\\" syntax via the `react-map-styles` package so that you don't have to remember to put inline styles on html elements and spreads on custom components\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/01-why-reactcss.md\n ** module id = 386\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/01-why-reactcss.md?");

/***/ },

/***/ 387:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: preface\\ntitle: Preface\\n\\n---\\nReactCSS encourages you to create **a bunch of little components** that hold unique styles for you to share around your app. Take Google's Material Design as an example: You would create one component called `Raised` that handles displaying drop shadows app-wide.\\n\\n**Media Queries are a hack**. Period. There is no media query support with this package. We instead should be focusing on Element Queries or `Component Queries` with the idea that a component will handle displaying itself in whatever size box you give it. Look for a `react-comonent-queries` package coming soon.\\n\\nNth-child and css selectors should be handled by the parent that is looping the component and passed down as props. **This allows you to have fine-grain control and complex selectors**. i.e. passing a the data type of the previous and next components to each component in a list.\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/02-preface.md\n ** module id = 387\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/02-preface.md?");

/***/ },

/***/ 388:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: getting-started\\ntitle: Getting Started\\n\\n---\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/03-getting-started.md\n ** module id = 388\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/03-getting-started.md?");

/***/ },

/***/ 389:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: getting-started-install\\ntitle: Install\\n\\n---\\nStart by installing `reactcss` from npm:\\n```\\nnpm install reactcss --save\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/03.01-install.md\n ** module id = 389\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/03.01-install.md?");

/***/ },

/***/ 390:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: getting-started-include\\ntitle: Include the File\\n\\n---\\nIf you are using the traditional ES5 syntax with `React.createClass`, include ReactCSS.inline as a mixin:\\n```javascript\\nvar ReactCSS = require('reactcss');\\n\\nvar Button = React.createClass({\\n  mixins: [ ReactCSS.mixin ],\\n\\n  ...\\n});\\n```\\n\\nIf you are using the new ES6 syntax, you just have to extend ReactCSS.Component instead of React.Component. This is until the guys at react sort out multiple inheritance.\\n```javascript\\nvar ReactCSS = require('reactcss');\\n\\nclass Button extends ReactCSS.Component {\\n  ...\\n}\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/03.02-include-it.md\n ** module id = 390\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/03.02-include-it.md?");

/***/ },

/***/ 391:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: getting-started-default\\ntitle: Put In a Default Class\\n\\n---\\nInclude a default class, think of this as the base css.\\n```javascript\\nvar ReactCSS = require('reactcss');\\n\\nclass Button extends ReactCSS.Component {\\n\\n  classes() {\\n    return {\\n      'default': {\\n        modal: {\\n          background: '#fff',\\n          boxShadow: '0 2px 4px rgba(0, 0, 0, .48)'\\n        },\\n        title: {\\n          fontSize: '24px'\\n        },\\n        Content: {\\n          type: 'modal-content',\\n          padding: '20px'\\n        }\\n      }\\n    }\\n  }\\n\\n  ...\\n}\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/03.03-default-class.md\n ** module id = 391\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/03.03-default-class.md?");

/***/ },

/***/ 392:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: getting-started-attach\\ntitle: Attach Styles to HTML\\n\\n---\\nLastly, we need to attach the styles to the corresponding elements.\\n\\nWhen attaching styles to a normal HTML element, you just set styles to the `this.styles().element` variable. When attaching styles to a custom component, you just set that same variable as a spread `{...this.styles().element}`:\\n``` javascript\\nvar ReactCSS = require('reactcss');\\n\\nclass Button extends ReactCSS.Component {\\n\\n  classes() {\\n    return {\\n      'default': {\\n        modal: {\\n          background: '#fff',\\n          boxShadow: '0 2px 4px rgba(0, 0, 0, .48)'\\n        },\\n        title: {\\n          fontSize: '24px'\\n        },\\n        Content: {\\n          type: 'modal-content',\\n          padding: '20px'\\n        }\\n      }  \\n    }\\n  }\\n\\n  render() {\\n    return (\\n      <div styles={ this.styles().modal }>\\n        <div styles={ this.styles().title }>{ this.props.title }</div>\\n        <Content {...this.styles().Content} />\\n      </div>\\n    )\\n  }\\n}\\n```\\nWe don't like worrying about different style and spread declarations, and you probably don't either. Thats why we created `react-map-styles` that introduces the `is=\\\"\\\"` syntax to map things. Just use a lowercase name for html elements `is=\\\"element\\\"` and an uppercase when its a custom component `is=\\\"Component\\\"`:\\n```\\nvar ReactCSS = require('reactcss');\\n\\nclass Button extends ReactCSS.Component {\\n  ...\\n\\n  render() {\\n    return (\\n      <div is=\\\"modal\\\">\\n        <div is=\\\"title\\\">{ this.props.title }</div>\\n        <Content is=\\\"Content\\\" />\\n      </div>\\n    )\\n  }\\n}\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/03.04-attach-to-elements.md\n ** module id = 392\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/03.04-attach-to-elements.md?");

/***/ },

/***/ 393:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: creating-classes\\ntitle: Creating Classes\\n\\n---\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/04-creating-classes.md\n ** module id = 393\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/04-creating-classes.md?");

/***/ },

/***/ 394:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: creating-classes-default\\ntitle: The Default Class\\n\\n---\\nThe default class is your base style that gets applied to your component. 80% of your components will just use a default class.\\n```javascript\\nclasses() {\\n  return {\\n    'default': {\\n      header: {\\n        position: 'fixed',\\n        display: 'flex',\\n        justifyContent: 'space-between'\\n      },\\n      logo: {\\n        padding: '20px'\\n      },\\n      nav: {\\n        minWidth: '200px'\\n      }\\n    },\\n\\n    ...\\n  }\\n}\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/04.01-default-class.md\n ** module id = 394\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/04.01-default-class.md?");

/***/ },

/***/ 395:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: creating-classes-additional\\ntitle: Additional Classes\\n\\n---\\nWhen you want to create classes that style your elements differenly depending on the props or state you just create a new classe below default. You can create as many of these as you would like.\\n```javascript\\nclasses() {\\n  return {\\n    ...\\n\\n    'highlight': {\\n      label: {\\n        padding: '2px 4px',\\n        background: 'rgba(0, 0, 0, .05)',\\n        boxShadow: 'inset 0 0 0 1px rgba(0, 0, 0, .05)',\\n        borderRadius: '2px'\\n      }\\n    },\\n    'truncate': {\\n      label: {\\n        width: '100%',\\n        whiteSpace: 'nowrap',\\n        overflow: 'hidden',\\n        textOverflow: 'ellipsis'\\n      }\\n    },\\n    'hide-icon': {\\n      icon: {\\n        display: 'none'\\n      }\\n    }\\n  }\\n}\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/04.02-additional-classes.md\n ** module id = 395\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/04.02-additional-classes.md?");

/***/ },

/***/ 396:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: activating-classes\\ntitle: Activating Classes\\n\\n---\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/05-activating-classes.md\n ** module id = 396\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/05-activating-classes.md?");

/***/ },

/***/ 397:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: activating-classes-automatic\\ntitle: Automatic Activation\\n\\n---\\nIn most cases you will want to use class names that allow classes to be automatically activated via props. To make them auto-activating, name them such that \\\"propName-value\\\", eg:\\n\\n``` javascript\\nclasses() {\\n  // This is activated by default\\n  'default': {\\n    ...\\n  },\\n  // this.props.active === true\\n  'active': {\\n    ...\\n  },\\n  // this.props.active === true\\n  'active-true': {\\n    ...\\n  },\\n  // this.props.active === false\\n  'active-false': {\\n    ...\\n  },\\n  // this.props.theme === 'dark'\\n  'theme-dark': {\\n    ...\\n  }\\n}\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/05.01-automatic-activation.md\n ** module id = 397\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/05.01-automatic-activation.md?");

/***/ },

/***/ 398:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: activating-classes-manual\\ntitle: Manual Activation\\n\\n---\\nIn the case of state, or if you have a complex condition you want met for class activation, you just pass an object with `{ className: condition }` to the css function in the styles declaration:\\n```\\nstyles() {\\n  return this.css({\\n    // 'className': condition to activate\\n    'hovered': this.state.hovered,\\n    'show-top-border': this.props.prev.type !== 'raised'\\n                       && this.props.type === 'raised'\\n  })\\n}\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/05.02-manual-activation.md\n ** module id = 398\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/05.02-manual-activation.md?");

/***/ },

/***/ 399:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: attaching-styles\\ntitle: Attaching Styles\\n\\n---\\nTo attach styles you use inline styles for html elements and spreads for custom components. You just map them to the name you used in the css for that element `this.styles().element`:\\n```\\nrender() {\\n  return (\\n    <div style={ this.styles().dialog }>\\n      <h1 style={ this.styles().title }>\\n        { this.props.title }\\n      </h1>\\n      <div style={ this.styles().actions }>\\n        <Button {...this.styles().Cancel} label=\\\"Cancel\\\" />\\n        <Button {...this.styles().Accept} label=\\\"Accept\\\" />\\n      </div>\\n    </div>\\n  )\\n}\\n```\\n\\n## react-map-styles\\nTo make things easier there is a react-map-styles plugin that you can use with Webpack that introduces the `is` syntax for rapid development. You just pass is the name of the element you declared in your css. Using a lowercase name adds the css as an inline tyles, while an uppercase name applies a spread to custom components:\\n```\\nrender() {\\n  return (\\n    <div is=\\\"dialog\\\">\\n      <h1 is=\\\"title\\\">\\n        { this.props.title }\\n      </h1>\\n      <div is=\\\"actions\\\">\\n        <Button is=\\\"Cancel\\\" label=\\\"Cancel\\\" />\\n        <Button is=\\\"Accept\\\" label=\\\"Accept\\\" />\\n      </div>\\n    </div>\\n  )\\n}\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/06-attaching-styles.md\n ** module id = 399\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/06-attaching-styles.md?");

/***/ },

/***/ 400:
/***/ function(module, exports) {

	eval("module.exports = \"---\\nid: css-mixins\\ntitle: CSS Mixins\\n\\n---\\nMixins are similar to mixins that you would use in any other CSS preprocessor. They take any key that matches a function in the mixin library and transforms it using the value. Take boxShadow for example:\\n```\\n'default':{\\n  card: {\\n    boxShadow: '0 1px 4px rgba(0, 0, 0, .24s)'\\n  }\\n}\\n```\\nis transformed because it matches `boxShadow` in the mixin library to add vendor support:\\n```\\nboxShadow: function(value){\\n  if(value){\\n    return{\\n      msBoxShadow: value,\\n      MozBoxShadow: value,\\n      OBoxShadow: value,\\n      WebkitBoxShadow: value,\\n      boxShadow: value\\n    }\\n  }\\n}\\n```\\n## List of Mixins\\n* `boxShadow` `borderRadius` `transition` `transform` - Vendor prefixes.\\n* `Absolute` - Set the value as a string of 'topValue rightValue bottomValue leftValue' and it transform to position: absolute with those top, right, bottom and left values.\\n* `Extend` - Used for copying styles from another element in that class. Set the value as a string with the name of the element that you want to copy the styles from.\\n\\n## Creating Your Own Mixins\\nTo create your own mixins to use in your projects you just have to create a mixins context object where the key matches the key to replace and the value is a function that returns an object of the finalized css. All components below this one will be able to use the mixin:\\n\\n```\\nclass Root extends ReactCSS.Component {\\n  getChildContext() {\\n    return {\\n      mixins: {\\n        backgroundHexAlpha: function(value){\\n          // value[0] is hex, value[1] is alpha\\n          var bigint = parseInt(value[0].replace('#', ''), 16);\\n          var r = (bigint >> 16) & 255;\\n          var g = (bigint >> 8) & 255;\\n          var b = bigint & 255;\\n          var rgba = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + value[1] + ')';\\n\\n          return {\\n            background: rgba\\n          }\\n        }\\n      }  \\n    }\\n  }\\n\\n  ...\\n}\\nRoot.childContextTypes: {\\n  mixins: React.PropTypes.object\\n}\\n\\n```\\nAnd then use it in a later component:\\n```\\n'default': {\\n  wrap: {\\n    backgroundHexAlpha: ['#000000', .1]\\n  }\\n}\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/07-css-mixins.md\n ** module id = 400\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/07-css-mixins.md?");

/***/ },

/***/ 401:
/***/ function(module, exports) {

	eval("module.exports = \"```javascript\\n// Include the library\\nvar ReactCSS = require('reactcss');\\n\\n// Extend ReactCSS instead of React\\nclass Component extends ReactCSS.Component {\\n\\n  classes() {\\n    return {\\n      // The default style will be applied automatically\\n      'default': {\\n        box: {\\n          background: '#eee'\\n        },\\n        title: {\\n          color: 'rgba(0, 0, 0, .87)'\\n        }\\n      },\\n      // Name classes 'propName-propValue' to activate\\n      // via props. i.e. this.props.theme = 'dark'\\n      'theme-dark': {\\n        box: {\\n          background: '#333'\\n        },\\n        title: {\\n          color: 'rgba(255, 255, 255, .87)'\\n        }\\n      },\\n      // We are going to name this class here and\\n      // activate it down below in the @css function.\\n      'hovered': {\\n        box: {\\n          background: 'blue'\\n        },\\n        title: {\\n          color: 'rgba(255, 255, 255, .87)'\\n        }\\n      }\\n    }\\n  }\\n\\n  styles() {\\n    return this.css({\\n      // 'className': Condition to activate\\n      'hovered': this.state.hovered\\n    })\\n  }\\n\\n  render() {\\n    return (\\n      // Attach styles using `is` with `react-map-styles`\\n      // See below for more details on attaching styles\\n      <div is=\\\"box\\\">\\n        <div is=\\\"title\\\">{ this.props.children }</div>\\n      </div>\\n    )\\n  }\\n}\\n```\\n\";\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/docs/00-commented-file.md\n ** module id = 401\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/docs/00-commented-file.md?");

/***/ },

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\nvar Animate, Container, DocsFeature, React, ReactCSS,\n  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },\n  hasProp = {}.hasOwnProperty;\n\nReact = __webpack_require__(1);\n\nReactCSS = __webpack_require__(159);\n\nContainer = __webpack_require__(157).Container;\n\nAnimate = __webpack_require__(190).Animate;\n\nmodule.exports = DocsFeature = (function(superClass) {\n  extend(DocsFeature, superClass);\n\n  function DocsFeature() {\n    return DocsFeature.__super__.constructor.apply(this, arguments);\n  }\n\n  DocsFeature.prototype.classes = function() {\n    return {\n      'default': {\n        docsFeature: {\n          background: '#49535B',\n          height: '100%'\n        },\n        title: {\n          paddingTop: '130px',\n          paddingLeft: '27.25%',\n          marginLeft: '20px',\n          fontSize: '34px',\n          color: 'rgba(255, 255, 255, .87)',\n          WebkitFontSmoothing: 'antialiased'\n        }\n      }\n    };\n  };\n\n  DocsFeature.prototype.render = function() {\n    return React.createElement(\"div\", {\n      \"style\": (this.styles().docsFeature)\n    }, React.createElement(Container, null, React.createElement(Animate, null, React.createElement(\"div\", {\n      \"style\": (this.styles().title)\n    }, \"Documentation\"))));\n  };\n\n  return DocsFeature;\n\n})(ReactCSS.Component);\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./docs/components/docs/DocsFeature.cjsx\n ** module id = 402\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./docs/components/docs/DocsFeature.cjsx?");

/***/ }

});