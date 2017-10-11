var pointDebugger =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var shtml = function shtml(selector) {
    this.version = 0.4;

    this.selector = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;

    if (!this.selector.length) {
        this.selector = [this.selector];
    }

    this.createElement = function (tagName) {};

    this.all = function (cb) {
        for (var i = 0; i < this.selector.length; i++) {
            if (_typeof(this.selector[i]) === "object") {
                cb(this.selector[i]);
            }
        }
        return this;
    };

    this.move = function (container, cb) {

        this.selector[0].onmousedown = function (e) {
            var offsetX = e.offsetX;
            var offsetY = e.offsetY;
            var lock = $.createElement('div').css({
                zIndex: 51000,
                opacity: .5,
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0
            });

            $('body').append(lock);

            lock.on('mousemove', function (e) {
                var x = e.pageX - offsetX;
                var y = e.pageY - offsetY;
                container.css({
                    left: x + 'px',
                    top: y + 'px'
                });
                cb && cb(x, y);
            });

            lock.on('mouseup', function (e) {
                lock.remove();
            });
        };

        return this;
    };

    this.remove = function () {
        this.selector[0].parentNode.removeChild(this.selector[0]);
    };

    this.append = function (e) {
        return this.all(function (selector) {
            if (_typeof(e.selector) === 'object') {
                for (var i = 0; i < e.selector.length; i++) {
                    selector.appendChild(e.selector[i]);
                }
            } else {
                selector.appendChild(e);
            }
        });
    };

    this.addClass = function (className) {
        return this.all(function (selector) {
            return selector.classList.add(className);
        });
    };

    this.removeClass = function (className) {
        return this.all(function (selector) {
            return selector.classList.remove(className);
        });
    };

    this.issetClass = function (className) {
        return this.selector[0].classList.contains(className);
    };

    this.toggleClass = function (className) {
        return this.all(function (selector) {
            selector.classList.contains(className) ? selector.classList.remove(className) : selector.classList.add(className);
        });
    };

    this.css = function (key, value) {
        if (typeof key === "string") {

            if (typeof value === "string" || typeof value === "number") {
                return this.all(function (selector) {
                    return selector.style[key] = value;
                });
            }

            return window.getComputedStyle(this.selector[0], null)[key];
        }

        for (var i in key) {
            this.css(i, key[i]);
        }

        return this;
    };

    this.html = function (value) {
        if (typeof value === "undefined") {
            return this.selector[0].innerHTML;
        }

        return this.all(function (selector) {
            return selector.innerHTML = value;
        });
    };

    this.attr = function (key, value) {
        if (typeof key === "string") {

            if (typeof value !== "undefined") {
                return this.all(function (selector) {
                    return selector.setAttribute(key, value);
                });
            }

            return selector.getAttribute(key);
        }

        for (var i in key) {
            this.attr(i, key[i]);
        }

        return this;
    };

    this.removeAttr = function (key) {
        return this.all(function (selector) {
            return selector.removeAttribute(key);
        });
    };

    this.parent = function () {
        return $(this.selector[0].parentNode);
    };

    this.val = function (value) {
        if (value) {
            return this.all(function (selector) {
                return selector.value = value;
            });
        }
        return this.selector[0].value;
    };

    this.on = function (eventName, cb) {
        return this.all(function (selector) {
            return selector.addEventListener(eventName, cb);
        });
    };

    return this;
};

var $ = function $(e) {
    return new shtml(e);
};

var onLoad = [];

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = onLoad[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var cb = _step.value;

                cb();
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
};

$.ready = function (cb) {
    if (document.readyState === 'loading') {
        onLoad.push(cb);
    }
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        cb();
    }
};

$.createElement = function (tagName) {
    var element = document.createElement(tagName);
    element.onmousemove = element.onmousedown = element.onmouseup = element.onmousewheel = function (e) {
        return e.stopPropagation();
    };
    return $(element);
};

module.exports = $;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
__webpack_require__(2);

var pjs = void 0,
    OOP = void 0,
    random = void 0,
    mouse = void 0,
    key = void 0,
    point = void 0,
    vector = void 0,
    size = void 0,
    game = void 0;

