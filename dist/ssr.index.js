(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["vue-js-modal"] = factory(require("vue"));
	else
		root["vue-js-modal"] = factory(root["vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = __webpack_require__(5);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plugin = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) {
      return;
    }

    this.installed = true;
    this.event = new Vue();

    Vue.prototype.$modal = {
      show: function show(name, params) {
        Plugin.event.$emit('toggle', name, true, params);
      },
      hide: function hide(name, params) {
        Plugin.event.$emit('toggle', name, false, params);
      },
      toggle: function toggle(name, params) {
        Plugin.event.$emit('toggle', name, undefined, params);
      }
    };

    Vue.component('modal', _Modal2.default);
  }
};

exports.default = Plugin;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var inRange = exports.inRange = function inRange(from, to, value) {
  if (value < from) {
    return from;
  }

  if (value > to) {
    return to;
  }

  return value;
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var listToStyles = __webpack_require__(16)

module.exports = function (parentId, list, isProduction) {
  if (typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    var context = __VUE_SSR_CONTEXT__
    var styles = context._styles

    if (!styles) {
      styles = context._styles = {}
      Object.defineProperty(context, 'styles', {
        enumberable: true,
        get : function() {
          return (
            context._renderedStyles ||
            (context._renderedStyles = renderStyles(styles))
          )
        }
      })
    }

    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        style.ids.push(part.id)
        style.css += '\n' + part.css
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(14)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/yev/Projects/vue/vue-js-modal/src/Modal.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Modal.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(17);

var _vue2 = _interopRequireDefault(_vue);

var _index = __webpack_require__(0);

var _index2 = _interopRequireDefault(_index);

var _Resizer = __webpack_require__(11);

var _Resizer2 = _interopRequireDefault(_Resizer);

var _util = __webpack_require__(1);

var _parser = __webpack_require__(8);

var _parser2 = _interopRequireDefault(_parser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'VueJsModal',
  props: {
    name: {
      required: true,
      type: String
    },
    delay: {
      type: Number,
      default: 0
    },
    resizable: {
      type: Boolean,
      default: false
    },
    adaptive: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: [Boolean, String],
      default: false
    },
    reset: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String
    },
    clickToClose: {
      type: Boolean,
      default: true
    },
    classes: {
      type: [String, Array],
      default: 'v--modal'
    },
    minWidth: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        return value >= 0;
      }
    },
    minHeight: {
      type: Number,
      default: 0,
      validator: function validator(value) {
        return value >= 0;
      }
    },
    width: {
      type: [Number, String],
      default: 600,
      validator: function validator(value) {
        if (typeof value === 'string') {
          var width = (0, _parser2.default)(value);
          return (width.type === '%' || width.type === 'px') && width.value > 0;
        }

        return value >= 0;
      }
    },
    height: {
      type: [Number, String],
      default: 300,
      validator: function validator(value) {
        if (typeof value === 'string') {
          var height = (0, _parser2.default)(value);
          return (height.type === '%' || height.type === 'px') && height.value > 0;
        }

        return value >= 0;
      }
    },
    pivotX: {
      type: Number,
      default: 0.5,
      validator: function validator(value) {
        return value >= 0 && value <= 1;
      }
    },
    pivotY: {
      type: Number,
      default: 0.5,
      validator: function validator(value) {
        return value >= 0 && value <= 1;
      }
    }
  },
  components: {
    Resizer: _Resizer2.default
  },
  data: function data() {
    return {
      visible: false,

      visibility: {
        modal: false,
        overlay: false
      },

      shift: {
        left: 0,
        top: 0
      },

      modal: {
        width: 0,
        widthType: 'px',
        height: 0,
        heightType: 'px'
      },

      window: {
        width: 0,
        height: 0
      }
    };
  },

  watch: {
    visible: function visible(value) {
      var _this = this;

      if (value) {
        this.visibility.overlay = true;


        setTimeout(function () {
          _this.visibility.modal = true;
          _this.$nextTick(function () {
            _this.addDraggableListeners();
          });
        }, this.delay);
      } else {
        this.visibility.modal = false;

        setTimeout(function () {
          _this.visibility.overlay = false;
          _this.$nextTick(function () {
            _this.removeDraggableListeners();
          });
        }, this.delay);
      }
    }
  },
  created: function created() {
    this.setInitialSize();
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    _index2.default.event.$on('toggle', function (name, state, params) {
      if (name === _this2.name) {
        if (typeof state === 'undefined') {
          state = !_this2.visible;
        }

        _this2.toggle(state, params);
      }
    });

    window.addEventListener('resize', this.onWindowResize);
    this.onWindowResize();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  },

  computed: {
    position: function position() {
      var window = this.window,
          modal = this.modal,
          shift = this.shift;


      var maxLeft = window.width - this.trueModalWidth;
      var maxTop = window.height - this.trueModalHeight;

      var left = shift.left + this.pivotX * (window.width - this.trueModalWidth);
      var top = shift.top + this.pivotY * (window.height - this.trueModalHeight);

      return {
        left: (0, _util.inRange)(0, maxLeft, left),
        top: (0, _util.inRange)(0, maxTop, top)
      };
    },
    trueModalWidth: function trueModalWidth() {
      var window = this.window,
          modal = this.modal;

      var value = modal.widthType === '%' ? window.width / 100 * modal.width : modal.width;

      return this.adaptive ? (0, _util.inRange)(this.minWidth, this.window.width, value) : value;
    },
    trueModalHeight: function trueModalHeight() {
      var window = this.window,
          modal = this.modal;

      var value = modal.heightType === '%' ? window.height / 100 * modal.height : modal.height;

      return this.adaptive ? (0, _util.inRange)(this.minHeight, this.window.height, value) : value;
    },
    modalClass: function modalClass() {
      return ['v--modal-box', this.classes];
    },
    modalStyle: function modalStyle() {
      return {
        top: this.position.top + 'px',
        left: this.position.left + 'px',
        width: this.trueModalWidth + 'px',
        height: this.trueModalHeight + 'px'
      };
    }
  },
  methods: {
    setInitialSize: function setInitialSize() {
      var modal = this.modal;

      var width = (0, _parser2.default)(this.width);
      var height = (0, _parser2.default)(this.height);

      modal.width = width.value;
      modal.widthType = width.type;
      modal.height = height.value;
      modal.heightType = height.type;
    },
    onWindowResize: function onWindowResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    genEventObject: function genEventObject(params) {
      var data = {
        name: this.name,
        timestamp: Date.now(),
        canceled: false,
        ref: this.$refs.modal,
        stop: function stop() {
          this.canceled = true;
        }
      };

      return _vue2.default.util.extend(data, params || {});
    },
    onModalResize: function onModalResize(event) {
      this.modal.widthType = 'px';
      this.modal.width = event.size.width;

      this.modal.heightType = 'px';
      this.modal.height = event.size.height;

      var size = this.modal.size;

      var resizeEvent = this.genEventObject({ size: size });

      this.$emit('resize', resizeEvent);
    },
    toggle: function toggle(state, params) {
      var reset = this.reset,
          visible = this.visible;


      var beforeEventName = visible ? 'before-close' : 'before-open';

      var afterEventName = visible ? 'closed' : 'opened';

      if (beforeEventName === 'before-open' && reset) {
        this.setInitialSize();
        this.shift.left = 0;
        this.shift.top = 0;
      }

      var stopEventExecution = false;

      var stop = function stop() {
        stopEventExecution = true;
      };
      var beforeEvent = this.genEventObject({ stop: stop, state: state, params: params });

      this.$emit(beforeEventName, beforeEvent);

      if (!stopEventExecution) {
        var afterEvent = this.genEventObject({ state: state, params: params });

        this.visible = state;
        this.$emit(afterEventName, afterEvent);
      }
    },
    emitCancelableEvent: function emitCancelableEvent(data) {
      var stopEventExecution = false;
      var stop = function stop() {
        stopEventExecution = true;
      };
      var event = this.genEventObject(data);
    },
    getDraggableElement: function getDraggableElement() {
      var selector = typeof this.draggable !== 'string' ? '.v--modal-box' : this.draggable;

      if (selector) {
        var handler = this.$refs.overlay.querySelector(selector);
        if (handler) {
          return handler;
        }
      }
    },
    onBackgroundClick: function onBackgroundClick() {
      if (this.clickToClose) {
        this.toggle(false);
      }
    },
    addDraggableListeners: function addDraggableListeners() {
      var _this3 = this;

      if (!this.draggable) {
        return;
      }

      var dragger = this.getDraggableElement();

      if (dragger) {
        var startX = 0;
        var startY = 0;
        var cachedShiftX = 0;
        var cachedShiftY = 0;

        var getPosition = function getPosition(event) {
          return event.touches && event.touches.length > 0 ? event.touches[0] : event;
        };

        var mousedown = function mousedown(event) {
          var _getPosition = getPosition(event),
              clientX = _getPosition.clientX,
              clientY = _getPosition.clientY;

          document.addEventListener('mousemove', _mousemove);
          document.addEventListener('mouseup', _mouseup);

          document.addEventListener('touchmove', _mousemove);
          document.addEventListener('touchend', _mouseup);

          startX = clientX;
          startY = clientY;
          cachedShiftX = _this3.shift.left;
          cachedShiftY = _this3.shift.top;

          event.preventDefault();
        };

        var _mousemove = function _mousemove(event) {
          var _getPosition2 = getPosition(event),
              clientX = _getPosition2.clientX,
              clientY = _getPosition2.clientY;

          _this3.shift.left = cachedShiftX + clientX - startX;
          _this3.shift.top = cachedShiftY + clientY - startY;
          event.preventDefault();
        };

        var _mouseup = function _mouseup(event) {
          document.removeEventListener('mousemove', _mousemove);
          document.removeEventListener('mouseup', _mouseup);

          document.removeEventListener('touchmove', _mousemove);
          document.removeEventListener('touchend', _mouseup);

          event.preventDefault();
        };

        dragger.addEventListener('mousedown', mousedown);
        dragger.addEventListener('touchstart', mousedown);
      }
    },
    removeDraggableListeners: function removeDraggableListeners() {}
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = __webpack_require__(1);

exports.default = {
  name: 'VueJsModalResizer',
  props: {
    minHeight: {
      type: Number,
      default: 0
    },
    minWidth: {
      type: Number,
      default: 0
    } },
  data: function data() {
    return {
      clicked: false,
      size: {}
    };
  },
  mounted: function mounted() {
    this.$el.addEventListener('mousedown', this.start, false);
  },

  computed: {
    className: function className() {
      return { 'vue-modal-resizer': true, 'clicked': this.clicked };
    }
  },
  methods: {
    start: function start(event) {
      this.clicked = true;

      window.addEventListener('mousemove', this.mousemove, false);
      window.addEventListener('mouseup', this.stop, false);

      event.stopPropagation();
      event.preventDefault();
    },
    stop: function stop() {
      this.clicked = false;

      window.removeEventListener('mousemove', this.mousemove, false);
      window.removeEventListener('mouseup', this.stop, false);

      this.$emit('resize-stop', {
        element: this.$el.parentElement,
        size: this.size
      });
    },
    mousemove: function mousemove(event) {
      this.resize(event);
    },
    resize: function resize(event) {
      var el = this.$el.parentElement;

      if (el) {
        var width = event.clientX - el.offsetLeft;
        var height = event.clientY - el.offsetTop;

        width = (0, _util.inRange)(this.minWidth, window.innerWidth, width);
        height = (0, _util.inRange)(this.minHeight, window.innerHeight, height);

        this.size = { width: width, height: height };
        el.style.width = width + 'px';
        el.style.height = height + 'px';

        this.$emit('resize', {
          element: el,
          size: this.size
        });
      }
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var floatRegexp = '[-+]?[0-9]*\.?[0-9]+';

var types = [{
  name: 'px',
  regexp: new RegExp('^' + floatRegexp + 'px$')
}, {
  name: '%',
  regexp: new RegExp('^' + floatRegexp + '%$')
}, {
  name: 'px',
  regexp: new RegExp('^' + floatRegexp + '$')
}];

var getType = function getType(value) {
  for (var i = 0; i < types.length; i++) {
    var type = types[i];
    if (type.regexp.test(value)) {
      return {
        type: type.name,
        value: parseFloat(value)
      };
    }
  }

  return {
    type: '',
    value: value
  };
};

var parse = function parse(value) {
  switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
    case 'number':
      return { type: 'px', value: value };
    case 'string':
      return getType(value);
    default:
      return { type: '', value: value };
  }
};

exports.default = parse;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.v--modal-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.2);\n  z-index: 999;\n  opacity: 1;\n}\n.v--modal-overlay .v--modal-box {\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n.v--modal {\n  background-color: white;\n  text-align: left;\n  border-radius: 3px;\n  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);\n  padding: 0;\n}\n.v--modal.v--modal-fullscreen {\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n  left: 0;\n  top: 0;\n}\n.v--modal-top-right {\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.overlay-fade-enter-active, .overlay-fade-leave-active {\n  transition: all 0.2s;\n}\n.overlay-fade-enter, .overlay-fade-leave-active {\n  opacity: 0;\n}\n.nice-modal-fade-enter-active, .nice-modal-fade-leave-active {\n  transition: all 0.4s;\n}\n.nice-modal-fade-enter, .nice-modal-fade-leave-active {\n  opacity: 0;\n  transform: translateY(-20px);\n}\n", "", {"version":3,"sources":["/./src/Modal.vue?17bbad80"],"names":[],"mappings":";AAwaA;EACA,gBAAA;EACA,QAAA;EACA,OAAA;EACA,aAAA;EACA,cAAA;EACA,+BAAA;EACA,aAAA;EACA,WAAA;CACA;AAEA;EACA,mBAAA;EACA,iBAAA;EACA,uBAAA;CACA;AAEA;EACA,wBAAA;EACA,iBAAA;EACA,mBAAA;EACA,kDAAA;EACA,WAAA;CACA;AAEA;EACA,aAAA;EACA,cAAA;EACA,UAAA;EACA,QAAA;EACA,OAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;EACA,SAAA;EACA,OAAA;CACA;AAEA;EACA,qBAAA;CACA;AAEA;EACA,WAAA;CACA;AAEA;EACA,qBAAA;CACA;AAEA;EACA,WAAA;EACA,6BAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n  <transition name=\"overlay-fade\">\n    <div v-if=\"visibility.overlay\"\n         ref=\"overlay\"\n         class=\"v--modal-overlay\"\n         :aria-expanded=\"visible.toString()\"\n         :data-modal=\"name\"\n         @mousedown.stop=\"onBackgroundClick\">\n      <div class=\"v--modal-top-right\">\n        <slot name=\"top-right\"/>\n      </div>\n      <transition :name=\"transition\">\n        <div v-if=\"visibility.modal\"\n             ref=\"modal\"\n             :class=\"modalClass\"\n             :style=\"modalStyle\"\n             @mousedown.stop>\n          <slot/>\n          <resizer v-if=\"resizable\"\n                   :min-width=\"minWidth\"\n                   :min-height=\"minHeight\"\n                   @resize=\"onModalResize\"/>\n        </div>\n      </transition>\n    </div>\n  </transition>\n</template>\n<script>\n  import Vue         from 'vue'\n  import Modal       from './index'\n  import Resizer     from './Resizer.vue'\n  import { inRange } from './util'\n  import parseNumber from './parser'\n\n  export default {\n    name: 'VueJsModal',\n    props: {\n      name: {\n        required: true,\n        type: String\n      },\n      delay: {\n        type: Number,\n        default: 0,\n      },\n      resizable: {\n        type: Boolean,\n        default: false\n      },\n      adaptive: {\n        type: Boolean,\n        default: false\n      },\n      draggable: {\n        type: [Boolean, String],\n        default: false\n      },\n      reset: {\n        type: Boolean,\n        default: false\n      },\n      transition: {\n        type: String\n      },\n      clickToClose: {\n        type: Boolean,\n        default: true\n      },\n      classes: {\n        type: [String, Array],\n        default: 'v--modal',\n      },\n      minWidth: {\n        type: Number,\n        default: 0,\n        validator (value) {\n          return value >= 0\n        }\n      },\n      minHeight: {\n        type: Number,\n        default: 0,\n        validator (value) {\n          return value >= 0\n        }\n      },\n      width: {\n        type: [Number, String],\n        default: 600,\n        validator (value) {\n          if (typeof value === 'string') {\n            let width = parseNumber(value)\n            return (width.type === '%' || width.type === 'px')\n              && width.value > 0\n          }\n\n          return value >= 0\n        }\n      },\n      height: {\n        type: [Number, String],\n        default: 300,\n        validator (value) {\n          if (typeof value === 'string') {\n            let height = parseNumber(value)\n            return (height.type === '%' || height.type === 'px')\n              && height.value > 0\n          }\n          \n          return value >= 0\n        }\n      },\n      pivotX: {\n        type: Number,\n        default: 0.5,\n        validator (value) {\n          return value >= 0 && value <= 1\n        }\n      },\n      pivotY: {\n        type: Number,\n        default: 0.5,\n        validator (value) {\n          return value >= 0 && value <= 1\n        }\n      }\n    },\n    components: {\n      Resizer\n    },\n    data () {\n      return {\n        visible: false,\n\n        visibility: {\n          modal: false,\n          overlay: false\n        },\n\n        shift: {\n          left: 0,\n          top: 0\n        },\n\n        modal: {\n          width: 0,\n          widthType: 'px',\n          height: 0,\n          heightType: 'px'\n        },\n\n        window: {\n          width: 0,\n          height: 0\n        }\n      }\n    },\n    watch: {\n      visible (value) {\n        if (value) {\n          this.visibility.overlay = true\n        //  this.adaptSize()\n\n          setTimeout(() => {\n            this.visibility.modal = true\n            this.$nextTick(() => {\n              this.addDraggableListeners()\n            })\n          }, this.delay)\n        } else {\n          this.visibility.modal = false\n\n          setTimeout(() => {\n            this.visibility.overlay = false\n            this.$nextTick(() => {\n              this.removeDraggableListeners()\n            })\n          }, this.delay)\n        }\n      }\n    },\n    created () {\n      this.setInitialSize()\n    },\n    beforeMount () {\n      Modal.event.$on('toggle', (name, state, params) => {\n        if (name === this.name) {\n          if (typeof state === 'undefined') {\n            state = !this.visible\n          }\n\n          this.toggle(state, params)\n        }\n      });\n\n      window.addEventListener('resize', this.onWindowResize)\n      this.onWindowResize()\n    },\n    beforeDestroy () {\n      window.removeEventListener('resize', this.onWindowResize)\n    },\n    computed: {\n      position () {\n        const { window, modal, shift } = this\n\n        const maxLeft = window.width - this.trueModalWidth\n        const maxTop = window.height - this.trueModalHeight\n\n        const left = shift.left + \n          this.pivotX * (window.width - this.trueModalWidth)\n        const top = shift.top + \n          this.pivotY * (window.height - this.trueModalHeight)\n\n        return {\n          left: inRange(0, maxLeft, left),\n          top: inRange(0, maxTop, top)\n        }\n      },\n\n      trueModalWidth () {\n        const { window, modal } = this\n        const value = modal.widthType === '%'\n          ? window.width / 100 * modal.width\n          : modal.width\n\n        return this.adaptive\n          ? inRange(this.minWidth, this.window.width, value)\n          : value\n      },\n\n      trueModalHeight () {\n        const { window, modal } = this\n        const value = (modal.heightType === '%') \n          ? window.height / 100 * modal.height \n          : modal.height\n\n        return this.adaptive\n          ? inRange(this.minHeight, this.window.height, value)\n          : value\n      },\n\n      modalClass () {\n        return ['v--modal-box', this.classes]\n      },\n\n      modalStyle () {\n        return {\n          top: this.position.top + 'px',\n          left: this.position.left + 'px',\n          width: this.trueModalWidth + 'px',\n          height: this.trueModalHeight + 'px'\n        }\n      }\n    },\n    methods: {\n      setInitialSize () {\n        let { modal } = this\n        let width = parseNumber(this.width)\n        let height = parseNumber(this.height)\n\n        modal.width = width.value\n        modal.widthType = width.type\n        modal.height = height.value\n        modal.heightType = height.type\n      },\n\n      onWindowResize () {\n        this.window.width = window.innerWidth\n        this.window.height = window.innerHeight\n      },\n\n      genEventObject (params) {\n        //todo: clean this up (change to ...)\n        var data = {\n          name: this.name,\n          timestamp: Date.now(),\n          canceled: false,\n          ref: this.$refs.modal,\n          stop: function() {\n            this.canceled = true\n          }\n        }\n\n        return Vue.util.extend(data, params || {});\n      },\n\n      onModalResize (event) {\n        this.modal.widthType = 'px'\n        this.modal.width = event.size.width\n\n        this.modal.heightType = 'px'\n        this.modal.height = event.size.height\n\n        const { size } = this.modal\n        const resizeEvent = this.genEventObject({ size });\n\n        this.$emit('resize', resizeEvent)\n      },\n\n      toggle (state, params) {\n        const { reset, visible } = this\n\n        const beforeEventName = visible \n          ? 'before-close' \n          : 'before-open'\n          \n        const afterEventName = visible \n          ? 'closed' \n          : 'opened'\n\n        if (beforeEventName === 'before-open' && reset) {\n          this.setInitialSize()\n          this.shift.left = 0\n          this.shift.top = 0\n        }\n\n        let stopEventExecution = false\n\n        const stop = () => {\n          stopEventExecution = true\n        }\n        const beforeEvent = this.genEventObject({ stop, state, params })\n\n        this.$emit(beforeEventName, beforeEvent)\n\n        if (!stopEventExecution) {\n          const afterEvent = this.genEventObject({ state, params })\n\n          this.visible = state\n          this.$emit(afterEventName, afterEvent)\n        }\n      },\n\n      emitCancelableEvent (data) {\n        let stopEventExecution = false\n        let stop = () => { stopEventExecution = true }\n        let event = this.genEventObject(data)\n      },\n\n      getDraggableElement () {\n        var selector = typeof this.draggable !== 'string'\n          ? '.v--modal-box'\n          : this.draggable\n\n        if (selector) {\n          var handler = this.$refs.overlay.querySelector(selector)\n          if (handler) {\n            return handler\n          }\n        }\n      },\n\n      onBackgroundClick () {\n        if (this.clickToClose) {\n          this.toggle(false)\n        }\n      },\n\n      addDraggableListeners () {\n        if (!this.draggable) {\n          return;\n        }\n\n        let dragger = this.getDraggableElement()\n\n        if (dragger) {\n          let startX = 0\n          let startY = 0\n          let cachedShiftX = 0\n          let cachedShiftY = 0\n\n          let getPosition = (event) => {\n              return event.touches && event.touches.length > 0\n                ? event.touches[0]\n                : event\n          }\n\n          let mousedown = (event) => {\n            let { clientX, clientY } = getPosition(event)\n\n            document.addEventListener('mousemove', mousemove)\n            document.addEventListener('mouseup', mouseup)\n\n            document.addEventListener('touchmove', mousemove)\n            document.addEventListener('touchend', mouseup)\n\n            startX = clientX\n            startY = clientY\n            cachedShiftX = this.shift.left\n            cachedShiftY = this.shift.top\n\n            event.preventDefault()\n          }\n\n          let mousemove = (event) => {\n            let { clientX, clientY } = getPosition(event)\n\n            this.shift.left = cachedShiftX + clientX - startX\n            this.shift.top = cachedShiftY + clientY - startY\n            event.preventDefault()\n          }\n\n          let mouseup = (event) => {\n            document.removeEventListener('mousemove', mousemove)\n            document.removeEventListener('mouseup', mouseup)\n\n            document.removeEventListener('touchmove', mousemove)\n            document.removeEventListener('touchend', mouseup)\n\n            event.preventDefault()\n          }\n\n          dragger.addEventListener('mousedown', mousedown)\n          dragger.addEventListener('touchstart', mousedown)\n        }\n      },\n\n      removeDraggableListeners () {\n      //  console.log('removing draggable handlers')\n      }\n    }\n  };\n</script>\n<style>\n  .v--modal-overlay {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background: rgba(0, 0, 0, 0.2);\n    z-index: 999;\n    opacity: 1;\n  }\n\n  .v--modal-overlay .v--modal-box {\n    position: relative;\n    overflow: hidden;\n    box-sizing: border-box;\n  }\n\n  .v--modal {\n    background-color: white;\n    text-align: left;\n    border-radius: 3px;\n    box-shadow: 0 20px 60px -2px rgba(27, 33, 58, .4);\n    padding: 0;\n  }\n\n  .v--modal.v--modal-fullscreen {\n    width: 100vw;\n    height: 100vh;\n    margin: 0;\n    left: 0;\n    top: 0;\n  }\n\n  .v--modal-top-right {\n    display: block;\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  .overlay-fade-enter-active, .overlay-fade-leave-active {\n    transition: all 0.2s;\n  }\n\n  .overlay-fade-enter, .overlay-fade-leave-active {\n    opacity: 0;\n  }\n\n  .nice-modal-fade-enter-active, .nice-modal-fade-leave-active {\n    transition: all 0.4s;\n  }\n\n  .nice-modal-fade-enter, .nice-modal-fade-leave-active {\n    opacity: 0;\n    transform: translateY(-20px);\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "\n.vue-modal-resizer {\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  right: 0;\n  bottom: 0;\n  z-index: 9999999;\n  background: transparent;\n  cursor: se-resize;\n}\n.vue-modal-resizer::after {\n  display: block;\n  position: absolute;\n  content: '';\n  background: transparent;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid #ddd;\n  border-left: 10px solid transparent;\n}\n.vue-modal-resizer.clicked::after {\n  border-bottom: 10px solid #369BE9;\n}\n", "", {"version":3,"sources":["/./src/Resizer.vue?212896e6"],"names":[],"mappings":";AA+EA;EACA,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,SAAA;EACA,UAAA;EACA,iBAAA;EACA,wBAAA;EACA,kBAAA;CACA;AAEA;EACA,eAAA;EACA,mBAAA;EACA,YAAA;EACA,wBAAA;EACA,QAAA;EACA,OAAA;EACA,SAAA;EACA,UAAA;EACA,+BAAA;EACA,oCAAA;CACA;AAEA;EACA,kCAAA;CACA","file":"Resizer.vue","sourcesContent":["<template>\n  <div :class=\"className\"></div>\n</template>\n<script>\nimport { inRange } from './util'\n\nexport default {\n  name: 'VueJsModalResizer',\n  props: {\n    minHeight: {\n      type: Number,\n      default: 0\n    },\n    minWidth: {\n      type: Number,\n      default: 0\n    }},\n  data() {\n    return {\n      clicked: false,\n      size: {}\n    }\n  },\n  mounted () {\n    this.$el.addEventListener('mousedown', this.start, false)\n  },\n  computed: {\n    className () {\n      return {'vue-modal-resizer': true, 'clicked': this.clicked}\n    }\n  },\n  methods: {\n    start(event) {\n      this.clicked = true\n\n      window.addEventListener('mousemove', this.mousemove, false)\n      window.addEventListener('mouseup', this.stop, false)\n\n      event.stopPropagation()\n      event.preventDefault()\n    },\n    stop() {\n      this.clicked = false\n\n      window.removeEventListener('mousemove', this.mousemove, false)\n      window.removeEventListener('mouseup', this.stop, false)\n\n      this.$emit('resize-stop', {\n        element: this.$el.parentElement,\n        size: this.size\n      });\n    },\n    mousemove(event) {\n      this.resize(event)\n    },\n    resize(event) {\n      var el = this.$el.parentElement\n\n      if (el) {\n        var width = event.clientX - el.offsetLeft\n        var height = event.clientY - el.offsetTop\n\n        width = inRange(this.minWidth, window.innerWidth, width)\n        height = inRange(this.minHeight, window.innerHeight, height)\n\n        this.size = {width, height}\n        el.style.width = width + 'px'\n        el.style.height = height + 'px'\n\n        this.$emit('resize', {\n          element: el,\n          size: this.size\n        })\n      }\n    }\n  }\n}\n</script>\n<style>\n.vue-modal-resizer {\n  display: block;\n  overflow: hidden;\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  right: 0;\n  bottom: 0;\n  z-index: 9999999;\n  background: transparent;\n  cursor: se-resize;\n}\n\n.vue-modal-resizer::after {\n  display: block;\n  position: absolute;\n  content: '';\n  background: transparent;\n  left: 0;\n  top: 0;\n  width: 0;\n  height: 0;\n  border-bottom: 10px solid #ddd;\n  border-left: 10px solid transparent;\n}\n\n.vue-modal-resizer.clicked::after {\n  border-bottom: 10px solid #369BE9;\n}\n</style>\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/yev/Projects/vue/vue-js-modal/src/Resizer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Resizer.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "overlay-fade"
    }
  }, [(_vm.visibility.overlay) ? _c('div', {
    ref: "overlay",
    staticClass: "v--modal-overlay",
    attrs: {
      "aria-expanded": _vm.visible.toString(),
      "data-modal": _vm.name
    },
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
        _vm.onBackgroundClick($event)
      }
    }
  }, [_c('div', {
    staticClass: "v--modal-top-right"
  }, [_vm._t("top-right")], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [(_vm.visibility.modal) ? _c('div', {
    ref: "modal",
    class: _vm.modalClass,
    style: (_vm.modalStyle),
    on: {
      "mousedown": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_vm._t("default"), _vm._v(" "), (_vm.resizable) ? _c('resizer', {
    attrs: {
      "min-width": _vm.minWidth,
      "min-height": _vm.minHeight
    },
    on: {
      "resize": _vm.onModalResize
    }
  }) : _vm._e()], 2) : _vm._e()])], 1) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.className
  })
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(4)("0ba9730a", content, false);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
__webpack_require__(4)("43d3f0d1", content, false);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ssr.index.js.map