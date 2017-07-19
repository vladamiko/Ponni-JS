var app =
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
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
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
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Direction = __webpack_require__(2),
    Filter = __webpack_require__(3),
    Test = __webpack_require__(4),
    AppView = __webpack_require__(5),
    App = __webpack_require__(6),
    Groups = __webpack_require__(7),
    GroupView = __webpack_require__(8),
    GroupController = __webpack_require__(9),
    Settings = __webpack_require__(10),
    SettingsView = __webpack_require__(11),
    SettingsController = __webpack_require__(12);

//Entry point
var app = new App();
app.start();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.export = Direction;

var Direction = function () {
    function Direction(directionName) {
        _classCallCheck(this, Direction);

        this.directionName = directionName;
        this.testList = []; // ['Eng1', 'Engl2', …]
        this.filterList = []; // ['filter1', 'filter2', …] 
    }

    _createClass(Direction, [{
        key: 'addTest',
        value: function addTest(testName) {
            this.testList.push(new Test(testName));
        }
    }, {
        key: 'addFilter',
        value: function addFilter(tests, action, condition, grade) {
            this.filterList.push(new Filter(tests, action, condition, grade));
        }
    }, {
        key: 'deleteTest',
        value: function deleteTest() {}
    }, {
        key: 'deleteFilter',
        value: function deleteFilter() {}
    }]);

    return Direction;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.export = Filter;

var Filter = function Filter(tests, action, condition, grade) {
    _classCallCheck(this, Filter);

    this.tests = tests; // array
    this.action = action; // string
    this.condition = condition; // string
    this.grade = grade; // number
}

// addTest, changeAction, changeCondition, changeGrade

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.export = Test;

var Test = function Test(name, maxGrade, grade) {
    _classCallCheck(this, Test);

    this.name = name;
    // this.maxGrade = maxGrade;
    // this.grade = grade;
}

// addResults () {

// }  
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.export = AppView;

var AppView = function AppView() {
    _classCallCheck(this, AppView);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.groups = [];
        this.settings = [];
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
            console.log('started');
            // newView
            // new Controller
        }
    }]);

    return App;
}();

module.exports = App;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.export = Group;

