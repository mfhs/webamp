(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Webamp"] = factory();
	else
		root["Webamp"] = factory();
})(window, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(117);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(2);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(126);

var iterableToArrayLimit = __webpack_require__(127);

var nonIterableRest = __webpack_require__(128);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(121)();
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(118);
} else {}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(131);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(134);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT' + Math.random().toString(36).substring(7).split('').join('.'),
  REPLACE: '@@redux/REPLACE' + Math.random().toString(36).substring(7).split('').join('.')
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) return false;

  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.REPLACE });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty
}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && 'action "' + String(actionType) + '"' || 'an action';

  return 'Given ' + actionDescription + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {}

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var store = createStore.apply(undefined, args);
      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(undefined, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */
function isCrushed() {}

if (false) {}




/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/*!
* screenfull
* v4.0.0 - 2018-12-15
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs =  true && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			return new Promise(function (resolve) {
				var request = fn.requestFullscreen;

				var onFullScreenEntered = function () {
					this.off('change', onFullScreenEntered);
					resolve();
				}.bind(this);

				elem = elem || document.documentElement;

				// Work around Safari 5.1 bug: reports support for
				// keyboard in fullscreen even though it doesn't.
				// Browser sniffing, since the alternative with
				// setTimeout is even worse.
				if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
					elem[request]();
				} else {
					elem[request](keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
				}

				this.on('change', onFullScreenEntered);
			}.bind(this));
		},
		exit: function () {
			return new Promise(function (resolve) {
				var onFullScreenExit = function () {
					this.off('change', onFullScreenExit);
					resolve();
				}.bind(this);

				document[fn.exitFullscreen]();

				this.on('change', onFullScreenExit);
			}.bind(this));
		},
		toggle: function (elem) {
			return this.isFullscreen ? this.exit() : this.request(elem);
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),
/* 19 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 22 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(143);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25);
var createDesc = __webpack_require__(38);
module.exports = __webpack_require__(27) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(33);
var IE8_DOM_DEFINE = __webpack_require__(77);
var toPrimitive = __webpack_require__(51);
var dP = Object.defineProperty;

exports.f = __webpack_require__(27) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(34)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(80);
var defined = __webpack_require__(52);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(55)('wks');
var uid = __webpack_require__(41);
var Symbol = __webpack_require__(17).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(21);
var ctx = __webpack_require__(76);
var hide = __webpack_require__(24);
var has = __webpack_require__(22);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(79);
var enumBugKeys = __webpack_require__(56);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(58);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(59);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(66);

var _warning2 = _interopRequireDefault(_warning);

var _Track = __webpack_require__(180);

var _Track2 = _interopRequireDefault(_Track);

var _createSlider = __webpack_require__(181);

var _createSlider2 = _interopRequireDefault(_createSlider);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable react/prop-types */
var Slider = function (_React$Component) {
  (0, _inherits3['default'])(Slider, _React$Component);

  function Slider(props) {
    (0, _classCallCheck3['default'])(this, Slider);

    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props));

    _this.onEnd = function () {
      _this.setState({ dragging: false });
      _this.removeDocumentEvents();
      _this.props.onAfterChange(_this.getValue());
    };

    var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.min;
    var value = props.value !== undefined ? props.value : defaultValue;

    _this.state = {
      value: _this.trimAlignValue(value),
      dragging: false
    };
    if (false) {}
    return _this;
  }

  Slider.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        autoFocus = _props.autoFocus,
        disabled = _props.disabled;

    if (autoFocus && !disabled) {
      this.focus();
    }
  };

  Slider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (!('value' in nextProps || 'min' in nextProps || 'max' in nextProps)) return;

    var prevValue = this.state.value;
    var value = nextProps.value !== undefined ? nextProps.value : prevValue;
    var nextValue = this.trimAlignValue(value, nextProps);
    if (nextValue === prevValue) return;

    this.setState({ value: nextValue });
    if (utils.isValueOutOfRange(value, nextProps)) {
      this.props.onChange(nextValue);
    }
  };

  Slider.prototype.onChange = function onChange(state) {
    var props = this.props;
    var isNotControlled = !('value' in props);
    if (isNotControlled) {
      this.setState(state);
    }

    var changedValue = state.value;
    props.onChange(changedValue);
  };

  Slider.prototype.onStart = function onStart(position) {
    this.setState({ dragging: true });
    var props = this.props;
    var prevValue = this.getValue();
    props.onBeforeChange(prevValue);

    var value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    if (value === prevValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onMove = function onMove(e, position) {
    utils.pauseEvent(e);
    var oldValue = this.state.value;

    var value = this.calcValueByPos(position);
    if (value === oldValue) return;

    this.onChange({ value: value });
  };

  Slider.prototype.onKeyboard = function onKeyboard(e) {
    var valueMutator = utils.getKeyboardValueMutator(e);

    if (valueMutator) {
      utils.pauseEvent(e);
      var state = this.state;
      var oldValue = state.value;
      var mutatedValue = valueMutator(oldValue, this.props);
      var value = this.trimAlignValue(mutatedValue);
      if (value === oldValue) return;

      this.onChange({ value: value });
    }
  };

  Slider.prototype.getValue = function getValue() {
    return this.state.value;
  };

  Slider.prototype.getLowerBound = function getLowerBound() {
    return this.props.min;
  };

  Slider.prototype.getUpperBound = function getUpperBound() {
    return this.state.value;
  };

  Slider.prototype.trimAlignValue = function trimAlignValue(v) {
    var nextProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var mergedProps = (0, _extends3['default'])({}, this.props, nextProps);
    var val = utils.ensureValueInRange(v, mergedProps);
    return utils.ensureValuePrecision(val, mergedProps);
  };

  Slider.prototype.render = function render() {
    var _this2 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        vertical = _props2.vertical,
        included = _props2.included,
        disabled = _props2.disabled,
        minimumTrackStyle = _props2.minimumTrackStyle,
        trackStyle = _props2.trackStyle,
        handleStyle = _props2.handleStyle,
        tabIndex = _props2.tabIndex,
        min = _props2.min,
        max = _props2.max,
        handleGenerator = _props2.handle;
    var _state = this.state,
        value = _state.value,
        dragging = _state.dragging;

    var offset = this.calcOffset(value);
    var handle = handleGenerator({
      className: prefixCls + '-handle',
      vertical: vertical,
      offset: offset,
      value: value,
      dragging: dragging,
      disabled: disabled,
      min: min,
      max: max,
      index: 0,
      tabIndex: tabIndex,
      style: handleStyle[0] || handleStyle,
      ref: function ref(h) {
        return _this2.saveHandle(0, h);
      }
    });

    var _trackStyle = trackStyle[0] || trackStyle;
    var track = _react2['default'].createElement(_Track2['default'], {
      className: prefixCls + '-track',
      vertical: vertical,
      included: included,
      offset: 0,
      length: offset,
      style: (0, _extends3['default'])({}, minimumTrackStyle, _trackStyle)
    });

    return { tracks: track, handles: handle };
  };

  return Slider;
}(_react2['default'].Component);

Slider.propTypes = {
  defaultValue: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  disabled: _propTypes2['default'].bool,
  autoFocus: _propTypes2['default'].bool,
  tabIndex: _propTypes2['default'].number
};
exports['default'] = (0, _createSlider2['default'])(Slider);
module.exports = exports['default'];

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(26);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 52 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(55)('keys');
var uid = __webpack_require__(41);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(21);
var global = __webpack_require__(17);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(40) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 56 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 57 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(83);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(33);
var dPs = __webpack_require__(156);
var enumBugKeys = __webpack_require__(56);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(78)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(157).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(25).f;
var has = __webpack_require__(22);
var TAG = __webpack_require__(29)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(29);


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(21);
var LIBRARY = __webpack_require__(40);
var wksExt = __webpack_require__(63);
var defineProperty = __webpack_require__(25).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(173);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(177);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(83);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19), __webpack_require__(125)(module)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(129);
var creator = __webpack_require__(130);

module.exports = {
  parser: parser,
  creator: creator
};


/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, exports) {

var PRESET_VALUES = [
  "hz60",
  "hz170",
  "hz310",
  "hz600",
  "hz1000",
  "hz3000",
  "hz6000",
  "hz12000",
  "hz14000",
  "hz16000",
  "preamp"
];

var HEADER = "Winamp EQ library file v1.1";

module.exports = {
  PRESET_VALUES: PRESET_VALUES,
  HEADER: HEADER
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(146);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(27) && !__webpack_require__(34)(function () {
  return Object.defineProperty(__webpack_require__(78)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(26);
var document = __webpack_require__(17).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(22);
var toIObject = __webpack_require__(28);
var arrayIndexOf = __webpack_require__(148)(false);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(81);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(52);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(151);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(163);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(40);
var $export = __webpack_require__(32);
var redefine = __webpack_require__(85);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(60);
var $iterCreate = __webpack_require__(155);
var setToStringTag = __webpack_require__(62);
var getPrototypeOf = __webpack_require__(158);
var ITERATOR = __webpack_require__(29)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(79);
var hiddenKeys = __webpack_require__(56).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(42);
var createDesc = __webpack_require__(38);
var toIObject = __webpack_require__(28);
var toPrimitive = __webpack_require__(51);
var has = __webpack_require__(22);
var IE8_DOM_DEFINE = __webpack_require__(77);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(27) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isEventFromHandle = isEventFromHandle;
exports.isValueOutOfRange = isValueOutOfRange;
exports.isNotTouchEvent = isNotTouchEvent;
exports.getClosestPoint = getClosestPoint;
exports.getPrecision = getPrecision;
exports.getMousePosition = getMousePosition;
exports.getTouchPosition = getTouchPosition;
exports.getHandleCenterPosition = getHandleCenterPosition;
exports.ensureValueInRange = ensureValueInRange;
exports.ensureValuePrecision = ensureValuePrecision;
exports.pauseEvent = pauseEvent;
exports.getKeyboardValueMutator = getKeyboardValueMutator;

var _reactDom = __webpack_require__(7);

var _KeyCode = __webpack_require__(189);

var _KeyCode2 = _interopRequireDefault(_KeyCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function isEventFromHandle(e, handles) {
  return Object.keys(handles).some(function (key) {
    return e.target === (0, _reactDom.findDOMNode)(handles[key]);
  });
}

function isValueOutOfRange(value, _ref) {
  var min = _ref.min,
      max = _ref.max;

  return value < min || value > max;
}

function isNotTouchEvent(e) {
  return e.touches.length > 1 || e.type.toLowerCase() === 'touchend' && e.touches.length > 0;
}

function getClosestPoint(val, _ref2) {
  var marks = _ref2.marks,
      step = _ref2.step,
      min = _ref2.min;

  var points = Object.keys(marks).map(parseFloat);
  if (step !== null) {
    var closestStep = Math.round((val - min) / step) * step + min;
    points.push(closestStep);
  }
  var diffs = points.map(function (point) {
    return Math.abs(val - point);
  });
  return points[diffs.indexOf(Math.min.apply(Math, diffs))];
}

function getPrecision(step) {
  var stepString = step.toString();
  var precision = 0;
  if (stepString.indexOf('.') >= 0) {
    precision = stepString.length - stepString.indexOf('.') - 1;
  }
  return precision;
}

function getMousePosition(vertical, e) {
  return vertical ? e.clientY : e.pageX;
}

function getTouchPosition(vertical, e) {
  return vertical ? e.touches[0].clientY : e.touches[0].pageX;
}

function getHandleCenterPosition(vertical, handle) {
  var coords = handle.getBoundingClientRect();
  return vertical ? coords.top + coords.height * 0.5 : coords.left + coords.width * 0.5;
}

function ensureValueInRange(val, _ref3) {
  var max = _ref3.max,
      min = _ref3.min;

  if (val <= min) {
    return min;
  }
  if (val >= max) {
    return max;
  }
  return val;
}

function ensureValuePrecision(val, props) {
  var step = props.step;

  var closestPoint = getClosestPoint(val, props);
  return step === null ? closestPoint : parseFloat(closestPoint.toFixed(getPrecision(step)));
}

function pauseEvent(e) {
  e.stopPropagation();
  e.preventDefault();
}

function getKeyboardValueMutator(e) {
  switch (e.keyCode) {
    case _KeyCode2['default'].UP:
    case _KeyCode2['default'].RIGHT:
      return function (value, props) {
        return value + props.step;
      };

    case _KeyCode2['default'].DOWN:
    case _KeyCode2['default'].LEFT:
      return function (value, props) {
        return value - props.step;
      };

    case _KeyCode2['default'].END:
      return function (value, props) {
        return props.max;
      };
    case _KeyCode2['default'].HOME:
      return function (value, props) {
        return props.min;
      };
    case _KeyCode2['default'].PAGE_UP:
      return function (value, props) {
        return value + props.step * 2;
      };
    case _KeyCode2['default'].PAGE_DOWN:
      return function (value, props) {
        return value - props.step * 2;
      };

    default:
      return undefined;
  }
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () {
    'use strict';
    
    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };
    
    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };
    
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
    
    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
            
            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }
            
            var keys = getOwnPropertyNames(sourceComponent);
            
            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }
            
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try { // Avoid failures from read-only properties
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }
            
            return targetComponent;
        }
        
        return targetComponent;
    };
})));


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)))

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(15).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),
/* 95 */
/***/ (function(module) {

module.exports = {"images":{"EQ_PREAMP_LINE":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAABCAYAAADpXEERAAAAE0lEQVQoU2Pcdfruf4ZRMKRDAAD1lwNjTqcaUQAAAABJRU5ErkJggg==","EQ_GRAPH_LINE_COLORS":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAATCAYAAABRC2cZAAAAR0lEQVQYV2O4rCT9n+F9kOJ/hvfViv8ZHkzSQCE2afxneH/HEJm49Nr0PwOYWPLIAkp0PjL4z1B41uQ/Q9QGnf8MWrPEIAQANWYwvnlToNIAAAAASUVORK5CYII="},"colors":["rgb(0,0,0)","rgb(24,33,41)","rgb(239,49,16)","rgb(206,41,16)","rgb(214,90,0)","rgb(214,102,0)","rgb(214,115,0)","rgb(198,123,8)","rgb(222,165,24)","rgb(214,181,33)","rgb(189,222,41)","rgb(148,222,33)","rgb(41,206,16)","rgb(50,190,16)","rgb(57,181,16)","rgb(49,156,8)","rgb(41,148,0)","rgb(24,132,8)","rgb(255,255,255)","rgb(214,214,222)","rgb(181,189,189)","rgb(160,170,175)","rgb(148,156,165)","rgb(150,150,150)"],"playlistStyle":{"normal":"#00FF00","current":"#FFFFFF","normalbg":"#000000","selectedbg":"#0000FF","font":"Arial"}};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = TinyQueue;
module.exports.default = TinyQueue;

function TinyQueue(data, compare) {
    if (!(this instanceof TinyQueue)) return new TinyQueue(data, compare);

    this.data = data || [];
    this.length = this.data.length;
    this.compare = compare || defaultCompare;

    if (this.length > 0) {
        for (var i = (this.length >> 1) - 1; i >= 0; i--) this._down(i);
    }
}

function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

TinyQueue.prototype = {

    push: function (item) {
        this.data.push(item);
        this.length++;
        this._up(this.length - 1);
    },

    pop: function () {
        if (this.length === 0) return undefined;

        var top = this.data[0];
        this.length--;

        if (this.length > 0) {
            this.data[0] = this.data[this.length];
            this._down(0);
        }
        this.data.pop();

        return top;
    },

    peek: function () {
        return this.data[0];
    },

    _up: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var item = data[pos];

        while (pos > 0) {
            var parent = (pos - 1) >> 1;
            var current = data[parent];
            if (compare(item, current) >= 0) break;
            data[pos] = current;
            pos = parent;
        }

        data[pos] = item;
    },

    _down: function (pos) {
        var data = this.data;
        var compare = this.compare;
        var halfLength = this.length >> 1;
        var item = data[pos];

        while (pos < halfLength) {
            var left = (pos << 1) + 1;
            var right = left + 1;
            var best = data[left];

            if (right < this.length && compare(data[right], best) < 0) {
                left = right;
                best = data[right];
            }
            if (compare(best, item) >= 0) break;

            data[pos] = best;
            pos = left;
        }

        data[pos] = item;
    }
};


/***/ }),
/* 97 */
/***/ (function(module) {

module.exports = {"type":"Winamp EQ library file v1.1","presets":[{"name":"Classical","hz60":33,"hz170":33,"hz310":33,"hz600":33,"hz1000":33,"hz3000":33,"hz6000":20,"hz12000":20,"hz14000":20,"hz16000":16,"preamp":33},{"name":"Club","hz60":33,"hz170":33,"hz310":38,"hz600":42,"hz1000":42,"hz3000":42,"hz6000":38,"hz12000":33,"hz14000":33,"hz16000":33,"preamp":33},{"name":"Dance","hz60":48,"hz170":44,"hz310":36,"hz600":32,"hz1000":32,"hz3000":22,"hz6000":20,"hz12000":20,"hz14000":32,"hz16000":32,"preamp":33},{"name":"Laptop speakers/headphones","hz60":40,"hz170":50,"hz310":41,"hz600":26,"hz1000":28,"hz3000":35,"hz6000":40,"hz12000":48,"hz14000":53,"hz16000":56,"preamp":33},{"name":"Large hall","hz60":49,"hz170":49,"hz310":42,"hz600":42,"hz1000":33,"hz3000":24,"hz6000":24,"hz12000":24,"hz14000":33,"hz16000":33,"preamp":33},{"name":"Party","hz60":44,"hz170":44,"hz310":33,"hz600":33,"hz1000":33,"hz3000":33,"hz6000":33,"hz12000":33,"hz14000":44,"hz16000":44,"preamp":33},{"name":"Pop","hz60":29,"hz170":40,"hz310":44,"hz600":45,"hz1000":41,"hz3000":30,"hz6000":28,"hz12000":28,"hz14000":29,"hz16000":29,"preamp":33},{"name":"Reggae","hz60":33,"hz170":33,"hz310":31,"hz600":22,"hz1000":33,"hz3000":43,"hz6000":43,"hz12000":33,"hz14000":33,"hz16000":33,"preamp":33},{"name":"Rock","hz60":45,"hz170":40,"hz310":23,"hz600":19,"hz1000":26,"hz3000":39,"hz6000":47,"hz12000":50,"hz14000":50,"hz16000":50,"preamp":33},{"name":"Soft","hz60":40,"hz170":35,"hz310":30,"hz600":28,"hz1000":30,"hz3000":39,"hz6000":46,"hz12000":48,"hz14000":50,"hz16000":52,"preamp":33},{"name":"Ska","hz60":28,"hz170":24,"hz310":25,"hz600":31,"hz1000":39,"hz3000":42,"hz6000":47,"hz12000":48,"hz14000":50,"hz16000":48,"preamp":33},{"name":"Full Bass","hz60":48,"hz170":48,"hz310":48,"hz600":42,"hz1000":35,"hz3000":25,"hz6000":18,"hz12000":15,"hz14000":14,"hz16000":14,"preamp":33},{"name":"Soft Rock","hz60":39,"hz170":39,"hz310":36,"hz600":31,"hz1000":25,"hz3000":23,"hz6000":26,"hz12000":31,"hz14000":37,"hz16000":47,"preamp":33},{"name":"Full Treble","hz60":16,"hz170":16,"hz310":16,"hz600":25,"hz1000":37,"hz3000":50,"hz6000":58,"hz12000":58,"hz14000":58,"hz16000":60,"preamp":33},{"name":"Full Bass & Treble","hz60":44,"hz170":42,"hz310":33,"hz600":20,"hz1000":24,"hz3000":35,"hz6000":46,"hz12000":50,"hz14000":52,"hz16000":52,"preamp":33},{"name":"Live","hz60":24,"hz170":33,"hz310":39,"hz600":41,"hz1000":42,"hz3000":42,"hz6000":39,"hz12000":37,"hz14000":37,"hz16000":36,"preamp":33},{"name":"Techno","hz60":45,"hz170":42,"hz310":33,"hz600":23,"hz1000":24,"hz3000":33,"hz6000":45,"hz12000":48,"hz14000":48,"hz16000":47,"preamp":33}]};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

/* global Float32Array, Symbol, AudioNode, AudioParam */

var BaseAudioContext = __webpack_require__(198);

var WS_CURVE_SIZE = 4096;
var curveL = new Float32Array(WS_CURVE_SIZE);
var curveR = new Float32Array(WS_CURVE_SIZE);
var curveFix = new Float32Array([ 0, 0 ]);
var curveDC = new Float32Array([ 1, 1 ]);

for (var i = 0; i < WS_CURVE_SIZE; i++) {
  curveL[i] = Math.cos((i / WS_CURVE_SIZE) * Math.PI * 0.5);
  curveR[i] = Math.sin((i / WS_CURVE_SIZE) * Math.PI * 0.5);
}

function StereoPannerNode(audioContext, opts) {
  opts = opts || {};

  var splitter = audioContext.createChannelSplitter(2);
  var wsDC = audioContext.createWaveShaper();
  var wsFix = audioContext.createWaveShaper();
  var pan = audioContext.createGain();
  var wsL = audioContext.createWaveShaper();
  var wsR = audioContext.createWaveShaper();
  var gainL = audioContext.createGain();
  var gainR = audioContext.createGain();
  var merger = audioContext.createChannelMerger(2);
  var panValue = typeof opts.pan === "number" ? opts.pan : 0;

  splitter.channelCount = 2;
  splitter.channelCountMode = "explicit";
  splitter.channelInterpretation = "speakers";
  splitter.connect(gainL, 0);
  splitter.connect(gainR, 1);
  splitter.connect(wsDC, 1);
  splitter.connect(wsFix, 1);

  wsDC.channelCount = 1;
  wsDC.channelCountMode = "explicit";
  wsDC.channelInterpretation = "discrete";
  wsDC.curve = curveDC;
  wsDC.connect(pan);

  // GainNode mute sound when gain value is 0.
  // This node avoid to mute of GainNode for pan attribute. (#13)
  wsFix.channelCount = 1;
  wsFix.channelCountMode = "explicit";
  wsFix.channelInterpretation = "discrete";
  wsFix.curve = curveFix;
  wsFix.connect(pan.gain);

  pan.channelCount = 1;
  pan.channelCountMode = "explicit";
  pan.channelInterpretation = "discrete";
  pan.gain.value = panValue;
  pan.connect(wsL);
  pan.connect(wsR);

  wsL.channelCount = 1;
  wsL.channelCountMode = "explicit";
  wsL.channelInterpretation = "discrete";
  wsL.curve = curveL;
  wsL.connect(gainL.gain);

  wsR.channelCount = 1;
  wsR.channelCountMode = "explicit";
  wsR.channelInterpretation = "discrete";
  wsR.curve = curveR;
  wsR.connect(gainR.gain);

  gainL.channelCount = 1;
  gainL.channelCountMode = "explicit";
  gainL.channelInterpretation = "discrete";
  gainL.gain.value = 0;
  gainL.connect(merger, 0, 0);

  gainR.channelCount = 1;
  gainR.channelCountMode = "explicit";
  gainR.channelInterpretation = "discrete";
  gainR.gain.value = 0;
  gainR.connect(merger, 0, 1);

  merger.channelCount = 1;
  merger.channelCountMode = "explicit";
  merger.channelInterpretation = "discrete";

  Object.defineProperties(splitter, {
    pan: {
      value: pan.gain,
      enumerable: true, writable: false, configurable: true
    },
    connect: {
      value: AudioNode.prototype.connect.bind(merger),
      enumerable: false, writable: false, configurable: true
    },
    disconnect: {
      value: AudioNode.prototype.disconnect.bind(merger),
      enumerable: false, writable: false, configurable: true
    }
  });

  return splitter;
}

StereoPannerNode.polyfill = function() {
  if (BaseAudioContext && !("createStereoPanner" in BaseAudioContext.prototype)) {
    StereoPannerNode.install();
  }
};

StereoPannerNode.install = function() {
  Object.defineProperty(BaseAudioContext.prototype, "createStereoPanner", {
    value: function() {
      return new StereoPannerNode(this);
    },
    enumerable: false, writable: false, configurable: true
  });
};

if (typeof Symbol === "function" && typeof Symbol.hasInstance === "symbol") {
  Object.defineProperty(StereoPannerNode, Symbol.hasInstance, {
    value: function(value) {
      return value instanceof AudioNode && value.pan instanceof AudioParam;
    }
  });
}

module.exports = StereoPannerNode;


/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(2);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(7);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(6);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/PropTypes.js


var subscriptionShape = prop_types_default.a.shape({
  trySubscribe: prop_types_default.a.func.isRequired,
  tryUnsubscribe: prop_types_default.a.func.isRequired,
  notifyNestedSubs: prop_types_default.a.func.isRequired,
  isSubscribed: prop_types_default.a.func.isRequired
});

var storeShape = prop_types_default.a.shape({
  subscribe: prop_types_default.a.func.isRequired,
  dispatch: prop_types_default.a.func.isRequired,
  getState: prop_types_default.a.func.isRequired
});
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return react["Children"].only(this.props.children);
    };

    return Provider;
  }(react["Component"]);

  if (false) {}

  Provider.propTypes = {
    store: storeShape.isRequired,
    children: prop_types_default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);

  return Provider;
}

/* harmony default export */ var components_Provider = (createProvider());
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/index.js
var hoist_non_react_statics = __webpack_require__(90);
var hoist_non_react_statics_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics);

// EXTERNAL MODULE: ./node_modules/react-redux/node_modules/invariant/browser.js
var browser = __webpack_require__(44);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
function Subscription_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    Subscription_classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function connectAdvanced_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function connectAdvanced_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function connectAdvanced_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    browser_default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      connectAdvanced_inherits(Connect, _Component);

      function Connect(props, context) {
        connectAdvanced_classCallCheck(this, Connect);

        var _this = connectAdvanced_possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        browser_default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        browser_default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(react["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(react["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {}

    return hoist_non_react_statics_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(91);

// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ var _root = (root);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (Symbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js



function verifyPlainObject(value, displayName, methodName) {
  if (!lodash_es_isPlainObject(value)) {
    warning(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}

      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return Object(redux["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js
var mergeProps_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return mergeProps_extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) {}
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      warning('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js
function selectorFactory_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = selectorFactory_objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js
var connect_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function connect_objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? shallowEqual : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? shallowEqual : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? shallowEqual : _ref2$areMergedPropsE,
        extraOptions = connect_objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, connect_extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ var connect_connect = (createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js





// EXTERNAL MODULE: ./node_modules/redux-thunk/lib/index.js
var lib = __webpack_require__(93);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/index.js
var redux_devtools_extension = __webpack_require__(94);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(1);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./js/actionTypes.ts
const ADD_TRACK_FROM_URL = "ADD_TRACK_FROM_URL";
const CLOSE_WINAMP = "CLOSE_WINAMP";
const OPEN_WINAMP = "OPEN_WINAMP";
const MINIMIZE_WINAMP = "MINIMIZE_WINAMP";
const IS_PLAYING = "IS_PLAYING";
const IS_STOPPED = "IS_STOPPED";
const PAUSE = "PAUSE";
const PLAY = "PLAY";
const SEEK_TO_PERCENT_COMPLETE = "SEEK_TO_PERCENT_COMPLETE";
const SET_BALANCE = "SET_BALANCE";
const SET_BAND_VALUE = "SET_BAND_VALUE";
const SET_FOCUS = "SET_FOCUS";
const SET_BAND_FOCUS = "SET_BAND_FOCUS";
const SET_FOCUSED_WINDOW = "SET_FOCUSED_WINDOW";
const SET_MEDIA = "SET_MEDIA";
const SET_SCRUB_POSITION = "SET_SCRUB_POSITION";
const SET_SKIN_DATA = "SET_SKIN_DATA";
const SET_VOLUME = "SET_VOLUME";
const START_WORKING = "START_WORKING";
const STEP_MARQUEE = "STEP_MARQUEE";
const STOP = "STOP";
const STOP_WORKING = "STOP_WORKING";
const TOGGLE_DOUBLESIZE_MODE = "TOGGLE_DOUBLESIZE_MODE";
const SET_EQ_AUTO = "SET_EQ_AUTO";
const SET_EQ_ON = "SET_EQ_ON";
const SET_EQ_OFF = "SET_EQ_OFF";
const TOGGLE_LLAMA_MODE = "TOGGLE_LLAMA_MODE";
const TOGGLE_REPEAT = "TOGGLE_REPEAT";
const TOGGLE_SHUFFLE = "TOGGLE_SHUFFLE";
const TOGGLE_TIME_MODE = "TOGGLE_TIME_MODE";
const TOGGLE_VISUALIZER_STYLE = "TOGGLE_VISUALIZER_STYLE";
const UNSET_FOCUS = "UNSET_FOCUS";
const UPDATE_TIME_ELAPSED = "UPDATE_TIME_ELAPSED";
const SET_USER_MESSAGE = "SET_USER_MESSAGE";
const UNSET_USER_MESSAGE = "UNSET_USER_MESSAGE";
const SET_PLAYLIST_SCROLL_POSITION = "SET_PLAYLIST_SCROLL_POSITION";
const CLICKED_TRACK = "CLICKED_TRACK";
const CTRL_CLICKED_TRACK = "CTRL_CLICKED_TRACK";
const SHIFT_CLICKED_TRACK = "SHIFT_CLICKED_TRACK";
const SELECT_ALL = "SELECT_ALL";
const SELECT_ZERO = "SELECT_ZERO";
const INVERT_SELECTION = "INVERT_SELECTION";
const REMOVE_ALL_TRACKS = "REMOVE_ALL_TRACKS";
const CROP_TRACKS = "CROP_TRACKS";
const FILE_INFO = "FILE_INFO";
const REMOVE_TRACKS = "REMOVE_TRACKS";
const SET_AVAILABLE_SKINS = "SET_AVAILABLE_SKINS";
const REVERSE_LIST = "REVERSE_LIST";
const RANDOMIZE_LIST = "RANDOMIZE_LIST";
const SET_TRACK_ORDER = "SET_TRACK_ORDER";
const PLAY_TRACK = "PLAY_TRACK";
const BUFFER_TRACK = "BUFFER_TRACK";
const DRAG_SELECTED = "DRAG_SELECTED";
const SET_MEDIA_TAGS = "SET_MEDIA_TAGS";
const SET_MEDIA_DURATION = "SET_MEDIA_DURATION";
const TOGGLE_WINDOW = "TOGGLE_WINDOW";
const CLOSE_WINDOW = "CLOSE_WINDOW";
const MEDIA_TAG_REQUEST_INITIALIZED = "MEDIA_TAG_REQUEST_INITIALIZED";
const MEDIA_TAG_REQUEST_FAILED = "MEDIA_TAG_REQUEST_FAILED";
const NETWORK_CONNECTED = "NETWORK_CONNECTED";
const NETWORK_DISCONNECTED = "NETWORK_DISCONNECTED";
const UPDATE_WINDOW_POSITIONS = "UPDATE_WINDOW_POSITIONS";
const WINDOW_SIZE_CHANGED = "WINDOW_SIZE_CHANGED";
const TOGGLE_WINDOW_SHADE_MODE = "TOGGLE_WINDOW_SHADE_MODE";
const LOADED = "LOADED";
const SET_Z_INDEX = "SET_Z_INDEX";
const DISABLE_MARQUEE = "DISABLE_MARQUEE";
const SET_DUMMY_VIZ_DATA = "SET_DUMMY_VIZ_DATA";
const SET_WINDOW_VISIBILITY = "SET_WINDOW_VISIBILITY";
const LOADING = "LOADING";
const CLOSE_REQUESTED = "CLOSE_REQUESTED";
const LOAD_SERIALIZED_STATE = "LOAD_SERIALIZED_STATE";
const RESET_WINDOW_SIZES = "RESET_WINDOW_SIZES";
const BROWSER_WINDOW_SIZE_CHANGED = "BROWSER_WINDOW_SIZE_CHANGED";
const LOAD_DEFAULT_SKIN = "LOAD_DEFAULT_SKIN";
const ENABLE_MEDIA_LIBRARY = "ENABLE_MEDIA_LIBRARY";
const ENABLE_MILKDROP = "ENABLE_MILKDROP";
const SET_MILKDROP_DESKTOP = "SET_MILKDROP_DESKTOP";
const SET_VISUALIZER_STYLE = "SET_VISUALIZER_STYLE";
// EXTERNAL MODULE: ./js/baseSkin.json
var baseSkin = __webpack_require__(95);

// CONCATENATED MODULE: ./js/constants.ts

const BANDS = [60, 170, 310, 600, 1000, 3000, 6000, 12000, 14000, 16000];
const WINDOWS = {
  MAIN: "main",
  PLAYLIST: "playlist",
  EQUALIZER: "equalizer",
  MEDIA_LIBRARY: "mediaLibrary",
  MILKDROP: "milkdrop"
};
const LOAD_STYLE = {
  BUFFER: "BUFFER",
  PLAY: "PLAY",
  NONE: "NONE"
}; // TODO: Make this an enum?

const MEDIA_TAG_REQUEST_STATUS = {
  INITIALIZED: "INITIALIZED",
  FAILED: "FAILED",
  COMPLETE: "COMPLETE",
  NOT_REQUESTED: "NOT_REQUESTED"
};
const UTF8_ELLIPSIS = "\u2026";
const CHARACTER_WIDTH = 5;
const WINDOW_RESIZE_SEGMENT_WIDTH = 25;
const WINDOW_RESIZE_SEGMENT_HEIGHT = 29;
const WINDOW_HEIGHT = 116;
const WINDOW_WIDTH = 275;
const TRACK_HEIGHT = 13;
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const DEFAULT_SKIN = baseSkin;
const VISUALIZERS = {
  OSCILLOSCOPE: "OSCILLOSCOPE",
  BAR: "BAR",
  NONE: "NONE",
  MILKDROP: "MILKDROP"
};
const VISUALIZER_ORDER = [VISUALIZERS.BAR, VISUALIZERS.OSCILLOSCOPE, // TODO: Verify the order
VISUALIZERS.NONE];
const TIME_MODE = {
  ELAPSED: "ELAPSED",
  REMAINING: "REMAINING"
}; // TODO: Convert to enum once we are fully Typescript

const MEDIA_STATUS = {
  PLAYING: "PLAYING",
  STOPPED: "STOPPED",
  PAUSED: "PAUSED"
};
// CONCATENATED MODULE: ./js/utils.ts

const getTimeObj = time => {
  if (time == null) {
    // If we clean up `<MiniTime />` we don't need to do this any more.
    return {
      minutesFirstDigit: " ",
      minutesSecondDigit: " ",
      secondsFirstDigit: " ",
      secondsSecondDigit: " "
    };
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const digits = time == null ? [" ", " ", " ", " "] : [String(Math.floor(minutes / 10)), String(Math.floor(minutes % 10)), String(Math.floor(seconds / 10)), String(Math.floor(seconds % 10))];
  const minutesFirstDigit = digits[0],
        minutesSecondDigit = digits[1],
        secondsFirstDigit = digits[2],
        secondsSecondDigit = digits[3];
  return {
    minutesFirstDigit,
    minutesSecondDigit,
    secondsFirstDigit,
    secondsSecondDigit
  };
};
const getTimeStr = function getTimeStr(time) {
  let truncate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (time == null) {
    return "";
  }

  const _getTimeObj = getTimeObj(time),
        minutesFirstDigit = _getTimeObj.minutesFirstDigit,
        minutesSecondDigit = _getTimeObj.minutesSecondDigit,
        secondsFirstDigit = _getTimeObj.secondsFirstDigit,
        secondsSecondDigit = _getTimeObj.secondsSecondDigit;

  return [truncate && minutesFirstDigit === "0" ? "" : minutesFirstDigit, minutesSecondDigit, ":", secondsFirstDigit, secondsSecondDigit].join("");
};
const getFileExtension = fileName => {
  const matches = /\.([a-z]{3,4})$/i.exec(fileName);
  return matches ? matches[1].toLowerCase() : null;
};
const parseViscolors = text => {
  const entries = text.split("\n");
  const regex = /^\s*(\d+)\s*,?\s*(\d+)\s*,?\s*(\d+)/;
  const colors = [...DEFAULT_SKIN.colors];
  entries.map(line => regex.exec(line)).filter(Boolean).map(matches => matches.slice(1, 4).join(",")).map((rgb, i) => {
    colors[i] = `rgb(${rgb})`;
  });
  return colors;
};
const SECTION_REGEX = /^\s*\[(.+?)\]\s*$/;
const PROPERTY_REGEX = /^\s*([^;].*)\s*=\s*(.*)\s*$/;
const parseIni = text => {
  let section, match;
  return text.split(/[\r\n]+/g).reduce((data, line) => {
    if ((match = line.match(PROPERTY_REGEX)) && section != null) {
      const value = match[2].replace(/(^")|("$)|(^')|('$)/gi, "");
      data[section][match[1].trim().toLowerCase()] = value;
    } else if (match = line.match(SECTION_REGEX)) {
      section = match[1].trim().toLowerCase();
      data[section] = {};
    }

    return data;
  }, {});
};
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const base64FromArrayBuffer = arrayBuffer => {
  const dataView = new Uint8Array(arrayBuffer);
  return window.btoa(String.fromCharCode(...dataView));
}; // https://stackoverflow.com/a/15832662/1263117

function downloadURI(uri, name) {
  const link = document.createElement("a");
  link.download = name;
  link.href = uri;
  window.document.body.appendChild(link);
  link.click();
  window.document.body.removeChild(link);
}
const toPercent = (min, max, value) => (value - min) / (max - min);
const percentToRange = (percent, min, max) => min + Math.round(percent * (max - min));
const percentToIndex = (percent, length) => percentToRange(percent, 0, length - 1);

const rebound = (oldMin, oldMax, newMin, newMax) => oldValue => percentToRange(toPercent(oldMin, oldMax, oldValue), newMin, newMax); // Convert a .eqf value to a 1-100


const normalize = rebound(1, 64, 1, 100); // Convert a 0-100 to an .eqf value

const denormalize = rebound(1, 100, 1, 64); // Merge a `source` object to a `target` recursively
// TODO: The typing here is a bit of a disaster.

function merge(target, source) {
  const s = source;
  const t = target; // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties

  for (const key of Object.keys(s)) {
    if (s[key] instanceof Object) Object.assign(s[key], merge(t[key], s[key]));
  } // Join `target` and modified `source`


  Object.assign(target || {}, source);
  return target;
} // Maps a value in a range (defined my min/max) to a value in an array (options).

function segment(min, max, value, newValues) {
  const ratio = toPercent(min, max, value);
  /*
  | 0 | 1 | 2 |
  0   1   2   3
  */

  return newValues[percentToIndex(ratio, newValues.length)];
}
const arraysAreEqual = (a, b) => a.length === b.length && a.every((value, i) => value === b[i]); // https://bost.ocks.org/mike/shuffle/
// Shuffle an array in O(n)

function utils_shuffle(array) {
  const sorted = [...array];
  let m = sorted.length; // While there remain elements to shuffle…

  while (m) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * m--); // And swap it with the current element.

    const val = sorted[m];
    sorted[m] = sorted[i];
    sorted[i] = val;
  }

  return sorted;
}
function sort(array, iteratee) {
  return [...array].sort((a, b) => {
    const aKey = iteratee(a);
    const bKey = iteratee(b);

    if (aKey < bKey) {
      return -1;
    } else if (aKey > bKey) {
      return 1;
    }

    return 0;
  });
}
function moveSelected(arr, isSelected, offset) {
  const newArr = new Array(arr.length);
  let next = 0;

  for (let i = 0; i < newArr.length; i++) {
    const from = i - offset; // Is a value supposed to move here?

    if (from >= 0 && from < arr.length && isSelected(from)) {
      newArr[i] = arr[from];
    } else {
      while (next < arr.length && isSelected(next)) {
        next++;
      }

      newArr[i] = arr[next];
      next++;
    }
  }

  return newArr;
}
function spliceIn(original, start, newValues) {
  const newArr = [...original];
  newArr.splice(start, 0, ...newValues);
  return newArr;
}
function debounce(func, delay) {
  let timeout;
  let callbackArgs = [];
  return function (context) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    callbackArgs = args;

    if (timeout != null) {
      clearTimeout(timeout);
    }

    timeout = window.setTimeout(() => {
      func.apply(context, callbackArgs);
    }, delay);
  };
} // Trailing edge only throttle

function throttle(func, delay) {
  let timeout = null;
  let callbackArgs = [];
  return function (context) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    callbackArgs = args;

    if (!timeout) {
      timeout = window.setTimeout(() => {
        func.apply(context, callbackArgs);
        timeout = null;
      }, delay);
    }
  };
}
let counter = 0;
function uniqueId() {
  return counter++;
}
function objectForEach(obj, cb) {
  Object.keys(obj).forEach(key => cb(obj[key], key));
}
function objectMap(obj, cb) {
  const modified = {};
  Object.keys(obj).forEach(key => modified[key] = cb(obj[key], key));
  return modified;
}
function objectFilter(obj, predicate) {
  // TODO: Could return the original reference if no values change
  return Object.keys(obj).reduce((newObj, key) => {
    if (predicate(obj[key], key)) {
      newObj[key] = obj[key];
    }

    return newObj;
  }, {});
}
const calculateBoundingBox = windows => windows.map(w => ({
  left: w.x,
  top: w.y,
  bottom: w.y + w.height,
  right: w.x + w.width
})).reduce((b, w) => ({
  left: Math.min(b.left, w.left),
  top: Math.min(b.top, w.top),
  bottom: Math.max(b.bottom, w.bottom),
  right: Math.max(b.right, w.right)
}));
function findLastIndex(arr, cb) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (cb(arr[i])) {
      return i;
    }
  }

  return -1;
}
function getWindowSize() {
  // Aparently this is crazy across browsers.
  return {
    width: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth, document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth),
    height: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
  };
}
function weakMapMemoize(func) {
  const cache = new WeakMap();
  return value => {
    if (!cache.has(value)) {
      cache.set(value, func(value));
    }

    return cache.get(value);
  };
}
// Is this a premature optimizaiton? Probably. But it's my side-project so I can
// do what I like. :P
function makeCachingFilterFunction(values, includes) {
  const cache = {
    results: values,
    subCaches: {}
  };
  return query => {
    let queryCache = cache;
    let lastResults = values;

    for (const char of query) {
      let letterCaches = queryCache.subCaches[char];

      if (!letterCaches) {
        letterCaches = queryCache.subCaches[char] = {
          subCaches: {}
        };
      } else if (letterCaches.results) {
        lastResults = letterCaches.results;
      }

      queryCache = letterCaches;
    }

    if (!queryCache.results) {
      queryCache.results = lastResults.filter(v => includes(v, query));
    }

    return queryCache.results;
  };
}
// CONCATENATED MODULE: ./js/reducers/playlist.ts



const defaultPlaylistState = {
  trackOrder: [],
  currentTrack: null,
  lastSelectedIndex: null,
  selectedTracks: new Set()
};

function toggleSetMembership(set, value) {
  if (set.has(value)) {
    set.delete(value);
  } else {
    set.add(value);
  }
}

const playlist_playlist = function playlist() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPlaylistState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case CLICKED_TRACK:
      return objectSpread_default()({}, state, {
        selectedTracks: new Set([state.trackOrder[action.index]]),
        lastSelectedIndex: action.index
      });

    case CTRL_CLICKED_TRACK:
      const id = state.trackOrder[action.index];
      const newSelectedTracks = new Set(state.selectedTracks);
      toggleSetMembership(newSelectedTracks, id);
      return objectSpread_default()({}, state, {
        selectedTracks: newSelectedTracks,
        // Using this as the lastClickedIndex is kinda funny, since you
        // may have just _un_selected the track. However, this is what
        // Winamp 2 does, so we'll copy it.
        lastSelectedIndex: action.index
      });

    case SHIFT_CLICKED_TRACK:
      if (state.lastSelectedIndex == null) {
        return state;
      }

      const clickedIndex = action.index;
      const start = Math.min(clickedIndex, state.lastSelectedIndex);
      const end = Math.max(clickedIndex, state.lastSelectedIndex);
      const selectedTracks = new Set(state.trackOrder.slice(start, end + 1));
      return objectSpread_default()({}, state, {
        selectedTracks
      });

    case SELECT_ALL:
      return objectSpread_default()({}, state, {
        selectedTracks: new Set(state.trackOrder)
      });

    case SELECT_ZERO:
      return objectSpread_default()({}, state, {
        selectedTracks: new Set()
      });

    case INVERT_SELECTION:
      return objectSpread_default()({}, state, {
        selectedTracks: new Set(state.trackOrder.filter(id => !state.selectedTracks.has(id)))
      });

    case REMOVE_ALL_TRACKS:
      // TODO: Consider disposing of ObjectUrls
      return objectSpread_default()({}, state, {
        trackOrder: [],
        currentTrack: null,
        selectedTracks: new Set(),
        lastSelectedIndex: null
      });

    case REMOVE_TRACKS:
      // TODO: Consider disposing of ObjectUrls
      const actionIds = new Set(action.ids.map(Number));
      const currentTrack = state.currentTrack;
      return objectSpread_default()({}, state, {
        trackOrder: state.trackOrder.filter(trackId => !actionIds.has(trackId)),
        currentTrack: actionIds.has(Number(currentTrack)) ? null : currentTrack,
        selectedTracks: new Set(Array.from(state.selectedTracks).filter(id => actionIds.has(id))),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    case REVERSE_LIST:
      return objectSpread_default()({}, state, {
        trackOrder: [...state.trackOrder].reverse(),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    case RANDOMIZE_LIST:
      return objectSpread_default()({}, state, {
        trackOrder: utils_shuffle(state.trackOrder)
      });

    case SET_TRACK_ORDER:
      const trackOrder = action.trackOrder;
      return objectSpread_default()({}, state, {
        trackOrder
      });

    case ADD_TRACK_FROM_URL:
      const atIndex = action.atIndex == null ? state.trackOrder.length : action.atIndex;
      return objectSpread_default()({}, state, {
        trackOrder: [...state.trackOrder.slice(0, atIndex), Number(action.id), ...state.trackOrder.slice(atIndex)],
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    case PLAY_TRACK:
    case BUFFER_TRACK:
      return objectSpread_default()({}, state, {
        currentTrack: action.id
      });

    case DRAG_SELECTED:
      return objectSpread_default()({}, state, {
        trackOrder: moveSelected(state.trackOrder, i => state.selectedTracks.has(state.trackOrder[i]), action.offset),
        // TODO: This could probably be made to work, but we clear it just to be safe.
        lastSelectedIndex: null
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_playlist = (playlist_playlist);
// CONCATENATED MODULE: ./js/reducers/windows.ts




const defaultWindowsState = {
  focused: WINDOWS.MAIN,
  positionsAreRelative: true,
  genWindows: {
    // TODO: Remove static capabilites and derive them from ids/generic
    [WINDOWS.MAIN]: {
      title: "Main Window",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: false,
      canShade: true,
      canDouble: true,
      hotkey: "Alt+W",
      position: {
        x: 0,
        y: 0
      }
    },
    [WINDOWS.EQUALIZER]: {
      title: "Equalizer",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: false,
      canShade: true,
      canDouble: true,
      hotkey: "Alt+G",
      position: {
        x: 0,
        y: 0
      }
    },
    [WINDOWS.PLAYLIST]: {
      title: "Playlist Editor",
      size: [0, 0],
      open: true,
      hidden: false,
      shade: false,
      canResize: true,
      canShade: true,
      canDouble: false,
      hotkey: "Alt+E",
      position: {
        x: 0,
        y: 0
      }
    }
  },
  browserWindowSize: {
    width: 0,
    height: 0
  }
};

const windows_windows = function windows() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultWindowsState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ENABLE_MEDIA_LIBRARY:
      return objectSpread_default()({}, state, {
        genWindows: objectSpread_default()({}, state.genWindows, {
          [WINDOWS.MEDIA_LIBRARY]: {
            title: "Winamp Library",
            size: [0, 0],
            open: true,
            hidden: false,
            shade: false,
            canResize: true,
            canShade: false,
            canDouble: false,
            hotkey: "Alt+E",
            position: {
              x: 0,
              y: 0
            }
          }
        })
      });

    case ENABLE_MILKDROP:
      return objectSpread_default()({}, state, {
        genWindows: objectSpread_default()({}, state.genWindows, {
          [WINDOWS.MILKDROP]: {
            title: "Milkdrop",
            size: [0, 0],
            open: action.open,
            hidden: false,
            shade: false,
            canResize: true,
            canShade: false,
            canDouble: false,
            position: {
              x: 0,
              y: 0
            }
          }
        })
      });

    case SET_FOCUSED_WINDOW:
      return objectSpread_default()({}, state, {
        focused: action.window
      });

    case TOGGLE_WINDOW_SHADE_MODE:
      const canShade = state.genWindows[action.windowId].canShade;

      if (!canShade) {
        throw new Error(`Tried to shade/unshade a window that cannot be shaded: ${action.windowId}`);
      }

      return objectSpread_default()({}, state, {
        genWindows: objectSpread_default()({}, state.genWindows, {
          [action.windowId]: objectSpread_default()({}, state.genWindows[action.windowId], {
            shade: !state.genWindows[action.windowId].shade
          })
        })
      });

    case TOGGLE_WINDOW:
      const windowState = state.genWindows[action.windowId];
      return objectSpread_default()({}, state, {
        genWindows: objectSpread_default()({}, state.genWindows, {
          [action.windowId]: objectSpread_default()({}, windowState, {
            open: !windowState.open,
            // Reset hidden state when opening window
            hidden: windowState.open ? windowState.hidden : false
          })
        })
      });

    case CLOSE_WINDOW:
      return objectSpread_default()({}, state, {
        genWindows: objectSpread_default()({}, state.genWindows, {
          [action.windowId]: objectSpread_default()({}, state.genWindows[action.windowId], {
            open: false
          })
        })
      });

    case SET_WINDOW_VISIBILITY:
      return objectSpread_default()({}, state, {
        genWindows: objectSpread_default()({}, state.genWindows, {
          [action.windowId]: objectSpread_default()({}, state.genWindows[action.windowId], {
            hidden: action.hidden
          })
        })
      });

    case WINDOW_SIZE_CHANGED:
      const canResize = state.genWindows[action.windowId].canResize;

      if (!canResize) {
        throw new Error(`Tried to resize a window that cannot be resized: ${action.windowId}`);
      }

      return objectSpread_default()({}, state, {
        genWindows: objectSpread_default()({}, state.genWindows, {
          [action.windowId]: objectSpread_default()({}, state.genWindows[action.windowId], {
            size: action.size
          })
        })
      });

    case UPDATE_WINDOW_POSITIONS:
      return objectSpread_default()({}, state, {
        positionsAreRelative: action.absolute === true ? false : state.positionsAreRelative,
        genWindows: objectMap(state.genWindows, (w, windowId) => {
          const newPosition = action.positions[windowId];

          if (newPosition == null) {
            return w;
          }

          return objectSpread_default()({}, w, {
            position: newPosition
          });
        })
      });

    case RESET_WINDOW_SIZES:
      return objectSpread_default()({}, state, {
        genWindows: objectMap(state.genWindows, w => objectSpread_default()({}, w, {
          // Not sure why TypeScript can't figure this out for itself.
          size: [0, 0]
        }))
      });

    case LOAD_SERIALIZED_STATE:
      {
        const _action$serializedSta = action.serializedState.windows,
              genWindows = _action$serializedSta.genWindows,
              focused = _action$serializedSta.focused,
              positionsAreRelative = _action$serializedSta.positionsAreRelative;
        return objectSpread_default()({}, state, {
          positionsAreRelative,
          genWindows: objectMap(state.genWindows, (w, windowId) => {
            const serializedW = genWindows[windowId];

            if (serializedW == null) {
              return w;
            }

            return objectSpread_default()({}, w, serializedW);
          }),
          focused
        });
      }

    case BROWSER_WINDOW_SIZE_CHANGED:
      return objectSpread_default()({}, state, {
        browserWindowSize: {
          height: action.height,
          width: action.width
        }
      });

    default:
      return state;
  }
};

function getSerializedState(state) {
  return {
    positionsAreRelative: state.positionsAreRelative,
    genWindows: objectMap(state.genWindows, w => {
      return {
        size: w.size,
        open: w.open,
        hidden: w.hidden,
        shade: w.shade || false,
        position: w.position
      };
    }),
    focused: state.focused
  };
}
/* harmony default export */ var reducers_windows = (windows_windows);
// CONCATENATED MODULE: ./js/reducers/media.ts



const defaultState = {
  timeMode: TIME_MODE.ELAPSED,
  timeElapsed: 0,
  // The winamp ini file declares the default volume as "200".
  // The UI seems to show a default volume near 78, which would
  // math with the default value being 200 out of 255.
  volume: Math.round(200 / 255 * 100),
  balance: 0,
  shuffle: false,
  repeat: false,
  // TODO: Enforce possible values
  status: MEDIA_STATUS.STOPPED
};

const media_media = function media() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    // TODO: Make these constants
    case PLAY:
    case IS_PLAYING:
      return objectSpread_default()({}, state, {
        status: MEDIA_STATUS.PLAYING
      });

    case PAUSE:
      return objectSpread_default()({}, state, {
        status: MEDIA_STATUS.PAUSED
      });

    case STOP:
    case IS_STOPPED:
      return objectSpread_default()({}, state, {
        status: MEDIA_STATUS.STOPPED
      });

    case TOGGLE_TIME_MODE:
      const newMode = state.timeMode === TIME_MODE.REMAINING ? TIME_MODE.ELAPSED : TIME_MODE.REMAINING;
      return objectSpread_default()({}, state, {
        timeMode: newMode
      });

    case UPDATE_TIME_ELAPSED:
      return objectSpread_default()({}, state, {
        timeElapsed: action.elapsed
      });

    case ADD_TRACK_FROM_URL:
      return objectSpread_default()({}, state, {
        timeElapsed: 0
      });

    case SET_MEDIA:
      return objectSpread_default()({}, state);

    case SET_VOLUME:
      return objectSpread_default()({}, state, {
        volume: action.volume
      });

    case SET_BALANCE:
      return objectSpread_default()({}, state, {
        balance: action.balance
      });

    case TOGGLE_REPEAT:
      return objectSpread_default()({}, state, {
        repeat: !state.repeat
      });

    case TOGGLE_SHUFFLE:
      return objectSpread_default()({}, state, {
        shuffle: !state.shuffle
      });

    case LOAD_SERIALIZED_STATE:
      return objectSpread_default()({}, state, action.serializedState.media);

    default:
      return state;
  }
};

function media_getSerializedState(state) {
  const volume = state.volume,
        balance = state.balance,
        shuffle = state.shuffle,
        repeat = state.repeat;
  return {
    volume,
    balance,
    shuffle,
    repeat
  };
}
/* harmony default export */ var reducers_media = (media_media);
// EXTERNAL MODULE: ./node_modules/reselect/lib/index.js
var reselect_lib = __webpack_require__(4);

// CONCATENATED MODULE: ./js/reducers/display.ts




const defaultSkinGenExColors = {
  itemBackground: "rgb(0,0,0)",
  itemForeground: "rgb(0,255,0)",
  windowBackground: "rgb(56,55,87)",
  buttonText: "rgb(57,57,66)",
  windowText: "rgb(255,255,255)",
  divider: "rgb(117,116,139)",
  playlistSelection: "rgb(0,0,198)",
  listHeaderBackground: "rgb(72,72,120)",
  listHeaderText: "rgb(255,255,255)",
  listHeaderFrameTopAndLeft: "rgb(108,108,180)",
  listHeaderFrameBottomAndRight: "rgb(36,36,60)",
  listHeaderFramePressed: "rgb(18,18,30)",
  listHeaderDeadArea: "rgb(36,36,60)",
  scrollbarOne: "rgb(36,36,60)",
  scrollbarTwo: "rgb(36,36,60)",
  pressedScrollbarOne: "rgb(121,130,150)",
  pressedScrollbarTwo: "rgb(78,88,110)",
  scrollbarDeadArea: "rgb(36,36,60)",
  listTextHighlighted: "rgb(0,198,255)",
  listTextHighlightedBackground: "rgb(0,198,255)",
  listTextSelected: "rgb(0,198,255)",
  listTextSelectedBackground: "rgb(0,198,255)"
};
const defaultDisplayState = {
  doubled: false,
  marqueeStep: 0,
  disableMarquee: false,
  loading: true,
  llama: false,
  closed: false,
  working: false,
  skinImages: DEFAULT_SKIN.images,
  skinColors: DEFAULT_SKIN.colors,
  skinCursors: null,
  skinPlaylistStyle: null,
  skinRegion: {},
  visualizerStyle: 0,
  // Index into VISUALIZER_ORDER
  dummyVizData: null,
  playlistScrollPosition: 0,
  skinGenLetterWidths: null,
  // TODO: Get the default value for this?
  skinGenExColors: defaultSkinGenExColors,
  additionalVisualizers: [],
  zIndex: 0
};

const display_display = function display() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultDisplayState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case LOAD_DEFAULT_SKIN:
      const skinImages = defaultDisplayState.skinImages,
            skinColors = defaultDisplayState.skinColors,
            skinCursors = defaultDisplayState.skinCursors,
            skinPlaylistStyle = defaultDisplayState.skinPlaylistStyle,
            skinRegion = defaultDisplayState.skinRegion,
            skinGenLetterWidths = defaultDisplayState.skinGenLetterWidths,
            skinGenExColors = defaultDisplayState.skinGenExColors;
      return objectSpread_default()({}, state, {
        skinImages,
        skinColors,
        skinCursors,
        skinPlaylistStyle,
        skinRegion,
        skinGenLetterWidths,
        skinGenExColors
      });

    case TOGGLE_DOUBLESIZE_MODE:
      return objectSpread_default()({}, state, {
        doubled: !state.doubled
      });

    case TOGGLE_LLAMA_MODE:
      return objectSpread_default()({}, state, {
        llama: !state.llama
      });

    case STEP_MARQUEE:
      return state.disableMarquee ? state : objectSpread_default()({}, state, {
        marqueeStep: state.marqueeStep + 1
      });

    case DISABLE_MARQUEE:
      return objectSpread_default()({}, state, {
        disableMarquee: true
      });

    case STOP_WORKING:
      return objectSpread_default()({}, state, {
        working: false
      });

    case START_WORKING:
      return objectSpread_default()({}, state, {
        working: true
      });

    case CLOSE_WINAMP:
      return objectSpread_default()({}, state, {
        closed: true
      });

    case OPEN_WINAMP:
      return objectSpread_default()({}, state, {
        closed: false
      });

    case LOADING:
      return objectSpread_default()({}, state, {
        loading: true
      });

    case LOADED:
      return objectSpread_default()({}, state, {
        loading: false
      });

    case SET_SKIN_DATA:
      const data = action.data;
      return objectSpread_default()({}, state, {
        loading: false,
        skinImages: data.skinImages,
        skinColors: data.skinColors,
        skinPlaylistStyle: data.skinPlaylistStyle,
        skinCursors: data.skinCursors,
        skinRegion: data.skinRegion,
        skinGenLetterWidths: data.skinGenLetterWidths,
        skinGenExColors: data.skinGenExColors || defaultSkinGenExColors
      });

    case TOGGLE_VISUALIZER_STYLE:
      return objectSpread_default()({}, state, {
        visualizerStyle: (state.visualizerStyle + 1) % VISUALIZER_ORDER.length
      });

    case SET_PLAYLIST_SCROLL_POSITION:
      return objectSpread_default()({}, state, {
        playlistScrollPosition: action.position
      });

    case SET_Z_INDEX:
      return objectSpread_default()({}, state, {
        zIndex: action.zIndex
      });

    case SET_DUMMY_VIZ_DATA:
      return objectSpread_default()({}, state, {
        dummyVizData: action.data
      });

    case LOAD_SERIALIZED_STATE:
      return objectSpread_default()({}, state, action.serializedState.display);

    default:
      return state;
  }
};

/* harmony default export */ var reducers_display = (display_display);
const display_getSerializedState = state => {
  // My kingdom for a type-safe `_.pick`.
  const visualizerStyle = state.visualizerStyle,
        doubled = state.doubled,
        llama = state.llama,
        marqueeStep = state.marqueeStep,
        skinImages = state.skinImages,
        skinCursors = state.skinCursors,
        skinRegion = state.skinRegion,
        skinGenLetterWidths = state.skinGenLetterWidths,
        skinColors = state.skinColors,
        skinPlaylistStyle = state.skinPlaylistStyle;
  return {
    visualizerStyle,
    doubled,
    llama,
    marqueeStep,
    skinImages,
    skinCursors,
    skinRegion,
    skinGenLetterWidths,
    skinColors,
    skinPlaylistStyle
  };
};
const getVisualizerStyle = Object(reselect_lib["createSelector"])(state => state.visualizerStyle, visualizationStyle => {
  return VISUALIZER_ORDER[visualizationStyle];
});
// CONCATENATED MODULE: ./js/reducers/userInput.ts


const defaultUserInput = {
  focus: null,
  bandFocused: null,
  scrubPosition: 0,
  userMessage: null
};
const userInput_userInput = function userInput() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultUserInput;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_FOCUS:
      return objectSpread_default()({}, state, {
        focus: action.input,
        bandFocused: null
      });

    case SET_BAND_FOCUS:
      return objectSpread_default()({}, state, {
        focus: action.input,
        bandFocused: action.bandFocused
      });

    case UNSET_FOCUS:
      return objectSpread_default()({}, state, {
        focus: null,
        bandFocused: null
      });

    case SET_SCRUB_POSITION:
      return objectSpread_default()({}, state, {
        scrubPosition: action.position
      });

    case SET_USER_MESSAGE:
      return objectSpread_default()({}, state, {
        userMessage: action.message
      });

    case UNSET_USER_MESSAGE:
      return objectSpread_default()({}, state, {
        userMessage: null
      });

    default:
      return state;
  }
};
/* harmony default export */ var reducers_userInput = (userInput_userInput);
// CONCATENATED MODULE: ./js/reducers/equalizer.ts


const equalizer_defaultState = {
  on: true,
  auto: false,
  sliders: {
    preamp: 50,
    60: 50,
    170: 50,
    310: 50,
    600: 50,
    1000: 50,
    3000: 50,
    6000: 50,
    12000: 50,
    14000: 50,
    16000: 50
  }
};

const equalizer_equalizer = function equalizer() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : equalizer_defaultState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_BAND_VALUE:
      const newSliders = objectSpread_default()({}, state.sliders, {
        [action.band]: action.value
      });

      return objectSpread_default()({}, state, {
        sliders: newSliders
      });

    case SET_EQ_ON:
      return objectSpread_default()({}, state, {
        on: true
      });

    case SET_EQ_OFF:
      return objectSpread_default()({}, state, {
        on: false
      });

    case SET_EQ_AUTO:
      return objectSpread_default()({}, state, {
        auto: action.value
      });

    case LOAD_SERIALIZED_STATE:
      return action.serializedState.equalizer || state;

    default:
      return state;
  }
};

function equalizer_getSerializedState(state) {
  return state;
}
/* harmony default export */ var reducers_equalizer = (equalizer_equalizer);
// CONCATENATED MODULE: ./js/reducers/network.ts



const network_network = function network() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    connected: true
  };
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case NETWORK_CONNECTED:
      return objectSpread_default()({}, state, {
        connected: true
      });

    case NETWORK_DISCONNECTED:
      return objectSpread_default()({}, state, {
        connected: false
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_network = (network_network);
// CONCATENATED MODULE: ./js/reducers/settings.ts


const defaultSettingsState = {
  availableSkins: []
};

const settings_settings = function settings() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSettingsState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_AVAILABLE_SKINS:
      return objectSpread_default()({}, state, {
        availableSkins: action.skins
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_settings = (settings_settings);
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var invariant_browser = __webpack_require__(30);
var invariant_browser_default = /*#__PURE__*/__webpack_require__.n(invariant_browser);

// CONCATENATED MODULE: ./js/fileUtils.ts

function genMediaTags(file, musicMetadata) {
  invariant_browser_default()(file != null, "Attempted to get the tags of media file without passing a file");
  const options = {
    duration: true,
    skipPostHeaders: true // avoid unnecessary data to be read

  };

  if (typeof file === "string") {
    return musicMetadata.fetchFromUrl(file, options);
  } // Assume Blob


  return musicMetadata.parseBlob(file, options);
}
function genMediaDuration(url) {
  invariant_browser_default()(typeof url === "string", "Attempted to get the duration of media file without passing a url");
  return new Promise((resolve, reject) => {
    // TODO: Does this actually stop downloading the file once it's
    // got the duration?
    const audio = document.createElement("audio");
    audio.crossOrigin = "anonymous";

    const durationChange = () => {
      resolve(audio.duration);
      audio.removeEventListener("durationchange", durationChange);
      audio.src = ""; // TODO: Not sure if this really gets cleaned up.
    };

    audio.addEventListener("durationchange", durationChange);
    audio.addEventListener("error", e => {
      reject(e);
    });
    audio.src = url;
  });
}
async function genArrayBufferFromFileReference(fileReference) {
  invariant_browser_default()(fileReference != null, "Attempt to get an ArrayBuffer without assigning a fileReference");
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result);
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(fileReference);
  });
}
async function promptForFileReferences() {
  let _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    accept: null,
    directory: false
  },
      accept = _ref.accept,
      _ref$directory = _ref.directory,
      directory = _ref$directory === void 0 ? false : _ref$directory;

  return new Promise(resolve => {
    // Does this represent a memory leak somehow?
    // Can this fail? Do we ever reject?
    const fileInput = document.createElement("input");
    if (accept) fileInput.setAttribute("accept", accept);
    fileInput.type = "file";
    fileInput.multiple = true; // @ts-ignore Non-standard

    fileInput.webkitdirectory = directory; // @ts-ignore Non-standard

    fileInput.directory = directory; // @ts-ignore Non-standard

    fileInput.mozdirectory = directory; // Not entirely sure why this is needed, since the input
    // was just created, but somehow this helps prevent change
    // events from getting swallowed.
    // https://stackoverflow.com/a/12102992/1263117
    // @ts-ignore Technically you can't set this to null, it has to be a string.
    // But I don't feel like retesting it, so I'll leave it as null

    fileInput.value = null;
    fileInput.addEventListener("change", e => {
      const files = e.target.files;
      resolve(files);
    });
    fileInput.click();
  });
}

function urlIsBlobUrl(url) {
  return /^blob:/.test(url);
} // This is not perfect, but... meh: https://stackoverflow.com/a/36756650/1263117


function filenameFromUrl(url) {
  if (urlIsBlobUrl(url)) {
    return null;
  }

  const lastSegment = url.split("/").pop();

  if (lastSegment == null) {
    return null;
  }

  return lastSegment.split("#")[0].split("?")[0];
}
// CONCATENATED MODULE: ./js/trackUtils.ts


const trackName = weakMapMemoize(track => {
  const artist = track.artist,
        title = track.title,
        defaultName = track.defaultName,
        url = track.url;

  if (artist && title) {
    return `${artist} - ${title}`;
  } else if (title) {
    return title;
  } else if (defaultName) {
    return defaultName;
  } else if (url) {
    const filename = filenameFromUrl(url);

    if (filename) {
      return filename;
    }
  }

  return "???";
});
const trackFilename = weakMapMemoize(track => {
  if (track.url) {
    const urlFilename = filenameFromUrl(track.url);

    if (urlFilename != null) {
      return urlFilename;
    }
  }

  if (track.defaultName) {
    return track.defaultName;
  }

  return "???";
});
const trackFilterContents = weakMapMemoize(track => {
  return [track.artist, track.title, track.defaultName].filter(Boolean).join("|").toLowerCase();
});
// CONCATENATED MODULE: ./js/reducers/tracks.ts




const tracks_defaultPlaylistState = {};

const tracks_tracks = function tracks() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : tracks_defaultPlaylistState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_TRACK_FROM_URL:
      return objectSpread_default()({}, state, {
        [action.id]: {
          id: action.id,
          defaultName: action.defaultName || null,
          duration: action.duration == null ? null : action.duration,
          url: action.url,
          mediaTagsRequestStatus: MEDIA_TAG_REQUEST_STATUS.INITIALIZED
        }
      });

    case SET_MEDIA:
      {
        const newTrack = objectSpread_default()({}, state[action.id], {
          duration: action.length
        });

        return objectSpread_default()({}, state, {
          [action.id]: newTrack
        });
      }

    case MEDIA_TAG_REQUEST_INITIALIZED:
      return objectSpread_default()({}, state, {
        [action.id]: objectSpread_default()({}, state[action.id], {
          mediaTagsRequestStatus: MEDIA_TAG_REQUEST_STATUS.INITIALIZED
        })
      });

    case MEDIA_TAG_REQUEST_FAILED:
      return objectSpread_default()({}, state, {
        [action.id]: objectSpread_default()({}, state[action.id], {
          mediaTagsRequestStatus: MEDIA_TAG_REQUEST_STATUS.FAILED
        })
      });

    case SET_MEDIA_DURATION:
      {
        return objectSpread_default()({}, state, {
          [action.id]: objectSpread_default()({}, state[action.id], {
            duration: action.duration
          })
        });
      }

    case SET_MEDIA_TAGS:
      const track = state[action.id];
      const sampleRate = action.sampleRate,
            bitrate = action.bitrate,
            numberOfChannels = action.numberOfChannels,
            title = action.title,
            artist = action.artist,
            album = action.album,
            albumArtUrl = action.albumArtUrl;
      const kbps = track.kbps,
            khz = track.khz,
            channels = track.channels;
      return objectSpread_default()({}, state, {
        [action.id]: objectSpread_default()({}, track, {
          mediaTagsRequestStatus: MEDIA_TAG_REQUEST_STATUS.COMPLETE,
          title,
          artist,
          album,
          albumArtUrl,
          kbps: bitrate != null ? String(Math.round(bitrate / 1000)) : kbps,
          khz: sampleRate != null ? String(Math.round(sampleRate / 1000)) : khz,
          channels: numberOfChannels != null ? numberOfChannels : channels
        })
      });

    default:
      return state;
  }
};

/* harmony default export */ var reducers_tracks = (tracks_tracks);
const tracks_getTrackDisplayName = function getTrackDisplayName(state) {
  let id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (id == null) {
    return null;
  }

  const track = state[id];

  if (track == null) {
    return null;
  }

  return trackName(track);
};
// CONCATENATED MODULE: ./js/reducers/milkdrop.ts


const defaultMilkdropState = {
  desktop: false
};
const milkdrop_milkdrop = function milkdrop() {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultMilkdropState;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_MILKDROP_DESKTOP:
      return objectSpread_default()({}, state, {
        desktop: action.enabled
      });

    default:
      return state;
  }
};
/* harmony default export */ var reducers_milkdrop = (milkdrop_milkdrop);
// CONCATENATED MODULE: ./js/reducers/index.ts











const reducer = Object(redux["combineReducers"])({
  userInput: reducers_userInput,
  windows: reducers_windows,
  display: reducers_display,
  settings: reducers_settings,
  equalizer: reducers_equalizer,
  playlist: reducers_playlist,
  media: reducers_media,
  network: reducers_network,
  tracks: reducers_tracks,
  milkdrop: reducers_milkdrop
});
/* harmony default export */ var reducers = (reducer);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./js/playlistHtml.tsx


const getAsDataURI = text => `data:text/html;base64,${window.btoa(text)}`; // Replaces deprecated "noshade" attribute

const noshadeStyle = {
  height: "2px",
  borderWidth: 0,
  color: "gray",
  backgroundColor: "gray"
}; // We use all kinds of non-standard attributes and tags. So we create these fake
// components to trick Typescript.

const Body = props => {
  // @ts-ignore
  return react_default.a.createElement("body", props);
};

const Font = props => {
  // @ts-ignore
  return react_default.a.createElement("font", props);
};

const Hr = props => {
  // @ts-ignore
  return react_default.a.createElement("hr", props);
};

const Div = props => {
  // @ts-ignore
  return react_default.a.createElement("div", props);
};

const Table = props => {
  // @ts-ignore
  return react_default.a.createElement("table", props);
}; // TODO: Move <html> tag out to the string creation step in order
// to avoid the warning.


const Playlist = props => react_default.a.createElement("html", null, react_default.a.createElement("head", null, react_default.a.createElement("link", {
  rel: "stylesheet",
  href: "null"
}), react_default.a.createElement("style", {
  type: "text/css"
}, `
        body { background: #000040; }
        .para1 { margin-top: -42px; margin-left: 145px; margin-right: 10px; font-family: "font2, Arial"; font-size: 30px; line-height: 35px; text-align: left; color: #E1E1E1; }
        .para2 { margin-top: 15px; margin-left: 15px; margin-right: 50px; font-family: "font1, Arial Black"; font-size: 50px; line-height: 40px; text-align: left; color: #004080; }
        `), react_default.a.createElement("title", null, "Winamp Generated PlayList")), react_default.a.createElement(Body, {
  bgcolor: "#000080",
  topmargin: "0",
  leftmargin: "0",
  text: "#FFFFFF"
}, react_default.a.createElement(Div, {
  align: "center"
}, react_default.a.createElement(Div, {
  className: "para2",
  align: "center"
}, react_default.a.createElement("p", null, "WINAMP")), react_default.a.createElement(Div, {
  className: "para1",
  align: "center"
}, react_default.a.createElement("p", null, "playlist"))), react_default.a.createElement(Hr, {
  align: "left",
  width: "90%",
  size: "1",
  color: "#FFBF00",
  style: noshadeStyle
}), react_default.a.createElement(Div, {
  align: "right"
}, react_default.a.createElement(Table, {
  border: "0",
  cellSpacing: "0",
  cellPadding: "0",
  width: "98%"
}, react_default.a.createElement("tbody", null, react_default.a.createElement("tr", null, react_default.a.createElement("td", null, react_default.a.createElement("small", null, react_default.a.createElement("small", null, react_default.a.createElement(Font, {
  face: "Arial",
  color: "#FFBF00"
}, props.numberOfTracks), react_default.a.createElement(Font, {
  color: "#409FFF",
  face: "Arial"
}, " track in playlist, average track length: "), react_default.a.createElement(Font, {
  face: "Arial",
  color: "#FFBF00"
}, props.averageTrackLength))), react_default.a.createElement("br", null), react_default.a.createElement("small", null, react_default.a.createElement("small", null, react_default.a.createElement(Font, {
  color: "#409FFF",
  face: "Arial"
}, "Playlist length: "), react_default.a.createElement(Font, {
  face: "Arial",
  color: "#FFBF00"
}, props.playlistLengthMinutes), react_default.a.createElement(Font, {
  color: "#409FFF",
  face: "Arial"
}, " minutes "), react_default.a.createElement(Font, {
  face: "Arial",
  color: "#FFBF00"
}, props.playlistLengthSeconds), react_default.a.createElement(Font, {
  color: "#409FFF",
  face: "Arial"
}, " second "), react_default.a.createElement("br", null), react_default.a.createElement(Font, {
  color: "#409FFF",
  face: "Arial"
}, "Right-click ", react_default.a.createElement("a", {
  href: "./"
}, "here"), " to save this HTML file.")))))))), react_default.a.createElement("blockquote", null, react_default.a.createElement("p", null, react_default.a.createElement(Font, {
  color: "#FFBF00",
  face: "Arial"
}, react_default.a.createElement("big", null, "Playlist files:"))), react_default.a.createElement("ul", null, react_default.a.createElement(Font, {
  face: "Arial",
  color: "#FFFFFF"
}, react_default.a.createElement("small", null, props.tracks.map(track => react_default.a.createElement("span", {
  key: track
}, track, react_default.a.createElement("br", null))))))), react_default.a.createElement(Hr, {
  align: "left",
  width: "90%",
  size: "1",
  color: "#FFBF00",
  style: noshadeStyle
})));

const createPlaylistHTML = props => {
  const node = document.createElement("div");
  Object(react_dom["render"])(react_default.a.createElement(Playlist, props), node);
  return node.innerHTML;
};

const createPlaylistURL = props => getAsDataURI(createPlaylistHTML(props));
// CONCATENATED MODULE: ./js/marqueeUtils.tsx

const getBalanceText = balance => {
  if (balance === 0) {
    return "Balance: Center";
  }

  const direction = balance > 0 ? "Right" : "Left";
  return `Balance: ${Math.abs(balance)}% ${direction}`;
};
const getVolumeText = volume => `Volume: ${volume}%`;
const getPositionText = (duration, seekToPercent) => {
  const newElapsedStr = getTimeStr(duration * seekToPercent / 100, false);
  const durationStr = getTimeStr(duration, false);
  return `Seek to: ${newElapsedStr}/${durationStr} (${seekToPercent}%)`;
};
const getDoubleSizeModeText = enabled => `${enabled ? "Disable" : "Enable"} doublesize mode`;

const formatHz = hz => hz < 1000 ? `${hz}HZ` : `${hz / 1000}KHZ`; // Format a number as a string, ensuring it has a + or - sign


const ensureSign = num => num > 0 ? `+${num}` : num.toString(); // Round to 1 and exactly 1 decimal point


const roundToTenths = num => (Math.round(num * 10) / 10).toFixed(1);

const getEqText = (band, level) => {
  const db = roundToTenths((level - 50) / 50 * 12);
  const label = band === "preamp" ? "Preamp" : formatHz(band);
  return `EQ: ${label} ${ensureSign(db)} DB`;
};
// CONCATENATED MODULE: ./js/resizeUtils.ts

function getPositionDiff(graph, sizeDiff) {
  const newGraph = {};
  const positionDiff = {};

  for (const key of Object.keys(graph)) {
    newGraph[key] = {
      above: [],
      left: []
    };
    positionDiff[key] = {
      x: 0,
      y: 0
    };
  } // Construct an inverted graph


  for (const _ref of Object.entries(graph)) {
    var _ref2 = slicedToArray_default()(_ref, 2);

    const key = _ref2[0];
    const neighbors = _ref2[1];
    const below = neighbors.below,
          right = neighbors.right;

    if (right != null) {
      newGraph[right].left.push(key);
    }

    if (below != null) {
      newGraph[below].above.push(key);
    }
  }

  function walkRight(key) {
    const node = newGraph[key];
    const nodeSizeDiff = sizeDiff[key];
    node.left.forEach(left => {
      positionDiff[left].x += nodeSizeDiff.width + positionDiff[key].x;
      walkRight(left);
    });
  }

  function walkDown(key) {
    const node = newGraph[key];
    const nodeSizeDiff = sizeDiff[key];
    node.above.forEach(above => {
      positionDiff[above].y += nodeSizeDiff.height + positionDiff[key].y;
      walkDown(above);
    });
  } // Find disconnected nodes, and walk


  for (const _ref3 of Object.entries(graph)) {
    var _ref4 = slicedToArray_default()(_ref3, 2);

    const key = _ref4[0];
    const neighbors = _ref4[1];

    if (neighbors.below == null) {
      walkDown(key);
    }

    if (neighbors.right == null) {
      walkRight(key);
    }
  }

  return positionDiff;
}
function generateGraph(windows) {
  const bottoms = {};
  const rights = {};

  for (const w of windows) {
    const bottom = w.y + w.height;

    if (bottoms[bottom]) {
      bottoms[bottom].push(w);
    } else {
      bottoms[bottom] = [w];
    }

    const right = w.x + w.width;

    if (rights[right]) {
      rights[right].push(w);
    } else {
      rights[right] = [w];
    }
  }

  const graph = {};

  for (const w of windows) {
    const edges = {};
    const top = w.y;
    const left = w.x;
    const tops = bottoms[top];
    const lefts = rights[left];

    if (tops) {
      for (const below of tops) {
        const isToTheLeft = below.x + below.width < w.x;
        const isToTheRight = below.x > w.x + w.width;
        const overlapsInX = !(isToTheLeft || isToTheRight);

        if (overlapsInX) {
          edges.below = below.key;
          break;
        }
      }
    }

    if (lefts) {
      for (const right of lefts) {
        const isAbove = right.y + right.height < w.y;
        const isBelow = right.y > w.y + w.height;
        const overlapsInY = !(isAbove || isBelow);

        if (overlapsInY) {
          edges.right = right.key;
          break;
        }
      }
    }

    graph[w.key] = edges;
  }

  return graph;
}
// CONCATENATED MODULE: ./js/selectors.ts














const getSliders = state => state.equalizer.sliders;
const getEqfData = Object(reselect_lib["createSelector"])(getSliders, sliders => {
  const preset = {
    name: "Entry1",
    preamp: denormalize(sliders.preamp)
  };
  BANDS.forEach(band => {
    preset[`hz${band}`] = denormalize(sliders[band]);
  });
  const eqfData = {
    presets: [preset],
    type: "Winamp EQ library file v1.1"
  };
  return eqfData;
});
const getTracks = state => state.tracks;
const getTracksMatchingFilter = Object(reselect_lib["createSelector"])(getTracks, tracks => {
  const tracksArray = Object.values(tracks);
  const filter = makeCachingFilterFunction(tracksArray, (track, query) => trackFilterContents(track).includes(query));
  return filterString => {
    return filter(filterString.toLowerCase());
  };
});
const getTrackUrl = state => {
  return id => {
    const track = state.tracks[id];
    return track == null ? null : track.url;
  };
};
const getTrackOrder = state => state.playlist.trackOrder;
const getTrackCount = Object(reselect_lib["createSelector"])(getTrackOrder, trackOrder => trackOrder.length);
const getOrderedTracks = Object(reselect_lib["createSelector"])(getTracks, getTrackOrder, (tracks, trackOrder) => trackOrder.filter(id => tracks[id]));
const getOrderedTrackObjects = Object(reselect_lib["createSelector"])(getTracks, getOrderedTracks, (tracks, trackOrder) => trackOrder.map(id => tracks[id]));
const getSelectedTrackIds = state => {
  return state.playlist.selectedTracks;
};
const getSelectedTrackObjects = Object(reselect_lib["createSelector"])(getOrderedTrackObjects, getSelectedTrackIds, (tracks, selectedIds) => tracks.filter(track => selectedIds.has(track.id))); // If a duration is `null`, it counts as zero, which seems fine enough.

const runningTimeFromTracks = tracks => tracks.reduce((time, track) => time + Number(track.duration), 0);

const getTotalRunningTime = Object(reselect_lib["createSelector"])(getOrderedTrackObjects, runningTimeFromTracks);
const getSelectedRunningTime = Object(reselect_lib["createSelector"])(getSelectedTrackObjects, runningTimeFromTracks); // Note: We should append "+" to these values if some of the tracks are of unknown time.

const getRunningTimeMessage = Object(reselect_lib["createSelector"])(getTotalRunningTime, getSelectedRunningTime, (totalRunningTime, selectedRunningTime) => `${getTimeStr(selectedRunningTime)}/${getTimeStr(totalRunningTime)}`); // TODO: use slectors to get memoization

const getCurrentTrackIndex = state => {
  const playlist = state.playlist;

  if (playlist.currentTrack == null) {
    return -1;
  }

  return playlist.trackOrder.indexOf(playlist.currentTrack);
};
const getCurrentTrackNumber = Object(reselect_lib["createSelector"])(getCurrentTrackIndex, currentTrackIndex => currentTrackIndex + 1);
const getCurrentTrackId = state => state.playlist.currentTrack;
const selectors_nextTrack = function nextTrack(state) {
  let n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  const trackOrder = state.playlist.trackOrder,
        repeat = state.media.repeat;
  const trackCount = getTrackCount(state);

  if (trackCount === 0) {
    return null;
  }

  const currentIndex = getCurrentTrackIndex(state);
  let nextIndex = currentIndex + n;

  if (repeat) {
    nextIndex = nextIndex % trackCount;

    if (nextIndex < 0) {
      // Handle wrapping around backwards
      nextIndex += trackCount;
    }

    return trackOrder[nextIndex];
  }

  if (currentIndex === trackCount - 1 && n > 0) {
    return null;
  } else if (currentIndex === 0 && n < 0) {
    return null;
  }

  nextIndex = clamp(nextIndex, 0, trackCount - 1);
  return trackOrder[nextIndex];
};
const BASE_WINDOW_HEIGHT = 58;
const getNumberOfVisibleTracks = state => {
  const playlistSize = selectors_getWindowSize(state)("playlist");
  return Math.floor((BASE_WINDOW_HEIGHT + WINDOW_RESIZE_SEGMENT_HEIGHT * playlistSize[1]) / TRACK_HEIGHT);
};
const getOverflowTrackCount = Object(reselect_lib["createSelector"])(getTrackCount, getNumberOfVisibleTracks, (trackCount, numberOfVisibleTracks) => Math.max(0, trackCount - numberOfVisibleTracks));

const _getPlaylistScrollPosition = state => state.display.playlistScrollPosition;

const getPlaylistScrollPosition = Object(reselect_lib["createSelector"])(getOverflowTrackCount, _getPlaylistScrollPosition, (overflowTrackCount, playlistScrollPosition) => {
  if (overflowTrackCount === 0) {
    return 0;
  }

  return Math.round(Math.round(overflowTrackCount * playlistScrollPosition / 100) / overflowTrackCount * 100);
});
const getScrollOffset = Object(reselect_lib["createSelector"])(_getPlaylistScrollPosition, getTrackCount, getNumberOfVisibleTracks, (playlistScrollPosition, trackCount, numberOfVisibleTracks) => {
  const overflow = Math.max(0, trackCount - numberOfVisibleTracks);
  return percentToIndex(playlistScrollPosition / 100, overflow + 1);
});
const getVisibleTrackIds = Object(reselect_lib["createSelector"])(getScrollOffset, getTrackOrder, getNumberOfVisibleTracks, (offset, trackOrder, numberOfVisibleTracks) => trackOrder.slice(offset, offset + numberOfVisibleTracks));
const getTrackIsVisibleFunction = Object(reselect_lib["createSelector"])(getVisibleTrackIds, visibleTrackIds => {
  return id => visibleTrackIds.includes(id);
});
const getVisibleTracks = Object(reselect_lib["createSelector"])(getVisibleTrackIds, getTracks, (visibleTrackIds, tracks) => visibleTrackIds.map(id => tracks[id]));
const getPlaylist = state => state.playlist;
const getDuration = state => {
  const playlist = state.playlist,
        tracks = state.tracks;

  if (playlist.currentTrack == null) {
    return null;
  }

  const currentTrack = tracks[playlist.currentTrack];
  return currentTrack && currentTrack.duration;
};
const selectors_getTrackDisplayName = Object(reselect_lib["createSelector"])(getTracks, tracks => {
  return trackId => tracks_getTrackDisplayName(tracks, trackId);
});
const getCurrentTrackDisplayName = Object(reselect_lib["createSelector"])(getCurrentTrackId, selectors_getTrackDisplayName, (id, getName) => {
  return getName(id);
});
const getMediaIsPlaying = state => state.media.status === MEDIA_STATUS.PLAYING;
const getCurrentTrack = Object(reselect_lib["createSelector"])(getCurrentTrackId, getTracks, (trackId, tracks) => {
  return trackId == null ? null : tracks[trackId];
});
const getCurrentlyPlayingTrackIdIfLoaded = Object(reselect_lib["createSelector"])(getMediaIsPlaying, getCurrentTrack, (mediaIsPlaying, currentTrack) => {
  if (!mediaIsPlaying || !currentTrack || currentTrack.mediaTagsRequestStatus === MEDIA_TAG_REQUEST_STATUS.INITIALIZED) {
    return null;
  }

  return currentTrack.id;
});
const getCurrentTrackInfo = Object(reselect_lib["createSelector"])(getCurrentTrack, track => {
  if (track == null) {
    return null;
  }

  return {
    url: track.url,
    metaData: {
      title: track.title || null,
      artist: track.artist || null,
      album: track.album || null,
      albumArtUrl: track.albumArtUrl || null
    }
  };
});
const getMinimalMediaText = Object(reselect_lib["createSelector"])(getCurrentTrackNumber, getCurrentTrackDisplayName, (trackNumber, name) => name == null ? null : `${trackNumber}. ${name}`);
const getMediaText = Object(reselect_lib["createSelector"])(getMinimalMediaText, getDuration, (minimalMediaText, duration) => minimalMediaText == null ? null : // TODO: Maybe the `  ***  ` should actually be added by the marquee
`${minimalMediaText} (${getTimeStr(duration)})  ***  `);
const getNumberOfTracks = state => getTrackOrder(state).length;
const getPlaylistDuration = Object(reselect_lib["createSelector"])(getTracks, tracks => Object.values(tracks).reduce((total, track) => total + (track.duration || 0), 0));
const getPlaylistURL = Object(reselect_lib["createSelector"])(getNumberOfTracks, getPlaylistDuration, getTrackOrder, getTracks, selectors_getTrackDisplayName, (numberOfTracks, playlistDuration, trackOrder, tracks, getDisplayName) => createPlaylistURL({
  numberOfTracks,
  averageTrackLength: getTimeStr(playlistDuration / numberOfTracks),
  // TODO: Handle hours
  playlistLengthMinutes: Math.floor(playlistDuration / 60),
  playlistLengthSeconds: Math.floor(playlistDuration % 60),
  tracks: trackOrder.map((id, i) => `${i + 1}. ${getDisplayName(id)} (${getTimeStr(tracks[id].duration)})`)
}));
const selectors_WINDOW_HEIGHT = 116;
const SHADE_WINDOW_HEIGHT = 14;

function getWPixelSize(w, doubled) {
  const _w$size = slicedToArray_default()(w.size, 2),
        width = _w$size[0],
        height = _w$size[1];

  const doubledMultiplier = doubled && w.canDouble ? 2 : 1;
  const pix = {
    height: selectors_WINDOW_HEIGHT + height * WINDOW_RESIZE_SEGMENT_HEIGHT,
    width: WINDOW_WIDTH + width * WINDOW_RESIZE_SEGMENT_WIDTH
  };
  return {
    height: (w.shade ? SHADE_WINDOW_HEIGHT : pix.height) * doubledMultiplier,
    width: pix.width * doubledMultiplier
  };
}

function selectors_getWindowSize(state) {
  return windowId => state.windows.genWindows[windowId].size;
}
function getWindowOpen(state) {
  return windowId => state.windows.genWindows[windowId].open;
}
function getWindowShade(state) {
  return windowId => state.windows.genWindows[windowId].shade;
}
function getWindowHidden(state) {
  return windowId => state.windows.genWindows[windowId].hidden;
}
function getFocusedWindow(state) {
  return state.windows.focused;
}
function getWindowPosition(state) {
  return windowId => state.windows.genWindows[windowId].position;
}
function getPositionsAreRelative(state) {
  return state.windows.positionsAreRelative;
}
const getGenWindows = state => {
  return state.windows.genWindows;
};
const getWindowPositions = Object(reselect_lib["createSelector"])(getGenWindows, windows => objectMap(windows, w => w.position));
function getDoubled(state) {
  return state.display.doubled;
}
function getLlamaMode(state) {
  return state.display.llama;
}
const getWindowSizes = Object(reselect_lib["createSelector"])(getGenWindows, getDoubled, (windows, doubled) => {
  return objectMap(windows, w => getWPixelSize(w, doubled));
});
const getWindowPixelSize = Object(reselect_lib["createSelector"])(getWindowSizes, sizes => {
  return windowId => sizes[windowId];
}); // TODO: Now that both size and position are stored on genWindows this seems a bit silly.

const getWindowsInfo = Object(reselect_lib["createSelector"])(getWindowSizes, getWindowPositions, (sizes, positions) => Object.keys(sizes).map(key => objectSpread_default()({
  key
}, sizes[key], positions[key])));
const getWindowGraph = Object(reselect_lib["createSelector"])(getWindowsInfo, generateGraph);
const getSkinPlaylistStyle = state => {
  return state.display.skinPlaylistStyle || {
    normal: "#00FF00",
    current: "#FFFFFF",
    normalbg: "#000000",
    selectedbg: "#0000C6",
    font: "Arial"
  };
};
const getSkinGenExColors = state => {
  return state.display.skinGenExColors;
};
const selectors_getVisualizerStyle = state => {
  const milkdrop = state.windows.genWindows[WINDOWS.MILKDROP];

  if (milkdrop != null && milkdrop.open) {
    return VISUALIZERS.MILKDROP;
  }

  return getVisualizerStyle(state.display);
};
const getVolume = state => state.media.volume;
const getBalance = state => state.media.balance;
const getShuffle = state => state.media.shuffle;
const getRepeat = state => state.media.repeat;
const getChannels = Object(reselect_lib["createSelector"])(getCurrentTrack, track => {
  return track != null ? track.channels || null : null;
});
const getTimeElapsed = state => {
  return state.media.timeElapsed;
};
function getSerlializedState(state) {
  return {
    version: 1,
    media: media_getSerializedState(state.media),
    equalizer: equalizer_getSerializedState(state.equalizer),
    display: display_getSerializedState(state.display),
    windows: getSerializedState(state.windows)
  };
}
function getEqualizerEnabled(state) {
  return state.equalizer.on;
}
function getEqualizerAuto(state) {
  return state.equalizer.auto;
}
function getBrowserWindowSize(state) {
  return state.windows.browserWindowSize;
}
const getOpenWindows = Object(reselect_lib["createSelector"])(getGenWindows, genWindows => objectFilter(genWindows, w => w.open));
const getStackedLayoutPositions = Object(reselect_lib["createSelector"])(getOpenWindows, getDoubled, (openWindows, doubled) => {
  let offset = 0;
  return objectMap(openWindows, w => {
    const position = {
      x: 0,
      y: offset
    };
    offset += getWPixelSize(w, doubled).height;
    return position;
  });
});
const getUserInputFocus = state => {
  return state.userInput.focus;
};
const getUserInputScrubPosition = state => {
  return state.userInput.scrubPosition;
}; // TODO: Make this a reselect selector

const getMarqueeText = state => {
  const defaultText = "Winamp 2.91";

  if (state.userInput.userMessage != null) {
    return state.userInput.userMessage;
  }

  switch (getUserInputFocus(state)) {
    case "balance":
      return getBalanceText(state.media.balance);

    case "volume":
      return getVolumeText(state.media.volume);

    case "position":
      const duration = getDuration(state);

      if (duration == null) {
        // This probably can't ever happen.
        return defaultText;
      }

      return getPositionText(duration, getUserInputScrubPosition(state));

    case "double":
      return getDoubleSizeModeText(state.display.doubled);

    case "eq":
      const band = state.userInput.bandFocused;

      if (band == null) {
        // This probably can't ever happen.
        return defaultText;
      }

      return getEqText(band, state.equalizer.sliders[band]);

    default:
      break;
  }

  if (state.playlist.currentTrack != null) {
    const mediaText = getMediaText(state);

    if (mediaText == null) {
      // This probably can't ever happen.
      return defaultText;
    }

    return mediaText;
  }

  return defaultText;
};
const getKbps = Object(reselect_lib["createSelector"])(getCurrentTrack, track => {
  return track != null ? track.kbps || null : null;
});
const getKhz = Object(reselect_lib["createSelector"])(getCurrentTrack, track => {
  return track != null ? track.khz || null : null;
});
function getDebugData(state) {
  return objectSpread_default()({}, state, {
    display: objectSpread_default()({}, state.display, {
      skinGenLetterWidths: "[[REDACTED]]",
      skinImages: "[[REDACTED]]",
      skinCursors: "[[REDACTED]]",
      skinRegion: "[[REDACTED]]"
    })
  });
}
function getMilkdropDesktopEnabled(state) {
  return state.milkdrop.desktop;
}
// CONCATENATED MODULE: ./js/snapUtils.ts

const SNAP_DISTANCE = 15;
const snapUtils_top = box => box.y;
const snapUtils_bottom = box => box.y + box.height;
const snapUtils_left = box => box.x;
const snapUtils_right = box => box.x + box.width;
const near = (a, b) => Math.abs(a - b) < SNAP_DISTANCE; // http://stackoverflow.com/a/3269471/1263117

const overlapX = (a, b) => snapUtils_left(a) <= snapUtils_right(b) + SNAP_DISTANCE && snapUtils_left(b) <= snapUtils_right(a) + SNAP_DISTANCE;
const overlapY = (a, b) => snapUtils_top(a) <= snapUtils_bottom(b) + SNAP_DISTANCE && snapUtils_top(b) <= snapUtils_bottom(a) + SNAP_DISTANCE; // Give a new position for `boxA` that snaps it to `boxB` if neede.

const snap = (boxA, boxB) => {
  let x, y; // TODO: Refactor/simplify this code

  if (overlapY(boxA, boxB)) {
    if (near(snapUtils_left(boxA), snapUtils_right(boxB))) {
      x = snapUtils_right(boxB);
    } else if (near(snapUtils_right(boxA), snapUtils_left(boxB))) {
      x = snapUtils_left(boxB) - boxA.width;
    } else if (near(snapUtils_left(boxA), snapUtils_left(boxB))) {
      x = snapUtils_left(boxB);
    } else if (near(snapUtils_right(boxA), snapUtils_right(boxB))) {
      x = snapUtils_right(boxB) - boxA.width;
    }
  }

  if (overlapX(boxA, boxB)) {
    if (near(snapUtils_top(boxA), snapUtils_bottom(boxB))) {
      y = snapUtils_bottom(boxB);
    } else if (near(snapUtils_bottom(boxA), snapUtils_top(boxB))) {
      y = snapUtils_top(boxB) - boxA.height;
    } else if (near(snapUtils_top(boxA), snapUtils_top(boxB))) {
      y = snapUtils_top(boxB);
    } else if (near(snapUtils_bottom(boxA), snapUtils_bottom(boxB))) {
      y = snapUtils_bottom(boxB) - boxA.height;
    }
  }

  return {
    x,
    y
  };
};
const snapUtils_snapDiff = (a, b) => {
  const newPos = snap(a, b);
  return {
    x: newPos.x === undefined ? 0 : newPos.x - a.x,
    y: newPos.y === undefined ? 0 : newPos.y - a.y
  };
}; // TODO: Use the first x and y combo

const snapDiffManyToMany = (as, bs) => {
  let x = 0;
  let y = 0;

  for (const a of as) {
    for (const b of bs) {
      const diff = snapUtils_snapDiff(a, b);
      x = x || diff.x;
      y = y || diff.y;

      if (x !== undefined && x > 0 && y !== undefined && y > 0) {
        break;
      }
    }
  }

  return {
    x,
    y
  };
};
const snapToMany = (boxA, otherBoxes) => {
  let x;
  let y;
  otherBoxes.forEach(boxB => {
    const newPos = snap(boxA, boxB);
    x = newPos.x || x;
    y = newPos.y || y;
  });
  return {
    x,
    y
  };
};
const snapWithin = (boxA, boundingBox) => {
  let x, y;

  if (boxA.x - SNAP_DISTANCE < 0) {
    x = 0;
  } else if (boxA.x + boxA.width + SNAP_DISTANCE > boundingBox.width) {
    x = boundingBox.width - boxA.width;
  }

  if (boxA.y - SNAP_DISTANCE < 0) {
    y = 0;
  } else if (boxA.y + boxA.height + SNAP_DISTANCE > boundingBox.height) {
    y = boundingBox.height - boxA.height;
  }

  return {
    x,
    y
  };
};
const snapWithinDiff = (a, b) => {
  const newPos = snapWithin(a, b);
  return {
    x: newPos.x === undefined ? 0 : newPos.x - a.x,
    y: newPos.y === undefined ? 0 : newPos.y - a.y
  };
};
const snapUtils_applySnap = function applySnap(original) {
  for (var _len = arguments.length, snaps = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    snaps[_key - 1] = arguments[_key];
  }

  return snaps.reduce((previous, snapped) => objectSpread_default()({}, previous, {
    x: typeof snapped.x !== "undefined" ? snapped.x : previous.x,
    y: typeof snapped.y !== "undefined" ? snapped.y : previous.y
  }), original);
};
const boundingBox = nodes => {
  const boxes = nodes.slice();
  const firstNode = boxes.pop();

  if (firstNode == null) {
    throw new Error("boundingBox must be called with at least one node");
  }

  const bounding = {
    top: snapUtils_top(firstNode),
    right: snapUtils_right(firstNode),
    bottom: snapUtils_bottom(firstNode),
    left: snapUtils_left(firstNode)
  };
  boxes.forEach(node => {
    bounding.top = Math.min(bounding.top, snapUtils_top(node));
    bounding.right = Math.max(bounding.right, snapUtils_right(node));
    bounding.bottom = Math.max(bounding.bottom, snapUtils_bottom(node));
    bounding.left = Math.min(bounding.left, snapUtils_left(node));
  });
  return {
    x: bounding.left,
    y: bounding.top,
    width: bounding.right - bounding.left,
    height: bounding.bottom - bounding.top
  };
};
const traceConnection = areConnected => (candidates, node) => {
  const connected = new Set();

  const checkNode = n => {
    for (const candidate of candidates) {
      if (!connected.has(candidate) && areConnected(candidate, n)) {
        connected.add(candidate);
        checkNode(candidate);
      }
    }
  };

  checkNode(node);
  return connected;
};
const applyDiff = (a, b) => ({
  x: a.x + b.x,
  y: a.y + b.y
}); // TODO: This should not

const applyMultipleDiffs = function applyMultipleDiffs(initial) {
  for (var _len2 = arguments.length, diffs = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    diffs[_key2 - 1] = arguments[_key2];
  }

  const metaDiff = diffs.reduce((m, diff) => ({
    // Use the smallest non-zero diff for each axis.
    // TODO: Min should be the absolute value
    x: m.x === 0 || diff.x === 0 ? m.x + diff.x : Math.min(m.x, diff.x),
    y: m.y === 0 || diff.y === 0 ? m.y + diff.y : Math.min(m.y, diff.y)
  }));
  return applyDiff(initial, metaDiff);
};
// CONCATENATED MODULE: ./js/actionCreators/windows.ts







// Dispatch an action and, if needed rearrange the windows to preserve
// the existing edge relationship.
//
// Works by checking the edges before the action is dispatched. Then,
// after disatching, calculating what position change would be required
// to restore those relationships.
function withWindowGraphIntegrity(action) {
  return (dispatch, getState) => {
    const state = getState();
    const graph = getWindowGraph(state);
    const originalSizes = getWindowSizes(state);
    dispatch(action);
    const newSizes = getWindowSizes(getState());
    const sizeDiff = {};

    for (const window of Object.keys(newSizes)) {
      const original = originalSizes[window];
      const current = newSizes[window];
      sizeDiff[window] = {
        height: current.height - original.height,
        width: current.width - original.width
      };
    }

    const positionDiff = getPositionDiff(graph, sizeDiff);
    const windowPositions = getWindowPositions(state);
    const newPositions = objectMap(windowPositions, (position, key) => applyDiff(position, positionDiff[key]));
    dispatch(updateWindowPositions(newPositions));
  };
}

function toggleDoubleSizeMode() {
  return withWindowGraphIntegrity({
    type: TOGGLE_DOUBLESIZE_MODE
  });
}
function toggleLlamaMode() {
  return {
    type: TOGGLE_LLAMA_MODE
  };
}
function toggleEqualizerShadeMode() {
  return withWindowGraphIntegrity({
    type: TOGGLE_WINDOW_SHADE_MODE,
    windowId: "equalizer"
  });
}
function toggleMainWindowShadeMode() {
  return withWindowGraphIntegrity({
    type: TOGGLE_WINDOW_SHADE_MODE,
    windowId: "main"
  });
}
function togglePlaylistShadeMode() {
  return withWindowGraphIntegrity({
    type: TOGGLE_WINDOW_SHADE_MODE,
    windowId: "playlist"
  });
}
function closeWindow(windowId) {
  return {
    type: CLOSE_WINDOW,
    windowId
  };
}
function hideWindow(windowId) {
  return {
    type: SET_WINDOW_VISIBILITY,
    windowId,
    hidden: true
  };
}
function showWindow(windowId) {
  return {
    type: SET_WINDOW_VISIBILITY,
    windowId,
    hidden: false
  };
}
function setFocusedWindow(window) {
  return {
    type: SET_FOCUSED_WINDOW,
    window
  };
}
function windows_setWindowSize(windowId, size) {
  return {
    type: WINDOW_SIZE_CHANGED,
    windowId,
    size
  };
}
function toggleWindow(windowId) {
  return {
    type: TOGGLE_WINDOW,
    windowId
  };
}
function updateWindowPositions(positions, absolute) {
  return {
    type: UPDATE_WINDOW_POSITIONS,
    positions,
    absolute
  };
}
function centerWindowsInContainer(container) {
  return (dispatch, getState) => {
    if (!getPositionsAreRelative(getState())) {
      return;
    }

    const _container$getBoundin = container.getBoundingClientRect(),
          left = _container$getBoundin.left,
          top = _container$getBoundin.top;

    const width = container.scrollWidth,
          height = container.scrollHeight;
    dispatch(centerWindows({
      left,
      top,
      width,
      height
    }));
  };
}
function centerWindowsInView() {
  return centerWindows({
    left: window.scrollX,
    top: window.scrollY,
    width: window.innerWidth,
    height: window.innerHeight
  });
}
function centerWindows(box) {
  return (dispatch, getState) => {
    const state = getState();
    const windowsInfo = getWindowsInfo(state);
    const getOpen = getWindowOpen(state);
    const top = box.top,
          left = box.left,
          width = box.width,
          height = box.height;
    const offsetLeft = left + window.scrollX;
    const offsetTop = top + window.scrollY; // A layout has been suplied. We will compute the bounding box and
    // center the given layout.

    const bounding = calculateBoundingBox(windowsInfo.filter(w => getOpen(w.key)));
    const boxHeight = bounding.bottom - bounding.top;
    const boxWidth = bounding.right - bounding.left;
    const move = {
      x: Math.ceil(offsetLeft - bounding.left + (width - boxWidth) / 2),
      y: Math.ceil(offsetTop - bounding.top + (height - boxHeight) / 2)
    };
    const newPositions = windowsInfo.reduce((pos, w) => objectSpread_default()({}, pos, {
      [w.key]: {
        x: move.x + w.x,
        y: move.y + w.y
      }
    }), {});
    dispatch(updateWindowPositions(newPositions, true));
  };
}
function browserWindowSizeChanged(size) {
  return dispatch => {
    dispatch(objectSpread_default()({
      type: BROWSER_WINDOW_SIZE_CHANGED
    }, size));
    dispatch(ensureWindowsAreOnScreen());
  };
}
function resetWindowSizes() {
  return {
    type: RESET_WINDOW_SIZES
  };
}
function stackWindows() {
  return (dispatch, getState) => {
    dispatch(updateWindowPositions(getStackedLayoutPositions(getState())));
  };
}
function ensureWindowsAreOnScreen() {
  return (dispatch, getState) => {
    const state = getState();
    const windowsInfo = getWindowsInfo(state);
    const getOpen = getWindowOpen(state);

    const _Utils$getWindowSize = getWindowSize(),
          height = _Utils$getWindowSize.height,
          width = _Utils$getWindowSize.width;

    const bounding = calculateBoundingBox(windowsInfo.filter(w => getOpen(w.key)));
    const positions = getWindowPositions(state); // Are we good?

    if (bounding.left >= 0 && bounding.top >= 0 && bounding.right <= width && bounding.bottom <= height) {
      // My work here is done.
      return;
    }

    const boundingHeight = bounding.bottom - bounding.top;
    const boundingWidth = bounding.right - bounding.left; // Could we simply shift all the windows by a constant offset?

    if (boundingWidth <= width && boundingHeight <= height) {
      let moveY = 0;
      let moveX = 0;

      if (bounding.top <= 0) {
        moveY = bounding.top;
      } else if (bounding.bottom > height) {
        moveY = bounding.bottom - height;
      }

      if (bounding.left <= 0) {
        moveX = bounding.left;
      } else if (bounding.right > width) {
        moveX = bounding.right - width;
      }

      const newPositions = objectMap(positions, position => ({
        x: position.x - moveX,
        y: position.y - moveY
      }));
      dispatch(updateWindowPositions(newPositions));
      return;
    } // TODO: Try moving the individual groups to try to fit them in
    // I give up. Just reset everything.


    dispatch(resetWindowSizes());
    dispatch(stackWindows());
    dispatch(centerWindowsInView());
  };
}
// CONCATENATED MODULE: ./js/actionCreators/media.ts







function playRandomTrack() {
  return (dispatch, getState) => {
    const _getState = getState(),
          _getState$playlist = _getState.playlist,
          trackOrder = _getState$playlist.trackOrder,
          currentTrack = _getState$playlist.currentTrack;

    if (trackOrder.length === 0) {
      return;
    }

    let nextId;

    do {
      nextId = trackOrder[Math.floor(trackOrder.length * Math.random())];
    } while (nextId === currentTrack && trackOrder.length > 1); // TODO: Sigh... Technically, we should detect if we are looping only repeat if we are.
    // I think this would require pre-computing the "random" order of a playlist.


    dispatch({
      type: PLAY_TRACK,
      id: nextId
    });
  };
}

function play() {
  return (dispatch, getState) => {
    const state = getState();

    if (state.media.status === MEDIA_STATUS.STOPPED && state.playlist.currentTrack == null && state.playlist.trackOrder.length === 0) {
      dispatch(openMediaFileDialog());
    } else {
      dispatch({
        type: PLAY
      });
    }
  };
}
function pause() {
  return (dispatch, getState) => {
    const status = getState().media.status;

    if (status === MEDIA_STATUS.PLAYING) {
      dispatch({
        type: PAUSE
      });
    } else {
      dispatch({
        type: PLAY
      });
    }
  };
}
function stop() {
  return {
    type: STOP
  };
}
function nextN(n) {
  return (dispatch, getState) => {
    const state = getState();

    if (state.media.shuffle) {
      dispatch(playRandomTrack());
      return;
    }

    const nextTrackId = selectors_nextTrack(state, n);

    if (nextTrackId == null) {
      return;
    }

    dispatch({
      type: PLAY_TRACK,
      id: nextTrackId
    });
  };
}
function media_next() {
  return nextN(1);
}
function media_previous() {
  return nextN(-1);
}
function seekForward(seconds) {
  return function (dispatch, getState) {
    const state = getState();
    const timeElapsed = getTimeElapsed(state);
    const duration = getDuration(state);

    if (duration == null) {
      return;
    }

    const newTimeElapsed = timeElapsed + seconds;
    dispatch({
      type: SEEK_TO_PERCENT_COMPLETE,
      percent: newTimeElapsed / duration * 100
    });
  };
}
function seekBackward(seconds) {
  return seekForward(-seconds);
}
function setVolume(volume) {
  return {
    type: SET_VOLUME,
    volume: clamp(volume, 0, 100)
  };
}
function adjustVolume(volumeDiff) {
  return (dispatch, getState) => {
    const currentVolume = getState().media.volume;
    return dispatch(setVolume(currentVolume + volumeDiff));
  };
}
function scrollVolume(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const currentVolume = getState().media.volume; // Using pixels as percentage difference here is a bit arbirary, but... oh well.

    return dispatch(setVolume(currentVolume + e.deltaY));
  };
}
function setBalance(balance) {
  balance = clamp(balance, -100, 100); // The balance clips to the center

  if (Math.abs(balance) < 25) {
    balance = 0;
  }

  return {
    type: SET_BALANCE,
    balance
  };
}
function toggleRepeat() {
  return {
    type: TOGGLE_REPEAT
  };
}
function toggleShuffle() {
  return {
    type: TOGGLE_SHUFFLE
  };
}
function media_toggleTimeMode() {
  return {
    type: TOGGLE_TIME_MODE
  };
}
// CONCATENATED MODULE: ./js/actionCreators/equalizer.ts


const BAND_SNAP_DISTANCE = 5;
const BAND_MID_POINT_VALUE = 50;

function _snapBandValue(value) {
  if (value < BAND_MID_POINT_VALUE + BAND_SNAP_DISTANCE && value > BAND_MID_POINT_VALUE - BAND_SNAP_DISTANCE) {
    return BAND_MID_POINT_VALUE;
  }

  return value;
}

function setEqBand(band, value) {
  return {
    type: SET_BAND_VALUE,
    band,
    value: _snapBandValue(value)
  };
}

function _setEqTo(value) {
  return dispatch => {
    Object.values(BANDS).forEach(band => {
      dispatch({
        type: SET_BAND_VALUE,
        value,
        band: band
      });
    });
  };
}

function setEqToMax() {
  return _setEqTo(100);
}
function setEqToMid() {
  return _setEqTo(50);
}
function setEqToMin() {
  return _setEqTo(0);
}
function setPreamp(value) {
  return {
    type: SET_BAND_VALUE,
    band: "preamp",
    value: _snapBandValue(value)
  };
}
function toggleEq() {
  return (dispatch, getState) => {
    if (getState().equalizer.on) {
      dispatch({
        type: SET_EQ_OFF
      });
    } else {
      dispatch({
        type: SET_EQ_ON
      });
    }
  };
}
function toggleEqAuto() {
  return (dispatch, getState) => {
    dispatch({
      type: SET_EQ_AUTO,
      value: !getState().equalizer.auto
    });
  };
}
// EXTERNAL MODULE: ./node_modules/winamp-eqf/index.js
var winamp_eqf = __webpack_require__(68);

// CONCATENATED MODULE: ./js/skinSprites.ts

/* TODO: There are too many " " and "_" characters */

const FONT_LOOKUP = {
  a: [0, 0],
  b: [0, 1],
  c: [0, 2],
  d: [0, 3],
  e: [0, 4],
  f: [0, 5],
  g: [0, 6],
  h: [0, 7],
  i: [0, 8],
  j: [0, 9],
  k: [0, 10],
  l: [0, 11],
  m: [0, 12],
  n: [0, 13],
  o: [0, 14],
  p: [0, 15],
  q: [0, 16],
  r: [0, 17],
  s: [0, 18],
  t: [0, 19],
  u: [0, 20],
  v: [0, 21],
  w: [0, 22],
  x: [0, 23],
  y: [0, 24],
  z: [0, 25],
  '"': [0, 26],
  "@": [0, 27],
  " ": [0, 30],
  "0": [1, 0],
  "1": [1, 1],
  "2": [1, 2],
  "3": [1, 3],
  "4": [1, 4],
  "5": [1, 5],
  "6": [1, 6],
  "7": [1, 7],
  "8": [1, 8],
  "9": [1, 9],
  [UTF8_ELLIPSIS]: [1, 10],
  _: [1, 11],
  ":": [1, 12],
  "(": [1, 13],
  ")": [1, 14],
  "-": [1, 15],
  "'": [1, 16],
  "!": [1, 17],
  "+": [1, 19],
  "\\": [1, 20],
  "/": [1, 21],
  "[": [1, 22],
  "]": [1, 23],
  "^": [1, 24],
  "&": [1, 25],
  "%": [1, 26],
  ".": [1, 27],
  "=": [1, 28],
  $: [1, 29],
  "#": [1, 30],
  Å: [2, 0],
  Ö: [2, 1],
  Ä: [2, 2],
  "?": [2, 3],
  "*": [2, 4],
  "<": [1, 22],
  ">": [1, 23],
  "{": [1, 22],
  "}": [1, 23]
};
const imageConstFromChar = char => `CHARACTER_${char.charCodeAt(0)}`;
const CHAR_X = 5;
const CHAR_Y = 6;
const characterSprites = [];

for (const key in FONT_LOOKUP) {
  if (FONT_LOOKUP.hasOwnProperty(key)) {
    const position = FONT_LOOKUP[key];
    characterSprites.push({
      name: imageConstFromChar(key),
      y: position[0] * CHAR_Y,
      x: position[1] * CHAR_X,
      width: CHAR_X,
      height: CHAR_Y
    });
  }
}

/* harmony default export */ var skinSprites = ({
  BALANCE: [{
    name: "MAIN_BALANCE_BACKGROUND",
    x: 9,
    y: 0,
    width: 38,
    height: 420
  }, {
    name: "MAIN_BALANCE_THUMB",
    x: 15,
    y: 422,
    width: 14,
    height: 11
  }, {
    name: "MAIN_BALANCE_THUMB_ACTIVE",
    x: 0,
    y: 422,
    width: 14,
    height: 11
  }],
  CBUTTONS: [{
    name: "MAIN_PREVIOUS_BUTTON",
    x: 0,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PREVIOUS_BUTTON_ACTIVE",
    x: 0,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PLAY_BUTTON",
    x: 23,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PLAY_BUTTON_ACTIVE",
    x: 23,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PAUSE_BUTTON",
    x: 46,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_PAUSE_BUTTON_ACTIVE",
    x: 46,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_STOP_BUTTON",
    x: 69,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_STOP_BUTTON_ACTIVE",
    x: 69,
    y: 18,
    width: 23,
    height: 18
  }, {
    name: "MAIN_NEXT_BUTTON",
    x: 92,
    y: 0,
    width: 23,
    height: 18
  }, {
    name: "MAIN_NEXT_BUTTON_ACTIVE",
    x: 92,
    y: 18,
    width: 22,
    height: 18
  }, {
    name: "MAIN_EJECT_BUTTON",
    x: 114,
    y: 0,
    width: 22,
    height: 16
  }, {
    name: "MAIN_EJECT_BUTTON_ACTIVE",
    x: 114,
    y: 16,
    width: 22,
    height: 16
  }],
  MAIN: [{
    name: "MAIN_WINDOW_BACKGROUND",
    x: 0,
    y: 0,
    width: 275,
    height: 116
  }],
  MONOSTER: [{
    name: "MAIN_STEREO",
    x: 0,
    y: 12,
    width: 29,
    height: 12
  }, {
    name: "MAIN_STEREO_SELECTED",
    x: 0,
    y: 0,
    width: 29,
    height: 12
  }, {
    name: "MAIN_MONO",
    x: 29,
    y: 12,
    width: 27,
    height: 12
  }, {
    name: "MAIN_MONO_SELECTED",
    x: 29,
    y: 0,
    width: 27,
    height: 12
  }],
  NUMBERS: [{
    name: "NO_MINUS_SIGN",
    x: 9,
    y: 6,
    width: 5,
    height: 1
  }, {
    name: "MINUS_SIGN",
    x: 20,
    y: 6,
    width: 5,
    height: 1
  }, {
    name: "DIGIT_0",
    x: 0,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_1",
    x: 9,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_2",
    x: 18,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_3",
    x: 27,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_4",
    x: 36,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_5",
    x: 45,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_6",
    x: 54,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_7",
    x: 63,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_8",
    x: 72,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_9",
    x: 81,
    y: 0,
    width: 9,
    height: 13
  }],
  NUMS_EX: [{
    name: "NO_MINUS_SIGN_EX",
    x: 90,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "MINUS_SIGN_EX",
    x: 99,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_0_EX",
    x: 0,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_1_EX",
    x: 9,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_2_EX",
    x: 18,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_3_EX",
    x: 27,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_4_EX",
    x: 36,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_5_EX",
    x: 45,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_6_EX",
    x: 54,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_7_EX",
    x: 63,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_8_EX",
    x: 72,
    y: 0,
    width: 9,
    height: 13
  }, {
    name: "DIGIT_9_EX",
    x: 81,
    y: 0,
    width: 9,
    height: 13
  }],
  PLAYPAUS: [{
    name: "MAIN_PLAYING_INDICATOR",
    x: 0,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_PAUSED_INDICATOR",
    x: 9,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_STOPPED_INDICATOR",
    x: 18,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_NOT_WORKING_INDICATOR",
    x: 36,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_WORKING_INDICATOR",
    x: 39,
    y: 0,
    width: 9,
    height: 9
  }],
  PLEDIT: [{
    name: "PLAYLIST_TOP_TILE",
    x: 127,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_LEFT_CORNER",
    x: 0,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TITLE_BAR",
    x: 26,
    y: 21,
    width: 100,
    height: 20
  }, {
    name: "PLAYLIST_TOP_RIGHT_CORNER",
    x: 153,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_TILE_SELECTED",
    x: 127,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TOP_LEFT_SELECTED",
    x: 0,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_TITLE_BAR_SELECTED",
    x: 26,
    y: 0,
    width: 100,
    height: 20
  }, {
    name: "PLAYLIST_TOP_RIGHT_CORNER_SELECTED",
    x: 153,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "PLAYLIST_LEFT_TILE",
    x: 0,
    y: 42,
    width: 12,
    height: 29
  }, {
    name: "PLAYLIST_RIGHT_TILE",
    x: 31,
    y: 42,
    width: 20,
    height: 29
  }, {
    name: "PLAYLIST_BOTTOM_TILE",
    x: 179,
    y: 0,
    width: 25,
    height: 38
  }, {
    name: "PLAYLIST_BOTTOM_LEFT_CORNER",
    x: 0,
    y: 72,
    width: 125,
    height: 38
  }, {
    name: "PLAYLIST_BOTTOM_RIGHT_CORNER",
    x: 126,
    y: 72,
    width: 150,
    height: 38
  }, {
    name: "PLAYLIST_VISUALIZER_BACKGROUND",
    x: 205,
    y: 0,
    width: 75,
    height: 38
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND",
    x: 72,
    y: 57,
    width: 25,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_LEFT",
    x: 72,
    y: 42,
    width: 25,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_RIGHT",
    x: 99,
    y: 57,
    width: 50,
    height: 14
  }, {
    name: "PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED",
    x: 99,
    y: 42,
    width: 50,
    height: 14
  }, {
    name: "PLAYLIST_SCROLL_HANDLE_SELECTED",
    x: 61,
    y: 53,
    width: 8,
    height: 18
  }, {
    name: "PLAYLIST_SCROLL_HANDLE",
    x: 52,
    y: 53,
    width: 8,
    height: 18
  }, {
    name: "PLAYLIST_ADD_URL",
    x: 0,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_URL_SELECTED",
    x: 23,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_DIR",
    x: 0,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_DIR_SELECTED",
    x: 23,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_FILE",
    x: 0,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_FILE_SELECTED",
    x: 23,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_ALL",
    x: 54,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_ALL_SELECTED",
    x: 77,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_CROP",
    x: 54,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_CROP_SELECTED",
    x: 77,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_SELECTED",
    x: 54,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_SELECTED_SELECTED",
    x: 77,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_MISC",
    x: 54,
    y: 168,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_REMOVE_MISC_SELECTED",
    x: 77,
    y: 168,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_INVERT_SELECTION",
    x: 104,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_INVERT_SELECTION_SELECTED",
    x: 127,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ZERO",
    x: 104,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ZERO_SELECTED",
    x: 127,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ALL",
    x: 104,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SELECT_ALL_SELECTED",
    x: 127,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SORT_LIST",
    x: 154,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SORT_LIST_SELECTED",
    x: 177,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_FILE_INFO",
    x: 154,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_FILE_INFO_SELECTED",
    x: 177,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_MISC_OPTIONS",
    x: 154,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_MISC_OPTIONS_SELECTED",
    x: 177,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_NEW_LIST",
    x: 204,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_NEW_LIST_SELECTED",
    x: 227,
    y: 111,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SAVE_LIST",
    x: 204,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_SAVE_LIST_SELECTED",
    x: 227,
    y: 130,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_LOAD_LIST",
    x: 204,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_LOAD_LIST_SELECTED",
    x: 227,
    y: 149,
    width: 22,
    height: 18
  }, {
    name: "PLAYLIST_ADD_MENU_BAR",
    x: 48,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_REMOVE_MENU_BAR",
    x: 100,
    y: 111,
    width: 3,
    height: 72
  }, {
    name: "PLAYLIST_SELECT_MENU_BAR",
    x: 150,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_MISC_MENU_BAR",
    x: 200,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_LIST_BAR",
    x: 250,
    y: 111,
    width: 3,
    height: 54
  }, {
    name: "PLAYLIST_CLOSE_SELECTED",
    x: 52,
    y: 42,
    width: 9,
    height: 9
  }, {
    name: "PLAYLIST_COLLAPSE_SELECTED",
    x: 62,
    y: 42,
    width: 9,
    height: 9
  }, {
    name: "PLAYLIST_EXPAND_SELECTED",
    x: 150,
    y: 42,
    width: 9,
    height: 9
  }],
  EQ_EX: [{
    name: "EQ_SHADE_BACKGROUND_SELECTED",
    x: 0,
    y: 0,
    width: 275,
    height: 14
  }, {
    name: "EQ_SHADE_BACKGROUND",
    x: 0,
    y: 15,
    width: 275,
    height: 14
  }, {
    name: "EQ_SHADE_VOLUME_SLIDER_LEFT",
    x: 1,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_VOLUME_SLIDER_CENTER",
    x: 4,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_VOLUME_SLIDER_RIGHT",
    x: 7,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_LEFT",
    x: 11,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_CENTER",
    x: 14,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_SHADE_BALANCE_SLIDER_RIGHT",
    x: 17,
    y: 30,
    width: 3,
    height: 7
  }, {
    name: "EQ_MAXIMIZE_BUTTON_ACTIVE",
    x: 1,
    y: 38,
    width: 9,
    height: 9
  }, {
    name: "EQ_MINIMIZE_BUTTON_ACTIVE",
    x: 1,
    y: 47,
    width: 9,
    height: 9
  }, {
    name: "EQ_CLOSE_BUTTON",
    x: 11,
    y: 38,
    width: 9,
    height: 9
  }, {
    name: "EQ_CLOSE_BUTTON_ACTIVE",
    x: 11,
    y: 47,
    width: 9,
    height: 9
  }],
  EQMAIN: [{
    name: "EQ_WINDOW_BACKGROUND",
    x: 0,
    y: 0,
    width: 275,
    height: 116
  }, {
    name: "EQ_TITLE_BAR",
    x: 0,
    y: 149,
    width: 275,
    height: 14
  }, {
    name: "EQ_TITLE_BAR_SELECTED",
    x: 0,
    y: 134,
    width: 275,
    height: 14
  }, {
    name: "EQ_SLIDER_BACKGROUND",
    x: 13,
    y: 164,
    width: 209,
    height: 129
  }, {
    name: "EQ_SLIDER_THUMB",
    x: 0,
    y: 164,
    width: 11,
    height: 11
  }, {
    name: "EQ_SLIDER_THUMB_SELECTED",
    x: 0,
    y: 176,
    width: 11,
    height: 11
  }, {
    name: "EQ_ON_BUTTON",
    x: 10,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_ON_BUTTON_DEPRESSED",
    x: 128,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_ON_BUTTON_SELECTED",
    x: 69,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_ON_BUTTON_SELECTED_DEPRESSED",
    x: 187,
    y: 119,
    width: 26,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON",
    x: 36,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON_DEPRESSED",
    x: 154,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON_SELECTED",
    x: 95,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_AUTO_BUTTON_SELECTED_DEPRESSED",
    x: 213,
    y: 119,
    width: 32,
    height: 12
  }, {
    name: "EQ_GRAPH_BACKGROUND",
    x: 0,
    y: 294,
    width: 113,
    height: 19
  }, {
    name: "EQ_GRAPH_LINE_COLORS",
    x: 115,
    y: 294,
    width: 1,
    height: 19
  }, {
    name: "EQ_PRESETS_BUTTON",
    x: 224,
    y: 164,
    width: 44,
    height: 12
  }, {
    name: "EQ_PRESETS_BUTTON_SELECTED",
    x: 224,
    y: 176,
    width: 44,
    height: 12
  }, {
    name: "EQ_PREAMP_LINE",
    x: 0,
    y: 314,
    width: 113,
    height: 1
  }],
  POSBAR: [{
    name: "MAIN_POSITION_SLIDER_BACKGROUND",
    x: 0,
    y: 0,
    width: 248,
    height: 10
  }, {
    name: "MAIN_POSITION_SLIDER_THUMB",
    x: 248,
    y: 0,
    width: 29,
    height: 10
  }, {
    name: "MAIN_POSITION_SLIDER_THUMB_SELECTED",
    x: 278,
    y: 0,
    width: 29,
    height: 10
  }],
  SHUFREP: [{
    name: "MAIN_SHUFFLE_BUTTON",
    x: 28,
    y: 0,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_DEPRESSED",
    x: 28,
    y: 15,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_SELECTED",
    x: 28,
    y: 30,
    width: 47,
    height: 15
  }, {
    name: "MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED",
    x: 28,
    y: 45,
    width: 47,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON",
    x: 0,
    y: 0,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_DEPRESSED",
    x: 0,
    y: 15,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_SELECTED",
    x: 0,
    y: 30,
    width: 28,
    height: 15
  }, {
    name: "MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED",
    x: 0,
    y: 45,
    width: 28,
    height: 15
  }, {
    name: "MAIN_EQ_BUTTON",
    x: 0,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_EQ_BUTTON_SELECTED",
    x: 0,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_EQ_BUTTON_DEPRESSED",
    x: 46,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_EQ_BUTTON_DEPRESSED_SELECTED",
    x: 46,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON",
    x: 23,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_SELECTED",
    x: 23,
    y: 73,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_DEPRESSED",
    x: 69,
    y: 61,
    width: 23,
    height: 12
  }, {
    name: "MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED",
    x: 69,
    y: 73,
    width: 23,
    height: 12
  }],
  TEXT: characterSprites,
  TITLEBAR: [{
    name: "MAIN_TITLE_BAR",
    x: 27,
    y: 15,
    width: 275,
    height: 14
  }, {
    name: "MAIN_TITLE_BAR_SELECTED",
    x: 27,
    y: 0,
    width: 275,
    height: 14
  }, {
    name: "MAIN_EASTER_EGG_TITLE_BAR",
    x: 27,
    y: 72,
    width: 275,
    height: 14
  }, {
    name: "MAIN_EASTER_EGG_TITLE_BAR_SELECTED",
    x: 27,
    y: 57,
    width: 275,
    height: 14
  }, {
    name: "MAIN_OPTIONS_BUTTON",
    x: 0,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_OPTIONS_BUTTON_DEPRESSED",
    x: 0,
    y: 9,
    width: 9,
    height: 9
  }, {
    name: "MAIN_MINIMIZE_BUTTON",
    x: 9,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_MINIMIZE_BUTTON_DEPRESSED",
    x: 9,
    y: 9,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_BUTTON",
    x: 0,
    y: 18,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_BUTTON_DEPRESSED",
    x: 9,
    y: 18,
    width: 9,
    height: 9
  }, {
    name: "MAIN_CLOSE_BUTTON",
    x: 18,
    y: 0,
    width: 9,
    height: 9
  }, {
    name: "MAIN_CLOSE_BUTTON_DEPRESSED",
    x: 18,
    y: 9,
    width: 9,
    height: 9
  }, {
    name: "MAIN_CLUTTER_BAR_BACKGROUND",
    x: 304,
    y: 0,
    width: 8,
    height: 43
  }, {
    name: "MAIN_CLUTTER_BAR_BACKGROUND_DISABLED",
    x: 312,
    y: 0,
    width: 8,
    height: 43
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_O_SELECTED",
    x: 304,
    y: 47,
    width: 8,
    height: 8
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_A_SELECTED",
    x: 312,
    y: 55,
    width: 8,
    height: 7
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_I_SELECTED",
    x: 320,
    y: 62,
    width: 8,
    height: 7
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_D_SELECTED",
    x: 328,
    y: 69,
    width: 8,
    height: 8
  }, {
    name: "MAIN_CLUTTER_BAR_BUTTON_V_SELECTED",
    x: 336,
    y: 77,
    width: 8,
    height: 7
  }, {
    name: "MAIN_SHADE_BACKGROUND",
    x: 27,
    y: 42,
    width: 275,
    height: 14
  }, {
    name: "MAIN_SHADE_BACKGROUND_SELECTED",
    x: 27,
    y: 29,
    width: 275,
    height: 14
  }, {
    name: "MAIN_SHADE_BUTTON_SELECTED",
    x: 0,
    y: 27,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_BUTTON_SELECTED_DEPRESSED",
    x: 9,
    y: 27,
    width: 9,
    height: 9
  }, {
    name: "MAIN_SHADE_POSITION_BACKGROUND",
    x: 0,
    y: 36,
    width: 17,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB",
    x: 20,
    y: 36,
    width: 3,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB_LEFT",
    x: 17,
    y: 36,
    width: 3,
    height: 7
  }, {
    name: "MAIN_SHADE_POSITION_THUMB_RIGHT",
    x: 23,
    y: 36,
    width: 3,
    height: 7
  }],
  VOLUME: [{
    name: "MAIN_VOLUME_BACKGROUND",
    x: 0,
    y: 0,
    width: 68,
    height: 420
  }, {
    name: "MAIN_VOLUME_THUMB",
    x: 15,
    y: 422,
    width: 14,
    height: 11
  }, {
    name: "MAIN_VOLUME_THUMB_SELECTED",
    x: 0,
    y: 422,
    width: 14,
    height: 11
  }],
  GEN: [{
    name: "GEN_TOP_LEFT_SELECTED",
    x: 0,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_END_SELECTED",
    x: 26,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_CENTER_FILL_SELECTED",
    x: 52,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT_END_SELECTED",
    x: 78,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_RIGHT_FILL_SELECTED",
    x: 104,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT_SELECTED",
    x: 130,
    y: 0,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT",
    x: 0,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_END",
    x: 26,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_CENTER_FILL",
    x: 52,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT_END",
    x: 78,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_LEFT_RIGHT_FILL",
    x: 104,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_TOP_RIGHT",
    x: 130,
    y: 21,
    width: 25,
    height: 20
  }, {
    name: "GEN_BOTTOM_LEFT",
    x: 0,
    y: 42,
    width: 125,
    height: 14
  }, {
    name: "GEN_BOTTOM_RIGHT",
    x: 0,
    y: 57,
    width: 125,
    height: 14
  }, {
    name: "GEN_BOTTOM_FILL",
    x: 127,
    y: 72,
    width: 25,
    height: 14
  }, {
    name: "GEN_MIDDLE_LEFT",
    x: 127,
    y: 42,
    width: 11,
    height: 29
  }, {
    name: "GEN_MIDDLE_LEFT_BOTTOM",
    x: 158,
    y: 42,
    width: 11,
    height: 24
  }, {
    name: "GEN_MIDDLE_RIGHT",
    x: 139,
    y: 42,
    width: 8,
    height: 29
  }, {
    name: "GEN_MIDDLE_RIGHT_BOTTOM",
    x: 170,
    y: 42,
    width: 8,
    height: 24
  }, {
    name: "GEN_CLOSE_SELECTED",
    x: 148,
    y: 42,
    width: 9,
    height: 9
  }],
  GENEX: [{
    name: "GENEX_BUTTON_BACKGROUND_UNPRESSED",
    x: 0,
    y: 0,
    height: 15,
    width: 47
  }, {
    name: "GENEX_BUTTON_BACKGROUND_PRESSED",
    x: 0,
    y: 1,
    height: 15,
    width: 47
  }, {
    name: "GENEX_SCROLL_UP_UNPRESSED",
    x: 0,
    y: 31,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_DOWN_UNPRESSED",
    x: 14,
    y: 31,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_UP_PRESSED",
    x: 28,
    y: 31,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_DOWN_PRESSED",
    x: 42,
    y: 31,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_LEFT_UNPRESSED",
    x: 0,
    y: 45,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_RIGHT_UNPRESSED",
    x: 14,
    y: 45,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_LEFT_PRESSED",
    x: 28,
    y: 45,
    height: 14,
    width: 14
  }, {
    name: "GENEX_SCROLL_RIGHT_PRESSED",
    x: 42,
    y: 45,
    height: 14,
    width: 14
  }, {
    name: "GENEX_VERTICAL_SCROLL_HANDLE_UNPRESSED",
    x: 56,
    y: 31,
    height: 28,
    width: 14
  }, {
    name: "GENEX_VERTICAL_SCROLL_HANDLE_PRESSED",
    x: 70,
    y: 31,
    height: 28,
    width: 14
  }, {
    name: "GENEX_HORIZONTAL_SCROLL_HANDLE_UNPRESSED",
    x: 84,
    y: 31,
    height: 14,
    width: 28
  }, {
    name: "GENEX_HORIZONTAL_SCROLL_HANDLE_PRESSED",
    x: 84,
    y: 45,
    height: 14,
    width: 28
  }]
});
// CONCATENATED MODULE: ./js/regionParser.ts

function pointPairs(arr) {
  const pairedValues = [];

  for (let i = 0; i < arr.length; i += 2) {
    pairedValues.push(`${arr[i]},${arr[i + 1]}`);
  }

  return pairedValues;
}
function regionParser(regionStr) {
  const iniData = parseIni(regionStr);
  const data = {};
  Object.keys(iniData).forEach(section => {
    const _iniData$section = iniData[section],
          numpoints = _iniData$section.numpoints,
          pointlist = _iniData$section.pointlist;

    if (!numpoints || !pointlist) {
      return;
    }

    const pointCounts = numpoints.split(/\s*,\s*/).filter(val => val !== "");
    const points = pointPairs( // points can be separated by spaces, or by commas
    pointlist.split(/\s*[, ]\s*/).filter(val => val !== ""));
    let pointIndex = 0;
    const polygons = pointCounts.map(numStr => {
      const num = Number(numStr);
      const polygon = points.slice(pointIndex, pointIndex + num).join(" ");

      if (!polygon.length) {
        // It's possible that the skin author specified more polygons than provided points.
        return null;
      }

      pointIndex += num;
      return polygon;
    });
    const validPolygons = polygons.filter(polygon => polygon != null);

    if (validPolygons.length) {
      data[section] = validPolygons;
    }
  });
  return data;
}
// CONCATENATED MODULE: ./js/skinParser.js







const shallowMerge = objs => objs.reduce((prev, img) => Object.assign(prev, img), {});

const CURSORS = ["CLOSE", "EQCLOSE", "EQNORMAL", "EQSLID", "EQTITLE", "MAINMENU", "MMENU", "MIN", "NORMAL", "PCLOSE", "PNORMAL", "POSBAR", "PSIZE", "PTBAR", "PVSCROLL", "PWINBUT", "PWSNORM", "PWSSIZE", "SONGNAME", "TITLEBAR", "VOLBAL", "WINBUT", "WSNORMAL", "WSPOSBAR"
/*
 * > There are usually 4 more cursors in the skins: volbar.cur, wsclose.cur,
 * > wswinbut.cur, wsmin.cur, but they are never used, at least in the last
 * > versions of winamp, so there's no need of including them. The cursors
 * > shown when the mouse is over the app-buttons are the same in normal and
 * > winshade mode, except for the main menu button. You can make animated
 * > cursors, but you have to name them with the extension .cur (animated
 * > cursors are usually .ani files).
 *
 * -- Skinners Atlas
 *
 * "VOLBAR",
 * "WSCLOSE",
 * "WSWINBUT",
 * "WSMIN",
 *
 */
];

const _genImgFromBlob = async blob => new Promise((resolve, reject) => {
  const img = new Image();

  img.onload = () => {
    // Schedule cleanup of object url?
    // Maybe on next tick, or with requestidlecallback
    resolve(img);
  };

  img.onerror = () => reject("Failed to decode image");

  img.src = URL.createObjectURL(blob);
});

const genImgFromBlob = async blob => {
  if (window.createImageBitmap) {
    try {
      // Use this faster native browser API if available.
      return await window.createImageBitmap(blob);
    } catch (e) {
      console.warn("Encountered an error with createImageBitmap. Falling back to Image approach."); // There are some bugs in the new API. In case something goes wrong, we call fall back.

      return _genImgFromBlob(blob);
    }
  }

  return _genImgFromBlob(blob);
};

async function genFileFromZip(zip, fileName, ext, mode) {
  const regex = new RegExp(`^(.*/)?${fileName}(\.${ext})?$`, "i");
  const files = zip.file(regex);

  if (!files.length) {
    return null;
  } // Return a promise (awaitable).


  return {
    contents: await files[0].async(mode),
    name: files[0].name
  };
}

function getSpriteUrisFromImg(img, sprites) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  return sprites.reduce((images, sprite) => {
    canvas.height = sprite.height;
    canvas.width = sprite.width;
    context.drawImage(img, -sprite.x, -sprite.y);
    const image = canvas.toDataURL();
    images[sprite.name] = image;
    return images;
  }, {});
}

async function genImgFromFilename(zip, fileName) {
  // Winamp only supports .bmp images, but WACUP set a precidence of supporting
  // .png as well to reduce size. Since we care about size as well, we follow
  // suit. Our default skin uses .png to save 14kb.
  const file = await genFileFromZip(zip, fileName, "(png|bmp)", "blob");

  if (!file) {
    return null;
  }

  const mimeType = `image/${getFileExtension(file.name) || "*"}`; // The spec for createImageBitmap() says the browser should try to sniff the
  // mime type, but it looks like Firefox does not. So we specify it here
  // explicitly.

  const typedBlob = new Blob([file.contents], {
    type: mimeType
  });
  return genImgFromBlob(typedBlob);
}

async function genSpriteUrisFromFilename(zip, fileName) {
  const img = await genImgFromFilename(zip, fileName);

  if (img == null) {
    return {};
  }

  return getSpriteUrisFromImg(img, skinSprites[fileName]);
}

async function getCursorFromFilename(zip, fileName) {
  const file = await genFileFromZip(zip, fileName, "CUR", "base64");
  return file && `data:image/x-win-bitmap;base64,${file.contents}`;
}

async function genPlaylistStyle(zip) {
  const pledit = await genFileFromZip(zip, "PLEDIT", "txt", "text");
  const data = pledit && parseIni(pledit.contents).text;

  if (!data) {
    // Corrupt or missing PLEDIT.txt file.
    return DEFAULT_SKIN.playlistStyle;
  } // Winamp seems to permit colors that contain too many characters.
  // For compatibility with existing skins, we normalize them here.


  ["normal", "current", "normalbg", "selectedbg", "mbFG", "mbBG"].forEach(colorKey => {
    let color = data[colorKey];

    if (!color) {
      return;
    }

    if (color[0] !== "#") {
      color = `#${color}`;
    }

    data[colorKey] = color.slice(0, 7);
  });
  return objectSpread_default()({}, DEFAULT_SKIN.playlistStyle, data);
}

async function genVizColors(zip) {
  const viscolor = await genFileFromZip(zip, "VISCOLOR", "txt", "text");
  return viscolor ? parseViscolors(viscolor.contents) : DEFAULT_SKIN.colors;
}

async function genImages(zip) {
  const imageObjs = await Promise.all(Object.keys(skinSprites).map(async fileName => genSpriteUrisFromFilename(zip, fileName))); // Merge all the objects into a single object. Tests assert that sprite keys are unique.

  return shallowMerge(imageObjs);
}

async function genCursors(zip) {
  const cursorObjs = await Promise.all(CURSORS.map(async cursorName => ({
    [cursorName]: await getCursorFromFilename(zip, cursorName)
  })));
  return shallowMerge(cursorObjs);
}

async function genRegion(zip) {
  const region = await genFileFromZip(zip, "REGION", "txt", "text");
  return region ? regionParser(region.contents) : {};
}

async function genGenTextSprites(zip) {
  const img = await genImgFromFilename(zip, "GEN");

  if (img == null) {
    return null;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);

  const getLetters = (y, prefix) => {
    const getColorAt = x => context.getImageData(x, y, 1, 1).data.join(",");

    let x = 1;
    const backgroundColor = getColorAt(0);
    const height = 7;
    return LETTERS.map(letter => {
      let nextBackground = x;

      while (getColorAt(nextBackground) !== backgroundColor && nextBackground < canvas.width) {
        nextBackground++;
      }

      const width = nextBackground - x;
      const name = `${prefix}_${letter}`;
      const sprite = {
        x,
        y,
        height,
        width,
        name
      };
      x = nextBackground + 1;
      return sprite;
    });
  };

  const letterWidths = {};
  const sprites = [...getLetters(88, "GEN_TEXT_SELECTED"), ...getLetters(96, "GEN_TEXT")];
  sprites.forEach(sprite => {
    letterWidths[sprite.name] = sprite.width;
  });
  return [letterWidths, getSpriteUrisFromImg(img, sprites)];
}

async function genGenExColors(zip) {
  const img = await genImgFromFilename(zip, "GENEX");

  if (img == null) {
    return null;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = img.width;
  canvas.height = img.height;
  context.drawImage(img, 0, 0);

  const getColorAt = x => `rgb(${context.getImageData(x, 0, 1, 1) // Discard the alpha channel
  .data.slice(0, 3).join(",")})`;

  const colors = {
    // (1) x=48: item background (background to edits, listviews, etc.)
    itemBackground: 48,
    // (2) x=50: item foreground (text colour of edits, listviews, etc.)
    itemForeground: 50,
    // (3) x=52: window background (used to set the bg color for the dialog)
    windowBackground: 52,
    // (4) x=54: button text colour
    buttonText: 54,
    // (5) x=56: window text colour
    windowText: 56,
    // (6) x=58: colour of dividers and sunken borders
    divider: 58,
    // (7) x=60: selection colour for entries inside playlists (nothing else yet)
    playlistSelection: 60,
    // (8) x=62: listview header background colour
    listHeaderBackground: 62,
    // (9) x=64: listview header text colour
    listHeaderText: 64,
    // (10) x=66: listview header frame top and left colour
    listHeaderFrameTopAndLeft: 66,
    // (11) x=68: listview header frame bottom and right colour
    listHeaderFrameBottomAndRight: 68,
    // (12) x=70: listview header frame colour, when pressed
    listHeaderFramePressed: 70,
    // (13) x=72: listview header dead area colour
    listHeaderDeadArea: 72,
    // (14) x=74: scrollbar colour #1
    scrollbarOne: 74,
    // (15) x=76: scrollbar colour #2
    scrollbarTwo: 76,
    // (16) x=78: pressed scrollbar colour #1
    pressedScrollbarOne: 78,
    // (17) x=80: pressed scrollbar colour #2
    pressedScrollbarTwo: 80,
    // (18) x=82: scrollbar dead area colour
    scrollbarDeadArea: 82,
    // (19) x=84 List view text colour highlighted
    listTextHighlighted: 84,
    // (20) x=86 List view background colour highlighted
    listTextHighlightedBackground: 86,
    // (21) x=88 List view text colour selected
    listTextSelected: 88,
    // (22) x=90 List view background colour selected
    listTextSelectedBackground: 90
  };
  return objectMap(colors, getColorAt);
} // A promise that, given an array buffer  returns a skin style object


async function skinParser(zipFileBuffer, JSZip) {
  const zip = await JSZip.loadAsync(zipFileBuffer);

  const _ref = await Promise.all([genVizColors(zip), genPlaylistStyle(zip), genImages(zip), genCursors(zip), genRegion(zip), genGenTextSprites(zip), genGenExColors(zip)]),
        _ref2 = slicedToArray_default()(_ref, 7),
        colors = _ref2[0],
        playlistStyle = _ref2[1],
        images = _ref2[2],
        cursors = _ref2[3],
        region = _ref2[4],
        genTextSprites = _ref2[5],
        genExColors = _ref2[6];

  const _ref3 = genTextSprites || [null, {}],
        _ref4 = slicedToArray_default()(_ref3, 2),
        genLetterWidths = _ref4[0],
        genTextImages = _ref4[1];

  return {
    colors,
    playlistStyle,
    images: objectSpread_default()({}, images, genTextImages),
    genLetterWidths,
    cursors,
    region,
    genExColors
  };
}

/* harmony default export */ var js_skinParser = (skinParser);
// EXTERNAL MODULE: ./node_modules/tinyqueue/index.js
var tinyqueue = __webpack_require__(96);
var tinyqueue_default = /*#__PURE__*/__webpack_require__.n(tinyqueue);

// CONCATENATED MODULE: ./js/loadQueue.js

 // Push promises onto a queue with a priority.
// Run a given number of jobs in parallel
// Useful for prioritizing network requests

class loadQueue_LoadQueue {
  constructor(_ref) {
    let threads = _ref.threads;
    // TODO: Consider not running items with zero priority
    // Priority is a function so that items can change their priority between
    // when their priority is evaluated.
    // For example, we might add a track to the playlist and then scroll to/away
    // from it before it gets processed.
    this._queue = new tinyqueue_default.a([], (a, b) => a.priority() - b.priority());
    this._availableThreads = threads;
  }

  push(task, priority) {
    const t = {
      task,
      priority
    };

    this._queue.push(t); // Wait until the next event loop to pick a task to run. This way, we can
    // enqueue multiple items in an event loop, and be sure they will be run in
    // priority order.


    setTimeout(() => {
      this._run();
    }, 0);
    return () => {
      // TODO: Could return a boolean representing if the task has already been
      // kicked off.
      this._queue = this._queue.filter(t1 => t1 !== t);
    };
  }

  _run() {
    while (this._availableThreads > 0) {
      if (this._queue.length === 0) {
        return;
      }

      this._availableThreads--;

      const t = this._queue.pop();

      const promise = t.task();
      invariant_browser_default()(typeof promise.then === "function", `LoadQueue only supports loading Promises. Got ${promise}`);
      promise.then(() => {
        this._availableThreads++;

        this._run();
      });
    }
  }

}
// CONCATENATED MODULE: ./js/actionCreators/playlist.ts




function cropPlaylist() {
  return (dispatch, getState) => {
    const state = getState();

    if (getSelectedTrackObjects(state).length === 0) {
      return;
    }

    const selectedTrackIds = getSelectedTrackIds(state);
    const trackOrder = state.playlist.trackOrder;
    dispatch({
      type: REMOVE_TRACKS,
      // @ts-ignore The keys are numbers, but TypeScript does not trust us.
      // https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
      ids: trackOrder.filter(id => !selectedTrackIds.has(id))
    });
  };
}
function removeSelectedTracks() {
  return (dispatch, getState) => {
    dispatch({
      type: REMOVE_TRACKS,
      // @ts-ignore The keys are numbers, but TypeScript does not trust us.
      // https://github.com/Microsoft/TypeScript/pull/12253#issuecomment-263132208
      ids: Array.from(getSelectedTrackIds(getState()))
    });
  };
}
function removeAllTracks() {
  return dispatch => {
    // It's a bit funky that we need to do both of these.
    dispatch({
      type: STOP
    });
    dispatch({
      type: REMOVE_ALL_TRACKS
    });
  };
}
function reverseList() {
  return {
    type: REVERSE_LIST
  };
}
function randomizeList() {
  return {
    type: RANDOMIZE_LIST
  };
}
function sortListByTitle() {
  return (dispatch, getState) => {
    const state = getState();
    const tracks = getTracks(state);
    const trackOrder = sort(getTrackOrder(state), i => `${tracks[i].title}`.toLowerCase());
    return dispatch({
      type: SET_TRACK_ORDER,
      trackOrder
    });
  };
}
function setPlaylistScrollPosition(position) {
  return {
    type: SET_PLAYLIST_SCROLL_POSITION,
    position
  };
}
function scrollNTracks(n) {
  return (dispatch, getState) => {
    const state = getState();
    const overflow = getOverflowTrackCount(state);
    const currentOffset = getScrollOffset(state);
    const position = overflow ? clamp((currentOffset + n) / overflow, 0, 1) : 0;
    return dispatch({
      type: SET_PLAYLIST_SCROLL_POSITION,
      position: position * 100
    });
  };
}
function scrollPlaylistByDelta(e) {
  e.preventDefault();
  return (dispatch, getState) => {
    const state = getState();

    if (getOverflowTrackCount(state)) {
      e.stopPropagation();
    }

    const totalPixelHeight = state.playlist.trackOrder.length * TRACK_HEIGHT;
    const percentDelta = e.deltaY / totalPixelHeight * 100;
    dispatch({
      type: SET_PLAYLIST_SCROLL_POSITION,
      position: clamp(state.display.playlistScrollPosition + percentDelta, 0, 100)
    });
  };
}
function scrollUpFourTracks() {
  return scrollNTracks(-4);
}
function scrollDownFourTracks() {
  return scrollNTracks(4);
}
function dragSelected(offset) {
  return (dispatch, getState) => {
    const state = getState();
    const tracks = getTracks(state);
    const trackOrder = getTrackOrder(state);
    const selectedIds = getSelectedTrackIds(state);
    const firstSelected = trackOrder.findIndex(trackId => tracks[trackId] && selectedIds.has(trackId));

    if (firstSelected === -1) {
      return;
    }

    const lastSelected = findLastIndex(trackOrder, trackId => tracks[trackId] && selectedIds.has(trackId));

    if (lastSelected === -1) {
      throw new Error("We found a first selected, but not a last selected.");
    } // Ensure we don't try to drag off either end.


    const min = -firstSelected;
    const max = trackOrder.length - 1 - lastSelected;
    const normalizedOffset = clamp(offset, min, max);

    if (normalizedOffset !== 0) {
      dispatch({
        type: DRAG_SELECTED,
        offset: normalizedOffset
      });
    }
  };
}
// CONCATENATED MODULE: ./js/actionCreators/files.ts










// Lower is better
const DURATION_VISIBLE_PRIORITY = 5;
const META_DATA_VISIBLE_PRIORITY = 10;
const DURATION_PRIORITY = 15;
const META_DATA_PRIORITY = 20;
const loadQueue = new loadQueue_LoadQueue({
  threads: 4
});
function addTracksFromReferences(fileReferences, loadStyle, atIndex) {
  const tracks = Array.from(fileReferences).map(file => ({
    blob: file,
    defaultName: file.name
  }));
  return loadMediaFiles(tracks, loadStyle, atIndex);
}
const SKIN_FILENAME_MATCHER = new RegExp("(wsz|zip)$", "i");
const EQF_FILENAME_MATCHER = new RegExp("eqf$", "i");
function loadFilesFromReferences(fileReferences) {
  let loadStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LOAD_STYLE.PLAY;
  let atIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return dispatch => {
    if (fileReferences.length < 1) {
      return;
    } else if (fileReferences.length === 1) {
      const fileReference = fileReferences[0];

      if (SKIN_FILENAME_MATCHER.test(fileReference.name)) {
        dispatch(setSkinFromFileReference(fileReference));
        return;
      } else if (EQF_FILENAME_MATCHER.test(fileReference.name)) {
        dispatch(setEqFromFileReference(fileReference));
        return;
      }
    }

    dispatch(addTracksFromReferences(fileReferences, loadStyle, atIndex));
  };
}
function setSkinFromArrayBuffer(arrayBuffer) {
  return async (dispatch, getState, _ref) => {
    let requireJSZip = _ref.requireJSZip;

    if (!requireJSZip) {
      alert("Webamp has not been configured to support custom skins.");
      return;
    }

    dispatch({
      type: LOADING
    });
    let JSZip;

    try {
      JSZip = await requireJSZip();
    } catch (e) {
      console.error(e);
      dispatch({
        type: LOADED
      });
      alert("Failed to load the skin parser.");
      return;
    }

    try {
      const skinData = await js_skinParser(arrayBuffer, JSZip); // @ts-ignore TODO: We still need to type skinParser.

      dispatch({
        type: SET_SKIN_DATA,
        data: {
          skinImages: skinData.images,
          skinColors: skinData.colors,
          skinPlaylistStyle: skinData.playlistStyle,
          skinCursors: skinData.cursors,
          skinRegion: skinData.region,
          skinGenLetterWidths: skinData.genLetterWidths,
          skinGenExColors: skinData.genExColors
        }
      });
    } catch (e) {
      console.error(e);
      dispatch({
        type: LOADED
      });
      alert(`Failed to parse skin`);
    }
  };
}
function setSkinFromFileReference(skinFileReference) {
  return async dispatch => {
    dispatch({
      type: LOADING
    });
    const arrayBuffer = await genArrayBufferFromFileReference(skinFileReference);
    dispatch(setSkinFromArrayBuffer(arrayBuffer));
  };
}
function setSkinFromUrl(url) {
  return async dispatch => {
    dispatch({
      type: LOADING
    });

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      dispatch(setSkinFromArrayBuffer(response.arrayBuffer()));
    } catch (e) {
      console.error(e);
      dispatch({
        type: LOADED
      });
      alert(`Failed to download skin from ${url}`);
    }
  };
} // This function is private, since Winamp consumers can provide means for
// opening files via other methods. Only use the file type specific
// versions below, since they can defer to the user-defined behavior.

function _openFileDialog(accept) {
  return async dispatch => {
    const fileReferences = await promptForFileReferences({
      accept
    });
    dispatch(loadFilesFromReferences(fileReferences));
  };
}

function openEqfFileDialog() {
  return _openFileDialog(".eqf");
}
function openMediaFileDialog() {
  return _openFileDialog(null);
}
function openSkinFileDialog() {
  return _openFileDialog(".zip, .wsz");
}
function fetchMediaDuration(url, id) {
  return (dispatch, getState) => {
    loadQueue.push(async () => {
      try {
        const duration = await genMediaDuration(url);
        dispatch({
          type: SET_MEDIA_DURATION,
          duration,
          id
        });
      } catch (e) {// TODO: Should we update the state to indicate that we don't know the length?
      }
    }, () => {
      const trackIsVisible = getTrackIsVisibleFunction(getState());
      return trackIsVisible(id) ? DURATION_VISIBLE_PRIORITY : DURATION_PRIORITY;
    });
  };
}
function loadMediaFiles(tracks) {
  let loadStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LOAD_STYLE.NONE;
  let atIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return dispatch => {
    if (loadStyle === LOAD_STYLE.PLAY) {
      // I'm the worst. It just so happens that in every case that we autoPlay,
      // we should also clear all tracks.
      dispatch(removeAllTracks());
    }

    tracks.forEach((track, i) => {
      const priority = i === 0 ? loadStyle : LOAD_STYLE.NONE;
      dispatch(loadMediaFile(track, priority, atIndex + i));
    });
  };
}
function loadMediaFile(track) {
  let priority = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : LOAD_STYLE.NONE;
  let atIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return dispatch => {
    const id = uniqueId();
    const defaultName = track.defaultName,
          metaData = track.metaData,
          duration = track.duration;
    let canonicalUrl;

    if ("url" in track) {
      canonicalUrl = track.url.toString();
    } else if ("blob" in track) {
      canonicalUrl = URL.createObjectURL(track.blob);
    } else {
      throw new Error("Expected track to have either a blob or a url");
    }

    dispatch({
      type: ADD_TRACK_FROM_URL,
      url: canonicalUrl,
      duration: track.duration,
      defaultName,
      id,
      atIndex
    });

    switch (priority) {
      case LOAD_STYLE.BUFFER:
        dispatch({
          type: BUFFER_TRACK,
          id
        });
        break;

      case LOAD_STYLE.PLAY:
        dispatch({
          type: PLAY_TRACK,
          id
        });
        break;

      case LOAD_STYLE.NONE:
      default:
        // If we're not going to load this right away,
        // we should set duration on our own
        if (duration != null) {
          dispatch({
            type: SET_MEDIA_DURATION,
            duration,
            id
          });
        } else {
          dispatch(fetchMediaDuration(canonicalUrl, id));
        }

    }

    if (metaData != null) {
      const artist = metaData.artist,
            title = metaData.title,
            album = metaData.album;
      dispatch({
        type: SET_MEDIA_TAGS,
        artist,
        title,
        album,
        // For now, we lie about these next three things.
        // TODO: Ideally we would leave these as null and force a media data
        // fetch when the user starts playing.
        sampleRate: 44000,
        bitrate: 192000,
        numberOfChannels: 2,
        id
      });
    } else if ("blob" in track) {
      // Blobs can be loaded quickly
      dispatch(fetchMediaTags(track.blob, id));
    } else {
      dispatch(queueFetchingMediaTags(id));
    }
  };
}

function queueFetchingMediaTags(id) {
  return (dispatch, getState) => {
    const track = getTracks(getState())[id];
    loadQueue.push(() => dispatch(fetchMediaTags(track.url, id)), () => {
      const trackIsVisible = getTrackIsVisibleFunction(getState());
      return trackIsVisible(id) ? META_DATA_VISIBLE_PRIORITY : META_DATA_PRIORITY;
    });
  };
}

function fetchMediaTags(file, id) {
  return async (dispatch, getState, _ref2) => {
    let requireMusicMetadata = _ref2.requireMusicMetadata;
    dispatch({
      type: MEDIA_TAG_REQUEST_INITIALIZED,
      id
    });

    try {
      const metadata = await genMediaTags(file, (await requireMusicMetadata())); // There's more data here, but we don't have a use for it yet:

      const _metadata$common = metadata.common,
            artist = _metadata$common.artist,
            title = _metadata$common.title,
            album = _metadata$common.album,
            picture = _metadata$common.picture;
      const _metadata$format = metadata.format,
            numberOfChannels = _metadata$format.numberOfChannels,
            bitrate = _metadata$format.bitrate,
            sampleRate = _metadata$format.sampleRate;
      let albumArtUrl = null;

      if (picture && picture.length >= 1) {
        const byteArray = new Uint8Array(picture[0].data);
        const blob = new Blob([byteArray], {
          type: picture[0].format
        });
        albumArtUrl = URL.createObjectURL(blob);
      }

      dispatch({
        type: SET_MEDIA_TAGS,
        artist: artist ? artist : "",
        title: title ? title : "",
        album,
        albumArtUrl,
        numberOfChannels,
        bitrate,
        sampleRate,
        id
      });
    } catch (e) {
      dispatch({
        type: MEDIA_TAG_REQUEST_FAILED,
        id
      });
    }
  };
}
function setEqFromFileReference(fileReference) {
  return async dispatch => {
    const arrayBuffer = await genArrayBufferFromFileReference(fileReference);
    const eqf = Object(winamp_eqf["parser"])(arrayBuffer);
    const preset = eqf.presets[0];
    dispatch(setEqFromObject(preset));
  };
}
function setEqFromObject(preset) {
  return dispatch => {
    dispatch(setPreamp(normalize(preset.preamp)));
    BANDS.forEach(band => {
      // @ts-ignore band and EqfPreset align
      dispatch(setEqBand(band, normalize(preset[`hz${band}`])));
    });
  };
}
function downloadPreset() {
  return (dispatch, getState) => {
    const state = getState();
    const data = getEqfData(state);
    const arrayBuffer = Object(winamp_eqf["creator"])(data);
    const base64 = base64FromArrayBuffer(arrayBuffer);
    const dataURI = `data:application/zip;base64,${base64}`;
    downloadURI(dataURI, "entry.eqf");
  };
}
function downloadHtmlPlaylist() {
  return (dispatch, getState) => {
    const uri = getPlaylistURL(getState());
    downloadURI(uri, "Winamp Playlist.html");
  };
}
// CONCATENATED MODULE: ./js/actionCreators/index.ts









function actionCreators_close() {
  return dispatch => {
    // TODO: This could probably be improved by adding a "PREVENT_CLOSE" action
    // or something, but this works okay for now.
    let defaultPrevented = false;

    const cancel = () => {
      defaultPrevented = true;
    };

    dispatch({
      type: CLOSE_REQUESTED,
      cancel
    });

    if (!defaultPrevented) {
      dispatch({
        type: STOP
      });
      dispatch({
        type: CLOSE_WINAMP
      });
    }
  };
}
function actionCreators_open() {
  return {
    type: OPEN_WINAMP
  };
}
function toggleVisualizerStyle() {
  return {
    type: TOGGLE_VISUALIZER_STYLE
  };
}
function actionCreators_minimize() {
  return {
    type: MINIMIZE_WINAMP
  };
}
function actionCreators_setFocus(input) {
  return {
    type: SET_FOCUS,
    input
  };
}
function unsetFocus() {
  return {
    type: UNSET_FOCUS
  };
}
function loadSerializedState( // In the future this type should be the union of all versioned types.
serializedState) {
  return dispatch => {
    dispatch({
      type: LOAD_SERIALIZED_STATE,
      serializedState
    });
    dispatch(ensureWindowsAreOnScreen());
  };
}
function loadDefaultSkin() {
  return {
    type: LOAD_DEFAULT_SKIN
  };
}
function toggleMilkdropDesktop() {
  return (dispatch, getState) => {
    if (getMilkdropDesktopEnabled(getState())) {
      dispatch(showWindow(WINDOWS.MILKDROP));
      dispatch({
        type: SET_MILKDROP_DESKTOP,
        enabled: false
      });
    } else {
      dispatch(hideWindow(WINDOWS.MILKDROP));
      dispatch({
        type: SET_MILKDROP_DESKTOP,
        enabled: true
      });
    }
  };
}
// CONCATENATED MODULE: ./js/mediaMiddleware.ts




/* harmony default export */ var mediaMiddleware = (media => store => {
  const _store$getState = store.getState(),
        _store$getState$media = _store$getState.media,
        volume = _store$getState$media.volume,
        balance = _store$getState$media.balance; // Ensure the default state is the canonical value.


  media.setVolume(volume);
  media.setBalance(balance); // TODO: Ensure other values like bands and preamp are in sync

  media.on("timeupdate", () => {
    store.dispatch({
      type: UPDATE_TIME_ELAPSED,
      elapsed: media.timeElapsed()
    });
  });
  media.on("ended", () => {
    store.dispatch({
      type: IS_STOPPED
    });
    store.dispatch(media_next());
  });
  media.on("playing", () => {
    store.dispatch({
      type: IS_PLAYING
    });
  });
  media.on("waiting", () => {
    store.dispatch({
      type: START_WORKING
    });
  });
  media.on("stopWaiting", () => {
    store.dispatch({
      type: STOP_WORKING
    });
  });
  media.on("fileLoaded", () => {
    const id = getCurrentTrackId(store.getState());

    if (id == null) {
      // Attempted to set the metadata for a track that was already removed.
      // Really, the media should have been stopped when the track was removed.
      return;
    }

    store.dispatch({
      id,
      type: SET_MEDIA,
      kbps: "128",
      khz: "44",
      channels: 2,
      length: media.duration()
    });
  });
  return next => action => {
    const returnValue = next(action);
    const state = store.getState();

    switch (action.type) {
      case PLAY:
        media.play();
        break;

      case PAUSE:
        media.pause();
        break;

      case STOP:
        media.stop();
        break;

      case SET_VOLUME:
        media.setVolume(getVolume(state));
        break;

      case SET_BALANCE:
        media.setBalance(getBalance(state));
        break;

      case SEEK_TO_PERCENT_COMPLETE:
        media.seekToPercentComplete(action.percent);
        break;

      case PLAY_TRACK:
        {
          const url = getTrackUrl(store.getState())(action.id);

          if (url != null) {
            media.loadFromUrl(url, true);
          }

          break;
        }

      case BUFFER_TRACK:
        {
          const url = getTrackUrl(store.getState())(action.id);

          if (url != null) {
            media.loadFromUrl(url, false);
          }

          break;
        }

      case SET_BAND_VALUE:
        if (action.band === "preamp") {
          media.setPreamp(action.value);
        } else {
          media.setEqBand(action.band, action.value);
        }

        break;

      case SET_EQ_OFF:
        media.disableEq();
        break;

      case SET_EQ_ON:
        media.enableEq();
        break;

      case LOAD_SERIALIZED_STATE:
        {
          // Set ALL THE THINGS!
          if (getEqualizerEnabled(state)) {
            media.enableEq();
          } else {
            media.disableEq();
          }

          media.setVolume(getVolume(state));
          media.setBalance(getBalance(state));
          objectForEach(state.equalizer.sliders, (value, slider) => {
            if (slider === "preamp") {
              media.setPreamp(value);
            } else {
              // @ts-ignore I don't know how to teach TypeScript about objects
              // that use Slider as keys
              media.setEqBand(slider, value);
            }
          });
          break;
        }
    }

    return returnValue;
  };
});
// CONCATENATED MODULE: ./js/store.ts







const compose = Object(redux_devtools_extension["composeWithDevTools"])({
  actionsBlacklist: [UPDATE_TIME_ELAPSED, STEP_MARQUEE]
});
/* harmony default export */ var js_store = (function (media, actionEmitter) {
  let customMiddlewares = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  let stateOverrides = arguments.length > 3 ? arguments[3] : undefined;
  let extras = arguments.length > 4 ? arguments[4] : undefined;
  let initialState;

  if (stateOverrides) {
    initialState = merge(reducers(undefined, {
      type: "@@init"
    }), stateOverrides);
  } // eslint-disable-next-line no-unused-vars


  const emitterMiddleware = store => next => action => {
    actionEmitter.trigger(action.type, action);
    return next(action);
  };

  const enhancer = compose(Object(redux["applyMiddleware"])(...[lib_default.a.withExtraArgument(extras), mediaMiddleware(media), emitterMiddleware, ...customMiddlewares].filter(Boolean))); // The Redux types are a bit confused, and don't realize that passing an
  // undefined initialState is allowed.

  const store = initialState ? Object(redux["createStore"])(reducers, initialState, enhancer) : Object(redux["createStore"])(reducers, enhancer);
  return store;
});
// CONCATENATED MODULE: ./js/emitter.ts

class emitter_Emitter {
  constructor() {
    defineProperty_default()(this, "_listeners", void 0);

    this._listeners = {};
  }

  on(event, callback) {
    const eventListeners = this._listeners[event] || [];
    eventListeners.push(callback);
    this._listeners[event] = eventListeners;

    const unsubscribe = () => {
      this._listeners[event] = eventListeners.filter(cb => cb !== callback);
    };

    return unsubscribe;
  }

  trigger(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    const callbacks = this._listeners[event];

    if (callbacks) {
      callbacks.forEach(cb => cb(...args));
    }
  }

  dispose() {
    this._listeners = {};
  }

}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(8);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/screenfull/dist/screenfull.js
var screenfull = __webpack_require__(18);
var screenfull_default = /*#__PURE__*/__webpack_require__.n(screenfull);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(9);
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(3);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./css/context-menu.css
var context_menu = __webpack_require__(132);

// CONCATENATED MODULE: ./js/components/ContextMenu.tsx


// @ts-ignore #hook-types






const Portal = props => {
  const node = Object(react["useMemo"])(() => {
    const node = document.createElement("div");
    node.id = "webamp-context-menu";
    node.style.position = "absolute";
    node.style.top = "0";
    node.style.left = "0";
    node.style.zIndex = String(props.zIndex + 1);
    return node;
  }, [props.zIndex]);
  Object(react["useEffect"])(() => {
    document.body.appendChild(node);
    return () => document.body.removeChild(node);
  }, [node]);
  const style = {
    top: props.top,
    left: props.left,
    position: "absolute"
  };
  return Object(react_dom["createPortal"])(react_default.a.createElement("div", {
    style: style
  }, props.children), node);
};

const ContextMenu_Hr = () => react_default.a.createElement("li", {
  className: "hr"
}, react_default.a.createElement("hr", null));
const Parent = (_ref) => {
  let children = _ref.children,
      label = _ref.label;
  return react_default.a.createElement("li", {
    className: "parent"
  }, react_default.a.createElement("ul", null, children), label);
};
const LinkNode = props => react_default.a.createElement("li", null, react_default.a.createElement("a", props, props.label));
const Node = props => {
  const label = props.label,
        checked = props.checked,
        _props$className = props.className,
        className = _props$className === void 0 ? "" : _props$className,
        passThroughProps = objectWithoutProperties_default()(props, ["label", "checked", "className"]);

  return react_default.a.createElement("li", extends_default()({
    className: classnames_default()(className, {
      checked
    })
  }, passThroughProps), label);
};

class ContextMenu_ContextMenu extends react_default.a.Component {
  render() {
    const _this$props = this.props,
          children = _this$props.children,
          offsetTop = _this$props.offsetTop,
          offsetLeft = _this$props.offsetLeft,
          top = _this$props.top,
          bottom = _this$props.bottom,
          selected = _this$props.selected,
          zIndex = _this$props.zIndex;
    return selected && react_default.a.createElement(Portal, {
      top: offsetTop,
      left: offsetLeft,
      zIndex: zIndex
    }, react_default.a.createElement("ul", {
      className: classnames_default()("context-menu", {
        top,
        bottom
      })
    }, children));
  }

}

const ContextMenu_mapStateToProps = state => ({
  zIndex: state.display.zIndex
});

/* harmony default export */ var components_ContextMenu = (connect_connect(ContextMenu_mapStateToProps)(ContextMenu_ContextMenu));
// CONCATENATED MODULE: ./js/components/ContextMenuWrapper.js






class ContextMenuWrapper_ContextMenuWraper extends react_default.a.Component {
  constructor(props) {
    super(props);

    defineProperty_default()(this, "_handleGlobalRightClick", () => {
      this._closeMenu();
    });

    defineProperty_default()(this, "_handleGlobalClick", e => {
      if (e.button === 2) {
        return;
      }

      this._closeMenu();
    });

    defineProperty_default()(this, "_handleRightClick", e => {
      const pageX = e.pageX,
            pageY = e.pageY;
      this.setState({
        selected: true,
        // TODO: We could do an initial render to see if the menu fits here
        // and do a second render if it does not.
        offsetTop: pageY,
        offsetLeft: pageX
      }); // Even if you right click multiple times before closeing,
      // we should only end up with one global listener.

      document.addEventListener("click", this._handleGlobalClick);
      document.body.addEventListener("contextmenu", this._handleGlobalRightClick);
      e.preventDefault();
      e.stopPropagation();
    });

    this.state = {
      selected: false,
      offsetTop: null,
      offsetLeft: null
    };
  }

  componentWillUnmount() {
    this._closeMenu();
  }

  _closeMenu() {
    this.setState({
      selected: false,
      offsetTop: null,
      offsetLeft: null
    });
    document.removeEventListener("click", this._handleGlobalClick);
    document.body.removeEventListener("contextmenu", this._handleGlobalRightClick);
  }

  render() {
    const _this$props = this.props,
          children = _this$props.children,
          renderContents = _this$props.renderContents,
          passThroughProps = objectWithoutProperties_default()(_this$props, ["children", "renderContents"]);

    return react_default.a.createElement("div", extends_default()({
      onContextMenu: this._handleRightClick,
      style: {
        width: "100%",
        height: "100%"
      }
    }, passThroughProps), react_default.a.createElement(components_ContextMenu, {
      selected: this.state.selected,
      offsetTop: this.state.offsetTop,
      offsetLeft: this.state.offsetLeft
    }, renderContents()), children);
  }

}
ContextMenuWrapper_ContextMenuWraper.propTypes = {
  children: prop_types_default.a.any.isRequired,
  renderContents: prop_types_default.a.func.isRequired
};
// EXTERNAL MODULE: ./css/gen-window.css
var gen_window = __webpack_require__(135);

// CONCATENATED MODULE: ./js/components/ResizeTarget.tsx






class ResizeTarget_ResizeTarget extends react_default.a.Component {
  constructor() {
    super(...arguments);

    defineProperty_default()(this, "handleMouseDown", e => {
      // Prevent dragging from highlighting text.
      e.preventDefault();

      const _this$props$currentSi = slicedToArray_default()(this.props.currentSize, 2),
            width = _this$props$currentSi[0],
            height = _this$props$currentSi[1];

      const mouseStart = {
        x: e.clientX,
        y: e.clientY
      };

      const handleMove = ee => {
        const x = ee.clientX - mouseStart.x;
        const y = ee.clientY - mouseStart.y;
        const newWidth = Math.max(0, width + Math.round(x / WINDOW_RESIZE_SEGMENT_WIDTH));
        const newHeight = this.props.widthOnly ? width : Math.max(0, height + Math.round(y / WINDOW_RESIZE_SEGMENT_HEIGHT));
        const newSize = [newWidth, newHeight];
        this.props.setWindowSize(newSize);
      };

      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleMove);
      });
    });
  }

  render() {
    const _this$props = this.props,
          currentSize = _this$props.currentSize,
          setWindowSize = _this$props.setWindowSize,
          widthOnly = _this$props.widthOnly,
          passThroughProps = objectWithoutProperties_default()(_this$props, ["currentSize", "setWindowSize", "widthOnly"]);

    return react_default.a.createElement("div", extends_default()({
      onMouseDown: this.handleMouseDown
    }, passThroughProps));
  }

}
// CONCATENATED MODULE: ./js/components/GenWindow/index.tsx









const Text = (_ref) => {
  let children = _ref.children;
  const letters = children.split("");
  return react_default.a.createElement(react_default.a.Fragment, null, letters.map((letter, i) => react_default.a.createElement("div", {
    key: i,
    className: `draggable gen-text-letter gen-text-${letter === " " ? "space" : letter.toLowerCase()}`
  })));
};

const CHROME_WIDTH = 19;
const CHROME_HEIGHT = 34;
// Named export for testing
const GenWindow = (_ref2) => {
  let selected = _ref2.selected,
      children = _ref2.children,
      close = _ref2.close,
      title = _ref2.title,
      setFocus = _ref2.setFocus,
      windowId = _ref2.windowId,
      windowSize = _ref2.windowSize,
      setGenWindowSize = _ref2.setGenWindowSize,
      width = _ref2.width,
      height = _ref2.height;
  return react_default.a.createElement("div", {
    className: classnames_default()("gen-window", "window", {
      selected
    }),
    onMouseDown: () => setFocus(windowId),
    style: {
      width,
      height
    }
  }, react_default.a.createElement("div", {
    className: "gen-top draggable"
  }, react_default.a.createElement("div", {
    className: "gen-top-left draggable"
  }), react_default.a.createElement("div", {
    className: "gen-top-left-fill draggable"
  }), react_default.a.createElement("div", {
    className: "gen-top-left-end draggable"
  }), react_default.a.createElement("div", {
    className: "gen-top-title draggable"
  }, react_default.a.createElement(Text, null, title)), react_default.a.createElement("div", {
    className: "gen-top-right-end draggable"
  }), react_default.a.createElement("div", {
    className: "gen-top-right-fill draggable"
  }), react_default.a.createElement("div", {
    className: "gen-top-right draggable"
  }, react_default.a.createElement("div", {
    className: "gen-close selected",
    onClick: () => close(windowId)
  }))), react_default.a.createElement("div", {
    className: "gen-middle"
  }, react_default.a.createElement("div", {
    className: "gen-middle-left draggable"
  }, react_default.a.createElement("div", {
    className: "gen-middle-left-bottom draggable"
  })), react_default.a.createElement("div", {
    className: "gen-middle-center"
  }, children({
    width: width - CHROME_WIDTH,
    height: height - CHROME_HEIGHT
  })), react_default.a.createElement("div", {
    className: "gen-middle-right draggable"
  }, react_default.a.createElement("div", {
    className: "gen-middle-right-bottom draggable"
  }))), react_default.a.createElement("div", {
    className: "gen-bottom draggable"
  }, react_default.a.createElement("div", {
    className: "gen-bottom-left draggable"
  }), react_default.a.createElement("div", {
    className: "gen-bottom-right draggable"
  }, react_default.a.createElement(ResizeTarget_ResizeTarget, {
    currentSize: windowSize,
    setWindowSize: size => setGenWindowSize(windowId, size),
    id: "gen-resize-target"
  }))));
};

const GenWindow_mapStateToProps = (state, ownProps) => {
  const _getWindowPixelSize = getWindowPixelSize(state)(ownProps.windowId),
        width = _getWindowPixelSize.width,
        height = _getWindowPixelSize.height;

  return {
    width,
    height,
    selected: state.windows.focused === ownProps.windowId,
    windowSize: state.windows.genWindows[ownProps.windowId].size
  };
};

const GenWindow_mapDispatchToProps = dispatch => {
  return {
    setFocus: windowId => dispatch({
      type: SET_FOCUSED_WINDOW,
      window: windowId
    }),
    close: windowId => dispatch(closeWindow(windowId)),
    setGenWindowSize: (windowId, size) => dispatch(windows_setWindowSize(windowId, size))
  };
};

/* harmony default export */ var components_GenWindow = (connect_connect(GenWindow_mapStateToProps, GenWindow_mapDispatchToProps)(GenWindow));
// CONCATENATED MODULE: ./js/components/MilkdropWindow/MilkdropContextMenu.js



const MilkdropContextMenu = props => react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Node, {
  onClick: props.toggleFullscreen,
  label: "Fullscreen",
  hotkey: "Alt+Enter"
}), react_default.a.createElement(Node, {
  onClick: props.toggleDesktop,
  checked: props.desktopMode,
  label: "Desktop Mode",
  hotkey: "Alt+D"
}), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(Node, {
  onClick: props.close,
  label: "Quit"
}));

/* harmony default export */ var MilkdropWindow_MilkdropContextMenu = (MilkdropContextMenu);
// CONCATENATED MODULE: ./js/components/MilkdropWindow/Desktop.js


class Desktop_Desktop extends react_default.a.Component {
  componentWillUnmount() {
    document.body.removeChild(this._desktopNode);
    this._desktopNode = null;
  }

  _getNode() {
    if (this._desktopNode == null) {
      this._desktopNode = document.createElement("div");

      this._desktopNode.classList.add("webamp-desktop");

      document.body.appendChild(this._desktopNode);
    }

    return this._desktopNode;
  }

  render() {
    return react_dom_default.a.createPortal(this.props.children, this._getNode());
  }

}
// CONCATENATED MODULE: ./js/components/MilkdropWindow/Presets.js
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getRandomValue(arr) {
  return arr[getRandomIndex(arr)];
}

function getLast(arr) {
  return arr[arr.length - 1];
}

async function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      resolve(e.target.result);
    };

    reader.onerror = function (e) {
      reject(e);
    };

    reader.readAsText(file);
  });
}
/**
 * Track a collection of async loaded presets
 *
 * Presets can be changed via `next`, `previous` or `selectIndex`. In each case,
 * a promise is returned. If the promise resolves to `null` it means the
 * selection was canceled by a subsequent request before it could be fulfilled.
 * If the request is successful, the promise resolves to the selected preset.
 *
 * We assume a model where some portion of the preset are supplied at initialization
 * and the remainder can be loaded async via the function `getRest`.
 */


class Presets {
  constructor(_ref) {
    let keys = _ref.keys,
        initialPresets = _ref.initialPresets,
        getRest = _ref.getRest,
        presetConverterEndpoint = _ref.presetConverterEndpoint,
        loadConvertPreset = _ref.loadConvertPreset,
        _ref$randomize = _ref.randomize,
        randomize = _ref$randomize === void 0 ? true : _ref$randomize;
    this._keys = keys; // Alphabetical list of preset names

    this._presets = initialPresets; // Presets indexed by name

    this._getRest = getRest; // An async function to get the rest of the presets

    this._presetConverterEndpoint = presetConverterEndpoint;
    this._loadConvertPreset = loadConvertPreset;
    this._history = []; // Indexes into _keys

    this._randomize = randomize; // Initialize with a key that we already have.

    const avaliableKeys = Object.keys(initialPresets);
    const currentKey = randomize ? getRandomValue(avaliableKeys) : avaliableKeys[0];
    this._currentIndex = this._keys.indexOf(currentKey);

    this._history.push(this._currentIndex);
  }

  toggleRandomize() {
    this._randomize = !this._randomize;
  }

  setRandomize(val) {
    this._randomize = val;
  }

  addPresets(presets) {
    const startIdx = this._keys.length;
    this._keys = this._keys.concat(Object.keys(presets));
    const endIndx = this._keys.length;
    this._presets = Object.assign(this._presets, presets);
    return [startIdx, endIndx];
  }

  loadPresets(presets) {
    this._keys = Object.keys(presets);
    this._presets = presets;
    this._history = [];
    return this._keys.length;
  }

  async next() {
    let idx;

    if (this._randomize || this._history.length === 0) {
      idx = getRandomIndex(this._keys);
    } else {
      idx = (getLast(this._history) + 1) % this._keys.length;
    }

    this._history.push(idx);

    return this._selectIndex(idx);
  }

  async previous() {
    if (this._history.length > 1) {
      this._history.pop();

      return this._selectIndex(getLast(this._history));
    } // We are at the very beginning. There is no "previous" preset.


    return Promise.resolve();
  }

  async selectIndex(idx) {
    // The public version of this method must add to the history
    this._history.push(idx);

    return this._selectIndex(idx);
  }

  async _convertPreset(file) {
    const convertPreset = await this._loadConvertPreset();
    return convertPreset(file, this._presetConverterEndpoint);
  }

  async _selectIndex(idx) {
    const preset = this._presets[this._keys[idx]];

    if (!preset) {
      const rest = await this._getRest();
      this._presets = Object.assign(this._presets, rest);

      if (getLast(this._history) !== idx) {
        // This selection must be obsolete. Return null so that
        // the caller knows this request got canceled.
        return null;
      }
    }

    if (preset && preset.file) {
      try {
        const fileContents = await readFileAsText(preset.file);
        const convertedPreset = await this._convertPreset(fileContents);
        this._presets[this._keys[idx]] = convertedPreset;
      } catch (e) {
        console.error(e);
        alert(`Unable to convert MilkDrop preset ${this._keys[idx]}`);
      }
    }

    this._currentIndex = idx;
    return this.getCurrent();
  }

  getKeys() {
    return this._keys;
  }

  getCurrentIndex() {
    return this._currentIndex;
  }

  getCurrent() {
    // #matryoshka
    return this._presets[this._keys[this._currentIndex]];
  }

}
// CONCATENATED MODULE: ./js/components/DropTarget.tsx


// @ts-ignore #hook-types


function supress(e) {
  e.stopPropagation();
  e.preventDefault();
  e.dataTransfer.dropEffect = "link";
  e.dataTransfer.effectAllowed = "link";
}

const DropTarget = props => {
  const onDrop = Object(react["useCallback"])(e => {
    supress(e); // TODO: We could probably move this coordinate logic into the playlist.
    // I think that's the only place it gets used.

    const currentTarget = e.currentTarget;

    if (!(currentTarget instanceof Element)) {
      return;
    }

    const _currentTarget$getBou = currentTarget.getBoundingClientRect(),
          x = _currentTarget$getBou.left,
          y = _currentTarget$getBou.top;

    props.handleDrop(e, {
      x,
      y
    });
  }, [props.handleDrop]);

  const handleDrop = props.handleDrop,
        passThroughProps = objectWithoutProperties_default()(props, ["handleDrop"]);

  return react_default.a.createElement("div", extends_default()({}, passThroughProps, {
    onDragStart: supress,
    onDragEnter: supress,
    onDragOver: supress,
    onDrop: onDrop
  }));
};

/* harmony default export */ var components_DropTarget = (DropTarget);
// CONCATENATED MODULE: ./js/components/MilkdropWindow/PresetOverlay.js





const ENTRY_HEIGHT = 14;
const HEIGHT_PADDING = 15;
const WIDTH_PADDING = 20;

const LoadingState = () => react_default.a.createElement("div", {
  style: {
    position: "absolute",
    top: 0,
    left: 0,
    color: "white",
    background: "rgba(0.33, 0.33, 0.33, 0.33)"
  }
}, react_default.a.createElement("span", null, "Loading presets"));

const ListWrapper = (_ref) => {
  let width = _ref.width,
      height = _ref.height,
      children = _ref.children;
  return react_default.a.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      padding: "15px 10px 0 10px"
    }
  }, react_default.a.createElement("div", {
    style: {
      display: "inline-block",
      width: `${width - WIDTH_PADDING}px`,
      maxHeight: `${height - HEIGHT_PADDING}px`,
      whiteSpace: "nowrap",
      overflow: "hidden",
      background: "rgba(0, 0, 0, 0.815)",
      fontSize: "12px"
    }
  }, react_default.a.createElement("ul", {
    style: {
      listStyleType: "none",
      padding: 0,
      margin: 0
    }
  }, children)));
};

class PresetOverlay_PresetOverlay extends react_default.a.Component {
  constructor(props) {
    super(props);

    defineProperty_default()(this, "_handleFocusedKeyboardInput", e => {
      switch (e.keyCode) {
        case 38:
          // up arrow
          this.setState({
            selectedListIndex: Math.max(this.state.selectedListIndex - 1, 0)
          });
          e.stopPropagation();
          break;

        case 40:
          // down arrow
          this.setState({
            selectedListIndex: Math.min(this.state.selectedListIndex + 1, this._maxListIndex())
          });
          e.stopPropagation();
          break;

        case 13:
          // enter
          if (this.state.selectedListIndex === 0) {
            this.loadLocalDir();
          } else {
            this.props.selectPreset(this._presetIndexFromListIndex(this.state.selectedListIndex));
          }

          e.stopPropagation();
          break;

        case 27:
          // escape
          this.props.closeOverlay();
          e.stopPropagation();
          break;
      }
    });

    const listIndex = this._listIndexFromPresetIndex(props.currentPreset);

    this.state = {
      selectedListIndex: clamp(listIndex, 0, this._maxListIndex())
    };
  }

  componentDidMount() {
    this._unsubscribeFocusedKeyDown = this.props.onFocusedKeyDown(this._handleFocusedKeyboardInput);
  }

  componentWillUnmount() {
    if (this._unsubscribeFocusedKeyDown) {
      this._unsubscribeFocusedKeyDown();
    }
  }

  _presetIndexFromListIndex(listIndex) {
    return listIndex - 1;
  }

  _listIndexFromPresetIndex(listIndex) {
    return listIndex + 1;
  }

  _maxListIndex() {
    // Number of presets, plus one for the "Load Local Directory" option, minus
    // one to convert a length to an index.
    return this.props.presetKeys.length; // - 1 + 1;
  }

  async loadLocalDir() {
    const fileReferences = await promptForFileReferences({
      directory: true
    }); // TODO: Technically there is a race condition here, since the component
    // could get unmounted before the promise resolves.

    this.props.loadPresets(fileReferences);
  }

  _renderList() {
    const _this$props = this.props,
          presetKeys = _this$props.presetKeys,
          currentPreset = _this$props.currentPreset,
          height = _this$props.height,
          width = _this$props.width;
    const selectedListIndex = this.state.selectedListIndex;
    const maxVisibleRows = Math.floor((height - HEIGHT_PADDING) / ENTRY_HEIGHT);
    const rowsToShow = Math.floor(maxVisibleRows * 0.75); // Only fill 3/4 of the screen.

    const _getRangeCenteredOnIn = getRangeCenteredOnIndex(this._maxListIndex() + 1, // Add one to convert an index to a length
    rowsToShow, selectedListIndex),
          _getRangeCenteredOnIn2 = slicedToArray_default()(_getRangeCenteredOnIn, 2),
          startIndex = _getRangeCenteredOnIn2[0],
          endIndex = _getRangeCenteredOnIn2[1];

    const presetElms = [];

    for (let i = startIndex; i <= endIndex; i++) {
      const presetIndex = this._presetIndexFromListIndex(i);

      const isSelected = i === selectedListIndex;
      const isCurrent = presetIndex === currentPreset;
      let color;

      if (isSelected) {
        color = isCurrent ? "#FFCC22" : "#FF5050";
      } else {
        color = isCurrent ? "#CCFF03" : "#CCCCCC";
      }

      presetElms.push(react_default.a.createElement("li", {
        key: i,
        style: {
          color,
          lineHeight: `${ENTRY_HEIGHT}px`
        }
      }, i === 0 ? "Load Local Directory" : presetKeys[presetIndex]));
    }

    return react_default.a.createElement(ListWrapper, {
      width: width - 20,
      height: height
    }, presetElms);
  }

  render() {
    return this.props.presetKeys != null ? this._renderList() : react_default.a.createElement(LoadingState, null);
  }

} // Find a tuple `[startIndex, endIndex]` representing start/end indexes into an
// array of length `length`, that descripe a range of size up to `rangeSize`
// where a best effort is made to center `indexToCenter`.


function getRangeCenteredOnIndex(length, maxRangeSize, indexToCenter) {
  const rangeSize = Math.min(length, maxRangeSize);
  const halfRangeSize = Math.floor(rangeSize / 2);
  const idealStartIndex = indexToCenter - halfRangeSize;
  const startIndex = clamp(idealStartIndex, 0, length - rangeSize);
  const endIndex = startIndex + rangeSize - 1;
  return [startIndex, endIndex];
}
/* harmony default export */ var MilkdropWindow_PresetOverlay = (PresetOverlay_PresetOverlay);
// CONCATENATED MODULE: ./js/components/MilkdropWindow/Milkdrop.js






const USER_PRESET_TRANSITION_SECONDS = 5.7;
const PRESET_TRANSITION_SECONDS = 2.7;
const MILLISECONDS_BETWEEN_PRESET_TRANSITIONS = 15000;

class Milkdrop_Milkdrop extends react_default.a.Component {
  constructor(props) {
    super(props);

    defineProperty_default()(this, "_handleFocusedKeyboardInput", e => {
      switch (e.keyCode) {
        case 32:
          // spacebar
          this._nextPreset(USER_PRESET_TRANSITION_SECONDS);

          break;

        case 8:
          // backspace
          this._prevPreset(0);

          break;

        case 72:
          // H
          this._nextPreset(0);

          break;

        case 82:
          // R
          this.props.presets.toggleRandomize();
          break;

        case 76:
          // L
          this.setState({
            presetOverlay: !this.state.presetOverlay
          });
          e.stopPropagation();
          break;

        case 84:
          // T
          this.visualizer.launchSongTitleAnim(this.props.trackTitle);
          e.stopPropagation();
          break;

        case 145: // scroll lock

        case 125:
          // F14 (scroll lock for OS X)
          this.presetCycle = !this.presetCycle;

          this._restartCycling();

          break;
      }
    });

    this.state = {
      isFullscreen: false,
      presetOverlay: false
    };
  }

  async componentDidMount() {
    this.visualizer = this.props.butterchurn.createVisualizer(this.props.analyser.context, this._canvasNode, {
      width: this.props.width,
      height: this.props.height,
      meshWidth: 32,
      meshHeight: 24,
      pixelRatio: window.devicePixelRatio || 1
    });
    this.visualizer.connectAudio(this.props.analyser);
    this.presetCycle = true;

    if (this.props.initialPreset) {
      const presetIndices = this.props.presets.addPresets(this.props.initialPreset);
      this.selectPreset((await this.props.presets.selectIndex(presetIndices[0])), 0);
    } else {
      this.selectPreset(this.props.presets.getCurrent(), 0);
    } // Kick off the animation loop


    const loop = () => {
      if (this.props.playing && this.props.isEnabledVisualizer) {
        this.visualizer.render();
      }

      this._animationFrameRequest = window.requestAnimationFrame(loop);
    };

    loop();
    this._unsubscribeFocusedKeyDown = this.props.onFocusedKeyDown(this._handleFocusedKeyboardInput);
  }

  componentWillUnmount() {
    this._pauseViz();

    this._stopCycling();

    if (this._unsubscribeFocusedKeyDown) {
      this._unsubscribeFocusedKeyDown();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.width !== prevProps.width || this.props.height !== prevProps.height) {
      this.visualizer.setRendererSize(this.props.width, this.props.height);
    }

    if (this.props.trackTitle !== prevProps.trackTitle) {
      this.visualizer.launchSongTitleAnim(this.props.trackTitle);
    }
  }

  _pauseViz() {
    if (this._animationFrameRequest) {
      window.cancelAnimationFrame(this._animationFrameRequest);
      this._animationFrameRequest = null;
    }
  }

  _stopCycling() {
    if (this.cycleInterval) {
      clearInterval(this.cycleInterval);
      this.cycleInterval = null;
    }
  }

  _restartCycling() {
    this._stopCycling();

    if (this.presetCycle) {
      this.cycleInterval = setInterval(() => {
        this._nextPreset(PRESET_TRANSITION_SECONDS);
      }, MILLISECONDS_BETWEEN_PRESET_TRANSITIONS);
    }
  }

  _addNewPresets(files) {
    const presetKeys = this.props.presets.getKeys();
    const presets = {};
    const presetIndices = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileName = file.name;
      const presetName = fileName.substring(fileName, fileName.length - 5); // remove .milk

      const presetIdx = presetKeys.indexOf(presetName);

      if (presetIdx >= 0) {
        presetIndices.push(presetIdx);
      } else {
        presets[presetName] = {
          file
        };
      }
    }

    if (Object.keys(presets).length > 0) {
      const filePresetIndices = this.props.presets.addPresets(presets);

      for (let j = filePresetIndices[0]; j < filePresetIndices[1]; j++) {
        presetIndices.push(j);
      }
    }

    return presetIndices;
  }

  async _handleDrop(e) {
    const files = e.dataTransfer.files;

    if (files.length > 0) {
      const milkFiles = Array.from(files).filter(file => file.name.endsWith(".milk"));

      if (milkFiles.length === 0) {
        alert("Visualizer only supports .milk files");
        return;
      }

      const presetIndices = this._addNewPresets(milkFiles);

      this.selectPreset((await this.props.presets.selectIndex(presetIndices[0])), PRESET_TRANSITION_SECONDS);
    }
  }

  async _nextPreset(blendTime) {
    this.selectPreset((await this.props.presets.next()), blendTime);
  }

  async _prevPreset(blendTime) {
    this.selectPreset((await this.props.presets.previous()), blendTime);
  }

  selectPreset(preset) {
    let blendTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (preset != null) {
      this.visualizer.loadPreset(preset, blendTime);

      this._restartCycling(); // TODO: Kinda weird that we use the passed preset for the visualizer,
      // but set state to the current. Maybe we should just always use the curent..


      this.setState({
        currentPreset: this.props.presets.getCurrentIndex()
      });
    }
  }

  async loadPresets(presetFiles) {
    const presets = {};
    const milkFiles = Array.from(presetFiles).filter(file => file.name.endsWith(".milk"));

    for (let i = 0; i < milkFiles.length; i++) {
      const file = milkFiles[i];
      presets[file.name] = {
        file
      };
    }

    const numPresets = this.props.presets.loadPresets(presets);
    this.selectPreset((await this.props.presets.selectIndex(Math.floor(Math.random() * numPresets))), PRESET_TRANSITION_SECONDS);
  }

  closePresetOverlay() {
    this.setState({
      presetOverlay: false
    });
  }

  render() {
    return react_default.a.createElement(components_DropTarget, {
      id: "milkdrop-window",
      handleDrop: e => this._handleDrop(e)
    }, this.state.presetOverlay && react_default.a.createElement(MilkdropWindow_PresetOverlay, {
      width: this.props.width,
      height: this.props.height,
      presetKeys: this.props.presets.getKeys(),
      currentPreset: this.state.currentPreset,
      onFocusedKeyDown: listener => this.props.onFocusedKeyDown(listener),
      selectPreset: async idx => {
        this.selectPreset((await this.props.presets.selectIndex(idx)), 0);
      },
      loadPresets: async presetFiles => this.loadPresets(presetFiles),
      closeOverlay: () => this.closePresetOverlay()
    }), react_default.a.createElement("canvas", {
      height: this.props.height,
      width: this.props.width,
      style: {
        height: "100%",
        width: "100%",
        display: this.props.isEnabledVisualizer ? "block" : "none"
      },
      ref: node => this._canvasNode = node
    }));
  }

}

const Milkdrop_mapStateToProps = state => ({
  trackTitle: getCurrentTrackDisplayName(state)
});

/* harmony default export */ var MilkdropWindow_Milkdrop = (connect_connect(Milkdrop_mapStateToProps)(Milkdrop_Milkdrop));
// CONCATENATED MODULE: ./js/components/MilkdropWindow/Background.js




const Background = props => {
  const innerRef = props.innerRef,
        restProps = objectWithoutProperties_default()(props, ["innerRef"]);

  return react_default.a.createElement("div", extends_default()({
    ref: innerRef,
    className: "draggable",
    style: {
      // This color will be used until Butterchurn is loaded
      backgroundColor: "#000",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%"
    },
    tabIndex: "0"
  }, restProps));
};

/* harmony default export */ var MilkdropWindow_Background = (Background);
// EXTERNAL MODULE: ./css/milkdrop-window.css
var milkdrop_window = __webpack_require__(137);

// CONCATENATED MODULE: ./js/components/MilkdropWindow/index.js
















 // This component is just responsible for loading dependencies.
// This simplifies the inner <Milkdrop /> component, by allowing
// it to always assume that it has its dependencies.

class MilkdropWindow_PresetsLoader extends react_default.a.Component {
  constructor(props) {
    super(props);

    defineProperty_default()(this, "_handleFullscreenChange", () => {
      this.setState({
        isFullscreen: screenfull_default.a.isFullscreen
      });
    });

    defineProperty_default()(this, "_handleRequestFullsceen", () => {
      if (screenfull_default.a.enabled) {
        if (!screenfull_default.a.isFullscreen) {
          screenfull_default.a.request(this._wrapperNode);
        } else {
          screenfull_default.a.exit();
        }
      }
    });

    this.options = props.options;
    this.state = {
      presets: null,
      initialPreset: null,
      butterchurn: null,
      isFullscreen: false
    };
  }

  isHidden() {
    return this.props.desktop;
  }

  async componentDidMount() {
    const _ref = await Promise.all([this.options.loadInitialDependencies(), loadInitialPreset(this.options)]),
          _ref2 = slicedToArray_default()(_ref, 2),
          _ref2$ = _ref2[0],
          butterchurn = _ref2$.butterchurn,
          presetKeys = _ref2$.presetKeys,
          minimalPresets = _ref2$.minimalPresets,
          initialPreset = _ref2[1];

    const presets = new Presets({
      keys: presetKeys,
      initialPresets: minimalPresets,
      getRest: this.options.loadNonMinimalPresets,
      presetConverterEndpoint: this.options.presetConverterEndpoint,
      loadConvertPreset: this.options.loadConvertPreset
    });
    this.setState({
      butterchurn,
      initialPreset,
      presets
    });
    screenfull_default.a.onchange(this._handleFullscreenChange);
  }

  componentWillUnmount() {
    screenfull_default.a.off("change", this._handleFullscreenChange);
  }

  _renderMilkdrop(size) {
    const _this$state = this.state,
          butterchurn = _this$state.butterchurn,
          presets = _this$state.presets,
          initialPreset = _this$state.initialPreset;
    const loaded = butterchurn != null && presets != null;

    const _ref3 = this.state.isFullscreen ? {
      width: screen.width,
      height: screen.height
    } : size,
          width = _ref3.width,
          height = _ref3.height; // Note: This _wrapperNode must not be removed from the DOM while
    // in/entering full screen mode. Ensure `this.setState({isFullscreen})`
    // does not cause this node to change identity.


    return react_default.a.createElement(MilkdropWindow_Background, {
      innerRef: node => this._wrapperNode = node
    }, loaded && react_default.a.createElement(MilkdropWindow_Milkdrop, extends_default()({}, this.props, {
      width: width,
      height: height,
      isFullscreen: this.state.isFullscreen,
      presets: presets,
      initialPreset: initialPreset,
      butterchurn: butterchurn
    })));
  }

  render() {
    if (this.props.desktop) {
      const size = {
        width: window.innerWidth,
        height: window.innerHeight
      };
      return react_default.a.createElement(ContextMenuWrapper_ContextMenuWraper, {
        onDoubleClick: this._handleRequestFullsceen,
        renderContents: () => react_default.a.createElement(MilkdropWindow_MilkdropContextMenu, {
          close: this.props.closeWindow,
          toggleFullscreen: this._handleRequestFullsceen,
          desktopMode: this.props.desktop,
          toggleDesktop: this.props.toggleDesktop
        })
      }, react_default.a.createElement(Desktop_Desktop, null, this._renderMilkdrop(size)));
    }

    return react_default.a.createElement(components_GenWindow, {
      title: "Milkdrop",
      windowId: WINDOWS.MILKDROP
    }, (_ref4) => {
      let height = _ref4.height,
          width = _ref4.width;
      return react_default.a.createElement(ContextMenuWrapper_ContextMenuWraper, {
        onDoubleClick: this._handleRequestFullsceen,
        renderContents: () => react_default.a.createElement(MilkdropWindow_MilkdropContextMenu, {
          close: this.props.closeWindow,
          toggleFullscreen: this._handleRequestFullsceen,
          desktopMode: this.props.desktop,
          toggleDesktop: this.props.toggleDesktop
        })
      }, this._renderMilkdrop({
        width,
        height
      }));
    });
  }

}

function presetNameFromURL(url) {
  try {
    const urlParts = url.split("/");
    const lastPart = urlParts[urlParts.length - 1];
    const presetName = lastPart.substring(0, lastPart.length - 5); // remove .milk or .json

    return decodeURIComponent(presetName);
  } catch (e) {
    // if something goes wrong parsing url, just use url as the preset name
    console.error(e);
    return url;
  }
}

async function loadInitialPreset(_ref5) {
  let initialButterchurnPresetUrl = _ref5.initialButterchurnPresetUrl,
      initialMilkdropPresetUrl = _ref5.initialMilkdropPresetUrl;

  if (initialButterchurnPresetUrl && initialMilkdropPresetUrl) {
    alert("Unable to handle both milkdropPresetUrl and butterchurnPresetUrl. Please specify one or the other.");
  } else if (initialButterchurnPresetUrl) {
    return fetchPreset(initialButterchurnPresetUrl, {
      isButterchurn: true
    });
  } else if (initialMilkdropPresetUrl) {
    return fetchPreset(initialMilkdropPresetUrl, {
      isButterchurn: false
    });
  }

  return null;
}

async function fetchPreset(presetUrl, _ref6) {
  let isButterchurn = _ref6.isButterchurn;
  const response = await fetch(presetUrl);

  if (!response.ok) {
    console.error(response.statusText);
    alert(`Unable to load MilkDrop preset from ${presetUrl}`);
    return null;
  }

  const presetName = presetNameFromURL(presetUrl);
  let preset = null;

  if (isButterchurn) {
    try {
      preset = await response.json();
    } catch (e) {
      console.error(e);
      alert(`Failed to parse MilkDrop preset from ${presetUrl}`);
      return null;
    }
  } else {
    preset = {
      file: await response.blob()
    };
  }

  return {
    [presetName]: preset
  };
}

const MilkdropWindow_mapStateToProps = state => ({
  isEnabledVisualizer: selectors_getVisualizerStyle(state) === VISUALIZERS.MILKDROP,
  playing: getMediaIsPlaying(state),
  desktop: getMilkdropDesktopEnabled(state)
});

const MilkdropWindow_mapDispatchToProps = dispatch => ({
  closeWindow: () => dispatch(closeWindow(WINDOWS.MILKDROP)),
  toggleDesktop: () => dispatch(toggleMilkdropDesktop())
});

/* harmony default export */ var MilkdropWindow = (connect_connect(MilkdropWindow_mapStateToProps, MilkdropWindow_mapDispatchToProps)(MilkdropWindow_PresetsLoader));
// CONCATENATED MODULE: ./js/components/PlaybackContextMenu.js





const PlaybackContextMenu = props => react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(Node, {
  label: "Previous",
  hotkey: "Z",
  onClick: props.previous
}), react_default.a.createElement(Node, {
  label: "Play",
  hotkey: "X",
  onClick: props.play
}), react_default.a.createElement(Node, {
  label: "Pause",
  hotkey: "C",
  onClick: props.pause
}), react_default.a.createElement(Node, {
  label: "Stop",
  hotkey: "V",
  onClick: props.stop
}), react_default.a.createElement(Node, {
  label: "Next",
  hotkey: "B",
  onClick: props.next
}), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(Node, {
  label: "Back 5 seconds",
  hotkey: "Left",
  onClick: () => props.seekBackward(5)
}), react_default.a.createElement(Node, {
  label: "Fwd 5 seconds",
  hotkey: "Right",
  onClick: () => props.seekForward(5)
}), react_default.a.createElement(Node, {
  label: "10 tracks back",
  hotkey: "Num. 1",
  onClick: () => props.nextN(-10)
}), react_default.a.createElement(Node, {
  label: "10 tracks fwd",
  hotkey: "Num. 3",
  onClick: () => props.nextN(10)
}));

const PlaybackContextMenu_mapDispatchToProps = {
  previous: media_previous,
  play: play,
  pause: pause,
  stop: stop,
  next: media_next,
  seekForward: seekForward,
  seekBackward: seekBackward,
  nextN: nextN
};
/* harmony default export */ var components_PlaybackContextMenu = (connect_connect(null, PlaybackContextMenu_mapDispatchToProps)(PlaybackContextMenu));
// CONCATENATED MODULE: ./js/components/SkinsContextMenu.js





const SkinContextMenu = props => react_default.a.createElement(Parent, {
  label: "Skins"
}, react_default.a.createElement(Node, {
  onClick: props.openSkinFileDialog,
  label: "Load Skin..."
}), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(Node, {
  onClick: props.loadDefaultSkin,
  label: "<Base Skin>"
}), props.availableSkins.map(skin => react_default.a.createElement(Node, {
  key: skin.url,
  onClick: () => props.setSkin(skin.url),
  label: skin.name
})));

const SkinsContextMenu_mapStateToProps = state => ({
  availableSkins: state.settings.availableSkins
});

const SkinsContextMenu_mapDispatchToProps = {
  loadDefaultSkin: loadDefaultSkin,
  openSkinFileDialog: openSkinFileDialog,
  setSkin: setSkinFromUrl
};
/* harmony default export */ var SkinsContextMenu = (connect_connect(SkinsContextMenu_mapStateToProps, SkinsContextMenu_mapDispatchToProps)(SkinContextMenu));
// CONCATENATED MODULE: ./js/components/OptionsContextMenu.tsx







const OptionsContextMenu = props => react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(SkinsContextMenu, null), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(Node, {
  label: "Time elapsed",
  hotkey: "(Ctrl+T toggles)",
  onClick: props.toggleTimeMode,
  checked: props.timeMode === TIME_MODE.ELAPSED
}), react_default.a.createElement(Node, {
  label: "Time remaining",
  hotkey: "(Ctrl+T toggles)",
  onClick: props.toggleTimeMode,
  checked: props.timeMode === TIME_MODE.REMAINING
}), react_default.a.createElement(Node, {
  label: "Double Size",
  hotkey: "Ctrl+D",
  onClick: props.toggleDoubleSizeMode,
  checked: props.doubled
}), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(Node, {
  label: "Repeat",
  hotkey: "R",
  onClick: props.toggleRepeat,
  checked: props.repeat
}), react_default.a.createElement(Node, {
  label: "Shuffle",
  hotkey: "S",
  onClick: props.toggleShuffle,
  checked: props.shuffle
}));

const OptionsContextMenu_mapStateToProps = state => {
  return {
    doubled: state.display.doubled,
    timeMode: state.media.timeMode,
    repeat: state.media.repeat,
    shuffle: state.media.shuffle
  };
};

const OptionsContextMenu_mapDispatchToProps = dispatch => {
  return {
    toggleTimeMode: () => dispatch(media_toggleTimeMode()),
    toggleDoubleSizeMode: () => dispatch(toggleDoubleSizeMode()),
    toggleRepeat: () => dispatch(toggleRepeat()),
    toggleShuffle: () => dispatch(toggleShuffle())
  };
};

/* harmony default export */ var components_OptionsContextMenu = (connect_connect(OptionsContextMenu_mapStateToProps, OptionsContextMenu_mapDispatchToProps)(OptionsContextMenu));
// CONCATENATED MODULE: ./js/components/MainWindow/MainContextMenu.tsx










const MainContextMenu = props => react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(LinkNode, {
  href: "https://github.com/captbaritone/webamp",
  target: "_blank",
  label: "Webamp..."
}), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(Parent, {
  label: "Play"
}, react_default.a.createElement(Node, {
  onClick: props.openMediaFileDialog,
  label: "File...",
  hotkey: "L"
}), props.filePickers && props.filePickers.map((picker, i) => (props.networkConnected || !picker.requiresNetwork) && react_default.a.createElement(Node, {
  key: i,
  onClick: async () => {
    let files;

    try {
      files = await picker.filePicker();
    } catch (e) {
      console.error("Error loading from file picker", e);
    }

    props.loadMediaFiles(files || [], LOAD_STYLE.PLAY);
  },
  label: picker.contextMenuName
}))), react_default.a.createElement(ContextMenu_Hr, null), Object.keys(props.genWindows).map(i => react_default.a.createElement(Node, {
  key: i,
  label: props.genWindows[i].title,
  checked: props.genWindows[i].open,
  onClick: () => props.toggleGenWindow(i),
  hotkey: props.genWindows[i].hotkey
})), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(SkinsContextMenu, null), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(Parent, {
  label: "Options"
}, react_default.a.createElement(components_OptionsContextMenu, null)), react_default.a.createElement(Parent, {
  label: "Playback"
}, react_default.a.createElement(components_PlaybackContextMenu, null)), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(Node, {
  onClick: props.close,
  label: "Exit"
}));

const MainContextMenu_mapStateToProps = state => ({
  networkConnected: state.network.connected,
  genWindows: getGenWindows(state)
});

const MainContextMenu_mapDispatchToProps = dispatch => {
  return {
    close: () => dispatch(actionCreators_close()),
    openMediaFileDialog: () => dispatch(openMediaFileDialog()),
    loadMediaFiles: (tracks, loadStyle) => dispatch(loadMediaFiles(tracks, loadStyle)),
    toggleGenWindow: windowId => dispatch(toggleWindow(windowId))
  };
};

/* harmony default export */ var MainWindow_MainContextMenu = (connect_connect(MainContextMenu_mapStateToProps, MainContextMenu_mapDispatchToProps)(MainContextMenu));
// CONCATENATED MODULE: ./js/components/WindowManager.tsx









const abuts = (a, b) => {
  // TODO: This is kinda a hack. They should really be touching, not just within snapping distance.
  // Also, overlapping should not count.
  const wouldMoveTo = snap(a, b);
  return wouldMoveTo.x !== undefined || wouldMoveTo.y !== undefined;
};

class WindowManager_WindowManager extends react_default.a.Component {
  constructor() {
    super(...arguments);

    defineProperty_default()(this, "handleMouseDown", (key, e) => {
      if (!e.target.classList.contains("draggable")) {
        return;
      } // Prevent dragging from highlighting text.


      e.preventDefault();

      const _this$movingAndStatio = this.movingAndStationaryNodes(key),
            _this$movingAndStatio2 = slicedToArray_default()(_this$movingAndStatio, 2),
            moving = _this$movingAndStatio2[0],
            stationary = _this$movingAndStatio2[1];

      const mouseStart = {
        x: e.clientX,
        y: e.clientY
      };
      const browserWindowSize = this.props.browserWindowSize;
      const box = boundingBox(moving);

      const handleMouseMove = ee => {
        const proposedDiff = {
          x: ee.clientX - mouseStart.x,
          y: ee.clientY - mouseStart.y
        };
        const proposedWindows = moving.map(node => objectSpread_default()({}, node, applyDiff(node, proposedDiff)));

        const proposedBox = objectSpread_default()({}, box, applyDiff(box, proposedDiff));

        const snapDiff = snapDiffManyToMany(proposedWindows, stationary);
        const withinDiff = snapWithinDiff(proposedBox, browserWindowSize);
        const finalDiff = applyMultipleDiffs(proposedDiff, snapDiff, withinDiff);
        const windowPositionDiff = moving.reduce((diff, window) => {
          diff[window.key] = applyDiff(window, finalDiff);
          return diff;
        }, {});
        this.props.updateWindowPositions(windowPositionDiff, false);
      };

      const removeListeners = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", removeListeners);
      };

      window.addEventListener("mouseup", removeListeners);
      window.addEventListener("mousemove", handleMouseMove);
    });
  }

  movingAndStationaryNodes(key) {
    const windows = this.props.windowsInfo.filter(w => this.props.windows[w.key] != null && !this.props.getWindowHidden(w.key));
    const targetNode = windows.find(node => node.key === key);

    if (targetNode == null) {
      throw new Error("Tried to move a node that does not exist");
    }

    let movingSet = new Set([targetNode]); // Only the main window brings other windows along.

    if (key === "main") {
      const findAllConnected = traceConnection(abuts);
      movingSet = findAllConnected(windows, targetNode);
    }

    const stationary = windows.filter(w => !movingSet.has(w));
    const moving = Array.from(movingSet);
    return [moving, stationary];
  }

  render() {
    const style = {
      position: "absolute",
      top: 0,
      left: 0
    };
    const windows = this.props.windowsInfo.filter(w => this.props.windows[w.key]);
    return windows.map(w => react_default.a.createElement("div", {
      key: w.key,
      onMouseDown: e => this.handleMouseDown(w.key, e),
      style: objectSpread_default()({}, style, {
        transform: `translate(${w.x}px, ${w.y}px)`
      })
    }, this.props.windows[w.key]));
  }

}

const WindowManager_mapStateToProps = state => ({
  windowsInfo: getWindowsInfo(state),
  getWindowHidden: getWindowHidden(state),
  getWindowOpen: getWindowOpen(state),
  browserWindowSize: getBrowserWindowSize(state)
});

const WindowManager_mapDispatchToProps = dispatch => {
  return {
    updateWindowPositions: positions => dispatch(updateWindowPositions(positions))
  };
};

/* harmony default export */ var components_WindowManager = (connect_connect(WindowManager_mapStateToProps, WindowManager_mapDispatchToProps)(WindowManager_WindowManager));
// CONCATENATED MODULE: ./js/components/Character.tsx



const characterClassName = char => `character-${char.toString().toLowerCase().charCodeAt(0)}`;

const Character = (_ref) => {
  let char = _ref.children,
      className = _ref.className,
      passThrough = objectWithoutProperties_default()(_ref, ["children", "className"]);

  return react_default.a.createElement("span", extends_default()({}, passThrough, {
    className: `${className || ""} character ${characterClassName(char)}`
  }), char);
};

/* harmony default export */ var components_Character = (Character);
// EXTERNAL MODULE: ./css/mini-time.css
var mini_time = __webpack_require__(139);

// CONCATENATED MODULE: ./js/components/MiniTime.tsx








 // Sigh. When the display is blinking (say when it's paused) we need to
// alternate between the actual character and the space character. Not
// Possible to do that in pure CSS with the background being dynamically generated.
// All "space" characters is also how Winamp renders no content.

const MiniTime_Background = () => react_default.a.createElement(react_default.a.Fragment, null, [1, 7, 12, 20, 25].map((left, i) => react_default.a.createElement(components_Character, {
  style: {
    left
  },
  key: i,
  className: "background-character",
  children: " "
})));

const MiniTime = props => {
  let seconds = null; // TODO: Clean this up: If stopped, just render the background, rather than
  // rendering spaces twice.

  if (props.status !== MEDIA_STATUS.STOPPED && props.length != null) {
    seconds = props.timeMode === TIME_MODE.ELAPSED ? props.timeElapsed : props.length - props.timeElapsed;
  }

  const timeObj = getTimeObj(seconds);
  const showMinus = props.timeMode === TIME_MODE.REMAINING && props.status !== MEDIA_STATUS.STOPPED;
  return react_default.a.createElement("div", {
    onClick: props.toggle,
    className: classnames_default()("mini-time", "countdown", {
      blinking: props.status === MEDIA_STATUS.PAUSED
    })
  }, react_default.a.createElement(MiniTime_Background, null), react_default.a.createElement(components_Character, {
    style: {
      left: 1
    }
  }, showMinus ? "-" : " "), react_default.a.createElement(components_Character, {
    style: {
      left: 7
    }
  }, timeObj.minutesFirstDigit), react_default.a.createElement(components_Character, {
    style: {
      left: 12
    }
  }, timeObj.minutesSecondDigit), react_default.a.createElement(components_Character, {
    style: {
      left: 20
    }
  }, timeObj.secondsFirstDigit), react_default.a.createElement(components_Character, {
    style: {
      left: 25
    }
  }, timeObj.secondsSecondDigit));
};

const MiniTime_mapStateToProps = state => ({
  status: state.media.status,
  timeMode: state.media.timeMode,
  timeElapsed: getTimeElapsed(state),
  length: getDuration(state)
});

const MiniTime_mapDispatchToProps = dispatch => ({
  // TODO: move to actionCreators
  toggle: () => {
    dispatch({
      type: TOGGLE_TIME_MODE
    });
  }
});

/* harmony default export */ var components_MiniTime = (connect_connect(MiniTime_mapStateToProps, MiniTime_mapDispatchToProps)(MiniTime));
// CONCATENATED MODULE: ./js/components/ClickedDiv.tsx


// @ts-ignore #hook-types



// Winamp has a strange behavior for the buttons at the top of the main window.
// It shows through to the main background sprite until the first time that it's
// clicked, and then it shows the dedicated undepressed sprite thereafter.
// This component is an abstraction that tracks if a div has ever been clicked.
// Look in `skinSelectors` for CSS selectors that look like `#some-id.clicked`
// for examples of this functionality in use.
function ClickedDiv(props) {
  const _useState = Object(react["useState"])(false),
        _useState2 = slicedToArray_default()(_useState, 2),
        clicked = _useState2[0],
        setClicked = _useState2[1];

  function handleMouseDown(e) {
    setClicked(true);

    if (props.onMouseDown) {
      props.onMouseDown(e);
    }
  }

  return react_default.a.createElement("div", extends_default()({}, props, {
    className: classnames_default()(props.className, {
      clicked
    }),
    onMouseDown: handleMouseDown
  }));
}

/* harmony default export */ var components_ClickedDiv = (ClickedDiv);
// CONCATENATED MODULE: ./js/components/ContextMenuTarget.tsx


// @ts-ignore #hook-types



function getNodeOffset(node) {
  if (!node) {
    return {
      top: 0,
      left: 0
    };
  }

  const rect = node.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  };
}

function ContextMenuTarget(props) {
  const handleNode = Object(react["useRef"])(null);

  const _useState = Object(react["useState"])(false),
        _useState2 = slicedToArray_default()(_useState, 2),
        selected = _useState2[0],
        setSelected = _useState2[1];

  Object(react["useEffect"])(() => {
    function handleGlobalClick(e) {
      if (selected && // Typescript does not believe that these click events are always fired on DOM nodes.
      e.target instanceof Element && selected && // Not sure how, but it's possible for this to get called when handleNode is null/undefined.
      // https://sentry.io/share/issue/2066cd79f21e4f279791319f4d2ea35d/
      handleNode.current && !handleNode.current.contains(e.target)) {
        setSelected(false);
      }
    }

    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [selected, handleNode.current]);
  const offset = Object(react["useMemo"])(() => getNodeOffset(handleNode.current), [selected]);

  const handle = props.handle,
        children = props.children,
        top = props.top,
        bottom = props.bottom,
        passThroughProps = objectWithoutProperties_default()(props, ["handle", "children", "top", "bottom"]);

  return react_default.a.createElement("div", passThroughProps, react_default.a.createElement("div", {
    className: "handle",
    style: {
      width: "100%",
      height: "100%"
    },
    ref: handleNode,
    onClick: () => setSelected(!selected)
  }, handle), react_default.a.createElement(components_ContextMenu, {
    selected: selected,
    offsetTop: offset.top,
    offsetLeft: offset.left,
    top: top,
    bottom: bottom
  }, children));
}

/* harmony default export */ var components_ContextMenuTarget = (ContextMenuTarget);
// CONCATENATED MODULE: ./js/components/Visualizer.js





const PIXEL_DENSITY = 2;
const NUM_BARS = 20;
const BAR_WIDTH = 3 * PIXEL_DENSITY;
const BAR_PEAK_DROP_RATE = 0.01;
const GRADIENT_COLOR_COUNT = 16;
const PEAK_COLOR_INDEX = 23; // Return the average value in a slice of dataArray

function sliceAverage(dataArray, sliceWidth, sliceNumber) {
  const start = sliceWidth * sliceNumber;
  const end = start + sliceWidth;
  let sum = 0;

  for (let i = start; i < end; i++) {
    sum += dataArray[i];
  }

  return sum / sliceWidth;
}

function octaveBucketsForBufferLength(bufferLength) {
  const octaveBuckets = new Array(NUM_BARS).fill(0);
  const minHz = 200;
  const maxHz = 22050;
  const octaveStep = Math.pow(maxHz / minHz, 1 / NUM_BARS);
  octaveBuckets[0] = 0;
  octaveBuckets[1] = minHz;

  for (let i = 2; i < NUM_BARS - 1; i++) {
    octaveBuckets[i] = octaveBuckets[i - 1] * octaveStep;
  }

  octaveBuckets[NUM_BARS - 1] = maxHz;

  for (let i = 0; i < NUM_BARS; i++) {
    const octaveIdx = Math.floor(octaveBuckets[i] / maxHz * bufferLength);
    octaveBuckets[i] = octaveIdx;
  }

  return octaveBuckets;
} // Pre-render the background grid


function preRenderBg(width, height, bgColor, fgColor, windowShade) {
  // Off-screen canvas for pre-rendering the background
  const bgCanvas = document.createElement("canvas");
  bgCanvas.width = width;
  bgCanvas.height = height;
  const distance = 2 * PIXEL_DENSITY;
  const bgCanvasCtx = bgCanvas.getContext("2d");
  bgCanvasCtx.fillStyle = bgColor;
  bgCanvasCtx.fillRect(0, 0, width, height);

  if (!windowShade) {
    bgCanvasCtx.fillStyle = fgColor;

    for (let x = 0; x < width; x += distance) {
      for (let y = PIXEL_DENSITY; y < height; y += distance) {
        bgCanvasCtx.fillRect(x, y, PIXEL_DENSITY, PIXEL_DENSITY);
      }
    }
  }

  return bgCanvas;
}

function preRenderBar(height, colors, renderHeight) {
  /**
   * The order of the colours is commented in the file: the fist two colours
   * define the background and dots (check it to see what are the dots), the
   * next 16 colours are the analyzer's colours from top to bottom, the next
   * 5 colours are the oscilloscope's ones, from center to top/bottom, the
   * last colour is for the analyzer's peak markers.
   */
  // Off-screen canvas for pre-rendering a single bar gradient
  const barCanvas = document.createElement("canvas");
  barCanvas.width = BAR_WIDTH;
  barCanvas.height = height;
  const offset = 2; // The first two colors are for the background;

  const gradientColors = colors.slice(offset, offset + GRADIENT_COLOR_COUNT);
  const barCanvasCtx = barCanvas.getContext("2d");
  const multiplier = GRADIENT_COLOR_COUNT / renderHeight; // In shade mode, the five colors are, from top to bottom:
  // 214, 102, 0 -- 3
  // 222, 165, 24 -- 6
  // 148, 222, 33 -- 9
  // 57, 181, 16 -- 12
  // 24, 132, 8 -- 15
  // TODO: This could probably be improved by iterating backwards

  for (let i = 0; i < renderHeight; i++) {
    const colorIndex = GRADIENT_COLOR_COUNT - 1 - Math.floor(i * multiplier);
    barCanvasCtx.fillStyle = gradientColors[colorIndex];
    const y = height - i * PIXEL_DENSITY;
    barCanvasCtx.fillRect(0, y, BAR_WIDTH, PIXEL_DENSITY);
  }

  return barCanvas;
}

class Visualizer_Visualizer extends react_default.a.Component {
  componentDidMount() {
    this.barPeaks = new Array(NUM_BARS).fill(0);
    this.barPeakFrames = new Array(NUM_BARS).fill(0);
    this.canvasCtx = this.canvas.getContext("2d");
    this.canvasCtx.imageSmoothingEnabled = false;
    this.setStyle(); // Kick off the animation loop

    const loop = () => {
      if (this.props.status === MEDIA_STATUS.PLAYING) {
        if (this.props.dummyVizData) {
          Object.keys(this.props.dummyVizData).forEach(i => {
            this._printBar(i, this.props.dummyVizData[i]);
          });
        } else {
          this.paintFrame();
        }
      }

      this._animationRequest = window.requestAnimationFrame(loop);
    };

    loop();
  }

  componentWillUnmount() {
    if (this._animationRequest) {
      window.cancelAnimationFrame(this._animationRequest);
    }
  }

  componentDidUpdate() {
    this.setStyle(); // Redraw the current frame, since the skin may have changed.

    this.paintFrame();
  }

  _renderWidth() {
    return this.props.width;
  }

  _renderHeight() {
    return this.props.height;
  }

  _height() {
    return this.props.height * PIXEL_DENSITY;
  }

  _width() {
    return this.props.width * PIXEL_DENSITY;
  }

  setStyle() {
    if (!this.props.colors) {
      return;
    } // TODO: Split this into to methods. One for skin update, one for style
    // update.


    this.preRenderBg();
    this.preRenderBar();
    this.props.analyser.fftSize = 2048;

    if (this.props.style === VISUALIZERS.OSCILLOSCOPE) {
      this.bufferLength = this.props.analyser.fftSize;
      this.dataArray = new Uint8Array(this.bufferLength);
    } else if (this.props.style === VISUALIZERS.BAR) {
      this.bufferLength = this.props.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);

      if (!this.octaveBuckets) {
        this.octaveBuckets = octaveBucketsForBufferLength(this.bufferLength);
      }
    }
  }

  clear() {
    this.canvasCtx.drawImage(this.bgCanvas, 0, 0);
  } // Pre-render the background grid


  preRenderBg() {
    this.bgCanvas = preRenderBg(this._width(), this._height(), this.props.colors[0], this.props.colors[1], this.props.windowShade);
  } // Pre-render the bar gradient


  preRenderBar() {
    this.barCanvas = preRenderBar(this._height(), this.props.colors, this._renderHeight());
  }

  paintFrame() {
    this.clear();

    if (this.props.style === VISUALIZERS.OSCILLOSCOPE) {
      this._paintOscilloscopeFrame();
    } else if (this.props.style === VISUALIZERS.BAR) {
      this._paintBarFrame();
    }
  }

  _paintOscilloscopeFrame() {
    this.props.analyser.getByteTimeDomainData(this.dataArray);
    this.canvasCtx.lineWidth = PIXEL_DENSITY; // Just use one of the viscolors for now

    this.canvasCtx.strokeStyle = this.props.colors[18]; // Since dataArray has more values than we have pixels to display, we
    // have to average several dataArray values per pixel. We call these
    // groups slices.
    //
    // We use the  2x scale here since we only want to plot values for
    // "real" pixels.

    const sliceWidth = Math.floor(this.bufferLength / this._width()) * PIXEL_DENSITY;

    const h = this._height();

    this.canvasCtx.beginPath(); // Iterate over the width of the canvas in "real" pixels.

    for (let j = 0; j <= this._renderWidth(); j++) {
      const amplitude = sliceAverage(this.dataArray, sliceWidth, j);
      const percentAmplitude = amplitude / 255; // dataArray gives us bytes

      const y = (1 - percentAmplitude) * h; // flip y

      const x = j * PIXEL_DENSITY; // Canvas coordinates are in the middle of the pixel by default.
      // When we want to draw pixel perfect lines, we will need to
      // account for that here

      if (x === 0) {
        this.canvasCtx.moveTo(x, y);
      } else {
        this.canvasCtx.lineTo(x, y);
      }
    }

    this.canvasCtx.stroke();
  }

  _printBar(x, height, peakHeight) {
    height = Math.ceil(height) * PIXEL_DENSITY;
    peakHeight = Math.ceil(peakHeight) * PIXEL_DENSITY;

    if (height > 0 || peakHeight > 0) {
      const y = this._height() - height;
      const ctx = this.canvasCtx; // Draw the gradient

      const b = BAR_WIDTH;

      if (height > 0) {
        ctx.drawImage(this.barCanvas, 0, y, b, height, x, y, b, height);
      } // Draw the gray peak line


      if (!this.props.windowShade) {
        const peakY = this._height() - peakHeight;
        ctx.fillStyle = this.props.colors[PEAK_COLOR_INDEX];
        ctx.fillRect(x, peakY, b, PIXEL_DENSITY);
      }
    }
  }

  _paintBarFrame() {
    this.props.analyser.getByteFrequencyData(this.dataArray);
    const heightMultiplier = this._renderHeight() / 256;
    const xOffset = BAR_WIDTH + PIXEL_DENSITY; // Bar width, plus a pixel of spacing to the right.

    for (let j = 0; j < NUM_BARS - 1; j++) {
      const start = this.octaveBuckets[j];
      const end = this.octaveBuckets[j + 1];
      let amplitude = 0;

      for (let k = start; k < end; k++) {
        amplitude += this.dataArray[k];
      }

      amplitude /= end - start; // The drop rate should probably be normalized to the rendering FPS, for now assume 60 FPS

      let barPeak = this.barPeaks[j] - BAR_PEAK_DROP_RATE * Math.pow(this.barPeakFrames[j], 2);

      if (barPeak < amplitude) {
        barPeak = amplitude;
        this.barPeakFrames[j] = 0;
      } else {
        this.barPeakFrames[j] += 1;
      }

      this.barPeaks[j] = barPeak;

      this._printBar(j * xOffset, amplitude * heightMultiplier, barPeak * heightMultiplier);
    }
  }

  render() {
    const _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height;
    return react_default.a.createElement("canvas", {
      id: "visualizer",
      ref: node => this.canvas = node,
      style: {
        width,
        height
      },
      width: width * PIXEL_DENSITY,
      height: height * PIXEL_DENSITY,
      onClick: this.props.toggleVisualizerStyle
    });
  }

}

const Visualizer_mapStateToProps = state => ({
  colors: state.display.skinColors,
  style: selectors_getVisualizerStyle(state),
  width: getWindowShade(state)("main") ? 38 : 76,
  height: getWindowShade(state)("main") ? 5 : 16,
  status: state.media.status,
  windowShade: getWindowShade(state)("main"),
  dummyVizData: state.display.dummyVizData
});

const Visualizer_mapDispatchToProps = {
  toggleVisualizerStyle: toggleVisualizerStyle
};
/* harmony default export */ var components_Visualizer = (connect_connect(Visualizer_mapStateToProps, Visualizer_mapDispatchToProps)(Visualizer_Visualizer));
// CONCATENATED MODULE: ./js/components/MainWindow/ActionButtons.tsx




const ActionButtons = props => react_default.a.createElement("div", {
  className: "actions"
}, react_default.a.createElement("div", {
  id: "previous",
  onClick: props.previous,
  title: "Previous Track"
}), react_default.a.createElement("div", {
  id: "play",
  onClick: props.play,
  title: "Play"
}), react_default.a.createElement("div", {
  id: "pause",
  onClick: props.pause,
  title: "Pause"
}), react_default.a.createElement("div", {
  id: "stop",
  onClick: props.stop,
  title: "Stop"
}), react_default.a.createElement("div", {
  id: "next",
  onClick: props.next,
  title: "Next Track"
}));

const ActionButtons_mapDispatchToProps = dispatch => {
  return {
    previous: () => dispatch(media_previous()),
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    stop: () => dispatch(stop()),
    next: () => dispatch(media_next())
  };
};

/* harmony default export */ var MainWindow_ActionButtons = (connect_connect(null, ActionButtons_mapDispatchToProps)(ActionButtons));
// CONCATENATED MODULE: ./js/components/Balance.tsx






const Balance = props => react_default.a.createElement("input", {
  id: props.id,
  className: props.className,
  type: "range",
  min: "-100",
  max: "100",
  step: "1",
  value: props.balance,
  style: props.style,
  onChange: props.setBalance,
  onMouseDown: props.showMarquee,
  onMouseUp: props.hideMarquee,
  title: "Balance"
});

const Balance_mapStateToProps = state => ({
  balance: getBalance(state)
});

const Balance_mapDispatchToProps = dispatch => ({
  setBalance: e => dispatch(setBalance(Number(e.target.value))),
  showMarquee: () => dispatch(actionCreators_setFocus("balance")),
  hideMarquee: () => dispatch(unsetFocus())
});

/* harmony default export */ var components_Balance = (connect_connect(Balance_mapStateToProps, Balance_mapDispatchToProps)(Balance));
// CONCATENATED MODULE: ./js/components/MainWindow/MainBalance.tsx



const offsetFromBalance = balance => {
  const percent = Math.abs(balance) / 100;
  const sprite = Math.floor(percent * 27);
  const offset = sprite * 15;
  return offset;
};

const MainBalance = props => react_default.a.createElement(components_Balance, {
  id: "balance",
  style: {
    backgroundPosition: `0 -${offsetFromBalance(props.balance)}px`
  }
});

const MainBalance_mapStateToProps = state => ({
  balance: state.media.balance
});

/* harmony default export */ var MainWindow_MainBalance = (connect_connect(MainBalance_mapStateToProps)(MainBalance));
// CONCATENATED MODULE: ./js/components/MainWindow/Close.tsx





const Close = (_ref) => {
  let onClick = _ref.onClick;
  return react_default.a.createElement(components_ClickedDiv, {
    id: "close",
    onClick: onClick,
    title: "Close"
  });
};

const Close_mapDispatchToProps = dispatch => {
  return {
    onClick: () => dispatch(actionCreators_close())
  };
};

/* harmony default export */ var MainWindow_Close = (connect_connect(null, Close_mapDispatchToProps)(Close));
// CONCATENATED MODULE: ./js/components/MainWindow/ClutterBar.tsx








const ClutterBar = props => react_default.a.createElement("div", {
  id: "clutter-bar"
}, react_default.a.createElement(components_ContextMenuTarget, {
  bottom: true,
  handle: react_default.a.createElement("div", {
    id: "button-o"
  })
}, react_default.a.createElement(components_OptionsContextMenu, null)), react_default.a.createElement("div", {
  id: "button-a"
}), react_default.a.createElement("div", {
  id: "button-i"
}), react_default.a.createElement("div", {
  title: "Toggle Doublesize Mode",
  id: "button-d",
  className: classnames_default()({
    selected: props.doubled
  }),
  onMouseUp: props.handleMouseUp,
  onMouseDown: props.handleMouseDown
}), react_default.a.createElement("div", {
  id: "button-v"
}));

const ClutterBar_mapStateToProps = state => ({
  doubled: state.display.doubled
});

const ClutterBar_mapDispatchToProps = dispatch => ({
  handleMouseDown: () => dispatch({
    type: SET_FOCUS,
    input: "double"
  }),
  handleMouseUp: () => {
    dispatch(toggleDoubleSizeMode());
    dispatch({
      type: UNSET_FOCUS
    });
  }
});

/* harmony default export */ var MainWindow_ClutterBar = (connect_connect(ClutterBar_mapStateToProps, ClutterBar_mapDispatchToProps)(ClutterBar));
// CONCATENATED MODULE: ./js/components/MainWindow/Eject.js




const Eject = props => react_default.a.createElement("div", {
  id: "eject",
  onClick: props.openMediaFileDialog,
  title: "Open File(s)"
});

const Eject_mapDispatchToProps = {
  openMediaFileDialog: openMediaFileDialog
};
/* harmony default export */ var MainWindow_Eject = (connect_connect(null, Eject_mapDispatchToProps)(Eject));
// CONCATENATED MODULE: ./js/components/MainWindow/EqToggleButton.js






const EqToggleButton = props => react_default.a.createElement("div", {
  id: "equalizer-button",
  className: classnames_default()({
    selected: props.getWindowOpen("equalizer")
  }),
  onClick: props.handleClick,
  title: "Toggle Graphical Equalizer"
});

const EqToggleButton_mapStateToProps = state => ({
  getWindowOpen: getWindowOpen(state)
});

const EqToggleButton_mapDispatchToProps = {
  handleClick: () => toggleWindow("equalizer")
};
/* harmony default export */ var MainWindow_EqToggleButton = (connect_connect(EqToggleButton_mapStateToProps, EqToggleButton_mapDispatchToProps)(EqToggleButton));
// CONCATENATED MODULE: ./js/components/MainWindow/PlaylistToggleButton.js






const PlaylistToggleButton = props => react_default.a.createElement("div", {
  id: "playlist-button",
  className: classnames_default()({
    selected: props.getWindowOpen("playlist")
  }),
  onClick: props.handleClick,
  title: "Toggle Playlist Editor"
});

const PlaylistToggleButton_mapStateToProps = state => ({
  getWindowOpen: getWindowOpen(state)
});

const PlaylistToggleButton_mapDispatchToProps = {
  handleClick: () => toggleWindow("playlist")
};
/* harmony default export */ var MainWindow_PlaylistToggleButton = (connect_connect(PlaylistToggleButton_mapStateToProps, PlaylistToggleButton_mapDispatchToProps)(PlaylistToggleButton));
// CONCATENATED MODULE: ./js/components/CharacterString.tsx



const CharacterString = props => {
  const text = `${props.children}` || "";
  const chars = text.split("");
  return react_default.a.createElement(react_default.a.Fragment, null, chars.map((character, index) => react_default.a.createElement(components_Character, {
    key: index + character
  }, character)));
};

/* harmony default export */ var components_CharacterString = (CharacterString);
// CONCATENATED MODULE: ./js/components/MainWindow/Kbps.tsx





const Kbps = props => react_default.a.createElement("div", {
  id: "kbps"
}, react_default.a.createElement(components_CharacterString, null, props.kbps || ""));

function Kbps_mapStateToProps(state) {
  return {
    kbps: getKbps(state)
  };
}

/* harmony default export */ var MainWindow_Kbps = (connect_connect(Kbps_mapStateToProps)(Kbps));
// CONCATENATED MODULE: ./js/components/MainWindow/Khz.tsx





const Khz = props => react_default.a.createElement("div", {
  id: "khz"
}, react_default.a.createElement(components_CharacterString, null, props.khz || ""));

function Khz_mapStateToProps(state) {
  return {
    khz: getKhz(state)
  };
}

/* harmony default export */ var MainWindow_Khz = (connect_connect(Khz_mapStateToProps)(Khz));
// CONCATENATED MODULE: ./js/components/MainWindow/Marquee.tsx

// Single line text display that can animate and hold multiple registers
// Knows how to display various modes like tracking, volume, balance, etc.





const CHAR_WIDTH = 5;
const MARQUEE_MAX_LENGTH = 31; // Always positive modulus

const mod = (n, m) => (n % m + m) % m;

const isLong = text => text.length >= MARQUEE_MAX_LENGTH; // Given text and step, how many pixels should it be shifted?


const stepOffset = (text, step, pixels) => {
  if (!isLong(text)) {
    return 0;
  }

  const stepOffsetWidth = step * CHAR_WIDTH; // Steps move one char at a time

  const offset = stepOffsetWidth + pixels;
  const stringLength = text.length * CHAR_WIDTH;
  return mod(offset, stringLength);
}; // Format an int as pixels

const pixelUnits = pixels => `${pixels}px`; // If text is wider than the marquee, it needs to loop

const loopText = text => isLong(text) ? text + text : text.padEnd(MARQUEE_MAX_LENGTH, " ");

class Marquee_Marquee extends react_default.a.Component {
  constructor(props) {
    super(props);

    defineProperty_default()(this, "stepHandle", void 0);

    defineProperty_default()(this, "handleMouseDown", e => {
      const xStart = e.clientX;
      this.setState({
        stepping: false
      });

      const handleMouseMove = ee => {
        const diff = ee.clientX - xStart;
        this.setState({
          dragOffset: -diff
        });
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove); // TODO: Remove this listener

        setTimeout(() => {
          this.setState({
            stepping: true
          });
        }, 1000);
        document.removeEventListener("mouseUp", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    });

    this.state = {
      stepping: true,
      dragOffset: 0
    };
    this.stepHandle = null;
  }

  componentDidMount() {
    this.stepHandle = setInterval(() => {
      if (this.state.stepping) {
        this.props.stepMarquee();
      }
    }, 220);
  }

  componentWillUnmount() {
    if (this.stepHandle) {
      clearTimeout(this.stepHandle);
    }
  }

  render() {
    const _this$props = this.props,
          text = _this$props.text,
          marqueeStep = _this$props.marqueeStep,
          doubled = _this$props.doubled;
    const offset = stepOffset(text, marqueeStep, this.state.dragOffset);
    const offsetPixels = pixelUnits(-offset);
    const style = {
      whiteSpace: "nowrap",
      willChange: "transform",
      transform: `translateX(${offsetPixels})`
    };
    return react_default.a.createElement("div", {
      id: "marquee",
      className: "text",
      onMouseDown: this.handleMouseDown,
      title: "Song Title"
    }, react_default.a.createElement("div", {
      style: style // Force the DOM node to be recreated when the doubled size changes.
      // This works around a Chrome browser bug where the `will-change: transform;`
      // on this node seems to cause a change to the `image-rendering:
      // pixelated;` which we inherit from `#webamp` not to be respected.
      ,
      key: doubled ? "doubled" : "not-doubled"
    }, react_default.a.createElement(components_CharacterString, null, loopText(text))));
  }

}

const Marquee_mapStateToProps = state => ({
  marqueeStep: state.display.marqueeStep,
  text: getMarqueeText(state),
  doubled: getDoubled(state)
});

const Marquee_mapDispatchToProps = dispatch => {
  return {
    stepMarquee: () => dispatch({
      type: STEP_MARQUEE
    })
  };
};

/* harmony default export */ var MainWindow_Marquee = (connect_connect(Marquee_mapStateToProps, Marquee_mapDispatchToProps)(Marquee_Marquee));
// CONCATENATED MODULE: ./js/components/MainWindow/MonoStereo.tsx





const MonoStereo = props => react_default.a.createElement("div", {
  className: "mono-stereo"
}, react_default.a.createElement("div", {
  id: "stereo",
  className: classnames_default()({
    selected: props.channels === 2
  })
}), react_default.a.createElement("div", {
  id: "mono",
  className: classnames_default()({
    selected: props.channels === 1
  })
}));

const MonoStereo_mapStateToProps = state => {
  return {
    channels: getChannels(state)
  };
};

/* harmony default export */ var MainWindow_MonoStereo = (connect_connect(MonoStereo_mapStateToProps)(MonoStereo));
// CONCATENATED MODULE: ./js/components/MainWindow/Position.tsx





const Position = (_ref) => {
  let position = _ref.position,
      seekToPercentComplete = _ref.seekToPercentComplete,
      displayedPosition = _ref.displayedPosition,
      setPosition = _ref.setPosition;
  // In shade mode, the position slider shows up differently depending on if
  // it's near the start, middle or end of its progress
  let className = "";

  if (position <= 33) {
    className = "left";
  } else if (position >= 66) {
    className = "right";
  }

  return react_default.a.createElement("input", {
    id: "position",
    className: className,
    type: "range",
    min: "0",
    max: "100",
    step: "1",
    value: displayedPosition,
    onInput: setPosition,
    onChange: () => {}
    /* React complains without this, can probably rename onInput to onChange */
    ,
    onMouseUp: seekToPercentComplete,
    onMouseDown: setPosition,
    title: "Seeking Bar"
  });
};

const Position_mapStateToProps = state => {
  const duration = getDuration(state);
  const timeElapsed = getTimeElapsed(state);
  const userInputFocus = getUserInputFocus(state);
  const scrubPosition = getUserInputScrubPosition(state);
  const position = duration ? Math.floor(timeElapsed) / duration * 100 : 0;
  const displayedPosition = userInputFocus === "position" ? scrubPosition : position;
  return {
    displayedPosition,
    position
  };
};

const Position_mapDispatchToProps = dispatch => ({
  seekToPercentComplete: e => {
    dispatch({
      type: SEEK_TO_PERCENT_COMPLETE,
      percent: Number(e.target.value)
    });
    dispatch({
      type: UNSET_FOCUS
    });
  },
  setPosition: e => {
    dispatch({
      type: SET_FOCUS,
      input: "position"
    });
    dispatch({
      type: SET_SCRUB_POSITION,
      position: Number(e.target.value)
    });
  }
});

/* harmony default export */ var MainWindow_Position = (connect_connect(Position_mapStateToProps, Position_mapDispatchToProps)(Position));
// CONCATENATED MODULE: ./js/components/MainWindow/Repeat.tsx







const Repeat = (_ref) => {
  let repeat = _ref.repeat,
      handleClick = _ref.handleClick;
  return react_default.a.createElement(ContextMenuWrapper_ContextMenuWraper, {
    renderContents: () => react_default.a.createElement(Node, {
      checked: repeat,
      label: "Repeat",
      onClick: handleClick,
      hotkey: "(R)"
    })
  }, react_default.a.createElement("div", {
    id: "repeat",
    className: classnames_default()({
      selected: repeat
    }),
    onClick: handleClick,
    title: "Toggle Repeat"
  }));
};

const Repeat_mapStateToProps = state => ({
  repeat: state.media.repeat
});

const Repeat_mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(toggleRepeat())
});

/* harmony default export */ var MainWindow_Repeat = (connect_connect(Repeat_mapStateToProps, Repeat_mapDispatchToProps)(Repeat));
// CONCATENATED MODULE: ./js/components/MainWindow/Shade.tsx





const Shade = props => react_default.a.createElement(components_ClickedDiv, {
  id: "shade",
  onMouseDown: props.handleClick,
  onDoubleClick: e => e.stopPropagation(),
  title: "Toggle Windowshade Mode"
});

const Shade_mapDispatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(toggleMainWindowShadeMode())
  };
};

/* harmony default export */ var MainWindow_Shade = (connect_connect(null, Shade_mapDispatchToProps)(Shade));
// CONCATENATED MODULE: ./js/components/MainWindow/Minimize.tsx





const Minimize = (_ref) => {
  let minimize = _ref.minimize;
  return react_default.a.createElement(components_ClickedDiv, {
    id: "minimize",
    title: "Minimize",
    onClick: minimize
  });
};

const Minimize_mapDispatchToProps = dispatch => ({
  minimize: () => dispatch(actionCreators_minimize())
});

/* harmony default export */ var MainWindow_Minimize = (connect_connect(null, Minimize_mapDispatchToProps)(Minimize));
// CONCATENATED MODULE: ./js/components/MainWindow/Shuffle.tsx







const Shuffle = (_ref) => {
  let shuffle = _ref.shuffle,
      handleClick = _ref.handleClick;
  return react_default.a.createElement(ContextMenuWrapper_ContextMenuWraper, {
    renderContents: () => react_default.a.createElement(Node, {
      checked: shuffle,
      label: "Shuffle",
      onClick: handleClick,
      hotkey: "(S)"
    })
  }, react_default.a.createElement("div", {
    id: "shuffle",
    className: classnames_default()({
      selected: shuffle
    }),
    onClick: handleClick,
    title: "Toggle Shuffle"
  }));
};

const Shuffle_mapStateToProps = state => ({
  shuffle: state.media.shuffle
});

const Shuffle_mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(toggleShuffle())
});

/* harmony default export */ var MainWindow_Shuffle = (connect_connect(Shuffle_mapStateToProps, Shuffle_mapDispatchToProps)(Shuffle));
// CONCATENATED MODULE: ./js/components/MainWindow/Time.tsx







const Time = (_ref) => {
  let timeElapsed = _ref.timeElapsed,
      duration = _ref.duration,
      timeMode = _ref.timeMode,
      toggleTimeMode = _ref.toggleTimeMode;
  const seconds = timeMode === TIME_MODE.ELAPSED ? timeElapsed : duration - timeElapsed;
  const timeObj = getTimeObj(seconds);
  return react_default.a.createElement("div", {
    id: "time",
    onClick: toggleTimeMode,
    className: "countdown"
  }, timeMode === TIME_MODE.REMAINING && react_default.a.createElement("div", {
    id: "minus-sign"
  }), react_default.a.createElement("div", {
    id: "minute-first-digit",
    className: `digit digit-${timeObj.minutesFirstDigit}`
  }), react_default.a.createElement("div", {
    id: "minute-second-digit",
    className: `digit digit-${timeObj.minutesSecondDigit}`
  }), react_default.a.createElement("div", {
    id: "second-first-digit",
    className: `digit digit-${timeObj.secondsFirstDigit}`
  }), react_default.a.createElement("div", {
    id: "second-second-digit",
    className: `digit digit-${timeObj.secondsSecondDigit}`
  }));
};

const Time_mapStateToProps = state => {
  const timeElapsed = getTimeElapsed(state);
  const duration = getDuration(state);
  const timeMode = state.media.timeMode;
  return {
    timeElapsed,
    duration: duration || 0,
    timeMode
  };
};

const Time_mapDispatchToProps = dispatch => ({
  toggleTimeMode: () => dispatch(media_toggleTimeMode())
});

/* harmony default export */ var MainWindow_Time = (connect_connect(Time_mapStateToProps, Time_mapDispatchToProps)(Time));
// CONCATENATED MODULE: ./js/components/Volume.tsx





const Volume = props => react_default.a.createElement("input", {
  id: props.id,
  type: "range",
  min: "0",
  max: "100",
  step: "1",
  value: props.volume,
  style: props.style,
  className: props.className,
  onChange: props.setVolume,
  onMouseDown: props.showMarquee,
  onMouseUp: props.hideMarquee,
  title: "Volume Bar"
});

const Volume_mapStateToProps = state => ({
  volume: getVolume(state)
});

const Volume_mapDispatchToProps = dispatch => ({
  showMarquee: () => dispatch(actionCreators_setFocus("volume")),
  hideMarquee: () => dispatch(unsetFocus()),
  setVolume: e => dispatch(setVolume(Number(e.target.value)))
});

/* harmony default export */ var components_Volume = (connect_connect(Volume_mapStateToProps, Volume_mapDispatchToProps)(Volume));
// CONCATENATED MODULE: ./js/components/MainWindow/MainVolume.tsx





const MainVolume = props => {
  const volume = props.volume;
  const percent = volume / 100;
  const sprite = Math.round(percent * 28);
  const offset = (sprite - 1) * 15;
  const style = {
    backgroundPosition: `0 -${offset}px`
  };
  return react_default.a.createElement("div", {
    id: "volume",
    style: style
  }, react_default.a.createElement(components_Volume, null));
};

const MainVolume_mapStateToProps = state => ({
  volume: getVolume(state)
});

/* harmony default export */ var MainWindow_MainVolume = (connect_connect(MainVolume_mapStateToProps)(MainVolume));
// EXTERNAL MODULE: ./css/main-window.css
var main_window = __webpack_require__(141);

// CONCATENATED MODULE: ./js/components/MainWindow/index.tsx

































class MainWindow_MainWindow extends react_default.a.Component {
  constructor() {
    super(...arguments);

    defineProperty_default()(this, "_handleClick", () => {
      this.props.setFocus();
    });

    defineProperty_default()(this, "_handleDrop", e => {
      this.props.loadFilesFromReferences(e.dataTransfer.files);
    });
  }

  render() {
    const _this$props = this.props,
          focused = _this$props.focused,
          loading = _this$props.loading,
          doubled = _this$props.doubled,
          mainShade = _this$props.mainShade,
          llama = _this$props.llama,
          status = _this$props.status,
          working = _this$props.working,
          filePickers = _this$props.filePickers;
    const className = classnames_default()({
      window: true,
      play: status === MEDIA_STATUS.PLAYING,
      stop: status === MEDIA_STATUS.STOPPED,
      pause: status === MEDIA_STATUS.PAUSED,
      selected: focused === WINDOWS.MAIN,
      shade: mainShade,
      draggable: true,
      loading,
      doubled,
      llama
    });
    return react_default.a.createElement(components_DropTarget, {
      id: "main-window",
      className: className,
      onMouseDown: this._handleClick,
      handleDrop: this._handleDrop,
      onWheel: this.props.scrollVolume
    }, react_default.a.createElement("div", {
      id: "title-bar",
      className: "selected draggable",
      onDoubleClick: this.props.toggleMainWindowShadeMode
    }, react_default.a.createElement(components_ContextMenuTarget, {
      id: "option-context",
      bottom: true,
      handle: react_default.a.createElement(components_ClickedDiv, {
        id: "option",
        title: "Winamp Menu"
      })
    }, react_default.a.createElement(MainWindow_MainContextMenu, {
      filePickers: filePickers
    })), mainShade && react_default.a.createElement(components_MiniTime, null), react_default.a.createElement(MainWindow_Minimize, null), react_default.a.createElement(MainWindow_Shade, null), react_default.a.createElement(MainWindow_Close, null)), react_default.a.createElement("div", {
      className: "status"
    }, react_default.a.createElement(MainWindow_ClutterBar, null), !working && react_default.a.createElement("div", {
      id: "play-pause"
    }), react_default.a.createElement("div", {
      id: "work-indicator",
      className: classnames_default()({
        selected: working
      })
    }), react_default.a.createElement(MainWindow_Time, null)), react_default.a.createElement(components_Visualizer // @ts-ignore Visualizer is not typed yet
    , {
      analyser: this.props.analyser
    }), react_default.a.createElement("div", {
      className: "media-info"
    }, react_default.a.createElement(MainWindow_Marquee, null), react_default.a.createElement(MainWindow_Kbps, null), react_default.a.createElement(MainWindow_Khz, null), react_default.a.createElement(MainWindow_MonoStereo, null)), react_default.a.createElement(MainWindow_MainVolume, null), react_default.a.createElement(MainWindow_MainBalance, null), react_default.a.createElement("div", {
      className: "windows"
    }, react_default.a.createElement(MainWindow_EqToggleButton, null), react_default.a.createElement(MainWindow_PlaylistToggleButton, null)), react_default.a.createElement(MainWindow_Position, null), react_default.a.createElement(MainWindow_ActionButtons, null), react_default.a.createElement(MainWindow_Eject, null), react_default.a.createElement("div", {
      className: "shuffle-repeat"
    }, react_default.a.createElement(MainWindow_Shuffle, null), react_default.a.createElement(MainWindow_Repeat, null)), react_default.a.createElement("a", {
      id: "about",
      target: "blank",
      href: "https://github.com/captbaritone/webamp",
      title: "About"
    }));
  }

}

const MainWindow_mapStateToProps = state => {
  const status = state.media.status,
        _state$display = state.display,
        loading = _state$display.loading,
        doubled = _state$display.doubled,
        llama = _state$display.llama,
        working = _state$display.working,
        focused = state.windows.focused;
  return {
    mainShade: Boolean(getWindowShade(state)("main")),
    status,
    loading,
    doubled,
    llama,
    working,
    focused
  };
};

const MainWindow_mapDispatchToProps = dispatch => {
  return {
    setFocus: () => dispatch({
      type: SET_FOCUSED_WINDOW,
      window: WINDOWS.MAIN
    }),
    loadFilesFromReferences: files => dispatch(loadFilesFromReferences(files)),
    toggleMainWindowShadeMode: () => dispatch(toggleMainWindowShadeMode()),
    scrollVolume: e => dispatch(scrollVolume(e))
  };
};

/* harmony default export */ var components_MainWindow = (connect_connect(MainWindow_mapStateToProps, MainWindow_mapDispatchToProps)(MainWindow_MainWindow));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/PlaylistResizeTarget.tsx





const PlaylistResizeTarget_mapStateToProps = state => ({
  currentSize: selectors_getWindowSize(state)("playlist"),
  id: "playlist-resize-target"
});

const PlaylistResizeTarget_mapDispatchToProps = dispatch => {
  return {
    setWindowSize: size => dispatch(windows_setWindowSize("playlist", size))
  };
};

/* harmony default export */ var PlaylistResizeTarget = (connect_connect(PlaylistResizeTarget_mapStateToProps, PlaylistResizeTarget_mapDispatchToProps)(ResizeTarget_ResizeTarget));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/PlaylistShade.tsx












class PlaylistShade_PlaylistShade extends react_default.a.Component {
  _addedWidth() {
    return this.props.playlistSize[0] * WINDOW_RESIZE_SEGMENT_WIDTH;
  }

  _trimmedName() {
    const name = this.props.name;

    if (name == null) {
      return "[No file]";
    }

    const MIN_NAME_WIDTH = 205;
    const nameLength = (MIN_NAME_WIDTH + this._addedWidth()) / CHARACTER_WIDTH;
    return name.length > nameLength ? name.slice(0, nameLength - 1) + UTF8_ELLIPSIS : name;
  }

  _time() {
    const _this$props = this.props,
          duration = _this$props.duration,
          name = _this$props.name;
    return name == null ? "" : getTimeStr(duration);
  }

  render() {
    const _this$props2 = this.props,
          toggleShade = _this$props2.toggleShade,
          close = _this$props2.close,
          focusPlaylist = _this$props2.focusPlaylist,
          focused = _this$props2.focused;
    const style = {
      width: `${WINDOW_WIDTH + this._addedWidth()}px`
    };
    const classes = classnames_default()("window", "draggable", {
      selected: focused === WINDOWS.PLAYLIST
    });
    return react_default.a.createElement("div", {
      id: "playlist-window-shade",
      className: classes,
      style: {
        width: style.width
      },
      onMouseDown: focusPlaylist,
      onDoubleClick: toggleShade
    }, react_default.a.createElement("div", {
      className: "left"
    }, react_default.a.createElement("div", {
      className: "right draggable"
    }, react_default.a.createElement("div", {
      id: "playlist-shade-track-title"
    }, react_default.a.createElement(components_CharacterString, null, this._trimmedName())), react_default.a.createElement("div", {
      id: "playlist-shade-time"
    }, react_default.a.createElement(components_CharacterString, null, this._time())), react_default.a.createElement(PlaylistResizeTarget, {
      widthOnly: true
    }), react_default.a.createElement("div", {
      id: "playlist-shade-button",
      onClick: toggleShade
    }), react_default.a.createElement("div", {
      id: "playlist-close-button",
      onClick: close
    }))));
  }

}

const PlaylistShade_mapDispatchToProps = dispatch => {
  return {
    focusPlaylist: () => dispatch({
      type: SET_FOCUSED_WINDOW,
      window: WINDOWS.PLAYLIST
    }),
    close: () => dispatch(closeWindow("playlist")),
    toggleShade: () => dispatch(togglePlaylistShadeMode())
  };
};

const PlaylistShade_mapStateToProps = state => {
  const duration = getDuration(state);
  const focused = state.windows.focused;
  return {
    focused,
    playlistSize: selectors_getWindowSize(state)("playlist"),
    trackOrder: getOrderedTracks(state),
    duration,
    name: getMinimalMediaText(state)
  };
};

/* harmony default export */ var PlaylistWindow_PlaylistShade = (connect_connect(PlaylistShade_mapStateToProps, PlaylistShade_mapDispatchToProps)(PlaylistShade_PlaylistShade));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/PlaylistMenuEntry.tsx



let cursorX;
let cursorY;
window.document.addEventListener("mousemove", e => {
  cursorX = e.pageX;
  cursorY = e.pageY;
}); // We implement hover ourselves, because we hate ourselves and https://stackoverflow.com/a/13259049/1263117

class PlaylistMenuEntry_PlaylistMenuEntry extends react_default.a.Component {
  constructor(props) {
    super(props);

    defineProperty_default()(this, "node", void 0);

    this.state = {
      hover: false
    };
  }

  componentDidMount() {
    if (this.node == null) {
      return;
    }

    const domRect = this.node.getBoundingClientRect();
    this.setState({
      hover: cursorX >= domRect.left && cursorX <= domRect.right && cursorY >= domRect.top && cursorY <= domRect.bottom
    });
  }

  render() {
    return react_default.a.createElement("li", {
      ref: node => this.node = node,
      onMouseEnter: () => this.setState({
        hover: true
      }),
      onMouseLeave: () => this.setState({
        hover: false
      }),
      className: classnames_default()({
        hover: this.state.hover
      })
    }, this.props.children);
  }

}
// CONCATENATED MODULE: ./js/components/PlaylistWindow/PlaylistMenu.tsx




class PlaylistMenu_PlaylistMenu extends react_default.a.Component {
  constructor(props) {
    super(props);

    defineProperty_default()(this, "_handleClick", e => {
      const target = e.target;

      if (!(target instanceof Element)) {
        // TypeScript doesn't realize this will always be true
        return;
      }

      const selected = this.state.selected;

      if (selected) {
        this.setState({
          selected: false
        });
        return;
      }

      const handleClickOut = ee => {
        const clickOutTarget = ee.target;

        if (!(clickOutTarget instanceof Element)) {
          // TypeScript doesn't realize this will always be true
          return;
        } // If the click is _not_ inside the menu.


        if (!target.contains(clickOutTarget)) {
          // If we've clicked on a Context Menu spawed inside this menu, it will
          // register as an external click. However, hiding the menu will remove
          // the Context Menu from the DOM. Therefore, we wait until the next
          // event loop to actually hide ourselves.
          setTimeout(() => {
            // Close the menu
            this.setState({
              selected: false
            });
          }, 0);
          window.document.removeEventListener("click", handleClickOut, {
            capture: true
          });
        }
      };

      window.document.addEventListener("click", handleClickOut, {
        capture: true
      });
      this.setState({
        selected: true
      });
    });

    this.state = {
      selected: false
    };
  }

  render() {
    return react_default.a.createElement("div", {
      id: this.props.id,
      className: classnames_default()("playlist-menu", {
        selected: this.state.selected
      }),
      onClick: this._handleClick
    }, react_default.a.createElement("div", {
      className: "bar"
    }), this.state.selected && react_default.a.createElement("ul", null, react_default.a.Children.map(this.props.children, (child, i) => react_default.a.createElement(PlaylistMenuEntry_PlaylistMenuEntry, {
      key: i
    }, child))));
  }

}
// CONCATENATED MODULE: ./js/components/PlaylistWindow/AddMenu.tsx







const el = document.createElement("input");
el.type = "file"; // @ts-ingore

const DIR_SUPPORT = // @ts-ignore
typeof el.webkitdirectory !== "undefined" || // @ts-ignore
typeof el.mozdirectory !== "undefined" || // @ts-ignore
typeof el.directory !== "undefined";
/* eslint-disable no-alert */

const AddMenu = (_ref) => {
  let nextIndex = _ref.nextIndex,
      addFilesAtIndex = _ref.addFilesAtIndex,
      addDirAtIndex = _ref.addDirAtIndex;
  return react_default.a.createElement(PlaylistMenu_PlaylistMenu, {
    id: "playlist-add-menu"
  }, react_default.a.createElement("div", {
    className: "add-url",
    onClick: () => alert("Not supported in Webamp")
  }), react_default.a.createElement("div", {
    className: "add-dir",
    onClick: () => addDirAtIndex(nextIndex)
  }), react_default.a.createElement("div", {
    className: "add-file",
    onClick: () => addFilesAtIndex(nextIndex)
  }));
};

const AddMenu_mapStateToProps = state => ({
  nextIndex: getTrackCount(state)
});

const AddMenu_mapDispatchToProps = dispatch => ({
  addFilesAtIndex: async nextIndex => {
    const fileReferences = await promptForFileReferences();
    dispatch(addTracksFromReferences(fileReferences, LOAD_STYLE.NONE, nextIndex));
  },
  addDirAtIndex: async nextIndex => {
    if (!DIR_SUPPORT) {
      alert("Not supported in your browser");
      return;
    }

    const fileReferences = await promptForFileReferences({
      directory: true
    });
    dispatch(addTracksFromReferences(fileReferences, LOAD_STYLE.NONE, nextIndex));
  }
});

/* harmony default export */ var PlaylistWindow_AddMenu = (connect_connect(AddMenu_mapStateToProps, AddMenu_mapDispatchToProps)(AddMenu));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/RemoveMenu.tsx





const RemoveMenu = props => react_default.a.createElement(PlaylistMenu_PlaylistMenu, {
  id: "playlist-remove-menu"
}, react_default.a.createElement("div", {
  className: "remove-misc",
  onClick: () => alert("Not supported in Webamp")
}), react_default.a.createElement("div", {
  className: "remove-all",
  onClick: props.removeAll
}), react_default.a.createElement("div", {
  className: "crop",
  onClick: props.crop
}), react_default.a.createElement("div", {
  className: "remove-selected",
  onClick: props.removeSelected
}));

const RemoveMenu_mapDispatchToProps = dispatch => {
  return {
    removeSelected: () => dispatch(removeSelectedTracks()),
    removeAll: () => dispatch(removeAllTracks()),
    crop: () => dispatch(cropPlaylist())
  };
};

/* harmony default export */ var PlaylistWindow_RemoveMenu = (connect_connect(() => ({}), RemoveMenu_mapDispatchToProps)(RemoveMenu));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/SelectionMenu.tsx





const SelectionMenu = props => react_default.a.createElement(PlaylistMenu_PlaylistMenu, {
  id: "playlist-selection-menu"
}, react_default.a.createElement("div", {
  className: "invert-selection",
  onClick: props.invertSelection
}), react_default.a.createElement("div", {
  className: "select-zero",
  onClick: props.selectZero
}), react_default.a.createElement("div", {
  className: "select-all",
  onClick: props.selectAll
}));

const SelectionMenu_mapDispatchToProps = dispatch => {
  return {
    invertSelection: () => dispatch({
      type: INVERT_SELECTION
    }),
    selectAll: () => dispatch({
      type: SELECT_ALL
    }),
    selectZero: () => dispatch({
      type: SELECT_ZERO
    })
  };
};

/* harmony default export */ var PlaylistWindow_SelectionMenu = (connect_connect(null, SelectionMenu_mapDispatchToProps)(SelectionMenu));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/SortContextMenu.tsx






/* eslint-disable no-alert */

/* TODO: This should really be kitty-corner to the upper right hand corner of the MiscMenu */
const SortContextMenu = props => react_default.a.createElement(components_ContextMenuTarget, {
  style: {
    width: "100%",
    height: "100%"
  },
  top: true,
  handle: react_default.a.createElement("div", null)
}, react_default.a.createElement(Node, {
  label: "Sort list by title",
  onClick: props.sortListByTitle
}), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(Node, {
  label: "Reverse list",
  onClick: props.reverseList
}), react_default.a.createElement(Node, {
  label: "Randomize list",
  onClick: props.randomizeList
}));

const SortContextMenu_mapDispatchToProps = dispatch => {
  return {
    reverseList: () => dispatch(reverseList()),
    randomizeList: () => dispatch(randomizeList()),
    sortListByTitle: () => dispatch(sortListByTitle())
  };
};

/* harmony default export */ var PlaylistWindow_SortContextMenu = (connect_connect(null, SortContextMenu_mapDispatchToProps)(SortContextMenu));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/MiscOptionsContextMenu.tsx






const MiscOptionsContextMenu = props => react_default.a.createElement(components_ContextMenuTarget, {
  style: {
    width: "100%",
    height: "100%"
  },
  top: true,
  handle: react_default.a.createElement("div", null)
}, react_default.a.createElement(Node, {
  onClick: props.downloadHtmlPlaylist,
  label: "Generate HTML playlist"
}));

const MiscOptionsContextMenu_mapDispatchToProps = dispatch => {
  return {
    downloadHtmlPlaylist: () => dispatch(downloadHtmlPlaylist())
  };
};

const ConnectedMiscOptionsContextMenu = connect_connect(null, MiscOptionsContextMenu_mapDispatchToProps)(MiscOptionsContextMenu);
// CONCATENATED MODULE: ./js/components/PlaylistWindow/MiscMenu.tsx





const MiscMenu = () => react_default.a.createElement(PlaylistMenu_PlaylistMenu, {
  id: "playlist-misc-menu"
}, react_default.a.createElement("div", {
  className: "sort-list",
  onClick: e => e.stopPropagation()
}, react_default.a.createElement(PlaylistWindow_SortContextMenu, null)), react_default.a.createElement("div", {
  className: "file-info",
  onClick: () => alert("Not supported in Webamp")
}), react_default.a.createElement("div", {
  className: "misc-options",
  onClick: e => e.stopPropagation()
}, react_default.a.createElement(ConnectedMiscOptionsContextMenu, null)));

/* harmony default export */ var PlaylistWindow_MiscMenu = (MiscMenu);
// CONCATENATED MODULE: ./js/components/PlaylistWindow/ListMenu.tsx





const ListMenu = props => react_default.a.createElement(PlaylistMenu_PlaylistMenu, {
  id: "playlist-list-menu"
}, react_default.a.createElement("div", {
  className: "new-list",
  onClick: props.removeAllTracks
}), react_default.a.createElement("div", {
  className: "save-list",
  onClick: () => alert("Not supported in Webamp")
}), react_default.a.createElement("div", {
  className: "load-list",
  onClick: () => alert("Not supported in Webamp")
}));

const ListMenu_mapDispatchToProps = dispatch => {
  return {
    removeAllTracks: removeAllTracks
  };
};

/* harmony default export */ var PlaylistWindow_ListMenu = (connect_connect(null, ListMenu_mapDispatchToProps)(ListMenu));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/RunningTimeDisplay.tsx





// While all the browsers I care about support String.prototype.padEnd,
// Not all node versions do, and I want tests to pass in Jest...
// Sigh.
function rightPad(str, len, fillChar) {
  while (str.length < len) {
    str += fillChar;
  }

  return str;
}

const RunningTimeDisplay = props => react_default.a.createElement("div", {
  className: "playlist-running-time-display draggable"
}, react_default.a.createElement("div", null, react_default.a.createElement(components_CharacterString, null, rightPad(props.runningTimeMessage, 18, " "))));

const RunningTimeDisplay_mapStateToProps = state => ({
  runningTimeMessage: getRunningTimeMessage(state)
});

/* harmony default export */ var PlaylistWindow_RunningTimeDisplay = (connect_connect(RunningTimeDisplay_mapStateToProps)(RunningTimeDisplay));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/PlaylistActionArea.tsx






const PlaylistActionArea_PlaylistWindow = props => react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(PlaylistWindow_RunningTimeDisplay, null), react_default.a.createElement("div", {
  className: "playlist-action-buttons"
}, react_default.a.createElement("div", {
  className: "playlist-previous-button",
  onClick: props.previous
}), react_default.a.createElement("div", {
  className: "playlist-play-button",
  onClick: props.play
}), react_default.a.createElement("div", {
  className: "playlist-pause-button",
  onClick: props.pause
}), react_default.a.createElement("div", {
  className: "playlist-stop-button",
  onClick: props.stop
}), react_default.a.createElement("div", {
  className: "playlist-next-button",
  onClick: props.next
}), react_default.a.createElement("div", {
  className: "playlist-eject-button",
  onClick: props.openMediaFileDialog
})), react_default.a.createElement(components_MiniTime, null));

const PlaylistActionArea_mapDispatchToProps = dispatch => {
  return {
    play: () => dispatch(play()),
    pause: () => dispatch(pause()),
    stop: () => dispatch(stop()),
    openMediaFileDialog: () => dispatch(openMediaFileDialog()),
    next: () => dispatch(media_next()),
    previous: () => dispatch(media_previous())
  };
};

/* harmony default export */ var PlaylistActionArea = (connect_connect(null, PlaylistActionArea_mapDispatchToProps)(PlaylistActionArea_PlaylistWindow));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/TrackCell.tsx







class TrackCell_TrackCell extends react_default.a.Component {
  constructor() {
    super(...arguments);

    defineProperty_default()(this, "_onMouseDown", e => {
      if (e.shiftKey) {
        this.props.shiftClick(e);
        return;
      } else if (e.metaKey || e.ctrlKey) {
        this.props.ctrlClick(e);
        return;
      }

      if (!this.props.selected) {
        this.props.click();
      }

      this.props.handleMoveClick(e);
    });
  }

  render() {
    const _this$props = this.props,
          skinPlaylistStyle = _this$props.skinPlaylistStyle,
          selected = _this$props.selected,
          current = _this$props.current,
          children = _this$props.children,
          onDoubleClick = _this$props.onDoubleClick;
    const style = {
      backgroundColor: selected ? skinPlaylistStyle.selectedbg : undefined,
      color: current ? skinPlaylistStyle.current : undefined
    };
    return react_default.a.createElement("div", {
      className: classnames_default()("track-cell", {
        selected,
        current
      }),
      style: style,
      onClick: e => e.stopPropagation(),
      onMouseDown: this._onMouseDown,
      onContextMenu: e => e.preventDefault(),
      onDoubleClick: onDoubleClick
    }, children);
  }

}

const TrackCell_mapStateToProps = (state, ownProps) => {
  return {
    skinPlaylistStyle: getSkinPlaylistStyle(state),
    selected: getSelectedTrackIds(state).has(ownProps.id),
    current: getCurrentTrackId(state) === ownProps.id
  };
};

const TrackCell_mapDispatchToProps = (dispatch, ownProps) => ({
  shiftClick: e => {
    e.preventDefault();
    return dispatch({
      type: SHIFT_CLICKED_TRACK,
      index: ownProps.index
    });
  },
  ctrlClick: e => {
    e.preventDefault();
    return dispatch({
      type: CTRL_CLICKED_TRACK,
      index: ownProps.index
    });
  },
  click: () => dispatch({
    type: CLICKED_TRACK,
    index: ownProps.index
  }),
  onDoubleClick: () => dispatch({
    type: PLAY_TRACK,
    id: ownProps.id
  })
});

/* harmony default export */ var PlaylistWindow_TrackCell = (connect_connect(TrackCell_mapStateToProps, TrackCell_mapDispatchToProps)(TrackCell_TrackCell));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/TrackTitle.tsx




const TrackTitle = props => react_default.a.createElement("span", null, props.paddedTrackNumber, ". ", props.title);

const TrackTitle_mapStateToProps = (state, ownProps) => ({
  title: selectors_getTrackDisplayName(state)(ownProps.id)
});

/* harmony default export */ var PlaylistWindow_TrackTitle = (connect_connect(TrackTitle_mapStateToProps)(TrackTitle));
// CONCATENATED MODULE: ./js/components/PlaylistWindow/TrackList.tsx











function getNumberLength(number) {
  return number.toString().length;
}

class TrackList_TrackList extends react_default.a.Component {
  constructor() {
    super(...arguments);

    defineProperty_default()(this, "_node", void 0);

    defineProperty_default()(this, "_handleMoveClick", e => {
      if (!this._node) {
        return;
      }

      const _this$_node$getBoundi = this._node.getBoundingClientRect(),
            top = _this$_node$getBoundi.top,
            bottom = _this$_node$getBoundi.bottom,
            left = _this$_node$getBoundi.left,
            right = _this$_node$getBoundi.right;

      const mouseStart = e.clientY;
      let lastDiff = 0;

      const handleMouseMove = ee => {
        const y = ee.clientY,
              x = ee.clientX;

        if (y < top || y > bottom || x < left || x > right) {
          // Mouse is outside the track list
          return;
        }

        const proposedDiff = Math.floor((y - mouseStart) / TRACK_HEIGHT);

        if (proposedDiff !== lastDiff) {
          const diffDiff = proposedDiff - lastDiff;
          this.props.dragSelected(diffDiff);
          lastDiff = proposedDiff;
        }
      };

      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", handleMouseMove);
      });
      window.addEventListener("mousemove", handleMouseMove);
    });
  }

  _renderTracks(format) {
    return this.props.trackIds.map((id, i) => react_default.a.createElement(PlaylistWindow_TrackCell, {
      key: id,
      id: id,
      index: this.props.offset + i,
      handleMoveClick: this._handleMoveClick
    }, format(id, i)));
  }

  render() {
    const _this$props = this.props,
          tracks = _this$props.tracks,
          offset = _this$props.offset;
    const maxTrackNumberLength = getNumberLength(this.props.numberOfTracks);

    const paddedTrackNumForIndex = i => (i + 1 + offset).toString().padStart(maxTrackNumberLength, "\u00A0");

    return react_default.a.createElement("div", {
      ref: node => {
        this._node = node;
      },
      className: "playlist-tracks",
      style: {
        height: "100%"
      },
      onClick: this.props.selectZero,
      onWheel: this.props.scrollPlaylistByDelta
    }, react_default.a.createElement("div", {
      className: "playlist-track-titles"
    }, this._renderTracks((id, i) => react_default.a.createElement(PlaylistWindow_TrackTitle, {
      id: id,
      paddedTrackNumber: paddedTrackNumForIndex(i)
    }))), react_default.a.createElement("div", {
      className: "playlist-track-durations"
    }, this._renderTracks(id => getTimeStr(tracks[id].duration))));
  }

}

const TrackList_mapDispatchToProps = dispatch => ({
  selectZero: () => dispatch({
    type: SELECT_ZERO
  }),
  dragSelected: offset => dispatch(dragSelected(offset)),
  scrollPlaylistByDelta: e => dispatch(scrollPlaylistByDelta(e))
});

const TrackList_mapStateToProps = state => ({
  offset: getScrollOffset(state),
  trackIds: getVisibleTrackIds(state),
  tracks: getTracks(state),
  numberOfTracks: getNumberOfTracks(state)
});

/* harmony default export */ var PlaylistWindow_TrackList = (connect_connect(TrackList_mapStateToProps, TrackList_mapDispatchToProps)(TrackList_TrackList));
// EXTERNAL MODULE: ./node_modules/rc-slider/lib/Slider.js
var Slider = __webpack_require__(43);
var Slider_default = /*#__PURE__*/__webpack_require__.n(Slider);

// CONCATENATED MODULE: ./js/components/PlaylistWindow/ScrollBar.tsx

 // Here we import the rc-slider class just to get it's type.
// We expect the Typescript compiler to not actually include this in the bundle.

// @ts-ignore
 // Here we inform TypeScript to use the default export's type for our partial import.

const ScrollBar_Slider = Slider_default.a;



const Handle = () => react_default.a.createElement("div", {
  className: "playlist-scrollbar-handle"
});

const ScrollBar = props => react_default.a.createElement(ScrollBar_Slider, {
  className: "playlist-scrollbar",
  min: 0,
  max: 100,
  step: 1,
  value: props.playlistScrollPosition,
  onChange: props.setPlaylistScrollPosition,
  vertical: true,
  handle: Handle,
  disabled: props.allTracksAreVisible
});

const ScrollBar_mapDispatchToProps = dispatch => {
  return {
    setPlaylistScrollPosition: position => dispatch(setPlaylistScrollPosition(100 - position))
  };
};

const ScrollBar_mapStateToProps = state => ({
  playlistScrollPosition: getPlaylistScrollPosition(state),
  allTracksAreVisible: getVisibleTrackIds(state).length === state.playlist.trackOrder.length
});

/* harmony default export */ var PlaylistWindow_ScrollBar = (connect_connect(ScrollBar_mapStateToProps, ScrollBar_mapDispatchToProps)(ScrollBar));
// EXTERNAL MODULE: ./css/playlist-window.css
var playlist_window = __webpack_require__(190);

// CONCATENATED MODULE: ./js/components/PlaylistWindow/index.tsx
























class PlaylistWindow_PlaylistWindow extends react_default.a.Component {
  constructor() {
    super(...arguments);

    defineProperty_default()(this, "_handleDrop", (e, targetCoords) => {
      const top = e.clientY - targetCoords.y;
      const atIndex = clamp(this.props.offset + Math.round((top - 23) / TRACK_HEIGHT), 0, this.props.maxTrackIndex + 1);
      this.props.loadFilesFromReferences(e, atIndex);
    });
  }

  render() {
    const _this$props = this.props,
          skinPlaylistStyle = _this$props.skinPlaylistStyle,
          focusPlaylist = _this$props.focusPlaylist,
          selected = _this$props.selected,
          playlistSize = _this$props.playlistSize,
          playlistWindowPixelSize = _this$props.playlistWindowPixelSize,
          playlistShade = _this$props.playlistShade,
          close = _this$props.close,
          toggleShade = _this$props.toggleShade,
          analyser = _this$props.analyser,
          showVisualizer = _this$props.showVisualizer,
          activateVisualizer = _this$props.activateVisualizer;

    if (playlistShade) {
      return react_default.a.createElement(PlaylistWindow_PlaylistShade, null);
    }

    const style = {
      color: skinPlaylistStyle.normal,
      backgroundColor: skinPlaylistStyle.normalbg,
      fontFamily: `${skinPlaylistStyle.font}, Arial, sans-serif`,
      height: `${playlistWindowPixelSize.height}px`,
      width: `${playlistWindowPixelSize.width}px`
    };
    const classes = classnames_default()("window", "draggable", {
      selected
    });
    const showSpacers = playlistSize[0] % 2 === 0;
    return react_default.a.createElement(components_DropTarget, {
      id: "playlist-window",
      className: classes,
      style: style,
      onMouseDown: focusPlaylist,
      handleDrop: this._handleDrop,
      onWheel: this.props.scrollVolume
    }, react_default.a.createElement("div", {
      className: "playlist-top draggable",
      onDoubleClick: toggleShade
    }, react_default.a.createElement("div", {
      className: "playlist-top-left draggable"
    }), showSpacers && react_default.a.createElement("div", {
      className: "playlist-top-left-spacer draggable"
    }), react_default.a.createElement("div", {
      className: "playlist-top-left-fill draggable"
    }), react_default.a.createElement("div", {
      className: "playlist-top-title draggable"
    }), showSpacers && react_default.a.createElement("div", {
      className: "playlist-top-right-spacer draggable"
    }), react_default.a.createElement("div", {
      className: "playlist-top-right-fill draggable"
    }), react_default.a.createElement("div", {
      className: "playlist-top-right draggable"
    }, react_default.a.createElement("div", {
      id: "playlist-shade-button",
      onClick: toggleShade
    }), react_default.a.createElement("div", {
      id: "playlist-close-button",
      onClick: close
    }))), react_default.a.createElement("div", {
      className: "playlist-middle draggable"
    }, react_default.a.createElement("div", {
      className: "playlist-middle-left draggable"
    }), react_default.a.createElement("div", {
      className: "playlist-middle-center"
    }, react_default.a.createElement(PlaylistWindow_TrackList, null)), react_default.a.createElement("div", {
      className: "playlist-middle-right draggable"
    }, react_default.a.createElement(PlaylistWindow_ScrollBar, null))), react_default.a.createElement("div", {
      className: "playlist-bottom draggable"
    }, react_default.a.createElement("div", {
      className: "playlist-bottom-left draggable"
    }, react_default.a.createElement(PlaylistWindow_AddMenu, null), react_default.a.createElement(PlaylistWindow_RemoveMenu, null), react_default.a.createElement(PlaylistWindow_SelectionMenu, null), react_default.a.createElement(PlaylistWindow_MiscMenu, null)), react_default.a.createElement("div", {
      className: "playlist-bottom-center draggable"
    }), react_default.a.createElement("div", {
      className: "playlist-bottom-right draggable"
    }, showVisualizer && react_default.a.createElement("div", {
      className: "playlist-visualizer"
    }, activateVisualizer && react_default.a.createElement("div", {
      className: "visualizer-wrapper"
    }, react_default.a.createElement(components_Visualizer // @ts-ignore Visualizer is not yet typed
    , {
      analyser: analyser
    }))), react_default.a.createElement(PlaylistActionArea, null), react_default.a.createElement(PlaylistWindow_ListMenu, null), react_default.a.createElement("div", {
      id: "playlist-scroll-up-button",
      onClick: this.props.scrollUpFourTracks
    }), react_default.a.createElement("div", {
      id: "playlist-scroll-down-button",
      onClick: this.props.scrollDownFourTracks
    }), react_default.a.createElement(PlaylistResizeTarget, null))));
  }

}

const PlaylistWindow_mapDispatchToProps = dispatch => {
  return {
    focusPlaylist: () => dispatch({
      type: SET_FOCUSED_WINDOW,
      window: WINDOWS.PLAYLIST
    }),
    close: () => dispatch(closeWindow(WINDOWS.PLAYLIST)),
    toggleShade: () => dispatch(togglePlaylistShadeMode()),
    scrollUpFourTracks: () => dispatch(scrollUpFourTracks()),
    scrollDownFourTracks: () => dispatch(scrollDownFourTracks()),
    loadFilesFromReferences: (e, startIndex) => dispatch(loadFilesFromReferences(e.dataTransfer.files, LOAD_STYLE.NONE, startIndex)),
    scrollVolume: e => dispatch(scrollVolume(e))
  };
};

const PlaylistWindow_mapStateToProps = state => {
  const trackOrder = state.playlist.trackOrder;
  const playlistSize = selectors_getWindowSize(state)(WINDOWS.PLAYLIST);
  return {
    offset: getScrollOffset(state),
    maxTrackIndex: trackOrder.length - 1,
    playlistWindowPixelSize: getWindowPixelSize(state)(WINDOWS.PLAYLIST),
    showVisualizer: playlistSize[0] > 2,
    activateVisualizer: !getWindowOpen(state)(WINDOWS.MAIN),
    playlistSize,
    selected: getFocusedWindow(state) === WINDOWS.PLAYLIST,
    skinPlaylistStyle: getSkinPlaylistStyle(state),
    playlistShade: Boolean(getWindowShade(state)(WINDOWS.PLAYLIST)),
    duration: getDuration(state)
  };
};

/* harmony default export */ var components_PlaylistWindow = (connect_connect(PlaylistWindow_mapStateToProps, PlaylistWindow_mapDispatchToProps)(PlaylistWindow_PlaylistWindow));
// CONCATENATED MODULE: ./js/components/EqualizerWindow/Band.js




const MAX_VALUE = 100; // Given a value between 1-100, return the sprite number (0-27)

const spriteNumber = value => {
  const percent = value / 100;
  return Math.round(percent * 27);
}; // Given a sprite number, return the x,y

const spriteOffsets = number => {
  const x = number % 14;
  const y = Math.floor(number / 14);
  return {
    x,
    y
  };
};

const Band_Handle = () => react_default.a.createElement("div", {
  className: "rc-slider-handle"
});

const Band = (_ref) => {
  let value = _ref.value,
      backgroundPosition = _ref.backgroundPosition,
      id = _ref.id,
      onChange = _ref.onChange,
      handleMouseDown = _ref.handleMouseDown,
      handleMouseUp = _ref.handleMouseUp;
  return react_default.a.createElement("div", {
    id: id,
    className: "band",
    style: {
      backgroundPosition
    }
  }, react_default.a.createElement(Slider_default.a, {
    type: "range",
    min: 0,
    max: MAX_VALUE,
    step: 1,
    value: MAX_VALUE - value,
    vertical: true,
    onChange: onChange,
    onBeforeChange: handleMouseDown,
    onAfterChange: handleMouseUp,
    handle: Band_Handle
  }));
};

const Band_mapStateToProps = (state, ownProps) => {
  const value = state.equalizer.sliders[ownProps.band];

  const _spriteOffsets = spriteOffsets(spriteNumber(value)),
        x = _spriteOffsets.x,
        y = _spriteOffsets.y;

  const xOffset = x * 15; // Each sprite is 15px wide

  const yOffset = y * 65; // Each sprite is 15px tall

  const backgroundPosition = `-${xOffset}px -${yOffset}px`;
  return {
    id: ownProps.id,
    value,
    backgroundPosition
  };
};

const Band_mapDispatchToProps = (dispatch, ownProps) => ({
  handleMouseDown: () => dispatch({
    type: SET_BAND_FOCUS,
    input: "eq",
    bandFocused: ownProps.band
  }),
  handleMouseUp: () => dispatch({
    type: UNSET_FOCUS
  })
});

/* harmony default export */ var EqualizerWindow_Band = (connect_connect(Band_mapStateToProps, Band_mapDispatchToProps)(Band));
// CONCATENATED MODULE: ./js/components/EqualizerWindow/EqOn.tsx





const EqOn = props => {
  return react_default.a.createElement("div", {
    id: "on",
    className: classnames_default()({
      selected: props.on
    }),
    onClick: props.toggleEq
  });
};

const EqOn_mapStateToProps = state => ({
  on: state.equalizer.on
});

const mapDispatchProps = dispatch => {
  return {
    toggleEq: () => dispatch(toggleEq())
  };
};

/* harmony default export */ var EqualizerWindow_EqOn = (connect_connect(EqOn_mapStateToProps, mapDispatchProps)(EqOn));
// CONCATENATED MODULE: ./js/components/EqualizerWindow/EqAuto.tsx





const EqAuto = props => {
  const className = classnames_default()({
    selected: props.auto
  });
  return react_default.a.createElement("div", {
    id: "auto",
    className: className,
    onClick: props.toggleAuto
  });
};

const EqAuto_mapStateToProps = state => {
  return {
    auto: state.equalizer.auto
  };
};

const EqAuto_mapDispatchToProps = () => dispatch => {
  // We don't support auto.
  return {
    toggleAuto: () => dispatch({
      type: SET_EQ_AUTO,
      value: false
    })
  };
};

/* harmony default export */ var EqualizerWindow_EqAuto = (connect_connect(EqAuto_mapStateToProps, EqAuto_mapDispatchToProps)(EqAuto));
// CONCATENATED MODULE: ./js/components/EqualizerWindow/spline.js
// Adapted from https://github.com/morganherlocker/cubic-spline
function spline(xs, ys) {
  const ks = getNaturalKs(xs, ys);
  const maxX = xs[xs.length - 1];
  const allYs = [];
  let i = 1;

  for (let x = 0; x <= maxX; x++) {
    while (xs[i] < x) i++;

    const t = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
    const a = ks[i - 1] * (xs[i] - xs[i - 1]) - (ys[i] - ys[i - 1]);
    const b = -ks[i] * (xs[i] - xs[i - 1]) + (ys[i] - ys[i - 1]);
    const q = (1 - t) * ys[i - 1] + t * ys[i] + t * (1 - t) * (a * (1 - t) + b * t);
    allYs.push(q);
  }

  return allYs;
}

function getNaturalKs(xs, ys) {
  const ks = xs.map(() => 0);
  const n = xs.length - 1;
  const matrix = zerosMatrix(n + 1, n + 2);

  for (let i = 1; i < n; i++ // rows
  ) {
    matrix[i][i - 1] = 1 / (xs[i] - xs[i - 1]);
    matrix[i][i] = 2 * (1 / (xs[i] - xs[i - 1]) + 1 / (xs[i + 1] - xs[i]));
    matrix[i][i + 1] = 1 / (xs[i + 1] - xs[i]);
    matrix[i][n + 1] = 3 * ((ys[i] - ys[i - 1]) / ((xs[i] - xs[i - 1]) * (xs[i] - xs[i - 1])) + (ys[i + 1] - ys[i]) / ((xs[i + 1] - xs[i]) * (xs[i + 1] - xs[i])));
  }

  matrix[0][0] = 2 / (xs[1] - xs[0]);
  matrix[0][1] = 1 / (xs[1] - xs[0]);
  matrix[0][n + 1] = 3 * (ys[1] - ys[0]) / ((xs[1] - xs[0]) * (xs[1] - xs[0]));
  matrix[n][n - 1] = 1 / (xs[n] - xs[n - 1]);
  matrix[n][n] = 2 / (xs[n] - xs[n - 1]);
  matrix[n][n + 1] = 3 * (ys[n] - ys[n - 1]) / ((xs[n] - xs[n - 1]) * (xs[n] - xs[n - 1]));
  return solve(matrix, ks);
}

function solve(matrix, ks) {
  const m = matrix.length; // column

  for (let k = 0; k < m; k++) {
    // pivot for column
    let iMax = 0;
    let vali = Number.NEGATIVE_INFINITY;

    for (let i = k; i < m; i++) if (matrix[i][k] > vali) {
      iMax = i;
      vali = matrix[i][k];
    }

    swapRows(matrix, k, iMax); // for all rows below pivot

    for (let i = k + 1; i < m; i++) {
      for (let j = k + 1; j < m + 1; j++) matrix[i][j] = matrix[i][j] - matrix[k][j] * (matrix[i][k] / matrix[k][k]);

      matrix[i][k] = 0;
    }
  } // rows = columns


  for (let i = m - 1; i >= 0; i--) {
    const v = matrix[i][m] / matrix[i][i];
    ks[i] = v; // rows

    for (let j = i - 1; j >= 0; j--) {
      matrix[j][m] -= matrix[j][i] * v;
      matrix[j][i] = 0;
    }
  }

  return ks;
}

function zerosMatrix(rows, columns) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    matrix.push([]);

    for (let j = 0; j < columns; j++) {
      matrix[i].push(0);
    }
  }

  return matrix;
}

function swapRows(m, k, l) {
  const p = m[k];
  m[k] = m[l];
  m[l] = p;
}
// CONCATENATED MODULE: ./js/components/EqualizerWindow/EqGraph.js






const GRAPH_HEIGHT = 19;
const GRAPH_WIDTH = 113;

class EqGraph_EqGraph extends react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.canvasCtx = this.canvas.getContext("2d");
    this.width = Number(this.canvas.width);
    this.height = Number(this.canvas.height);

    if (this.props.lineColorsImage) {
      this.createColorPattern(this.props.lineColorsImage);
    }

    if (this.props.preampLineUrl) {
      this.createPreampLineImage(this.props.preampLineUrl);
    }
  }

  componentDidUpdate() {
    this.canvasCtx.clearRect(0, 0, this.width, this.height);
    this.drawPreampLine();
    this.drawEqLine(); // This should paint on top of the preamp line
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.lineColorsImage !== nextProps.lineColorsImage) {
      this.createColorPattern(nextProps.lineColorsImage);
    }

    if (this.props.preampLineUrl !== nextProps.preampLineUrl) {
      this.createPreampLineImage(nextProps.preampLineUrl);
    }

    return true;
  }

  createPreampLineImage(preampLineUrl) {
    const preampLineImg = new Image();

    preampLineImg.onload = () => {
      this.setState({
        preampLineImg
      });
    };

    preampLineImg.src = preampLineUrl;
  }

  createColorPattern(lineColorsImage) {
    const bgImage = new Image();

    bgImage.onload = () => {
      const width = bgImage.width,
            height = bgImage.height;
      const colorsCanvas = document.createElement("canvas");
      const colorsCtx = colorsCanvas.getContext("2d");
      colorsCanvas.width = width;
      colorsCanvas.height = height;
      colorsCtx.drawImage(bgImage, 0, 0, width, height);
      this.setState({
        colorPattern: this.canvasCtx.createPattern(colorsCanvas, "repeat-x")
      });
    };

    bgImage.src = lineColorsImage;
  }

  drawEqLine() {
    if (!this.state.colorPattern) {
      // The skin has not finished loading yet
      return;
    }

    const props = this.props;
    const amplitudes = BANDS.map(band => props[band]);
    this.canvasCtx.fillStyle = this.state.colorPattern;
    const paddingLeft = 2; // TODO: This should be 1.5

    const min = 0;
    const max = GRAPH_HEIGHT - 1;
    const xs = [];
    const ys = [];
    amplitudes.forEach((value, i) => {
      const percent = (100 - value) / 100; // Each band is 12 pixels widex

      xs.push(i * 12);
      ys.push(percentToRange(percent, min, max));
    });
    const allYs = spline(xs, ys);
    const maxX = xs[xs.length - 1];
    let lastY = ys[0];

    for (let x = 0; x <= maxX; x++) {
      const y = clamp(Math.round(allYs[x]), 0, GRAPH_HEIGHT - 1);
      const yTop = Math.min(y, lastY);
      const height = 1 + Math.abs(lastY - y);
      this.canvasCtx.fillRect(paddingLeft + x, yTop, 1, height);
      lastY = y;
    }
  }

  drawPreampLine() {
    const preampLineImg = this.state.preampLineImg;

    if (!preampLineImg) {
      // The skin has not finished loading yet
      return;
    }

    const preampValue = percentToRange(this.props.preamp / 100, 0, GRAPH_HEIGHT - 1);
    this.canvasCtx.drawImage(this.state.preampLineImg, 0, preampValue, preampLineImg.width, preampLineImg.height);
  }

  render() {
    return react_default.a.createElement("canvas", {
      id: "eqGraph",
      ref: node => this.canvas = node,
      width: GRAPH_WIDTH,
      height: GRAPH_HEIGHT
    });
  }

}

/* harmony default export */ var EqualizerWindow_EqGraph = (connect_connect(state => objectSpread_default()({}, state.equalizer.sliders, {
  lineColorsImage: state.display.skinImages.EQ_GRAPH_LINE_COLORS,
  preampLineUrl: state.display.skinImages.EQ_PREAMP_LINE
}))(EqGraph_EqGraph));
// EXTERNAL MODULE: ./presets/builtin.json
var builtin = __webpack_require__(97);

// CONCATENATED MODULE: ./js/components/EqualizerWindow/PresetsContextMenu.tsx







const PresetsContextMenu = props => react_default.a.createElement(components_ContextMenuTarget, {
  top: true,
  id: "presets-context",
  handle: react_default.a.createElement("div", {
    id: "presets"
  })
}, react_default.a.createElement(Parent, {
  label: "Load"
}, builtin.presets.map(preset => react_default.a.createElement(Node, {
  key: preset.name,
  onClick: () => props.setEqFromObject(preset),
  label: preset.name
})), react_default.a.createElement(ContextMenu_Hr, null), react_default.a.createElement(Node, {
  onClick: props.openEqfFileDialog,
  label: "From Eqf..."
})), react_default.a.createElement(Node, {
  onClick: props.downloadPreset,
  label: "Save"
}));

const PresetsContextMenu_mapDispatchToProps = dispatch => {
  return {
    openEqfFileDialog: () => dispatch(openEqfFileDialog()),
    downloadPreset: () => dispatch(downloadPreset()),
    setEqFromObject: preset => dispatch(setEqFromObject(preset))
  };
};

/* harmony default export */ var EqualizerWindow_PresetsContextMenu = (connect_connect(null, PresetsContextMenu_mapDispatchToProps)(PresetsContextMenu));
// CONCATENATED MODULE: ./js/components/EqualizerWindow/EqualizerShade.tsx







const EqualizerShade = props => {
  const volume = props.volume,
        balance = props.balance;
  const classes = ["left", "center", "right"];
  const eqVolumeClassName = segment(0, 100, volume, classes);
  const eqBalanceClassName = segment(-100, 100, balance, classes);
  return react_default.a.createElement("div", {
    className: "draggable",
    onDoubleClick: props.toggleEqualizerShadeMode,
    style: {
      width: "100%",
      height: "100%"
    }
  }, react_default.a.createElement("div", {
    id: "equalizer-shade",
    onClick: props.toggleEqualizerShadeMode
  }), react_default.a.createElement("div", {
    id: "equalizer-close",
    onClick: props.closeWindow
  }), react_default.a.createElement(components_Volume, {
    id: "equalizer-volume",
    className: eqVolumeClassName
  }), react_default.a.createElement(components_Balance, {
    id: "equalizer-balance",
    className: eqBalanceClassName
  }));
};

const EqualizerShade_mapDispatchToProps = dispatch => {
  return {
    closeWindow: () => dispatch(closeWindow("equalizer")),
    toggleEqualizerShadeMode: () => dispatch(toggleEqualizerShadeMode())
  };
};

const EqualizerShade_mapStateToProps = state => ({
  volume: state.media.volume,
  balance: state.media.balance
});

/* harmony default export */ var EqualizerWindow_EqualizerShade = (connect_connect(EqualizerShade_mapStateToProps, EqualizerShade_mapDispatchToProps)(EqualizerShade));
// EXTERNAL MODULE: ./css/equalizer-window.css
var equalizer_window = __webpack_require__(192);

// CONCATENATED MODULE: ./js/components/EqualizerWindow/index.tsx















const bandClassName = band => `band-${band}`;

const EqualizerWindow = props => {
  const doubled = props.doubled,
        selected = props.selected,
        shade = props.shade;
  const className = classnames_default()({
    selected,
    doubled,
    shade,
    window: true,
    draggable: true
  });
  return react_default.a.createElement("div", {
    id: "equalizer-window",
    className: className,
    onMouseDown: props.focusWindow
  }, props.shade ? react_default.a.createElement(EqualizerWindow_EqualizerShade, null) : react_default.a.createElement("div", null, react_default.a.createElement("div", {
    className: "equalizer-top title-bar draggable",
    onDoubleClick: props.toggleEqualizerShadeMode
  }, react_default.a.createElement("div", {
    id: "equalizer-shade",
    onClick: props.toggleEqualizerShadeMode
  }), react_default.a.createElement("div", {
    id: "equalizer-close",
    onClick: props.closeEqualizerWindow
  })), react_default.a.createElement(EqualizerWindow_EqOn, null), react_default.a.createElement(EqualizerWindow_EqAuto, null), react_default.a.createElement(EqualizerWindow_EqGraph, null), react_default.a.createElement(EqualizerWindow_PresetsContextMenu, null), react_default.a.createElement(EqualizerWindow_Band, {
    id: "preamp",
    band: "preamp",
    onChange: props.setPreampValue
  }), react_default.a.createElement("div", {
    id: "plus12db",
    onClick: props.setEqToMax
  }), react_default.a.createElement("div", {
    id: "zerodb",
    onClick: props.setEqToMid
  }), react_default.a.createElement("div", {
    id: "minus12db",
    onClick: props.setEqToMin
  }), BANDS.map(hertz => react_default.a.createElement(EqualizerWindow_Band, {
    key: hertz,
    id: bandClassName(hertz),
    band: hertz,
    onChange: props.setHertzValue(hertz)
  }))));
}; // This does not use the shorthand object syntax becuase `setHertzValue` needs
// to return a function.


const EqualizerWindow_mapDispatchToProps = dispatch => ({
  focusWindow: () => dispatch({
    type: SET_FOCUSED_WINDOW,
    window: WINDOWS.EQUALIZER
  }),
  setPreampValue: value => dispatch(setPreamp(value)),
  setEqToMin: () => dispatch(setEqToMin()),
  setEqToMid: () => dispatch(setEqToMid()),
  setEqToMax: () => dispatch(setEqToMax()),
  setHertzValue: hertz => value => dispatch(setEqBand(hertz, value)),
  closeEqualizerWindow: () => dispatch(closeWindow("equalizer")),
  toggleEqualizerShadeMode: () => dispatch(toggleEqualizerShadeMode())
});

const EqualizerWindow_mapStateToProps = state => ({
  doubled: state.display.doubled,
  selected: state.windows.focused === WINDOWS.EQUALIZER,
  shade: getWindowShade(state)("equalizer")
});

/* harmony default export */ var components_EqualizerWindow = (connect_connect(EqualizerWindow_mapStateToProps, EqualizerWindow_mapDispatchToProps)(EqualizerWindow));
// EXTERNAL MODULE: ./css/media-library-window.css
var media_library_window = __webpack_require__(194);

// CONCATENATED MODULE: ./js/components/MediaLibraryWindow/TracksTable.tsx






class TracksTable_TracksTable extends react["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      filter: ""
    };
  }

  render() {
    return react["createElement"]("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 2
      }
    }, react["createElement"]("div", {
      style: {
        paddingBottom: 3,
        display: "flex",
        flexDirection: "row"
      }
    }, react["createElement"]("span", null, "Search:"), react["createElement"]("input", {
      style: {
        marginLeft: 12,
        flexGrow: 1
      },
      type: "text",
      className: "webamp-media-library-item",
      onChange: e => this.setState({
        filter: e.target.value
      })
    })), react["createElement"]("div", {
      style: {
        flexGrow: 1,
        overflowY: "scroll"
      },
      className: "webamp-media-library-item"
    }, react["createElement"]("table", {
      className: "webamp-media-library-table",
      style: {
        overflow: "scroll"
      }
    }, react["createElement"]("thead", null, react["createElement"]("tr", null, react["createElement"]("th", null, "Artist"), react["createElement"]("th", null, "Title"), react["createElement"]("th", null, "Album"), react["createElement"]("th", null, "Length"), react["createElement"]("th", null, "Track #"), react["createElement"]("th", null, "Genere"), react["createElement"]("th", null, "Year"), react["createElement"]("th", null, "Filename"))), react["createElement"]("tbody", null, this.props.filterTracks(this.state.filter).map(track => {
      return react["createElement"]("tr", {
        key: track.id
      }, react["createElement"]("td", null, track.artist), react["createElement"]("td", null, track.title), react["createElement"]("td", null, track.album), react["createElement"]("td", null, getTimeStr(track.duration)), react["createElement"]("td", null, "1"), react["createElement"]("td", null, "Primus"), react["createElement"]("td", null, "2001"), react["createElement"]("td", null, track.url == null ? track.defaultName : filenameFromUrl(track.url)));
    })))), react["createElement"]("div", {
      style: {
        marginTop: 2
      }
    }, react["createElement"]("button", null, "Play"), react["createElement"]("button", null, "Enqueue"), react["createElement"]("button", null, "Play all"), react["createElement"]("button", null, "Enqueue all"), react["createElement"]("span", {
      id: "webamp-media-library-track-summary-duration"
    }, "1 item [3:25]")));
  }

}

const TracksTable_mapStateToProps = state => {
  return {
    tracks: Object.values(getTracks(state)),
    filterTracks: getTracksMatchingFilter(state)
  };
};

/* harmony default export */ var MediaLibraryWindow_TracksTable = (connect_connect(TracksTable_mapStateToProps)(TracksTable_TracksTable));
// CONCATENATED MODULE: ./js/components/MediaLibraryWindow/index.tsx









class MediaLibraryWindow_MediaLibraryWindow extends react["Component"] {
  constructor(props) {
    super(props);

    defineProperty_default()(this, "_handleSidebarMouseDown", e => {
      const startX = e.pageX;
      const initialWidth = this.state.sidebarWidth;

      this._onMouseMove(moveEvent => {
        this.setState({
          sidebarWidth: initialWidth + moveEvent.pageX - startX
        });
      });
    });

    defineProperty_default()(this, "_handlePlaylistResizeMouseDown", e => {
      const startY = e.pageY;
      const initialHeight = this.state.topPlaylistSectionHeight;

      this._onMouseMove(moveEvent => {
        this.setState({
          topPlaylistSectionHeight: initialHeight + moveEvent.pageY - startY
        });
      });
    });

    defineProperty_default()(this, "_handleArtistsResizeMouseDown", e => {
      const startX = e.pageX;
      const initialWidth = this.state.artistsPanelWidth;

      this._onMouseMove(moveEvent => {
        this.setState({
          artistsPanelWidth: initialWidth + moveEvent.pageX - startX
        });
      });
    });

    this.state = {
      sidebarWidth: 100,
      topPlaylistSectionHeight: 200,
      artistsPanelWidth: 150
    };
  }

  _onMouseMove(cb) {
    const handleMouseUp = () => {
      document.removeEventListener("mousemove", cb);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", cb);
    document.addEventListener("mouseup", handleMouseUp);
  }

  render() {
    const colors = this.props.skinGenExColors;
    return react["createElement"](components_GenWindow, {
      title: "Winamp Library",
      windowId: WINDOWS.MEDIA_LIBRARY
    }, (_ref) => {
      let height = _ref.height,
          width = _ref.width;
      return react["createElement"]("div", {
        id: "webamp-media-library",
        style: {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "row",
          overflow: "hidden"
        }
      }, react["createElement"]("div", {
        className: "webamp-media-library-vertical-divider",
        onMouseDown: this._handleSidebarMouseDown
      }, react["createElement"]("div", {
        className: "webamp-media-library-vertical-divider-line"
      })), react["createElement"]("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          flexShrink: 1,
          flexGrow: 1,
          // https://stackoverflow.com/a/35609992/1263117
          overflow: "hidden"
        }
      }, react["createElement"]("div", {
        className: "webamp-media-library-horizontal-divider",
        onMouseDown: this._handlePlaylistResizeMouseDown
      }, react["createElement"]("div", {
        className: "webamp-media-library-horizontal-divider-line"
      })), react["createElement"](MediaLibraryWindow_TracksTable, null)));
    });
  }

}

const MediaLibraryWindow_mapStateToProps = state => {
  return {
    skinGenExColors: getSkinGenExColors(state)
  };
};

/* harmony default export */ var components_MediaLibraryWindow = (connect_connect(MediaLibraryWindow_mapStateToProps)(MediaLibraryWindow_MediaLibraryWindow));
// CONCATENATED MODULE: ./js/skinSelectors.ts


const imageSelectors = {
  MAIN_BALANCE_BACKGROUND: ["#balance"],
  MAIN_BALANCE_THUMB: ["#balance::-webkit-slider-thumb", "#balance::-moz-range-thumb"],
  MAIN_BALANCE_THUMB_ACTIVE: ["#balance:active::-webkit-slider-thumb", "#balance:active::-moz-range-thumb"],
  MAIN_PREVIOUS_BUTTON: [".actions #previous"],
  MAIN_PREVIOUS_BUTTON_ACTIVE: [".actions #previous:active"],
  MAIN_PLAY_BUTTON: [".actions #play"],
  MAIN_PLAY_BUTTON_ACTIVE: [".actions #play:active"],
  MAIN_PAUSE_BUTTON: [".actions #pause"],
  MAIN_PAUSE_BUTTON_ACTIVE: [".actions #pause:active"],
  MAIN_STOP_BUTTON: [".actions #stop"],
  MAIN_STOP_BUTTON_ACTIVE: [".actions #stop:active"],
  MAIN_NEXT_BUTTON: [".actions #next"],
  MAIN_NEXT_BUTTON_ACTIVE: [".actions #next:active"],
  MAIN_EJECT_BUTTON: ["#eject"],
  MAIN_EJECT_BUTTON_ACTIVE: ["#eject:active"],
  MAIN_WINDOW_BACKGROUND: ["#main-window"],
  MAIN_STEREO: [".media-info #stereo", ".stop .media-info #stereo.selected"],
  MAIN_STEREO_SELECTED: [".media-info #stereo.selected"],
  MAIN_MONO: [".media-info #mono", ".stop .media-info #mono.selected"],
  MAIN_MONO_SELECTED: [".media-info #mono.selected"],
  NO_MINUS_SIGN: ["#time #minus-sign"],
  MINUS_SIGN: ["#time.countdown #minus-sign"],
  DIGIT_0: [".digit-0"],
  DIGIT_1: [".digit-1"],
  DIGIT_2: [".digit-2"],
  DIGIT_3: [".digit-3"],
  DIGIT_4: [".digit-4"],
  DIGIT_5: [".digit-5"],
  DIGIT_6: [".digit-6"],
  DIGIT_7: [".digit-7"],
  DIGIT_8: [".digit-8"],
  DIGIT_9: [".digit-9"],
  NO_MINUS_SIGN_EX: ["#time #minus-sign"],
  MINUS_SIGN_EX: ["#time.countdown #minus-sign"],
  DIGIT_0_EX: [".digit-0"],
  DIGIT_1_EX: [".digit-1"],
  DIGIT_2_EX: [".digit-2"],
  DIGIT_3_EX: [".digit-3"],
  DIGIT_4_EX: [".digit-4"],
  DIGIT_5_EX: [".digit-5"],
  DIGIT_6_EX: [".digit-6"],
  DIGIT_7_EX: [".digit-7"],
  DIGIT_8_EX: [".digit-8"],
  DIGIT_9_EX: [".digit-9"],
  MAIN_PLAYING_INDICATOR: [".play #play-pause"],
  MAIN_PAUSED_INDICATOR: [".pause #play-pause"],
  MAIN_STOPPED_INDICATOR: [".stop #play-pause"],
  MAIN_NOT_WORKING_INDICATOR: ["#work-indicator"],
  MAIN_WORKING_INDICATOR: ["#work-indicator.selected"],
  PLAYLIST_TOP_TILE: [".playlist-top-left-fill", ".playlist-top-left-spacer", ".playlist-top-right-fill", ".playlist-top-right-spacer"],
  PLAYLIST_TOP_LEFT_CORNER: [".playlist-top-left"],
  PLAYLIST_TITLE_BAR: [".playlist-top-title"],
  PLAYLIST_TOP_RIGHT_CORNER: [".playlist-top-right"],
  PLAYLIST_TOP_TILE_SELECTED: [".selected .playlist-top-left-fill", ".selected .playlist-top-left-spacer", ".selected .playlist-top-right-fill", ".selected .playlist-top-right-spacer"],
  PLAYLIST_TOP_LEFT_SELECTED: [".selected .playlist-top-left"],
  PLAYLIST_TITLE_BAR_SELECTED: [".selected .playlist-top-title"],
  PLAYLIST_TOP_RIGHT_CORNER_SELECTED: [".selected .playlist-top-right"],
  PLAYLIST_LEFT_TILE: [".playlist-middle-left"],
  PLAYLIST_RIGHT_TILE: [".playlist-middle-right"],
  PLAYLIST_SCROLL_HANDLE: [".playlist-scrollbar-handle"],
  PLAYLIST_SCROLL_HANDLE_SELECTED: [".playlist-middle-right:active .playlist-scrollbar-handle"],
  PLAYLIST_BOTTOM_TILE: [".playlist-bottom"],
  PLAYLIST_BOTTOM_LEFT_CORNER: [".playlist-bottom-left"],
  PLAYLIST_BOTTOM_RIGHT_CORNER: [".playlist-bottom-right"],
  PLAYLIST_VISUALIZER_BACKGROUND: [".playlist-visualizer"],
  PLAYLIST_SHADE_BACKGROUND: ["#playlist-window-shade"],
  PLAYLIST_SHADE_BACKGROUND_LEFT: ["#playlist-window-shade .left"],
  PLAYLIST_SHADE_BACKGROUND_RIGHT: ["#playlist-window-shade .right"],
  PLAYLIST_SHADE_BACKGROUND_RIGHT_SELECTED: ["#playlist-window-shade.selected .right"],
  PLAYLIST_ADD_MENU_BAR: ["#playlist-add-menu.selected .bar"],
  PLAYLIST_ADD_URL: ["#playlist-add-menu .add-url"],
  PLAYLIST_ADD_URL_SELECTED: ["#playlist-add-menu .hover .add-url"],
  PLAYLIST_ADD_DIR: ["#playlist-add-menu .add-dir"],
  PLAYLIST_ADD_DIR_SELECTED: ["#playlist-add-menu .hover .add-dir"],
  PLAYLIST_ADD_FILE: ["#playlist-add-menu .add-file"],
  PLAYLIST_ADD_FILE_SELECTED: ["#playlist-add-menu .hover .add-file"],
  PLAYLIST_REMOVE_MENU_BAR: ["#playlist-remove-menu.selected .bar"],
  PLAYLIST_REMOVE_ALL: ["#playlist-remove-menu .remove-all"],
  PLAYLIST_REMOVE_ALL_SELECTED: ["#playlist-remove-menu .hover .remove-all"],
  PLAYLIST_CROP: ["#playlist-remove-menu .crop"],
  PLAYLIST_CROP_SELECTED: ["#playlist-remove-menu .hover .crop"],
  PLAYLIST_REMOVE_SELECTED: ["#playlist-remove-menu .remove-selected"],
  PLAYLIST_REMOVE_SELECTED_SELECTED: ["#playlist-remove-menu .hover .remove-selected"],
  PLAYLIST_REMOVE_MISC: ["#playlist-remove-menu .remove-misc"],
  PLAYLIST_REMOVE_MISC_SELECTED: ["#playlist-remove-menu .hover .remove-misc"],
  PLAYLIST_SELECT_MENU_BAR: ["#playlist-selection-menu.selected .bar"],
  PLAYLIST_INVERT_SELECTION: ["#playlist-selection-menu .invert-selection"],
  PLAYLIST_INVERT_SELECTION_SELECTED: ["#playlist-selection-menu .hover .invert-selection"],
  PLAYLIST_SELECT_ZERO: ["#playlist-selection-menu .select-zero"],
  PLAYLIST_SELECT_ZERO_SELECTED: ["#playlist-selection-menu .hover .select-zero"],
  PLAYLIST_SELECT_ALL: ["#playlist-selection-menu .select-all"],
  PLAYLIST_SELECT_ALL_SELECTED: ["#playlist-selection-menu .hover .select-all"],
  PLAYLIST_CLOSE_SELECTED: ["#playlist-close-button:active"],
  PLAYLIST_COLLAPSE_SELECTED: ["#playlist-window #playlist-shade-button:active"],
  PLAYLIST_EXPAND_SELECTED: ["#playlist-window-shade #playlist-shade-button:active"],
  PLAYLIST_MISC_MENU_BAR: ["#playlist-misc-menu.selected .bar"],
  PLAYLIST_MISC_OPTIONS: ["#playlist-misc-menu .misc-options"],
  PLAYLIST_MISC_OPTIONS_SELECTED: ["#playlist-misc-menu .hover .misc-options"],
  PLAYLIST_FILE_INFO: ["#playlist-misc-menu .file-info"],
  PLAYLIST_FILE_INFO_SELECTED: ["#playlist-misc-menu .hover .file-info"],
  PLAYLIST_SORT_LIST: ["#playlist-misc-menu .sort-list"],
  PLAYLIST_SORT_LIST_SELECTED: ["#playlist-misc-menu .hover .sort-list"],
  PLAYLIST_LIST_BAR: ["#playlist-list-menu.selected .bar"],
  PLAYLIST_NEW_LIST: ["#playlist-list-menu .new-list"],
  PLAYLIST_NEW_LIST_SELECTED: ["#playlist-list-menu .hover .new-list"],
  PLAYLIST_LOAD_LIST: ["#playlist-list-menu .load-list"],
  PLAYLIST_LOAD_LIST_SELECTED: ["#playlist-list-menu .hover .load-list"],
  PLAYLIST_SAVE_LIST: ["#playlist-list-menu .save-list"],
  PLAYLIST_SAVE_LIST_SELECTED: ["#playlist-list-menu .hover .save-list"],
  EQ_WINDOW_BACKGROUND: ["#equalizer-window:not(.shade)"],
  EQ_TITLE_BAR: [".equalizer-top"],
  EQ_TITLE_BAR_SELECTED: [".selected .equalizer-top"],
  EQ_SLIDER_BACKGROUND: [".band"],
  EQ_SLIDER_THUMB: [".band .rc-slider-handle"],
  // But the "active" pseudo selector on the parent, since clicking
  // anywhere on the track moves the slider.
  EQ_SLIDER_THUMB_SELECTED: [".band .rc-slider:active .rc-slider-handle"],
  EQ_ON_BUTTON: ["#on"],
  EQ_ON_BUTTON_DEPRESSED: ["#on:active"],
  EQ_ON_BUTTON_SELECTED: ["#on.selected"],
  EQ_ON_BUTTON_SELECTED_DEPRESSED: ["#on.selected:active"],
  EQ_AUTO_BUTTON: ["#auto"],
  EQ_AUTO_BUTTON_DEPRESSED: ["#auto:active"],
  EQ_AUTO_BUTTON_SELECTED: ["#auto.selected"],
  EQ_AUTO_BUTTON_SELECTED_DEPRESSED: ["#auto.selected:active"],
  EQ_GRAPH_BACKGROUND: ["#eqGraph"],
  EQ_PRESETS_BUTTON: ["#presets"],
  EQ_PRESETS_BUTTON_SELECTED: ["#presets:active"],
  EQ_PREAMP_LINE: ["#preamp-line"],
  EQ_SHADE_BACKGROUND: ["#equalizer-window.shade"],
  EQ_SHADE_BACKGROUND_SELECTED: ["#equalizer-window.shade.selected"],
  EQ_SHADE_VOLUME_SLIDER_LEFT: ["#equalizer-volume.left::-webkit-slider-thumb", "#equalizer-volume.left::-moz-range-thumb"],
  EQ_SHADE_VOLUME_SLIDER_CENTER: ["#equalizer-volume.center::-webkit-slider-thumb", "#equalizer-volume.center::-moz-range-thumb"],
  EQ_SHADE_VOLUME_SLIDER_RIGHT: ["#equalizer-volume.right::-webkit-slider-thumb", "#equalizer-volume.right::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_LEFT: ["#equalizer-balance.left::-webkit-slider-thumb", "#equalizer-balance.left::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_CENTER: ["#equalizer-balance.center::-webkit-slider-thumb", "#equalizer-balance.center::-moz-range-thumb"],
  EQ_SHADE_BALANCE_SLIDER_RIGHT: ["#equalizer-balance.right::-webkit-slider-thumb", "#equalizer-balance.right::-moz-range-thumb"],
  EQ_MAXIMIZE_BUTTON_ACTIVE: ["#equalizer-shade:active"],
  EQ_MINIMIZE_BUTTON_ACTIVE: ["#equalizer-window.shade #equalizer-shade:active"],
  EQ_CLOSE_BUTTON: ["#equalizer-window.selected #equalizer-close"],
  EQ_CLOSE_BUTTON_ACTIVE: ["#equalizer-window #equalizer-close:active"],
  MAIN_POSITION_SLIDER_BACKGROUND: ["#position"],
  MAIN_POSITION_SLIDER_THUMB: ["#position::-webkit-slider-thumb", "#position::-moz-range-thumb"],
  MAIN_POSITION_SLIDER_THUMB_SELECTED: ["#position:active::-webkit-slider-thumb", "#position:active::-moz-range-thumb"],
  MAIN_SHUFFLE_BUTTON: ["#shuffle"],
  MAIN_SHUFFLE_BUTTON_DEPRESSED: ["#shuffle:active"],
  MAIN_SHUFFLE_BUTTON_SELECTED: ["#shuffle.selected"],
  MAIN_SHUFFLE_BUTTON_SELECTED_DEPRESSED: ["#shuffle.selected:active"],
  MAIN_REPEAT_BUTTON: ["#repeat"],
  MAIN_REPEAT_BUTTON_DEPRESSED: ["#repeat:active"],
  MAIN_REPEAT_BUTTON_SELECTED: ["#repeat.selected"],
  MAIN_REPEAT_BUTTON_SELECTED_DEPRESSED: ["#repeat.selected:active"],
  MAIN_EQ_BUTTON: ["#equalizer-button"],
  MAIN_EQ_BUTTON_SELECTED: ["#equalizer-button.selected"],
  MAIN_EQ_BUTTON_DEPRESSED: ["#equalizer-button:active"],
  MAIN_EQ_BUTTON_DEPRESSED_SELECTED: ["#equalizer-button.selected:active"],
  MAIN_PLAYLIST_BUTTON: ["#playlist-button"],
  MAIN_PLAYLIST_BUTTON_SELECTED: ["#playlist-button.selected"],
  MAIN_PLAYLIST_BUTTON_DEPRESSED: ["#playlist-button:active"],
  MAIN_PLAYLIST_BUTTON_DEPRESSED_SELECTED: ["#playlist-button.selected:active"],
  MAIN_TITLE_BAR: ["#title-bar"],
  MAIN_TITLE_BAR_SELECTED: [".selected #title-bar"],
  MAIN_EASTER_EGG_TITLE_BAR: [".llama #title-bar"],
  MAIN_EASTER_EGG_TITLE_BAR_SELECTED: [".llama.selected #title-bar"],
  MAIN_OPTIONS_BUTTON: [".selected #title-bar #option.clicked"],
  MAIN_OPTIONS_BUTTON_DEPRESSED: [".selected #title-bar #option:active", ".selected #title-bar #option.selected"],
  MAIN_MINIMIZE_BUTTON: [".selected #title-bar #minimize.clicked"],
  MAIN_MINIMIZE_BUTTON_DEPRESSED: [".selected #title-bar #minimize:active"],
  MAIN_SHADE_BUTTON: [".selected #title-bar #shade.clicked"],
  MAIN_SHADE_BUTTON_DEPRESSED: [".selected #title-bar #shade:active"],
  MAIN_CLOSE_BUTTON: [".selected #title-bar #close.clicked"],
  MAIN_CLOSE_BUTTON_DEPRESSED: [".selected #title-bar #close:active"],
  MAIN_CLUTTER_BAR_BACKGROUND: ["#clutter-bar"],
  MAIN_CLUTTER_BAR_BACKGROUND_DISABLED: ["#clutter-bar.disabled"],
  MAIN_CLUTTER_BAR_BUTTON_O_SELECTED: ["#button-o:active", "#button-0.selected"],
  MAIN_CLUTTER_BAR_BUTTON_A_SELECTED: ["#button-a:active", "#button-a.selected"],
  MAIN_CLUTTER_BAR_BUTTON_I_SELECTED: ["#button-i:active", "#button-i.selected"],
  MAIN_CLUTTER_BAR_BUTTON_D_SELECTED: ["#button-d:active", "#button-d.selected"],
  MAIN_CLUTTER_BAR_BUTTON_V_SELECTED: ["#button-v:active", "#button-v.selected"],
  MAIN_SHADE_BACKGROUND: [".shade #title-bar"],
  MAIN_SHADE_BACKGROUND_SELECTED: [".shade.selected #title-bar"],
  MAIN_SHADE_BUTTON_SELECTED: [".shade.selected #title-bar #shade"],
  MAIN_SHADE_BUTTON_SELECTED_DEPRESSED: [".shade #title-bar #shade:active"],
  MAIN_SHADE_POSITION_BACKGROUND: [".shade #position"],
  MAIN_SHADE_POSITION_THUMB: [".shade #position::-moz-range-thumb", ".shade #position::-webkit-slider-thumb"],
  MAIN_SHADE_POSITION_THUMB_LEFT: [".shade #position.left::-moz-range-thumb", ".shade #position.left::-webkit-slider-thumb"],
  MAIN_SHADE_POSITION_THUMB_RIGHT: [".shade #position.right::-moz-range-thumb", ".shade #position.right::-webkit-slider-thumb"],
  MAIN_VOLUME_BACKGROUND: ["#volume"],
  MAIN_VOLUME_THUMB: ["#volume input::-webkit-slider-thumb", "#volume input::-moz-range-thumb"],
  MAIN_VOLUME_THUMB_SELECTED: ["#volume input:active::-webkit-slider-thumb", "#volume input:active::-moz-range-thumb"],
  GEN_TOP_CENTER_FILL: [".gen-window .gen-top"],
  GEN_TOP_LEFT: [".gen-window .gen-top-left"],
  GEN_TOP_LEFT_END: [".gen-window .gen-top-left-end"],
  GEN_TOP_RIGHT: [".gen-window .gen-top-right"],
  GEN_TOP_RIGHT_END: [".gen-window .gen-top-right-end"],
  GEN_TOP_LEFT_RIGHT_FILL: [".gen-window .gen-top-left-fill", ".gen-window .gen-top-right-fill"],
  GEN_TOP_CENTER_FILL_SELECTED: [".gen-window.selected .gen-top"],
  GEN_TOP_LEFT_SELECTED: [".gen-window.selected .gen-top-left"],
  GEN_TOP_LEFT_END_SELECTED: [".gen-window.selected .gen-top-left-end"],
  GEN_TOP_RIGHT_SELECTED: [".gen-window.selected .gen-top-right"],
  GEN_TOP_RIGHT_END_SELECTED: [".gen-window.selected .gen-top-right-end"],
  GEN_TOP_LEFT_RIGHT_FILL_SELECTED: [".gen-window.selected .gen-top-left-fill", ".gen-window.selected .gen-top-right-fill"],
  GEN_BOTTOM_LEFT: [".gen-window .gen-bottom-left"],
  GEN_BOTTOM_RIGHT: [".gen-window .gen-bottom-right"],
  GEN_BOTTOM_FILL: [".gen-window .gen-bottom"],
  GEN_MIDDLE_LEFT: [".gen-window .gen-middle-left"],
  GEN_MIDDLE_LEFT_BOTTOM: [".gen-window .gen-middle-left-bottom"],
  GEN_MIDDLE_RIGHT: [".gen-window .gen-middle-right"],
  GEN_MIDDLE_RIGHT_BOTTOM: [".gen-window .gen-middle-right-bottom"],
  GEN_CLOSE_SELECTED: [".gen-window .gen-close:active"],
  GENEX_BUTTON_BACKGROUND_UNPRESSED: ["#webamp-media-library button"]
};
Object.keys(FONT_LOOKUP).forEach(character => {
  const key = imageConstFromChar(character);
  const code = character.charCodeAt(0);
  imageSelectors[key] = [`.character-${code}`];
});
LETTERS.forEach(character => {
  imageSelectors[`GEN_TEXT_${character}`] = [`.gen-text-${character.toLowerCase()}`];
  imageSelectors[`GEN_TEXT_SELECTED_${character}`] = [`.gen-window.selected .gen-text-${character.toLowerCase()}`];
});
const cursorSelectors = {
  CLOSE: ["#title-bar #close"],
  // This is not quite right. There are some areas that show this cursor
  // but are not clickable.
  EQSLID: ["#equalizer-window .band .rc-slider"],
  EQNORMAL: ["#equalizer-window"],
  EQCLOSE: ["#equalizer-window #equalizer-close"],
  EQTITLE: ["#equalizer-window .title-bar", "#equalizer-window.shade", "#equalizer-window.shade input"],
  MAINMENU: ["#main-window #option", "#webamp-context-menu .context-menu"],
  MIN: ["#main-window #minimize"],
  NORMAL: [// Use this as the default cursor.
  ".window", ".window input", // Otherwise
  "#main-window", "#main-window.shade #title-bar"],
  MMENU: ["#main-window.shade #option"],
  PNORMAL: ["#playlist-window"],
  // TODO: This is should really only apply to the top part of the top.
  // The chrome around the playlist window is larger than others. The
  // cursor only applies to the same height as the other window's chrome.
  PTBAR: ["#playlist-window .playlist-top"],
  PCLOSE: ["#playlist-window #playlist-close-button", "#playlist-window-shade #playlist-close-button"],
  PWINBUT: ["#playlist-window #playlist-shade-button", "#playlist-window-shade #playlist-shade-button"],
  POSBAR: ["#main-window #position"],
  PSIZE: ["#playlist-window #playlist-resize-target"],
  PWSSIZE: ["#playlist-window-shade #playlist-resize-target"],
  PWSNORM: ["#playlist-window-shade"],
  // TODO: The target for this is not quite right.
  PVSCROLL: ["#playlist-window .playlist-scrollbar"],
  SONGNAME: ["#main-window #marquee"],
  TITLEBAR: ["#main-window #title-bar"],
  VOLBAL: ["#volume", "#volume input", "#balance"],
  WINBUT: ["#main-window #shade"],
  WSNORMAL: ["#main-window.shade #title-bar"],
  WSPOSBAR: ["#main-window.shade #position"]
};
// CONCATENATED MODULE: ./js/components/Skin.js

// Dynamically set the css background images for all the sprites





const CSS_PREFIX = "#webamp";
const mapRegionNamesToIds = {
  normal: "mainWindowClipPath",
  windowshade: "shadeMainWindowClipPath",
  equalizer: "equalizerWindowClipPath",
  equalizerws: "shadeEqualizerWindowClipPath"
};
const mapRegionNamesToMatcher = {
  normal: "#main-window:not(.shade)",
  windowshade: "#main-window.shade",
  equalizer: "#equalizer-window:not(.shade)",
  equalizerws: "#equalizer-window.shade"
};

const numExIsUsed = skinImages => !!skinImages.DIGIT_0_EX;

class Skin_Css extends react_default.a.Component {
  componentWillMount() {
    const style = document.createElement("style");
    style.type = "text/css";
    style.id = "webamp-skin";
    document.head.appendChild(style);
    this.style = style;
  }

  componentWillUnmount() {
    this.style.remove();
    this.style = null;
  }

  render() {
    return Object(react_dom["createPortal"])(this.props.children, this.style);
  }

}

class Skin_ClipPaths extends react_default.a.Component {
  componentWillMount() {
    const paths = document.createElement("div");
    document.body.appendChild(paths);
    this.paths = paths;
  }

  componentWillUnmount() {
    this.paths.remove();
    this.paths = null;
  }

  render() {
    // this.props.children should be an object containing arrays of strings. The
    // keys are ids, and the arrays are arrays of polygon point strings
    const children = this.props.children;
    return Object(react_dom["createPortal"])(react_default.a.createElement("svg", {
      height: 0,
      width: 0
    }, react_default.a.createElement("defs", null, Object.keys(children).map(id => react_default.a.createElement("clipPath", {
      id: id,
      key: id
    }, children[id].map((points, i) => react_default.a.createElement("polygon", {
      points: points,
      key: i
    })))))), this.paths);
  }

}

const FALLBACKS = {
  MAIN_BALANCE_BACKGROUND: "MAIN_VOLUME_BACKGROUND",
  MAIN_BALANCE_THUMB: "MAIN_VOLUME_THUMB",
  MAIN_BALANCE_THUMB_ACTIVE: "MAIN_VOLUME_THUMB_SELECTED"
};

function cssRulesFromProps(props) {
  const skinImages = props.skinImages,
        skinCursors = props.skinCursors,
        skinGenLetterWidths = props.skinGenLetterWidths;

  if (!skinImages || !skinCursors) {
    return null;
  }

  const cssRules = [];
  Object.keys(imageSelectors).forEach(imageName => {
    const imageUrl = skinImages[imageName] || skinImages[FALLBACKS[imageName]];

    if (imageUrl) {
      imageSelectors[imageName].forEach(selector => {
        cssRules.push(`${CSS_PREFIX} ${selector} {background-image: url(${imageUrl})}`);
      });
    }
  });

  if (skinGenLetterWidths != null) {
    LETTERS.forEach(letter => {
      const width = skinGenLetterWidths[`GEN_TEXT_${letter}`];
      const selectedWidth = skinGenLetterWidths[`GEN_TEXT_SELECTED_${letter}`];
      cssRules.push(`${CSS_PREFIX} .gen-text-${letter.toLowerCase()} {width: ${width}px;}`);
      cssRules.push(`${CSS_PREFIX} .selected .gen-text-${letter.toLowerCase()} {width: ${selectedWidth}px;}`);
    });
  }

  Object.keys(cursorSelectors).forEach(cursorName => {
    const cursorUrl = skinCursors[cursorName];

    if (cursorUrl) {
      cursorSelectors[cursorName].forEach(selector => {
        cssRules.push(`${// TODO: Fix this hack
        // Maybe our CSS name spacing should be based on some other class/id
        // than the one we use for defining the main div.
        // That way it could be shared by both the player and the context menu.
        selector.startsWith("#webamp-context-menu") ? "" : CSS_PREFIX} ${selector} {cursor: url(${cursorUrl}), auto}`);
      });
    }
  });

  if (numExIsUsed(skinImages)) {
    // This alternate number file requires that the minus sign be
    // formatted differently.
    cssRules.push(`${CSS_PREFIX} .status #time #minus-sign { top: 0px; left: -1px; width: 9px; height: 13px; }`);
  }

  for (const _ref of Object.entries(props.skinRegion)) {
    var _ref2 = slicedToArray_default()(_ref, 2);

    const regionName = _ref2[0];
    const polygons = _ref2[1];

    if (polygons) {
      const matcher = mapRegionNamesToMatcher[regionName];
      const id = mapRegionNamesToIds[regionName];
      cssRules.push(`${CSS_PREFIX} ${matcher} { clip-path: url(#${id}); }`);
    }
  } // TODO: Find a way to make this declarative.


  cssRules.push(`#webamp-media-library {
       background-color: ${props.skinGenExColors.windowBackground};
       color: ${props.skinGenExColors.windowText};
    }`);
  cssRules.push(`#webamp-media-library input {
       caret-color: ${props.skinGenExColors.windowText};
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-item {
       color: ${props.skinGenExColors.itemForeground};
       background-color: ${props.skinGenExColors.itemBackground};
       border-right: 1px solid ${props.skinGenExColors.divider};
       border-bottom: 1px solid ${props.skinGenExColors.divider};
    }`);
  cssRules.push(`#webamp-media-library button {
       color: ${props.skinGenExColors.buttonText};
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-vertical-divider {
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-vertical-divider-line,
     #webamp-media-library .webamp-media-library-horizontal-divider-line
     {
       background-color: ${props.skinGenExColors.divider};
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-table {
       color: ${props.skinGenExColors.itemForeground};
       background-color: ${props.skinGenExColors.itemBackground};
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-table thead {
       color: ${props.skinGenExColors.listHeaderText};
       background-color: ${props.skinGenExColors.listHeaderBackground};
    }`);
  cssRules.push(`#webamp-media-library .webamp-media-library-table thead th {
       border-top: 1px solid ${props.skinGenExColors.listHeaderFrameTopAndLeft};
       border-left: 1px solid ${props.skinGenExColors.listHeaderFrameTopAndLeft};
       border-bottom: 1px solid ${props.skinGenExColors.listHeaderFrameBottomAndRight};
       border-right: 1px solid ${props.skinGenExColors.listHeaderFrameBottomAndRight};
    }`);
  return cssRules;
}

function clipPathsFromProps(props) {
  const clipPaths = {};

  for (const _ref3 of Object.entries(props.skinRegion)) {
    var _ref4 = slicedToArray_default()(_ref3, 2);

    const regionName = _ref4[0];
    const polygons = _ref4[1];

    if (polygons) {
      const id = mapRegionNamesToIds[regionName];
      clipPaths[id] = polygons;
    }
  }

  return clipPaths;
}

const Skin = props => {
  const cssRules = cssRulesFromProps(props);

  if (cssRules == null) {
    return null;
  }

  const clipPaths = clipPathsFromProps(props);
  return react_default.a.createElement("div", null, react_default.a.createElement(Skin_Css, null, cssRules.join("\n")), react_default.a.createElement(Skin_ClipPaths, null, clipPaths));
};

/* harmony default export */ var components_Skin = (connect_connect(state => ({
  skinImages: state.display.skinImages,
  skinCursors: state.display.skinCursors,
  skinRegion: state.display.skinRegion,
  skinGenLetterWidths: state.display.skinGenLetterWidths,
  skinGenExColors: state.display.skinGenExColors
}))(Skin));
// EXTERNAL MODULE: ./css/webamp.css
var webamp = __webpack_require__(196);

// CONCATENATED MODULE: ./js/components/App.js




















/**
 * Constructs the windows to render, and tracks focus.
 */

class App_App extends react_default.a.Component {
  constructor() {
    super();

    defineProperty_default()(this, "_handleWindowResize", () => {
      if (this._webampNode == null) {
        return;
      } // It's a bit tricky to measure the "natural" size of the browser window.
      // Specifically we want to know how large the window would be without our
      // own Webamp windows influencing it. To achieve this, we temporarily make
      // our container `overflow: hidden;`. We then make our container full
      // screen by setting the bottom/right properties to zero. This second part
      // allows our Webamp windows to stay visible during the resize. After we
      // measure, we set the style back so that we don't end up interfering with
      // click events outside of our Webamp windows.


      this._webampNode.style.right = 0;
      this._webampNode.style.bottom = 0;
      this._webampNode.style.overflow = "hidden";
      this.props.browserWindowSizeChanged(getWindowSize());
      this._webampNode.style.right = null;
      this._webampNode.style.bottom = null;
      this._webampNode.style.overflow = "visible";
    });

    this._emitter = new emitter_Emitter();
    this._windowNodes = {};
    this._bindings = {};
  }

  componentWillMount() {
    this._webampNode = document.createElement("div");
    this._webampNode.id = "webamp";
    this._webampNode.role = "application";
    this._webampNode.style.zIndex = this.props.zIndex;
    document.body.appendChild(this._webampNode);
    this.props.browserWindowSizeChanged(getWindowSize());
    window.addEventListener("resize", this._handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._handleWindowResize);
    document.body.removeChild(this._webampNode);
  }

  componentDidMount() {
    this._setFocus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.focused !== this.props.focused) {
      this._setFocus();
    }
  }

  _setFocus() {
    const binding = this._bindings[this.props.focused];

    if (binding && binding.node) {
      binding.node.focus();
    }
  }

  _gotRef(windowId, comp) {
    if (comp == null) {
      const binding = this._bindings[windowId];

      if (binding.remove) {
        binding.remove();
      }

      this._bindings[windowId] = null;
      return;
    }

    const node = react_dom_default.a.findDOMNode(comp);
    const binding = this._bindings[windowId];

    if (binding && binding.node === node) {
      return;
    }

    node.tabIndex = -1;

    const listener = e => this._emitter.trigger(windowId, e);

    node.addEventListener("keydown", listener);
    this._bindings[windowId] = {
      node,
      remove: () => {
        node.removeEventListener("keydown", listener);
      }
    };
  }

  _renderWindows() {
    const _this$props = this.props,
          media = _this$props.media,
          genWindowsInfo = _this$props.genWindowsInfo,
          filePickers = _this$props.filePickers;
    return objectMap(genWindowsInfo, (w, id) => {
      if (!w.open) {
        return null;
      }

      switch (id) {
        case WINDOWS.MAIN:
          return react_default.a.createElement(components_MainWindow, {
            ref: component => this._gotRef(id, component),
            analyser: media.getAnalyser(),
            filePickers: filePickers
          });

        case WINDOWS.EQUALIZER:
          return react_default.a.createElement(components_EqualizerWindow, {
            ref: component => this._gotRef(id, component)
          });

        case WINDOWS.PLAYLIST:
          return react_default.a.createElement(components_PlaylistWindow, {
            ref: component => this._gotRef(id, component),
            analyser: media.getAnalyser()
          });

        case WINDOWS.MEDIA_LIBRARY:
          return react_default.a.createElement(components_MediaLibraryWindow, {
            ref: component => this._gotRef(id, component)
          });

        case WINDOWS.MILKDROP:
          return react_default.a.createElement(MilkdropWindow, {
            ref: component => this._gotRef(id, component),
            options: this.props.butterchurnOptions // TODO: Refactor this. I don't think we need this to be generic anymore.
            ,
            onFocusedKeyDown: listener => this._emitter.on(id, listener),
            analyser: media.getAnalyser()
          });

        default:
          throw new Error("Tried to render an unknown window:", id);
      }
    });
  }

  render() {
    const _this$props2 = this.props,
          closed = _this$props2.closed,
          container = _this$props2.container,
          filePickers = _this$props2.filePickers;

    if (closed) {
      return null;
    }

    return react_dom_default.a.createPortal(react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(components_Skin, null), react_default.a.createElement(ContextMenuWrapper_ContextMenuWraper, {
      renderContents: () => react_default.a.createElement(MainWindow_MainContextMenu, {
        filePickers: filePickers
      })
    }, react_default.a.createElement(components_WindowManager, {
      windows: this._renderWindows(),
      container: container
    }))), this._webampNode);
  }

}

App_App.propTypes = {
  container: prop_types_default.a.instanceOf(Element)
};

const App_mapStateToProps = state => ({
  visualizerStyle: selectors_getVisualizerStyle(state),
  status: state.media.status,
  focused: state.windows.focused,
  closed: state.display.closed,
  genWindowsInfo: state.windows.genWindows,
  zIndex: state.display.zIndex
});

const App_mapDispatchToProps = dispatch => ({
  closeWindow: id => dispatch(closeWindow(id)),
  browserWindowSizeChanged: size => dispatch(browserWindowSizeChanged(size))
});

/* harmony default export */ var components_App = (connect_connect(App_mapStateToProps, App_mapDispatchToProps)(App_App));
// CONCATENATED MODULE: ./js/hotkeys.ts



const IGNORE_EVENTS_FROM_TAGS = new Set(["input", "textarea", "select"]);
function bindHotkeys(dispatch) {
  let keylog = [];
  const trigger = [78, // N
  85, // U
  76, // L
  76, // L
  83, // S
  79, // O
  70, // F
  84 // T
  ];

  const listener = e => {
    if (e.target instanceof Element && IGNORE_EVENTS_FROM_TAGS.has(e.target.tagName.toLowerCase())) {
      return;
    }

    if (e.ctrlKey) {
      switch (e.keyCode) {
        case 68:
          // CTRL+D
          dispatch(toggleDoubleSizeMode());
          e.preventDefault(); // Supress the "Bookmark" action on windows.

          break;

        case 76:
          // CTRL+L FIXME
          break;

        case 82:
          // CTRL+R
          dispatch(reverseList());
          break;

        case 84:
          // CTRL+T
          dispatch({
            type: TOGGLE_TIME_MODE
          });
          break;
      }
    } else if (e.altKey) {
      switch (e.keyCode) {
        case 87:
          // ALT+W
          dispatch(toggleWindow("main"));
          break;

        case 69:
          // ALT+E
          dispatch(toggleWindow("playlist"));
          break;

        case 71:
          // ALT+G
          dispatch(toggleWindow("equalizer"));
          break;
      }
    } else {
      switch (e.keyCode) {
        case 37:
          // left arrow
          dispatch(seekBackward(5));
          break;

        case 38:
          // up arrow
          dispatch(adjustVolume(1));
          break;

        case 39:
          // right arrow
          dispatch(seekForward(5));
          break;

        case 40:
          // down arrow
          dispatch(adjustVolume(-1));
          break;

        case 66:
          // B
          dispatch(media_next());
          break;

        case 67:
          // C
          dispatch(pause());
          break;

        case 76:
          // L
          dispatch(openMediaFileDialog());
          break;

        case 82:
          // R
          dispatch(toggleRepeat());
          break;

        case 83:
          // S
          dispatch(toggleShuffle());
          break;

        case 86:
          // V
          dispatch(stop());
          break;

        case 88:
          // X
          dispatch(play());
          break;

        case 90:
          // Z
          dispatch(media_previous());
          break;

        case 96:
          // numpad 0
          dispatch(openMediaFileDialog());
          break;

        case 97:
          // numpad 1
          dispatch(nextN(-10));
          break;

        case 98:
          // numpad 2
          dispatch(adjustVolume(-1));
          break;

        case 99:
          // numpad 3
          dispatch(nextN(10));
          break;

        case 100:
          // numpad 4
          dispatch(media_previous());
          break;

        case 101:
          // numpad 5
          dispatch(play());
          break;

        case 102:
          // numpad 6
          dispatch(media_next());
          break;

        case 103:
          // numpad 7
          dispatch(seekBackward(5));
          break;

        case 104:
          // numpad 8
          dispatch(adjustVolume(1));
          break;

        case 105:
          // numpad 9
          dispatch(seekForward(5));
          break;
      }
    } // Easter Egg
    // Ignore escape. Usually this gets swallowed by the browser, but not always.


    if (e.keyCode !== 27) {
      keylog.push(e.keyCode);
      keylog = keylog.slice(-8);

      if (arraysAreEqual(keylog, trigger)) {
        dispatch({
          type: TOGGLE_LLAMA_MODE
        });
      }
    }
  };

  document.addEventListener("keydown", listener);
  return () => {
    document.removeEventListener("keydown", listener);
  };
}
// EXTERNAL MODULE: ./node_modules/stereo-panner-node/index.js
var stereo_panner_node = __webpack_require__(98);
var stereo_panner_node_default = /*#__PURE__*/__webpack_require__.n(stereo_panner_node);

// CONCATENATED MODULE: ./js/media/elementSource.ts




class elementSource_ElementSource {
  on(eventType, cb) {
    return this._emitter.on(eventType, cb);
  }

  constructor(context, destination) {
    defineProperty_default()(this, "_emitter", void 0);

    defineProperty_default()(this, "_context", void 0);

    defineProperty_default()(this, "_source", void 0);

    defineProperty_default()(this, "_destination", void 0);

    defineProperty_default()(this, "_audio", void 0);

    defineProperty_default()(this, "_stalled", void 0);

    defineProperty_default()(this, "_status", void 0);

    this._emitter = new emitter_Emitter();
    this._context = context;
    this._destination = destination;
    this._audio = document.createElement("audio");
    this._audio.crossOrigin = "anonymous";
    this._stalled = false;
    this._status = MEDIA_STATUS.STOPPED;

    this._audio.addEventListener("suspend", () => {
      this._setStalled(true);
    });

    this._audio.addEventListener("durationchange", () => {
      this._emitter.trigger("loaded");

      this._setStalled(false);
    });

    this._audio.addEventListener("ended", () => {
      this._emitter.trigger("ended");

      this._setStatus(MEDIA_STATUS.STOPPED);
    }); // TODO: Throttle to 50 (if needed)


    this._audio.addEventListener("timeupdate", () => {
      this._emitter.trigger("positionChange");
    });

    this._audio.addEventListener("error", e => {
      switch (this._audio.error.code) {
        case 1:
          // The fetching of the associated resource was aborted by the user's request.
          console.error("MEDIA_ERR_ABORTED", e);
          break;

        case 2:
          console.error("MEDIA_ERR_NETWORK", e); // Some kind of network error occurred which prevented the media from being successfully fetched, despite having previously been available.

          break;

        case 3:
          // Despite having previously been determined to be usable, an error occurred while trying to decode the media resource, resulting in an error.
          // There is a bug in Chrome where improperly terminated mp3s can cuase this error.
          // https://bugs.chromium.org/p/chromium/issues/detail?id=794782
          // Related: Commit f44e826c83c74fef04c2c448af30cfb353b28312
          console.error("PIPELINE_ERROR_DECODE", e);
          break;

        case 4:
          console.error("MEDIA_ERR_SRC_NOT_SUPPORTED", e); // The associated resource or media provider object (such as a MediaStream) has been found to be unsuitable.

          break;
      } // Rather than just geting stuck in this error state, we can just pretend this is
      // the end of the track.


      this._emitter.trigger("ended");

      this._setStatus(MEDIA_STATUS.STOPPED);
    });

    this._source = this._context.createMediaElementSource(this._audio);

    this._source.connect(destination);
  }

  _setStalled(stalled) {
    this._stalled = stalled;

    this._emitter.trigger("stallChanged");
  }

  disconnect() {
    this._source.disconnect();
  } // Async for now, for compatibility with BufferAudioSource
  // TODO: This does not need to be async


  async loadUrl(url) {
    this._audio.src = url;
  }

  async play() {
    if (this._status !== MEDIA_STATUS.PAUSED) {
      this.seekToTime(0);
    }

    try {
      await this._audio.play();
    } catch (err) {//
    }

    this._setStatus(MEDIA_STATUS.PLAYING);
  }

  pause() {
    this._audio.pause();

    this._setStatus(MEDIA_STATUS.PAUSED);
  }

  stop() {
    this._audio.pause();

    this._audio.currentTime = 0;

    this._setStatus(MEDIA_STATUS.STOPPED);
  }

  seekToTime(time) {
    /* TODO: We could check if this is actually seekable:
    const { seekable } = this._audio;
    for (let i = 0; i < seekable.length; i++) {
      console.log("start", seekable.start(i), "end", seekable.end(i));
    }
    */
    this._audio.currentTime = clamp(time, 0, this.getDuration());

    this._emitter.trigger("positionChange");
  }

  getStalled() {
    return this._stalled;
  }

  getStatus() {
    return this._status;
  }

  getDuration() {
    const duration = this._audio.duration; // Safari on iOS currently has a strange behavior where it reports
    // the duration as infinity if an Accept-Ranges header is not returned.
    // For now, 0 is better even though it's still wrong.

    return isNaN(duration) || duration === Infinity ? 0 : duration;
  }

  getTimeElapsed() {
    return this._audio.currentTime;
  }

  _setStatus(status) {
    this._status = status;

    this._emitter.trigger("statusChange");
  }

  dispose() {
    // TODO: Dispose subscriptions to this.audio
    this.stop();

    this._emitter.dispose();
  }

}
// CONCATENATED MODULE: ./js/media/index.ts


/* Emulate the native <audio> element with Web Audio API */
 // Safari does not, yet, support the StereoPannerNode, so we use this polyfill
// Hopefully this can be removed in thefuture.





function createStereoPanner(context) {
  if ("createStereoPanner" in context) {
    return context.createStereoPanner();
  }

  return new stereo_panner_node_default.a(context);
}

class media_Media {
  constructor() {
    defineProperty_default()(this, "_emitter", void 0);

    defineProperty_default()(this, "_context", void 0);

    defineProperty_default()(this, "_balance", void 0);

    defineProperty_default()(this, "_staticSource", void 0);

    defineProperty_default()(this, "_preamp", void 0);

    defineProperty_default()(this, "_panner", void 0);

    defineProperty_default()(this, "_analyser", void 0);

    defineProperty_default()(this, "_gainNode", void 0);

    defineProperty_default()(this, "_source", void 0);

    defineProperty_default()(this, "_bands", void 0);

    this._emitter = new emitter_Emitter(); // @ts-ignore Typescript does not know about webkitAudioContext

    this._context = new (window.AudioContext || window.webkitAudioContext)(); // Fix for iOS and Chrome (Canary) which require that the context be created
    // or resumed by a user interaction.
    // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
    // https://gist.github.com/laziel/7aefabe99ee57b16081c
    // Via: https://stackoverflow.com/a/43395068/1263117

    if (this._context.state === "suspended") {
      const resume = async () => {
        await this._context.resume();

        if (this._context.state === "running") {
          // TODO: Add this to the disposable
          document.body.removeEventListener("touchend", resume, false);
          document.body.removeEventListener("click", resume, false);
          document.body.removeEventListener("keydown", resume, false);
        }
      };

      document.body.addEventListener("touchend", resume, false);
      document.body.addEventListener("click", resume, false);
      document.body.addEventListener("keydown", resume, false);
    }

    this._balance = 0; // The _source node has to be recreated each time it's stopped or
    // paused, so we don't create it here. Instead we create this dummy
    // node wich the real source will connect to.
    // TODO: Maybe we can get rid of this now that we are using AudioAbstraction?

    this._staticSource = this._context.createAnalyser(); // Just a noop node
    // Create the preamp node

    this._preamp = this._context.createGain(); // Create the panner node

    this._panner = createStereoPanner(this._context); // Create the analyser node for the visualizer

    this._analyser = this._context.createAnalyser();
    this._analyser.fftSize = 2048; // don't smooth audio analysis

    this._analyser.smoothingTimeConstant = 0.0; // Create the gain node for the volume control

    this._gainNode = this._context.createGain(); // Connect all the nodes in the correct way
    // (Note, source is created and connected later)
    //
    //                <source>
    //                    |
    //                    |_____________
    //                    |             \
    //                <preamp>          |
    //                    |             | <-- Optional bypass
    //           [...biquadFilters]     |
    //                    |_____________/
    //                    |
    //               <stereoPanner>
    //                    |
    //                    |\
    //                    | <analyser>
    //                  <gain>
    //                    |
    //              <destination>

    this._source = new elementSource_ElementSource(this._context, this._staticSource);

    this._source.on("positionChange", () => {
      this._emitter.trigger("timeupdate");
    });

    this._source.on("ended", () => {
      this._emitter.trigger("ended");
    });

    this._source.on("statusChange", () => {
      switch (this._source.getStatus()) {
        case MEDIA_STATUS.PLAYING:
          this._emitter.trigger("playing");

          break;
      }

      this._emitter.trigger("timeupdate");
    });

    this._source.on("loaded", () => {
      this._emitter.trigger("fileLoaded");
    });

    this._staticSource.connect(this._preamp);

    let output = this._preamp;
    this._bands = {};
    BANDS.forEach((band, i) => {
      const filter = this._context.createBiquadFilter();

      this._bands[band] = filter;

      if (i === 0) {
        // The first filter, includes all lower frequencies
        filter.type = "lowshelf";
      } else if (i === BANDS.length - 1) {
        // The last filter, includes all higher frequencies
        filter.type = "highshelf";
      } else {
        filter.type = "peaking";
      }

      filter.frequency.value = band;
      filter.gain.value = 0;
      output.connect(filter);
      output = filter;
    });
    output.connect(this._panner);

    this._panner.connect(this._gainNode);

    this._panner.connect(this._analyser);

    this._gainNode.connect(this._context.destination);
  }

  getAnalyser() {
    return this._analyser;
  }
  /* Properties */


  duration() {
    return this._source.getDuration();
  }

  timeElapsed() {
    return this._source.getTimeElapsed();
  }

  timeRemaining() {
    return this.duration() - this.timeElapsed();
  }

  percentComplete() {
    return this.timeElapsed() / this.duration() * 100;
  }
  /* Actions */


  async play() {
    await this._source.play();
  }

  pause() {
    this._source.pause();
  }

  stop() {
    this._source.stop();
  }
  /* Actions with arguments */


  seekToPercentComplete(percent) {
    const seekTime = this.duration() * (percent / 100);
    this.seekToTime(seekTime);
  } // From 0-1


  setVolume(volume) {
    this._gainNode.gain.value = volume / 100;
  } // From 0-1


  setPreamp(value) {
    this._preamp.gain.value = value / 100;
  } // From -100 to 100


  setBalance(balance) {
    this._panner.pan.setValueAtTime(balance / 100, this._context.currentTime);
  }

  setEqBand(band, value) {
    const db = value / 100 * 24 - 12;
    this._bands[band].gain.value = db;
  }

  disableEq() {
    this._staticSource.disconnect();

    this._staticSource.connect(this._panner);
  }

  enableEq() {
    this._staticSource.disconnect();

    this._staticSource.connect(this._preamp);
  }
  /* Listeners */


  on(event, callback) {
    this._emitter.on(event, callback);
  }

  seekToTime(time) {
    this._source.seekToTime(time);
  } // Used only for the initial load, since it must have a CORS header


  async loadFromUrl(url, autoPlay) {
    this._emitter.trigger("waiting");

    await this._source.loadUrl(url);

    this._emitter.trigger("stopWaiting");

    if (autoPlay) {
      this.play();
    }
  }

  dispose() {
    this._source.dispose();

    this._emitter.dispose();
  }

}
// EXTERNAL MODULE: ./css/base-skin.min.css
var base_skin_min = __webpack_require__(199);

// CONCATENATED MODULE: ./js/Disposable.ts

class Disposable_Disposable {
  constructor() {
    defineProperty_default()(this, "_teardowns", []);
  }

  add() {
    this._teardowns.push(...arguments);
  }

  dispose() {
    this._teardowns.forEach(teardown => {
      if (typeof teardown === "function") {
        teardown();
      } else if (typeof teardown.dispose === "function") {
        teardown.dispose();
      }
    });
  }

}
// CONCATENATED MODULE: ./js/webampLazy.tsx

















// Return a promise that resolves when the store matches a predicate.
const storeHas = (store, predicate) => new Promise(resolve => {
  if (predicate(store.getState())) {
    resolve();
    return;
  }

  const unsubscribe = store.subscribe(() => {
    if (predicate(store.getState())) {
      resolve();
      unsubscribe();
    }
  });
});

class webampLazy_Winamp {
  // TODO: Make this _private
  // TODO: Make this _private
  // TODO: Make this _private
  static browserIsSupported() {
    const supportsAudioApi = !!(window.AudioContext || // @ts-ignore
    window.webkitAudioContext);
    const supportsCanvas = !!window.document.createElement("canvas").getContext;
    const supportsPromises = typeof Promise !== "undefined";
    return supportsAudioApi && supportsCanvas && supportsPromises;
  }

  constructor(options) {
    defineProperty_default()(this, "_actionEmitter", void 0);

    defineProperty_default()(this, "_node", void 0);

    defineProperty_default()(this, "_disposable", void 0);

    defineProperty_default()(this, "options", void 0);

    defineProperty_default()(this, "media", void 0);

    defineProperty_default()(this, "store", void 0);

    this._node = null;
    this._disposable = new Disposable_Disposable();
    this._actionEmitter = new emitter_Emitter();
    this.options = options;
    const _this$options = this.options,
          initialTracks = _this$options.initialTracks,
          initialSkin = _this$options.initialSkin,
          avaliableSkins = _this$options.avaliableSkins,
          availableSkins = _this$options.availableSkins,
          _this$options$enableH = _this$options.enableHotkeys,
          enableHotkeys = _this$options$enableH === void 0 ? false : _this$options$enableH,
          zIndex = _this$options.zIndex,
          requireJSZip = _this$options.requireJSZip,
          requireMusicMetadata = _this$options.requireMusicMetadata; // TODO: Validate required options

    this.media = new media_Media();
    this.store = js_store(this.media, this._actionEmitter, this.options.__customMiddlewares, this.options.__initialState, {
      requireJSZip,
      requireMusicMetadata
    });

    if (navigator.onLine) {
      this.store.dispatch({
        type: NETWORK_CONNECTED
      });
    } else {
      this.store.dispatch({
        type: NETWORK_DISCONNECTED
      });
    }

    if (zIndex != null) {
      this.store.dispatch({
        type: SET_Z_INDEX,
        zIndex
      });
    }

    if (options.__butterchurnOptions) {
      this.store.dispatch({
        type: ENABLE_MILKDROP,
        open: options.__butterchurnOptions.butterchurnOpen
      });
    }

    if (options.__enableMediaLibrary) {
      this.store.dispatch({
        type: ENABLE_MEDIA_LIBRARY
      });
    }

    const handleOnline = () => this.store.dispatch({
      type: NETWORK_CONNECTED
    });

    const handleOffline = () => this.store.dispatch({
      type: NETWORK_DISCONNECTED
    });

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    this._disposable.add(() => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    });

    if (initialSkin) {
      this.store.dispatch(setSkinFromUrl(initialSkin.url));
    } else {
      // We are using the default skin.
      this.store.dispatch({
        type: LOADED
      });
    }

    if (initialTracks) {
      this._bufferTracks(initialTracks);
    }

    if (avaliableSkins != null) {
      console.warn("The misspelled option `avaliableSkins` is deprecated. Please use `availableSkins` instead.");
      this.store.dispatch({
        type: SET_AVAILABLE_SKINS,
        skins: avaliableSkins
      });
    } else if (availableSkins != null) {
      this.store.dispatch({
        type: SET_AVAILABLE_SKINS,
        skins: availableSkins
      });
    }

    const layout = options.__initialWindowLayout;

    if (layout == null) {
      this.store.dispatch(stackWindows());
    } else {
      objectForEach(layout, (w, windowId) => {
        if (w.size != null) {
          this.store.dispatch(windows_setWindowSize(windowId, w.size));
        }
      });
      this.store.dispatch(updateWindowPositions(objectMap(layout, w => w.position), false));
    }

    if (enableHotkeys) {
      this._disposable.add(bindHotkeys(this.store.dispatch));
    }
  }

  play() {
    this.store.dispatch(play());
  }

  pause() {
    this.store.dispatch(pause());
  }

  seekBackward(seconds) {
    this.store.dispatch(seekBackward(seconds));
  }

  seekForward(seconds) {
    this.store.dispatch(seekForward(seconds));
  }

  nextTrack() {
    this.store.dispatch(media_next());
  }

  previousTrack() {
    this.store.dispatch(media_previous());
  }

  _bufferTracks(tracks) {
    const nextIndex = getTrackCount(this.store.getState());
    this.store.dispatch(loadMediaFiles(tracks, LOAD_STYLE.BUFFER, nextIndex));
  } // Append this array of tracks to the end of the current playlist.


  appendTracks(tracks) {
    const nextIndex = getTrackCount(this.store.getState());
    this.store.dispatch(loadMediaFiles(tracks, LOAD_STYLE.NONE, nextIndex));
  } // Replace any existing tracks with this array of tracks, and begin playing.


  setTracksToPlay(tracks) {
    this.store.dispatch(loadMediaFiles(tracks, LOAD_STYLE.PLAY));
  }

  onWillClose(cb) {
    return this._actionEmitter.on(CLOSE_REQUESTED, action => {
      cb(action.cancel);
    });
  }

  onClose(cb) {
    return this._actionEmitter.on(CLOSE_WINAMP, cb);
  }

  reopen() {
    this.store.dispatch(actionCreators_open());
  }

  onTrackDidChange(cb) {
    let previousTrackId = null;
    return this.store.subscribe(() => {
      const state = this.store.getState();
      const trackId = getCurrentlyPlayingTrackIdIfLoaded(state);

      if (trackId === previousTrackId) {
        return;
      }

      previousTrackId = trackId;
      cb(trackId == null ? null : getCurrentTrackInfo(state));
    });
  }

  onMinimize(cb) {
    return this._actionEmitter.on(MINIMIZE_WINAMP, cb);
  }

  async skinIsLoaded() {
    // Wait for the skin to load.
    return storeHas(this.store, state => !state.display.loading);
  }

  __loadSerializedState(serializedState) {
    this.store.dispatch(loadSerializedState(serializedState));
  }

  __getSerializedState() {
    return getSerlializedState(this.store.getState());
  }

  __onStateChange(cb) {
    return this.store.subscribe(cb);
  }

  async renderWhenReady(node) {
    this.store.dispatch(centerWindowsInContainer(node));
    await this.skinIsLoaded();

    if (this._node != null) {
      throw new Error("Cannot render a Webamp instance twice");
    }

    this._node = node;

    this._disposable.add(() => {
      if (this._node != null) {
        react_dom_default.a.unmountComponentAtNode(this._node);
        this._node = null;
      }
    });

    react_dom_default.a.render(react_default.a.createElement(components_Provider, {
      store: this.store
    }, react_default.a.createElement(components_App, {
      media: this.media,
      container: node,
      filePickers: this.options.filePickers,
      butterchurnOptions: this.options.__butterchurnOptions
    })), node);
  }

  dispose() {
    // TODO: Clean up store subscription in onTrackDidChange
    // TODO: Every storeHas call represents a potential race condition
    this.media.dispose();

    this._actionEmitter.dispose();

    this._disposable.dispose();
  }

}

/* harmony default export */ var webampLazy = __webpack_exports__["default"] = (webampLazy_Winamp);

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0-alpha.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(50),l="function"===typeof Symbol&&Symbol.for,p=l?Symbol.for("react.element"):60103,q=l?Symbol.for("react.portal"):60106,r=l?Symbol.for("react.fragment"):60107,t=l?Symbol.for("react.strict_mode"):60108,u=l?Symbol.for("react.profiler"):60114,v=l?Symbol.for("react.provider"):60109,w=l?Symbol.for("react.context"):60110,x=l?Symbol.for("react.concurrent_mode"):60111,y=l?Symbol.for("react.forward_ref"):60112,z=l?Symbol.for("react.suspense"):60113,A=l?Symbol.for("react.memo"):
60115,aa=l?Symbol.for("react.lazy"):60116,B="function"===typeof Symbol&&Symbol.iterator;function ba(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var m=[d,c,e,g,h,f],n=0;a=Error(b.replace(/%s/g,function(){return m[n++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function C(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};
function F(a,b,d){this.props=a;this.context=b;this.refs=E;this.updater=d||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?C("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function G(){}G.prototype=F.prototype;function H(a,b,d){this.props=a;this.context=b;this.refs=E;this.updater=d||D}var I=H.prototype=new G;
I.constructor=H;k(I,F.prototype);I.isPureReactComponent=!0;var J={current:null,currentDispatcher:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var m=Array(f),n=0;n<f;n++)m[n]=arguments[n+2];e.children=m}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
function ca(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,C("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function da(a,b){a.func.call(a.context,b,a.count++)}
function ea(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=ca(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,ea,b);R(b)}function W(){var a=J.currentDispatcher;null===a?C("298"):void 0;return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,da,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:C("143");return a}},createRef:function(){return{current:null}},Component:F,PureComponent:H,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:A,type:a,compare:void 0===b?null:b}},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?C("267",a):void 0;var c=void 0,e=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=b){void 0!==
b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var m=void 0;a.type&&a.type.defaultProps&&(m=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==m?m[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){m=Array(c);for(var n=0;n<c;n++)m[n]=arguments[n+2];e.children=m}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.7.0-alpha.0",
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:J,assign:k}};X.ConcurrentMode=x;X.Profiler=u;X.useCallback=function(a,b){return W().useCallback(a,b)};X.useContext=function(a,b){return W().useContext(a,b)};X.useEffect=function(a,b){return W().useEffect(a,b)};X.useImperativeMethods=function(a,b,d){return W().useImperativeMethods(a,b,d)};X.useLayoutEffect=function(a,b){return W().useLayoutEffect(a,b)};X.useMemo=function(a,b){return W().useMemo(a,b)};
X.useMutationEffect=function(a,b){return W().useMutationEffect(a,b)};X.useReducer=function(a,b,d){return W().useReducer(a,b,d)};X.useRef=function(a){return W().useRef(a)};X.useState=function(a){return W().useState(a)};var Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0-alpha.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(50),ba=__webpack_require__(119);function ca(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var k=[c,d,e,f,g,h],l=0;a=Error(b.replace(/%s/g,function(){return k[l++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function r(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:r("227");function da(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}
var ea=!1,ia=null,ja=!1,ka=null,la={onError:function(a){ea=!0;ia=a}};function ma(a,b,c,d,e,f,g,h,k){ea=!1;ia=null;da.apply(la,arguments)}function na(a,b,c,d,e,f,g,h,k){ma.apply(this,arguments);if(ea){if(ea){var l=ia;ea=!1;ia=null}else r("198"),l=void 0;ja||(ja=!0,ka=l)}}var oa=null,pa={};
function qa(){if(oa)for(var a in pa){var b=pa[a],c=oa.indexOf(a);-1<c?void 0:r("96",a);if(!ra[c]){b.extractEvents?void 0:r("97",a);ra[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;sa.hasOwnProperty(h)?r("99",h):void 0;sa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ta(k[e],g,h);e=!0}else f.registrationName?(ta(f.registrationName,g,h),e=!0):e=!1;e?void 0:r("98",d,a)}}}}
function ta(a,b,c){ua[a]?r("100",a):void 0;ua[a]=b;va[a]=b.eventTypes[c].dependencies}var ra=[],sa={},ua={},va={},wa=null,xa=null,ya=null;function za(a,b,c,d){b=a.type||"unknown-event";a.currentTarget=ya(d);na(b,c,void 0,a);a.currentTarget=null}function Aa(a,b){null==b?r("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function Ba(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var Ca=null;function Da(a,b){if(a){var c=a._dispatchListeners,d=a._dispatchInstances;if(Array.isArray(c))for(var e=0;e<c.length&&!a.isPropagationStopped();e++)za(a,b,c[e],d[e]);else c&&za(a,b,c,d);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ea(a){return Da(a,!0)}function Fa(a){return Da(a,!1)}
var Ga={injectEventPluginOrder:function(a){oa?r("101"):void 0;oa=Array.prototype.slice.call(a);qa()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];pa.hasOwnProperty(c)&&pa[c]===d||(pa[c]?r("102",c):void 0,pa[c]=d,b=!0)}b&&qa()}};
function Ha(a,b){var c=a.stateNode;if(!c)return null;var d=wa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?r("231",b,typeof c):void 0;
return c}function Ia(a,b){null!==a&&(Ca=Aa(Ca,a));a=Ca;Ca=null;if(a&&(b?Ba(a,Ea):Ba(a,Fa),Ca?r("95"):void 0,ja))throw b=ka,ja=!1,ka=null,b;}var Ja=Math.random().toString(36).slice(2),Ka="__reactInternalInstance$"+Ja,La="__reactEventHandlers$"+Ja;function Ma(a){if(a[Ka])return a[Ka];for(;!a[Ka];)if(a.parentNode)a=a.parentNode;else return null;a=a[Ka];return 5===a.tag||6===a.tag?a:null}function Na(a){a=a[Ka];return!a||5!==a.tag&&6!==a.tag?null:a}
function Oa(a){if(5===a.tag||6===a.tag)return a.stateNode;r("33")}function Pa(a){return a[La]||null}function Qa(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ra(a,b,c){if(b=Ha(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a)}
function Sa(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Qa(b);for(b=c.length;0<b--;)Ra(c[b],"captured",a);for(b=0;b<c.length;b++)Ra(c[b],"bubbled",a)}}function Ta(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ha(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Aa(c._dispatchListeners,b),c._dispatchInstances=Aa(c._dispatchInstances,a))}function Va(a){a&&a.dispatchConfig.registrationName&&Ta(a._targetInst,null,a)}
function Wa(a){Ba(a,Sa)}var Xa=!("undefined"===typeof window||!window.document||!window.document.createElement);function Ya(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Za={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},$a={},ab={};
Xa&&(ab=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function bb(a){if($a[a])return $a[a];if(!Za[a])return a;var b=Za[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in ab)return $a[a]=b[c];return a}
var cb=bb("animationend"),db=bb("animationiteration"),eb=bb("animationstart"),fb=bb("transitionend"),gb="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hb=null,ib=null,jb=null;
function kb(){if(jb)return jb;var a,b=ib,c=b.length,d,e="value"in hb?hb.value:hb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return jb=e.slice(a,1<d?1-d:void 0)}function lb(){return!0}function mb(){return!1}
function u(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?lb:mb;this.isPropagationStopped=mb;return this}
n(u.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=lb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=lb)},persist:function(){this.isPersistent=lb},isPersistent:mb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=mb;this._dispatchInstances=this._dispatchListeners=null}});u.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
u.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;nb(c);return c};nb(u);function ob(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function pb(a){a instanceof this?void 0:r("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function nb(a){a.eventPool=[];a.getPooled=ob;a.release=pb}var qb=u.extend({data:null}),rb=u.extend({data:null}),yb=[9,13,27,32],zb=Xa&&"CompositionEvent"in window,Ab=null;Xa&&"documentMode"in document&&(Ab=document.documentMode);
var Bb=Xa&&"TextEvent"in window&&!Ab,Cb=Xa&&(!zb||Ab&&8<Ab&&11>=Ab),Db=String.fromCharCode(32),Eb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Fb=!1;
function Gb(a,b){switch(a){case "keyup":return-1!==yb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Hb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Ib=!1;function Jb(a,b){switch(a){case "compositionend":return Hb(b);case "keypress":if(32!==b.which)return null;Fb=!0;return Db;case "textInput":return a=b.data,a===Db&&Fb?null:a;default:return null}}
function Kb(a,b){if(Ib)return"compositionend"===a||!zb&&Gb(a,b)?(a=kb(),jb=ib=hb=null,Ib=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Cb&&"ko"!==b.locale?null:b.data;default:return null}}
var Lb={eventTypes:Eb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(zb)b:{switch(a){case "compositionstart":e=Eb.compositionStart;break b;case "compositionend":e=Eb.compositionEnd;break b;case "compositionupdate":e=Eb.compositionUpdate;break b}e=void 0}else Ib?Gb(a,c)&&(e=Eb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=Eb.compositionStart);e?(Cb&&"ko"!==c.locale&&(Ib||e!==Eb.compositionStart?e===Eb.compositionEnd&&Ib&&(f=kb()):(hb=d,ib="value"in hb?hb.value:hb.textContent,Ib=
!0)),e=qb.getPooled(e,b,c,d),f?e.data=f:(f=Hb(c),null!==f&&(e.data=f)),Wa(e),f=e):f=null;(a=Bb?Jb(a,c):Kb(a,c))?(b=rb.getPooled(Eb.beforeInput,b,c,d),b.data=a,Wa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Mb=null,Nb=null,Ob=null;function Pb(a){if(a=xa(a)){"function"!==typeof Mb?r("280"):void 0;var b=wa(a.stateNode);Mb(a.stateNode,a.type,b)}}function Qb(a){Nb?Ob?Ob.push(a):Ob=[a]:Nb=a}function Rb(){if(Nb){var a=Nb,b=Ob;Ob=Nb=null;Pb(a);if(b)for(a=0;a<b.length;a++)Pb(b[a])}}
function Sb(a,b){return a(b)}function Tb(a,b,c){return a(b,c)}function Ub(){}var Vb=!1;function Wb(a,b){if(Vb)return a(b);Vb=!0;try{return Sb(a,b)}finally{if(Vb=!1,null!==Nb||null!==Ob)Ub(),Rb()}}var Xb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Xb[a.type]:"textarea"===b?!0:!1}
function ac(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function bc(a){if(!Xa)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function cc(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function dc(a){var b=cc(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function ec(a){a._valueTracker||(a._valueTracker=dc(a))}function jc(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=cc(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}
var kc=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,lc=/^(.*)[\\\/]/,z="function"===typeof Symbol&&Symbol.for,mc=z?Symbol.for("react.element"):60103,nc=z?Symbol.for("react.portal"):60106,oc=z?Symbol.for("react.fragment"):60107,pc=z?Symbol.for("react.strict_mode"):60108,qc=z?Symbol.for("react.profiler"):60114,rc=z?Symbol.for("react.provider"):60109,sc=z?Symbol.for("react.context"):60110,tc=z?Symbol.for("react.concurrent_mode"):60111,uc=z?Symbol.for("react.forward_ref"):60112,vc=z?Symbol.for("react.suspense"):
60113,wc=z?Symbol.for("react.memo"):60115,xc=z?Symbol.for("react.lazy"):60116,yc="function"===typeof Symbol&&Symbol.iterator;function zc(a){if(null===a||"object"!==typeof a)return null;a=yc&&a[yc]||a["@@iterator"];return"function"===typeof a?a:null}
function Ac(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case tc:return"ConcurrentMode";case oc:return"Fragment";case nc:return"Portal";case qc:return"Profiler";case pc:return"StrictMode";case vc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case sc:return"Context.Consumer";case rc:return"Context.Provider";case uc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case wc:return Ac(a.type);case xc:if(a=1===a._status?a._result:null)return Ac(a)}return null}function Bc(a){var b="";do{a:switch(a.tag){case 2:case 16:case 0:case 1:case 5:case 8:var c=a._debugOwner,d=a._debugSource,e=Ac(a.type);var f=null;c&&(f=Ac(c.type));c=e;e="";d?e=" (at "+d.fileName.replace(lc,"")+":"+d.lineNumber+")":f&&(e=" (created by "+f+")");f="\n    in "+(c||"Unknown")+e;break a;default:f=""}b+=f;a=a.return}while(a);return b}
var Cc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dc=Object.prototype.hasOwnProperty,Ec={},Fc={};
function Gc(a){if(Dc.call(Fc,a))return!0;if(Dc.call(Ec,a))return!1;if(Cc.test(a))return Fc[a]=!0;Ec[a]=!0;return!1}function Hc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ic(a,b,c,d){if(null===b||"undefined"===typeof b||Hc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new C(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new C(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new C(a,3,!0,a,null)});
["capture","download"].forEach(function(a){D[a]=new C(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){D[a]=new C(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null)});var Jc=/[\-:]([a-z])/g;function Kc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Jc,
Kc);D[b]=new C(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Jc,Kc);D[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Jc,Kc);D[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});D.tabIndex=new C("tabIndex",1,!1,"tabindex",null);
function Lc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ic(b,c,e,d)&&(c=null),d||null===e?Gc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function Mc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Nc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Oc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Mc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Pc(a,b){b=b.checked;null!=b&&Lc(a,"checked",b,!1)}
function Qc(a,b){Pc(a,b);var c=Mc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Rc(a,b.type,c):b.hasOwnProperty("defaultValue")&&Rc(a,b.type,Mc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Sc(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Rc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Tc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Uc(a,b,c){a=u.getPooled(Tc.change,a,b,c);a.type="change";Qb(c);Wa(a);return a}var Vc=null,Wc=null;function Xc(a){Ia(a,!1)}
function Yc(a){var b=Oa(a);if(jc(b))return a}function bd(a,b){if("change"===a)return b}var cd=!1;Xa&&(cd=bc("input")&&(!document.documentMode||9<document.documentMode));function dd(){Vc&&(Vc.detachEvent("onpropertychange",ed),Wc=Vc=null)}function ed(a){"value"===a.propertyName&&Yc(Wc)&&(a=Uc(Wc,a,ac(a)),Wb(Xc,a))}function fd(a,b,c){"focus"===a?(dd(),Vc=b,Wc=c,Vc.attachEvent("onpropertychange",ed)):"blur"===a&&dd()}function gd(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Yc(Wc)}
function hd(a,b){if("click"===a)return Yc(b)}function id(a,b){if("input"===a||"change"===a)return Yc(b)}
var jd={eventTypes:Tc,_isInputEventSupported:cd,extractEvents:function(a,b,c,d){var e=b?Oa(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=bd:Yb(e)?cd?f=id:(f=gd,g=fd):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=hd);if(f&&(f=f(a,b)))return Uc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Rc(e,"number",e.value)}},kd=u.extend({view:null,detail:null}),ld={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function td(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=ld[a])?!!b[a]:!1}function ud(){return td}
var vd=0,wd=0,xd=!1,yd=!1,zd=kd.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:ud,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=vd;vd=a.screenX;return xd?"mousemove"===a.type?a.screenX-b:0:(xd=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=wd;wd=a.screenY;return yd?"mousemove"===a.type?a.screenY-b:0:(yd=!0,0)}}),Ad=zd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Bd={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Cd={eventTypes:Bd,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ma(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,k=void 0,l=void 0;if("mouseout"===a||"mouseover"===a)g=zd,h=Bd.mouseLeave,k=Bd.mouseEnter,l="mouse";
else if("pointerout"===a||"pointerover"===a)g=Ad,h=Bd.pointerLeave,k=Bd.pointerEnter,l="pointer";var m=null==f?e:Oa(f);e=null==b?e:Oa(b);a=g.getPooled(h,f,c,d);a.type=l+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(k,b,c,d);c.type=l+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;l=0;for(g=b;g;g=Qa(g))l++;g=0;for(k=e;k;k=Qa(k))g++;for(;0<l-g;)b=Qa(b),l--;for(;0<g-l;)e=Qa(e),g--;for(;l--;){if(b===e||b===e.alternate)break a;b=Qa(b);e=Qa(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){l=
f.alternate;if(null!==l&&l===e)break;b.push(f);f=Qa(f)}for(f=[];d&&d!==e;){l=d.alternate;if(null!==l&&l===e)break;f.push(d);d=Qa(d)}for(d=0;d<b.length;d++)Ta(b[d],"bubbled",a);for(d=f.length;0<d--;)Ta(f[d],"captured",c);return[a,c]}},Dd=Object.prototype.hasOwnProperty;function Ed(a,b){return a===b?0!==a||0!==b||1/a===1/b:a!==a&&b!==b}
function Fd(a,b){if(Ed(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Dd.call(b,c[d])||!Ed(a[c[d]],b[c[d]]))return!1;return!0}function Gd(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function Hd(a){2!==Gd(a)?r("188"):void 0}
function Id(a){var b=a.alternate;if(!b)return b=Gd(a),3===b?r("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return Hd(e),a;if(g===d)return Hd(e),b;g=g.sibling}r("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:r("189")}}c.alternate!==d?r("190"):void 0}3!==c.tag?r("188"):void 0;return c.stateNode.current===c?a:b}function Jd(a){a=Id(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var Kd=u.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Ld=u.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Md=kd.extend({relatedTarget:null});function Nd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var Od={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qd=kd.extend({key:function(a){if(a.key){var b=Od[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=Nd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Pd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:ud,charCode:function(a){return"keypress"===
a.type?Nd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?Nd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=zd.extend({dataTransfer:null}),Sd=kd.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:ud}),Td=u.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Ud=zd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Vd=[["abort","abort"],[cb,"animationEnd"],[db,"animationIteration"],[eb,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[fb,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],Wd={},Xd={};function Yd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};Wd[a]=b;Xd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){Yd(a,!0)});Vd.forEach(function(a){Yd(a,!1)});
var Zd={eventTypes:Wd,isInteractiveTopLevelEventType:function(a){a=Xd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=Xd[a];if(!e)return null;switch(a){case "keypress":if(0===Nd(c))return null;case "keydown":case "keyup":a=Qd;break;case "blur":case "focus":a=Md;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=zd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
Rd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=Sd;break;case cb:case db:case eb:a=Kd;break;case fb:a=Td;break;case "scroll":a=kd;break;case "wheel":a=Ud;break;case "copy":case "cut":case "paste":a=Ld;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Ad;break;default:a=u}b=a.getPooled(e,b,c,d);Wa(b);return b}},$d=Zd.isInteractiveTopLevelEventType,
ae=[];function be(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ma(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=ac(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<ra.length;h++){var k=ra[h];k&&(k=k.extractEvents(d,b,f,e))&&(g=Aa(g,k))}Ia(g,!1)}}var ce=!0;
function G(a,b){if(!b)return null;var c=($d(a)?de:ee).bind(null,a);b.addEventListener(a,c,!1)}function fe(a,b){if(!b)return null;var c=($d(a)?de:ee).bind(null,a);b.addEventListener(a,c,!0)}function de(a,b){Tb(ee,a,b)}
function ee(a,b){if(ce){var c=ac(b);c=Ma(c);null===c||"number"!==typeof c.tag||2===Gd(c)||(c=null);if(ae.length){var d=ae.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Wb(be,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>ae.length&&ae.push(a)}}}var ge={},he=0,ie="_reactListenersID"+(""+Math.random()).slice(2);
function je(a){Object.prototype.hasOwnProperty.call(a,ie)||(a[ie]=he++,ge[a[ie]]={});return ge[a[ie]]}function ke(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function le(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function me(a,b){var c=le(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=le(c)}}function ne(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?ne(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function oe(){for(var a=window,b=ke();b instanceof a.HTMLIFrameElement;){try{a=b.contentDocument.defaultView}catch(c){break}b=ke(a.document)}return b}function pe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var qe=Xa&&"documentMode"in document&&11>=document.documentMode,re={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},se=null,te=null,ue=null,ve=!1;
function we(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(ve||null==se||se!==ke(c))return null;c=se;"selectionStart"in c&&pe(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return ue&&Fd(ue,c)?null:(ue=c,a=u.getPooled(re.select,te,a,b),a.type="select",a.target=se,Wa(a),a)}
var xe={eventTypes:re,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=je(e);f=va.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Oa(b):window;switch(a){case "focus":if(Yb(e)||"true"===e.contentEditable)se=e,te=b,ue=null;break;case "blur":ue=te=se=null;break;case "mousedown":ve=!0;break;case "contextmenu":case "mouseup":case "dragend":return ve=!1,we(c,d);case "selectionchange":if(qe)break;
case "keydown":case "keyup":return we(c,d)}return null}};Ga.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));wa=Pa;xa=Na;ya=Oa;Ga.injectEventPluginsByName({SimpleEventPlugin:Zd,EnterLeaveEventPlugin:Cd,ChangeEventPlugin:jd,SelectEventPlugin:xe,BeforeInputEventPlugin:Lb});function ye(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function ze(a,b){a=n({children:void 0},b);if(b=ye(b.children))a.children=b;return a}function Ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Mc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Be(a,b){null!=b.dangerouslySetInnerHTML?r("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function De(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?r("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:r("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:Mc(c)}}
function Ee(a,b){var c=Mc(b.value),d=Mc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Fe(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var Ge={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function He(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ie(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?He(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Je=void 0,Ke=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Ge.svg||"innerHTML"in a)a.innerHTML=b;else{Je=Je||document.createElement("div");Je.innerHTML="<svg>"+b+"</svg>";for(b=Je.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Le(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var Me={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(a){Ne.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Me[b]=Me[a]})});
function Oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--");var e=c;var f=b[c];e=null==f||"boolean"===typeof f||""===f?"":d||"number"!==typeof f||0===f||Me.hasOwnProperty(e)&&Me[e]?(""+f).trim():f+"px";"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Pe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function Qe(a,b){b&&(Pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?r("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?r("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:r("61")),null!=b.style&&"object"!==typeof b.style?r("62",""):void 0)}
function Re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function Se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=je(a);b=va[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":fe("scroll",a);break;case "focus":case "blur":fe("focus",a);fe("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":bc(e)&&fe(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===gb.indexOf(e)&&G(e,a)}c[e]=!0}}}function Te(){}var Ue=null,lf=null;
function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of=setTimeout,pf=clearTimeout;function qf(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}
function rf(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var sf=[],tf=-1;function I(a){0>tf||(a.current=sf[tf],sf[tf]=null,tf--)}function J(a,b){tf++;sf[tf]=a.current;a.current=b}var uf={},K={current:uf},L={current:!1},vf=uf;
function wf(a,b){var c=a.type.contextTypes;if(!c)return uf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function M(a){a=a.childContextTypes;return null!==a&&void 0!==a}function xf(a){I(L,a);I(K,a)}function yf(a){I(L,a);I(K,a)}
function zf(a,b,c){K.current!==uf?r("168"):void 0;J(K,b,a);J(L,c,a)}function Af(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:r("108",Ac(b)||"Unknown",e);return n({},c,d)}function Bf(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||uf;vf=K.current;J(K,b,a);J(L,L.current,a);return!0}
function Cf(a,b,c){var d=a.stateNode;d?void 0:r("169");c?(b=Af(a,b,vf),d.__reactInternalMemoizedMergedChildContext=b,I(L,a),I(K,a),J(K,b,a)):I(L,a);J(L,c,a)}var Df=null,Ef=null;function Ff(a){return function(b){try{return a(b)}catch(c){}}}
function Gf(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Df=Ff(function(a){return b.onCommitFiberRoot(c,a)});Ef=Ff(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Hf(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.firstContextDependency=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function N(a,b,c,d){return new Hf(a,b,c,d)}
function If(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Jf(a){if("function"===typeof a)return If(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===uc)return 11;if(a===wc)return 14}return 2}
function Kf(a,b){var c=a.alternate;null===c?(c=N(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.firstContextDependency=a.firstContextDependency;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Lf(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)If(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case oc:return Mf(c.children,e,f,b);case tc:return Nf(c,e|3,f,b);case pc:return Nf(c,e|2,f,b);case qc:return a=N(12,c,b,e|4),a.elementType=qc,a.type=qc,a.expirationTime=f,a;case vc:return a=N(13,c,b,e),a.elementType=vc,a.type=vc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case rc:g=10;break a;case sc:g=9;break a;case uc:g=11;break a;case wc:g=
14;break a;case xc:g=16;d=null;break a}r("130",null==a?a:typeof a,"")}b=N(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Mf(a,b,c,d){a=N(7,a,d,b);a.expirationTime=c;return a}function Nf(a,b,c,d){a=N(8,a,d,b);b=0===(b&1)?pc:tc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function Of(a,b,c){a=N(6,a,null,b);a.expirationTime=c;return a}
function Pf(a,b,c){b=N(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Qf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c>b?a.earliestPendingTime=b:a.latestPendingTime<b&&(a.latestPendingTime=b);Rf(b,a)}
function Sf(a,b){a.didError=!1;var c=a.latestPingedTime;0!==c&&c<=b&&(a.latestPingedTime=0);c=a.earliestPendingTime;var d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c>b?a.earliestSuspendedTime=b:d<b&&(a.latestSuspendedTime=b);Rf(b,a)}
function Tf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;if(0===b||0!==c&&c<b)b=c;if(0===b||0!==a&&a<b)b=a;return b}function Rf(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d>a)&&(e=d);a=e;0!==a&&0!==c&&c<a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}var Uf=!1;
function Vf(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Wf(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Xf(a){return{expirationTime:a,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Yf(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Zf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Vf(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Vf(a.memoizedState),e=c.updateQueue=Vf(c.memoizedState)):d=a.updateQueue=Wf(e):null===e&&(e=c.updateQueue=Wf(d));null===e||d===e?Yf(d,b):null===d.lastUpdate||null===e.lastUpdate?(Yf(d,b),Yf(e,b)):(Yf(d,b),e.lastUpdate=b)}
function $f(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Vf(a.memoizedState):ag(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function ag(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Wf(b));return b}
function bg(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-2049|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:Uf=!0}return d}
function cg(a,b,c,d,e){Uf=!1;b=ag(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;if(m>e){if(null===g&&(g=k,f=l),0===h||h>m)h=m}else l=bg(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var p=k.expirationTime;if(p>e){if(null===m&&(m=k,null===g&&(f=l)),0===h||h>p)h=p}else l=bg(a,b,k,l,c,d),
null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=l}
function dg(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);eg(b.firstEffect,c);b.firstEffect=b.lastEffect=null;eg(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function eg(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?r("191",c):void 0;c.call(d)}a=a.nextEffect}}
function fg(a,b){return{value:a,source:b,stack:Bc(b)}}var gg={current:null},hg=null,ig=null,jg=null;function kg(a,b){var c=a.type._context;J(gg,c._currentValue,a);c._currentValue=b}function lg(a){var b=gg.current;I(gg,a);a.type._context._currentValue=b}function mg(a){hg=a;jg=ig=null;a.firstContextDependency=null}
function ng(a,b){if(jg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)jg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===ig?(null===hg?r("293"):void 0,hg.firstContextDependency=ig=b):ig=ig.next=b}return a._currentValue}var og=0,O=null,pg=null,P=null,qg=null,Q=null,rg=0,R=null,sg=!1,tg=!1,ug=null,vg=0;function wg(){null===O?r("298"):void 0;return O}
function xg(a,b,c,d){for(;tg;)tg=!1,vg+=1,R=Q=P=null,c=a(b,d);ug=null;vg=0;a=O;a.memoizedState=qg;a.expirationTime=rg;a.updateQueue=R;a=null!==P&&null!==P.next;og=0;Q=qg=P=pg=O=null;rg=0;R=null;a?r("299"):void 0;return c}function yg(){og=0;Q=qg=P=pg=O=null;rg=0;R=null;tg=!1;ug=null;vg=0}function zg(){return{memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null}}
function Ag(a){return{memoizedState:a.memoizedState,baseState:a.memoizedState,queue:a.queue,baseUpdate:a.baseUpdate,next:null}}function Bg(){if(null===Q)null===qg?(sg=!1,P=pg,qg=Q=null===P?zg():Ag(P)):(sg=!0,P=pg,Q=qg);else if(null===Q.next){sg=!1;if(null===P)var a=zg();else P=P.next,a=null===P?zg():Ag(P);Q=Q.next=a}else sg=!0,Q=Q.next,P=null!==P?P.next:null;return Q}function Cg(a,b){return"function"===typeof b?b(a):b}
function Dg(a,b,c){O=wg();Q=Bg();var d=Q.queue;if(null!==d){if(sg){b=d.dispatch;if(null!==ug){var e=ug.get(d);if(void 0!==e){ug.delete(d);c=Q.memoizedState;do c=a(c,e.action),null!==e.callback&&Eg(O,e),e=e.next;while(null!==e);Q.memoizedState=c;Q.baseUpdate===d.last&&(Q.baseState=c);return[c,b]}}return[Q.memoizedState,b]}b=d.last;var f=Q.baseUpdate;null!==f?(null!==b&&(b.next=null),b=f.next):b=null!==b?b.next:null;if(null!==b){c=Q.baseState;var g=e=null,h=b,k=!1;do{var l=h.expirationTime;if(l>og){if(k||
(k=!0,g=f,e=c),0===rg||l<rg)rg=l}else c=a(c,h.action),null!==h.callback&&Eg(O,h);f=h;h=h.next}while(null!==h&&h!==b);k||(g=f,e=c);Q.memoizedState=c;Q.baseUpdate=g;Q.baseState=e}return[Q.memoizedState,d.dispatch]}a===Cg?"function"===typeof b&&(b=b()):void 0!==c&&null!==c&&(b=a(b,c));Q.memoizedState=Q.baseState=b;d=Q.queue={last:null,dispatch:null};a=d.dispatch=Fg.bind(null,O,d);return[Q.memoizedState,a]}
function Eg(a,b){if(null===R)R={callbackList:null,lastEffect:null},R.callbackList=[b];else{var c=R.callbackList;null===c?R.callbackList=[b]:c.push(b)}a.effectTag|=32}function Gg(a,b,c,d){a={tag:a,create:b,destroy:c,inputs:d,next:null};null===R?(R={callbackList:null,lastEffect:null},R.lastEffect=a.next=a):(b=R.lastEffect,null===b?R.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,R.lastEffect=a));return a}
function Hg(a,b,c,d){O=wg();Q=Bg();d=void 0!==d&&null!==d?d:[c];var e=null;if(null!==P){var f=P.memoizedState;e=f.destroy;if(Ig(d,f.inputs)){Gg(0,c,e,d);return}}O.effectTag|=a;Q.memoizedState=Gg(b,c,e,d)}
function Fg(a,b,c,d){d=null;25>vg?void 0:r("300");var e=a.alternate;if(a===O||null!==e&&e===O)if(tg=!0,a={expirationTime:og,action:c,callback:void 0!==d?d:null,next:null},null===ug&&(ug=new Map),e=ug.get(b),void 0===e)ug.set(b,a);else{for(b=e;null!==b.next;)b=b.next;b.next=a}else{e=Jg();e=Kg(e,a);c={expirationTime:e,action:c,callback:void 0!==d?d:null,next:null};Lg();d=b.last;if(null===d)c.next=c;else{var f=d.next;null!==f&&(c.next=f);d.next=c}b.last=c;Mg(a,e)}}
function Ig(a,b){for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if((d!==e||0===d&&1/d!==1/e)&&(d===d||e===e))return!1}return!0}var Ng={},Og={current:Ng},Pg={current:Ng},Qg={current:Ng};function Rg(a){a===Ng?r("174"):void 0;return a}function Sg(a,b){J(Qg,b,a);J(Pg,a,a);J(Og,Ng,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ie(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Ie(b,c)}I(Og,a);J(Og,b,a)}
function Tg(a){I(Og,a);I(Pg,a);I(Qg,a)}function Ug(a){Rg(Qg.current);var b=Rg(Og.current);var c=Ie(b,a.type);b!==c&&(J(Pg,a,a),J(Og,c,a))}function Vg(a){Pg.current===a&&(I(Og,a),I(Pg,a))}var Wg=kc.ReactCurrentOwner,Xg=(new aa.Component).refs;function Yg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Zg={isMounted:function(a){return(a=a._reactInternalFiber)?2===Gd(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Jg();d=Kg(d,a);var e=Xf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Lg();Zf(a,e);Mg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Jg();d=Kg(d,a);var e=Xf(d);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Lg();Zf(a,e);Mg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Jg();c=Kg(c,a);var d=Xf(c);d.tag=
2;void 0!==b&&null!==b&&(d.callback=b);Lg();Zf(a,d);Mg(a,c)}};function $g(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Fd(c,d)||!Fd(e,f):!0}
function ah(a,b,c){var d=!1,e=uf;var f=b.contextType;"object"===typeof f&&null!==f?f=Wg.currentDispatcher.readContext(f):(e=M(b)?vf:K.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?wf(a,e):uf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Zg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function bh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Zg.enqueueReplaceState(b,b.state,null)}
function ch(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Xg;var f=b.contextType;"object"===typeof f&&null!==f?e.context=Wg.currentDispatcher.readContext(f):(f=M(b)?vf:K.current,e.context=wf(a,f));f=a.updateQueue;null!==f&&(cg(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Yg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&
"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Zg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(cg(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var dh=Array.isArray;
function eh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?r("289"):void 0,d=c.stateNode);d?void 0:r("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Xg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?r("284"):void 0;c._owner?void 0:r("290",a)}return a}
function fh(a,b){"textarea"!==a.type&&r("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function gh(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Kf(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Of(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=eh(a,b,c),d.return=a,d;d=Lf(c.type,c.key,c.props,null,a.mode,d);d.ref=eh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Pf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Mf(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Of(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case mc:return c=Lf(b.type,b.key,b.props,null,a.mode,c),c.ref=eh(a,null,b),c.return=a,c;case nc:return b=Pf(b,a.mode,c),b.return=a,b}if(dh(b)||
zc(b))return b=Mf(b,a.mode,c,null),b.return=a,b;fh(a,b)}return null}function w(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case mc:return c.key===e?c.type===oc?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case nc:return c.key===e?l(a,b,c,d):null}if(dh(c)||zc(c))return null!==e?null:m(a,b,c,d,null);fh(a,c)}return null}function E(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case mc:return a=a.get(null===d.key?c:d.key)||null,d.type===oc?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case nc:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(dh(d)||zc(d))return a=a.get(c)||null,m(b,a,d,e,null);fh(b,d)}return null}function x(e,g,h,k){for(var l=null,m=null,q=g,v=g=0,B=null;null!==q&&v<h.length;v++){q.index>v?(B=q,q=null):B=q.sibling;var t=w(e,q,h[v],k);if(null===t){null===q&&(q=B);break}a&&
q&&null===t.alternate&&b(e,q);g=f(t,g,v);null===m?l=t:m.sibling=t;m=t;q=B}if(v===h.length)return c(e,q),l;if(null===q){for(;v<h.length;v++)if(q=p(e,h[v],k))g=f(q,g,v),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);v<h.length;v++)if(B=E(q,e,v,h[v],k))a&&null!==B.alternate&&q.delete(null===B.key?v:B.key),g=f(B,g,v),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function F(e,g,h,k){var l=zc(h);"function"!==typeof l?r("150"):void 0;h=l.call(h);null==h?r("151"):void 0;
for(var m=l=null,q=g,v=g=0,B=null,t=h.next();null!==q&&!t.done;v++,t=h.next()){q.index>v?(B=q,q=null):B=q.sibling;var x=w(e,q,t.value,k);if(null===x){q||(q=B);break}a&&q&&null===x.alternate&&b(e,q);g=f(x,g,v);null===m?l=x:m.sibling=x;m=x;q=B}if(t.done)return c(e,q),l;if(null===q){for(;!t.done;v++,t=h.next())t=p(e,t.value,k),null!==t&&(g=f(t,g,v),null===m?l=t:m.sibling=t,m=t);return l}for(q=d(e,q);!t.done;v++,t=h.next())t=E(q,e,v,t.value,k),null!==t&&(a&&null!==t.alternate&&q.delete(null===t.key?v:
t.key),g=f(t,g,v),null===m?l=t:m.sibling=t,m=t);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===oc&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case mc:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===oc:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===oc?f.props.children:f.props,h);d.ref=eh(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===oc?(d=Mf(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Lf(f.type,f.key,f.props,null,a.mode,h),h.ref=eh(a,d,f),h.return=a,a=h)}return g(a);case nc:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Pf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=Of(f,a.mode,h),d.return=a,a=d),g(a);if(dh(f))return x(a,d,f,h);if(zc(f))return F(a,d,f,h);l&&fh(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,r("152",h.displayName||h.name||"Component")}return c(a,d)}}var hh=gh(!0),ih=gh(!1),jh=null,kh=null,lh=!1;
function mh(a,b){var c=N(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function nh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;default:return!1}}
function oh(a){if(lh){var b=kh;if(b){var c=b;if(!nh(a,b)){b=qf(c);if(!b||!nh(a,b)){a.effectTag|=2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b)}else a.effectTag|=2,lh=!1,jh=a}}function ph(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag;)a=a.return;jh=a}function qh(a){if(a!==jh)return!1;if(!lh)return ph(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=qf(b);ph(a);kh=jh?qf(a.stateNode):null;return!0}function rh(){kh=jh=null;lh=!1}
function sh(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:throw a._status=0,b=a._ctor,b=b(),b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)}),a._result=b,b;}}var th=kc.ReactCurrentOwner;function S(a,b,c,d){b.child=null===a?ih(b,null,c,d):hh(b,a.child,c,d)}
function uh(a,b,c,d,e){c=c.render;var f=b.ref;mg(b,e);og=e;O=b;pg=null!==a?a.memoizedState:null;var g=c(d,f);g=xg(c,d,g,f);b.effectTag|=1;S(a,b,g,e);return b.child}
function vh(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!If(g)&&void 0===g.defaultProps&&null===c.compare)return b.tag=15,b.type=g,wh(a,b,g,d,e,f);a=Lf(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===e||e>f)if(e=g.memoizedProps,c=c.compare,c=null!==c?c:Fd,c(e,d)&&a.ref===b.ref)return xh(a,b,f);a=Kf(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function wh(a,b,c,d,e,f){return null!==a&&(0===e||e>f)&&Fd(a.memoizedProps,d)&&a.ref===b.ref?xh(a,b,f):yh(a,b,c,d,f)}function zh(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function yh(a,b,c,d,e){var f=M(c)?vf:K.current;f=wf(b,f);mg(b,e);og=e;O=b;pg=null!==a?a.memoizedState:null;var g=c(d,f);g=xg(c,d,g,f);b.effectTag|=1;S(a,b,g,e);return b.child}
function Ah(a,b,c,d,e){if(M(c)){var f=!0;Bf(b)}else f=!1;mg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),ah(b,c,d,e),ch(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Wg.currentDispatcher.readContext(l):(l=M(c)?vf:K.current,l=wf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&bh(b,g,d,l);Uf=!1;var w=b.memoizedState;k=g.state=w;var E=b.updateQueue;null!==E&&(cg(b,E,d,g,e),k=b.memoizedState);h!==d||w!==k||L.current||Uf?("function"===typeof m&&(Yg(b,c,m,d),k=b.memoizedState),(h=Uf||$g(b,c,h,d,w,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=h,k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=Wg.currentDispatcher.readContext(l):(l=M(c)?vf:K.current,l=wf(b,l)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&bh(b,g,d,l),Uf=!1,k=b.memoizedState,w=g.state=k,E=b.updateQueue,null!==E&&(cg(b,E,d,g,e),w=b.memoizedState),h!==d||k!==w||L.current||Uf?("function"===typeof m&&(Yg(b,c,m,d),w=b.memoizedState),(m=Uf||$g(b,c,h,d,k,w,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,w,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,w,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
w),g.props=d,g.state=w,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return Bh(a,b,c,d,f,e)}
function Bh(a,b,c,d,e,f){zh(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Cf(b,c,!1),xh(a,b,f);d=b.stateNode;th.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=hh(b,a.child,null,f),b.child=hh(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Cf(b,c,!0);return b.child}function Ch(a){var b=a.stateNode;b.pendingContext?zf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&zf(a,b.context,!1);Sg(a,b.containerInfo)}
function Dh(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function Eh(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;null!==f&&(f.alreadyCaptured?null!==a&&f===a.memoizedState?f={alreadyCaptured:!0,didTimeout:!0,timedOutAt:f.timedOutAt}:(f.alreadyCaptured=!0,f.didTimeout=!0):f=null);var g=null!==f&&f.didTimeout;if(null===a)g?(g=e.fallback,e=Mf(null,d,0,null),d=Mf(g,d,c,null),e.sibling=d,c=e,c.return=d.return=b):c=d=ih(b,null,e.children,c);else{var h=a.memoizedState;null!==h&&h.didTimeout?(d=a.child,a=d.sibling,g?(c=e.fallback,d=Kf(d,d.pendingProps,
0),d.effectTag|=2,e=d.sibling=Kf(a,c,a.expirationTime),e.effectTag|=2,c=d,d.childExpirationTime=0,d=e,c.return=d.return=b):(g=a.child,d=hh(b,d.child,e.children,c),hh(b,g,null,c),c=d)):(a=a.child,g?(g=e.fallback,e=Mf(null,d,0,null),e.effectTag|=2,e.child=a,a.return=e,d=e.sibling=Mf(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=hh(b,a,e.children,c))}b.memoizedState=f;b.child=c;return d}
function xh(a,b,c){null!==a&&(b.firstContextDependency=a.firstContextDependency);var d=b.childExpirationTime;if(0===d||d>c)return null;null!==a&&b.child!==a.child?r("153"):void 0;if(null!==b.child){a=b.child;c=Kf(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Kf(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Fh(a,b,c){var d=b.expirationTime;if(null!==a&&a.memoizedProps===b.pendingProps&&!L.current&&(0===d||d>c)){switch(b.tag){case 3:Ch(b);rh();break;case 5:Ug(b);break;case 1:M(b.type)&&Bf(b);break;case 4:Sg(b,b.stateNode.containerInfo);break;case 10:kg(b,b.memoizedProps.value);break;case 13:if(d=b.memoizedState,null!==d&&d.didTimeout){d=b.child.childExpirationTime;if(0!==d&&d<=c)return Eh(a,b,c);b=xh(a,b,c);return null!==b?b.sibling:null}}return xh(a,b,c)}b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=wf(b,K.current);mg(b,c);og=c;O=b;pg=null;var f=d(a,e);b.effectTag|=1;if("object"===typeof f&&null!==f&&"function"===typeof f.render&&void 0===f.$$typeof){b.tag=1;yg();M(d)?(e=!0,Bf(b)):e=!1;b.memoizedState=null!==f.state&&void 0!==f.state?f.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Yg(b,d,g,a);f.updater=Zg;b.stateNode=f;f._reactInternalFiber=b;ch(b,d,a,c);b=Bh(null,b,d,!0,e,c)}else b.tag=
0,f=xg(d,a,f,e),S(null,b,f,c),b=b.child;return b;case 16:f=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);e=b.pendingProps;a=sh(f);b.type=a;f=b.tag=Jf(a);e=Dh(a,e);g=void 0;switch(f){case 0:g=yh(null,b,a,e,c);break;case 1:g=Ah(null,b,a,e,c);break;case 11:g=uh(null,b,a,e,c);break;case 14:g=vh(null,b,a,Dh(a.type,e),d,c);break;default:r("283",a)}return g;case 0:return d=b.type,f=b.pendingProps,f=b.elementType===d?f:Dh(d,f),yh(a,b,d,f,c);case 1:return d=b.type,f=b.pendingProps,
f=b.elementType===d?f:Dh(d,f),Ah(a,b,d,f,c);case 3:Ch(b);d=b.updateQueue;null===d?r("282"):void 0;f=b.memoizedState;f=null!==f?f.element:null;cg(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===f)rh(),b=xh(a,b,c);else{f=b.stateNode;if(f=(null===a||null===a.child)&&f.hydrate)kh=rf(b.stateNode.containerInfo),jh=b,f=lh=!0;f?(b.effectTag|=2,b.child=ih(b,null,d,c)):(S(a,b,d,c),rh());b=b.child}return b;case 5:return Ug(b),null===a&&oh(b),d=b.type,f=b.pendingProps,e=null!==a?a.memoizedProps:null,
g=f.children,nf(d,f)?g=null:null!==e&&nf(d,e)&&(b.effectTag|=16),zh(a,b),1073741823!==c&&b.mode&1&&f.hidden?(b.expirationTime=1073741823,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&oh(b),null;case 13:return Eh(a,b,c);case 4:return Sg(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=hh(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,f=b.pendingProps,f=b.elementType===d?f:Dh(d,f),uh(a,b,d,f,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;f=b.pendingProps;g=b.memoizedProps;e=f.value;kg(b,e);if(null!==g){var h=g.value;e=h===e&&(0!==h||1/h===1/e)||h!==h&&e!==e?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,e):1073741823)|0;if(0===e){if(g.children===f.children&&!L.current){b=xh(a,b,c);break a}}else for(g=b.child,null!==g&&(g.return=b);null!==g;){h=g.firstContextDependency;if(null!==h){do{if(h.context===d&&0!==(h.observedBits&
e)){if(1===g.tag){var k=Xf(c);k.tag=2;Zf(g,k)}if(0===g.expirationTime||g.expirationTime>c)g.expirationTime=c;k=g.alternate;null!==k&&(0===k.expirationTime||k.expirationTime>c)&&(k.expirationTime=c);for(var l=g.return;null!==l;){k=l.alternate;if(0===l.childExpirationTime||l.childExpirationTime>c)l.childExpirationTime=c,null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c)&&(k.childExpirationTime=c);else if(null!==k&&(0===k.childExpirationTime||k.childExpirationTime>c))k.childExpirationTime=
c;else break;l=l.return}}k=g.child;h=h.next}while(null!==h)}else k=10===g.tag?g.type===b.type?null:g.child:g.child;if(null!==k)k.return=g;else for(k=g;null!==k;){if(k===b){k=null;break}g=k.sibling;if(null!==g){g.return=k.return;k=g;break}k=k.return}g=k}}S(a,b,f.children,c);b=b.child}return b;case 9:return f=b.type,e=b.pendingProps,d=e.children,mg(b,c),f=ng(f,e.unstable_observedBits),d=d(f),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return f=b.type,e=Dh(f.type,b.pendingProps),vh(a,b,f,e,d,c);case 15:return wh(a,
b,b.type,b.pendingProps,d,c);case 17:return d=b.type,f=b.pendingProps,f=b.elementType===d?f:Dh(d,f),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,M(d)?(a=!0,Bf(b)):a=!1,mg(b,c),ah(b,d,f,c),ch(b,d,f,c),Bh(null,b,d,!0,a,c);default:r("156")}}function Gh(a){a.effectTag|=4}var Hh=void 0,Ih=void 0,Jh=void 0,Kh=void 0;
Hh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ih=function(){};
Jh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Rg(Og.current);a=null;switch(c){case "input":f=Nc(g,f);d=Nc(g,d);a=[];break;case "option":f=ze(g,f);d=ze(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Be(g,f);d=Be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=Te)}Qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var k=f[c];for(g in k)k.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ua.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var l=d[c];k=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&l!==k&&(null!=l||null!=k))if("style"===c)if(k){for(g in k)!k.hasOwnProperty(g)||l&&l.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in l)l.hasOwnProperty(g)&&k[g]!==l[g]&&(h||
(h={}),h[g]=l[g])}else h||(a||(a=[]),a.push(c,h)),h=l;else"dangerouslySetInnerHTML"===c?(l=l?l.__html:void 0,k=k?k.__html:void 0,null!=l&&k!==l&&(a=a||[]).push(c,""+l)):"children"===c?k===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(c,""+l):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ua.hasOwnProperty(c)?(null!=l&&Se(e,c),a||k===l||(a=[])):(a=a||[]).push(c,l))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&Gh(b)}};Kh=function(a,b,c,d){c!==d&&Gh(b)};
function Lh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Bc(c));null!==c&&Ac(c.type);b=b.value;null!==a&&1===a.tag&&Ac(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function gi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){hi(a,c)}else b.current=null}
function ii(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=null;null!==e&&e()}0!==(d.tag&b)&&(e=d.create,e=e(),d.destroy="function"===typeof e?e:null);d=d.next}while(d!==c)}}
function ji(a){"function"===typeof Ef&&Ef(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(null!==d){var e=a;try{d()}catch(f){hi(e,f)}}c=c.next}while(c!==b)}break;case 1:gi(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){hi(a,f)}break;case 5:gi(a);break;case 4:ki(a)}}
function li(a){return 5===a.tag||3===a.tag||4===a.tag}
function mi(a){a:{for(var b=a.return;null!==b;){if(li(b)){var c=b;break a}b=b.return}r("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:r("161")}c.effectTag&16&&(Le(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||li(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=Te)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function ki(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?r("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(ji(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag?(d=b.stateNode.containerInfo,e=!0):ji(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function ni(a,b){switch(b.tag){case 0:case 11:case 14:case 15:ii(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[La]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Pc(c,d);Re(a,e);b=Re(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?Oe(c,h):"dangerouslySetInnerHTML"===g?Ke(c,h):"children"===g?Le(c,h):Lc(c,g,h,b)}switch(a){case "input":Qc(c,d);break;case "textarea":Ee(c,
d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?Ae(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?Ae(c,!!d.multiple,d.defaultValue,!0):Ae(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:null===b.stateNode?r("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:break;case 17:break;default:r("163")}}
function oi(a,b,c){c=Xf(c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){pi(d);Lh(a,b)};return c}
function qi(a,b,c){c=Xf(c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===ri?ri=new Set([this]):ri.add(this));var c=b.value,e=b.stack;Lh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function si(a){switch(a.tag){case 1:M(a.type)&&xf(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Tg(a),yf(a),b=a.effectTag,0!==(b&64)?r("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Vg(a),null;case 13:b=a.effectTag;if(b&2048){a.effectTag=b&-2049|64;b=a.alternate;b=null!==b?b.memoizedState:null;var c=a.memoizedState;null===c?c={alreadyCaptured:!0,didTimeout:!1,timedOutAt:0}:b===c?c={alreadyCaptured:!0,didTimeout:c.didTimeout,timedOutAt:c.timedOutAt}:c.alreadyCaptured=
!0;a.memoizedState=c;return a}return null;case 4:return Tg(a),null;case 10:return lg(a),null;default:return null}}
var ti={readContext:ng,useCallback:function(a,b){O=wg();Q=Bg();b=void 0!==b&&null!==b?b:[a];var c=Q.memoizedState;if(null!==c&&Ig(b,c[1]))return c[0];Q.memoizedState=[a,b];return a},useContext:function(a,b){wg();return ng(a,b)},useEffect:function(a,b){Hg(516,192,a,b)},useImperativeMethods:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):[a,b];Hg(4,36,function(){if("function"===typeof a){var c=b();a(c);return function(){return a(null)}}if(null!==a&&void 0!==a)return c=b(),a.current=c,function(){a.current=
null}},c)},useLayoutEffect:function(a,b){Hg(4,36,a,b)},useMemo:function(a,b){O=wg();Q=Bg();b=void 0!==b&&null!==b?b:[a];var c=Q.memoizedState;if(null!==c&&Ig(b,c[1]))return c[0];a=a();Q.memoizedState=[a,b];return a},useMutationEffect:function(a,b){Hg(260,10,a,b)},useReducer:Dg,useRef:function(a){O=wg();Q=Bg();null===Q.memoizedState?(a={current:a},Q.memoizedState=a):a=Q.memoizedState;return a},useState:function(a){return Dg(Cg,a)}},ui=kc.ReactCurrentOwner,vi=0,wi=0,xi=!1,T=null,yi=null,U=0,zi=-1,Ai=
!1,V=null,Bi=!1,Ci=null,Di=null,Ei=null,ri=null;function Fi(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&xf(b);break;case 3:Tg(b);yf(b);break;case 5:Vg(b);break;case 4:Tg(b);break;case 10:lg(b)}a=a.return}yi=null;U=0;zi=-1;Ai=!1;T=null}
function Gi(a,b){Ei=Di=Ci=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;ii(128,0,f);ii(0,64,f)}catch(g){d=!0,e=g}d&&hi(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Hi(a,c)}function Lg(){null!==Ei&&(ba.unstable_cancelCallback(Di),Ei())}
function Ii(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){var e=b;b=a;var f=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:M(b.type)&&xf(b);break;case 3:Tg(b);yf(b);f=b.stateNode;f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null);if(null===e||null===e.child)qh(b),b.effectTag&=-3;Ih(b);break;case 5:Vg(b);var g=Rg(Qg.current),h=b.type;if(null!==e&&null!=b.stateNode)Jh(e,b,h,f,g),e.ref!==b.ref&&(b.effectTag|=128);
else if(f){var k=Rg(Og.current);if(qh(b)){f=b;e=f.stateNode;var l=f.type,m=f.memoizedProps,p=g;e[Ka]=f;e[La]=m;h=void 0;g=l;switch(g){case "iframe":case "object":G("load",e);break;case "video":case "audio":for(l=0;l<gb.length;l++)G(gb[l],e);break;case "source":G("error",e);break;case "img":case "image":case "link":G("error",e);G("load",e);break;case "form":G("reset",e);G("submit",e);break;case "details":G("toggle",e);break;case "input":Oc(e,m);G("invalid",e);Se(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};G("invalid",e);Se(p,"onChange");break;case "textarea":De(e,m),G("invalid",e),Se(p,"onChange")}Qe(g,m);l=null;for(h in m)m.hasOwnProperty(h)&&(k=m[h],"children"===h?"string"===typeof k?e.textContent!==k&&(l=["children",k]):"number"===typeof k&&e.textContent!==""+k&&(l=["children",""+k]):ua.hasOwnProperty(h)&&null!=k&&Se(p,h));switch(g){case "input":ec(e);Sc(e,m,!0);break;case "textarea":ec(e);Fe(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=Te)}h=l;f.updateQueue=h;f=null!==h?!0:!1;f&&Gh(b)}else{m=b;e=h;p=f;l=9===g.nodeType?g:g.ownerDocument;k===Ge.html&&(k=He(e));k===Ge.html?"script"===e?(e=l.createElement("div"),e.innerHTML="<script>\x3c/script>",l=e.removeChild(e.firstChild)):"string"===typeof p.is?l=l.createElement(e,{is:p.is}):(l=l.createElement(e),"select"===e&&p.multiple&&(l.multiple=!0)):l=l.createElementNS(k,e);e=l;e[Ka]=m;e[La]=f;Hh(e,b,!1,!1);p=e;l=h;m=f;var w=g,E=Re(l,m);switch(l){case "iframe":case "object":G("load",
p);g=m;break;case "video":case "audio":for(g=0;g<gb.length;g++)G(gb[g],p);g=m;break;case "source":G("error",p);g=m;break;case "img":case "image":case "link":G("error",p);G("load",p);g=m;break;case "form":G("reset",p);G("submit",p);g=m;break;case "details":G("toggle",p);g=m;break;case "input":Oc(p,m);g=Nc(p,m);G("invalid",p);Se(w,"onChange");break;case "option":g=ze(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};g=n({},m,{value:void 0});G("invalid",p);Se(w,"onChange");break;case "textarea":De(p,
m);g=Be(p,m);G("invalid",p);Se(w,"onChange");break;default:g=m}Qe(l,g);k=void 0;var x=l,F=p,v=g;for(k in v)if(v.hasOwnProperty(k)){var q=v[k];"style"===k?Oe(F,q):"dangerouslySetInnerHTML"===k?(q=q?q.__html:void 0,null!=q&&Ke(F,q)):"children"===k?"string"===typeof q?("textarea"!==x||""!==q)&&Le(F,q):"number"===typeof q&&Le(F,""+q):"suppressContentEditableWarning"!==k&&"suppressHydrationWarning"!==k&&"autoFocus"!==k&&(ua.hasOwnProperty(k)?null!=q&&Se(w,k):null!=q&&Lc(F,k,q,E))}switch(l){case "input":ec(p);
Sc(p,m,!1);break;case "textarea":ec(p);Fe(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+Mc(m.value));break;case "select":g=p;g.multiple=!!m.multiple;p=m.value;null!=p?Ae(g,!!m.multiple,p,!1):null!=m.defaultValue&&Ae(g,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof g.onClick&&(p.onclick=Te)}(f=mf(h,f))&&Gh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?r("166"):void 0;break;case 6:e&&null!=b.stateNode?Kh(e,b,e.memoizedProps,f):("string"!==
typeof f&&(null===b.stateNode?r("166"):void 0),e=Rg(Qg.current),Rg(Og.current),qh(b)?(f=b,h=f.stateNode,e=f.memoizedProps,h[Ka]=f,(f=h.nodeValue!==e)&&Gh(b)):(h=b,f=(9===e.nodeType?e:e.ownerDocument).createTextNode(f),f[Ka]=b,h.stateNode=f));break;case 11:break;case 13:f=b.memoizedState;h=null!==e?e.memoizedState:null;(null!==f&&f.didTimeout)!==(null!==h&&h.didTimeout)&&(b.effectTag|=4);break;case 7:break;case 8:break;case 12:break;case 4:Tg(b);Ih(b);break;case 10:lg(b);break;case 9:break;case 14:break;
case 17:M(b.type)&&xf(b);break;default:r("156")}T=null;b=a;if(1073741823===U||1073741823!==b.childExpirationTime){f=0;for(h=b.child;null!==h;){e=h.expirationTime;g=h.childExpirationTime;if(0===f||0!==e&&e<f)f=e;if(0===f||0!==g&&g<f)f=g;h=h.sibling}b.childExpirationTime=f}null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?
c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=si(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function Ji(a){var b=Fh(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Ii(a));ui.current=null;return b}
function Ki(a,b,c){xi?r("243"):void 0;Lg();xi=!0;ui.currentDispatcher=ti;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==yi||null===T)Fi(),yi=a,U=d,T=Kf(yi.current,null,U),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!Li();)T=Ji(T);else for(;null!==T;)T=Ji(T)}catch(F){if(jg=ig=hg=null,yg(),null===T)e=!0,pi(F);else{null===T?r("271"):void 0;var f=T,g=f.return;if(null===g)e=!0,pi(F);else{a:{var h=a,k=g,l=f,m=F;g=U;l.effectTag|=1024;l.firstEffect=l.lastEffect=null;if(null!==m&&
"object"===typeof m&&"function"===typeof m.then){var p=m;m=k;var w=-1,E=-1;do{if(13===m.tag){var x=m.alternate;if(null!==x&&(x=x.memoizedState,null!==x&&x.didTimeout)){E=10*(x.timedOutAt-2);break}x=m.pendingProps.maxDuration;if("number"===typeof x)if(0>=x)w=0;else if(-1===w||x<w)w=x}m=m.return}while(null!==m);m=k;do{if(x=13===m.tag)void 0===m.memoizedProps.fallback?x=!1:(x=m.memoizedState,x=null===x||!x.didTimeout);if(x){k=Mi.bind(null,h,m,l,0===(m.mode&1)?1:g);p.then(k,k);if(0===(m.mode&1)){m.effectTag|=
32;S(l.alternate,l,null,g);l.effectTag&=-1025;l.effectTag&=-933;1===l.tag&&null===l.alternate&&(l.tag=17);break a}-1===w?h=1073741823:(-1===E&&(E=10*(Tf(h,g)-2)-5E3),h=E+w);0<=h&&zi<h&&(zi=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error("An update was suspended, but no placeholder UI was provided.")}Ai=!0;m=fg(m,l);h=k;do{switch(h.tag){case 3:l=m;h.effectTag|=2048;h.expirationTime=g;g=oi(h,l,g);$f(h,g);break a;case 1:if(l=m,k=h.type,p=h.stateNode,0===(h.effectTag&
64)&&("function"===typeof k.getDerivedStateFromError||null!==p&&"function"===typeof p.componentDidCatch&&(null===ri||!ri.has(p)))){h.effectTag|=2048;h.expirationTime=g;g=qi(h,l,g);$f(h,g);break a}}h=h.return}while(null!==h)}T=Ii(f);continue}}}break}while(1);xi=!1;jg=ig=hg=ui.currentDispatcher=null;yg();if(e)yi=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{b=a.current.alternate;null===b?r("281"):void 0;yi=null;if(Ai){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;
if(0!==e&&e>d||0!==f&&f>d||0!==g&&g>d){Sf(a,d);Ni(a,b,d,a.expirationTime,-1);return}if(!a.didError&&!c){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;c=a.expirationTime=1;Ni(a,b,d,c,-1);return}}c||-1===zi?(a.pendingCommitExpirationTime=d,a.finishedWork=b):(Sf(a,d),c=10*(Tf(a,d)-2),c<zi&&(zi=c),c=10*(Jg()-2),c=zi-c,Ni(a,b,d,a.expirationTime,0>c?0:c))}}
function hi(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===ri||!ri.has(d))){a=fg(b,a);a=qi(c,a,1);Zf(c,a);Mg(c,1);return}break;case 3:a=fg(b,a);a=oi(c,a,1);Zf(c,a);Mg(c,1);return}c=c.return}3===a.tag&&(c=fg(b,a),c=oi(a,c,1),Zf(a,c),Mg(a,1))}
function Kg(a,b){0!==wi?a=wi:xi?a=Bi?1:U:b.mode&1?(a=Oi?2+10*(((a-2+15)/10|0)+1):2+25*(((a-2+500)/25|0)+1),null!==yi&&a===U&&(a+=1)):a=1;Oi&&a>Pi&&(Pi=a);return a}
function Mi(a,b,c,d){var e=a.earliestSuspendedTime;var f=a.latestSuspendedTime;if(0!==e&&d>=e&&d<=f){f=e=d;a.didError=!1;var g=a.latestPingedTime;if(0===g||g<f)a.latestPingedTime=f;Rf(f,a)}else e=Jg(),e=Kg(e,b),Qf(a,e);0!==(b.mode&1)&&a===yi&&U===d&&(yi=null);Qi(b,e);0===(b.mode&1)&&(Qi(c,e),1===c.tag&&null!==c.stateNode&&(b=Xf(e),b.tag=2,Zf(c,b)));c=a.expirationTime;0!==c&&Hi(a,c)}
function Qi(a,b){if(0===a.expirationTime||a.expirationTime>b)a.expirationTime=b;var c=a.alternate;null!==c&&(0===c.expirationTime||c.expirationTime>b)&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;if(0===d.childExpirationTime||d.childExpirationTime>b)d.childExpirationTime=b;null!==c&&(0===c.childExpirationTime||c.childExpirationTime>b)&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return null===
e?null:e}function Mg(a,b){a=Qi(a,b);null!==a&&(!xi&&0!==U&&b<U&&Fi(),Qf(a,b),xi&&!Bi&&yi===a||Hi(a,a.expirationTime),Ri>Si&&(Ri=0,r("185")))}function Ti(a,b,c,d,e){var f=wi;wi=1;try{return a(b,c,d,e)}finally{wi=f}}var Ui=null,X=null,Vi=0,Wi=void 0,W=!1,Xi=null,Y=0,Pi=0,Yi=!1,Zi=!1,$i=null,aj=null,Z=!1,bj=!1,Oi=!1,cj=null,dj=ba.unstable_now(),ej=(dj/10|0)+2,fj=ej,Si=50,Ri=0,gj=null,hj=1;function ij(){ej=((ba.unstable_now()-dj)/10|0)+2}
function jj(a,b){if(0!==Vi){if(b>Vi)return;null!==Wi&&ba.unstable_cancelCallback(Wi)}Vi=b;a=ba.unstable_now()-dj;Wi=ba.unstable_scheduleCallback(kj,{timeout:10*(b-2)-a})}function Ni(a,b,c,d,e){a.expirationTime=d;0!==e||Li()?0<e&&(a.timeoutHandle=of(lj.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function lj(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;ij();fj=ej;mj(a,c)}function Jg(){if(W)return fj;nj();if(0===Y||1073741823===Y)ij(),fj=ej;return fj}
function Hi(a,b){if(null===a.nextScheduledRoot)a.expirationTime=b,null===X?(Ui=X=a,a.nextScheduledRoot=a):(X=X.nextScheduledRoot=a,X.nextScheduledRoot=Ui);else{var c=a.expirationTime;if(0===c||b<c)a.expirationTime=b}W||(Z?bj&&(Xi=a,Y=1,oj(a,1,!0)):1===b?pj(1,null):jj(a,b))}
function nj(){var a=0,b=null;if(null!==X)for(var c=X,d=Ui;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===X?r("244"):void 0;if(d===d.nextScheduledRoot){Ui=X=d.nextScheduledRoot=null;break}else if(d===Ui)Ui=e=d.nextScheduledRoot,X.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===X){X=c;X.nextScheduledRoot=Ui;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{if(0===a||e<a)a=e,b=d;if(d===X)break;if(1===
a)break;c=d;d=d.nextScheduledRoot}}Xi=b;Y=a}function kj(a){if(a.didTimeout&&null!==Ui){ij();var b=Ui;do{var c=b.expirationTime;0!==c&&ej>=c&&(b.nextExpirationTimeToWorkOn=ej);b=b.nextScheduledRoot}while(b!==Ui)}pj(0,a)}
function pj(a,b){aj=b;nj();if(null!==aj)for(ij(),fj=ej;null!==Xi&&0!==Y&&(0===a||a>=Y)&&(!Yi||ej>=Y);)oj(Xi,Y,ej>=Y),nj(),ij(),fj=ej;else for(;null!==Xi&&0!==Y&&(0===a||a>=Y);)oj(Xi,Y,!0),nj();null!==aj&&(Vi=0,Wi=null);0!==Y&&jj(Xi,Y);aj=null;Yi=!1;Ri=0;gj=null;if(null!==cj)for(a=cj,cj=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){Zi||(Zi=!0,$i=d)}}if(Zi)throw a=$i,$i=null,Zi=!1,a;}function mj(a,b){W?r("253"):void 0;Xi=a;Y=b;oj(a,b,!0);pj(1,null)}
function oj(a,b,c){W?r("245"):void 0;W=!0;if(null===aj||c){var d=a.finishedWork;null!==d?qj(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,pf(d)),Ki(a,!1,c),d=a.finishedWork,null!==d&&qj(a,d,b))}else d=a.finishedWork,null!==d?qj(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,pf(d)),Ki(a,!0,c),d=a.finishedWork,null!==d&&(Li()?a.finishedWork=d:qj(a,d,b)));W=!1}
function qj(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime<=c&&(null===cj?cj=[d]:cj.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===gj?Ri++:(gj=a,Ri=0);Bi=xi=!0;a.current===b?r("177"):void 0;var e=a.pendingCommitExpirationTime;0===e?r("261"):void 0;a.pendingCommitExpirationTime=0;var f=b.expirationTime,g=b.childExpirationTime,h=0===f||0!==g&&g<f?g:f;a.didError=!1;if(0===h)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=
0,a.latestPingedTime=0;else{var k=a.latestPendingTime;0!==k&&(k<h?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime<h&&(a.earliestPendingTime=a.latestPendingTime));var l=a.earliestSuspendedTime;0===l?Qf(a,h):h>a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Qf(a,h)):h<l&&Qf(a,h)}Rf(0,a);ui.current=null;if(1<b.effectTag)if(null!==b.lastEffect){b.lastEffect.nextEffect=b;var m=b.firstEffect}else m=b;else m=b.firstEffect;Ue=ce;var p=oe();if(pe(p)){if("selectionStart"in
p)var w={start:p.selectionStart,end:p.selectionEnd};else a:{var E=p.ownerDocument,x=E&&E.defaultView||window,F=x.getSelection&&x.getSelection();if(F&&0!==F.rangeCount){var v=F.anchorNode,q=F.anchorOffset,B=F.focusNode,Ce=F.focusOffset;try{v.nodeType,B.nodeType}catch(sb){w=null;break a}var Zb=0,Zc=-1,$c=-1,vj=0,wj=0,t=p,$b=null;b:for(;;){for(var ad;;){t!==v||0!==q&&3!==t.nodeType||(Zc=Zb+q);t!==B||0!==Ce&&3!==t.nodeType||($c=Zb+Ce);3===t.nodeType&&(Zb+=t.nodeValue.length);if(null===(ad=t.firstChild))break;
$b=t;t=ad}for(;;){if(t===p)break b;$b===v&&++vj===q&&(Zc=Zb);$b===B&&++wj===Ce&&($c=Zb);if(null!==(ad=t.nextSibling))break;t=$b;$b=t.parentNode}t=ad}w=-1===Zc||-1===$c?null:{start:Zc,end:$c}}else w=null}var Mh=w||{start:0,end:0}}else Mh=null;lf={focusedElem:p,selectionRange:Mh};ce=!1;for(V=m;null!==V;){var Nh=!1,Oh=void 0;try{for(;null!==V;){if(V.effectTag&256)a:{var Ve=V.alternate,tb=V;switch(tb.tag){case 0:case 11:case 15:ii(2,0,tb);break a;case 1:if(tb.effectTag&256&&null!==Ve){var Ij=Ve.memoizedProps,
Jj=Ve.memoizedState,md=tb.stateNode;md.props=tb.memoizedProps;md.state=tb.memoizedState;var Kj=md.getSnapshotBeforeUpdate(Ij,Jj);md.__reactInternalSnapshotBeforeUpdate=Kj}break a;case 3:case 5:case 6:case 4:case 17:break a;default:r("163")}}V=V.nextEffect}}catch(sb){Nh=!0,Oh=sb}Nh&&(null===V?r("178"):void 0,hi(V,Oh),null!==V&&(V=V.nextEffect))}for(V=m;null!==V;){var Ph=!1,Qh=void 0;try{for(;null!==V;){var We=V.effectTag;We&16&&Le(V.stateNode,"");if(We&128){var Rh=V.alternate;if(null!==Rh){var nd=
Rh.ref;null!==nd&&("function"===typeof nd?nd(null):nd.current=null)}}switch(We&14){case 2:mi(V);V.effectTag&=-3;break;case 6:mi(V);V.effectTag&=-3;ni(V.alternate,V);break;case 4:ni(V.alternate,V);break;case 8:var Sh=V;ki(Sh);var fc=Sh;fc.return=null;fc.child=null;fc.alternate&&(fc.alternate.child=null,fc.alternate.return=null)}V=V.nextEffect}}catch(sb){Ph=!0,Qh=sb}Ph&&(null===V?r("178"):void 0,hi(V,Qh),null!==V&&(V=V.nextEffect))}var Th=lf,Lj=oe(),H=Th.focusedElem,ub=Th.selectionRange;if(Lj!==H&&
H&&H.ownerDocument&&ne(H.ownerDocument.documentElement,H)){if(null!==ub&&pe(H)){var Uh=ub.start,Xe=ub.end;void 0===Xe&&(Xe=Uh);if("selectionStart"in H)H.selectionStart=Uh,H.selectionEnd=Math.min(Xe,H.value.length);else{var Ye=H.ownerDocument||document,fa=(Ye&&Ye.defaultView||window).getSelection(),Vh=H.textContent.length,vb=Math.min(ub.start,Vh),gc=void 0===ub.end?vb:Math.min(ub.end,Vh);if(!fa.extend&&vb>gc){var Mj=gc;gc=vb;vb=Mj}var hc=me(H,vb),Ua=me(H,gc);if(hc&&Ua&&(1!==fa.rangeCount||fa.anchorNode!==
hc.node||fa.anchorOffset!==hc.offset||fa.focusNode!==Ua.node||fa.focusOffset!==Ua.offset)){var od=Ye.createRange();od.setStart(hc.node,hc.offset);fa.removeAllRanges();vb>gc?(fa.addRange(od),fa.extend(Ua.node,Ua.offset)):(od.setEnd(Ua.node,Ua.offset),fa.addRange(od))}}}for(var Ze=[],wb=H;wb=wb.parentNode;)1===wb.nodeType&&Ze.push({element:wb,left:wb.scrollLeft,top:wb.scrollTop});"function"===typeof H.focus&&H.focus();for(var $e=0;$e<Ze.length;$e++){var pd=Ze[$e];pd.element.scrollLeft=pd.left;pd.element.scrollTop=
pd.top}}lf=null;ce=!!Ue;Ue=null;a.current=b;for(V=m;null!==V;){var Wh=!1,Xh=void 0;try{for(var Nj=a,Oj=e;null!==V;){var af=V.effectTag;if(af&36){var qd=void 0,xb=V.alternate,y=V,Yh=Oj;switch(y.tag){case 0:case 11:case 15:ii(16,32,y);var bf=y.updateQueue;if(null!==bf){var cf=bf.callbackList;if(null!==cf){bf.callbackList=null;for(var df=0;df<cf.length;df++){var Zh=cf[df],Pj=Zh.callback;Zh.callback=null;Pj()}}}break;case 1:var ha=y.stateNode;if(y.effectTag&4)if(null===xb)ha.props=y.memoizedProps,ha.state=
y.memoizedState,ha.componentDidMount();else{var Qj=xb.memoizedProps,Rj=xb.memoizedState;ha.props=y.memoizedProps;ha.state=y.memoizedState;ha.componentDidUpdate(Qj,Rj,ha.__reactInternalSnapshotBeforeUpdate)}var $h=y.updateQueue;null!==$h&&(ha.props=y.memoizedProps,ha.state=y.memoizedState,dg(y,$h,ha,Yh));break;case 3:var ai=y.updateQueue;if(null!==ai){var ef=null;if(null!==y.child)switch(y.child.tag){case 5:ef=y.child.stateNode;break;case 1:ef=y.child.stateNode}dg(y,ai,ef,Yh)}break;case 5:var Sj=y.stateNode;
null===xb&&y.effectTag&4&&mf(y.type,y.memoizedProps)&&Sj.focus();break;case 6:break;case 4:break;case 12:break;case 13:if(y.effectTag&32){y.memoizedState={alreadyCaptured:!0,didTimeout:!1,timedOutAt:0};Lg();Mg(y,1);break}var bi=null!==xb?xb.memoizedState:null,ic=y.memoizedState,Tj=null!==bi?bi.didTimeout:!1,ff=y;if(null===ic)qd=!1;else if(qd=ic.didTimeout)ff=y.child,ic.alreadyCaptured=!1,0===ic.timedOutAt&&(ic.timedOutAt=Jg());if(qd!==Tj&&null!==ff)a:for(var gf=ff,ci=qd,A=gf;;){if(5===A.tag){var Uj=
A.stateNode;if(ci)Uj.style.display="none";else{var Vj=A.stateNode,rd=A.memoizedProps.style,Wj=void 0!==rd&&null!==rd&&rd.hasOwnProperty("display")?rd.display:null;Vj.style.display=Wj}}else if(6===A.tag)A.stateNode.nodeValue=ci?"":A.memoizedProps;else if(null!==A.child){A.child.return=A;A=A.child;continue}if(A===gf)break a;for(;null===A.sibling;){if(null===A.return||A.return===gf)break a;A=A.return}A.sibling.return=A.return;A=A.sibling}break;case 17:break;default:r("163")}}if(af&128){var sd=V.ref;
if(null!==sd){var di=V.stateNode;switch(V.tag){case 5:var hf=di;break;default:hf=di}"function"===typeof sd?sd(hf):sd.current=hf}}af&512&&(Ci=Nj);V=V.nextEffect}}catch(sb){Wh=!0,Xh=sb}Wh&&(null===V?r("178"):void 0,hi(V,Xh),null!==V&&(V=V.nextEffect))}if(null!==m&&null!==Ci){var ei=Gi.bind(null,a,m);Di=ba.unstable_scheduleCallback(ei);Ei=ei}xi=Bi=!1;"function"===typeof Df&&Df(b.stateNode);var jf=b.expirationTime,kf=b.childExpirationTime,fi=0===jf||0!==kf&&kf<jf?kf:jf;0===fi&&(ri=null);a.expirationTime=
fi;a.finishedWork=null}function Li(){return Yi?!0:null===aj||aj.timeRemaining()>hj?!1:Yi=!0}function pi(a){null===Xi?r("246"):void 0;Xi.expirationTime=0;Zi||(Zi=!0,$i=a)}function rj(a,b){var c=Z;Z=!0;try{return a(b)}finally{(Z=c)||W||pj(1,null)}}function sj(a,b){if(Z&&!bj){bj=!0;try{return a(b)}finally{bj=!1}}return a(b)}function tj(a,b,c){if(Oi)return a(b,c);Z||W||0===Pi||(pj(Pi,null),Pi=0);var d=Oi,e=Z;Z=Oi=!0;try{return a(b,c)}finally{Oi=d,(Z=e)||W||pj(1,null)}}
function uj(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===Gd(c)&&1===c.tag?void 0:r("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(M(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);r("171");g=void 0}if(1===c.tag){var h=c.type;if(M(h)){c=Af(c,h,g);break a}}c=g}else c=uf;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Xf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
Lg();Zf(f,e);Mg(f,d);return d}function xj(a,b,c,d){var e=b.current,f=Jg();e=Kg(f,e);return uj(a,b,c,e,d)}function yj(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function zj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:nc,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Mb=function(a,b,c){switch(b){case "input":Qc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Pa(d);e?void 0:r("90");jc(d);Qc(d,e)}}}break;case "textarea":Ee(a,c);break;case "select":b=c.value,null!=b&&Ae(a,!!c.multiple,b,!1)}};
function Aj(a){var b=2+25*(((Jg()-2+500)/25|0)+1);b<=vi&&(b=vi+1);this._expirationTime=vi=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Aj.prototype.render=function(a){this._defer?void 0:r("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Bj;uj(a,b,null,c,d._onCommit);return d};
Aj.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Aj.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:r("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?r("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;mj(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Aj.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Bj(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Bj.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Bj.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?r("191",c):void 0;c()}}};
function Cj(a,b,c){b=N(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Cj.prototype.render=function(a,b){var c=this._internalRoot,d=new Bj;b=void 0===b?null:b;null!==b&&d.then(b);xj(a,c,null,d._onCommit);return d};Cj.prototype.unmount=function(a){var b=this._internalRoot,c=new Bj;a=void 0===a?null:a;null!==a&&c.then(a);xj(null,b,null,c._onCommit);return c};Cj.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Bj;c=void 0===c?null:c;null!==c&&e.then(c);xj(b,d,a,e._onCommit);return e};
Cj.prototype.createBatch=function(){var a=new Aj(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime<=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Dj(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Sb=rj;Tb=tj;Ub=function(){W||0===Pi||(pj(Pi,null),Pi=0)};
function Ej(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Cj(a,!1,b)}
function Fj(a,b,c,d,e){Dj(c)?void 0:r("200");var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=yj(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ej(c,d);if("function"===typeof e){var h=e;e=function(){var a=yj(f._internalRoot);h.call(a)}}sj(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return yj(f._internalRoot)}
function Gj(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Dj(b)?void 0:r("200");return zj(a,b,null,c)}
var Hj={createPortal:Gj,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?r("188"):r("268",Object.keys(a)));a=Jd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){return Fj(null,a,b,!0,c)},render:function(a,b,c){return Fj(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){null==a||void 0===a._reactInternalFiber?r("38"):void 0;return Fj(a,b,c,!1,d)},unmountComponentAtNode:function(a){Dj(a)?
void 0:r("40");return a._reactRootContainer?(sj(function(){Fj(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Gj.apply(void 0,arguments)},unstable_batchedUpdates:rj,unstable_interactiveUpdates:tj,flushSync:function(a,b){W?r("187"):void 0;var c=Z;Z=!0;try{return Ti(a,b)}finally{Z=c,pj(1,null)}},unstable_flushControlled:function(a){var b=Z;Z=!0;try{Ti(a)}finally{(Z=b)||W||pj(1,null)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Na,
Oa,Pa,Ga.injectEventPluginsByName,sa,Wa,function(a){Ba(a,Va)},Qb,Rb,ee,Ia]},createRoot:function(a,b){Dj(a)?void 0:r("278");return new Cj(a,!0,null!=b&&!0===b.hydrate)}};(function(a){var b=a.findFiberByHostInstance;return Gf(n({},a,{findHostInstanceByFiber:function(a){a=Jd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ma,bundleType:0,version:"16.7.0-alpha.0",rendererPackageName:"react-dom"});
var Xj={default:Hj},Yj=Xj&&Hj||Xj;module.exports=Yj.default||Yj;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(120);
} else {}


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.7.0-alpha.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var c=null,f=3,h=-1,k=-1,l=!1,m=!1,n="object"===typeof performance&&"function"===typeof performance.now,q={timeRemaining:n?function(){if(null!==c&&c.expirationTime<k)return 0;var a=p()-performance.now();return 0<a?a:0}:function(){if(null!==c&&c.expirationTime<k)return 0;var a=p()-Date.now();return 0<a?a:0},didTimeout:!1};function r(){if(!l){var a=c.expirationTime;m?t():m=!0;u(v,a)}}
function w(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;d=a.callback;b=a.expirationTime;a=a.priorityLevel;var e=f,R=k;f=a;k=b;try{var g=d(q)}finally{f=e,k=R}if("function"===typeof g)if(g={callback:g,priorityLevel:a,expirationTime:b,next:null,previous:null},null===c)c=g.next=g.previous=g;else{d=null;a=c;do{if(a.expirationTime>=b){d=a;break}a=a.next}while(a!==c);null===d?d=c:d===c&&(c=g,r());b=d.previous;b.next=d.previous=g;g.next=d;g.previous=
b}}function x(){if(-1===h&&null!==c&&1===c.priorityLevel){l=!0;q.didTimeout=!0;try{do w();while(null!==c&&1===c.priorityLevel)}finally{l=!1,null!==c?r():m=!1}}}function v(a){l=!0;q.didTimeout=a;try{if(a)for(;null!==c;){var b=exports.unstable_now();if(c.expirationTime<=b){do w();while(null!==c&&c.expirationTime<=b)}else break}else if(null!==c){do w();while(null!==c&&0<p()-exports.unstable_now())}}finally{l=!1,null!==c?r():m=!1,x()}}
var y=Date,z="function"===typeof setTimeout?setTimeout:void 0,A="function"===typeof clearTimeout?clearTimeout:void 0,B="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,C="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,D,E;function F(a){D=B(function(b){A(E);a(b)});E=z(function(){C(D);a(exports.unstable_now())},100)}if(n){var G=performance;exports.unstable_now=function(){return G.now()}}else exports.unstable_now=function(){return y.now()};var u,t,p;
if("undefined"!==typeof window&&window._schedMock){var H=window._schedMock;u=H[0];t=H[1];p=H[2]}else if("undefined"===typeof window||"function"!==typeof window.addEventListener){var I=null,J=-1,K=function(a,b){if(null!==I){var d=I;I=null;try{J=b,d(a)}finally{J=-1}}};u=function(a,b){-1!==J?setTimeout(u,0,a,b):(I=a,setTimeout(K,b,!0,b),setTimeout(K,1073741823,!1,1073741823))};t=function(){I=null};p=function(){return Infinity};exports.unstable_now=function(){return-1===J?0:J}}else{"undefined"!==typeof console&&
("function"!==typeof B&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof C&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var L=null,M=!1,N=-1,O=!1,P=!1,Q=0,S=33,T=33;p=function(){return Q};var U="__reactIdleCallback$"+Math.random().toString(36).slice(2);window.addEventListener("message",
function(a){if(a.source===window&&a.data===U){M=!1;a=L;var b=N;L=null;N=-1;var d=exports.unstable_now(),e=!1;if(0>=Q-d)if(-1!==b&&b<=d)e=!0;else{O||(O=!0,F(V));L=a;N=b;return}if(null!==a){P=!0;try{a(e)}finally{P=!1}}}},!1);var V=function(a){if(null!==L){F(V);var b=a-Q+T;b<T&&S<T?(8>b&&(b=8),T=b<S?S:b):S=b;Q=a+T;M||(M=!0,window.postMessage(U,"*"))}else O=!1};u=function(a,b){L=a;N=b;P||0>b?window.postMessage(U,"*"):O||(O=!0,F(V))};t=function(){L=null;M=!1;N=-1}}exports.unstable_ImmediatePriority=1;
exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:break;default:a=3}var d=f,e=h;f=a;h=exports.unstable_now();try{return b()}finally{f=d,h=e,x()}};
exports.unstable_scheduleCallback=function(a,b){var d=-1!==h?h:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=d+b.timeout;else switch(f){case 1:b=d+-1;break;case 2:b=d+250;break;case 4:b=d+1073741823;break;default:b=d+5E3}a={callback:a,priorityLevel:f,expirationTime:b,next:null,previous:null};if(null===c)c=a.next=a.previous=a,r();else{d=null;var e=c;do{if(e.expirationTime>b){d=e;break}e=e.next}while(e!==c);null===d?d=c:d===c&&(c=a,r());b=d.previous;b.next=d.previous=
a;a.next=d;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=f;return function(){var d=f,e=h;f=b;h=exports.unstable_now();try{return a.apply(this,arguments)}finally{f=d,h=e,x()}}};exports.unstable_getCurrentPriorityLevel=function(){return f};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(122);
var invariant = __webpack_require__(123);
var ReactPropTypesSecret = __webpack_require__(124);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 126 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 127 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 128 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(75);

function parser(arrayBuffer) {
  var data = {};
  var i = 0;
  var arr = new Int8Array(arrayBuffer);
  // Parse header
  data.type = String.fromCharCode.apply(
    null,
    arr.slice(i, CONSTANTS.HEADER.length)
  );
  if (data.type !== CONSTANTS.HEADER) {
    throw new Error("Invalid .eqf file.");
  }
  i += CONSTANTS.HEADER.length;
  // Skip "<ctrl-z>!--"
  i += 4;
  // Get the presets
  data.presets = [];
  while (i < arr.length) {
    var preset = {};
    // Get the name
    var nameStart = i;
    var nameEnd = nameStart + 257; // Str is fixed length
    // Str is null terminated
    while (arr[i] !== 0 && i <= nameEnd) {
      i++;
    }
    preset.name = String.fromCharCode.apply(null, arr.slice(nameStart, i));
    i = nameEnd; // Skip over any unused bytes

    // Get the levels
    CONSTANTS.PRESET_VALUES.forEach(function(valueName) {
      preset[valueName] = 64 - arr[i++]; // Adjust for inverse values
    });
    data.presets.push(preset);
  }
  return data;
}

module.exports = parser;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var CONSTANTS = __webpack_require__(75);

var FILL_SIZE = 4;
var PRESET_LENGTH = 257;

function creator(data) {
  var buffer = [];
  for (var i = 0; i < CONSTANTS.HEADER.length; i++) {
    buffer.push(CONSTANTS.HEADER.charCodeAt(i));
  }
  buffer.push(26); // <ctrl-z>
  var ending = "!--";
  for (var i = 0; i < ending.length; i++) {
    buffer.push(ending.charCodeAt(i));
  }
  if (!data.presets) {
    throw new Error("Eqf data is missing presets");
  }
  data.presets.forEach(function(preset) {
    var k = 0;
    for (; k < preset.name.length; k++) {
      buffer.push(preset.name.charCodeAt(k));
    }
    for (; k < PRESET_LENGTH; k++) {
      buffer.push(0);
    }

    CONSTANTS.PRESET_VALUES.forEach(function(valueName) {
      buffer.push(64 - preset[valueName]); // Adjust for inverse values
    });
  });
  return new Uint8Array(buffer).buffer;
}

module.exports = creator;


/***/ }),
/* 131 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(133);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "#webamp-context-menu .context-menu {\n  left: 0px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n#webamp-context-menu .context-menu.bottom {\n  top: 12px;\n}\n\n#webamp-context-menu .context-menu.top {\n  top: 0px;\n}\n\n#webamp-context-menu .context-menu,\n#webamp-context-menu .context-menu ul {\n  z-index: 50; /* Gross */\n  background-color: #ffffff;\n  position: absolute;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  border: 1px solid #a7a394;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n}\n\n#webamp-context-menu .context-menu li {\n  position: relative;\n  font-family: \"Tahoma\";\n  font-size: 11px;\n  color: black;\n  white-space: nowrap;\n  margin: 2px;\n  padding: 1px 18px 3px 18px;\n  display: block;\n}\n\n#webamp-context-menu .context-menu li.checked:before {\n  float: left;\n  /* TODO: Use an image */\n  content: \"\\2713\";\n  margin-left: -12px;\n}\n\n#webamp-context-menu .context-menu li.parent:after {\n  float: right;\n  content: \"\\25B8\";\n  margin-right: -12px;\n}\n#webamp-context-menu .context-menu li a {\n  text-decoration: none;\n  color: black;\n  cursor: default;\n}\n\n#webamp-context-menu .context-menu li:hover,\n#webamp-context-menu .context-menu li:hover a {\n  background-color: #224eb7;\n  color: #ffffff;\n}\n\n#webamp-context-menu .context-menu li.hr {\n  padding: 2px 0;\n}\n\n#webamp-context-menu .context-menu li.hr:hover {\n  background-color: #ffffff;\n}\n\n#webamp-context-menu .context-menu li.hr hr {\n  border: none;\n  height: 1px;\n  background-color: #a7a394;\n  margin: 0;\n  padding: 0;\n}\n\n#webamp-context-menu .context-menu ul {\n  display: none;\n  left: 100%;\n  margin-left: -3px;\n}\n\n#webamp-context-menu .context-menu li:hover > ul {\n  display: block;\n}\n", ""]);

// exports


/***/ }),
/* 134 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(136);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "#webamp .gen-text-space {\n  width: 5px;\n}\n\n#webamp .gen-text-letter {\n  height: 7px;\n  display: inline-block;\n}\n\n#webamp .gen-window {\n  /* Default size */\n  width: 275px;\n  height: 116px;\n  display: flex;\n  flex-direction: column;\n}\n\n#webamp .gen-top {\n  height: 20px;\n  display: flex;\n  flex-direction: row;\n}\n\n#webamp .gen-top-left {\n  width: 25px;\n  height: 20px;\n}\n\n#webamp .gen-top-title {\n  line-height: 7px;\n  margin-top: 2px;\n  /* TODO: This should be a conciquence of the repeating tiles, not hard coded */\n  padding: 0 3px 0 4px;\n}\n\n#webamp .gen-top-left-fill {\n  flex-grow: 1;\n  height: 20px;\n  background-position: left;\n}\n\n#webamp .gen-top-right-fill {\n  flex-grow: 1;\n  height: 20px;\n  background-position: right;\n}\n\n#webamp .gen-top-left-end {\n  width: 25px;\n  height: 20px;\n}\n\n#webamp .gen-top-right {\n  width: 25px;\n  height: 20px;\n}\n\n#webamp .gen-top-right-end {\n  width: 25px;\n  height: 20px;\n}\n\n#webamp .gen-close {\n  width: 9px;\n  height: 9px;\n  position: absolute;\n  right: 2px;\n  top: 3px;\n}\n\n#webamp .gen-middle {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n\n#webamp .gen-middle-left {\n  width: 11px;\n}\n\n#webamp .gen-middle-left-bottom {\n  width: 11px;\n  height: 24px;\n  bottom: 0;\n  position: absolute;\n}\n\n#webamp .gen-middle-center {\n  flex-grow: 1;\n  position: relative;\n}\n\n#webamp .gen-middle-right {\n  width: 8px;\n}\n\n#webamp .gen-middle-right-bottom {\n  width: 8px;\n  height: 24px;\n  bottom: 0;\n  position: absolute;\n}\n\n#webamp .gen-bottom {\n  height: 14px;\n  background-repeat: repeat-x;\n}\n\n#webamp .gen-bottom-left {\n  position: absolute;\n  left: 0;\n  width: 125px;\n  height: 14px;\n}\n\n#webamp .gen-bottom-right {\n  position: absolute;\n  right: 0;\n  width: 125px;\n  height: 14px;\n}\n\n#webamp .gen-bottom-right #gen-resize-target {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  height: 20px;\n  width: 20px;\n}\n", ""]);

// exports


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(138);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".webamp-desktop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n", ""]);

// exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(140);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "#webamp .mini-time {\n  display: block;\n  height: 6px;\n  width: 25px;\n}\n\n#webamp .mini-time.blinking .character:not(.background-character) {\n  animation: blink 2s step-start 1s infinite;\n  -webkit-animation: blink 2s step-start 1s infinite;\n}\n\n#webamp .mini-time .background-character {\n  z-index: 1;\n}\n\n#webamp .mini-time .character {\n  position: absolute;\n  top: 0;\n  z-index: 2;\n}\n", ""]);

// exports


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(142);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #main-window {\n  position: absolute;\n  height: 116px;\n  width: 275px;\n  /* Ask the browser to scale showing large pixels if possible */\n  image-rendering: -moz-crisp-edges; /* Firefox */\n  image-rendering: -o-crisp-edges; /* Opera */\n  image-rendering: -webkit-optimize-contrast; /* Safari */\n  image-rendering: pixelated; /* Only in Chrome > 40 */\n  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n#webamp #title-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 14px;\n  width: 275px;\n}\n\n#webamp #option-context,\n#webamp #minimize,\n#webamp #shade,\n#webamp #close {\n  position: absolute;\n  height: 9px;\n  width: 9px;\n  top: 3px;\n}\n\n#webamp #title-bar #option {\n  width: 100%;\n  height: 100%;\n}\n\n#webamp #title-bar #option-context {\n  left: 6px;\n}\n#webamp #title-bar #minimize {\n  left: 244px;\n}\n#webamp #title-bar #shade {\n  left: 254px;\n}\n#webamp #title-bar #close {\n  left: 264px;\n}\n#webamp #clutter-bar {\n  position: absolute;\n  top: 22px;\n  left: 10px;\n  height: 43px;\n  width: 8px;\n}\n\n#webamp #clutter-bar div {\n  position: absolute;\n  height: 7px;\n  width: 8px;\n  left: 0px;\n}\n\n#webamp #clutter-bar #button-o {\n  top: 3px;\n  height: 8px;\n}\n#webamp #clutter-bar #button-a {\n  top: 11px;\n}\n#webamp #clutter-bar #button-i {\n  top: 18px;\n}\n#webamp #clutter-bar #button-d {\n  top: 25px;\n  height: 8px;\n}\n#webamp #clutter-bar #button-v {\n  top: 33px;\n}\n\n#webamp #play-pause {\n  position: absolute;\n  top: 28px;\n  left: 26px;\n  height: 9px;\n  width: 9px;\n  background-repeat: no-repeat;\n}\n\n#webamp .play #work-indicator,\n#webamp #work-indicator.selected {\n  position: absolute;\n  top: 28px;\n  left: 24px;\n  height: 9px;\n  width: 3px;\n}\n#webamp .status #time {\n  position: absolute;\n  left: 39px;\n  top: 26px;\n  /* Just to make it clickable */\n  height: 13px;\n  width: 59px;\n}\n\n#webamp .stop .status #time {\n  display: none;\n}\n#webamp .pause .status #time {\n  animation: blink 2s step-start 1s infinite;\n  -webkit-animation: blink 2s step-start 1s infinite;\n}\n\n#webamp .status #time #minus-sign {\n  /* Note that this get's augmented by the skin CSS if NUM_EX.BMP is present */\n  position: absolute;\n  top: 6px;\n  left: -1px;\n  width: 5px;\n  height: 1px;\n}\n\n#webamp .status #time #minute-first-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 9px;\n  height: 13px;\n  width: 9px;\n}\n#webamp .status #time #minute-second-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 21px;\n  height: 13px;\n  width: 9px;\n}\n#webamp .status #time #second-first-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 39px;\n  height: 13px;\n  width: 9px;\n}\n#webamp .status #time #second-second-digit {\n  position: absolute;\n  pointer-events: none;\n  left: 51px;\n  height: 13px;\n  width: 9px;\n}\n\n#webamp #main-window #visualizer {\n  position: absolute;\n  top: 43px;\n  left: 24px;\n}\n\n#webamp #main-window.shade #visualizer {\n  top: 5px;\n  left: 79px;\n}\n\n#webamp #main-window.stop #visualizer {\n  display: none;\n}\n\n#webamp .text {\n  display: none;\n}\n\n#webamp #marquee {\n  position: absolute;\n  left: 111px;\n  top: 24px;\n  width: 155px;\n  height: 6px;\n  overflow: hidden;\n  display: block;\n  padding: 3px 0px; /* Ensure the target is correct for the cursor */\n}\n\n#webamp .media-info #kbps {\n  position: absolute;\n  left: 111px;\n  top: 43px;\n  width: 15px;\n  height: 6px;\n  overflow: hidden;\n}\n\n#webamp .stop .media-info #kbps {\n  display: none;\n}\n\n#webamp .media-info #khz {\n  position: absolute;\n  left: 156px;\n  top: 43px;\n  width: 10px;\n  height: 6px;\n  overflow: hidden;\n}\n\n#webamp .stop .media-info #khz {\n  display: none;\n}\n\n#webamp .media-info .mono-stereo {\n  position: absolute;\n  left: 212px;\n  top: 41px;\n  width: 57px;\n  height: 12px;\n}\n\n#webamp .media-info .mono-stereo div {\n  position: absolute;\n  height: 12px;\n}\n\n#webamp .media-info .mono-stereo #mono {\n  width: 27px;\n}\n\n#webamp .media-info .mono-stereo #stereo {\n  left: 27px;\n  width: 29px;\n}\n\n#webamp #volume {\n  position: absolute;\n  left: 107px;\n  top: 57px;\n  height: 13px;\n  width: 68px;\n  background-position: 0 0;\n}\n\n#webamp #volume input {\n  height: 13px;\n  /* The input itself, is actually 3px shorter than the background\n     * https://twitter.com/LuigiHann/status/959275940688867328\n     */\n  width: 65px;\n  display: block;\n}\n#webamp #volume input::-webkit-slider-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n#webamp #volume input::-moz-range-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n\n#webamp #balance {\n  position: absolute;\n  left: 177px;\n  top: 57px;\n  height: 13px;\n  width: 38px;\n  background-position: 0 0;\n}\n\n#webamp #balance::-webkit-slider-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n#webamp #balance::-moz-range-thumb {\n  top: 1px;\n  height: 11px;\n  width: 14px;\n}\n\n#webamp .windows {\n  position: absolute;\n  left: 219px;\n  top: 58px;\n  width: 46px;\n  height: 12px;\n}\n\n#webamp .windows div {\n  position: absolute;\n  width: 23px;\n  height: 12px;\n}\n\n#webamp .windows #equalizer-button {\n  left: 0;\n}\n\n#webamp .windows #playlist-button {\n  left: 23px;\n}\n\n#webamp #position {\n  position: absolute;\n  left: 16px;\n  top: 72px;\n  width: 248px;\n  height: 10px;\n}\n\n#webamp #position::-webkit-slider-thumb {\n  height: 10px;\n  width: 29px;\n  /*\n     * Fix the strange bug in Safair/mobile-chrome\n     * http://stackoverflow.com/questions/26727769/rendering-glitch-when-manipulating-range-input-value-via-javascript-in-webkit\n     */\n  -webkit-box-sizing: border-box;\n  position: relative;\n}\n\n#webamp #position::-moz-range-thumb {\n  height: 10px;\n  width: 29px;\n}\n\n/* For some reason, we can't use display: none here */\n#webamp .stop #position::-webkit-slider-thumb {\n  visibility: hidden;\n}\n#webamp .stop #position::-moz-range-thumb {\n  visibility: hidden;\n}\n\n/* For some reason this is needed for the position slider to show up now that\n * we are using React.\n */\n#webamp .play #position::-webkit-slider-thumb {\n  visibility: visible;\n}\n\n#webamp .actions div {\n  height: 18px;\n  width: 23px;\n  position: absolute;\n}\n\n#webamp .actions #previous {\n  top: 88px;\n  left: 16px;\n}\n#webamp .actions #play {\n  top: 88px;\n  left: 39px;\n}\n#webamp .actions #pause {\n  top: 88px;\n  left: 62px;\n}\n#webamp .actions #stop {\n  top: 88px;\n  left: 85px;\n}\n#webamp .actions #next {\n  top: 88px;\n  left: 108px;\n  width: 22px;\n}\n\n#webamp #eject {\n  position: absolute;\n  top: 89px;\n  left: 136px;\n  height: 16px;\n  width: 22px;\n}\n\n#webamp .shuffle-repeat {\n  position: absolute;\n  top: 89px;\n  left: 164px;\n  width: 74px;\n}\n\n#webamp .shuffle-repeat div {\n  position: absolute;\n  height: 15px;\n}\n\n#webamp .shuffle-repeat #shuffle {\n  width: 47px;\n}\n\n#webamp .shuffle-repeat #repeat {\n  left: 46px;\n  width: 28px;\n}\n\n#webamp #about {\n  position: absolute;\n  top: 91px;\n  left: 253px;\n  height: 15px;\n  width: 13px;\n}\n\n#webamp .digit {\n  position: absolute;\n  display: inline-block;\n  width: 9px;\n  height: 13px;\n  background-repeat: no-repeat;\n  text-indent: -9999px;\n}\n\n/* Shade View */\n#webamp #main-window.shade {\n  height: 14px;\n}\n\n#webamp .shade .media-info,\n#webamp .shade .windows,\n#webamp .shade #volume,\n#webamp .shade #balance,\n#webamp .shade .shuffle-repeat,\n#webamp .shade .status {\n  display: none;\n}\n#webamp .shade #title-bar {\n}\n\n#webamp .shade .actions div {\n  position: absolute;\n}\n#webamp .shade .actions #previous,\n#webamp .shade .actions #previous:active {\n  background: none;\n  height: 10px;\n  width: 7px;\n  top: 2px;\n  left: 169px;\n}\n#webamp .shade .actions #play,\n#webamp .shade .actions #play:active {\n  background: none;\n  height: 10px;\n  width: 10px;\n  top: 2px;\n  left: 176px;\n}\n#webamp .shade .actions #pause,\n#webamp .shade .actions #pause:active {\n  background: none;\n  height: 10px;\n  width: 9px;\n  top: 2px;\n  left: 186px;\n}\n#webamp .shade .actions #stop,\n#webamp .shade .actions #stop:active {\n  background: none;\n  height: 10px;\n  width: 9px;\n  top: 2px;\n  left: 195px;\n}\n#webamp .shade .actions #next,\n#webamp .shade .actions #next:active {\n  background: none;\n  height: 10px;\n  width: 10px;\n  top: 2px;\n  left: 204px;\n}\n#webamp .shade #eject,\n#webamp .shade #eject:active {\n  height: 10px;\n  width: 10px;\n  top: 2px;\n  left: 215px;\n  background: none;\n}\n\n#webamp .shade #position {\n  position: absolute;\n  left: 226px;\n  top: 4px;\n  width: 17px;\n  height: 7px;\n}\n\n#webamp .shade #position::-webkit-slider-thumb {\n  height: 7px;\n  width: 3px;\n  /* This make it appear. Not sure why */\n  background: none;\n}\n\n#webamp .shade #position::-moz-range-thumb {\n  height: 7px;\n  width: 3px;\n  /* This make it appear. Not sure why */\n  background: none;\n}\n\n#webamp #main-window .mini-time {\n  position: absolute;\n  top: 4px;\n  left: 127px;\n}\n", ""]);

// exports


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
module.exports = __webpack_require__(21).Object.assign;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(32);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(147) });


/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(39);
var gOPS = __webpack_require__(57);
var pIE = __webpack_require__(42);
var toObject = __webpack_require__(82);
var IObject = __webpack_require__(80);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(34)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(28);
var toLength = __webpack_require__(149);
var toAbsoluteIndex = __webpack_require__(150);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(53);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(53);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(152), __esModule: true };

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(153);
__webpack_require__(159);
module.exports = __webpack_require__(63).f('iterator');


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(154)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(84)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(53);
var defined = __webpack_require__(52);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(61);
var descriptor = __webpack_require__(38);
var setToStringTag = __webpack_require__(62);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(24)(IteratorPrototype, __webpack_require__(29)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(25);
var anObject = __webpack_require__(33);
var getKeys = __webpack_require__(39);

module.exports = __webpack_require__(27) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(17).document;
module.exports = document && document.documentElement;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(22);
var toObject = __webpack_require__(82);
var IE_PROTO = __webpack_require__(54)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(160);
var global = __webpack_require__(17);
var hide = __webpack_require__(24);
var Iterators = __webpack_require__(60);
var TO_STRING_TAG = __webpack_require__(29)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(161);
var step = __webpack_require__(162);
var Iterators = __webpack_require__(60);
var toIObject = __webpack_require__(28);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(84)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(165);
__webpack_require__(170);
__webpack_require__(171);
__webpack_require__(172);
module.exports = __webpack_require__(21).Symbol;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(17);
var has = __webpack_require__(22);
var DESCRIPTORS = __webpack_require__(27);
var $export = __webpack_require__(32);
var redefine = __webpack_require__(85);
var META = __webpack_require__(166).KEY;
var $fails = __webpack_require__(34);
var shared = __webpack_require__(55);
var setToStringTag = __webpack_require__(62);
var uid = __webpack_require__(41);
var wks = __webpack_require__(29);
var wksExt = __webpack_require__(63);
var wksDefine = __webpack_require__(64);
var enumKeys = __webpack_require__(167);
var isArray = __webpack_require__(168);
var anObject = __webpack_require__(33);
var isObject = __webpack_require__(26);
var toIObject = __webpack_require__(28);
var toPrimitive = __webpack_require__(51);
var createDesc = __webpack_require__(38);
var _create = __webpack_require__(61);
var gOPNExt = __webpack_require__(169);
var $GOPD = __webpack_require__(87);
var $DP = __webpack_require__(25);
var $keys = __webpack_require__(39);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(86).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(42).f = $propertyIsEnumerable;
  __webpack_require__(57).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(40)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(24)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(41)('meta');
var isObject = __webpack_require__(26);
var has = __webpack_require__(22);
var setDesc = __webpack_require__(25).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(34)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(39);
var gOPS = __webpack_require__(57);
var pIE = __webpack_require__(42);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(81);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(28);
var gOPN = __webpack_require__(86).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 170 */
/***/ (function(module, exports) {



/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64)('asyncIterator');


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(64)('observable');


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(174), __esModule: true };

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(175);
module.exports = __webpack_require__(21).Object.setPrototypeOf;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(32);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(176).set });


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(26);
var anObject = __webpack_require__(33);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(76)(Function.call, __webpack_require__(87).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(178), __esModule: true };

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(179);
var $Object = __webpack_require__(21).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(32);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(61) });


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Track = function Track(props) {
  var className = props.className,
      included = props.included,
      vertical = props.vertical,
      offset = props.offset,
      length = props.length,
      style = props.style;


  var positonStyle = vertical ? {
    bottom: offset + '%',
    height: length + '%'
  } : {
    left: offset + '%',
    width: length + '%'
  };

  var elStyle = (0, _extends3['default'])({
    visibility: included ? 'visible' : 'hidden'
  }, style, positonStyle);
  return _react2['default'].createElement('div', { className: className, style: elStyle });
}; /* eslint-disable react/prop-types */
exports['default'] = Track;
module.exports = exports['default'];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _objectWithoutProperties2 = __webpack_require__(88);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(58);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(59);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

exports['default'] = createSlider;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _addEventListener = __webpack_require__(182);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(66);

var _warning2 = _interopRequireDefault(_warning);

var _Steps = __webpack_require__(186);

var _Steps2 = _interopRequireDefault(_Steps);

var _Marks = __webpack_require__(187);

var _Marks2 = _interopRequireDefault(_Marks);

var _Handle = __webpack_require__(188);

var _Handle2 = _interopRequireDefault(_Handle);

var _utils = __webpack_require__(89);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function noop() {}

function createSlider(Component) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    (0, _inherits3['default'])(ComponentEnhancer, _Component);

    function ComponentEnhancer(props) {
      (0, _classCallCheck3['default'])(this, ComponentEnhancer);

      var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));

      _this.onMouseDown = function (e) {
        if (e.button !== 0) {
          return;
        }

        var isVertical = _this.props.vertical;
        var position = utils.getMousePosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.removeDocumentEvents();
        _this.onStart(position);
        _this.addDocumentMouseEvents();
        utils.pauseEvent(e);
      };

      _this.onTouchStart = function (e) {
        if (utils.isNotTouchEvent(e)) return;

        var isVertical = _this.props.vertical;
        var position = utils.getTouchPosition(isVertical, e);
        if (!utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.dragOffset = 0;
        } else {
          var handlePosition = utils.getHandleCenterPosition(isVertical, e.target);
          _this.dragOffset = position - handlePosition;
          position = handlePosition;
        }
        _this.onStart(position);
        _this.addDocumentTouchEvents();
        utils.pauseEvent(e);
      };

      _this.onFocus = function (e) {
        var _this$props = _this.props,
            onFocus = _this$props.onFocus,
            vertical = _this$props.vertical;

        if (utils.isEventFromHandle(e, _this.handlesRefs)) {
          var handlePosition = utils.getHandleCenterPosition(vertical, e.target);
          _this.dragOffset = 0;
          _this.onStart(handlePosition);
          utils.pauseEvent(e);
          if (onFocus) {
            onFocus(e);
          }
        }
      };

      _this.onBlur = function (e) {
        var onBlur = _this.props.onBlur;

        _this.onEnd(e);
        if (onBlur) {
          onBlur(e);
        }
      };

      _this.onMouseUp = function () {
        _this.onEnd();
        _this.removeDocumentEvents();
      };

      _this.onMouseMove = function (e) {
        if (!_this.sliderRef) {
          _this.onEnd();
          return;
        }
        var position = utils.getMousePosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onTouchMove = function (e) {
        if (utils.isNotTouchEvent(e) || !_this.sliderRef) {
          _this.onEnd();
          return;
        }

        var position = utils.getTouchPosition(_this.props.vertical, e);
        _this.onMove(e, position - _this.dragOffset);
      };

      _this.onKeyDown = function (e) {
        if (_this.sliderRef && utils.isEventFromHandle(e, _this.handlesRefs)) {
          _this.onKeyboard(e);
        }
      };

      _this.saveSlider = function (slider) {
        _this.sliderRef = slider;
      };

      if (false) { var step, max, min; }
      _this.handlesRefs = {};
      return _this;
    }

    ComponentEnhancer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (_Component.prototype.componentWillUnmount) _Component.prototype.componentWillUnmount.call(this);
      this.removeDocumentEvents();
    };

    ComponentEnhancer.prototype.componentDidMount = function componentDidMount() {
      // Snapshot testing cannot handle refs, so be sure to null-check this.
      this.document = this.sliderRef && this.sliderRef.ownerDocument;
    };

    ComponentEnhancer.prototype.addDocumentTouchEvents = function addDocumentTouchEvents() {
      // just work for Chrome iOS Safari and Android Browser
      this.onTouchMoveListener = (0, _addEventListener2['default'])(this.document, 'touchmove', this.onTouchMove);
      this.onTouchUpListener = (0, _addEventListener2['default'])(this.document, 'touchend', this.onEnd);
    };

    ComponentEnhancer.prototype.addDocumentMouseEvents = function addDocumentMouseEvents() {
      this.onMouseMoveListener = (0, _addEventListener2['default'])(this.document, 'mousemove', this.onMouseMove);
      this.onMouseUpListener = (0, _addEventListener2['default'])(this.document, 'mouseup', this.onEnd);
    };

    ComponentEnhancer.prototype.removeDocumentEvents = function removeDocumentEvents() {
      /* eslint-disable no-unused-expressions */
      this.onTouchMoveListener && this.onTouchMoveListener.remove();
      this.onTouchUpListener && this.onTouchUpListener.remove();

      this.onMouseMoveListener && this.onMouseMoveListener.remove();
      this.onMouseUpListener && this.onMouseUpListener.remove();
      /* eslint-enable no-unused-expressions */
    };

    ComponentEnhancer.prototype.focus = function focus() {
      if (!this.props.disabled) {
        this.handlesRefs[0].focus();
      }
    };

    ComponentEnhancer.prototype.blur = function blur() {
      if (!this.props.disabled) {
        this.handlesRefs[0].blur();
      }
    };

    ComponentEnhancer.prototype.getSliderStart = function getSliderStart() {
      var slider = this.sliderRef;
      var rect = slider.getBoundingClientRect();

      return this.props.vertical ? rect.top : rect.left;
    };

    ComponentEnhancer.prototype.getSliderLength = function getSliderLength() {
      var slider = this.sliderRef;
      if (!slider) {
        return 0;
      }

      var coords = slider.getBoundingClientRect();
      return this.props.vertical ? coords.height : coords.width;
    };

    ComponentEnhancer.prototype.calcValue = function calcValue(offset) {
      var _props = this.props,
          vertical = _props.vertical,
          min = _props.min,
          max = _props.max;

      var ratio = Math.abs(Math.max(offset, 0) / this.getSliderLength());
      var value = vertical ? (1 - ratio) * (max - min) + min : ratio * (max - min) + min;
      return value;
    };

    ComponentEnhancer.prototype.calcValueByPos = function calcValueByPos(position) {
      var pixelOffset = position - this.getSliderStart();
      var nextValue = this.trimAlignValue(this.calcValue(pixelOffset));
      return nextValue;
    };

    ComponentEnhancer.prototype.calcOffset = function calcOffset(value) {
      var _props2 = this.props,
          min = _props2.min,
          max = _props2.max;

      var ratio = (value - min) / (max - min);
      return ratio * 100;
    };

    ComponentEnhancer.prototype.saveHandle = function saveHandle(index, handle) {
      this.handlesRefs[index] = handle;
    };

    ComponentEnhancer.prototype.render = function render() {
      var _classNames;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          className = _props3.className,
          marks = _props3.marks,
          dots = _props3.dots,
          step = _props3.step,
          included = _props3.included,
          disabled = _props3.disabled,
          vertical = _props3.vertical,
          min = _props3.min,
          max = _props3.max,
          children = _props3.children,
          maximumTrackStyle = _props3.maximumTrackStyle,
          style = _props3.style,
          railStyle = _props3.railStyle,
          dotStyle = _props3.dotStyle,
          activeDotStyle = _props3.activeDotStyle;

      var _Component$prototype$ = _Component.prototype.render.call(this),
          tracks = _Component$prototype$.tracks,
          handles = _Component$prototype$.handles;

      var sliderClassName = (0, _classnames2['default'])(prefixCls, (_classNames = {}, _classNames[prefixCls + '-with-marks'] = Object.keys(marks).length, _classNames[prefixCls + '-disabled'] = disabled, _classNames[prefixCls + '-vertical'] = vertical, _classNames[className] = className, _classNames));
      return _react2['default'].createElement(
        'div',
        {
          ref: this.saveSlider,
          className: sliderClassName,
          onTouchStart: disabled ? noop : this.onTouchStart,
          onMouseDown: disabled ? noop : this.onMouseDown,
          onMouseUp: disabled ? noop : this.onMouseUp,
          onKeyDown: disabled ? noop : this.onKeyDown,
          onFocus: disabled ? noop : this.onFocus,
          onBlur: disabled ? noop : this.onBlur,
          style: style
        },
        _react2['default'].createElement('div', {
          className: prefixCls + '-rail',
          style: (0, _extends3['default'])({}, maximumTrackStyle, railStyle)
        }),
        tracks,
        _react2['default'].createElement(_Steps2['default'], {
          prefixCls: prefixCls,
          vertical: vertical,
          marks: marks,
          dots: dots,
          step: step,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min,
          dotStyle: dotStyle,
          activeDotStyle: activeDotStyle
        }),
        handles,
        _react2['default'].createElement(_Marks2['default'], {
          className: prefixCls + '-mark',
          vertical: vertical,
          marks: marks,
          included: included,
          lowerBound: this.getLowerBound(),
          upperBound: this.getUpperBound(),
          max: max,
          min: min
        }),
        children
      );
    };

    return ComponentEnhancer;
  }(Component), _class.displayName = 'ComponentEnhancer(' + Component.displayName + ')', _class.propTypes = (0, _extends3['default'])({}, Component.propTypes, {
    min: _propTypes2['default'].number,
    max: _propTypes2['default'].number,
    step: _propTypes2['default'].number,
    marks: _propTypes2['default'].object,
    included: _propTypes2['default'].bool,
    className: _propTypes2['default'].string,
    prefixCls: _propTypes2['default'].string,
    disabled: _propTypes2['default'].bool,
    children: _propTypes2['default'].any,
    onBeforeChange: _propTypes2['default'].func,
    onChange: _propTypes2['default'].func,
    onAfterChange: _propTypes2['default'].func,
    handle: _propTypes2['default'].func,
    dots: _propTypes2['default'].bool,
    vertical: _propTypes2['default'].bool,
    style: _propTypes2['default'].object,
    minimumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    maximumTrackStyle: _propTypes2['default'].object, // just for compatibility, will be deperecate
    handleStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    trackStyle: _propTypes2['default'].oneOfType([_propTypes2['default'].object, _propTypes2['default'].arrayOf(_propTypes2['default'].object)]),
    railStyle: _propTypes2['default'].object,
    dotStyle: _propTypes2['default'].object,
    activeDotStyle: _propTypes2['default'].object,
    autoFocus: _propTypes2['default'].bool,
    onFocus: _propTypes2['default'].func,
    onBlur: _propTypes2['default'].func
  }), _class.defaultProps = (0, _extends3['default'])({}, Component.defaultProps, {
    prefixCls: 'rc-slider',
    className: '',
    min: 0,
    max: 100,
    step: 1,
    marks: {},
    handle: function handle(_ref) {
      var index = _ref.index,
          restProps = (0, _objectWithoutProperties3['default'])(_ref, ['index']);

      delete restProps.dragging;
      return _react2['default'].createElement(_Handle2['default'], (0, _extends3['default'])({}, restProps, { key: index }));
    },

    onBeforeChange: noop,
    onChange: noop,
    onAfterChange: noop,
    included: true,
    disabled: false,
    dots: false,
    vertical: false,
    trackStyle: [{}],
    handleStyle: [{}],
    railStyle: {},
    dotStyle: {},
    activeDotStyle: {}
  }), _temp;
}
module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(183);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(7);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = addEventListener;

var _EventObject = __webpack_require__(184);

var _EventObject2 = _interopRequireDefault(_EventObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function addEventListener(target, eventType, callback) {
  function wrapCallback(e) {
    var ne = new _EventObject2["default"](e);
    callback.call(target, ne);
  }

  if (target.addEventListener) {
    target.addEventListener(eventType, wrapCallback, false);
    return {
      remove: function remove() {
        target.removeEventListener(eventType, wrapCallback, false);
      }
    };
  } else if (target.attachEvent) {
    target.attachEvent('on' + eventType, wrapCallback);
    return {
      remove: function remove() {
        target.detachEvent('on' + eventType, wrapCallback);
      }
    };
  }
}
module.exports = exports['default'];

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EventBaseObject = __webpack_require__(185);

var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);

var _objectAssign = __webpack_require__(50);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @ignore
 * event object for dom
 * @author yiminghe@gmail.com
 */

var TRUE = true;
var FALSE = false;
var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];

function isNullOrUndefined(w) {
  return w === null || w === undefined;
}

var eventNormalizers = [{
  reg: /^key/,
  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
  fix: function fix(event, nativeEvent) {
    if (isNullOrUndefined(event.which)) {
      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
    }

    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
    if (event.metaKey === undefined) {
      event.metaKey = event.ctrlKey;
    }
  }
}, {
  reg: /^touch/,
  props: ['touches', 'changedTouches', 'targetTouches']
}, {
  reg: /^hashchange$/,
  props: ['newURL', 'oldURL']
}, {
  reg: /^gesturechange$/i,
  props: ['rotation', 'scale']
}, {
  reg: /^(mousewheel|DOMMouseScroll)$/,
  props: [],
  fix: function fix(event, nativeEvent) {
    var deltaX = void 0;
    var deltaY = void 0;
    var delta = void 0;
    var wheelDelta = nativeEvent.wheelDelta;
    var axis = nativeEvent.axis;
    var wheelDeltaY = nativeEvent.wheelDeltaY;
    var wheelDeltaX = nativeEvent.wheelDeltaX;
    var detail = nativeEvent.detail;

    // ie/webkit
    if (wheelDelta) {
      delta = wheelDelta / 120;
    }

    // gecko
    if (detail) {
      // press control e.detail == 1 else e.detail == 3
      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
    }

    // Gecko
    if (axis !== undefined) {
      if (axis === event.HORIZONTAL_AXIS) {
        deltaY = 0;
        deltaX = 0 - delta;
      } else if (axis === event.VERTICAL_AXIS) {
        deltaX = 0;
        deltaY = delta;
      }
    }

    // Webkit
    if (wheelDeltaY !== undefined) {
      deltaY = wheelDeltaY / 120;
    }
    if (wheelDeltaX !== undefined) {
      deltaX = -1 * wheelDeltaX / 120;
    }

    // 默认 deltaY (ie)
    if (!deltaX && !deltaY) {
      deltaY = delta;
    }

    if (deltaX !== undefined) {
      /**
       * deltaX of mousewheel event
       * @property deltaX
       * @member Event.DomEvent.Object
       */
      event.deltaX = deltaX;
    }

    if (deltaY !== undefined) {
      /**
       * deltaY of mousewheel event
       * @property deltaY
       * @member Event.DomEvent.Object
       */
      event.deltaY = deltaY;
    }

    if (delta !== undefined) {
      /**
       * delta of mousewheel event
       * @property delta
       * @member Event.DomEvent.Object
       */
      event.delta = delta;
    }
  }
}, {
  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
  fix: function fix(event, nativeEvent) {
    var eventDoc = void 0;
    var doc = void 0;
    var body = void 0;
    var target = event.target;
    var button = nativeEvent.button;

    // Calculate pageX/Y if missing and clientX/Y available
    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
      eventDoc = target.ownerDocument || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
    }

    // which for click: 1 === left; 2 === middle; 3 === right
    // do not use button
    if (!event.which && button !== undefined) {
      if (button & 1) {
        event.which = 1;
      } else if (button & 2) {
        event.which = 3;
      } else if (button & 4) {
        event.which = 2;
      } else {
        event.which = 0;
      }
    }

    // add relatedTarget, if necessary
    if (!event.relatedTarget && event.fromElement) {
      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
    }

    return event;
  }
}];

function retTrue() {
  return TRUE;
}

function retFalse() {
  return FALSE;
}

function DomEventObject(nativeEvent) {
  var type = nativeEvent.type;

  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';

  _EventBaseObject2["default"].call(this);

  this.nativeEvent = nativeEvent;

  // in case dom event has been mark as default prevented by lower dom node
  var isDefaultPrevented = retFalse;
  if ('defaultPrevented' in nativeEvent) {
    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
  } else if ('getPreventDefault' in nativeEvent) {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
  } else if ('returnValue' in nativeEvent) {
    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
  }

  this.isDefaultPrevented = isDefaultPrevented;

  var fixFns = [];
  var fixFn = void 0;
  var l = void 0;
  var prop = void 0;
  var props = commonProps.concat();

  eventNormalizers.forEach(function (normalizer) {
    if (type.match(normalizer.reg)) {
      props = props.concat(normalizer.props);
      if (normalizer.fix) {
        fixFns.push(normalizer.fix);
      }
    }
  });

  l = props.length;

  // clone properties of the original event object
  while (l) {
    prop = props[--l];
    this[prop] = nativeEvent[prop];
  }

  // fix target property, if necessary
  if (!this.target && isNative) {
    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
  }

  // check if target is a text node (safari)
  if (this.target && this.target.nodeType === 3) {
    this.target = this.target.parentNode;
  }

  l = fixFns.length;

  while (l) {
    fixFn = fixFns[--l];
    fixFn(this, nativeEvent);
  }

  this.timeStamp = nativeEvent.timeStamp || Date.now();
}

var EventBaseObjectProto = _EventBaseObject2["default"].prototype;

(0, _objectAssign2["default"])(DomEventObject.prototype, EventBaseObjectProto, {
  constructor: DomEventObject,

  preventDefault: function preventDefault() {
    var e = this.nativeEvent;

    // if preventDefault exists run it on the original event
    if (e.preventDefault) {
      e.preventDefault();
    } else {
      // otherwise set the returnValue property of the original event to FALSE (IE)
      e.returnValue = FALSE;
    }

    EventBaseObjectProto.preventDefault.call(this);
  },
  stopPropagation: function stopPropagation() {
    var e = this.nativeEvent;

    // if stopPropagation exists run it on the original event
    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      // otherwise set the cancelBubble property of the original event to TRUE (IE)
      e.cancelBubble = TRUE;
    }

    EventBaseObjectProto.stopPropagation.call(this);
  }
});

exports["default"] = DomEventObject;
module.exports = exports['default'];

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * base event object for custom and dom event.
 * @author yiminghe@gmail.com
 */

function returnFalse() {
  return false;
}

function returnTrue() {
  return true;
}

function EventBaseObject() {
  this.timeStamp = Date.now();
  this.target = undefined;
  this.currentTarget = undefined;
}

EventBaseObject.prototype = {
  isEventObject: 1,

  constructor: EventBaseObject,

  isDefaultPrevented: returnFalse,

  isPropagationStopped: returnFalse,

  isImmediatePropagationStopped: returnFalse,

  preventDefault: function preventDefault() {
    this.isDefaultPrevented = returnTrue;
  },
  stopPropagation: function stopPropagation() {
    this.isPropagationStopped = returnTrue;
  },
  stopImmediatePropagation: function stopImmediatePropagation() {
    this.isImmediatePropagationStopped = returnTrue;
    // fixed 1.2
    // call stopPropagation implicitly
    this.stopPropagation();
  },
  halt: function halt(immediate) {
    if (immediate) {
      this.stopImmediatePropagation();
    } else {
      this.stopPropagation();
    }
    this.preventDefault();
  }
};

exports["default"] = EventBaseObject;
module.exports = exports['default'];

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = __webpack_require__(66);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var calcPoints = function calcPoints(vertical, marks, dots, step, min, max) {
  (0, _warning2['default'])(dots ? step > 0 : true, '`Slider[step]` should be a positive number in order to make Slider[dots] work.');
  var points = Object.keys(marks).map(parseFloat);
  if (dots) {
    for (var i = min; i <= max; i = i + step) {
      if (points.indexOf(i) >= 0) continue;
      points.push(i);
    }
  }
  return points;
};

var Steps = function Steps(_ref) {
  var prefixCls = _ref.prefixCls,
      vertical = _ref.vertical,
      marks = _ref.marks,
      dots = _ref.dots,
      step = _ref.step,
      included = _ref.included,
      lowerBound = _ref.lowerBound,
      upperBound = _ref.upperBound,
      max = _ref.max,
      min = _ref.min,
      dotStyle = _ref.dotStyle,
      activeDotStyle = _ref.activeDotStyle;

  var range = max - min;
  var elements = calcPoints(vertical, marks, dots, step, min, max).map(function (point) {
    var _classNames;

    var offset = Math.abs(point - min) / range * 100 + '%';

    var isActived = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var style = vertical ? (0, _extends3['default'])({ bottom: offset }, dotStyle) : (0, _extends3['default'])({ left: offset }, dotStyle);
    if (isActived) {
      style = (0, _extends3['default'])({}, style, activeDotStyle);
    }

    var pointClassName = (0, _classnames2['default'])((_classNames = {}, _classNames[prefixCls + '-dot'] = true, _classNames[prefixCls + '-dot-active'] = isActived, _classNames));

    return _react2['default'].createElement('span', { className: pointClassName, style: style, key: point });
  });

  return _react2['default'].createElement(
    'div',
    { className: prefixCls + '-step' },
    elements
  );
};

exports['default'] = Steps;
module.exports = exports['default'];

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(3);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Marks = function Marks(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      marks = _ref.marks,
      included = _ref.included,
      upperBound = _ref.upperBound,
      lowerBound = _ref.lowerBound,
      max = _ref.max,
      min = _ref.min;

  var marksKeys = Object.keys(marks);
  var marksCount = marksKeys.length;
  var unit = marksCount > 1 ? 100 / (marksCount - 1) : 100;
  var markWidth = unit * 0.9;

  var range = max - min;
  var elements = marksKeys.map(parseFloat).sort(function (a, b) {
    return a - b;
  }).map(function (point) {
    var _classNames;

    var markPoint = marks[point];
    var markPointIsObject = typeof markPoint === 'object' && !_react2['default'].isValidElement(markPoint);
    var markLabel = markPointIsObject ? markPoint.label : markPoint;
    if (!markLabel) {
      return null;
    }

    var isActive = !included && point === upperBound || included && point <= upperBound && point >= lowerBound;
    var markClassName = (0, _classnames2['default'])((_classNames = {}, _classNames[className + '-text'] = true, _classNames[className + '-text-active'] = isActive, _classNames));

    var bottomStyle = {
      marginBottom: '-50%',
      bottom: (point - min) / range * 100 + '%'
    };

    var leftStyle = {
      width: markWidth + '%',
      marginLeft: -markWidth / 2 + '%',
      left: (point - min) / range * 100 + '%'
    };

    var style = vertical ? bottomStyle : leftStyle;
    var markStyle = markPointIsObject ? (0, _extends3['default'])({}, style, markPoint.style) : style;
    return _react2['default'].createElement(
      'span',
      {
        className: markClassName,
        style: markStyle,
        key: point
      },
      markLabel
    );
  });

  return _react2['default'].createElement(
    'div',
    { className: className },
    elements
  );
};

exports['default'] = Marks;
module.exports = exports['default'];

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends2 = __webpack_require__(23);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(88);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(58);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(59);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(65);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var Handle = function (_React$Component) {
  (0, _inherits3['default'])(Handle, _React$Component);

  function Handle() {
    (0, _classCallCheck3['default'])(this, Handle);
    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
  }

  Handle.prototype.focus = function focus() {
    this.handle.focus();
  };

  Handle.prototype.blur = function blur() {
    this.handle.blur();
  };

  Handle.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        className = _props.className,
        vertical = _props.vertical,
        offset = _props.offset,
        style = _props.style,
        disabled = _props.disabled,
        min = _props.min,
        max = _props.max,
        value = _props.value,
        tabIndex = _props.tabIndex,
        restProps = (0, _objectWithoutProperties3['default'])(_props, ['className', 'vertical', 'offset', 'style', 'disabled', 'min', 'max', 'value', 'tabIndex']);


    var postionStyle = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
    var elStyle = (0, _extends3['default'])({}, style, postionStyle);
    var ariaProps = {};
    if (value !== undefined) {
      ariaProps = (0, _extends3['default'])({}, ariaProps, {
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': !!disabled
      });
    }
    return _react2['default'].createElement('div', (0, _extends3['default'])({
      ref: function ref(node) {
        return _this2.handle = node;
      },
      role: 'slider',
      tabIndex: tabIndex || 0
    }, ariaProps, restProps, {
      className: className,
      style: elStyle
    }));
  };

  return Handle;
}(_react2['default'].Component);

exports['default'] = Handle;


Handle.propTypes = {
  className: _propTypes2['default'].string,
  vertical: _propTypes2['default'].bool,
  offset: _propTypes2['default'].number,
  style: _propTypes2['default'].object,
  disabled: _propTypes2['default'].bool,
  min: _propTypes2['default'].number,
  max: _propTypes2['default'].number,
  value: _propTypes2['default'].number,
  tabIndex: _propTypes2['default'].number
};
module.exports = exports['default'];

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @ignore
 * some key-codes definition and utils from closure-library
 * @author yiminghe@gmail.com
 */

var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33, // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35, // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36, // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37, // also NUM_WEST
  /**
   * UP
   */
  UP: 38, // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39, // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40, // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45, // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46, // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63, // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91, // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186, // needs localization
  /**
   * DASH
   */
  DASH: 189, // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187, // needs localization
  /**
   * COMMA
   */
  COMMA: 188, // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190, // needs localization
  /**
   * SLASH
   */
  SLASH: 191, // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192, // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222, // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219, // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220, // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221, // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229
};

/*
 whether text and modified key is entered at the same time.
 */
KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
  var keyCode = e.keyCode;
  if (e.altKey && !e.ctrlKey || e.metaKey ||
  // Function keys don't generate text
  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
    return false;
  }

  // The following keys are quite harmless, even in combination with
  // CTRL, ALT or SHIFT.
  switch (keyCode) {
    case KeyCode.ALT:
    case KeyCode.CAPS_LOCK:
    case KeyCode.CONTEXT_MENU:
    case KeyCode.CTRL:
    case KeyCode.DOWN:
    case KeyCode.END:
    case KeyCode.ESC:
    case KeyCode.HOME:
    case KeyCode.INSERT:
    case KeyCode.LEFT:
    case KeyCode.MAC_FF_META:
    case KeyCode.META:
    case KeyCode.NUMLOCK:
    case KeyCode.NUM_CENTER:
    case KeyCode.PAGE_DOWN:
    case KeyCode.PAGE_UP:
    case KeyCode.PAUSE:
    case KeyCode.PRINT_SCREEN:
    case KeyCode.RIGHT:
    case KeyCode.SHIFT:
    case KeyCode.UP:
    case KeyCode.WIN_KEY:
    case KeyCode.WIN_KEY_RIGHT:
      return false;
    default:
      return true;
  }
};

/*
 whether character is entered.
 */
KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
    return true;
  }

  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
    return true;
  }

  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
    return true;
  }

  // Safari sends zero key code for non-latin characters.
  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
    return true;
  }

  switch (keyCode) {
    case KeyCode.SPACE:
    case KeyCode.QUESTION_MARK:
    case KeyCode.NUM_PLUS:
    case KeyCode.NUM_MINUS:
    case KeyCode.NUM_PERIOD:
    case KeyCode.NUM_DIVISION:
    case KeyCode.SEMICOLON:
    case KeyCode.DASH:
    case KeyCode.EQUALS:
    case KeyCode.COMMA:
    case KeyCode.PERIOD:
    case KeyCode.SLASH:
    case KeyCode.APOSTROPHE:
    case KeyCode.SINGLE_QUOTE:
    case KeyCode.OPEN_SQUARE_BRACKET:
    case KeyCode.BACKSLASH:
    case KeyCode.CLOSE_SQUARE_BRACKET:
      return true;
    default:
      return false;
  }
};

exports['default'] = KeyCode;
module.exports = exports['default'];

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(191);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #playlist-window {\n  display: flex;\n  flex-direction: column;\n}\n\n#webamp .playlist-top {\n  width: 100%;\n  min-height: 20px;\n  max-height: 20px;\n  position: relative;\n  display: flex;\n}\n\n#webamp .playlist-top-left {\n  width: 25px;\n}\n\n#webamp .playlist-top-left-spacer {\n  width: 12px;\n}\n\n#webamp .playlist-top-left-fill {\n  flex-grow: 1;\n  background-position: right;\n}\n\n#webamp .playlist-top-right-spacer {\n  /* This goes to the right of the center */\n  width: 13px;\n}\n\n#webamp .playlist-top-right-fill {\n  flex-grow: 1;\n  background-position: right;\n}\n\n#webamp .playlist-top-title {\n  width: 100px;\n}\n\n#webamp .playlist-top-right {\n  width: 25px;\n}\n\n#webamp .playlist-middle {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}\n\n#webamp .playlist-middle-left {\n  background-repeat: repeat-y;\n  width: 12px;\n  min-width: 12px;\n}\n\n#webamp .playlist-middle-center {\n  flex-grow: 1;\n  padding: 3px 0;\n  min-width: 0; /* Not sure why this is needed */\n}\n\n#webamp .playlist-tracks {\n  display: flex;\n  flex: 1 0 auto;\n}\n\n#webamp .playlist-tracks .track-cell {\n  height: 13px;\n  line-height: 13px;\n  font-size: 9px;\n  letter-spacing: 0.5px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n#webamp .playlist-track-durations > div {\n  padding-right: 3px;\n  text-align: right;\n}\n\n#webamp .playlist-track-titles {\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n\n#webamp .playlist-track-titles > div {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n#webamp .playlist-middle-right {\n  background-repeat: repeat-y;\n  background-position: top right;\n  width: 20px;\n  min-width: 20px;\n  position: relative;\n  padding-bottom: 18px;\n}\n\n#webamp .playlist-scrollbar {\n  height: 100%;\n  width: 8px;\n  margin-left: 5px;\n}\n\n#webamp .playlist-scrollbar-handle {\n  width: 8x;\n  height: 18px;\n}\n\n#webamp .playlist-bottom {\n  width: 100%;\n  height: 38px;\n  min-height: 38px;\n  max-height: 38px;\n  position: relative;\n}\n\n#webamp .playlist-bottom-left {\n  width: 125px;\n  height: 100%;\n  position: absolute;\n}\n\n#webamp .playlist-menu li {\n  list-style: none;\n  display: none;\n  width: 22px;\n  height: 18px;\n  padding: 0;\n  margin: 0;\n}\n\n#webamp .playlist-menu li > div {\n  height: 100%;\n}\n\n#webamp .playlist-menu ul {\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  bottom: 0;\n}\n\n#webamp .playlist-menu.selected li {\n  display: block;\n}\n\n#webamp .playlist-menu .bar {\n  position: absolute;\n  bottom: 0;\n  left: -3px;\n  width: 3px;\n  height: 54px;\n}\n\n#webamp #playlist-add-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 14px;\n  width: 22px;\n  height: 18px;\n}\n\n#webamp #playlist-remove-menu.playlist-menu .bar {\n  height: 72px;\n}\n\n#webamp #playlist-remove-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 43px;\n  width: 22px;\n  height: 18px;\n}\n\n#webamp #playlist-selection-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 72px;\n  width: 22px;\n  height: 18px;\n}\n\n#webamp #playlist-misc-menu {\n  position: absolute;\n  bottom: 12px;\n  left: 101px;\n  width: 22px;\n  height: 18px;\n}\n\n#webamp #playlist-list-menu {\n  position: absolute;\n  bottom: 12px;\n  right: 22px;\n  width: 22px;\n  height: 18px;\n}\n\n#webamp .playlist-bottom-right {\n  width: 150px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n}\n\n#webamp .playlist-running-time-display {\n  position: absolute;\n  top: 10px;\n  left: 7px;\n  height: 10px;\n}\n\n#webamp .playlist-action-buttons {\n  position: absolute;\n  top: 22px;\n  left: 3px;\n  display: flex;\n}\n\n#webamp .playlist-action-buttons > div {\n  height: 10px;\n  width: 10px;\n}\n\n#webamp #playlist-window .playlist-visualizer {\n  width: 75px;\n  height: 100%;\n  position: absolute;\n  right: 150px;\n}\n\n#webamp #playlist-window .mini-time {\n  position: absolute;\n  top: 23px;\n  left: 66px;\n}\n\n#webamp #playlist-window #playlist-resize-target {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  height: 20px;\n  width: 20px;\n}\n\n#webamp #playlist-close-button {\n  position: absolute;\n  right: 2px;\n  height: 9px;\n  width: 9px;\n  top: 3px;\n}\n\n#webamp #playlist-shade-button {\n  position: absolute;\n  right: 12px;\n  height: 9px;\n  width: 9px;\n  top: 3px;\n}\n\n#webamp #playlist-window-shade {\n  height: 14px;\n}\n\n#webamp #playlist-window-shade .left {\n  height: 14px;\n  background-repeat: no-repeat;\n}\n\n#webamp #playlist-window-shade .right {\n  height: 14px;\n  background-repeat: no-repeat;\n  background-position-x: right;\n}\n\n#webamp #playlist-window #playlist-scroll-up-button,\n#webamp #playlist-window #playlist-scroll-down-button {\n  position: absolute;\n  width: 8px;\n  height: 5px;\n  right: 7px;\n}\n\n#webamp #playlist-window #playlist-scroll-up-button {\n  top: 2px;\n}\n#webamp #playlist-window #playlist-scroll-down-button {\n  top: 8px;\n}\n\n#webamp #playlist-window-shade #playlist-resize-target {\n  position: absolute;\n  right: 20px;\n  top: 3px;\n  height: 9px;\n  width: 9px;\n}\n\n#webamp #playlist-shade-track-title {\n  position: absolute;\n  top: 4px;\n  left: 5px;\n}\n\n#webamp #playlist-shade-time {\n  position: absolute;\n  top: 4px;\n  right: 30px;\n}\n\n#webamp #playlist-window .visualizer-wrapper {\n  position: absolute;\n  top: 12px;\n  left: 2px;\n  width: 72px;\n  overflow: hidden;\n}\n", ""]);

// exports


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(193);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "/* Styles */\n#webamp #equalizer-window {\n  height: 116px;\n  width: 275px;\n}\n\n#webamp #equalizer-window.shade {\n  height: 14px;\n}\n\n#webamp #equalizer-volume {\n  position: absolute;\n  left: 61px;\n  top: 4px;\n  height: 6px;\n  width: 97px;\n  background-position: 0 0;\n}\n\n#webamp #equalizer-volume::-webkit-slider-thumb {\n  height: 7px;\n  width: 3px;\n}\n\n#webamp #equalizer-volume::-moz-range-thumb {\n  height: 7px;\n  width: 3px;\n}\n\n#webamp #equalizer-balance {\n  position: absolute;\n  left: 164px;\n  top: 4px;\n  height: 6px;\n  width: 43px;\n  background-position: 0 0;\n}\n\n#webamp #equalizer-balance::-webkit-slider-thumb {\n  height: 7px;\n  width: 3px;\n}\n\n#webamp #equalizer-balance::-moz-range-thumb {\n  height: 7px;\n  width: 3px;\n}\n\n#webamp .equalizer-top {\n  height: 14px;\n  width: 275px;\n  position: relative;\n}\n\n#webamp #equalizer-close {\n  position: absolute;\n  height: 9px;\n  width: 9px;\n  left: 264px;\n  top: 3px;\n}\n\n#webamp #equalizer-shade {\n  position: absolute;\n  height: 9px;\n  width: 9px;\n  left: 254px;\n  top: 3px;\n}\n\n#webamp #on {\n  position: absolute;\n  width: 26px;\n  height: 12px;\n  top: 18px;\n  left: 14px;\n}\n\n#webamp #auto {\n  position: absolute;\n  width: 32px;\n  height: 12px;\n  top: 18px;\n  left: 40px;\n}\n\n#webamp #presets-context {\n  position: absolute;\n  width: 44px;\n  height: 12px;\n  top: 18px;\n  left: 217px;\n}\n\n#webamp #presets {\n  width: 100%;\n  height: 100%;\n}\n\n#webamp #eqGraph {\n  position: absolute;\n  width: 113px;\n  height: 19px;\n  top: 17px;\n  left: 86px;\n}\n\n#webamp #preamp {\n  position: absolute;\n  left: 21px;\n  top: 38px;\n}\n\n#webamp #plus12db {\n  position: absolute;\n  left: 45px;\n  top: 36px;\n  width: 22px;\n  height: 8px;\n}\n\n#webamp #zerodb {\n  position: absolute;\n  left: 45px;\n  top: 64px;\n  width: 22px;\n  height: 8px;\n}\n\n#webamp #minus12db {\n  position: absolute;\n  left: 45px;\n  top: 95px;\n  width: 22px;\n  height: 8px;\n}\n\n#webamp #band-60 {\n  position: absolute;\n  left: 78px;\n  top: 38px;\n}\n\n#webamp #band-170 {\n  position: absolute;\n  left: 96px;\n  top: 38px;\n}\n\n#webamp #band-310 {\n  position: absolute;\n  left: 114px;\n  top: 38px;\n}\n\n#webamp #band-600 {\n  position: absolute;\n  left: 132px;\n  top: 38px;\n}\n\n#webamp #band-1000 {\n  position: absolute;\n  left: 150px;\n  top: 38px;\n}\n\n#webamp #band-3000 {\n  position: absolute;\n  left: 168px;\n  top: 38px;\n}\n\n#webamp #band-6000 {\n  position: absolute;\n  left: 186px;\n  top: 38px;\n}\n\n#webamp #band-12000 {\n  position: absolute;\n  left: 204px;\n  top: 38px;\n}\n\n#webamp #band-14000 {\n  position: absolute;\n  left: 222px;\n  top: 38px;\n}\n\n#webamp #band-16000 {\n  position: absolute;\n  left: 240px;\n  top: 38px;\n}\n\n#webamp .band {\n  width: 14px;\n  height: 63px;\n}\n\n#webamp .band .rc-slider {\n  height: 51px;\n  width: 14px;\n  margin-top: 6px;\n}\n\n#webamp .band .rc-slider .rc-slider-handle {\n  width: 11px;\n  height: 11px;\n  margin: -6px 0 0 1px;\n  position: absolute;\n}\n", ""]);

// exports


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(195);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "#webamp-media-library {\n  font-size: 11px;\n  font-family: \"MS Sans Serif\", \"Segoe UI\", sans-serif;\n  -webkit-font-smoothing: none;\n  padding-right: 2px;\n  padding-bottom: 3px;\n}\n\n#webamp-media-library input {\n  height: 15px;\n  border: none;\n  background-color: inherit;\n  padding: 0;\n}\n\n#webamp-media-library th {\n  font-weight: normal;\n  text-align: left;\n  padding-left: 5px;\n  white-space: nowrap;\n  height: 14px;\n}\n\n#webamp-media-library td {\n  white-space: nowrap;\n}\n#webamp-media-library ul {\n  list-style: none;\n}\n\n#webamp-media-library ul {\n  padding: 0;\n  margin: 0;\n}\n\n#webamp-media-library ul li ul {\n  padding-left: 10px;\n}\n\n#webamp-media-library .webamp-media-library-table {\n  width: 100%;\n  border-spacing: unset;\n}\n#webamp-media-library .webamp-media-library-vertical-divider {\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 4px;\n  padding-right: 4px;\n  cursor: col-resize;\n}\n\n#webamp-media-library .webamp-media-library-vertical-divider-line {\n  width: 1px;\n  height: 100%;\n}\n\n#webamp-media-library .webamp-media-library-horizontal-divider {\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 0px;\n  padding-right: 0px;\n  cursor: row-resize;\n}\n\n#webamp-media-library .webamp-media-library-horizontal-divider-line {\n  height: 1px;\n  width: 100%;\n}\n\n#webamp-media-library button {\n  border: none;\n  color: inherit;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  height: 18px;\n  cursor: inherit;\n  /* TODO: I think only the center is supposed to stretch */\n  background-size: 100% 18px;\n  min-width: 53px;\n  margin-right: 4px;\n}\n\n#webamp-media-library-track-summary-duration {\n  /* This plus the margin-right on the button add up to 8px; */\n  margin-left: 4px;\n}\n", ""]);

// exports


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(197);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "/* Rules used by all windows */\n\n#webamp {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* Prevent accidental highlighting */\n#webamp canvas {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n}\n\n#webamp * {\n  /* Some environments globably change the box-sizing */\n  box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n}\n\n#webamp *:focus {\n  outline: 0;\n}\n\n/* Range input css reset */\n#webamp input[type=\"range\"] {\n  -webkit-appearance: none;\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n}\n#webamp input[type=\"range\"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  border-radius: 0;\n  background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-thumb {\n  border: none;\n  border-radius: 0;\n  background: none;\n}\n#webamp input[type=\"range\"]::-moz-range-track {\n  border: none;\n  background: none;\n}\n#webamp input[type=\"range\"]:focus {\n  outline: none;\n}\n#webamp input[type=\"range\"]::-moz-focus-outer {\n  border: 0;\n}\n\n#webamp a:focus {\n  outline: none;\n}\n\n/* Animation */\n@keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n#webamp .character {\n  display: inline-block;\n  vertical-align: top;\n  width: 5px;\n  height: 6px;\n  /* background-image: TEXT.BMP via Javascript */\n  text-indent: -9999px;\n}\n\n#webamp .window {\n  position: absolute;\n  /* Ask the browser to scale showing large pixels if possible */\n  image-rendering: -moz-crisp-edges; /* Firefox */\n  image-rendering: -o-crisp-edges; /* Opera */\n  image-rendering: -webkit-optimize-contrast; /* Safari */\n  image-rendering: pixelated; /* Only in Chrome > 40 */\n  -ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */\n}\n\n#webamp .window {\n  /* Work around rendering bug with clip-path */\n  -webkit-transform: translateZ(0);\n}\n#webamp .window.doubled {\n  -moz-transform: translateZ(0) scale(2);\n  -moz-transform-origin: top left;\n  -webkit-transform: translateZ(0) scale(2);\n  -webkit-transform-origin: top left;\n}\n", ""]);

// exports


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var AudioContext = global.AudioContext || global.webkitAudioContext;
var OfflineAudioContext = global.OfflineAudioContext || global.webkitOfflineAudioContext;
var BaseAudioContext = global.BaseAudioContext || (OfflineAudioContext && Object.getPrototypeOf(OfflineAudioContext));

module.exports = (typeof BaseAudioContext === "function" && BaseAudioContext.prototype) ? BaseAudioContext : AudioContext;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(19)))

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(200);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(14)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "#webamp #balance{background-image:url(data:image/png;base64,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)}#webamp #balance::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}#webamp #balance::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}#webamp #balance::-webkit-slider-thumb:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}#webamp #balance::-moz-range-thumb:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}#webamp .actions #previous{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAASFBMVEUfHzEgHzIgIDMhITQiITMiITQiIjUjIzYjJDgkIzckIzgkJDklJTolJjsmJTsmJjtKWmtSY3N7hJSElKWXqLmttca9ztbv//8qmLzOAAAAcklEQVQY022QMQ7DMAwDj7KQvqD/f2UXD2YGN43cWAuNo0wI1JvNjE8SGzwiwf/Ywwr2k1M6HFMPwDgvvxnoU2DN6fl7xh7X/YJx4a/yte67FaPmV2O5pxi5ZN/Gt5+rI998DD/ridxiLAQiHBKEJYGaT1TOJE+BDpf2AAAAAElFTkSuQmCC)}#webamp .actions #previous:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAAS0lEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOChcPAAsQwDmOIi4MoEocRieMgiMRhROYEInNckTkugcgcVzgnNASIwRxTZOcoIHwDAI4lI4lOrG7eAAAAAElFTkSuQmCC)}#webamp .actions #play{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAARVBMVEUmJTsmJTwnJz0nKD4oJz4oKD8pKUAqKUEqKUIqKkMrK0QrLEQsK0MsK0QsK0ZKWmtSY3N7hJSElKWXqLmttca9ztbv//93JWkaAAAAcElEQVQY022QQQ7FIAhEHzJpL/Dvf8y/MBG70VZbYEPeAIGxH0nEX5QEB4L+xj26CnkMXus2QJv92hXXrETluHnT07MqrnV6UbSfcY6rY+N+/1KUUTBl9Nl/vtxow5+PRyKif+1xpZhmmIEZMxFh+AXgtiNLLYv6agAAAABJRU5ErkJggg==)}#webamp .actions #play:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAARUlEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOChcOAzGFkQOYIMiBzwDw4B8RDcEKROKFIykKRDAhFMjoUbqkpsnMUEL4BAGRUIvLymjxCAAAAAElFTkSuQmCC)}#webamp .actions #pause{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAARVBMVEUsLEUsLEYtLUctLkguLUguLkkvL0ovMEswL0swL0wwMEsxMU0xMU4xMk0yMU5KWmtSY3N7hJSElKWXqLmttca9ztbv//90IK75AAAAY0lEQVQYGW3BwQ3DQAwDwRVPsBtI/3UGfpCBDfiT00x9GPjbiI2dhvAnjsSsuV3AARdwAMHNo1kBmhVuEjMxEyOLkcRMzMRIze3kcfJyQyA8wqsaO2zSdtitogqqqEoJIgTLP/lyHlITiB2JAAAAAElFTkSuQmCC)}#webamp .actions #pause:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAAOUlEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOCyXFgYAEyYBzBEBdGUdpzXENDXEJDwRxTZOcoIHwDAEquItl9JSARAAAAAElFTkSuQmCC)}#webamp .actions #stop{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAMAAACHObUhAAAAP1BMVEUyMU4yMk8zM1AzNFE0M1E0M1I0NFE0NFM1NVQ1NlQ2NVM2NVQ2NlVKWmtSY3N7hJSElKWXqLmttca9ztbv//8mgTHJAAAAXElEQVQYGW3BQQ7DMAwDwRUttPf+/6FFD2SBBLnYmqkPA38bcbBpCJs4ErPm8uPxAgLNrbmtcBGjiFHETIyWGFmMIkarubzZNAQIm8YOB7cdTqsooERWkEXJheoPfCIcRKB1vkQAAAAASUVORK5CYII=)}#webamp .actions #stop:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAAMklEQVQI12NgwA1MXKDACMhxDYWCEBAHJuOChQPWC+MwCgoKitKBA3YamGOK7BwFhG8A34IfFkPmwnYAAAAASUVORK5CYII=)}#webamp .actions #next{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASBAMAAABCyVggAAAALVBMVEUICBA2NlU2NlY3N1c4N1g4OFk4OFpKWmtSY3N7hJSElKWXqLmttca9ztbv//8TuYuxAAAAaUlEQVQI12M4AwenDjCcewcDJ4Ccu1BwZzkmp/zu3evld+9MB3Oqa+9e3wfnbEfm7K5F5mxH5uxD5rxF4uxDNuAtEufd3bv33kE4cFcDOWdWzoSC6QkMK8rhgIFB0MjY2NjFxSU0NJQBAK7vnSRnYMknAAAAAElFTkSuQmCC)}#webamp .actions #next:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAATElEQVQI12NgwAVMXCDAWYGBwTUUChyAbKi4CyabAcSAshlZXBxEYWwBJLYgCxJbAIktisQOQbBFkfSGINihLi6uoSC2KZIbFOCuBwDE5iIH3QcLbQAAAABJRU5ErkJggg==)}#webamp #eject{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQBAMAAADgw5IVAAAAIVBMVEU4OFk4OFo5OVpKWmtSY3N7hJSElKWXqLmttca9ztbv//8Mnk1wAAAAVUlEQVQI12PogIM2hq5VMNDC0DUTCmYEQ9iWCPbkYgTbvNwSxp5cXl4MY5uXlwMlwOxZYBPh5sDNnGwMAlA2UHl5FYZ6uNuCGTpSQ6EgmEGISQkKmAB+iFckwoyJQwAAAABJRU5ErkJggg==)}#webamp #eject:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQBAMAAADgw5IVAAAAElBMVEUICBBKWmtSa3Nje4R7jJytvcYAUCbCAAAATUlEQVQI12NgwAVMXCDAWYGBwTUUChyAbJAgCxBD2Q4CCDajIAuM7SAoKABjMwoKAiXAbIhJMPVgAGY7gO2EsoHKBUXR1ZsiqVeAuxIAu8seNVNafDwAAAAASUVORK5CYII=)}#webamp #main-window{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAB0CAMAAACR8SbcAAACEFBMVEUAAAAAUoQAarID9gUNDRQPDxcQEBkRERsTEh0TFB0UEx4UFBQUFBsUFB8VFSAVFSIVFiEVFiIWFSEWFSIWFiEWFiIXFyIXFyQXGCQYFyQYGCUYGCkZGSYZGicZGigaGScaGSgaGicaGikbGyobHCsbHCwcGyscGywcHCscHCwdHS0dHS4dHi0dHi4eHS0eHS4eHi0eHi8fHzAfHzIfIDEgHzEgIDEgIDMhITQhIjMhIjQiITMiITQiIjMiIjUjIzYjIzgjJDcjJDgkIzckIzgkJDckJDklHAolJTolJTwlJjslJjwmJTsmJTwmJjsmJz0nJz4nKD4oJz0oJz4oKD8pKUApKUIpKkEpKkIqKUEqKUIqKkEqKkMrK0QrLEQsK0MsK0QsLEUsLUUtLUYtLUgtLkctLkguLUcuLUguLkcuLkkvL0ovMCUvMEswL0swMEswMEwxMU0xMU4xMk0xMk4yMU0yMU4yMk0yMk8zM1AzM1IzNFE0M1E0NFE0NFM1NVQ1NlQ2LRE2NVM2NVQ2NlU2NlY3N1c3N1g3OFg4N1c4N1g4OFc4OFk4OFo5OVpCQThISEhORj1ZQxxcXGNelepfX2hiYm1lW0JlZXJmZnVoaHZpaXhra3ttbX9vb4NxcYZzc4hzc4p0c4p0dIt1dYx3d3d6h4mHd02PkJKhoK2jlGumhTGnZB+njlatr7X////Zgun4AAAl/ElEQVR42tWdz6+ta1LXP/Xj3VGjA6IRELykww/p7gQJhgkOhLED/wETHRtmRjstbRva295E06djggNDQhwQ0BjEaIJOHECHCFFQsH/Rl+4b7m0aaAINGgPu9VSVg6rnXWufs8/tNs1Orvvk3n32WWuvtd7nrafqW9/6Vj3izJfAc3+V2x8U6x/rmL+hoPPoISWACgapKv1rAq5S868oeOCpOg+KIaDzah51l5ooIP3NwiARFMKpBx8TKCnIskBJysIIIDUFWJ4sSACSAlZJAcnyZQtYIgEUrH5G4XyUx770hX+Rt3nO7SLKS9f40ZeRx344v5fM/4WSQqBe/BwlfaHULNK5WlAPnsjLfrr5ez1z+LtCeRgCTjpaImgpisWRWgrCASJwoAgm4fgScEXLEUVT76gj8DYB7goFS0wUHEQFDOk/FuogbXTpAOKBhcvVONukFJRUSH3k9iWa/Z3Si+ZcYhUsg20pUVIkGRRFSlBkpnEPoZkWSS2o0n6B2LfemdvR725LeklkcTVzSIPl5oCUF6CoLsAsou90ColhLmQ6Iv05o++LrHmxAFUHcFYhLrXvm9FLkpCpj1pvPTA1LdLoCwDwiLUgUwgokkoKpIj+1b6mQixy3nXp2KoB+FopogJS2Z9Xk0QwVaRQnd0p8zlc56dMUC0NUk0AvBKsn65KRmoyhoJgx3gyE0nAcXzvG5lH9HnbqOdNRCgkx5SIZQTSdhJrLTMAleoL1IxCqOqPtUKUlWCRJMnyKrxfy8ZrOoqkACYomKaq9uKAUAtVgaLACVXB51ZDimChMrZvwpGYXE3QtkW23c3FZ6+/R8xl770jGYBmKqpK5gveSClEE1hk5hKvvpIqxA5s4Q4IEUBmClVI9dNU17pPpZK2Ixa3N0GkbVj6n2YzpbaZkCICdYCASQkecpcUy8N74VwqsaIQ3LUOQs+7XpK3/rHvVPvBdGAtWC5+NQcpvOMRZGapPuJKzhVPUNfMoKo3T1w8hLVog23T69+o2VxqqGQJWnRwg0qFWTTgPkNKAZG5vSqo7EVEj1QKquMkCxDHJElcKZSssd3kopbj8e7YO8VF2pB0KQiEnfvX49w9hSF13Sqq8vzGGf+S28EClW2EFIj7sprb3c4i1wQkrSgyaWPNkNzrSjsIIWa57/R8kd5SVD/xmM2fEylKYEkHhUWUprJ0O8Z5IzDQRPpNVOdiBwVw10+3NkzHItrO22+GlG1koZoJ/ckfmEk/CCgZSRw2Owfqsix6M1S1C1EPkJJqq0i0n1toZpvqTSBZAvjavvNq5JoKXLIjtSZSs2Y+ocnj6JdRkcPQ6MfF0YBUKt1z4oNvV6G0d7AiE5ww4ML1nkjleM5bs8jnzUSFbA9vimbMK1DhhOGwqt9LV4ZCVQ2A075HhSR6gENR0ZgRHPDlY54lp5mkSmGHAixDKTFQ3JGlIK5H+567XvK0Xtf+/Gp9H2NMZA0SU3NHKIuOXcsNKN+fE0ywiSdK5nYm+tBKZr+oZpISG691cMXw1Y7YKFAqbqJXMpunSiMvlVRR2LxH+7o7EUFB5o1jY/CcWLGd2lycJ+JcUvWE5whRhbsKx2FZfZF55JilCJRUzK2KWUFfROB9F0XAKg1tb5F8WaidqmSJBUghwqWWyewGhXgIWtualkBCCGEgLGlg4wCXCw/A9HMgW6Tzjs5ezquffXbMHpTxJSoTa+7WxqmJM7B3X4r4cmG5Xi9vHqt9sRYWRja2kCJVbvd1SUlleYUUCmEBqQlSstDM1NwrVlxOJJiZ/dcFaC/P/Ti6+tv/kQkgb5vbiFRDnsLzcr2GrAfurtr9pGxkfb+dR3+yNe6yX9KXC3mzJO6ZV4swjDCMpISIDDbSuX42KVEiTEQbMU8yUIKqquuJNDJS/BrC2HhVNQDy/ooGk5hnPnvb/E/ezmzlxRz6JTnf26R/p33WTf43qLsffTH363+ZTE8e5H985enfg031DErMwQL4gbvsiJnaMdRAq/fE0b4EuQMxCWt84cCBhqLqCh7Wu0ScsjqgVLQQT+sX8lQBQXyTBVbaLj4s6xgCAbC+WxvaP5r+JXqmf6mUZvSWKkouvqydSFZSUiy9AFWpFVDcH8lKotAg28EVCKF0FPT78RCqqqAZEIKKcKzB5p4IUQbuhoMIUop30oAhGIIvrAiygqw22vEyWQhiq6OjQbVXWoT5NY0ixFiQ13D8IohV3dsgcUQuzYP0hcksSeZONXT1R1ACKtMbwand7KhKdsiF8XY1IGZCfynVzo9CRbUjhwCxkWMHJ9eqS9AmtCBVDRED9esmSVGhqPTsfNxokBjSXFBVW6SChr4Yd5+3lF4zlBW15Dj3Y13mViNak54tbehWi6pEQptFKA3L9LVOwkqvPMFN4gNY58BCh1HpDKVMKHyhrgiOTDhP4bDcGQGSubHPIuc5PpzTURPcg0YMXqT7qg0KKJGSnX+SiuajxMkZq1WTuoyTEdax3UQggdRmaK67syqdcRwB6/RlcdqJnu+ag09ykF7qxvraXkxYVOc6S4XMxFU7JvdH8YLDQAXB4TKpOSLItkkBE8Sb/yvqGPgKYJW34DXRRwGKnpRSzSaQhFpy8Q5066SY9BKMmXRaZGtlboNQh+F2cuNYMk0GdF1BtO7EqQrLMaEARFOhzPOiqoou/EL7S9wx1cgM6aTWvS+pfTN3xRoIWDvLay6rZHvewYvayYVqPpIAjtvVTEC14sym3CT6Vls1h5u5pINYeaev0i5BB0jk5i4vV5L5bhLeMRKzKzhVREQUpDApBzehrUc9AU8tDiSG4ViVZgqdy+zrtmry4v7gTqkqIzueisUA5c7h4wgj89wYGxI+smk6/YPV9tXkT03aT4kSVKGN2xk4X1ALIHIi4LqBBT7Wmmn6ew845oeEvTTftN2v7KSmPYg20tV17BTPd0zNDhz+nYSHilCdCAtWiIEvj7TFMZhDsLjo0PxnwEl9PvdrbiebqL1JXqVYEIYvJMdjgN8jTaz0VipvbJhCY8WCJKDEN/ZxQe55sq8f+QUL/ptufOaNfa4oFjS1pAYfhfW+rs7o0x5AthIKKSnCCgiLvvJOx6aEMXaUKbAa1SVkYos10aWAXIPr392+tfxmb9Y3/PqT/SlQ0Z/hHfz1wz81+0SOZz/AH/DsH4jy+09qJ2r84jt8TeqT8b5/Lx/f29QE5Rue8A9ZxTv8a4LwtpMfFJ7aTlTe6XYiH4/3/Vv9+Di4DhdPaSeu73QraWCtetrJh0C/9JR28t+13ul28h/4Jd737/SXt53w1dqJmb3t4/VI8fud9hXAusfPpFPg17+KP8Hb/76+85eEbGZYTzORr85OvpfvfdvH80qOvFO/Nistx7MfzP/Fsw+B/85T+pNfEuQX3uH+JD7O+/4Nn1a47/RS60n9yf8HX1Fd83DQxYgwntKfvPO/zmLHxiYlKE+Y7zTJ/SMv0vfyOIWvqfWoYGx/fKlCqsmBekDCn/T9Seh/GcJ+s/12aeJIjmc/KL/Hs1eBJ8Unvywl4l2ERzVrK3B8NY8q1eU/PwkCqeep6dRUSkjtelaSaNRkylRJhTbDVpsBSIavl86DM5R7zcrSIImEqhDhInw83/+TfEph5dZVPGm+UyLeLEgZJU3nu0hsnYHAEWlXgqRQ8gE9rc0E3hK0KtXL1+nUMmI9kAEscSikibjMYSSlJLjWgTcpO3byofp9+cirWvK7/+dJ7QQ5JBUpsdiFaifx0tEmWXg1sZKo0jbxOIw4/xJGaLSNdDg1FoTWDT1SU+MuuFdhkRRRCcWiilAii0/F+3+CT/pZYhGe1J+A8HO+C2lbxuH8Jb8cNUW1kFbCpKL8jG3mSAC+58rz9LbRhNRlTTS347j48tV14BrPsuZvXSHIqSRAlpKSJ+l4OUqaozY5nn2I3+cjr6LyO09pJ/8D5L++iE/+xVvrGGmRAEemeFOw//knbp/3o1+89Sm7Op5AZbU7KS7HaqXdIre08R7JNpMKQrOmqhMUKUsXRYUVF1l8kvf/RL5+1bNxi0/kj96f7PrO86DgFMYAXMp0ahTxNiRHW0q2gqSDUBX4KnCnl6QpVu8lyVpBaa4ujYzyBj0LzqGk927UHYwEuUETXx1W+X/BJ+a8F+U9NZq7XWC8Zqbn17seVvAVqDjmjop06c9GZ0OsJmC7kqbSirMjp0RjwZZrtbqjlt6ju5YkMhqw6139oSewk+ORy7zBG42SzvLaS+zkXfCuJDsMJ9RKo06NgfVVchaJm50WqqIkcnIa2Uvi16iN916U9M3tU7c49PufwE4u9jiRA/KeT/FuPmXfxqft2/gsu6rz4oq8AaDvAj6LpmJBRUdioTwKX7uuNC616zqyEJS05Tvyau7iDh11uqJ4rTmWPMiLn8CfyPFSM3nPp+CTn3p38OlvT17fup3Hl+Rd7yI/9wafnVLDVERPj9R6h2rJAiN4kJpSa6b6yiS6j8PWaokkYS09lr2TdBdFn9if5NulGtIlKH39W6fYGY8jkzfeQOtdn81RPp1Fd4paxd4781Cani9fkUkulJp62qW1s5XkZc2nE9tUT2+pJ/Un+uhuoIBPvqd497s/Bd/6Ot8KmqjmIzvtjW/ushV887fOfl9BTdV5BWZNkpW00jE1kqKIxm+q86gSuf2oioI4SYaQIMezV/kSH/lHAk+KTz7u6f/lP72ITz5/ohOVb/sVnaYU4Gd/8jF8klPen+/rRr516S2zqNRuRSEvQkq74yJZtkjNfk6N2C+ESEIX+Zn6e//yxCf6HB/7R+9PfL2MuFeRQjDJ14VTrKX6EnQyXSvJFjoMCMaZsCMyMXhxVMnofLp8LmiyVNEshTGyFJmukHKQ49mH9Et89MOgv/2UdvJJhV/46y+yBL9eMsnFUdceHU1+7q898LNfZAP60ZxoZtk6zaSWFLZ8jZAhqMwckdKCkqCNgcmCl66t9bog3EN+kr//Y7yusoUtT+xPFPS7P/OZz3z2c5/73BtvvPXWW2+98cbn3/r8588lkQjjKq7Q7/mt3/7tL16/2kqmOaPzZbWwM+iEGywfyXwElTodACM5IEcwHlZxAV+TS0fMkmz4eveRV/mSPPuwwtPaSbNXNr0z3gp/kdpKx6rqpiE0X7bN5oGlja5YtRODWoyZLHbX472vU8zW7qRIJRca5JLOdSo7Yi9Yr/P+f71eV66Sqyf1J3lCVd0xT3xde9eibCPKfGnU1gEZsziXQScyipvV8nqwtoC9JLX6VQ9HMxHCUqQFjJF6iYJFLgjWGXc++mH0ae3k09qqLAH1hROOXA5oD4vYOkJvFbHPxWwhtWq8q5Jha4MTClbtVIcYO8lLb49uIsrUYpG1OwNP5uQidWm66dP5wR+vX1Vp0ZE+tT+ZlEpBWRABi5Y1iYCxvFpq6dNn8UIOoJSqJunanVstYk+KqpKd/ZV0r1emRhWC9lN1bdXO2RXamsMWSU50r/Yn+rs8+7Biv/m0diIlNlvHlxMc1VqvlvIKqZpo6iNE7Aljz7bZtLDLpttLagG2gBidNGtHnQYrSyfqZJ1mQmgBa7UtXX6FD/54/apybVx9Un+iglgN/7kc3C9yICVSDeVTSbybZR5HJyp9N1uTybkkIhUiHZlpkTCZWsegl4BMFe1WiQLbPKy2PNZ7pftdS+4+8mH5XZ69xhPbyWd2QlOtr0esM/pO8w8q7JYbeVns2XayXC7Y2gTbBWw5a1lTCCRk9CZpdyLZLSkNcOXeN097oTTvIbN+hQ/+GK/rpprM5IE/EX4I/SP7b+qAvSStUJ3O6Al5WTftfqqP7J1uZTnt5KiLWEw15yiH8LWw1OyUOFcgVE6vd5Zyr9pZYcpwOZMvr6WadLPmSrn76D/U3+HZa4b+xh8+oZ283msybV0h13KbgKVXjYvVlxhJDrhMlCS0ru6EivJazmr4xm7Cl6JSomiP4veEplwYvp6q6ShdSVL5K3zwx9ZnlanuRD6tTqnq7Ery3vV1BhSLLVZO3d4/n2cXdAMXJaFCLlP067kEu3ErdpDKDecCac0sC4wKRdAWgAo29nljm3L30Vfld3j2j1PlN5/STj4zvSkGeMAxQnIpadFHFyn08Yhz/VqekEjV7nouKoaRprrW08M8Lmeu090DiyQ0yi7d0NhAL4pcZJLCp/jgj/L65r7CRPhnj/Jbt1D7tk9Qbsq7zz38SFlYwChNfFNBtSsvUIacXCD50mXpYJyp2RilZJvbTDMpxQIpMutSUFUW1U1g3bUUcKFknWXilFzcVA7X2fBLSfy5jyCWHEgJd9WTOcrAs7wnE5Si2l0MasOW3y1DsRwx9DnAYz+OKTqTTMa1WeyJJr114gjZTkRnqMdzJcBrbx/aLvbMSgpbXdU5S+qp6EVKQrT7MGbJ0qI69AELgyWrt2tq7y/b3CMm0WMnyqFE5XL2iw+rULtAB7rK1WQaDLYy3gHuutelwKbAKId2I7rFzEFxsksxcztiQkm2HcxHkhf7q7cdZVpfUPVbrEWwejdE0F3YC6RsW8OBk61szFy9c6aPqgcisM0lT5lZzh0MA5Gt3NTCcB8kRfowiEYYJSqIdA/7LgAv1+kei9JCipr3krBKYS0PjJrGldmEcq13dpWinst5JhJPIV3jYgQzGuFsn6dy9xiEVVURE4QqWd2cce2OEkzjAqyVHWSGntzv6z284aBnJWS6inQb7boOJCpS4Y7AosfeFHonre2v4cZ6YopYz2qQu+5nQW2nxBVxTAvPLstkN/elzofqTu2HZtIWlNPpEcd0+YJ7NQHRTdezO3cTXUe0Xuzph/PcntlOZcGaj5KB1n7+fBub3hJfF3dqKSIHAp6Q6lyse4QEDTjOcThnU3VN63dd2HNLtHtmlpiVHGzHP01AOxDfNuY8WJTJ1HRGy1w2OT2vCkiWWUsJYorIARIgumaluu432pe4COseyLPJ2izH0runTtAuwkzVw6qKta5TDZZmzxc4IHZHdU/HiTghRj+9nQii01kd4w9ciBVXBgArRONs23oUxJLZDkazFST99s0ySFA+xbuIKtQnQx6XmCw8i0jVgCDnzmevT0KlepNuqE4rvEHKOe5CtZn+HoNiu1s9HRRd1binDamEbYIlaM4LbmlUk6wFWuEKPS2HSy+YdNdT95ADKrs49Twg0J2i3dbXRYpLWU1JNGboxvW3R6MmxlJBKyPpHqHuJ0NSp4+fBZHYOmv9Uj2yIj9X8iIU2XfOttzKSfErcrHzOX7NLwejAhLH8ttJZXcPwHurtmazf0Vi51s5Wi4fXNb3+TrnZ48nUKjY/HZstmHJ7LgCoj764y9E/dIUgfSXSMCzwyvXmv8NG6Yb/jzsQZVZkplDUhtP6MMi6V6Sr2xF4mTWrp9t3VQ0ejRUnG2IE262y95Jg+5CYz9mcu3EwCGP6+oo1Nci+DTSWrqUCC66oVhZu+68kxIc6fg84j0DCQfBExWOwEidUG8WGJoCylT6jEIpLdmVzkfuyh5LV0KlLhtYT062EuX3UwHTZgfkYlOqSI1k+YhxBogU3BusdfbADbxe3OQX3SopCOa9JKM3kFle6dUYDKh3lJSrXIueEzDC244VhUv2AKHZ8JjRw1syx7pCVHJShLeRf8qeO1WUDoq6mYOR9zfQLukJclXEtMt6beve4/0WxDppJDiBVKOr89pvtk5j0Wy29sgzH4g93QVA1h744VQMypwBbIkVehDj8nxHTKqsk+Tuzm/zFUoQEXnJotTwICU6/Z11K5Lv1t3dpqrnDjeKSFi51gJdbSbCfY9v6I0mMzjrxAC9r0zgaEcY63QH3gMMylHE9sJ0M4cMXJltiyeqkeNKXae611HL7fyYPZJKO5CGykK7PDqqtJe0yM0aSKXYucPWOKxRN8WN91vRlqk9lUZ9Inq1X71r48+bnDWvA296sl7N91lz5TrJTkTWjr1l7SAbc3heNWq1lMRsZMyrEcklIME6AdAAzEN7Zxagy6dqtWOHPKrcmSl2WZJnoSvxTc7FdSkvCSldOlqaEXDTKVMnA230PLQudFCsVefe2S3xMW3haO31y+4OFx/fimancbrlTZ0fuJ+m2kMu3Zsxm+mG2xYbm/THmr5tHyXM5D9Sj+kxtrRRrbCZFEUoXDSJAZBxnYEzw27Ks8xuRvRlyokB18PgTnYFrR4gxnFcoicyGuuo4Cw4Kh4nsF1am+zYDHMPZmG1rerMKXNjhsGCHA90v4nsGSV1OyfnoZXUZoCkRAykJMk9fYBdDDj3mc6ELzQ2jUuiGO2MdeHdjn0ijPaNNSGyNqeuBbz/uVrk870CUi+OCPrKJgRdhwtdX2IM5CqJeNzB7nGwhTxsOSh52SDYL9dycNO1MLSUkDkceg/0sXQK+Rb756iAp0HDDzl/wDVtJntKHVlHcfRoEcXR8NQpUgh45R1IiZVIeJOOTpicYy459h58Met70Hqwg31gaZd9QSUVZQtfRdXwuK0brv55dDiwNPsfmvSpgKxBLLUomlWZsY+6RbOrE9+Z6SjRxKlSLdVQcO0pqpkiJaoSaKRG9VAPFBUh5tYtvSOlhMiaJTGW+HrQR1SjcVS9FvleLJ3vEgaWemmWoAauBL6QEJkl0fFMM+KxJahLqtC+4B6VmiP8yyWz68x7FbeQWLAeKr1cT8Fdjx6E8jhQkpVoHaA2cv52onse6hBzvoearMyunKu0nVnApSdYSDEOeNLyzcY+ZiznpDUsewxSCVJVlFsD1JEtKhXV0zOts912pt6kyIxmK7AOJJlI9l1yrvlRnuUohLse7GoTl0NVER8uAbT27BERdxS14TGvnSRWM5nTvD2ATRa9CMG9B/VNsDsaBGrXzfVFK8mHPmILv3cnkzTtEEVGj1vWVl7URKeBEBVFanUhvVkdWTd6bFg1pIBcsX2H8GWuHdYEPHZi1A/qXXJs4SVoJBaaM1MpK1v6P5fbgUjEwnqEri9KYrWUQAqktNJ6z8g54PMFAVvtYeaZWNlVMSPBaoH9FiRles1It00Nrug9Ynu6dcfDaGIPCEaFfoqJrzekpBOephb0pj6bO5FAuSiihgidLEiZCemOlqMl2Ay8mbzTwqrKwRcm1DH6iJ5Ndpb9quuU+agQJ6+fIQbWl9QqW1a1Fu4nOXAZ45RoBxJu55ww4b7bMCSiRx9qptiJiXvpLidvr93KMHMuTQocX2qCI01pzuyonmTlHqhOwVbXYBtphNoXrEqX4QadSWBOhzIBqknQ4YpEH5sllVPVS7RHOdkpePK1iNYr5gw308Wl25sCIRNRVk9MK7JwihITS5Vce2cWZJp724npbpdKLxUO74HT0vXc5S2kkcoZv8vNwOODtNC2NlfZ+u2uZSHl7dGsZiM2nrxQcjPXMXfmlY9q7FPJmrmfGLG2+YnUcjdbLCo7W22GsvHMhpB7nF709LopnMdplfpzP/9c2WSI8q0KY7X/tlXCYruT7Elpdz1mtGeIzRaz7BF9K1N61s9g9rs6UlVEjNIdx9xjteakUZJJj81KeElVVK+7pyn3M76VWMTJ6k4lZ8/urasuQ6SKSFOF+wVEFiYzEZifffXVn6+6/8xvjCqdUhVSQEyREvcpI5iDx4zePkd2KWimXecxHGTn/M4ecbdnwy1jTxCT0ygEjvNDm44gTa9j7HmZnmA+gOyOyFaA1sCsPdZWOwmozkSSLFb12OUgIx2kRJRAGu787GuvvPLqL771V//p38TPzqFqYU9YN+XtKlw73OxA3LSEk4rZuXW0NCzbRpcTpggMXyai604nAqTia4lxOW6m6QUe4usqSdLHQH2zGppJKuu4nDkhCyzw1QFhxs3VFazX7lHOLB0KfpO2e5N87LVX4M/+na/5hrpOI1suPZTUSgRn3SEzB9BXG+pyKTv7xC6HUEKJSykG4UjeTQHxrK4LsTFQoQGrT5+4yEl7Wkp6XfnsR92JjLvJ1NRoR7QzHN8nP9QmgZL07Cl1a3PIZFdKLHc1VQu7yD1+nx977RXuf1Pfo/WJf/Wn9obzMYn2BbmmrpGIL9kcyYynTgo9suuD7dECk5jTD5ql36qb49Bz0ywbhUvZYejQf1Eq67ZYoY+ptHQLTpLcqKTdUS2f4xtk19e04aNcWfxuTWkU4ppUg7wL3LH42GuvXH79i9/49Vqf+CdfM85o97E0kyNdyCnKRcBt3SvSgv0ZCaKNzqQcSThM0jQ1ax9tEchUmjadYKU+wLlcLvscAhANtbxdCX3EvY4yqccX7h1fYwvrxLaDdi/VErU4z/+YwYdEsjib/1RI+Nhrr/zBb3391xf1iW959ZdAZWZETtlWSprbFGmV3CL0jplAvRLImunxlCxPQYOwah/USSm2O/ouJFKYRi//AkPqaN/Y4j5bcZanNOsx+XTebqtYhwwb1bpyY+FblCGZuPRpGA05VrKULCIxcueeOYnPT7/2yq/9z68vlHrvF1959RNUDE152xXlrk1RWUedhkvVxXH1xpApLX1C6fl6qq5TOO/ZhEhP8i8hppSOD59PzaoZ4LZrBiPVfBGd1HWeIiKXjq5Z03LfSZQ2NaBMsVvmtJgNMhKNy8k5iXIB9KdfewX7M7NH/hivvPqJPiEpb6Zt77mutjvrtF95jjtgdVqiBrjeKZhpBCRLRzPYfl+g1PeA8qvIJELO9Nmic2vtCaNdJtMXAZtkaxkystSPaS4XymvDN8uNvxnhfXRs3PqAATmTQEjE7UzLshKafMtx1QocZ81GkZ4VDJFr14xzH65xWEWfC7G6h17cQdu8WtY0DlT2IShNkLmDSVmd9aE41j7aIdkNRi8Ak+rd36ccSLY2qaBYFx/d9ClsU1bte1CVibA2kQdS43661Jbrr7z/TeILJVV84a2v5c0PfHtGQUYpcJn46QNOSnA38abbah9aAoFYdvVvHxjQvqImzYl2TnqsMTJbje9Wa7vkSszXHOs1pUp5FMJKZZOpmVE5PYK7WLi7cXZhdnpAz5m0AU4RK4k8weQMDM7kL7//Tf06FeQT/k13b37gPdqC/Y473co9MWWEs0RT87uWf9fP6IqwpxdEECXa0qeumY3Dy9iThLEzt7GZTdyGYtFHZuijYfi6efSUFdQuiWaXjVadtdDZhTFMbxMdqwc0FFZhIyyqCoiSXGjqd//qN2rxhbf+wtfx5gfeXZPKNm9/sXOoiPTAh+nJLiFzSuJeGKVTaoi53EFpW563Bu3UNRtTP4s9HLKZjwNrGdW1G+IFniDJMxnqDqTrYJOqJTPUo2TnwMO/9dbRGUguEnARz24WMiKrJXV/+B3fV8gn/vQ33fHmB96rFTFnmWiLjDjRSnQNZtI/p3Ufvk69x4QRneOdkppTUvD05opKnmOdXYKQqJIbXd+pGLyZ+PxY+jcNgktG5duFv2k5SJGuruoWXEyltdtDkyozdM35ATnhdkF++vuSL/yNb//j8OYH3ltL5oSn1YRAME0sLY4oIbSH9BM66XwdsE+iSi2xCIk5+2rcyVBg45ik6aVUX76cKG+fWwJcRJadmd3LBbHdvJKE+Sqpm7CFhe8azpC70QOWptkpdPn9DD7poR571EtP11VKfvjX5Dde4c0PvLdLZnXdqGBwadRlPQbY9DwBo03A5TJ0Qmd/hIm4SborqSolJ3o8+wCMKvXlENHnau2S1lFlyaYU+yY+lhbXGItNhbCnNVygKqxxfEVLGzvJbrFjzcl0MAcbWWvJQ+AibTbJJ/7W//7a7/rAm7Mk11E6jtg6myF2JF7emk6qb+ZddvVuBpO3RhRCSxc+E6ZtxzmZcf3NnCwWYhEYlA51Us7tCQc5p9w8LxFOvXYH7sE3JeW1x+FcDWr5ZQizObWutjpUw+qq7b80zk34jp96N/BdH+AvrvMAPCbD61H0xmoQUeJLcKXE+z71ZCOgqzQsBw3TND1PmUEIb5kFl6OHnA+p6wsLbsJoo6xTS57PTSV/mOzME08NSCGsQ5btzH+qwdrdCDlEWlbpNO5Y5oY/mqJULdCV8iejivzOSQWiZAQV+2blugb75cicP+ab8ikup9DACzXLFKnEddAptkdndEp8CrKWe7isae/slHhNoNWXtqaQuQ87ShRZslPiQi6j6gvJHmiRulYhUj0xXSftG4ghXT6uxUz5GkXQboIbgf0chXHeInNNEaxE/KZQ10IVvaFGOhYRqEwuLBuyTqHk2EPtt5xtOlQpEZXW4fjsidwHO7xY5L1FLZGbeioozImF+1RpG+3edTmgJwWxyLnouGTNG2gfXZB3J5ztetiKyhhWtjYy4319hNmWHu9tr9a5iA2rssfX+7pDejx9h+qhkPasdj+zpBMD7zOYspVR1nE0LexR/VoDmaBJ8JnVvhMbzeXrbIPLvNIlsBrxLz1FKWs/HppdHYOUsLaj3BvufvxqoXvkBT7dTXml5g+6irE11X7exB5hZnF73FZeyRji9Fmpc5roHLimW5cRSYnlllzXbeE/5FT7jUw0bkSa0/ByTq2zs3NGt1Z6PSIhIFeHxpZ5xW56OhVbPrOXXIE///0vI3au2oq3P4LpK1FY3CajcqO4ePQMJuQWjlwVyI9qKr78SMfb1XnhFKd87pM3XP0hLwexUgFH1l0DNlemhnE0eEFQL8X2cAFPv7TgRrIftkmR+3xIXx7gzBS2lsNV6fUk5x7imC+vnPeZLJ3r9AJN0CFLRsapa9qMm4ZclqtThiKy9H4PsOAi3LeqoLFIrsJX9RCm6n5CvZZCZYt/Y3nDej8FXEdQ2uNkNDVtXIk7XndaQ+r3vR/C1YiC5T2n5bj2Q8qSHFGe7mD7SC/+hiiLXIH0rD4Eak1hZ805oPhWx03h/D4TTyEIgtW0bwVwkbx2vtSojVcTlussIv2JAeQu1wzlPNvb5yDvfcpdX5efXGtuMYHFNGQMk/Ag4XHy6onUYuulqrDUMKTC6zwctesCS1qQQOom5edUHFKXr7OJMtAYA1rT+tgutoHL/Xn8dYw4cLT1ucm0fqXL/GrA/wXAZHzoHrq/wAAAAABJRU5ErkJggg==)}#webamp .media-info #stereo{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAMCAMAAACpx0YDAAAAk1BMVEUlJTklJTolJjsmJTsmJjsnJz0nJz4oJz4oKD8pKUApKkEqKUEqKUIqKkEqKkIrK0MrK0QsK0QsLEUtLUYtLUguLUcuLUguLkcvL0U8PFNDQ1hJSWFQUGNaWm9lZXZpaXpvcH5wcX9xcYF3d4Z5eYh8e4x+fpCBgY+Dg5KKipaLi5mMi5mRkZ2bmqaioqypqbKqqrTexa8FAAAAvUlEQVQYGQXBQW4aURAFwOrPIJCjEY5Hytq73P9giCj2YBTy+7mqfkUTiURmtUiqRY8eJBJRFAGULIemEipBQySka0xQL+9Bz4FEwbBUj9PP+ffF22P1cXbc1+fnsv7br5ExRr9mz911M99Op+d2P1+22/yRitHttr9eUPP5cH+w/3ftQ4cFx9VX93a7nD+ObufVn/nbdSRqk4qWSCfERHS1USq6ggwkKTCMLBERpCuoVAQdYyAl4dASNJjKN1/Kh0LDHtt2AAAAAElFTkSuQmCC)}#webamp .stop .media-info #stereo.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAMCAMAAACpx0YDAAAAk1BMVEUlJTklJTolJjsmJTsmJjsnJz0nJz4oJz4oKD8pKUApKkEqKUEqKUIqKkEqKkIrK0MrK0QsK0QsLEUtLUYtLUguLUcuLUguLkcvL0U8PFNDQ1hJSWFQUGNaWm9lZXZpaXpvcH5wcX9xcYF3d4Z5eYh8e4x+fpCBgY+Dg5KKipaLi5mMi5mRkZ2bmqaioqypqbKqqrTexa8FAAAAvUlEQVQYGQXBQW4aURAFwOrPIJCjEY5Hytq73P9giCj2YBTy+7mqfkUTiURmtUiqRY8eJBJRFAGULIemEipBQySka0xQL+9Bz4FEwbBUj9PP+ffF22P1cXbc1+fnsv7br5ExRr9mz911M99Op+d2P1+22/yRitHttr9eUPP5cH+w/3ftQ4cFx9VX93a7nD+ObufVn/nbdSRqk4qWSCfERHS1USq6ggwkKTCMLBERpCuoVAQdYyAl4dASNJjKN1/Kh0LDHtt2AAAAAElFTkSuQmCC)}#webamp .media-info #stereo.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAMCAMAAACpx0YDAAABXFBMVEUA/wAD+AQG7gkG8QkH4wwI6A0K2g8K3xAL2xIL4hIM2RMN2BUN3RUOxRYO1RUQ0xkSxh0SzBwS0RwTuR0VvCEVxSEapCkbnyscrSwfczAgpzIhkzQinDUlJTklJTolJjslJzklKDolLjslkzomJjsmKTsmKzsmLDomMjsmMjwmNjsmOjsmRjsmWjwmdzsmiDwnJz0nKT0nLT0nNT0nOj0nQjwnTj0nYj0oKz4oLT8oND4oOT8oRz4oSz4oZT8pL0ApO0ApTEApTkApZkApZ0EqMEIqMkMqPEEqTEMqT0IqUEIqZUIqZkMqa0IrLkIrL0UrNEQrPEQrPUQrQEMrSkUrYkQrfUQsMUQsNkUsQkQsS0MsTkYsVEQsWEUsYEYsZ0UtLkUtLkctL0gtMEYtM0YtM0gtNEgtNUctNkctOUYtP0YtQkctR0YtS0Yti0cuLUguLkcuMUcuM0cuN0c2LFEQAAABDklEQVQYGQXBvVHDQBCA0W/3TrJkBBhmPAQkBATUQA+0QEROT9RBwtADCQQkDMaBLIOk8+nnlvfkUfYq0HKgtzIMMIBBxNpR/+Qsy+pcxLnj46iFiKrquJeuw/xp51QvayeuxkSikk+YHuFmxLdetRH//HXnCIuoxiSxpzS1hFfRlw+/DrxWO1YdqdgXV9vd4mrZmWgl9UdaUnD/LX4bo9ue9O8/N/lnkFG0g+tquwGSy5dUR1BlABio2fmmoVzL00XfZMluV027WL3tK8DkIWtUJRBMJGCMQKQve5vT4C2tRDd5LSaS2wEDcjqz2cbZM0l7Nh/KHiPCCERIKfjR8EmnEApqAGMASDD9uiHBP3bmjPqWVRjwAAAAAElFTkSuQmCC)}#webamp .media-info #mono{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAMCAMAAACk2TZEAAAAclBMVEUtLUguLkcuLkgvL0ovMEswL0swMEsxMU0xMU4xMk0xMk4yMU4yMk8zM1AzNFE0M1E0M1I0NFE0NFI0NVM3N1E8PFNJSWFQUGdSUmtaWm9gYHZuboJ2dol8e4x+fpCGhpeOjp2VlaOdnaqlpbKsrLetrbnuzsEEAAAAp0lEQVQYGQXBQU4bURQEwOrvkcA4iRS4/+VYwI6VEyTPzGuq8ppyrjHKIVPQsSnnGpReZkQnQzfImKJUU8saWUEWQZyV0g7dqs6X349tf7qfN3uf6t/N/imLDL7WY1/Xx8d1m/+X6+P9+U1XSADNH8Xkr9aqmTW7fY5+r9v9OHp859f9i7z2vJwZpUdUjWpqSZQytlYJUrOpWaR1FhhgbcLQRiEFTH4AmtR0pKKbMGAAAAAASUVORK5CYII=)}#webamp .stop .media-info #mono.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAMCAMAAACk2TZEAAAAclBMVEUtLUguLkcuLkgvL0ovMEswL0swMEsxMU0xMU4xMk0xMk4yMU4yMk8zM1AzNFE0M1E0M1I0NFE0NFI0NVM3N1E8PFNJSWFQUGdSUmtaWm9gYHZuboJ2dol8e4x+fpCGhpeOjp2VlaOdnaqlpbKsrLetrbnuzsEEAAAAp0lEQVQYGQXBQU4bURQEwOrvkcA4iRS4/+VYwI6VEyTPzGuq8ppyrjHKIVPQsSnnGpReZkQnQzfImKJUU8saWUEWQZyV0g7dqs6X349tf7qfN3uf6t/N/imLDL7WY1/Xx8d1m/+X6+P9+U1XSADNH8Xkr9aqmTW7fY5+r9v9OHp859f9i7z2vJwZpUdUjWpqSZQytlYJUrOpWaR1FhhgbcLQRiEFTH4AmtR0pKKbMGAAAAAASUVORK5CYII=)}#webamp .media-info #mono.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAMCAMAAACk2TZEAAABJlBMVEUA/wAD9wUG8QkI6A0J5g4L4hIM2RMM3xMN2BUN3RUP2hgQ0xkSzBwS0RwVvCEVxSEWySIZwicZwigcrSwgpzIhkzQkpzkmdzsmiDwnmD0olD8qa0IrfUQtL0gtMUgtQkcti0cuLkcuMEguMUcuNkguOkkuR0ovL0ovMEsvM0ovNEkvNEovNkovOkovPUovUUkvXEovZkswMEswM0swNUswNkwwP0swQkowTEswT0swUEwwVkswZkswaksxNU0xN04xP04xRE0xZk4xbk0yNU8yNk4yNlAyOE8yQ00yTk4yU04yVk4yY04yaU8ybE8yek4zNFEzOVEzPVAzQ1EzRlEzTFEzU1AzXlE0M1E0NFE0NFI0NVM0NlE0NlI0OlE0PlI0QVI0RlJbMtAUAAAA50lEQVQYGQXBTW7CMBCA0W9mrJKEAKr4WXXTu3TXG3Dc7nuOIiohKLHjGJzpe3IUreZ6BxJkIIHjnlxxbDBVs7EXaVV1u1UtpehDAdloNB3Xo6p1XbF7CN2kj0YFEYmasmUz05yb3KjmfW5LcBnEvk7L1N8P4UwvN+HwS/c+iqIrAT68XTyvq7frZNt6W33+nUAFHADAHAyw+ZsA6tXx0AxtaHTz/Nm9dGGxqef9bkKOntdRUh8BIFGIOD42KSBLn6WtFQAWN7zBL68plYDXQVwYASABGTy6h4DMOHEOyATMOHWmJh7hH8HfcsJFco7ZAAAAAElFTkSuQmCC)}#webamp #time #minus-sign{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAABCAYAAAAW/mTzAAAAE0lEQVQImWOQUNT8z8DA8B+ZBgA5VwYi0an5SAAAAABJRU5ErkJggg==)}#webamp #time.countdown #minus-sign{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAABCAYAAAAW/mTzAAAAEElEQVQImWNk+MHwnwENAAAjgQH5PvLWYAAAAABJRU5ErkJggg==)}#webamp .digit-0{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAFklEQVQI12OYGtrA4ACEHh0ORNFA9QAiPQsl393R7gAAAABJRU5ErkJggg==)}#webamp .digit-1{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAE0lEQVQI12PsYNjBwMDgwEgCDQAItwpIh/66WgAAAABJRU5ErkJggg==)}#webamp .digit-2{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAH0lEQVQI12OYGtrAwMDgwNDR4YBCg8RBLI8OVBooDgAebgr//9NFIgAAAABJRU5ErkJggg==)}#webamp .digit-3{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAGElEQVQI12OYGtrAwMDgwNDR4YBC4xEHAB3uCv9NUBWtAAAAAElFTkSuQmCC)}#webamp .digit-4{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAGklEQVQI12Pw6HBgAEF0emqoAwMDkO7owKABD8wKi451feQAAAAASUVORK5CYII=)}#webamp .digit-5{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAIElEQVQI12OYGtrA4MDAwODRgUqDxBmArI4OBxQaKA4AHm4K/5vyk78AAAAASUVORK5CYII=)}#webamp .digit-6{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAH0lEQVQI12OYGtrA4MDAwODRgUqHgsUdgHwHFBqoHgAbbgr/DdfRzgAAAABJRU5ErkJggg==)}#webamp .digit-7{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAFklEQVQI12MMZdBmYGBwYOxg2EEsDQDjggmI1L+I9wAAAABJRU5ErkJggg==)}#webamp .digit-8{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAFklEQVQI12OYGtrA4ACEHh0OKDQecQArbgt/wD0r9gAAAABJRU5ErkJggg==)}#webamp .digit-9{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAANAgMAAAAGbqyVAAAACVBMVEUAAAAA+AAYISknP40bAAAAIUlEQVQI12OYGtrA4ACEHh0OKPTUUAcGBiDd0YFKA9UDACFuCv9mR03UAAAAAElFTkSuQmCC)}#webamp .play #play-pause{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAACVBMVEUAAAAA6AAYISlH3xqZAAAAH0lEQVQI12Po8GhgYAhgYOgIAdKhQDrUAUKHQMU9GgCL+gfA1jUO8AAAAABJRU5ErkJggg==)}#webamp .pause #play-pause{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAACVBMVEUAAAAA6AAYISlH3xqZAAAAGklEQVQI12Po6GhgAIGQVgeGEFYHFBoEgPIAiaIHnsCfw8kAAAAASUVORK5CYII=)}#webamp .stop #play-pause{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAACVBMVEUAAAAA6AAYISlH3xqZAAAAGUlEQVQI12Po6GhgAIHWkAYG1hBUGgSA8gCN1wfe41RVhgAAAABJRU5ErkJggg==)}#webamp #work-indicator{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAATElEQVQYlWNkeMHwnwEKBCOMYUyG9wfOMsLYTAxEAKIUMTIwIKzDIgcxSUJRk4GBgYFBQlGTAZlNskksfvwI0Y2SCN8x3jgLZ1PPdwDE9Qua1aoDEgAAAABJRU5ErkJggg==)}#webamp #work-indicator.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAP0lEQVQYlWMUdDD+zwAF7w+cZWTAApiwCZKliJGBgeE/Gh/TJAlFTQYGBgYGGE22SSz/NYwRKm6cxWoS9XwHAD8UCdbSgnEwAAAAAElFTkSuQmCC)}#webamp .playlist-top-left-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIkJSkrKkM0MCw+PGBnXEJ4d5CGd02OkZDvxT6LAAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .playlist-top-left-spacer{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIkJSkrKkM0MCw+PGBnXEJ4d5CGd02OkZDvxT6LAAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .playlist-top-right-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIkJSkrKkM0MCw+PGBnXEJ4d5CGd02OkZDvxT6LAAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .playlist-top-right-spacer{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIkJSkrKkM0MCw+PGBnXEJ4d5CGd02OkZDvxT6LAAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .playlist-top-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABwElEQVQ4ja2VsY7VQAxFz3WQQFpoKGhgxYqGBioEHQUdTfhCJDp+49EhPmLZZrdCIKFUNDGFPc5O8hYkiCO9sd9M5o6vxzc6PX3ulCl+JSQBhgCZ5Uz4sdIg18Xa9NHyf/q3AMZxXGBkBdTHMVqLbehjGbFnxEOOyAIE4HD4TOwrzASuyECLb8o4R0kJIswGqDjAYo1hdJakOCDh7i091qacct9MVTbNKpPiHOEe+07T+XaHf7ACYXXYaTrn7eszHj882REESJ6q6E9fvvtvgA4kKFL6QfTHD+/3BUmorHkU7sWzB3uDBFXgdWW+Xv3izav7e4I0E45z7+4TLi6vuLj8sS9I1CUycnfu3H6EmQGr5rvWjMKqUW9qxk1Npuk7pUNNvyx0aNGx0Kq1Ri2SkxJEG1dUHbXZa8bdu2UBsDpq1jSu0dE+CRvHsbQsUrc6aZz2zwIJKZJbuhYw95lPhy8lktLAYEMJpCGwpSaNfxXVVlTacZAu9xpnn8v3pKi0c96+WrX6KwiN4wBrQJ0KuyO7oZ5sCr/aHF/kHjq/P3L0Fk5R1d6Ho83Yw4DAnZ/Tt+UKS9U/lgW//vldPtHx/AaiV3eczcMY/AAAAABJRU5ErkJggg==)}#webamp .playlist-top-title{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAUCAMAAABMHminAAABd1BMVEUdHS0dHS4eHS4eHi8fHyIfHzAfHzIgHzIgITMhITQiITQiIjUjIzYkIzckIzgkJDkkJSklJTomJTsmJjsmJjwnJz0oJz4oKD8pJ0ApKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEUtLUYtLkctLkguLUcuLUguLkcuLkkvL0ovMEsvMSUwL0swMEsxMEwyMU0yMU4yMk8zM1A0MCw0MlA0M1E0NFE1NFM2NVM2NVQ2Nk82NlU3NVY3N1Y4N1c4N1g4OFg5OFM5OFk6OVo7Olo7Olw8O109O149O2A9PFs9PF89PGA+PGBAQFhCQV9FQTtIR2ZMTGFVVG1WVmNbWnZfYGpgX3dlZXdlZnRnXEJnaHZoaHhpaXtqanpraoBra3xsbHxsbH1tbX9uboFwb4NxcYZzcohzc4p0c4p0dIp1dYZ1dYx4do54d5B5eIl9fY6FhJSGd02LjJqOkZCQj6CXlqeioq+srbettMQFH6KtAAADiklEQVQYGQXBTa8VVhkG0PW8+1zuRYuN4gfgpV4q3PpRNTFGw8Q4MlaJsUPjr/D3OHJgjANnNR2hxA6MNW00mKJAC0YSSZu2SkmBnrP361o5gsY09UL3Ymrd3bq7073obgAQSoUYJJKoqIgoY0DYvAgaaFbr1tA0mrawAABKQghBEIkBQXTY3AG7mrpZbfYylzVr123ZrWx199TLWsBYo6vYJEYqoySxFzV6qEqhGIUCGmKJXlqoKRoaWbozWwKzDYvVDYDRmFmAAGTDFVZtdbN69WQuvey6Lbu1stOzrc4uC1ClspkjGTGGSmKjkhpJRUnsbfdeYvNz9399xXze354/8dqFT7z+rfGnb9fNunTr3/393H3Djzz53Qsn/ea7h6x//Hnxs32eXL14fPeVTD8++ejlH+7fvPXC9vc/2P5Bff7SuzeOT5tv1UXsro+XfnpGVZ1DPqqTJzz99AOQI8zz6bPB/pcOSLv5cj1rwC9v738F9Djog/VqX7ycN8PQ+Nzp7Y23//f+a++5fV2cq9pc85iu/1w44my9B+yfpc6s7f7pd8xxyXavpxMXbWvC5T0LJd/MvcNv/P3uhU/d/1dYo8Hel7cPPwDaNer4+OvEEwe7+XHvB+aTp3Dqow99Ju733mMW559555UZ+MKZu3/E0odz69Bfp9ehFN6+M+0dLcHg+Ph4c8Zb8GiOD058bAuLf34tzmc85dwNHp+8d6R481WrFvyKcPo7/nKwDvsgWYMYz3iAz5697Tk05p4Pn7X5hYdXiAeffNcXH2qK/9694OyTa763/2nuXbx+JBu6uxZgcOqU+G0uH371DWh1yS08Gs+ZtwtYV65elZ8AW61ZbfYyl6V3utc0s9U9Wy89QWpupMgoNoY9STKSUpWNFAmbLnIENHNaTbduk2XRemltsRoARFEiBokkKpJEijEgFOgGQNC0poGGBQBIWokINAgJLABsXgQ0DaZumoamad1YAEChCCEIIWFAkA6bO2CZui169uq1dPeu25q92k6bbWXtohlzswbJJjJkZCTJiCqjYkRJ2IMC5gTFAugpFhB2pa01emCOXVplQ0iNClAMelDAahTYjQHoDkEIMaJmM2Z3d7cFU2CubtoEWExMAAkKbOYEizRTLLSYbQ0SCd0WkvRCNVitgVAI0OwgR9CYJqvp7ja17tZtac3S3QCQiJJIIpLEEBWkjAHh/7B25tuthDwsAAAAAElFTkSuQmCC)}#webamp .playlist-top-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABNVBMVEULDxYMDAwOFQsUFBQdHS0dHS4eHS4eHi8fEQofHyIfHzAfHzIgHzIhITQhIjQiITQiIjUjIzYkIzckIzgkJDklJTomJjsmJjwnJz0oJz4oKD8pKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEUtLUYtLkguLUcuLUguLkcuLkkvL0ovMSUwL0swMEsxMEwyMU0yMU4yMk0yMk8zM1A0LhA0MlA0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4OFg5OFk5OVc6OVo7Olo7Olw8O109O149PFs9PF89PGA+PGBFQTtGQh9ORDBQPx5YVjxnXEJqanpra3xsbHxsbH1tbX9uboFwTyxwb4NxcYZzcohzk5p0c4p0dIp1dYx4do54d5B4h4yGd02LjJqNcTiOkZC/uXdbAAABJElEQVQYGQXBsWpTYRyH4ff7cig5a8FCKAge2slNqFvoBai4e5d26h0UrCnYpaCSrbV2cA0k5/97fZ42WYVR1ZCgZWC4REGDSEAVuRpeUoayyiqddU6IdIGeDkCHBQFgpo2s1dXR/mj/66BvHm/h4vSunocv/67XrpYsWb69L5yAadsaw+IV8hMAAl8/Tbtxe/tahhtAAKAXuBt30KCfnUEHAAL8HXcnQKcfH2huAPje4fO0/fNjujC0kbXMNwds75ydHr/B+9NNntuHlJZWYpWpOcb4NDxYpUTVSAzzx03RoQECIAQomGG4RESDSFCuABheUv2AVTFV2ScamnRCNYiYKAsUhA5g0pqNRpgVADq01gCaxNIgAMODVZJz+F2WWisA+A8o2vB09xIFIgAAAABJRU5ErkJggg==)}#webamp .selected .playlist-top-left-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUkJSkrKkM+PGBFQTt4d5CukmXsznr///+aHPt0AAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-left-spacer{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUkJSkrKkM+PGBFQTt4d5CukmXsznr///+aHPt0AAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-right-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUkJSkrKkM+PGBFQTt4d5CukmXsznr///+aHPt0AAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-right-spacer{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUkJSkrKkM+PGBFQTt4d5CukmXsznr///+aHPt0AAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABxUlEQVQ4ja2VsW4VQQxFz/UiQYHo6IhoERJ/ECFEQbdFfoGOgoqKv6DmL1KmejQI8QWRqNKjFGT7NYU93szuC0iwXumN/WZ27vh6fFcnJy+cMsWvhCTAECCznAk/VhrkulibPlr+T/8ewDiOC4ysgPo4RmuxDX0sI/aMeMgRWYAAHA7fiH2FmcAVGWjxTRnnKClBhNkAFQdYrDGMzpIUByTcvaXH2pRT7pupyqZZZVKcI9xj35vparvDP1iBsDrszXTFpw+veHn6eEcQIHmqop+9//zfAB1IUKT0g+g3r0/3BUmorHkU7t3Z871BgirwujJff1zz8e2zPUGaCcd59PAp5xeXnF9c7gsSdYmM3J0H959gZsCq+W41o7Bq1LuacVOTabqmdKjpl4UOLToWWrXWqEVyUoJo44qqozZ7zbh7tywAVkfNmsY1OtonYeM4lpZF6lYnjdP+WSAhRXJL1wLmPvPl8L1EUhoYbCiBNAS21KTxr6Laiko7DtLlXuPsc/meFJV2zttXq1Z/BaFxHGANqFNhd2R31JNN4Veb44vcQ+f3R47ewimq2vtwtBl7GBC482v6uVxhqfrHsuC3P7/LJzqe3w3Bd/kyd8EcAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-title{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAUCAMAAABMHminAAABd1BMVEUdHS0dHS4eHS4eHi8eHyUfHzAfHzIgHzIgITMhITQiITQiIjUjIzYkIzckIzgkJDkkJSklJTomJTsmJjsmJjwnJz0oJz4oKD8pJ0ApKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEUtLUYtLkctLkguLUcuLUguLkcuLkkvL0ovMEswL0swMEsxMEwyMU0yMU4yMk8zM1A0MlA0M1E0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4N1g4OE44OFg5OFM5OFk6OVo7Olw8O109O149O2A9PF89PGA+PGA/QitAQFhCQV9FQTtIR2ZMTGFVVG1WVmNbWnZgX3djY3BlZXdlZnRqanpraoBra3xsbHxsbH1tbX9uboFwb4NxcYZzbFJzcohzc4p0c4p0dIp1dYZ1dYx4do54d5B9fY6FhJSLjJqQj6CXlqeioq+srbettMSukmW8u8XHx83KydLW1tzk5Ojsznry8vT////NCpc8AAADfklEQVQYGQXBS6tfBxUH0PXb5+Q+Y2oFI5ZoknpLiU8cCELopANJG+M38Ds48nM4ciw4cVJ0INhBK5T6KPVRChVFIzHUB4IQvYbEe+//7O1auQGDzWYaM81mzMyYmclMMzMAIJQKsZBIoqIioiwLhPUuGGDoMaNhGAyj0QAAJSGEICiJBYKYsD4EW9oMM3bTunVnm9G2zoWZ2UzrBpZepoo1saRSJYk1qmaxVIKiCgUMxIhpI6TFwCBtJttIYBuLpmcAUINOAwKQlTt07cww073Rbdo2o23d2Zlt9GSXBlSprNuSLLGUSmJRSZZURSTW3fo667edf+eO/pL3vrj/7mf3f/OVS29/df3Dwc0H9+dry3/eds/Zj1858oN7V9j+9Ivmm3uc/+rqC6c/yuYbR09+cnf//u9f3b3x6sWb6vmbj3/95eNcPLj8HC7er9e/taeqDpDz5XjftYMzkOfR15c5CPZvHRLu/3y5aYHv/XXvC2CWwzns387Nl+vPoQyeu3z+u6ePPnz3sb+/Lw6q1g9sTM4Ob/DMegpm/yq5ttv2P/XQbj1xvjdcPbTVBrevaJS8lNMrt985feb4vw/CZMD+586e/TcwPqBOTl4k/ubwYnc8HwZ2Z8c4ON+5Hk9n7ynN0ccfv7cFrh+c/hBtnt21j3pz5y2Iwj8eXdi/PqA4OTlZ9/wTnu7Ws6zn0Pzx83F9ucQBnh49uaL4yy91NXyflPX2vHO4Hc1h0oi84DE+uX/fLUCvHn3C+l2P7xD/u3zq+MJQ/OvRx1w7+6mX9z/Nk8O37glmphqwtKPPOPRaXvnISz+Dsd70AGfLLRf3A/Sd18jXgZ0xzNhN69ZmM9Nty4WZbUybDaS2VYosxWqxSpJKSiqXJCQsU+QGMGybHmbM2GjNmDZG0wMAoigRC4kkKpJEimWBUGAGAMEwhgEGGgCQjBIRGBASaACsdwHDgM0MzcAwjBk0AFAoQghCkbBAkAnrQ9DajGF20zNtZrYZ3dNjZ2yj07sYlm3thWSNLLKkkqSiSlWsEQkrFNANQgNMiwbCrozuZRZsyy6jshJSlQBFMSsBelBgqwJMF0EIUVHbsGwzMzMaNoGtZxgN0DR2ABIUWLrBUE2LxogevZBImNFIMo0a0GOAEBQwbJAbMNhs9DAzYzNmxow2hjYzAJCIkkgiksQiKkhZFgj/B6KI5O4cXV8dAAAAAElFTkSuQmCC)}#webamp .selected .playlist-top-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABI1BMVEUdHS0dHS4eHS4eHi8eHyUfHzAfHzIgHzIhITQhIjQiITQiIjUjIzYkIzckIzgkJDklJTomJjsmJjwnJz0oJz4oKD8pKUApKUEpKkEqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEUtLUYtLkguLUcuLUguLkcuLkkvL0owL0swMEsxMEwyMU0yMU4yMk0yMk8zM1A0LhA0MlA0NFE1NFM2NVM2NVQ2NlU3NVY3N1Y4N1c4OFg4QlY5OFk5OVc6OVo7Olo7Olw8O109O149PFs9PF89PGA+PGA/QitFQTtYVjxnXEJqanpra3xsbHxsbH1tbX9uboFwb4NxcYZzbFJzcoh0c4p0dIp1dYx4do54d5CNcTisrbeukmWwmV7O4tDsznr////5EmU+AAABC0lEQVQYGQXBMUpcYRiG0ef7708qu4mgxYCFVdbgtIGsIesLZAOuQ0GIlfXFMEMgTOXc7308p/Z2Y1Q1JGgMzAcUVIIIqsjjPKUNm912a+uWEBkCIwsAAwYBYKMmB3UP8Oeid65wW8/9Pn/274P7BeDbS+PXsnbHKmZN5B8ABNba9XJalbkCWgCOBvvLhxTMa2BggQSo5WMpGMzlTMUS+D+a293J2vk3zF8crPMVwBmt4wqWUN/T2rETu022GOM6X+1Womokhv7x1AwoQACEAIEN5gMiKkFEeQRgntLjglvHdOeSaCgZhC6ImCgLCsIAMF1lUcimADCgqgBKYmsQgPlqt8R73tpWcwMAn2oG882E0Lr4AAAAAElFTkSuQmCC)}#webamp .playlist-middle-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAdAgMAAADjkWVKAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAD0lEQVQI12OoilvCQGcMALzxKw1EtyFgAAAAAElFTkSuQmCC)}#webamp .playlist-middle-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdAgMAAADX6KRWAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAEklEQVQI12OwmrXq1UuGIUICAIEjYC7HaOXEAAAAAElFTkSuQmCC)}#webamp .playlist-scrollbar-handle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAASBAMAAACUbIJFAAAAG1BMVEUJAgJ1XCKNcTibgkmwmV6+sX3aypzy8vT06sbDyd/kAAAAKElEQVQI12NIAwKGJCWlAoakiHYHhqRGD/KJimYHhnQXFwEGBQYGBgB4dhfwKIryTQAAAABJRU5ErkJggg==)}#webamp .playlist-scrollbar-handle:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAASBAMAAACUbIJFAAAAGFBMVEUgDABsURh1XCKNcTihhkuwmV7DrnXaypzxKekLAAAAKklEQVQI12MIDQ0NYAgUFCxgCHRLN2AITDQjnyhLMmAINzYWYFBgYGAAAIGKEsehmtv8AAAAAElFTkSuQmCC)}#webamp .playlist-bottom{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAmAgMAAABMq9iIAAAACVBMVEUnJz04OFh0dIo98+79AAAAGUlEQVQY02NYBQYNDKFg4DDiaHSAKzygAADHT1L3iexI4AAAAABJRU5ErkJggg==)}#webamp .playlist-bottom-left{background-image:url(data:image/png;base64,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)}#webamp .playlist-bottom-right{background-image:url(data:image/png;base64,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)}#webamp .playlist-visualizer{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAmBAMAAAB+CntdAAAAIVBMVEUAAAAAAAwAABAACCEAa7UYGCkZGSMnJz04OFhjnPd0dIrCNSsmAAAAW0lEQVQ4y2NYRQxYwNBBDGgYDsrKiQELGIgCCxhYiQFEm8aiSpRpTMSZxkmcaYxEus2MmqaNum0Yuk1FU0VTRFPF0sQSOwZBovNCFXEFF1HZuYBYZQNSWhLnNgDqVFE4O/Zo0wAAAABJRU5ErkJggg==)}#webamp #playlist-window-shade{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOAgMAAACnVF/TAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAHUlEQVQI12MIBQMHhv9gcIBhFRg0MFALwMyD2gMAcRoULw29bBMAAAAASUVORK5CYII=)}#webamp #playlist-window-shade .left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOAgMAAACnVF/TAAAADFBMVEUAAAAdHS0pKUBqano8VvpZAAAAIklEQVQI12MIBQMHhvr/IHCAoWoVCDQwVDFAAMU01DyoPQAU7xeZEgCs6QAAAABJRU5ErkJggg==)}#webamp #playlist-window-shade .right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAOCAMAAABaWb9VAAAANlBMVEUAAAALDxYMDAwdHS0fEQopKUA0LhBGQh9ORDBQPx5YVjxnXEJqanpwTyxzk5p5ip6NcTiOkZBJ6prXAAAAbUlEQVQoz6XSORaAIAxFUQjyFTEO+9+sBI82ajT6KgpukYAL5txgLbhoLbjLfpFGkkMGESHfk2kXGEtiegbA0MiGUEm5GKnjxCCdCMJykDZxekdKqASc5idSZ6nk5SznjXnvtY2p7/Lh9e3fcgVRHAwq+Kdj5gAAAABJRU5ErkJggg==)}#webamp #playlist-window-shade.selected .right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAOCAMAAABaWb9VAAAAM1BMVEUAAAAdHS0pKUA0LhBFQTtPSThYVjxnXEJqanpzk5p5ip6NcTiOkZCsrbewmV7O4tD///+ogWxMAAAAbElEQVQoz52SSQ7AIAgAsQjU3f+/tpIup9ZI58SBCSs4M7BbcbBZcfDKHyXeCV7RQBgRWb6VfkmeQilBHa7CUnmmnBJRGdCIUGqqgnNFJWqPwqknXlIGtFxFG/O5tUyLs0TrxuLsLj+ub3/LA63jB8yJpQTsAAAAAElFTkSuQmCC)}#webamp #playlist-add-menu.selected .bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}#webamp #playlist-add-menu .add-url{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWElEQVQI14WOsQ2AMAwEv3LPKBYTABsgorTfxCtkfRyUOIiGq04v62Sk4EKugxPZOmVzpxAGKeoupInwcWD6e3eP+9FpTnppOvm3g6307cTPinSsHcW+BDd3RTueo3YTtwAAAABJRU5ErkJggg==)}#webamp #playlist-add-menu .hover .add-url{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAV0lEQVQI14WOyQ2AMAwE9+MCEEkDdEAnGwmXACWQ9skFmx/zGq2skbEJLALBB8eOmF8S4n11zupOIxzW3Eg3Y3NAPu/Fv/tB77CU5OTfDtZSQpg6q/5/AGMtMU3PzLN0AAAAAElFTkSuQmCC)}#webamp #playlist-add-menu .add-dir{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWUlEQVQI122OsQ2AMAwEv/qeUSwmADZARG6/iVdgfRrHScFVp5d1MlrxwN/BDY+kH/AQhQC7wYNSkOoGD2D6ulPzfnQsO2K6gtLifzuF4Uunfja0a08M51Z82fg51vPZ5kgAAAAASUVORK5CYII=)}#webamp #playlist-add-menu .hover .add-dir{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAV0lEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEDs0gDWAIZSBFcxmDQgIZWUNALMZGBBsZHEgG64eCuDmBLBC2QFgLQg2NnGQehBbBMkcYYT7AQVAL9EsAFyYAAAAAElFTkSuQmCC)}#webamp #playlist-add-menu .add-file{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXklEQVQI12WOsQ2AMAwEv3LPKBYTABsgorTfxCuwPpZJDIJzc3q9LaMkB+o52FGt0xZ3CmGQpu5CmgjDgcffuXv2xx13wseIcPOW8c4lXH65xQa+d/JnRdnmjmKdkguiDDkEOAftpAAAAABJRU5ErkJggg==)}#webamp #playlist-add-menu .hover .add-file{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI12WOwQ2AMAwD/ckAiHYBNmATI+ERYARYnzQttBKXz8lyomDpYOogqbGvyPfLhnydlaO4aIRg4UbKjOFA9zF3//qN4oSPiHB5S6y5hdsvV2x4Pw135v7/A+euLyJ1PQpNAAAAAElFTkSuQmCC)}#webamp #playlist-remove-menu.selected .bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAABIAgMAAABO2aeDAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYMghgCdAlLABvUy/BqCAQTQAAAABJRU5ErkJggg==)}#webamp #playlist-remove-menu .remove-all{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWklEQVQI13WOMQqAQBADp0rvUw5foP5AlG23MV/w+xbenSI41RBCCHtnI87GSrhyTIQxknUUwpJM3o4xPLnU/Om3nULYSmf1zJfzk2eS+LvTPxf2ZawU5qFzAa7rOIxN5zmHAAAAAElFTkSuQmCC)}#webamp #playlist-remove-menu .hover .remove-all{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAWElEQVQI13WO0QmAMAxE7ycDiO0CbuAmJ3gj6Ai6vtGmpD8+CDwuIRyWBFOComBfUe/OhnqdjeN1QTCTfW5uoPVcQOY+4XkfNDeK4eTg+MnpG7iX4c+c/R8m4y6+oJDkfgAAAABJRU5ErkJggg==)}#webamp #playlist-remove-menu .crop{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAR0lEQVQI12MIhYMQhvByGAhiCE+DglRHJLYhHjZDAlsCEIPYCWkJYABlswGZyOIw9QlA9fjNxMGGu9mQIdTZGAoMGZwE4QAAjAZBLD2pp6oAAAAASUVORK5CYII=)}#webamp #playlist-remove-menu .hover .crop{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAASElEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEBumCC+bIYA1AIhB7IDQADCAslmBTGRxmPoAoPpQ4swXQWILI9wPAIC4Ne4ZKh5qAAAAAElFTkSuQmCC)}#webamp #playlist-remove-menu .remove-selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXUlEQVQI112OvQnDUBgDr1KfUR6ZIMkGxuZr1VgreP0Ufj/gqw4hhDgmO3UNNiqd80OFIEVnoyIp+HZCYOXS8NUfO41KMO7uOMMja7pXbhmT58783Dh+707j+5r8AVpzN34SgZTJAAAAAElFTkSuQmCC)}#webamp #playlist-remove-menu .hover .remove-selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAWklEQVQI102O0QmAMAwF388bQGwXcAM3iWBG0BF0fWOb+rxSOI40FIvAJFA82VfUe7ChXmfneN3hIJ3NGQbj6A6ox03XfNIdBku3drLT+LmpR40X4eW3Z9b/H/ZpLd3ACl8TAAAAAElFTkSuQmCC)}#webamp #playlist-remove-menu .remove-misc{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYUlEQVQI102Ouw0CQRQDJ3JOKSsqADpAd3qpk3ULtE+wn7uJLGtkmXNzUL/Fl8qkv6gQpKg3KpKCRyYErl5a+fLXTqMcO4TeKIs4Hj04mtl27O1bw7/v7M+N8/OcNN6PzR8ABzaO5fDK/gAAAABJRU5ErkJggg==)}#webamp #playlist-remove-menu .hover .remove-misc{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXklEQVQI102O7QmAMAxE788NILYLuIGbRPBG0BF0fZN+EB8UXo9LCLYES4KiwbmjvpMD9bk7V7ggkGJzusE4cwGZ+xue/UG4ySwmmhPyf88BE4c7UZt9Y/TLb8+a93++ly0VHemPIgAAAABJRU5ErkJggg==)}#webamp #playlist-selection-menu.selected .bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}#webamp #playlist-selection-menu .invert-selection{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXUlEQVQI113OsQ3DQAwEwY0udymEK7DdgSCBKZO/FtS+k39K0EYDgiDI0e3kudpIz8aHNFKVNYJ0mbu5LIxHzP3ldSdIu4Q0LcvLZdrWNccIPe/0z8Hxe8+C76v7A5OQN+oVjwHMAAAAAElFTkSuQmCC)}#webamp #playlist-selection-menu .hover .invert-selection{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI103OwQ2AMAxDUV88AIIswAZs4kh4BBihrM+BhvafnqooKfYRlhE2984D8VSJaPfXlYgmyKSciGaKkzFZFP3Pd9eBRDSLgrppuSyLZXO8w4LgxDbtWcf/X0qvMI9I7cp+AAAAAElFTkSuQmCC)}#webamp #playlist-selection-menu .select-zero{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYElEQVQI102OwQ2AMAwD/cqfUSomADZAVHz9oSuwPm4aAtfPyXKtoCYHzvtlx9mCa+kOgvIip7/hzWjp/HKl+hF57Mh7SGs2OqoL9z5jw30+cu8z+r+dvLmgbnNQsE7JAyOvPXLeVffRAAAAAElFTkSuQmCC)}#webamp #playlist-selection-menu .hover .select-zero{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAX0lEQVQI102Oyw2AMAxDc8kAiHYBNmATI+ERYARYn3wK4fXyZLlWZClkKqRxsK/S75dN+nUmhzspEJDhiJdOhX6Oyi21HyNP3D2EUrNjdSPcZzQ95kcefXi//Xbmuv8BohAy09WnmqwAAAAASUVORK5CYII=)}#webamp #playlist-selection-menu .select-all{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAUklEQVQI12MIhYMQhvByGAhiCE+DglRHEJshgSEByDYEshPAEMJOY0tgg7MTEOJAUaAOqDjUHKh6hBpk9Qw4xBOwmgN3syFDqLMxFBgyOAnCAQD0WT/cwFbKdgAAAABJRU5ErkJggg==)}#webamp #playlist-selection-menu .hover .select-all{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAVElEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEDs0lCGAISA0FMwOAEMIO5Q1gBXODkCIA0WBOqDiEABTj1CDrJ4Bh3gA1BwRJHOEEe4HAB23NNar7KHYAAAAAElFTkSuQmCC)}#webamp #playlist-close-button:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEU0MCxnXEKGd02ukmX///8tdlhEAAAAKElEQVQI12MwBgIDBkMBBkEgySjIaMBgIKAgACSFnARgbIg4RA1YPQCfwgXpyvsxsgAAAABJRU5ErkJggg==)}#webamp #playlist-window #playlist-shade-button:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAFVBMVEVFQTtPSThYVjxnXEKukmW0r4e+sX1mGpZYAAAANklEQVQI12NwAQIHBpe0tBQHBrfUtDAHBmdjY2MHBidjYyMgqWys5MDgqKSkCFQjKCACJEHqAT9eCss1JzHfAAAAAElFTkSuQmCC)}#webamp #playlist-window-shade #playlist-shade-button:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAFVBMVEVFQTtPSThYVjyukmW0r4e+sX3BsGNteY1yAAAAMUlEQVQI12MwBgIDBmMBAWEDBkORkEADBiPV0CAgmQom09KUgOJpaYogNYLMQBKkHgD8fwlqtoGUgQAAAABJRU5ErkJggg==)}#webamp #playlist-misc-menu.selected .bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}#webamp #playlist-misc-menu .misc-options{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYElEQVQI112OsQ0CQQwEN9qcUiwqADpAvJxOctsC7RPgPyEmmmA9so7NS/0+eaozrJuaQBStUmOFkFVqJOJxIIwH8He/O6VGmLMDv7eO4/HEYfaJ8X9n/1w6HtehdL9sPlWoO+DkW3+GAAAAAElFTkSuQmCC)}#webamp #playlist-misc-menu .hover .misc-options{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAYElEQVQI102O2xGAIAwE7ycFOEIDdmAn54xXgpag7Rsembj8LMwSwJZgSVA0OXfUNzhQn3twNadIQehukO/VHaBsutOy6GmjjwdGT2PMaX3eNfmaLnfO3p1+Xn5z1vz/BxcjMYQLzDa1AAAAAElFTkSuQmCC)}#webamp #playlist-misc-menu .file-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAX0lEQVQI12WOsQ2AMAwEv/qeUSwmADZARGndxCuwPomJTcGlOb0+L6MkF+odnKg2aRuqoj9TNOluxu7mTnf+cvMf3s+d4WOG4JtTSVo4iHSN3PvR+XbyZkE51olgX5IHU8k5In6uSFkAAAAASUVORK5CYII=)}#webamp #playlist-misc-menu .hover .file-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI12WOyw2AMAxDffEAiHYBNmCTIJERYAS6Pq1LKBIvlycrPywDTAMkf9hX5BJsyNfZOZobarlB7s7qLqecv9w1of44IG9rCPacRtLDQbxukau/efrsmcf/N3ldLzugWMN5AAAAAElFTkSuQmCC)}#webamp #playlist-misc-menu .sort-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAXklEQVQI102OsQ2AQAwDXaVnlIgJgA0Qr7Ru3iuwPgVJ4Corsk/BaC7EXZwIJXNDCASNmI6gSFI2HSEjaZn53WlEd8rzbiGUR0ZlXzLZL5cHRPt/nv7ZMY41cexL8wCXGToqpM1dFQAAAABJRU5ErkJggg==)}#webamp #playlist-misc-menu .hover .sort-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXUlEQVQI102O0Q2AMAhE74cBjO0CbuAmZyIj6Ai6vtBS6fvpCzmOYkuwJCganDvqOzhQn7tzuSsICuFOpaHS5mIq4cy5Z/9MELvwru62rZG3V2Xy0dPuupepZ83/f5v5MBfSedE0AAAAAElFTkSuQmCC)}#webamp #playlist-list-menu.selected .bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAA2AgMAAAB/8csyAAAADFBMVEUvL0RGUF2BkqXt//98VqXeAAAAFklEQVQI12NgYTBhKGHYQmNYArSFBQBn5SMZFZ1KogAAAABJRU5ErkJggg==)}#webamp #playlist-list-menu .new-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYElEQVQI123OsQ2DQBBE0R9NTiknKgB3YIE2nYRpgfYd3PlEwI9esBot5+yg7n9fKqNroxwhRVejLClSNyLQbSm4+3E/dxrlmGC6I2dsJooe9jDGLzvz58b5WUeNfZn9AKbQNSZ12uygAAAAAElFTkSuQmCC)}#webamp #playlist-list-menu .hover .new-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAXklEQVQI112O0QmAMAxE7+cGENsF3MBNIngj6Ai6vk3T0uKDwCM5kmAbYBkgqXHuyG/nQH7u4HI3EaRYnW4MByEgvAwE4z/fD0TfSt4QLnp1Fye35iVrtZ+mPev4/wORlyvp1GfF2gAAAABJRU5ErkJggg==)}#webamp #playlist-list-menu .load-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAWklEQVQI12MIhYMQhvByGAhiCE+DglRHhvCEtAQGIGRLNQSzwQDOZkBiw8RBqhMg6uHmQNQwpAHlIOw0NhCGsUEQzk6AssG2pmGYA3ezIUOoszEUGDI4CcIBAJZqO86fMyFaAAAAAElFTkSuQmCC)}#webamp #playlist-list-menu .hover .load-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAV0lEQVQI12NQQgAGQQRgEAmFghBDBtFyGAhkEC1Lg4BUEDsgNIABCFmhbDCAsxmQ2DBxkOoAiHqYBTBzQoFyEHYoKwjD2CAIZwdA2WBbQWwRJHOEEe4HAE6RMXWXqbP6AAAAAElFTkSuQmCC)}#webamp #playlist-list-menu .save-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUvN01OWG5XZHZ5gpaBkqWttMS/zdPt//9STElyAAAAYklEQVQI102OuQ3EQAwDGSl3KYIrsK+Dwy2UTrJswe1fsA880YCgCKltfqpn8VV50i+VhQD1VGEA3FPlQED0VBlAIyfAMfp7Z9zKWjsO7FjueDnThZj5e2f/nGqfc5K6j80fAQw6zDOWMCAAAAAASUVORK5CYII=)}#webamp #playlist-list-menu .hover .save-list{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASBAMAAACtCzMeAAAAGFBMVEUAAAALDxYZICpXZHZneYZ5ip6Jmq2tvMRwzsuHAAAAYElEQVQI102O0Q2AIAxE76cDGHEBN3CTM7Ej6Ai6vlwL4iMkL5ejBesA0wDFG8eG5ensWO4rOeUOgiTkdAqP3CK3cKXInFYLlv2+oL2FZqXXRr3ddT5nc+2NvPzmzOP/L+cIMJ5Oo2aQAAAAAElFTkSuQmCC)}#webamp #equalizer-window:not(.shade){background-image:url(data:image/png;base64,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)}#webamp .equalizer-top{background-image:url(data:image/png;base64,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)}#webamp .selected .equalizer-top{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAAOCAMAAAA7SAh7AAACAVBMVEUNDRQPDxYQEBgRERoRERsREhsSEhsSEh0TEx4TFB0UEx4UFB8VFSEWFiIXFyQXGCQYGCUYGCYZGScaGScaGigbGyobHCscGyscHCscHCwdHS0dHS4dHi0dHi4eHS4eHi8eHyUfHzAfIDEgHzEgIDIhITQhITUhIjQiITQiITYiIjUjIzYjIzgjJDcjJDgkIzckIzgkJDckJDkkJSklJTklJTolJTwlJjsmJTsmJTwmJjsnJz0nJz4nKD4oJz4oKD8pKT8pKUApKkIqKUEqKUIqKkEqKkMrK0QrLEQsK0MsK0QsLEUtLUYtLUgtLkctLkguLUcuLUguLkcuLkgvL0ovL0swL0owMEsxMU0xMU4xMk0xMk4yMU0yMU4yMk8yMlAzM1AzM1IzNFE0M1E0NFE0NFM1LxI1NVQ1NVY1NlQ2NVM2NVQ2NlQ2NlU3N1Y3N1c3N1g3OFc3OFg4N1c4N1g4OFc4OFg4OFk4OFo5OFk5OVE5OVk5OVo6Plg+PldBQipCQl1EQTxISGRNTWZYWHJZVjxcXGRgX2pkW0RkZHFoaHhsbH5vb4JxcYZzbFJzc4hzc4p0c4p0dIt1dYx3d4t7e4+Dg5WHd0yNjp2SkqKTk6OTk6WVlaadnamfn62pmGWpqbWvr7u6usTHx87JydLO4tHU1NnX193d5unsznr5/v/0rKtaAAAFXklEQVQYGbXBT4udZx3G8e/1u+9ncmYm/5OaYWImqYQQJcWKSKFUBHUlChaUbtz4FnwDpSjd+hpEI7pwJ3UhbhRBTFAQtCHGkknS1rSGmJM/MznPuX+XzzmTqZkSNQ3x8xHbxBYxJwaCECCILMzIQswJAhAgkAARYEmIgaAoMghmBIJiBYYAFQTBTKGku4wkADMI5oQQZMEgHmYZ7EiMMBkkcwJaSRo0ZhID04xEJK00zCCVQEImBox4nf9APFLwKOIRxIeJHcROwRaxRRYgC2EZgcWHWZYZGCwzZ5lBsoN5mNnJMvD9Ct8VDgvEQAwEEgTIkhgUkKAigkCAQEUuriiILB0OKCAIqgkoSZGgQkEQDhCotCgQFAZZGURNSquAQECxIqBkBAgsHrAAi0Ff1TMwtJiUhmUMhr4APSTQjDHZwJBKLE+z0EOLzNISJ6QDnGkDAiQGAglksIQBJQiCLTYCChCuBoISjZlMQJAiKZQq7EopYLBBBk0JkN0gojLomCaqICFBVFQD1IAp2MJmTmyZQm2m1qhAOFq1zZyorfU9ZIoGxjixwSRgJBAYlZaYmazMBB/j8ZnGlp7/4hMpClkAQaYqM8FcKQwcLiIDur6j69lmEaFCxrSLFmTF4Fb5gCVT+RFP7NPueJnBTxvxxbYOx8sviAqRoWdeXeIpu/faSbr8Nj98ZfSDry7/7Ju7zn5914XRicvneTn+8Wt9jc1ffmmRN148AHlpHboXF2Dy208ejPa3916anDuz7/e5/xQXx/7M5M/Bs3uv7N8LXD0GjNkLeWUspj95dYkndO+15yffqAxe+TGtrZZWjrwDrpAMlnnalun6VjaXXhjxhb1joMKJvwPPBbsxjE4tMrN+91Nr6/TAr2oePXzrTy+cfI8ZswIrtw0ZgC7z8YOTm8cmF+AEV++eXh23UljmSS0TvMtcNNbLkc3R9XXsCkLwJh9J8hj6KHljaQ0O1TFzo8Og1daPTv2VVp5lsgDsW8RAwOcnfzzCP7Wxbw0Qast3di8ziAxgunSQy7Bw+s41WIUJxeJNHl+y0zRaYdASaJuHbjSMKsgWa/wfFLhxbOl+2cPvxOC+dwNL9xsrFxkfWNgoDPa0O1ega/DufUBs8+GSk4U9Ywj14HqC8YZo1zeAu7vzLQuzxpMLaAUa0UMZ3RgVZCpgwc2jPGVvE63whzP1brdnMwHBpTPwXESwO2Bj8fZ+Cly7EHR9K8Cutev79rHIHRZOLWdbYVRYGVMOcA/YP+LWgXvA4gLc6hZHm8jcPMoTehuY1gZsEuX4keutHGkXkgoEvH+Wj+QG/9vJDCLGB8fsudcWwPCXA0dZ3XyDr4xOwu3F81+mAQF9x+A4/ObgwZfYuPn+oWfy2sLy+KI+u9xR1rgCrMAxrlKOMdmEO4urb4G+dZbHd4Mdnmd67nMMzrfM8s46tEIgXv8eCFmIgUACJEsCBAqQUAEFgUMWBRSVVhQU6HAAIhRB4A5SxRI1a6tioAAx6ECEVZCAru8aLFiATh++crW6dQQziqwILB5iGWHUV7KhFvd3TcsEMIa+m3RNPQOTaQPONBjbYJhUTw1T2aUHJ6mkXaoMNtgiixkxEARCFoEsECDmBBIIEEiAgAAkAYKaAUEwEIhBgQBD1GkV0xrMFAYFAjDngEiCGckEyFhiYDFnWbaLU8bMZCQDWQ05W2nMZZjekCBwJhgwgySBKRiMv/NzCEBsEw8IAYYwikwEGDAzYpB8wCBmZAsDNtOAYJvMwASYiDqtImswU4BSbJIHgmBOWGQ6IcSM2CZLZIZkxEwyYyGFSmmFLdlSlQck/i0ZeApmSyP/BQLQYu4DqTgYAAAAAElFTkSuQmCC)}#webamp .band{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANEAAACBCAMAAABpaq8qAAABEVBMVEUAxv8SEh0SWwQTEx4XFyQaGigcGysdMBwfIDEhITQqKUIqKkEqmhYsK0MuLUcuLkgvL0ovL0svMiQwMEsxMC0xMU0xMU4yMU4yMk8yMlAzM1AzNFE0M1E0NFE0NFM1NVQ1NlQ2IRs2NVM2NlQ2NlU3N1Y3N1c3N1g4N1g4OFg4OFk5OFk5OVk9dCpCQl1EQTxNTWZYWHJZVjxasCxlmUVoaHhrcC1xzTR3QyiDg5WHd0yJ4jCNjp2QkJCQxz2SkqKTk6OTk6WWrI+ZmaidpDWfn62k4jipmGWrrZCtLSOvk4yvwziwcR3DcCrE2zLFVCrFhzDGeA/GszXOxtbTIhvTSR/cdx/gVB7gkijgsijgzTBk+3VYAAADm0lEQVR42u3bX09bNxjH8a8fP/lTombrhEC01TSkSuNik/Ym9q73XnKxqVs6VnUbNIFzbPcikNiIk4ZCIY4eXyB98OGIn+JjB4Wf+0aZN0l1KL5p4q+/VU91wqW0YXR0qsEnnHApPyJpUz5/dRe+4eJrU70nBjgaeG2jw3viyYTjYUaIOfs4t+KrtXwTSo75cBd+bO5OFSH+NAHtBfEREeIEJj+v2KeY7UPqZVTabjoFWXF4yV7TyfGAb88L8gVU8TCByS+hl5wgHgB8N5U2o4Lm1OLiQcDH7GeHzH0nB57B/N4U59zid+459Y7PU0E3vvgJqKpcDRdEqJ8iIVwJxVE/ld51QInaUj9l9Yo5glA/ZRlv+aVySlh+A6dQPxV3lfJqH6+esnyqHJDtE9VScRSjekoxFaifslOvz+qRupajfkqRTqmf4rxfPlIO6me5M+zC2MFEu3Yc2aqzRJbIElkiS2SJLJElskSWyBJZIktUT6JUun7u9KqL5UytFGIswlVPTalYjvVTs+crpET9LHaG1FI/7YTd/qHF+eSpn7JchiFBS/3UlJbHVFrshJXz+l8CiZAaqJ/Slu/56qcsT9wU8In6qeH6E7LkUhupn5r84kxypJZI/ZTUtg7AN8kHqJ8SQ9BjOBFPmwK38BJcxgCDjfkR2JgX0N6fGhMix4Nns1ZjhJgQOWGc0xVs2NNuxou1nLN31sn3eDe7NzW2DKZHvXYW274/Y8HhbB2bpptvP8Phv2uYhtyfGgQNfwBeIFA/Nfv7opXEDnDnhtvNRtUDNpteHzJ7Wuo9uksLHvA+4+H+3XgaunnINOcL2IQqQnwN4z+zdtK4LCut5UvhYLrivvLdP910JWG/nM15CIfvMvbpZ3wxgg+3UW9pNo2HMN+UDJjljaryVjfonhUX06NZM3ujfsW6ntcIRv9/YaPqBgXkcTpTIjlHMLJGlTWqrFH1lWiNqu2nNaq2n9ao2n5ao2r7aY0qa1TZJ8sPkMgaVbbqLJElskSWyBJZIktkiSyRJbJElsgSPVUia1TVtOqsUYU1qh6H1qjaftoJu/3DGlXbT2tUbT+tUWWNqsenNaq2hg5cd6PqPzjP2kl34l8l38GsmwkuM55C0z07LZtclzHGjGflxefLW+mijjQo2kmezTn/u2g2zeczf97J30fPc86mB8Xs976YnceQ3fntDyVf9ptbqQ9XZdqA06NUclpQhg9Aa1RtPz8But0Pz3B64+AAAAAASUVORK5CYII=)}#webamp .band .rc-slider-handle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAGFBMVEUAAAAICBApKUJKWmt7hJSLm6etvcbd5ukLNggsAAAAMElEQVQI12NQZGBgYFRgEC8vLy8WYBBPS0tzRqIExXDyQlxcQJQxEAgwAE1hFFQAAB9KDSykox1vAAAAAElFTkSuQmCC)}#webamp .band .rc-slider-handle:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALBAMAAABbgmoVAAAAD1BMVEUAAAApKUJKWmvd5un5/v8UiEZ+AAAAJ0lEQVQI12MQYAACAQZmY2NjIwYGZiCHCYlyccDNg1BKQAAyAGQKAHJPAsUS1KniAAAAAElFTkSuQmCC)}#webamp #on{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAIVBMVEUAAAASWwQvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v8M+RL1AAAATklEQVQI12MoRwIJDFWr4GC5A0NVBxyUGjBUNRsbdzRpNHVoQHiCkh0aTU0aKDwlKG/mTBCvCcID6UfoQzUTYTmQV54aCgcGDCnGCGAAAPUyQLvRdOj2AAAAAElFTkSuQmCC)}#webamp #on:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAFVBMVEUICBASWwRSZnNje4R7jJyLm6etvcYvdU+XAAAAQElEQVQI12NgwAdMXODAgYHBLQ0OEoA8VDkgdnFgcXBhgfAERV1YHBxYUHgMUF5oKIjnAOGB9cP0maGYqYDkEgAFZxmn+1/+wgAAAABJRU5ErkJggg==)}#webamp #on.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAIVBMVEUAAAAA1gAvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v911B9qAAAATklEQVQI12MoRwIJDFWr4GC5A0NVBxyUGjBUNRsbdzRpNHVoQHiCkh0aTU0aKDwlKG/mTBCvCcID6UfoQzUTYTmQV54aCgcGDCnGCGAAAPUyQLvRdOj2AAAAAElFTkSuQmCC)}#webamp #on.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAMBAMAAACO67B7AAAAFVBMVEUA1gAICBBSZnNje4R7jJyLm6etvcapTzEQAAAARElEQVQI12MQRAYMaDwTFzhwZBB0S4ODRCAPVc5RUNDFUcTRRQTCY2B1EXF0FEHhCUJ5oaEgniOEB9YP02eGYqYiklsAdNMdgDKFw2kAAAAASUVORK5CYII=)}#webamp #auto{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAHlBMVEUSWwQvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v/WADVeAAAAV0lEQVQI12NIQwWpDJkzUUAyQ2Y5MihzYsgsUlIqLxQvLBcXFC8UBwswcJSLFwIFQAgmICiILNDRgaoCZBaQI1heWA4xA8MWVIc5MaSFuCADJ4ZgJVQAABsNRRhxaDvQAAAAAElFTkSuQmCC)}#webamp #auto:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAFVBMVEUICBASWwRSZnNje4R7jJyLm6etvcYvdU+XAAAAS0lEQVQI14WOsQ2AQBDDAh8GYKMUHgF6ihP7j0CFxF+DS8tSIv0ymIh8T1xy9aIkI5wIEbmW/Qh2cPAr9BXb2QogOMaIaPSVtR19ACp1H3+cU6+ZAAAAAElFTkSuQmCC)}#webamp #auto.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAHlBMVEUA1gAvN01KWmtSZnN7hJSLm6ettca9ztbV3vL5/v+vLTjBAAAAV0lEQVQI12NIQwWpDJkzUUAyQ2Y5MihzYsgsUlIqLxQvLBcXFC8UBwswcJSLFwIFQAgmICiILNDRgaoCZBaQI1heWA4xA8MWVIc5MaSFuCADJ4ZgJVQAABsNRRhxaDvQAAAAAElFTkSuQmCC)}#webamp #auto.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAMBAMAAADxOqKKAAAAFVBMVEUA1gAICBBSZnNje4R7jJyLm6etvcapTzEQAAAATElEQVQI12WOwQmAQBADtwSjsaDAlKAFCIf9l+BL8NZ5DgNJqVE/sTGR8j1xlUcvhmSEEyFSHksdwQ4OfoW+Yj9bAQTHGJHa+sranj59DSTnUdDwigAAAABJRU5ErkJggg==)}#webamp #eqGraph{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAATCAMAAACQnBKzAAAAw1BMVEUqKUEqKUIqKkMrK0QrLEQsK0MsK0QsLEUtLUYtLUgtLkctLkguLUcuLUguLkcuLkgvL0ovL0swL0owMEsxMU0xMU4xMk0xMk4yMU0yMU4yMk0yMk8yMlAzM1AzM1IzNFE0M1E0NFE0NFM1NVQ1NVY1NlM1NlQ2NVM2NVQ2NlQ2NlU3N1Y3N1c3N1g3OFc3OFg4N1c4N1g4OFc4OFg4OFk4OFo5OFk5OVk5OVpsbH5vb4JxcYZzc4hzc4p0c4p0dIt1dYwbWqB2AAAC2klEQVQYGQXBIQ9lSRkFwDpf930zCQqBxaLQ/H+PRuDXrCQkbObd7kNVzD/+qSay+fu/BDL87d/MMtL5628iiP2X31cQ5M//6cp3nrJ//u+upgM//2gAfv7BO6aOP/33ndQx4HVJMQGeXnSgB0/V/lWicJvObrKOrDNJCwJQ1XVzz1F3DxYTsaHBBbx7MIhsfDNHfwSNlE8vuCO8V7QAEJGzTnSlYxL3nojNJkVC+NRLGtoC8wjSIOl9Z2NJ3syeugkAwLvjyFtMl6FaGhoGyK/HZ1SX20D2CzQN+nn3vK8eOoaxAFC0vKxplMlx14qEucCdC10XJquy4/Ho/gKmbO/Mu5/sGQZcAAhN7tr1Jk3cWcu6EM4rGCbBXNdwouX72M0DgXizjh19T6S9twBASU1a+632nn2wiPIgCLDfTViHDV52oFHo+4Oy35M6Ww0KEBXlOilu9uKs6AMCHYH3McpZdQe29gshzE17tlSWZLkDAkCKhnV4wxwW8t4ZCqUAZC8xeL5yLihY6Xx3NGfclqEAgLg30dPcW3dcNzBCigBAigvI95kPSMp36Udti+be6kkBoK0knVTXJzKLwnYgzBAea8Y0hwGery9I2vjkheSMe5iJjABwG5G0Rm6v27ksCXNfEMDXoLHSAq/nM0grfDs+r46LIUgLwKRoj1wd5TOzSG2ZLUgFmCu1dALPd7sFSVDXO3L1rDWARAElTmXuEe5qf8290uDdUqZDyHJnJAfwePrc7wtVsz+SPdou5xwKCCDK0pNFuehkkaI0dC7YXDe6kzP4ft/j+bGJ4J5fH4WIZSnXBYBGxDrvgt2MPRW2hhB30nDHIHTw4OXXD9BBn3yCNF3W62aNAYA7Dtfc4867j2sOxBkCiWIGUsrw5bXyA9FRJj0SzVJZ9qK3ANqRvWql7crWMitq27OBlNAro0E6+OKeF6Sy7XOPNhk3CmQCIORWVk/inPcO/g8Gk8tpHAw47gAAAABJRU5ErkJggg==)}#webamp #presets{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAMBAMAAADrBkIEAAAAGFBMVEUvN01KWmtSZnN7hJSLm6ettca9ztb5/v8/TtPPAAAAXUlEQVQY022PsQ2AQAwDXblnlBcbwAYI9K0bbgXWpwAEErnSuii2topV/ShY1PmzN3UiZOQIWY7uGDsBEwj+2pHjyCF+bJwACdfBGyNfD9Bt102qOU3bPP5pmoaKE9BgTHfswQ68AAAAAElFTkSuQmCC)}#webamp #presets:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAMBAMAAADrBkIEAAAAElBMVEUAAAAICBBSZnNje4R7jJytvcYlh7IyAAAAW0lEQVQY03WPsQ2AMAwEv/gFMgI7QP+RLgNQsP8qFAGBlOTK01m2VaZopXdGqkq7Rk6VtqiJkJEjZDl6NHYCJhD8ryPHkUP81jgBEvrAp5H7AmSqyjG/ZJt9eQMWOi9EkrQa+gAAAABJRU5ErkJggg==)}#webamp #preamp-line{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAABCAYAAADpXEERAAAAEklEQVQYlWPcdfruf4ZRMKQBAPWXA2N/DPRhAAAAAElFTkSuQmCC)}#webamp #equalizer-window.shade{background-image:url(data:image/png;base64,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)}#webamp #equalizer-window.shade.selected{background-image:url(data:image/png;base64,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)}#webamp #equalizer-volume.left::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp #equalizer-volume.left::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp #equalizer-volume.center::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp #equalizer-volume.center::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp #equalizer-volume.right::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp #equalizer-volume.right::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp #equalizer-balance.left::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp #equalizer-balance.left::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp #equalizer-balance.center::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp #equalizer-balance.center::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp #equalizer-balance.right::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp #equalizer-balance.right::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU5QE1jXjujlGrsznokh70QAAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp #equalizer-shade:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVKQT5SSj1sXUO0kWO/uX6z+JYEAAAAM0lEQVQIHQXBwRGAIAwAsLT07Z2zsP8qbuDBAliTmDjl1m8Gob6HK5uWti27V6uxDDFxfn1PDx8P0VYSAAAAAElFTkSuQmCC)}#webamp #equalizer-window.shade #equalizer-shade:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVKQT5SSj20kWO/uX7CsWHebnl7AAAALUlEQVQI12NQAgIFBiUGBiYFBgVhYwMFBkVhY0Mg6QwmXVwEgeIuLgIwNWD1AJzCBeFqt4OOAAAAAElFTkSuQmCC)}#webamp #equalizer-window.selected #equalizer-close{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAALVBMVEUoJz4oKD8pKUAqKUEqKUIqKkMrK0Q6MSljXjtsXUORbkq0h2O0kWPCsWH///8vo79mAAAAO0lEQVQI12NIdTFWUmDIbC/vFGCI2Nl5QoAhfM6a6UCy61U7A4P7nLVAdsTJzhsMDJ5ANQwMLkaKCgwA6D4RaTQt0CAAAAAASUVORK5CYII=)}#webamp #equalizer-window #equalizer-close:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAElBMVEU6MSljXjtsXUORbkq0kWP////9IyyfAAAAKUlEQVQI12NwAQIHBicBBiEHBkcmIUYHBgcFAwUgKRwsAGNDxCFqwOoB1gEH67W94+0AAAAASUVORK5CYII=)}#webamp #position{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAAAKCAMAAACuVWMrAAAByFBMVEUPDxgPEBkQDxgQEBkRERoREhsSERsSEhsTEx0TEx4TFB4UEx8UFB8VFSEVFSIVFiEVFiIWFSEWFiIXFyMXFyQXGCUYFyUYGCUZGSYZGSgZGicZGigaGSYaGSgaGicaGikbGyobGywbHCsbHCwcGyscGywcHCsdHSwdHS4dHi0dHi4eHS0eHS4eHi0eHi8fHzAfHzEfHzIfIDEfIDIgHzEgHzIgIDEgIDMhITQhIjUiITUiIjUiIzYjIzcjJDgkIzckIzgkJDckJTklJTolJTwlJjslJjwmJTsmJTwmJjwnJz0nJz4nKD4oJz4oKD8pKUApKUIpKkEpKkIqKUEqKUIqKkErK0IrK0QrK0YrLEUrLEYsK0UsK0YsLEUtLUctLUgtLkctLkguLUcuLUguLkcuLkkvL0ovMEswL0swL0wwMEswMEwxMUwxMU1hYm1iYW1jY29jY3BjZHFkY3FlZHFlZXNmZXRmZnNnZnVnZ3ZoZ3VoaHVoaHdpaXhpaXppanlpanpqanlqanpra3xrbHxsbH1sbH9tbYBuboBvboFvb4NvcINwcINwcYVxcYZxcoZycYdycodzc4hzc4pzdIp0c4p0dIt1dYwExkcuAAACuklEQVQYGQXBAWEANxADMPmSFsOAjT+QNX+eFEYgZicIBCMQMBlphNGBIJgZQLjId3bmPtcHfncAkIZoAAAAAECBAuy7Hsfb2dnuwEPB7qKawjer1OYBhR0jAFMAFQIAQRJsAjSBnQUJF74aHp+DuQAgDVEAAAAA0EIVAPvgy7BSeLTgWUChFhr5QAsS/jFumXD3NrlkiGDOkNnJbGJigksiOHuIuyYmFdzxMmaH3/9+GHvAqKPTkMKgAQCbziLV77xZCiv/AZY+qB2bv/Oofmn5+1mPWnm0fPieUjVG5pZJMZJ9aqXB75nFTm3qxgAsxZ5SxrBNcN/uGQz256vdKdg5+aRBMSAAAFlorc0OCQtg11sXYnbtobUU7nJJ1FA+1D3QmNQZjHKXmptFA3+LmAzGK3D1OyAjxDo1swV0Abc95UQZY4toTBKjAAqgE1qdo5YW/HFh/OSBMuBiBLx97+GTtxrf0NVHpSbxHki4w65eI8GECWoGluBxP0gg7iQwgTdmAF9nx6iwmeecpNK0aVdQEKWKLch+MxB4zvVgAbCr3vewCp+5QKpU6FKASaQM7oWZ3y9vBPTMgtCMeyjoOzBN4fGZ3YDfmWVA7zcmpTjvWpVSVkYRQAiTgXxfp4uqrJt92KUPAJun+FJwAkpHFAsvoLuD81MLrLqSSwOHCRM2jBnhXi7iGxH3rmEGWH8H4P4NKglchgoTkwUA0M3aqJ67pgt8w9+MNcjlgcV3oaelLA/7bSgahUfBrBkMnlHoR1LMM0Ew7HQFfDcgi3pzQYB1i+HKDxbg+8yXENasqQAASbNa5c1OhjRr/d3HWNiF2tHOg1ShO6hxPCld4S8IuOPfCIjpIJiaHdMDaXL2QJAQEAYEGCKAEQRpgLGGaBoBAABomkIrWkAVbIFSNkVhU4raFMWbLYV2WcX/K67c097eK2wAAAAASUVORK5CYII=)}#webamp #position::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUJAgJlZXNlZnN1WyKDaTCNdTqcgkqvmGHFsn7by57u4rv06sf19fW6wGFFAAAARElEQVQI12PQnIkMAhgkXZDAUQYGSY/dcLCnFMj3PgMHp8F8YziwBvPL4aAaxPdB6N8G4p9CyJebAvmhyICBQYABBQAALnc7YhsUgeUAAAAASUVORK5CYII=)}#webamp #position::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUJAgJlZXNlZnN1WyKDaTCNdTqcgkqvmGHFsn7by57u4rv06sf19fW6wGFFAAAARElEQVQI12PQnIkMAhgkXZDAUQYGSY/dcLCnFMj3PgMHp8F8YziwBvPL4aAaxPdB6N8G4p9CyJebAvmhyICBQYABBQAALnc7YhsUgeUAAAAASUVORK5CYII=)}#webamp #position:active::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUgDABhRhBmSxNsUBdwVRt4XSGBZyqPdTmhhkuwmF6+qG/DrnXYxZOv4MtwAAAAR0lEQVQI12PwnIkMAhg8XZDAUQYGT4/dcLCnlIHB0vsMHJwG85XgQBvML4eDaiBf0wehfxuIfwohX67KwCAZigwYGAQYUAAAXWI7mESGeYIAAAAASUVORK5CYII=)}#webamp #position:active::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAKBAMAAAC6bkgfAAAAJ1BMVEUgDABhRhBmSxNsUBdwVRt4XSGBZyqPdTmhhkuwmF6+qG/DrnXYxZOv4MtwAAAAR0lEQVQI12PwnIkMAhg8XZDAUQYGT4/dcLCnlIHB0vsMHJwG85XgQBvML4eDaiBf0wehfxuIfwohX67KwCAZigwYGAQYUAAAXWI7mESGeYIAAAAASUVORK5CYII=)}#webamp #shuffle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPCAMAAABDVWaoAAAAilBMVEUQWgAqKUIqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU0xMU4yMU4yMk8zM1A0M1E0M1I0NFE0NFM1NVQ1NlQ2NVM2NlU2NlY3N1c3N1g3OFc4N1g4OFk5OVpKWmtSY3N7hJSElKWttca9ztbV3vLv///LbncEAAAAqklEQVQoz5WSsQ7CMBBD37WpGPgDpJtY+/8fAxLLfUbVM0OiNgKG4CGKL45jRbYbiSUIkBAiMZJEqI2EMjGYynVhHHoWmIfle1IEOeqeogCwAQwFq3oesIoADyfaAt4mBHivb/Av5h8nRQCslQVOHPrK/Nif/ouaSdDd+OlvXYDD2qOP1r9j98s8/p/5KlarMIoCu/SPXvmf/yb2SQJkotZD087Z2VrcBIM3KB9V4lGQbMMAAAAASUVORK5CYII=)}#webamp #shuffle:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPBAMAAACGpYupAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAAY0lEQVQY02MQxA4EGHBLuIZighBDoER4ORYQCJLAoiMUIiEoKIpdQkgpNYAhIJSVNQBIARkBDEgSoRCJUAiESoilgXQwYOoAgQBsOkDiIDsCWMHCDCg6sLoKh4Q7LglD7IEIAKjwVurEkbm9AAAAAElFTkSuQmCC)}#webamp #shuffle.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPCAMAAABDVWaoAAAAilBMVEUA1gAqKUIqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU0xMU4yMU4yMk8zM1A0M1E0M1I0NFE0NFM1NVQ1NlQ2NVM2NlU2NlY3N1c3N1g3OFc4N1g4OFk5OVpKWmtSY3N7hJSElKWttca9ztbV3vLv//8gEwg9AAAAqklEQVQoz5WSsQ7CMBBD37WpGPgDpJtY+/8fAxLLfUbVM0OiNgKG4CGKL45jRbYbiSUIkBAiMZJEqI2EMjGYynVhHHoWmIfle1IEOeqeogCwAQwFq3oesIoADyfaAt4mBHivb/Av5h8nRQCslQVOHPrK/Nif/ouaSdDd+OlvXYDD2qOP1r9j98s8/p/5KlarMIoCu/SPXvmf/yb2SQJkotZD087Z2VrcBIM3KB9V4lGQbMMAAAAASUVORK5CYII=)}#webamp #shuffle.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAPBAMAAACGpYupAAAAGFBMVEUAAAAA1gAICBBSa3Nje4R7jJyPn6itvcZs8alFAAAAY0lEQVQY02NQwg4UGHBLuIZighAjoER4ORYQBJLAoiMUIqGkpIpdQlEwNYAhIJSVNQBIARkBDEgSoRCJUAiESqilgXQwYOoAgQBsOkDiIDsCWMHCDCg6sLoKh4Q7Lgkj7IEIAGMfXXXsp3orAAAAAElFTkSuQmCC)}#webamp #repeat{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPCAMAAADAkV+TAAAAeFBMVEUQWgAoKD8pKUApKkEqKUEqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU01NlQ2NVM2NVQ2NlU2NlY3N1c3N1g3OFg4N1g4OFlKWmtSY3N7hJSElKWttca9ztbV3vLv//8ki4GoAAAAgUlEQVQYGQXBMQ7CUAwFMP+SzkgoO1vvfyQOgJBYWKB52OsOQpIVSJaZTdTnCgAAIDUuAACAcwoDAAAyKfCFHQBAAQ+OyO8NGlAAkL3Bs4Fa4AAvGgAqsAfQAKAWAPQTNKACgNYAoBYBAAAozgQAAFAyAQAAWLeRNSQRmS3j3GTCH4ZgNtlEi15VAAAAAElFTkSuQmCC)}#webamp #repeat:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPBAMAAAAFYbKSAAAAFVBMVEUICBAQWgBSa3Nje4R7jJyPn6itvcb4vicLAAAASElEQVQI12NgwA9MXODAWYGBwS0NARyAXISsC5jLwMCCzGUUDAHpYkFwnUBSUC5raIgDA4ILkmFB5Tog9KJZhMI1Q+UqIHsAAPs1JqMDCtK2AAAAAElFTkSuQmCC)}#webamp #repeat.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPCAMAAADAkV+TAAAAeFBMVEUA1gAoKD8pKUApKkEqKUEqKkEqKkMrK0QsK0MsK0QsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0swL0wwMEsxMU01NlQ2NVM2NVQ2NlU2NlY3N1c3N1g3OFg4N1g4OFlKWmtSY3N7hJSElKWttca9ztbV3vLv///lInoXAAAAgUlEQVQYGQXBMQ7CUAwFMP+SzkgoO1vvfyQOgJBYWKB52OsOQpIVSJaZTdTnCgAAIDUuAACAcwoDAAAyKfCFHQBAAQ+OyO8NGlAAkL3Bs4Fa4AAvGgAqsAfQAKAWAPQTNKACgNYAoBYBAAAozgQAAFAyAQAAWLeRNSQRmS3j3GTCH4ZgNtlEi15VAAAAAElFTkSuQmCC)}#webamp #repeat.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAPBAMAAAAFYbKSAAAAFVBMVEUA1gAICBBSa3Nje4R7jJyPn6itvcYox7XLAAAATElEQVQI12MQRAEM6FwTFzhwVmQQdEtDAEcgFyHrAuYKCoogcwUYQpwVwWIwrhNICsoVDQ1xFERwQTIiqFxHhF40i1C4ZqhcRWQvAAA51isA/VWazgAAAABJRU5ErkJggg==)}#webamp #equalizer-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMCAMAAAC+5dbKAAAAUVBMVEUQWgAqKUIqKkMrK0QrLEQsK0MsK0QsK0YsLEUsLEYtLUcuLUcuLUguLkkvL0ovN00wL0wwMEsxMU1KWmtSY3N7hJSElKWttca9ztbV3vLv//9O4LHRAAAAaUlEQVQYGQXBwQ2DUAwFMEODRCao2H++HnrKofBf7e0NAAD5lhcAAM+6iwUAkJVXwQ8Ho42GVeDjimmmTSM7AGYAKHCBhmmww5GEntHTAykCcIozZ6A8CQAAqawAAEDda/NgbZFErMfuD041NCuZPULmAAAAAElFTkSuQmCC)}#webamp #equalizer-button.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAIVBMVEUA1gArK0QvN01KWmtSY3N7hJSElKWttca9ztbV3vLv//9R/wqlAAAAT0lEQVQI12Moh4MyAYaqVTBQAuR0QEF7MIhjbNzRpNGkAeEYcHZodGg0wTlKGjCO5UyQDFQZEAD1QGTg9gA55amhUADkpBjDgQCDIAIIAAAWsDNHmvvPEQAAAABJRU5ErkJggg==)}#webamp #equalizer-button:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAASElEQVQI12MQRAABBhSOgGsoFAQDOeHlUFAK4sBkQsEcQcHQANYAVghHSC2UNZQ1AM5hYIVxxNJAMlBlQADUA5ZxRzbNEOECAM5YHW8MP5O/AAAAAElFTkSuQmCC)}#webamp #equalizer-button.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAA1gAICBBSa3Nje4R7jJyPn6itvcZs8alFAAAAR0lEQVQI12NQUIIDBQZUjmsoFAQDOeHlUFAK4sBkQsEcJaXQANYAVghHUSyUNZQ1AM5hYIVx1NJAMlBlQADUA5ZxRzYNyQUAEUAg+7nvOG8AAAAASUVORK5CYII=)}#webamp #playlist-button{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMCAMAAAC+5dbKAAAAUVBMVEUQWgAjIzgkIzckIzgkJDklJTolJjsmJTwmJjsnJz0nKD4oJz0oJz4oKD8pKUAqKUEqKUIqKkEvN01KWmtSY3N7hJSElKWttca9ztbV3vLv//+EzjHeAAAAXklEQVQYGQXBgRHCMAwEMLk4WYFj//nKAOHqR6o3AADk214AADyjGQCATKrhh+WwzwZygfve2ADUBYADwDT4gA2AhhUAxwZNACssAtqTAACgMwEAwPRRI5GpmTIhUX81UygSftVjhQAAAABJRU5ErkJggg==)}#webamp #playlist-button.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAIVBMVEUA1gArK0QvN01KWmtSY3N7hJSElKWttca9ztbV3vLv//9R/wqlAAAASklEQVQI12Moh4MyAYaqVTBQAuR0QEF7MIhjbNyhpKEB5RhwdmggcxAyljM7NDpgHCDQAMqBOXB7gJzy1FAoAHJSjOFAgEEQAQQAwMcyRToQk0kAAAAASUVORK5CYII=)}#webamp #playlist-button:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAARElEQVQI12MQRAABBhQOo2soFDgDOeHlUFAK4sBkQsEcQcFQBlZWKEdILZQVmYOQEUsLZQ2FcYCAFSgH4rgjm2aIcAEAbLsb8tZoQy8AAAAASUVORK5CYII=)}#webamp #playlist-button.selected:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAMBAMAAAB7FTvLAAAAGFBMVEUAAAAICBAQWgBSa3Nje4R7jJyPn6itvca8iDuFAAAARElEQVQI12MQRAABBhQOo2soFDgDOeHlUFAK4sBkQsEcQcFQBlZWKEdILZQVmYOQEUsLZQ2FcYCAFSgH4rgjm2aIcAEAbLsb8tZoQy8AAAAASUVORK5CYII=)}#webamp #title-bar{background-image:url(data:image/png;base64,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)}#webamp .selected #title-bar{background-image:url(data:image/png;base64,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)}#webamp .llama #title-bar{background-image:url(data:image/png;base64,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)}#webamp .llama.selected #title-bar{background-image:url(data:image/png;base64,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)}#webamp .selected #title-bar #option.clicked{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAHlBMVEUUFB8VFSAVFSIVFiEWFSAWFiEWFiI0MCyah13sznoaG8L5AAAAPElEQVQI12NgYBAUCmBgmCCoaMDAWSmoZMAwvVIwNIBhRueMjgkMAoLTKwMYGAWnz0xgEBT0DAWxXdMSACxMDDJsyBoOAAAAAElFTkSuQmCC)}#webamp .selected #title-bar #option:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEUhKDU0MCyah12jlGrsznoe/O3VAAAAMklEQVQI12MwBgIDBgMHBgYDBhMRASDpKCIIJJ1UnJQcGAwEHUWAsoyOLkCSgQWIweoBtzQG0TH1VqcAAAAASUVORK5CYII=)}#webamp .selected #title-bar #option:selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEUhKDU0MCyah12jlGrsznoe/O3VAAAAMklEQVQI12MwBgIDBgMHBgYDBhMRASDpKCIIJJ1UnJQcGAwEHUWAsoyOLkCSgQWIweoBtzQG0TH1VqcAAAAASUVORK5CYII=)}#webamp .selected #title-bar #minimize.clicked{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAMAAADXT/YiAAAASFBMVEUqKUIqKkMrK0QrLEQsK0QsLEUtLUctLUgtLkcuLUhFQTxSSj1aVzpoWTVrXUNzbFKId0mckXWqurG71tm/uX7AwcbE3+HO4c5KSa+JAAAAPElEQVQIHQXBwQHAMAjEMJvQfLv/lJ0ArpK3FsLQZxogW9uqXjqlkKQphYTmcGBI4wPU6OVd4FtvYEzyA+cLGDTjuSw1AAAAAElFTkSuQmCC)}#webamp .selected #title-bar #minimize:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAIVBMVEVFQTxSSj1aVzpoWTVrXUNzbFKId0mRbkqckXWjlGq/uX4Hs2WWAAAAOUlEQVQI12OYCQQTGKYzMLBPYJggKCgwgWGSiYvRBIYpYWkhExhmdK3qAJKrVq0AqunoaJ/AAFYPAAQVFS+2qihdAAAAAElFTkSuQmCC)}#webamp .selected #title-bar #shade.clicked{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAMFBMVEUtLUgtLkguLUcuLUguLkcuLkkvL0ovMEswL0swMEswMExFQTxSSj1rXUOqurHO4c6W/ePHAAAAQUlEQVQIHQE2AMn/AKqHZlVQAJnu7uUQAK7///4wAK3d3d0wAKzd3dwwAJzN3cwwAJvMzMNAAIi7u7MgAIZlVTAwDDgbUKzozR4AAAAASUVORK5CYII=)}#webamp .selected #title-bar #shade:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVFQTxSSj1rXUOjlGq/uX5Idn/CAAAAM0lEQVQIHQXBwRGAIAwAsLT07Z2zsP8qbuDBAliTmDjl1m8Gob6HK5uWti27V6uxDDFxfn1PDx8P0VYSAAAAAElFTkSuQmCC)}#webamp .selected #title-bar #close.clicked{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAALVBMVEUoJz4oKD8pKUAqKUEqKUIqKkMrK0Q0MCxoWTVrXUORbkqjlGq0h2PCsWH///9ex0i3AAAAO0lEQVQI12NIdTFWUmDIbC/vFGCIONm5Q4AhfPbq6UCy61U7A4P77LVAdsTOzhsMDJ5ANQwMLkaKCgwA5wURVkMAFf0AAAAASUVORK5CYII=)}#webamp .selected #title-bar #close:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAElBMVEU0MCxoWTVrXUORbkqjlGr///+HjTObAAAAKUlEQVQI12NwAQIHBicBBiEHBkcmIUYHBgcFAwUgKRwsAGNDxCFqwOoB1gEH67W94+0AAAAASUVORK5CYII=)}#webamp #clutter-bar{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAArBAMAAAC3GdQgAAAAElBMVEUAAAAAAAgQECEYGCkzPElgYGraVCJcAAAAVElEQVQI132NsQ2AQAwDr8gCv0FGMNLTu8gKv/8qFCAgQqI7WWebbYyBACQJEUbyRDgaTf95Va3xeGWkKUTQqPz12m9eyyYB8s7eVEUSJs8VIPe1DmVJGRTmaMgdAAAAAElFTkSuQmCC)}#webamp #clutter-bar.disabled{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAArBAMAAAC3GdQgAAAAD1BMVEUAAAAAAAgQECEYGClgYGoHCnLLAAAAIklEQVQI12MwFBQUZDBgAAIDIBhULAVUlgJhFlivgomLCwA8qROh1kJ8awAAAABJRU5ErkJggg==)}#webamp #button-o:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGUlEQVQI12Nw0GBwaWNwaIKRGQwODAwuLgA+SAT1jbNsAAAAAABJRU5ErkJggg==)}#webamp #button-0:selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGUlEQVQI12Nw0GBwaWNwaIKRGQwODAwuLgA+SAT1jbNsAAAAAABJRU5ErkJggg==)}#webamp #button-a:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGElEQVQI12Nw0GBwaWNwaGJwWQUmgWwGADIVBK9/og4OAAAAAElFTkSuQmCC)}#webamp #button-a.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAGElEQVQI12Nw0GBwaWNwaGJwWQUmgWwGADIVBK9/og4OAAAAAElFTkSuQmCC)}#webamp #button-i:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAF0lEQVQI12NwcWFwWMHgksLgoAAjVwAALckEbUwsrjEAAAAASUVORK5CYII=)}#webamp #button-i.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAACVBMVEUAAAAYGClwgY/qIgoqAAAAF0lEQVQI12NwcWFwWMHgksLgoAAjVwAALckEbUwsrjEAAAAASUVORK5CYII=)}#webamp #button-d:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAHElEQVQI12NoYGDo6GBo+MPQcZqh4TCIdACSfwBnkgl9KMHv2wAAAABJRU5ErkJggg==)}#webamp #button-d.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAgMAAAC5YVYYAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAHElEQVQI12NoYGDo6GBo+MPQcZqh4TCIdACSfwBnkgl9KMHv2wAAAABJRU5ErkJggg==)}#webamp #button-v:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAF0lEQVQI12NwYGDwOM3gcBhG/mdwsAEAPG8GMJvxEOEAAAAASUVORK5CYII=)}#webamp #button-v.selected{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHAgMAAABIN+TNAAAADFBMVEUAAAAQECEYGClwgY/lGZUOAAAAF0lEQVQI12NwYGDwOM3gcBhG/mdwsAEAPG8GMJvxEOEAAAAASUVORK5CYII=)}#webamp .shade #title-bar{background-image:url(data:image/png;base64,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)}#webamp .shade.selected #title-bar{background-image:url(data:image/png;base64,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)}#webamp .shade.selected #title-bar #shade{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAMAAADXT/YiAAAAM1BMVEUtLUgtLkguLUcuLUguLkcuLkkvL0ovMEswL0swMEswMExFQTxSSj1zk5qBl42qurHO4c7FV37rAAAAOklEQVQIHQXBwQ2EQAwEMCdEPK7/YhFiM2fXzybCxAXvN1VVbe9tpenSDDCh+GhZVmpyHDwZu2HP9QfI+BkLtDdVPQAAAABJRU5ErkJggg==)}#webamp .shade #title-bar #shade:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAD1BMVEVFQTxSSj2jlGq/uX7CsWH/Y2uiAAAALUlEQVQI12NQAgIFBiUGBiYFBgVhYwMFBkVhY0Mg6QwmXVwEgeIuLgIwNWD1AJzCBeFqt4OOAAAAAElFTkSuQmCC)}#webamp .shade #position{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAHAgMAAACTjE7vAAAADFBMVEUAABAwMEsxMUJaa3u9OGBkAAAAIklEQVQI12NgAIIDDFqrVq06wCAaBiZDQ8PAZCiM/A8EBwAZeBBhq+F40QAAAABJRU5ErkJggg==)}#webamp .shade #position::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp .shade #position::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAQMAAAD3d2XqAAAABlBMVEWjlGrsznoPowceAAAADklEQVQI12NwYHgAhw4AIi4E4a+iLsYAAAAASUVORK5CYII=)}#webamp .shade #position.left::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp .shade #position.left::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAE0lEQVQI12PYwPCF4QcYfmHYAAArXgYxq2vCDQAAAABJRU5ErkJggg==)}#webamp .shade #position.right::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp .shade #position.right::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAHAgMAAACw1x86AAAADFBMVEU9P0xoWTWjlGrsznp9Nqf9AAAAEklEQVQI12OwYKhh2AOGNQwWABlSA52dOQTnAAAAAElFTkSuQmCC)}#webamp #volume{background-image:url(data:image/png;base64,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)}#webamp #volume input::-webkit-slider-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}#webamp #volume input::-moz-range-thumb{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYvL0RKWmt7hJStvMTa5+opTTwbAAAAMUlEQVQI12NQFAQBIQaxNBBIZGALBYIQAyAtKiqKlwapM2RgcwEBQwZhYxAwZICaBwCdgQ6Jd297uQAAAABJRU5ErkJggg==)}#webamp #volume input::-webkit-slider-thumb:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}#webamp #volume input::-moz-range-thumb:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALBAMAAAC9q6FRAAAAFVBMVEUAAAALDxYZICovL0RKWmva5+r///+U4Y9MAAAAMUlEQVQI12MwFAQBYQbRUBAQZGBlAAIWBiQ6ISEBKw2SV4TTIi4gIMhgJKQopCgoDAB2aAh/NddRQgAAAABJRU5ErkJggg==)}#webamp .gen-window .gen-top{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUAgMAAAAFGX4uAAAACVBMVEUeHi8rK0Rra3zjkZV/AAAAG0lEQVQI12NggIJVYNDAEAoGDlSj0QGx9kABAFXxKF3wQT+3AAAAAElFTkSuQmCC)}#webamp .gen-window .gen-top-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABsklEQVQ4ja2VsY4UMRBEX/VucEKQEZAsEoII6ZAuIUFEhGg+EQm+ZEngHy5YkgtIjmg2dhHYHtvL3h2I6WRkT7mru9zd1m53aQYTktpKAgUySCAFSIiMUQiItlb9Rt6R2AJM0zTSKLoD7bA655VICCI7rPjTc9vq+Ov+ew61Hs1hL44HYolQLA6X/xWvaAFJRCVxkWpcN7PbjjpczaqX6tS2I9AtTWCeD2cP/as1EueblYEQ8/EHH9695NXuYj2SmqgFKtK8efvxvwkGEqROrGxfPn9amcQu1dB+Xr1+tjIJFAIvpfXz9sj7q6crk5TLt8yTxy+4Ptxwffi1MklPlMyji+co6shQ6/rSbG0vyErH2Wb8g2Q+5sgrIIOj9lvX+eN3GTM9edkP7jBjsLGNSYujc8h+YP6dXMWmaWrRAiiIKlM/hfuMh8HYZt2dJAD7/bcmlTZECGlDECg0SlbuZKPAw2C9R66qhEkYgVMubRuryGgPIgkK2r2LB0gqOCXAJCfsNEzknuZ0clfiB0i6yFMphFIQg1uPD4VdMi+Ie++k2jzfLpdftY7Y5H44+/yOJfwbpYWAKYEHyZMAAAAASUVORK5CYII=)}#webamp .gen-window .gen-top-left-end{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABqklEQVQ4jbWVu04cQRBFT406QNY6ByG00hhZshGIzYhNyhL7D/gf/ofIu6HlH7AjE6IVIQHUddCP6Z5dCwt5OulXPW5Vdd22k09fJIQkACQnLYgnIBwEipIgwQ6dPLvASLJAWF4t0zYrRAP1etuYEojaKWXtGuAhEVbr73mLSbg8ushGpGhcKpGUswqM5GlOwDI4ic6sA8CyczPGo8OGcwMDzAxhQ5S1QmVCgM3nfXP/v8ds1hNuvp5M5uDn7yfu1r8I7w4uJ3NydgB361tscX46WbrcnnjcvBAWn/en8gEQ03V8tDeZg28/HgCw/sPHydL18vzM7H1PONy/KM0G4FVXC4E7npvOvXR125SUZsxrr9gibDb3Q3fydu6KLLGbuzrxD9l6TcQsNnlmj1pVIlwvrweE/J0UW8QjYqyJM1kqRCsRVqtMkMIEXhFbTmMhzqpuTS1ynXbUpCFIZKXAY4qM51bAxAxZyaNp0JCEKj4V0A15LVJbJagNjm7KVN+aWomuVum2YohYTERoCd4uqabYI6pPT9iRaJ5hjmj8U46fcIm7fFyD+VzTP7yJnc07OZspAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-top-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABYlBMVEULFRIMDAweHS4eHi8fHyIfHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUiIyYjIjYkIzckIzgkJDklJDomJTkmJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEMsLEUsLEYtLUYuLUcuLUguLkcvJwgvLkkvL0ovMSUwL0kwL0owMEsxL0wxMC0xMEwxMU4yMU0yMU4zMk8zMlA0MlA0M1E1M1I1NFM2NFM2NVQ2Nhg3KxA3NlU3NlY4NVU4NlU4N1c5N1g5OFo6OFk6OVo7OVw7Ols7Olw8OVs8Olw8O11GQh9JRjlORDBQPx5dVztiWkVqanprXUFra3xsa3xsbH5tbX9tboBubX9vboFvb4JwTyxwb4Nxb4RxcIVxcYZycYZzcodzcoh0c4l0c4p1dIt1dIx2dY13dY6Gd02QkJCZc0LWhhB9AAABJUlEQVQYGT3BvWqUYRRG0X2++bRSGxsVhBls0oidP3W8gYCFXoW3JV6DVgmxslBbIQELJRAQA0Kc9zzbmcBkrVrZrTEaYuylEXs+EK/EEKNo4HA+SVf0n2mTMTqJcc00TTeBoGwUBZMINXPteTL2fn2E/XvHg/ktOz/fP4Ve7ZerU2Cqaw/YePdndXd1+qEWzIfsrKGbXNy+OCPN/IhrX1nI7+XFw3OqnO+z8wOa17dOz86XL79L3WHn7zMz9r59gSePP62pgxrG0bG1L23TraRWI24kRGNilv3iqJiaAgQRtEAomF+JIYRotPGIrfkki3UcncTkcqQHsjEtGEBRVeRymIBsTBYb3lCaqTqJbE0lG5WqVHrEyJX586A12omj45tj2foP9wDyBsXxPvcAAAAASUVORK5CYII=)}#webamp .gen-window .gen-top-right-end{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABk0lEQVQ4jbWVMU8DMQyFv2fdAGICMbCUSsDUSkgsLIgJNqT+/6kDC0s3ToKpZjgncVpYkC7L3cXxe87L+UWLxb1LQhIAQjjCBMgQgISINQJc/RygsjbWI5swEMNmswnwCEZiBiiA9QkdePvWwXMqWuvViysYC4lJXbJkKXmqWLKJVEIYslxIKcxAYABegrVycPfYdhUhQtO8y5M8sT4NI6QFBiTGccucYxjHLS9Pt9wtTuYjAbh/fJuNAEDL5Y1fnJ/NSjIAPKyu5if52I08P1zORqL1+tW/vt9nIwAY2O85PbmuPWIyPPpaEjKr3d8a1FrjqcWyGxQcBMPnuOsaMeCj+bONJPso78nPRPO5Pg+s79OD4X9HO29zHcWdZhbVIHO1k2xNnq6y4nESFt50tNMsKfzHICMmgqQ/E2m6KlQkzAbpFTAI2/ZCuSJdVOdTzpFMXtDaMOqB/zECvOofAP4LhReHrhp6kOz39aNWq0PgX4h1OBU/fuwkbh0g/cINtFybtOuXfLCpV9L9I/IvHucXuT+cnVfR1mFWhgAAAABJRU5ErkJggg==)}#webamp .gen-window .gen-top-left-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIiIyYqKUExMC08O11iWkV3do6Gd02QkJBUeJn/AAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-top-right-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUfHyIiIyYqKUExMC08O11iWkV3do6Gd02QkJBUeJn/AAAAPElEQVQY02NQQgIKDGlIIIHBBQk4oPFQQTkSKGDoQAINDMZIwIAhFAkEoOkTRAICaPahupNcV+PjoZgJAHC4Q+WYEBRwAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-top{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUAgMAAAAFGX4uAAAACVBMVEUeHi8rK0Rra3zjkZV/AAAAG0lEQVQI12NggIJVYNDAEAoGDlSj0QGx9kABAFXxKF3wQT+3AAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-top-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABsklEQVQ4ja2VL29UURDFf2fYBtOQSkyra0h9U1VSgVhMLQYsuoIPwEfgi1TWdFVTiSSrwJGAWlbvVNw39897t00a3iSblzt3Zs7cc++c1eHhG6cxIamsJJAhBwkkAwmRYmQCrKwVX0seiQXAcrlsYWRVQklWVTyAhMBSwYgf5y2i8Or2LrUaqantXLgBljBZLpj3I15WGpKwAPGBqnZdzL14VMXFqWqqxrZoA70cE9j8+9lNeq4VEE83KwdMbLa/+Hp1wbvTg/lA4qAu0EDNh8/f/hugAUGqyEr29vxsXhCHRFWF8vHyZF6QMQDA9x+/+fLpeD4Qx5ErA73aP+L6Zs31zXo+ECZvXLzce40sJENl6odhKz4DgbDuMLavy2G7/dsMVwGIXqz7zTJTgw/+PPFh40lvfN2J9kYwn6TLhxoR+j5Es9KsRtOyMlQa1whjyZtMfHrKqffV6n5yJ+n4hkwtZcOdvJDhjbB26AoePWP7ZN/luKefRns7HFWkOzx+JwE2GZ6BolDcGqZ3n+qBRI6LROGoRK9QxGX9c4HvcvxEIOVtKQk2mz+PP+Hu32/7hB8Aeq1hz7yWsz0AAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-top-left-end{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABrElEQVQ4jbWVu0pDQRCGvzks2hiwEayMjQFRECzFKlaCsfEJfA3zABZ5B1/DIm2009oHsJSQNoX7W+zl7DmJKOLZZm9z+Wdm5187OhxKCEkASJ64IJyA8CBQkAQJ1uik2QuMKAu40dUobpNCMFCuV40pgiidktdeNTwk3OzpJW0xCS8fXCQjUjAu5UjyWQFG8nGOwBI4icqsAsCSczPao8LqcwMDzAxhdZSlQmFCgO31Dxr3/z16W33s4/WuMyePzwvGkykmqdNI+vsD3MXwvDMHn7YAwN3enHTmBGA8meIuz7Y7c3D/8AaAHQyOO6vJcrmk1+vjdndOc7MB+KKrhcB7fGo673NXN5uS3Ixp7SU2N4KMm8/f6+7k79wVWGI9d1XiF9n6ScQsNHlij1JVwl2PrmuEfE+KTcQtYiyJM1rKRCvhZrNEkMIEviC2lMZMnEXdGrVIdWrVJDnJBIksF7hNkeHcMpiQIct5NNUaklDBpwKqOq9ZaqUEpcHWTZ7KW1NToipVqpUYAhYTAVqEt06qUewW1ccn7JFoPMMUUfunbD/hHHf+uGrzqaZfriKctwjIpw8AAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-top-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAMAAABPqWaPAAABO1BMVEUeHyUfHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUjIjYkIzckIzgkJDklJDolJiwmJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QsK0QsLEUsLEYtLUYuLUcuLUguLkcvLkkvL0owL0owMEsxMEwyMU0yMU4zMk8zMlA0MlA0M1E1M1I1NFM2NFM2NVQ2Nhg3NlU3NlY4NVU4NlU4N1c5N1g5OFo6OFk6OVo7OVw7Ols7Olw8OVs8Olw8O10/QitCQTtdVztqanprXUFra3xsa3xsbH5tbX9tboBubYBvboFvb4Jwb4Nxb4RxcIVxcYZycYZzbFJzcodzcoh0c4l0c4p1dIt1dIx2dY13dY6Zc0KjlGqxnVm2nF7sznr///+ZhXPBAAABBUlEQVQYGQXBwYmUURBG0Vv1P90KvWtnQCcBxyBEEAMxKWMSWjQAB2V2DeKyX33Xc+reGY3RoHHeGHHWR1HVMWgUDXxbT5mK3swYkyQab3T3SyAoQFFQIhQAAPA+5iFXOPVls74AADBf30HuOn3+A6wCAGABXPucfr7WMesXAICAkry4hQzrDgAAoIru29FUuQ4AAP6BnM7P6df5LfUKAOAvj5qHXOHU32/Uh9rGnTiaMSapza77HdWEqCbm7Txetj0UIIigJRBkfRJDGKJq5EID6ynHLe4kMTpxAKEPNlBUFRiQAhZtAbgUqgqqJDV0CVCpEqHAojesn5vRyBh0/PyD5tj8B5vM5TGngJW4AAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-top-right-end{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUCAYAAAB4d5a9AAABmUlEQVQ4jbWVsU4EMQxE31gLNRWiASQEEuIk6GmBguYavgD+gYIP4P8oaa+joLurQDpTrJM4d9AgbZrdjeMZZ7Ke6PDw0iUhCQAhHGECZAhAQsQaAa5+DlBZG+uRjRiIYT6fB3gEIzEDFMD6hA68fWvjORat2cWNKxgLiUldsmQpeaxYspFUQhiyXEgpzEBgAF6CtXJw99h2FSFC47zLkzyxPg0jpAUGJJarBVOOYbla8Pp8x/313nQsR8dnPvXQ0fGZn57sT7cLYAB4fLianuTt/YOXp/PJSDSb3frX98dkBAAD6zW7Owe1R0yGR19LQma1+1uDWms8tVh2g4KDYFiuPrtGDPho/mwjyT7Ke/Iz0XyuzwPr+3Rj+N/RzttcW3GnmUU1yFztKFuTp6useJyEhTdt7TRLCv8xyIiJIOnPRBqvChUJs0F6BQzCtr1QrkgX1fmYsyWTF7Q2jHrgf4wAr/oHgP9C4cWhq4YeJOt1/ajVahP4F2JtTsWPHzuJWwdIv3ADLdcm7folH2zqlXT/iPyLx/lF7g/DNbn14ysKfwAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-top-left-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUlJiwqKUE8O11CQTt3do6jlGrsznr///9vkuiwAAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-top-right-fill{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAUBAMAAACKWYuOAAAAG1BMVEUeHyUlJiwqKUE8O11CQTt3do6jlGrsznr///9vkuiwAAAAPElEQVQY02NQQgIKDKFIIIDBGAkYoPFQQTkSKGDoQAINDC5IwIEhDQkkoOkTRAICaPahupNcV+PjoZgJAOCtPeHhGRtiAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-bottom-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAOCAMAAAA16ON4AAABfVBMVEUdHS0dHS4dHi4eHS4eHi8fHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUjIjYkIzckIzgkJDckJDklJDomJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEUsLEYtLUYtLUgtLkctLkguLUcuLUguLkcvLkkvL0ovMEowL0kwL0owMEsxL0wxMEwxMU4yMU0yMU4zMk8zMlA0MlA0M1E0NFE1M1I1NFM1NFQ2NFM2NFQ2NVQ3NlU3NlY4NVU4NlU4N1c5N1g5OFk5OFo6N1k6OFk6OVo7OVw7Ols7Olw8OVs8OVw8Olw8O109O149O2A9PF89PGA+O18+O2A+PF8+PGBqanpra3xsa3xsbH1sbH5tbX9ubX9ubYBuboBvboFvb4Jwb4Nxb4RxcIVxcYZycYZzcYhzcodzcoh0c4l0c4p1dIt1dIx2dY13dY53do54dY94do94d5Ap3ahhAAACBUlEQVQYGQXBAQEYNRAEwNlLig3E4KTCcFK81AZ8bpmJn7/89vOX3z+BgBAEgQyBNARCIEHS2YEICIEAIR0BUsEF8OcvxhhwKxiXKQNxZDCBMGJ0mL3OmhpJwxHBfacmzA4u333+gAGAMQk6PqlkL7tYrnOSWca2CaCb1g5vqESDReG8+koHcOdcHwYAI6SVPWcL+RgMvmA6kEQLdOrMDHYAOHaFxxl3Hxafz6Y9ywAQEZWKTEgVwQB9igVJqkbtpkA84Jl56tjNiaM78F1mtsMAaLSrxWjKTgIB4DQs1Wg13U5p0W3nALrS7TPd/x4MYHZzggGIBmlEvUrYizwLfWvBCAVNNB3zhMYDTo5xfpzPMQ4Bxk7+/f77GEDfiYyXYh3RrO+z3xgcqmWsgkjaRuweNSbn0VIv+rmM82jB4vtxzuUCf5OKQUBgEAiSgATSIBiCwGww0hAkHRyEA0BgAFSwAsDA7iaQAECRYUYCMDvMUBJoAp51AARw4c+/AASIRgTSmEYCIkAIIQ1iEAQEIg0CqVMBBBfrn67rHZEBmWCa+913YcLhwAghaSJx1umI2RwBZ08a15c5zyGBS3NoDGtekTFMmXNm26i6TsyMOk+2BkAlgjUZTM+8tiV7FJ9rzXlPAZv0CQGAMDUNBIaOkCbSEAIiMAEERo1UCCSB67vOOwBR8T8KSRhI0bzb7AAAAABJRU5ErkJggg==)}#webamp .gen-window .gen-bottom-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAAOCAMAAAA16ON4AAABfVBMVEUdHS0dHS4dHi4eHS4eHi8fHzAfHzIgHzEgHzIhIDIhITMhITQiITQiIjUjIjYkIzckIzgkJDklJDomJTkmJTsmJTwmJjsnJj0oJj0oJz4oKD8oKEApKEApKUApKkEqKUAqKUEqKkEqKkIrKUIrKkMrK0QrLEQsK0MsK0QsLEMsLEUsLEYtLUYuLUcuLUguLkcvLkkvL0ovMEowL0owMEsxL0wxMEwyMU0yMU4zMk8zMlA0Mk80MlA0M1E0NFE1M1I1NFM1NFQ2NFM2NFQ2NVQ3NlU3NlY4NVU4NlU4N1c5N1g5OFk5OFo6N1k6OFk6OVo7OVw7Ols7Olw8OVs8OVw8Olw8O109O149O2A9PF89PGA+O18+O2A+PF8+PGBAP1BAQFFAQFJfX3Fqanpra3xrbHxsa3xsbH1sbH5tbX9ubYBuboBvboFvb4Jwb4Nxb4RxcIVxcYZycYZzcYhzcodzcoh0c4l0c4p1dIt1dIx2dY13dY54dY94do94d5CUuEDKAAACKUlEQVQYGQXBwZFdRRAEwKyev3ZwwQ8gFisgdMIPzFlhhLhih2THvukiM3+jqRRolgIKpUAV2KZoU6WgaQGrKQoK3VQBvvH7Nz9e39nZ7ezsPJoFrni8PvOgNNUV91y7s21xqaaqWM2dy5qVLS12Ps3q1sL7v2Awd/u6Y56XmHB7N4960mOKVDO1uSwlSgsKjNQeZuhKStg9lkwM3i8wcPblwIOGfbzdFy6bfQFbaXtqZg+ROxEqBJ0ai91AUTvjhZox3u8HMKg8l31AlrfxibfXMHPQclzJubnWbTasVChFsFPQQXTgU6GM9/vxBRikk6zxAuHOcfAElAjS7dUTkxjOGBBgl1nAYjMLbxYhftt/vlxgIIfBA8rJTXa9WstC3UwS4s6dAl2ECjS7xI6Kxk6wDcT+0q9/7gcwwNnxvEAHV9t5PkPbCeFYHfSsG6gUGEV0UGMiomkhCeLXfvzZr1+A/ExTAFw8xwVdKIU1XdhZilIKFKWxpdGdsqBA2Ub565sfgzQAwHMu0AIKTAErSAMAKNJt0AoMAHsVLeD1B1QKaNEoqIJCUWiVpkpTTaEFbKooFLUACsDrO2zhARaXDg+3zNWUS+fiZnVn6ZaiTVk2FyzZplqWO4srzTaes2NgZ7AvUNyj1kOHc0mDmTjIIo2aCTQpRrOCDSvbbcApbaapcd2s13/QFMDlOXmgNtqURq1Ys3aWRosWUAW1qaZZDQuF7qkt+Gke/wNCVMxEPwTsWgAAAABJRU5ErkJggg==)}#webamp .gen-window .gen-bottom{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAOAgMAAACnVF/TAAAACVBMVEUrKkM+PGB4d5A1hmUAAAAAGElEQVQI12NYBQYNDKFg4EAyjQ5wmQcFAFaEHSfLt0cNAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-middle-left{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAdAgMAAAABTX4zAAAACVBMVEUdHS0qKUBqanoMSFahAAAAD0lEQVQI12NQ5QxhoDMGAFFyDru7vcmtAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-middle-left-bottom{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAYAgMAAABRgO+AAAAACVBMVEUdHS0qKUBqanoMSFahAAAAD0lEQVQI12NQ5QxhoCEGAEUWDDHkAu/CAAAAAElFTkSuQmCC)}#webamp .gen-window .gen-middle-right{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAdAgMAAADqesUwAAAACVBMVEUdHS0qKUBqanoMSFahAAAADklEQVQI12OYOoWBBggAuDohplXr188AAAAASUVORK5CYII=)}#webamp .gen-window .gen-middle-right-bottom{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAYAgMAAAC6t1SDAAAACVBMVEUdHS0qKUBqanoMSFahAAAADklEQVQI12OYOoWBGggA6uEb2fBejlkAAAAASUVORK5CYII=)}#webamp .gen-window .gen-close:active{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAAElBMVEU6MSljXjtsXUORbkq0kWP////9IyyfAAAAKUlEQVQI12NwAQIHBicBBiEHBkcmIUYHBgcFAwUgKRwsAGNDxCFqwOoB1gEH67W94+0AAAAASUVORK5CYII=)}#webamp .character-48{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12NIYJjAsIHhApBMAAAULANhy/alSwAAAABJRU5ErkJggg==)}#webamp .character-49{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NQYEhgUIBAAAbMAQE/4OmzAAAAAElFTkSuQmCC)}#webamp .character-50{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12N4wCAAhAkMDQwfAA78AtFOxm3MAAAAAElFTkSuQmCC)}#webamp .character-51{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWP4wKDAkMAgwDCBIQEAEHwCcej/ubUAAAAASUVORK5CYII=)}#webamp .character-52{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNQYEhgWMDwgUGBQQEADlwCUbptSVYAAAAASUVORK5CYII=)}#webamp .character-53{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12P4wNDA8IBBAAgfAAAWXANRkouswAAAAABJRU5ErkJggg==)}#webamp .character-54{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYGhgeMAwAQgTABOsA0E/JWQ/AAAAAElFTkSuQmCC)}#webamp .character-55{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12P4wCDAoMDgAIIADgwB4bVklkQAAAAASUVORK5CYII=)}#webamp .character-56{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12NIYJjAAMJAEgAQvALRax9yugAAAABJRU5ErkJggg==)}#webamp .character-57{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYJgAhAUMAgwJAA/sAmFIDiRPAAAAAElFTkSuQmCC)}#webamp .character-97{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12NIYJjA8AGIgRAAFNwDkUdAkdwAAAAASUVORK5CYII=)}#webamp .character-98{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIklEQVQImWNkeMTwnwEG5GAMiCAEQ9ksUAnCKpkYsACs2gEsDRGJegWqFQAAAABJRU5ErkJggg==)}#webamp .character-99{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYJjA0ACEExgSABFMAuEl/r42AAAAAElFTkSuQmCC)}#webamp .character-100{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12N4wDABCh8AABgMBAHwBg9oAAAAAElFTkSuQmCC)}#webamp .character-101{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12P4wNDA8ACIGxg+AAAZ7ARBle8LfgAAAABJRU5ErkJggg==)}#webamp .character-102{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12P4wNDA8ACIgRAAGXwD0QArRQgAAAAASUVORK5CYII=)}#webamp .character-103{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12MoYGhg2MAwAQgTABMMAyEYrKesAAAAAElFTkSuQmCC)}#webamp .character-104{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12OYwDCB4QMDiJwAABbsA8FvtohKAAAAAElFTkSuQmCC)}#webamp .character-105{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12MoYFCAwgIACEwBYXIvChIAAAAASUVORK5CYII=)}#webamp .character-106{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIklEQVQImWNgYGD4D8ePIDQTAxaAQ/ARkSoZoRZAgByEAgDyfAjILsXOLAAAAABJRU5ErkJggg==)}#webamp .character-107{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12OYwLCA4QAQLmCYAAAXTAPhR2cHZQAAAABJRU5ErkJggg==)}#webamp .character-108{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQI12NoYIDBDwASfANxBGbLlAAAAABJRU5ErkJggg==)}#webamp .character-109{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12OYwPABCCeAIAAaTAQhA7qwOAAAAABJRU5ErkJggg==)}#webamp .character-110{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAJUlEQVQImWNgeMTwn4EBiqFsJgYsACL4CJugHKoEQrscNkEkAACJUwjKaMMZYwAAAABJRU5ErkJggg==)}#webamp .character-111{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12NIYJgAhQkAEgwDAakOOnUAAAAASUVORK5CYII=)}#webamp .character-112{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12N4wDCB4QFDAwgCABlcA9Fh/HqiAAAAAElFTkSuQmCC)}#webamp .character-113{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAE0lEQVQI12NIYJgAhBcYNjAUAAATvANxqBzBZwAAAABJRU5ErkJggg==)}#webamp .character-114{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12N4wKzA8IAJBD8AABkSBJqXbNZ9AAAAAElFTkSuQmCC)}#webamp .character-115{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12MoYGhgSGAQAMIHAA1cAlFD9hA9AAAAAElFTkSuQmCC)}#webamp .character-116{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQI12MoYFCAQQAH/AERspkQDgAAAABJRU5ErkJggg==)}#webamp .character-117{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAH0lEQVQImWNgeMTwn4EBiqFsJgYsgEJBRqgFECAHoQAqKQjI2yEAwwAAAABJRU5ErkJggg==)}#webamp .character-118{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIElEQVQImWNgeMTwn4EBiqFsJgYsgHhBRqhZECCHRyUAU/8IyAyvwxUAAAAASUVORK5CYII=)}#webamp .character-119{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12OYwACCH4BwAgAXTAQhMxLiQgAAAABJRU5ErkJggg==)}#webamp .character-120{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAI0lEQVQImWNgeMTwn4EBiqFsJgYsgBGqAgLkIBRWlQxEmwkAeNgPhWppWZwAAAAASUVORK5CYII=)}#webamp .character-121{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12OYwDCBIYFBAQQBDwwB4W/sEnMAAAAASUVORK5CYII=)}#webamp .character-122{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWP4wCDAoMDgwNDA8AEAD3wC0QyxJxkAAAAASUVORK5CYII=)}#webamp .character-34{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQIHWMIYGKAAQADkABTwIHJLQAAAABJRU5ErkJggg==)}#webamp .character-64{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12OQYFBgiABCBQYJAAbMASFkTTvgAAAAAElFTkSuQmCC)}#webamp .character-32{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAFUlEQVQImWNkYGD4z4AGmNAFaCUIAHz4AQtBW8fOAAAAAElFTkSuQmCC)}#webamp .character-8230{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAGUlEQVQImWNkYGD4z4AGmNAFqCL4CMpCogGaGgOxvAqT9wAAAABJRU5ErkJggg==)}#webamp .character-95{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAHElEQVQImWNkYGD4z4AGmNAFqCL4iIGB4RGqIACa/ALP0NMiXQAAAABJRU5ErkJggg==)}#webamp .character-58{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAHklEQVQImWNkYGD4z4AGmNAFEIKPoBgKGHFrJ0YlAIqfBo/8Un5dAAAAAElFTkSuQmCC)}#webamp .character-40{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NgYBBgUABCAQYGAAJMAGFQC8mLAAAAAElFTkSuQmCC)}#webamp .character-41{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NgYGhgcADCBgYGAAkMAYFEejkbAAAAAElFTkSuQmCC)}#webamp .character-45{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAIElEQVQImWNkYGD4z4AGmNAFcAqyMDxCE5FjYGAk2kwA3kYDC8SFNwoAAAAASUVORK5CYII=)}#webamp .character-39{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADUlEQVQIHWNQYGKAAQABgAAjjGgVVgAAAABJRU5ErkJggg==)}#webamp .character-33{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NwYIBABgYHAAhMAUHTrMzDAAAAAElFTkSuQmCC)}#webamp .character-43{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEUlEQVQI12NQYGJg+MEAIhkACPABPfEgkLEAAAAASUVORK5CYII=)}#webamp .character-92{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NgYGhgZoBAAATIAI13IxiAAAAAAElFTkSuQmCC)}#webamp .character-47{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNgYOBgEGBQYHBgaAAAAqQA+cACQKYAAAAASUVORK5CYII=)}#webamp .character-91{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12NIYHCAwgQACowBwZsjALcAAAAASUVORK5CYII=)}#webamp .character-93{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12MwYBCAQgMAA8wAoU+JerwAAAAASUVORK5CYII=)}#webamp .character-94{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQIHWNQYAhg6GAAAwAH9AD5R+QUOwAAAABJRU5ErkJggg==)}#webamp .character-38{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NQYAhgUGCIAJIaAAfsAWHaIpwJAAAAAElFTkSuQmCC)}#webamp .character-37{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNIYMhgEGBQYIhgkAAACgQBacCaDW0AAAAASUVORK5CYII=)}#webamp .character-46{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGCAYAAAAL+1RLAAAAGElEQVQImWNkYGD4z4AGmNAFyBV8REAlAJk4Ae2D9ha2AAAAAElFTkSuQmCC)}#webamp .character-61{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NgYChggGAGAAYsAOE2YeEkAAAAAElFTkSuQmCC)}#webamp .character-36{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NQYChgSGAwAJIKAApcAbE85GZ1AAAAAElFTkSuQmCC)}#webamp .character-35{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAD0lEQVQI12NIYPjAAMEMABUMAwFxUzDLAAAAAElFTkSuQmCC)}#webamp .character-197{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEklEQVQI12NIYJjAAMIfGCYAABIMA2Fjj6V0AAAAAElFTkSuQmCC)}#webamp .character-214{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAEElEQVQI12OYwJDAMAEMEwASbAMBKm1nAQAAAABJRU5ErkJggg==)}#webamp .character-196{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWOYwMDAkMAwgeEDwwQADwwDAcWvnbkAAAAASUVORK5CYII=)}#webamp .character-63{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNIYJjAIMCQwMDAkAAAC+wBwX8tiscAAAAASUVORK5CYII=)}#webamp .character-42{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAAFElEQVQIHWNgYFBgeMBQwODAwAAACjwBsYRIp8kAAAAASUVORK5CYII=)}#webamp .character-60{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12NIYHCAwgQACowBwZsjALcAAAAASUVORK5CYII=)}#webamp .character-62{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12MwYBCAQgMAA8wAoU+JerwAAAAASUVORK5CYII=)}#webamp .character-123{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12NIYHCAwgQACowBwZsjALcAAAAASUVORK5CYII=)}#webamp .character-125{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAGAQMAAAAxNcYIAAAABlBMVEUAAAAA4gDJLyihAAAADklEQVQI12MwYBCAQgMAA8wAoU+JerwAAAAASUVORK5CYII=)}#webamp .gen-text-a{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUA3N01bW21iYnN4eIZ/f4yNjZmUlKDQ9WnQAAAAIUlEQVQIHWMAAcZyAQamdAUGVrMABnGVQgY11yKGIIZUACkrA92ildtqAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-a{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUBGRlmNjZmbm6bGxszU1Nnx8fL///8iRh7bAAAAIUlEQVQIHWMAAcZyAQamdAUGVrMABnGVQgY11yKGIIZUACkrA92ildtqAAAAAElFTkSuQmCC)}#webamp .gen-text-b{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUAxMUdGRlliYnNqanpwcIB4eIZ/f4yNjZmUlKBMQpI+AAAAIUlEQVQI12NgAAHOmVOARIKlAgNnWyuQVRQuAOXOnMoAAFkvBehWf7S3AAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-b{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUA3N01iYnObm6apqbO4uL/GxszU1Nnx8fL////s2d+PAAAAIUlEQVQI12NgAAHOmVOARIKlAgNnWyuQVRQuAOXOnMoAAFkvBehWf7S3AAAAAElFTkSuQmCC)}#webamp .gen-text-c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUAxMUc3N00/P1NGRllUVGZbW21qanpwcIB4eIaGhpONjZmUlKBrx3tvAAAAJUlEQVQI12NgAAHWNZMZGHQSdzAw5DgwgAgFBgabgk6gxJ7JDABjoQaLYu6ObAAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUA3N01GRllUVGZiYnN/f4yNjZmpqbO4uL/Gxszi4ubx8fL///9AK9zxAAAAJUlEQVQI12NgAAHWNZMZGHQSdzAw5DgwgAgFBgabgk6gxJ7JDABjoQaLYu6ObAAAAABJRU5ErkJggg==)}#webamp .gen-text-d{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUBUVGZbW214eIaNjZmUlKBPxwelAAAAG0lEQVQI12NgAALTEAUGU6ZABlOGYAgGsUMUACkqA3OelxceAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-d{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUB/f4yNjZnGxszx8fL///90u0SbAAAAG0lEQVQI12NgAALTEAUGU6ZABlOGYAgGsUMUACkqA3OelxceAAAAAElFTkSuQmCC)}#webamp .gen-text-e{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUA3N00/P1NGRllUVGZbW214eIZ/f4yNjZmUlKBpF6uKAAAAH0lEQVQI12NgAALOmVMZOBOAdJsDA2exABAbAcWmAQA4DwTidXJmqwAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-e{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUBGRllUVGZiYnN/f4yNjZnGxszU1Nnx8fL///+DgC81AAAAH0lEQVQI12NgAALOmVMZOBOAdJsDA2exABAbAcWmAQA4DwTidXJmqwAAAABJRU5ErkJggg==)}#webamp .gen-text-f{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUA3N01GRllbW21qanqUlKC2H8YaAAAAGklEQVQI12NgAALT0CAGUwUg7SwAwSC2AgMAKTIC7Ms0rr0AAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-f{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAElBMVEUpKUBGRlliYnONjZmpqbP///9D5gpdAAAAGklEQVQI12NgAALT0CAGUwUg7SwAwSC2AgMAKTIC7Ms0rr0AAAAASUVORK5CYII=)}#webamp .gen-text-g{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAIVBMVEUpKUA/P1NGRllUVGZbW21wcIB4eIZ/f4yGhpONjZmUlKCnwN9hAAAAJ0lEQVQIHWMAA8aqZgYGzoQoAQYtBwYGBi2XVQoMnAVeCgyMXa0KAE4GBYcb4B3nAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-g{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAIVBMVEUpKUBUVGZiYnN/f4yNjZm4uL/GxszU1Nni4ubx8fL///+LwSrlAAAAJ0lEQVQIHWMAA8aqZgYGzoQoAQYtBwYGBi2XVQoMnAVeCgyMXa0KAE4GBYcb4B3nAAAAAElFTkSuQmCC)}#webamp .gen-text-h{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUBwcIBycoGCgo+hoauqqrO3t767u8O8vMPDw8nGxszKytD26YaTAAAAGElEQVQI12NgAAJphQoITl3BIO08A8YHADj6BOvV9DaxAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-h{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAFVBMVEUpKUCrq7TDw8no6Ovw8PH5+fr///9e3zXEAAAAFklEQVQI12NgAAIxgTQIDgFiozQYHwAqqAOv6ufnjgAAAABJRU5ErkJggg==)}#webamp .gen-text-i{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHBAMAAADdS/HjAAAAFVBMVEUhITkkJDxra3xwcIBycoF6eoiCgo8pCsaXAAAAFUlEQVQI12MQEGQQCoQi4UQGERACABeTAqlm5PZ5AAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-i{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAHBAMAAADdS/HjAAAAFVBMVEUkJDwxMULAwMfDw8ne3uHh4eXl5ehBk9l/AAAAFUlEQVQI12NgFGBgcgCjAAZmCEoAABAKAfHk6DTHAAAAAElFTkSuQmCC)}#webamp .gen-text-j{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUAxMUdGRllNTWBUVGZ4eIaNjZmUlKAAywzwAAAAE0lEQVQI12NgAIFSVCwCxOrJDAAh4QLodMJ9awAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-j{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAGFBMVEUpKUA3N01iYnNwcIB/f4zGxszx8fL///+/0FlwAAAAE0lEQVQI12NgAIFSVCwCxOrJDAAh4QLodMJ9awAAAABJRU5ErkJggg==)}#webamp .gen-text-k{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUAxMUc/P1NGRllNTWBUVGZbW22GhpONjZmUlKC0yuawAAAAIklEQVQI12NgAIFM00lAIiMBSHQGAImKAiDhNhVIGLYzAABxtgda2evVPQAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-k{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAHlBMVEUpKUA3N01UVGZiYnNwcIB/f4yNjZni4ubx8fL////1B4EGAAAAIklEQVQI12NgAIFM00lAIiMBSHQGAImKAiDhNhVIGLYzAABxtgda2evVPQAAAABJRU5ErkJggg==)}#webamp .gen-text-l{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAElBMVEUpKUAxMUdGRll4eIZ/f4yUlKDDTNTnAAAAFUlEQVQI12NgAIJgNByiJMAQGqoAABtZAp1Ff+GZAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-l{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAElBMVEUpKUA3N01iYnPGxszU1Nn///9EJz0RAAAAFUlEQVQI12NgAIJgNByiJMAQGqoAABtZAp1Ff+GZAAAAAElFTkSuQmCC)}#webamp .gen-text-m{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAAIVBMVEUpKUAxMUdGRllUVGZbW21iYnNwcIB4eIZ/f4yGhpOUlKBZcblpAAAAI0lEQVQI12NgAAGtJZzLGbRWaAGJrjIg4bUYSGguBBKqCcsBjp0JorkYhMsAAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-m{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAAIVBMVEUpKUA3N01iYnN/f4yNjZmbm6a4uL/GxszU1Nni4ub////cS6NmAAAAI0lEQVQI12NgAAGtJZzLGbRWaAGJrjIg4bUYSGguBBKqCcsBjp0JorkYhMsAAAAASUVORK5CYII=)}#webamp .gen-text-n{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUAxMUc3N01GRllNTWBiYnNwcIB4eIaNjZmUlKCfa5y8AAAAIElEQVQI12NgAIIK5clMjA4MTP+NgPgKAxPDeiB+wwAASdwGGeDXGZQAAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-n{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUA3N01GRlliYnNwcICbm6a4uL/Gxszx8fL///8Fv7lnAAAAIElEQVQI12NgAIIK5clMjA4MTP+NgPgKAxPDeiB+wwAASdwGGeDXGZQAAAAASUVORK5CYII=)}#webamp .gen-text-o{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUA/P1NGRllUVGZbW214eIZ/f4yGhpONjZmUlKDmamWaAAAAHElEQVQI12NgAAKx6QYMrSwTGaYwTQFjEBsoBgBK6AZDMgIWOQAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-o{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAHlBMVEUpKUBUVGZiYnN/f4yNjZnGxszU1Nni4ubx8fL////xzWRAAAAAHElEQVQI12NgAAKx6QYMrSwTGaYwTQFjEBsoBgBK6AZDMgIWOQAAAABJRU5ErkJggg==)}#webamp .gen-text-p{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJ1BMVEUpKUAxMUc/P1NGRllNTWBbW21iYnNqanpwcIB4eIZ/f4yGhpOUlKBLTaK7AAAAIElEQVQI12NgAIKYM5sYYgxPMMSEHGeIWZnIEGPAAMIAZzYHJUki1qIAAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-p{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJ1BMVEUpKUA3N01UVGZiYnNwcICNjZmbm6apqbO4uL/GxszU1Nni4ub////2OqNjAAAAIElEQVQI12NgAIKYM5sYYgxPMMSEHGeIWZnIEGPAAMIAZzYHJUki1qIAAAAASUVORK5CYII=)}#webamp .gen-text-q{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJFBMVEUpKUA3N00/P1NGRllUVGZbW214eIZ/f4yGhpONjZmSkp6UlKAHPYNOAAAAI0lEQVQI12NgAAGm6hYGBs6EaAEG6wDrAAjBmdBtAJTY1QAAWmwG3UPBF3oAAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-q{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUBGRllUVGZiYnN/f4yNjZm4uMDGxszU1Nni4ubx8fL7+/v////Rx7x8AAAAI0lEQVQI12NgAAGmnikMDFwFMQIMNgE2ARCCq2COAVDidAIAYQkHOMhnyMoAAAAASUVORK5CYII=)}#webamp .gen-text-r{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUAxMUc3N01GRllUVGZbW21qanpwcIB4eIZ/f4yGhpONjZmUlKDditvQAAAAIklEQVQI12NgAAGbM1uARMAcILHiJJBIPwQkQo4AicCTDACHOAih1LnoFgAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-r{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJ1BMVEUpKUA3N01GRlliYnN/f4yNjZmpqbO4uL/GxszU1Nni4ubx8fL///9vCc2uAAAAIklEQVQI12NgAAGbM1uARMAcILHiJJBIPwQkQo4AicCTDACHOAih1LnoFgAAAABJRU5ErkJggg==)}#webamp .gen-text-s{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUAxMUc/P1NGRllUVGZbW21qanpwcIB4eIaGhpONjZmUlKCHjnJIAAAAIklEQVQIHWMAAY1dAQzVygoM1TsDGMRmb2IIZdvE4LnLAQBTHAco/pVKOwAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-s{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUA3N01UVGZiYnN/f4yNjZmpqbO4uL/Gxszi4ubx8fL///+qJyS0AAAAIklEQVQIHWMAAY1dAQzVygoM1TsDGMRmb2IIZdvE4LnLAQBTHAco/pVKOwAAAABJRU5ErkJggg==)}#webamp .gen-text-t{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAD1BMVEUmJTwsLEM7O1BKSl2QkJxyH9PBAAAAFUlEQVQI12MQFBRgcHFxYGB2YkDHACPuAlQY49MWAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-t{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHAgMAAAC9yW99AAAADFBMVEUpKUBUVGZycoH///9VDRy9AAAAE0lEQVQI12NgYGD4f4BBlwEZAQAkDAKhcYNEwQAAAABJRU5ErkJggg==)}#webamp .gen-text-u{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAFVBMVEUpKUAxMUdGRllUVGZbW21qanqUlKDA77WeAAAAFklEQVQI12NgAAI3hRRUHJLMIJoWAAA5UATxAlDxBQAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-u{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAFVBMVEUpKUA3N01iYnN/f4yNjZmpqbP///8SF7O4AAAAFklEQVQI12NgAAI3hRRUHJLMIJoWAAA5UATxAlDxBQAAAABJRU5ErkJggg==)}#webamp .gen-text-v{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAKlBMVEUpKUAxMUc/P1NGRllNTWBUVGZbW21iYnNqanpwcIB4eIaGhpONjZmUlKDthvA2AAAAIklEQVQIHWMAAd8EWQaeDTEMHJeWMzDfvMTAsHcDA0NtAgBSrAdcNQnv8gAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-v{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAKlBMVEUpKUA3N01UVGZiYnNwcIB/f4yNjZmbm6apqbO4uL/Gxszi4ubx8fL///81zHafAAAAIklEQVQIHWMAAd8EWQaeDTEMHJeWMzDfvMTAsHcDA0NtAgBSrAdcNQnv8gAAAABJRU5ErkJggg==)}#webamp .gen-text-w{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAALVBMVEUpKUAxMUc3N00/P1NGRllNTWBUVGZbW21iYnNqanpwcIB4eIZ/f4yNjZmUlKD3PA89AAAAKUlEQVQIHWMAg3nqT/wY8rKfdzPIzXt9nIHnXd9jBo7XcRcYWJ7zLQAAwo4M1uKKXVEAAAAASUVORK5CYII=)}#webamp .gen-window.selected .gen-text-w{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHBAMAAADHdxFtAAAALVBMVEUpKUA3N01GRllUVGZiYnNwcIB/f4yNjZmbm6apqbO4uL/GxszU1Nnx8fL///+8HCoLAAAAKUlEQVQIHWMAg3nqT/wY8rKfdzPIzXt9nIHnXd9jBo7XcRcYWJ7zLQAAwo4M1uKKXVEAAAAASUVORK5CYII=)}#webamp .gen-text-x{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJFBMVEUpKUAxMUc3N01GRllNTWBbW21iYnNwcIB4eIaGhpONjZmUlKDqWCJLAAAAJElEQVQI12NgAAHJiVECDMzbtwCZ2Q0gYhEDA/PWHUCJhOwAAGilBx+T4WwNAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-x{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHBAMAAAA2fErgAAAAJFBMVEUpKUA3N01GRlliYnNwcICNjZmbm6a4uL/Gxszi4ubx8fL///+x/boCAAAAJElEQVQI12NgAAHJiVECDMzbtwCZ2Q0gYhEDA/PWHUCJhOwAAGilBx+T4WwNAAAAAElFTkSuQmCC)}#webamp .gen-text-y{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUAxMUc/P1NGRllNTWBUVGZbW21iYnN4eIaGhpONjZmUlKAsqFJVAAAAHklEQVQI12NgAIIdrJsYsrMKGDh3CTCwbGNgYIZgAE8aBbSrMTxDAAAAAElFTkSuQmCC)}#webamp .gen-window.selected .gen-text-y{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHBAMAAADZviHeAAAAJFBMVEUpKUA3N01UVGZiYnNwcIB/f4yNjZmbm6bGxszi4ubx8fL///+UuWJCAAAAHklEQVQI12NgAIIdrJsYsrMKGDh3CTCwbGNgYIZgAE8aBbSrMTxDAAAAAElFTkSuQmCC)}#webamp .gen-text-z{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAHlBMVEUpKUAxMUc/P1NGRllbW21qanp4eIZ/f4yGhpOUlKDEgHzZAAAAIklEQVQIHWMAgcyZExgYIh0YmKczMEhMYmDwTDZgmDlzAgBE/AYOyL7s3AAAAABJRU5ErkJggg==)}#webamp .gen-window.selected .gen-text-z{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHBAMAAAAyiZrdAAAAHlBMVEUpKUA3N01UVGZiYnONjZmpqbPGxszU1Nni4ub////eXJaqAAAAIklEQVQIHWMAgcyZExgYIh0YmKczMEhMYmDwTDZgmDlzAgBE/AYOyL7s3AAAAABJRU5ErkJggg==)}#webamp .gen-text-a{width:6px}#webamp .selected .gen-text-a{width:undefinedpx}#webamp .gen-text-b{width:7px}#webamp .selected .gen-text-b{width:undefinedpx}#webamp .gen-text-c{width:7px}#webamp .selected .gen-text-c{width:undefinedpx}#webamp .gen-text-d{width:6px}#webamp .selected .gen-text-d{width:undefinedpx}#webamp .gen-text-e{width:6px}#webamp .selected .gen-text-e{width:undefinedpx}#webamp .gen-text-f{width:6px}#webamp .selected .gen-text-f{width:undefinedpx}#webamp .gen-text-g{width:7px}#webamp .selected .gen-text-g{width:undefinedpx}#webamp .gen-text-h{width:6px}#webamp .selected .gen-text-h{width:undefinedpx}#webamp .gen-text-i{width:4px}#webamp .selected .gen-text-i{width:undefinedpx}#webamp .gen-text-j{width:6px}#webamp .selected .gen-text-j{width:undefinedpx}#webamp .gen-text-k{width:7px}#webamp .selected .gen-text-k{width:undefinedpx}#webamp .gen-text-l{width:5px}#webamp .selected .gen-text-l{width:undefinedpx}#webamp .gen-text-m{width:8px}#webamp .selected .gen-text-m{width:undefinedpx}#webamp .gen-text-n{width:6px}#webamp .selected .gen-text-n{width:undefinedpx}#webamp .gen-text-o{width:6px}#webamp .selected .gen-text-o{width:undefinedpx}#webamp .gen-text-p{width:6px}#webamp .selected .gen-text-p{width:undefinedpx}#webamp .gen-text-q{width:7px}#webamp .selected .gen-text-q{width:undefinedpx}#webamp .gen-text-r{width:7px}#webamp .selected .gen-text-r{width:undefinedpx}#webamp .gen-text-s{width:6px}#webamp .selected .gen-text-s{width:undefinedpx}#webamp .gen-text-t{width:5px}#webamp .selected .gen-text-t{width:undefinedpx}#webamp .gen-text-u{width:6px}#webamp .selected .gen-text-u{width:undefinedpx}#webamp .gen-text-v{width:6px}#webamp .selected .gen-text-v{width:undefinedpx}#webamp .gen-text-w{width:8px}#webamp .selected .gen-text-w{width:undefinedpx}#webamp .gen-text-x{width:7px}#webamp .selected .gen-text-x{width:undefinedpx}#webamp .gen-text-y{width:6px}#webamp .selected .gen-text-y{width:undefinedpx}#webamp .gen-text-z{width:5px}#webamp .selected .gen-text-z{width:undefinedpx}#webamp #title-bar #close{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAIgAAAAAAAAAAAAAAAf4AACAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAADwAAAAAAAAAAAAf/gAAAAA8AAAAAAAAAAAAH//iIiAAPAAAAAAAAAAAAB//4iIAADwAAAAAAAAAAAAf/iIgAAA8AAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+HP//3hz//8w8///EP///wHz//8AE///ADP//wBz//8A8///AfP//wP///8H////D////x////8/////f////w==),auto}#webamp #equalizer-window .band{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcAAAAAAAAAAAAAAAAAAA/3cAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAAAAAAAAAAAAAAAAAAj3AAAA9wAAAAAAAAAAgACPcAAAAPcAAAAAAAAAAIcAj3AAAAAAAAAAAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAA/3cAAAAAAAAACP/3d3AAAA9wAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////////////////////////////////////////////////8////+H///jA///wwP//8P///+Hz//3h4f/8w+H//EPz//wH///8AED//ADA//wB4f/8A/P//Af///wP///8H////D////x////8/////f////w==),auto}#webamp #equalizer-window .title-bar{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==),auto}#webamp #equalizer-window.shade{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==),auto}#webamp #equalizer-window.shade input{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==),auto}#webamp .window{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #main-window{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #main-window.shade #title-bar{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #playlist-window{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAgICAAMDAwAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAf4AAAAAAAAAAAAAAAAcAB/gAAAAAAAAAAAAAAAAHgAf4AAAAAAAAAAAAAAAAB/gPgAAAAAAAAAAAAAAAAAf/gAAAAAAAAAAAAAAAAAAH//iIiAAAAAAAAAAAAAAAB//4iIAAAAAAAAAAAAAAAAf/iIgAAAAAAAAAAAAAAAAH/4iAAAAAAAAAAAAAAAAAB/iIAAAAAAAAAAAAAAAAAAf4gAAAAAAAAAAAAAAAAAAHiAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8P///+H///3h///8w////EP///wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #main-window #position{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #playlist-window #playlist-resize-target{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcAAAAAAAAAAAAAAAAAAA/3cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAcAAAAAAAAAAACPcAAAdwAHcAAAAAAAAAAAj3AAAP8AD/AAAAAAAAgACPcAAAAAAA8AAAAAAAAIcAj3AAAAAAAAAAAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////////////////////////////////n////w////4H///iB///w/n//8OY//+HCH/3hwh/8w+Y//EP+f/wH///8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #playlist-window .playlist-scrollbar{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcAAAAAAAAAAAAAAAAAAA/3cAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAAAAAAAAAAAAAAAAAAj3AAAA9wAAAAAAAAAAgACPcAAAAPcAAAAAAAAAAIcAj3AAAAAAAAAAAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAA/3cAAAAAAAAACP/3d3AAAA9wAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////////////////////////////////////////////////////////////8////+H///jA///wwP//8P///+Hz//3h4f/8w+H//EPz//wH///8AED//ADA//wB4f/8A/P//Af///wP///8H////D////x////8/////f////w==),auto}#webamp #main-window #title-bar{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3AAAAAAAAAAAAAAAAAAAP93AAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAP93AAAAAAAACP/3d3AAAAAPcAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////P////h///jwP//w8D//8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AHA//ADwP/wB+H/8A/z//Af///wP///8H////D////x////8/////f////w==),auto}#webamp #volume{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}#webamp #balance{cursor:url(data:image/x-win-bitmap;base64,AAACAAEAICAAAAAAAADoAgAAFgAAACgAAAAgAAAAQAAAAAEABAAAAAAAgAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHcAAAAAAAAAAAAAAAAAAAj3AAAAAAAAAAAAAAAAAACPcAAHAAAAAHAAAAAAAAAAj3AAdwAHcAB3AAAAAAgACPcAAP8AD/AA/wAAAAAIcAj3AAAPAAAAAPAAAAAACPcPcAAAAAAAAAAAAAAAAAj/cAAAAAAAAAAAAAAAAAAI//d3dwAAAAAAAAAAAAAACP/3d3AAAAAAAAAAAAAAAAj/d3cAAAAAAAAAAAAAAAAI/3dwAAAAAAAAAAAAAAAACPd3AAAAAAAAAAAAAAAAAAj3cAAAAAAAAAAAAAAAAAAIdwAAAAAAAAAAAAAAAAAACHAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////////////////////j////w////8M/P/+GMx/3hCEP8wwhD/EOMx/wHz8/8AH///AD///wB///8A////Af///wP///8H////D////x////8/////f////w==),auto}\n", ""]);

// exports


/***/ })
/******/ ])["default"];
});