PointJS = function (e) {
    return function () {
        e.apply(this, arguments);

        exports.pjs = pjs = this;
        exports.OOP = OOP = pjs.OOP;
        exports.random = random = pjs.math.random;
        exports.mouse = mouse = pjs.mouseControl;
        exports.key = key = pjs.keyControl;
        exports.vector = vector = pjs.vector;
        exports.point = point = vector.point;
        exports.size = size = vector.size;
        exports.game = game = pjs.game;

        // Проверка вхождения курсора в обьект
        pjs.mouseControl.isObject = function (object) {
            var mp = pjs.mouseControl.getPosition();
            return mp.x > object.x && mp.x < object.x + object.w && mp.y > object.y && mp.y < object.y + object.h;
        };

        var visualEditor = __webpack_require__(8);
        var stats = __webpack_require__(7);

        var isDebug = false;
        pjs.debug = function (e) {
            isDebug = e;
            stats.canvas.css('display', e ? 'block' : 'none');
        };

        mouse.position = point();
        game.size = size();

        game.newLoopFromClassObject = function (e) {
            return function () {
                if (typeof arguments[1].update === 'function') {
                    arguments[1].update = function (e) {
                        return function () {
                            mouse.position = mouse.getPosition();
                            game.size = game.getWH();
                            if (isDebug) {
                                stats.start();
                                var apply = e.apply(this, arguments);
                                stats.end();
                                visualEditor.draw();
                                return apply;
                            } else {
                                return e.apply(this, arguments);
                            }
                        };
                    }(arguments[1].update);
                }
                return e.apply(this, arguments);
            };
        }(game.newLoopFromClassObject);
    };
}(PointJS);

exports.pjs = pjs;
exports.OOP = OOP;
exports.random = random;
exports.mouse = mouse;
exports.key = key;
exports.point = point;
exports.vector = vector;
exports.size = size;
exports.game = game;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/lib/loader.js?sourceMap!./common.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/lib/loader.js?sourceMap!./common.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, ".pointDebugger {\n  display: none;\n  background: #3d3d3d;\n  z-index: 50000;\n  position: fixed;\n  top: 5px;\n  right: 5px;\n}\n\ncanvas.pointDebugger {\n  opacity: 0.9;\n}\n\ncanvas.pointDebugger:hover {\n  cursor: pointer;\n  opacity: 1;\n}\n\ndiv.pointDebugger {\n  width: 300px;\n}\n\ndiv.pointDebugger .wrapper {\n  color: #ffffff;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAbCAIAAADZDckgAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAhSURBVHjaYtFe9JyBgYHl////lFD/oLx//6inkjAFEGAAejVPzRDTs5AAAAAASUVORK5CYII=);\n}\n\ndiv.pointDebugger .wrapper .title {\n  padding: 5px;\n  color: #ffffff;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAbCAIAAADZDckgAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAhSURBVHjaYtFe9JyBgYHl////lFD/oLx//6inkjAFEGAAejVPzRDTs5AAAAAASUVORK5CYII=);\n}\n\ndiv.pointDebugger .items {\n  overflow-y: scroll;\n  height: auto;\n}\n\ndiv.pointDebugger .items::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\ndiv.pointDebugger .items::-webkit-scrollbar {\n  width: 10px;\n}\n\ndiv.pointDebugger .items::-webkit-scrollbar-thumb {\n  background-color: #181818;\n}\n\ndiv.pointDebugger .items .item {\n  padding: 5px;\n  border-bottom: 1px solid #000000;\n  color: #ffffff;\n  font-size: small;\n  font-weight: bold;\n}\n\ndiv.pointDebugger .items .item.CircleObject {\n  border-left: 3px solid #ffffff;\n}\n\ndiv.pointDebugger .items .item:hover {\n  background: #1d1d1d;\n  color: #cbcbcb;\n  cursor: pointer;\n}\n\ndiv.pointDebugger .items .item.active {\n  background: #000000;\n}\n\n.visualEditor {\n  background: black;\n  width: 300px;\n  position: absolute;\n  z-index: 49999;\n}\n\n.visualEditor .title {\n  padding: 5px;\n  color: #ffffff;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAbCAIAAADZDckgAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAhSURBVHjaYtFe9JyBgYHl////lFD/oLx//6inkjAFEGAAejVPzRDTs5AAAAAASUVORK5CYII=);\n}\n\n.visualEditor .closeButton {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: rgba(128, 128, 128, 0.69);\n  color: black;\n  padding: 8px 9px 8px 9px;\n  font-weight: bold;\n  font-size: 11px;\n  font-family: Helvetica,Arial,sans-serif;\n}\n\n.visualEditor .closeButton:hover {\n  cursor: pointer;\n  background: rgba(128, 128, 128, 0.31);\n}\n\n.visualEditor .content {\n  background: #3d3d3d;\n  overflow-y: scroll;\n  max-height: 273px;\n  border-bottom: 1px solid #597480;\n  border-left: 1px solid #597480;\n  border-right: 1px solid #597480;\n}\n\n.visualEditor .content::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n}\n\n.visualEditor .content::-webkit-scrollbar {\n  width: 10px;\n}\n\n.visualEditor .content::-webkit-scrollbar-thumb {\n  background-color: #181818;\n}\n\n.visualEditor .content .item {\n  position: relative;\n  font-size: small;\n  font-family: Helvetica,Arial,sans-serif;\n  padding: 5px;\n  border-bottom: 1px solid black;\n}\n\n.visualEditor .content .item .name {\n  display: inline-block;\n  position: relative;\n  color: #ffffff;\n  width: 100px;\n}\n\n.visualEditor .content .item .value {\n  display: inline-block;\n  position: relative;\n  left: 50px;\n}\n\n.visualEditor .content .item:hover {\n  background: rgba(128, 128, 128, 0.31);\n}\n\n.visualEditor .content .item input {\n  width: 100px;\n}\n\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'D:\\projects\\debug\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),
/* 5 */
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

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
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

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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
/* 6 */
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(0);

