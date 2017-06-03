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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Measure = __webpack_require__(7);

var Measures = function () {
  function Measures(lowerBound, upperBound) {
    _classCallCheck(this, Measures);

    this._bounds = new Bounds(lowerBound, upperBound);
    this._box = { width: 100, height: 100 };
  }

  _createClass(Measures, [{
    key: 'add',
    value: function add(name, value) {
      this._validateAdd(name, value);
      this._measure = new Measure(this._box, name, value);
    }
  }, {
    key: 'draw',
    value: function draw(drawer) {
      drawer.draw(this._measure.render());
    }
  }, {
    key: '_validateAdd',
    value: function _validateAdd(name, value) {
      if (name == null) {
        throw new Error('measure name required');
      }
      this._validateValue(value);
    }
  }, {
    key: '_validateValue',
    value: function _validateValue(value) {
      if (value == null) {
        throw new Error('measure value required');
      }
      this._bounds.inRange(value);
    }
  }]);

  return Measures;
}();

var Bounds = function () {
  function Bounds(lowerBound, upperBound) {
    _classCallCheck(this, Bounds);

    if (lowerBound == null) {
      throw new Error('lowerBound is required');
    }
    if (upperBound == null) {
      throw new Error('upperBound is required');
    }

    this._lowerBound = lowerBound;
    this._upperBound = upperBound;
  }

  _createClass(Bounds, [{
    key: 'inRange',
    value: function inRange(value) {
      if (value < this._lowerBound) {
        throw new Error('measure value must be larger than lowerBound');
      }
      if (value > this._upperBound) {
        throw new Error('measure value must be less than upperBound');
      }
    }
  }]);

  return Bounds;
}();

module.exports = Measures;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Measures = __webpack_require__(2);
var measures = new Measures(1, 5);
measures.add('example', 2);

var container = document.getElementById('svg-container');

var Drawer = function () {
  function Drawer(container) {
    _classCallCheck(this, Drawer);

    this._svgNameSpace = 'http://www.w3.org/2000/svg';
    this._container = container;
  }

  _createClass(Drawer, [{
    key: 'draw',
    value: function draw(measure) {
      this._makeCircle(measure);
      this._makeLabel(measure);
    }
  }, {
    key: '_makeCircle',
    value: function _makeCircle(measure) {
      var circle = document.createElementNS(this._svgNameSpace, 'circle');
      circle.setAttribute('cx', measure.x);
      circle.setAttribute('cy', measure.y);
      circle.setAttribute('r', 2);
      circle.setAttribute('stroke', '#ff0000');
      container.appendChild(circle);
    }
  }, {
    key: '_makeLabel',
    value: function _makeLabel(measure) {
      var text = document.createElementNS(this._svgNameSpace, 'text');
      text.setAttribute('x', measure.x + 20);
      text.setAttribute('y', measure.y);
      text.setAttribute('fill', '#ff0000');
      text.textContent = measure.name;
      container.appendChild(text);
    }
  }]);

  return Drawer;
}();

measures.draw(new Drawer());

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Measure = function () {
  function Measure(boundingBox, name, value) {
    _classCallCheck(this, Measure);

    this._box = boundingBox;
    this._center = this._calculateCenter(boundingBox);
    this._name = name;
    this._value = value;
  }

  _createClass(Measure, [{
    key: "render",
    value: function render() {
      return { x: this._center.x, y: this._calculateHeight(), name: this._name };
    }
  }, {
    key: "_calculateCenter",
    value: function _calculateCenter(box) {
      return { x: box.width / 2, y: box.height / 2 };
    }
  }, {
    key: "_calculateHeight",
    value: function _calculateHeight() {
      // 10 is the height of each marker in the range
      return this._box.height / 2 - 10 * this._value;
    }
  }]);

  return Measure;
}();

module.exports = Measure;

/***/ })
/******/ ]);