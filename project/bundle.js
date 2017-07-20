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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppView = function AppView() {
    _classCallCheck(this, AppView);
};

module.exports = AppView;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupView = __webpack_require__(3);

var AppController = function () {
    function AppController(groups) {
        _classCallCheck(this, AppController);

        this.groups = groups;
        this.showAllGroups();
    }

    _createClass(AppController, [{
        key: 'showAllGroups',
        value: function showAllGroups() {
            this.groups.forEach(function (group) {
                var groupView = new GroupView();

                groupView.setGroup(group);
                groupView.renderGroup();
            });
        }
    }]);

    return AppController;
}();

module.exports = AppController;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupView = function () {
    function GroupView() {
        _classCallCheck(this, GroupView);

        this.group = '';
    }

    _createClass(GroupView, [{
        key: 'setGroup',
        value: function setGroup(group) {
            var groupTitle = group.name;

            this.group = this.generateTpl(groupTitle);
        }
    }, {
        key: 'generateTpl',
        value: function generateTpl(title) {
            return '<div class="group">\n                    <h2 class="group-title">' + title + '</h2>\n                    <div>\n                        <button class="btn">format added</button>\n                    </div>\n                </div>';
        }
    }, {
        key: 'renderGroup',
        value: function renderGroup() {
            var groupsBlock = document.querySelector('.group_wrapper');

            groupsBlock.insertAdjacentHTML('beforeend', this.group);
        }
    }]);

    return GroupView;
}();

module.exports = GroupView;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var Direction = __webpack_require__(5),
        Filter = __webpack_require__(6),
        Test = __webpack_require__(7),
        AppView = __webpack_require__(1),
        AppController = __webpack_require__(2),
        App = __webpack_require__(8),
        Group = __webpack_require__(9),
        GroupView = __webpack_require__(3),
        GroupController = __webpack_require__(10),
        Settings = __webpack_require__(11),
        SettingsView = __webpack_require__(12),
        SettingsController = __webpack_require__(13);

    //Entry point
    var testData = {
        groups: [{
            direction: 'ui',
            name: 'dp-117-js'
        }, {
            direction: 'go',
            name: 'dp-123-go'
        }, {
            direction: 'php',
            name: 'dp-127-php'
        }],
        settings: [{
            direction: 'ui',
            tests: ['Eng1', 'Eng2', 'JS Core', 'Essay'],
            filters: []
        }]
    };

    var app = new App();

    launchTestData();

    app.start();

    function launchTestData() {
        app.setGroups(testData.groups);
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

module.export = Direction;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function Filter(tests, action, condition, grade) {
    _classCallCheck(this, Filter);

    this.tests = tests; // array
    this.action = action; // string
    this.condition = condition; // string
    this.grade = grade; // number
}

// addTest, changeAction, changeCondition, changeGrade
;

module.export = Filter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function Test(name, maxGrade, grade) {
    _classCallCheck(this, Test);

    this.name = name;
    // this.maxGrade = maxGrade;
    // this.grade = grade;
}

// addResults () {

// }  
;

module.export = Test;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppView = __webpack_require__(1),
    AppController = __webpack_require__(2);

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.groups = [];
        this.settings = [];
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
            var appView = new AppView(),
                appController = new AppController(this.groups);
        }
    }, {
        key: 'setGroups',
        value: function setGroups(groups) {
            this.groups = groups;
        }
    }, {
        key: 'setGroup',
        value: function setGroup(groups) {
            this.groups = groups;
        }
    }]);

    return App;
}();

module.exports = App;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

module.export = Group;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = function GroupController() {
    _classCallCheck(this, GroupController);
};

module.export = GroupController;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

module.export = Settings;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsView = function SettingsView() {
    _classCallCheck(this, SettingsView);
};

module.export = SettingsView;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsController = function SettingsController() {
    _classCallCheck(this, SettingsController);
};