// Настройки
var config = JSON.parse(localStorage.getItem('point.debugger')) || {

    // Режимы
    // 0 - Диаграммой отображается кол-во фпс и скорость выполнения скрипта за последние несколько секунд. Под диаграммой выводятся минимальные и максимальные значения.
    // 1 - Диаграмма не отображается, отображается в текстовом виде кол-во фпс и скорость выполнения, а так же минимальные и максимальные значения.
    // 2 - Диаграмма не отображается, отображается в текстовом виде кол-во фпс и скорость выполнения (без минимальных и максимальных значений).
    mode: 1
};

// Сохранение настроек
var configSave = function configSave() {
    localStorage.setItem('point.debugger', JSON.stringify(config));
};

// Высота диаграммы
var statsHeight = 60;

// Канвас, на котором будем рисовать
var canvas = $.createElement('canvas').addClass('pointDebugger');
var context = canvas.selector[0].getContext('2d');

// Добавляем канвас после загрузки страницы
$.ready(function () {
    return $('body').append(canvas);
});

// Изменяем режимы при клике на холст
canvas.on('click', function (e) {
    return setMode(config.mode === 2 ? 0 : config.mode + 1);
});

// Размер блока для каждого из режимов
var statsSize = [[300, 105], [150, 32], [80, 32]];

// Переключение режимов
var setMode = function setMode(mode) {
    var saveConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    config.mode = mode;

    canvas.selector[0].width = statsSize[config.mode][0];
    canvas.selector[0].height = statsSize[config.mode][1];
    canvas.css({
        width: statsSize[config.mode][0],
        height: statsSize[config.mode][1]
    });

    saveConfig && configSave();
};

setMode(config.mode);

// Отрисовать линию
var drawLine = function drawLine(option) {
    context.strokeStyle = option.color;
    context.lineWidth = option.width;
    context.beginPath();
    context.moveTo(option.x1, option.y1);
    context.lineTo(option.x2, option.y2);
    context.closePath();
    context.stroke();
};

// Отрисовать текст
var drawText = function drawText(option) {
    context.font = 'bold ' + option.size + 'px Helvetica,Arial,sans-serif';
    context.fillStyle = option.color;
    context.fillText(option.text, option.x, option.y);
};

var speed = {
    min: 0,
    max: 0,
    current: 0,
    list: [],
    color: '#0f0'
};

var fps = {
    min: 0,
    max: 60,
    current: 0,
    list: [],
    color: '#00FFFF'
};

for (var i = 0; i < statsSize[0][0]; i++) {
    speed.list[i] = 0;
    fps.list[i] = 0;
}