var Group = function () {
    function Group(name, direction) {
        _classCallCheck(this, Group);

        this.name = name; // string
        this.direction = direction; // string
    }

    _createClass(Group, [{
        key: 'addTestingSession',
        value: function addTestingSession() {}
    }, {
        key: 'addTest',
        value: function addTest() {}
    }, {
        key: 'addFilter',
        value: function addFilter() {}
    }]);

    return Group;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.export = GroupView;

var GroupView = function GroupView() {
    _classCallCheck(this, GroupView);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.export = GroupController;

var GroupController = function GroupController() {
    _classCallCheck(this, GroupController);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.export = Settings;

var Settings = function () {
    function Settings() {
        _classCallCheck(this, Settings);

        this.directionList = []; // string
    }

    _createClass(Settings, [{
        key: 'addDirection',
        value: function addDirection(directionName) {
            this.testList.push(new Direction(directionName));
        }
    }]);

    return Settings;
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.export = SettingsView;

var SettingsView = function SettingsView() {
    _classCallCheck(this, SettingsView);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.export = SettingsController;

var SettingsController = function SettingsController() {
    _classCallCheck(this, SettingsController);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmVhMTk2NWY3Y2EwZDgwZTNlMjEiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAvTW9kZWwvRGlyZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwL01vZGVsL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC9Nb2RlbC9UZXN0LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwL1ZpZXcvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvTW9kZWwvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJEaXJlY3Rpb24iLCJyZXF1aXJlIiwiRmlsdGVyIiwiVGVzdCIsIkFwcFZpZXciLCJBcHAiLCJHcm91cHMiLCJHcm91cFZpZXciLCJHcm91cENvbnRyb2xsZXIiLCJTZXR0aW5ncyIsIlNldHRpbmdzVmlldyIsIlNldHRpbmdzQ29udHJvbGxlciIsImFwcCIsInN0YXJ0IiwibW9kdWxlIiwiZXhwb3J0IiwiZGlyZWN0aW9uTmFtZSIsInRlc3RMaXN0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwicHVzaCIsInRlc3RzIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJuYW1lIiwibWF4R3JhZGUiLCJncm91cHMiLCJzZXR0aW5ncyIsImNvbnNvbGUiLCJsb2ciLCJleHBvcnRzIiwiR3JvdXAiLCJkaXJlY3Rpb24iLCJkaXJlY3Rpb25MaXN0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7O0FBRUEsSUFBSUEsWUFBWSxtQkFBQUMsQ0FBUSxDQUFSLENBQWhCO0FBQUEsSUFDSUMsU0FBUyxtQkFBQUQsQ0FBUSxDQUFSLENBRGI7QUFBQSxJQUVJRSxPQUFPLG1CQUFBRixDQUFRLENBQVIsQ0FGWDtBQUFBLElBR0lHLFVBQVUsbUJBQUFILENBQVEsQ0FBUixDQUhkO0FBQUEsSUFJSUksTUFBTSxtQkFBQUosQ0FBUSxDQUFSLENBSlY7QUFBQSxJQUtJSyxTQUFTLG1CQUFBTCxDQUFRLENBQVIsQ0FMYjtBQUFBLElBTUlNLFlBQVksbUJBQUFOLENBQVEsQ0FBUixDQU5o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ZTtBQUFBO0FBRWQsQzs7Ozs7Ozs7OENDUEw7Ozs7OztBQUVBTSxPQUFPQyxNQUFQLEdBQWdCTixRQUFoQjs7SUFFTUEsUTtBQUNGLHdCQUFlO0FBQUE7O0FBQ1gsYUFBS3lCLGFBQUwsR0FBcUIsRUFBckIsQ0FEVyxDQUNjO0FBQzVCOzs7O3FDQUVhbEIsYSxFQUFlO0FBQ3pCLGlCQUFLQyxRQUFMLENBQWNHLElBQWQsQ0FBbUIsSUFBSXBCLFNBQUosQ0FBY2dCLGFBQWQsQ0FBbkI7QUFDSDs7Ozs7Ozs7Ozs7OzhDQ1hMOzs7O0FBRUFGLE9BQU9DLE1BQVAsR0FBZ0JMLFlBQWhCOztJQUVNQSxZLEdBQ0Ysd0JBQWU7QUFBQTtBQUVkLEM7Ozs7Ozs7OzhDQ1BMOzs7O0FBRUFJLE9BQU9DLE1BQVAsR0FBZ0JKLGtCQUFoQjs7SUFFTUEsa0IsR0FDRiw4QkFBZTtBQUFBO0FBRWQsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZWExOTY1ZjdjYTBkODBlM2UyMSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmxldCBEaXJlY3Rpb24gPSByZXF1aXJlKCcuL0FwcC9Nb2RlbC9EaXJlY3Rpb24uanMnKSxcbiAgICBGaWx0ZXIgPSByZXF1aXJlKCcuL0FwcC9Nb2RlbC9GaWx0ZXIuanMnKSxcbiAgICBUZXN0ID0gcmVxdWlyZSgnLi9BcHAvTW9kZWwvVGVzdC5qcycpLFxuICAgIEFwcFZpZXcgPSByZXF1aXJlKCcuL0FwcC9WaWV3L0FwcFZpZXcuanMnKSxcbiAgICBBcHAgPSByZXF1aXJlKCcuL0FwcC9BcHAuanMnKSxcbiAgICBHcm91cHMgPSByZXF1aXJlKCcuL0dyb3Vwcy9Nb2RlbC9Hcm91cC5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXG4gICAgU2V0dGluZ3MgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1NldHRpbmdzLmpzJyksXG4gICAgU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcycpLFxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyk7XG5cblxuICAgIC8vRW50cnkgcG9pbnRcbiAgICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuICAgIGFwcC5zdGFydCgpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydCA9IERpcmVjdGlvbjtcblxuY2xhc3MgRGlyZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbk5hbWUgPSBkaXJlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnRlc3RMaXN0ID0gW107IC8vIFsnRW5nMScsICdFbmdsMicsIOKApl1cbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW107ICAvLyBbJ2ZpbHRlcjEnLCAnZmlsdGVyMicsIOKApl0gXG4gICAgfVxuXG4gICAgYWRkVGVzdCAodGVzdE5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIH1cblxuICAgIGRlbGV0ZVRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgZGVsZXRlRmlsdGVyICgpIHtcblxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC9Nb2RlbC9EaXJlY3Rpb24uanMiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnQgPSBGaWx0ZXI7XG5cbmNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzOyAvLyBhcnJheVxuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjsgLy8gc3RyaW5nXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5ncmFkZSA9IGdyYWRlOyAvLyBudW1iZXJcbiAgICB9XG5cbi8vIGFkZFRlc3QsIGNoYW5nZUFjdGlvbiwgY2hhbmdlQ29uZGl0aW9uLCBjaGFuZ2VHcmFkZVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAvTW9kZWwvRmlsdGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0ID0gVGVzdDtcblxuY2xhc3MgVGVzdCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XG4gICAgICAgIC8vIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG5cbiAgICAvLyBhZGRSZXN1bHRzICgpIHtcblxuICAgIC8vIH0gIFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAvTW9kZWwvVGVzdC5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydCA9IEFwcFZpZXc7IFxuXG5jbGFzcyBBcHBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAvVmlldy9BcHBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IFtdO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdGFydGVkJyk7XG4gICAgICAgIC8vIG5ld1ZpZXdcbiAgICAgICAgLy8gbmV3IENvbnRyb2xsZXJcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0ID0gR3JvdXA7XG5cbmNsYXNzIEdyb3VwIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7IC8vIHN0cmluZ1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjsgLy8gc3RyaW5nXG4gICAgfVxuXG4gICAgYWRkVGVzdGluZ1Nlc3Npb24gKCkge1xuXG4gICAgfVxuXG4gICAgYWRkVGVzdCAoKSB7XG5cbiAgICB9XG5cbiAgICBhZGRGaWx0ZXIgKCkge1xuXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0ID0gR3JvdXBWaWV3O1xuXG5jbGFzcyBHcm91cFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0ID0gR3JvdXBDb250cm9sbGVyO1xuXG5jbGFzcyBHcm91cENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzO1xuXG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbXTsgLy8gc3RyaW5nXG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uIChkaXJlY3Rpb25OYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgRGlyZWN0aW9uKGRpcmVjdGlvbk5hbWUpKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5ncy5qcyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzVmlldztcblxuY2xhc3MgU2V0dGluZ3NWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==