module.export = SettingsController;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWRkYTZiM2E2NTM1MmE1ZjA2ZmYiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC9WaWV3L0FwcFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAvQXBwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAvTW9kZWwvRGlyZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwL01vZGVsL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC9Nb2RlbC9UZXN0LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwL01vZGVsL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkFwcFZpZXciLCJtb2R1bGUiLCJleHBvcnRzIiwiR3JvdXBWaWV3IiwicmVxdWlyZSIsIkFwcENvbnRyb2xsZXIiLCJncm91cHMiLCJzaG93QWxsR3JvdXBzIiwiZm9yRWFjaCIsImdyb3VwIiwiZ3JvdXBWaWV3Iiwic2V0R3JvdXAiLCJyZW5kZXJHcm91cCIsImdyb3VwVGl0bGUiLCJuYW1lIiwiZ2VuZXJhdGVUcGwiLCJ0aXRsZSIsImdyb3Vwc0Jsb2NrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJEaXJlY3Rpb24iLCJGaWx0ZXIiLCJUZXN0IiwiQXBwIiwiR3JvdXAiLCJHcm91cENvbnRyb2xsZXIiLCJTZXR0aW5ncyIsIlNldHRpbmdzVmlldyIsIlNldHRpbmdzQ29udHJvbGxlciIsInRlc3REYXRhIiwiZGlyZWN0aW9uIiwic2V0dGluZ3MiLCJ0ZXN0cyIsImZpbHRlcnMiLCJhcHAiLCJsYXVuY2hUZXN0RGF0YSIsInN0YXJ0Iiwic2V0R3JvdXBzIiwiZGlyZWN0aW9uTmFtZSIsInRlc3RMaXN0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwicHVzaCIsImFjdGlvbiIsImNvbmRpdGlvbiIsImdyYWRlIiwiZXhwb3J0IiwibWF4R3JhZGUiLCJhcHBWaWV3IiwiYXBwQ29udHJvbGxlciIsImRpcmVjdGlvbkxpc3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtB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O0FBQzVCOzs7O3FDQUVhWixhLEVBQWU7QUFDekIsaUJBQUtDLFFBQUwsQ0FBY0csSUFBZCxDQUFtQixJQUFJdEIsU0FBSixDQUFja0IsYUFBZCxDQUFuQjtBQUNIOzs7Ozs7QUFFTHhDLE9BQU9nRCxNQUFQLEdBQWdCcEIsUUFBaEIsQzs7Ozs7Ozs7OENDWEE7Ozs7SUFFTUMsWSxHQUNGLHdCQUFlO0FBQUE7QUFFZCxDOztBQUVMN0IsT0FBT2dELE1BQVAsR0FBZ0JuQixZQUFoQixDOzs7Ozs7Ozs4Q0NQQTs7OztJQUVNQyxrQixHQUNGLDhCQUFlO0FBQUE7QUFFZCxDOztBQUVMOUIsT0FBT2dELE1BQVAsR0FBZ0JsQixrQkFBaEIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5ZGRhNmIzYTY1MzUyYTVmMDZmZiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBBcHBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXBwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC9WaWV3L0FwcFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyk7XHJcblxyXG5jbGFzcyBBcHBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cHMpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcclxuICAgICAgICB0aGlzLnNob3dBbGxHcm91cHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93QWxsR3JvdXBzICgpIHtcclxuICAgICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcclxuICAgICAgICAgICAgZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBcHBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwL0FwcENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBHcm91cFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSAnJztcclxuICAgIH1cclxuICAgIHNldEdyb3VwIChncm91cCkge1xyXG4gICAgICAgIGxldCBncm91cFRpdGxlID0gZ3JvdXAubmFtZTtcclxuXHJcbiAgICAgICAgdGhpcy5ncm91cCA9IHRoaXMuZ2VuZXJhdGVUcGwoZ3JvdXBUaXRsZSk7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVRwbCAodGl0bGUpIHtcclxuICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbiAgICByZW5kZXJHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwX3dyYXBwZXInKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3Vwc0Jsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5ncm91cCk7XHJcbiAgICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuICAgIGxldCBEaXJlY3Rpb24gPSByZXF1aXJlKCcuL0FwcC9Nb2RlbC9EaXJlY3Rpb24uanMnKSxcclxuICAgICAgICBGaWx0ZXIgPSByZXF1aXJlKCcuL0FwcC9Nb2RlbC9GaWx0ZXIuanMnKSxcclxuICAgICAgICBUZXN0ID0gcmVxdWlyZSgnLi9BcHAvTW9kZWwvVGVzdC5qcycpLFxyXG4gICAgICAgIEFwcFZpZXcgPSByZXF1aXJlKCcuL0FwcC9WaWV3L0FwcFZpZXcuanMnKSxcclxuICAgICAgICBBcHBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9BcHAvQXBwQ29udHJvbGxlci5qcycpLFxyXG4gICAgICAgIEFwcCA9IHJlcXVpcmUoJy4vQXBwL01vZGVsL0FwcC5qcycpLFxyXG4gICAgICAgIEdyb3VwID0gcmVxdWlyZSgnLi9Hcm91cHMvTW9kZWwvR3JvdXAuanMnKSxcclxuICAgICAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxyXG4gICAgICAgIFNldHRpbmdzID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5ncy5qcycpLFxyXG4gICAgICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgICAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpO1xyXG5cclxuICAgIC8vRW50cnkgcG9pbnRcclxuICAgIGxldCB0ZXN0RGF0YSA9IHtcclxuICAgICAgICBncm91cHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndWknLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RwLTExNy1qcydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAnZ28nLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RwLTEyMy1nbydcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAncGhwJyxcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdkcC0xMjctcGhwJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZXR0aW5nczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnSlMgQ29yZScsICdFc3NheSddLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyczogW11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcblxyXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbiAgICBsYXVuY2hUZXN0RGF0YSgpO1xyXG5cclxuICAgIGFwcC5zdGFydCgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxhdW5jaFRlc3REYXRhICgpIHtcclxuICAgICAgICBhcHAuc2V0R3JvdXBzKHRlc3REYXRhLmdyb3Vwcyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBEaXJlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IgKGRpcmVjdGlvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbk5hbWUgPSBkaXJlY3Rpb25OYW1lO1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBbXTsgLy8gWydFbmcxJywgJ0VuZ2wyJywg4oCmXVxyXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFtdOyAgLy8gWydmaWx0ZXIxJywgJ2ZpbHRlcjInLCDigKZdIFxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3QgKHRlc3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGVzdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbHRlciAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnQgPSBEaXJlY3Rpb247XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAvTW9kZWwvRGlyZWN0aW9uLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgRmlsdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzOyAvLyBhcnJheVxyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uOyAvLyBzdHJpbmdcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjsgLy8gc3RyaW5nXHJcbiAgICAgICAgdGhpcy5ncmFkZSA9IGdyYWRlOyAvLyBudW1iZXJcclxuICAgIH1cclxuXHJcbi8vIGFkZFRlc3QsIGNoYW5nZUFjdGlvbiwgY2hhbmdlQ29uZGl0aW9uLCBjaGFuZ2VHcmFkZVxyXG59XHJcbm1vZHVsZS5leHBvcnQgPSBGaWx0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAvTW9kZWwvRmlsdGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgVGVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbWF4R3JhZGUsIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XHJcbiAgICAgICAgLy8gdGhpcy5ncmFkZSA9IGdyYWRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZFJlc3VsdHMgKCkge1xyXG5cclxuICAgIC8vIH0gIFxyXG59XHJcbm1vZHVsZS5leHBvcnQgPSBUZXN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC9Nb2RlbC9UZXN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IEFwcFZpZXcgPSByZXF1aXJlKCcuLi9WaWV3L0FwcFZpZXcuanMnKSxcclxuICAgIEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuLi9BcHBDb250cm9sbGVyLmpzJyk7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzID0gW107XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IFtdO1xyXG4gICAgfVxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBhcHBWaWV3ID0gbmV3IEFwcFZpZXcoKSxcclxuICAgICAgICAgICAgYXBwQ29udHJvbGxlciA9IG5ldyBBcHBDb250cm9sbGVyKHRoaXMuZ3JvdXBzKTtcclxuICAgIH1cclxuICAgIHNldEdyb3VwcyAoZ3JvdXBzKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XHJcbiAgICB9XHJcbiAgICBzZXRHcm91cCAoZ3JvdXBzKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC9Nb2RlbC9BcHAuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBHcm91cCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTsgLy8gc3RyaW5nXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247IC8vIHN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlciAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnQgPSBHcm91cDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydCA9IEdyb3VwQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBTZXR0aW5ncyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gW107IC8vIHN0cmluZ1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERpcmVjdGlvbiAoZGlyZWN0aW9uTmFtZSkge1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgRGlyZWN0aW9uKGRpcmVjdGlvbk5hbWUpKTtcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5ncy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFNldHRpbmdzVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==