(function update() {

    // Очищаем весь холст
    context.clearRect(0, 0, statsSize[config.mode][0], statsSize[config.mode][1]);

    speed.list[statsSize[0][0] - 1] = speed.current;
    fps.list[statsSize[0][0] - 1] = fps.current;

    speed.min = Math.min.apply(null, speed.list);
    speed.max = Math.max.apply(null, speed.list);

    fps.min = Math.min.apply(null, fps.list);
    if (fps.current > fps.max) {
        fps.max = fps.current;
    }
    var maxFps = Math.max.apply(null, fps.list);

    if (config.mode === 0 || config.mode === 1) {
        for (var _i = 0; _i < statsSize[0][0]; _i++) {
            if (statsSize[0][0] === _i + 1) {
                continue;
            }

            if (config.mode === 0) {
                drawLine({
                    color: speed.color,
                    width: .5,
                    x1: _i,
                    y1: Math.round((1 - speed.list[_i] / speed.max) * statsHeight),
                    x2: _i + 1,
                    y2: Math.round((1 - speed.list[_i + 1] / speed.max) * statsHeight)
                });

                drawLine({
                    color: fps.color,
                    width: .5,
                    x1: _i,
                    y1: Math.round((1 - fps.list[_i] / fps.max) * statsHeight),
                    x2: _i + 1,
                    y2: Math.round((1 - fps.list[_i + 1] / fps.max) * statsHeight)
                });
            }

            speed.list[_i] = speed.list[_i + 1];
            fps.list[_i] = fps.list[_i + 1];
        }
    }

    if (config.mode === 0) {
        drawLine({
            color: '#000000',
            width: .5,
            x1: 0,
            y1: statsHeight + 3,
            x2: statsSize[0][0],
            y2: statsHeight + 3
        });
    }

    drawText({
        x: 2,
        y: config.mode === 0 ? statsHeight + 19 : 12,
        size: 11,
        text: 'FPS: ' + fps.current + (config.mode < 2 ? ' (' + fps.min + '-' + maxFps + ')' : ''),
        color: fps.color
    });

    drawText({
        x: 2,
        y: config.mode === 0 ? statsHeight + 37 : 27,
        size: 11,
        text: 'SPEED: ' + speed.current.toFixed(2) + (config.mode < 2 ? ' (' + speed.min.toFixed(2) + '-' + speed.max.toFixed(2) + ')' : ''),
        color: speed.color
    });

    (requestAnimationFrame || webkitRequestAnimationFrame || mozRequestAnimationFrame || oRequestAnimationFrame || msRequestAnimationFrame || function (cb) {
        setTimeout(cb, 1000 / 60);
    })(update);
})();

var beginTime = 0;
var prevTime = beginTime;
var frames = 0;

