(self["webpackChunksusanoo"] = self["webpackChunksusanoo"] || []).push([["main"],{

/***/ "./src/scripts/Application.js":
/*!************************************!*\
  !*** ./src/scripts/Application.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Application; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js?22a0");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _classes_ProgressionBarAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classes/ProgressionBarAnimation */ "./src/scripts/classes/ProgressionBarAnimation.js");
/* harmony import */ var _classes_ShowAndHideEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./classes/ShowAndHideEvents */ "./src/scripts/classes/ShowAndHideEvents.js");







function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }





var _initProgressionBarAnimation = new WeakSet();

var _initShowAndHideEvents = new WeakSet();

var Application = function Application() {
  _classCallCheck(this, Application);

  _initShowAndHideEvents.add(this);

  _initProgressionBarAnimation.add(this);

  _classPrivateMethodGet(this, _initProgressionBarAnimation, _initProgressionBarAnimation2).call(this);

  _classPrivateMethodGet(this, _initShowAndHideEvents, _initShowAndHideEvents2).call(this);
};

function _initProgressionBarAnimation2() {
  var progressionCircles = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-circle-progression]');
  var percentageNumber = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-counter-percentage]');
  new _classes_ProgressionBarAnimation__WEBPACK_IMPORTED_MODULE_7__.ProgressionBarAnimation(progressionCircles, percentageNumber);
}

function _initShowAndHideEvents2() {
  var buttonMenus = document.querySelectorAll('[data-button-menu]');
  var navigationButton = document.querySelector('[data-main-navigation-button]');
  var headNavigationButton = document.querySelectorAll('[data-head-navigation-button]');
  buttonMenus.forEach(function (buttonMenu) {
    var dropdownMenu = buttonMenu.nextElementSibling.nextElementSibling;
    new _classes_ShowAndHideEvents__WEBPACK_IMPORTED_MODULE_8__.ShowAndHideEvents(buttonMenu, dropdownMenu, navigationButton, headNavigationButton);
  });
}



/***/ }),

/***/ "./src/scripts/classes/ProgressionBarAnimation.js":
/*!********************************************************!*\
  !*** ./src/scripts/classes/ProgressionBarAnimation.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressionBarAnimation": function() { return /* binding */ ProgressionBarAnimation; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js?22a0");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery_circle_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery-circle-progress */ "./node_modules/jquery-circle-progress/dist/circle-progress.js");
/* harmony import */ var jquery_circle_progress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery_circle_progress__WEBPACK_IMPORTED_MODULE_8__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }




var _container = new WeakMap();

var _counter = new WeakMap();

var _options = new WeakMap();

var _initAnimation = new WeakSet();

var ProgressionBarAnimation = function ProgressionBarAnimation(container, counter) {
  _classCallCheck(this, ProgressionBarAnimation);

  _initAnimation.add(this);

  _container.set(this, {
    writable: true,
    value: void 0
  });

  _counter.set(this, {
    writable: true,
    value: void 0
  });

  _options.set(this, {
    writable: true,
    value: {
      startAngle: -1.55,
      size: 50,
      value: 0.74,
      fill: {
        color: '#fa4299'
      }
    }
  });

  _classPrivateFieldSet(this, _container, container);

  _classPrivateFieldSet(this, _counter, counter);

  _classPrivateMethodGet(this, _initAnimation, _initAnimation2).call(this);
};

function _initAnimation2() {
  var _this = this;

  _classPrivateFieldGet(this, _container).circleProgress(_classPrivateFieldGet(this, _options)).on('circle-animation-progress', function (event, progress, stepValue) {
    _classPrivateFieldGet(_this, _counter).text(String(stepValue.toFixed(2).substr(2)) + '%');
  });
}

/***/ }),

/***/ "./src/scripts/classes/ShowAndHideEvents.js":
/*!**************************************************!*\
  !*** ./src/scripts/classes/ShowAndHideEvents.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowAndHideEvents": function() { return /* binding */ ShowAndHideEvents; }
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "./node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_6__);








function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _buttonMenu = new WeakMap();

var _dropdown = new WeakMap();

var _navigationButton = new WeakMap();

var _navigationContainer = new WeakMap();

var _headNavigationButton = new WeakMap();

var _headNavigationContainer = new WeakMap();

var _showAndHideDropDown = new WeakSet();

var _showAndHideNavigation = new WeakSet();

var _showAndHideHeadNavigation = new WeakSet();

var ShowAndHideEvents = function ShowAndHideEvents(buttonMenu, dropdownMenu, navigationButton, headNavigationButton) {
  var _this = this;

  _classCallCheck(this, ShowAndHideEvents);

  _showAndHideHeadNavigation.add(this);

  _showAndHideNavigation.add(this);

  _showAndHideDropDown.add(this);

  _buttonMenu.set(this, {
    writable: true,
    value: void 0
  });

  _dropdown.set(this, {
    writable: true,
    value: void 0
  });

  _navigationButton.set(this, {
    writable: true,
    value: void 0
  });

  _navigationContainer.set(this, {
    writable: true,
    value: void 0
  });

  _headNavigationButton.set(this, {
    writable: true,
    value: void 0
  });

  _headNavigationContainer.set(this, {
    writable: true,
    value: void 0
  });

  _classPrivateFieldSet(this, _buttonMenu, buttonMenu);

  _classPrivateFieldSet(this, _dropdown, dropdownMenu);

  _classPrivateFieldSet(this, _navigationButton, navigationButton);

  _classPrivateFieldSet(this, _headNavigationButton, headNavigationButton);

  _classPrivateFieldSet(this, _navigationContainer, document.querySelector('[data-main-navigation-container]'));

  _classPrivateFieldSet(this, _headNavigationContainer, document.querySelector('[data-head-navigation]'));

  _classPrivateFieldGet(this, _buttonMenu).addEventListener('click', _classPrivateMethodGet(this, _showAndHideDropDown, _showAndHideDropDown2).bind(this));

  _classPrivateFieldGet(this, _navigationButton).addEventListener('click', _classPrivateMethodGet(this, _showAndHideNavigation, _showAndHideNavigation2).bind(this));

  _classPrivateFieldGet(this, _headNavigationButton).forEach(function (headButton) {
    headButton.addEventListener('click', _classPrivateMethodGet(_this, _showAndHideHeadNavigation, _showAndHideHeadNavigation2).bind(_this));
  });
};

function _showAndHideDropDown2() {
  if (_classPrivateFieldGet(this, _dropdown).classList.contains('is-active')) {
    _classPrivateFieldGet(this, _dropdown).classList.remove('is-active');

    return;
  }

  _classPrivateFieldGet(this, _dropdown).classList.add('is-active');
}

function _showAndHideNavigation2() {
  if (_classPrivateFieldGet(this, _navigationContainer).classList.contains('is-active')) {
    _classPrivateFieldGet(this, _navigationContainer).classList.remove('is-active');

    return;
  }

  _classPrivateFieldGet(this, _navigationContainer).classList.add('is-active');
}

function _showAndHideHeadNavigation2() {
  if (_classPrivateFieldGet(this, _headNavigationContainer).classList.contains('is-active')) {
    _classPrivateFieldGet(this, _headNavigationContainer).classList.remove('is-active');

    return;
  }

  _classPrivateFieldGet(this, _headNavigationContainer).classList.add('is-active');
}

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application */ "./src/scripts/Application.js");

new _Application__WEBPACK_IMPORTED_MODULE_0__.default();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__("./src/scripts/main.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);