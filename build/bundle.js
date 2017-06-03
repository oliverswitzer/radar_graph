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
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LabelsDrawer = function () {
  function LabelsDrawer() {
    _classCallCheck(this, LabelsDrawer);

    this._svgNameSpace = 'http://www.w3.org/2000/svg';
  }

  _createClass(LabelsDrawer, [{
    key: 'draw',
    value: function draw(container, measure) {
      var text = document.createElementNS(this._svgNameSpace, 'text');
      var circleElement = document.querySelector('[data-name=\'' + measure.name + '\']');
      var rect = circleElement.getBoundingClientRect();

      text.setAttribute('x', measure.x);
      text.setAttribute('y', measure.y);
      text.setAttribute('fill', '#000000');
      text.setAttribute('transform', 'rotate(' + measure.angle * -1 + ', ' + rect.left + ', ' + rect.top + ')');
      text.textContent = measure.name + ' (' + measure.value + ')';
      container.appendChild(text);
    }
  }]);

  return LabelsDrawer;
}();

module.exports = LabelsDrawer;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinesDrawer = function () {
  function LinesDrawer(box, container) {
    _classCallCheck(this, LinesDrawer);

    this._box = box;
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
    this._container = container;
  }

  _createClass(LinesDrawer, [{
    key: 'draw',
    value: function draw(line) {
      var path = document.createElementNS(this._svgNameSpace, 'path');
      path.setAttribute('d', line.d);
      path.setAttribute('stroke', '#dedede');
      path.setAttribute('transform', 'rotate(' + line.angle + ', ' + this._box.center.x + ', ' + this._box.center.y + ')');
      this._container.appendChild(path);
    }
  }]);

  return LinesDrawer;
}();

module.exports = LinesDrawer;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Measures = function () {
  function Measures() {
    _classCallCheck(this, Measures);
  }

  _createClass(Measures, [{
    key: 'add',
    value: function add() {
      throw new Error('measure name required');
    }
  }]);

  return Measures;
}();

module.exports = Measures;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PointsDrawer = function () {
  function PointsDrawer() {
    _classCallCheck(this, PointsDrawer);

    this._svgNameSpace = 'http://www.w3.org/2000/svg';
  }

  _createClass(PointsDrawer, [{
    key: 'draw',
    value: function draw(container, measure) {
      var circle = document.createElementNS(this._svgNameSpace, 'circle');
      circle.setAttribute('cx', measure.x);
      circle.setAttribute('cy', measure.y);
      circle.setAttribute('data-name', measure.name);
      circle.setAttribute('r', 2);
      circle.setAttribute('stroke', '#ff0000');
      container.appendChild(circle);
    }
  }]);

  return PointsDrawer;
}();

module.exports = PointsDrawer;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Requires points to have been drawn
var PointsPathDrawer = function () {
  function PointsPathDrawer(container) {
    _classCallCheck(this, PointsPathDrawer);

    this._svgNameSpace = 'http://www.w3.org/2000/svg';
  }

  _createClass(PointsPathDrawer, [{
    key: 'draw',
    value: function draw(container) {
      var path = document.createElementNS(this._svgNameSpace, 'path');
      path.setAttribute('d', this._buildPath());
      path.setAttribute('id', 'points-path');
      path.setAttribute('fill', 'rgba(255, 0, 0, .60)');

      var groups = document.getElementsByTagName('g');
      container.insertBefore(path, groups[0]);
    }
  }, {
    key: '_buildPath',
    value: function _buildPath() {
      var _this = this;

      var bounding = document.getElementById('svg-container').getBoundingClientRect();
      var listOfCircles = this._getCircles();;
      return listOfCircles.map(function (circle, i) {
        var rect = circle.getBoundingClientRect();
        var radius = parseInt(circle.getAttribute('r'));
        return _this._getCommand(i) + ' ' + (rect.left - bounding.left + radius) + ' ' + (rect.top - bounding.top + radius);
      }).join(' ');
    }
  }, {
    key: '_getCommand',
    value: function _getCommand(i) {
      if (i === 0) {
        return 'M';
      } else {
        return 'L';
      }
    }
  }, {
    key: '_getCircles',
    value: function _getCircles() {
      var circleElements = document.getElementsByTagName('circle');
      var array = [];
      for (var i = 0; i < circleElements.length; i++) {
        array.push(circleElements[i]);
      }
      return array;
    }
  }]);

  return PointsPathDrawer;
}();

module.exports = PointsPathDrawer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TransformDrawer = function () {
  function TransformDrawer(box, container, drawers) {
    _classCallCheck(this, TransformDrawer);

    this._box = box;
    this._svgNameSpace = 'http://www.w3.org/2000/svg';
    this._container = container;
    this._drawers = drawers;
  }

  _createClass(TransformDrawer, [{
    key: 'draw',
    value: function draw(measure) {
      var wrapper = document.createElementNS(this._svgNameSpace, 'g');
      this._container.appendChild(wrapper);

      this._drawers.forEach(function (d) {
        return d.draw(wrapper, measure);
      });

      wrapper.setAttribute('transform', 'rotate(' + measure.angle + ', ' + this._box.center.x + ', ' + this._box.center.y + ')');
    }
  }]);

  return TransformDrawer;
}();

module.exports = TransformDrawer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Measures = __webpack_require__(2);
var TransformDrawer = __webpack_require__(5);
var PointsDrawer = __webpack_require__(3);
var LabelsDrawer = __webpack_require__(0);
var LinesDrawer = __webpack_require__(1);
var PointsPathDrawer = __webpack_require__(4);

var box = { width: 300, height: 300, center: { x: 150, y: 150 } };
var measures = new Measures(1, 5, box, 20);
measures.add('feedback', 3);
measures.add('courage', 4);
measures.add('communication', 2.5);
measures.add('respect', 5);
measures.add('simplicity', 1);

var c = document.getElementById('svg-container');

measures.draw('lines', new LinesDrawer(box, c));
measures.draw('points', new TransformDrawer(box, c, [new PointsDrawer(), new LabelsDrawer()]));
new PointsPathDrawer().draw(c);

/***/ })
/******/ ]);