module.exports = {
    canvas: canvas, setMode: setMode,
    start: function start() {
        beginTime = (performance || Date).now();
    },
    end: function end() {
        frames++;

        var time = (performance || Date).now();

        speed.current = time - beginTime;

        if (time >= prevTime + 1000) {

            fps.current = parseInt(frames * 1000 / (time - prevTime));

            prevTime = time;
            frames = 0;
        }

        beginTime = time;
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _point = __webpack_require__(1);

var $ = __webpack_require__(0);

var visualEditor = __webpack_require__(9);

var canvas = __webpack_require__(7).canvas;
var menu = $.createElement('div').addClass('pointDebugger');
var wrapper = $.createElement('div').addClass('wrapper');
var title = $.createElement('div').addClass('title');
var items = $.createElement('div').addClass('items');

title.html('Список обьектов');

wrapper.append(title);
menu.append(wrapper);
menu.append(items);

var isActive = false;

canvas.on('contextmenu', function () {
    menu.css('display', 'block');
    items.css('maxHeight', _point.pjs.game.getWH().h - 40 + 'px');
    isActive = true;
});

document.onmousemove = function () {
    if (isActive && _point.game.size.w - 305 > _point.mouse.position.x) {
        menu.css('display', 'none');
        isActive = false;
    }
};

$.ready(function () {
    return $('body').append(menu);
});

var addItem = function addItem(e) {
    var item = $.createElement('div');
    item.html(e.type + ' #' + e.id).addClass('item').addClass(e.type).attr('item-id', e.id);

    item.on('click', function () {
        item.toggleClass('active');
        if (item.issetClass('active')) {
            // dbg.add(e, ['id', 'type', 'x', 'y']);
            visualEditor.add(e);
        } else {
            // dbg.remove(e);
            visualEditor.remove(e);
        }
    });
    items.append(item);
};

// Обьекты, которые будем отлавливать
var objects = ['newBaseObject', 'newTriangleObject', 'newRectObject', 'newRoundRectObject', 'newCircleObject', 'newEllipsObject', 'newTextObject', 'newPolygonObject', 'newImageObject', 'newAnimationObject'];
_point.OOP.forArr(objects, function (object) {
    _point.game[object] = function (e) {
        return function () {
            var item = e.apply(this, arguments);
            addItem(item);
            return item;
        };
    }(_point.game[object]);
});

module.exports = visualEditor;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _point = __webpack_require__(1);

var $ = __webpack_require__(0);

var options = {
    x: 'number',
    y: 'number',
    w: 'number',
    h: 'number',
    fillColor: 'color',
    strokeColor: 'color',
    strokeWidth: 'number',
    angle: 'number',
    alpha: 'number',
    visible: 'bool',
    radius: 'number'
};

var list = [];

var frames = 0;

var close = function close(element) {
    var index = list.findIndex(function (e) {
        return e.element === element;
    });
    if (index > -1) {
        list.splice(index, 1);
        $('[visualeditor-id="' + element.id + '"]').remove();
        $('.pointDebugger > .items > [item-id="' + element.id + '"]').removeClass('active');
    }
};

module.exports = {
    add: function add(element) {
        var container = $.createElement('div').addClass('visualEditor').attr('visualEditor-id', element.id);
        var title = $.createElement('div').addClass('title').html('#' + element.id + ' - ' + element.type);
        var closeButton = $.createElement('div').addClass('closeButton').html('X');
        var content = $.createElement('div').addClass('content');

        var x = (0, _point.random)(0, _point.game.size.w - 300 - 300);
        var y = (0, _point.random)(0, _point.game.size.h - 289);

        container.css({
            padding: 100,
            top: y + 'px',
            left: x + 'px'
        });

        $.ready(function () {
            return $('body').append(container);
        });

        // container.on('mousedown', () => {
        //    OOP.forArr(list, e => e.container.css('z-index', 49998));
        //    container.css('z-index', 49999);
        // });

        title.move(container, function (x, y) {
            var el = list.find(function (e) {
                return e.element === element;
            });
            el.x = x;
            el.y = y;
        });

        closeButton.on('click', function (e) {
            return close(element);
        });

        container.append(title);
        container.append(closeButton);
        container.append(content);

        OOP.forEach(options, function (type, e) {
            var item = $.createElement('div').addClass('item').attr('type', e);
            var name = $.createElement('div').addClass('name').html(e);

            item.append(name);

            switch (type) {
                case 'number':
                    {
                        var value = $.createElement('input').attr('type', 'number').addClass('value');

                        value.on('mouseenter', function (e) {
                            value.attr('lock', true);
                        });
                        value.on('mouseleave', function (e) {
                            value.removeAttr('lock').attr('update', value.val());
                        });

                        item.append(value);
                        break;
                    }
                case 'color':
                    {
                        var _value = $.createElement('input').attr('type', 'text').addClass('value');
                        item.append(_value);
                        break;
                    }
                case 'bool':
                    {
                        var _value2 = $.createElement('input').attr('type', 'checkbox').addClass('value');
                        item.append(_value2);
                        break;
                    }
            }

            content.append(item);
        });

        list.push({
            element: element, container: container,
            x: parseInt(container.css('left')),
            y: parseInt(container.css('top')),
            w: parseInt(container.css('width')),
            h: parseInt(container.css('height'))
        });
    },
    remove: function remove(element) {
        close(element);
    },
    draw: function draw() {

        OOP.forArr(list, function (e) {
            var element = e.element;
            var container = e.container;

            if (frames === 0) {
                OOP.forEach(options, function (type, e) {
                    var selector = document.querySelector('[visualeditor-id="' + element.id + '"] > .content > [type="' + e + '"] > .value');

                    if (selector.getAttribute('lock')) {
                        return;
                    }

                    if (selector.getAttribute('update')) {
                        element[e] = parseInt(selector.getAttribute('update'));
                        selector.removeAttribute('update');
                    }

                    switch (type) {
                        case 'number':
                            {
                                selector.value = element[e];
                                break;
                            }
                        case 'color':
                            {
                                selector.value = element[e];
                                break;
                            }
                    }
                });
            }

            brush.drawLineAS({
                x1: e.x + e.w / 2,
                y1: e.y + e.h / 2,
                x2: element.x,
                y2: element.y,
                strokeColor: '#9eb9ff',
                strokeWidth: 1
            });
        });
    }
};

/***/ })
/******/ ]);
//# sourceMappingURL=point.debugger.js.map