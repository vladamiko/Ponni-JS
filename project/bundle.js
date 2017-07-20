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


document.addEventListener('DOMContentLoaded', init);

function init() {
    var Direction = __webpack_require__(2),
        Filter = __webpack_require__(3),
        Test = __webpack_require__(4),
        AppView = __webpack_require__(5),
        AppController = __webpack_require__(6),
        App = __webpack_require__(7),
        Group = __webpack_require__(8),
        GroupView = __webpack_require__(9),
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

    function launchTestData() {
        app.setGroups(testData.groups);
    }
    launchTestData();

    app.start();
}

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppView = function AppView() {
    _classCallCheck(this, AppView);
};

module.exports = AppView;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupView = __webpack_require__(9);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppView = __webpack_require__(5),
    AppController = __webpack_require__(6);

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
    }]);

    return App;
}();

module.exports = App;

/***/ }),
/* 8 */
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
/* 9 */
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
            //getTemplate
            //set attr to template
            //convert tpl to dom
            //addEventListener
            var groupsBlock = document.querySelector('.group_wrapper');

            groupsBlock.insertAdjacentHTML('beforeend', this.group);
        }
    }]);

    return GroupView;
}();

module.exports = GroupView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzM2NGYwMjA4MjMyM2UxMTgwOTYiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAvTW9kZWwvRGlyZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwL01vZGVsL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC9Nb2RlbC9UZXN0LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwL1ZpZXcvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwL01vZGVsL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJEaXJlY3Rpb24iLCJyZXF1aXJlIiwiRmlsdGVyIiwiVGVzdCIsIkFwcFZpZXciLCJBcHBDb250cm9sbGVyIiwiQXBwIiwiR3JvdXAiLCJHcm91cFZpZXciLCJHcm91cENvbnRyb2xsZXIiLCJTZXR0aW5ncyIsIlNldHRpbmdzVmlldyIsIlNldHRpbmdzQ29udHJvbGxlciIsInRlc3REYXRhIiwiZ3JvdXBzIiwiZGlyZWN0aW9uIiwibmFtZSIsInNldHRpbmdzIiwidGVzdHMiLCJmaWx0ZXJzIiwiYXBwIiwibGF1bmNoVGVzdERhdGEiLCJzZXRHcm91cHMiLCJzdGFydCIsImRpcmVjdGlvbk5hbWUiLCJ0ZXN0TGlzdCIsImZpbHRlckxpc3QiLCJ0ZXN0TmFtZSIsInB1c2giLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsIm1vZHVsZSIsImV4cG9ydCIsIm1heEdyYWRlIiwiZXhwb3J0cyIsInNob3dBbGxHcm91cHMiLCJmb3JFYWNoIiwiZ3JvdXAiLCJncm91cFZpZXciLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiYXBwVmlldyIsImFwcENvbnRyb2xsZXIiLCJncm91cFRpdGxlIiwiZ2VuZXJhdGVUcGwiLCJ0aXRsZSIsImdyb3Vwc0Jsb2NrIiwicXVlcnlTZWxlY3RvciIsImluc2VydEFkamFjZW50SFRNTCIsImRpcmVjdGlvbkxpc3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtB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Q0FBbUIsSUFBSTVCLFNBQUosQ0FBY3dCLGFBQWQsQ0FBbkI7QUFDSDs7Ozs7O0FBRUxRLE9BQU9DLE1BQVAsR0FBZ0J2QixRQUFoQixDOzs7Ozs7Ozs4Q0NYQTs7OztJQUVNQyxZLEdBQ0Ysd0JBQWU7QUFBQTtBQUVkLEM7O0FBRUxxQixPQUFPQyxNQUFQLEdBQWdCdEIsWUFBaEIsQzs7Ozs7Ozs7OENDUEE7Ozs7SUFFTUMsa0IsR0FDRiw4QkFBZTtBQUFBO0FBRWQsQzs7QUFFTG9CLE9BQU9DLE1BQVAsR0FBZ0JyQixrQkFBaEIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MzY0ZjAyMDgyMzIzZTExODA5NiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gICAgbGV0IERpcmVjdGlvbiA9IHJlcXVpcmUoJy4vQXBwL01vZGVsL0RpcmVjdGlvbi5qcycpLFxuICAgICAgICBGaWx0ZXIgPSByZXF1aXJlKCcuL0FwcC9Nb2RlbC9GaWx0ZXIuanMnKSxcbiAgICAgICAgVGVzdCA9IHJlcXVpcmUoJy4vQXBwL01vZGVsL1Rlc3QuanMnKSxcbiAgICAgICAgQXBwVmlldyA9IHJlcXVpcmUoJy4vQXBwL1ZpZXcvQXBwVmlldy5qcycpLFxuICAgICAgICBBcHBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9BcHAvQXBwQ29udHJvbGxlci5qcycpLFxuICAgICAgICBBcHAgPSByZXF1aXJlKCcuL0FwcC9Nb2RlbC9BcHAuanMnKSxcbiAgICAgICAgR3JvdXAgPSByZXF1aXJlKCcuL0dyb3Vwcy9Nb2RlbC9Hcm91cC5qcycpLFxuICAgICAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgICAgICBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcbiAgICAgICAgU2V0dGluZ3MgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1NldHRpbmdzLmpzJyksXG4gICAgICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMnKSxcbiAgICAgICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKTtcblxuXG4gICAgLy9FbnRyeSBwb2ludFxuICAgIGxldCB0ZXN0RGF0YSA9IHtcbiAgICAgICAgZ3JvdXBzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiAndWknLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkcC0xMTctanMnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ2dvJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnZHAtMTIzLWdvJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdwaHAnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkcC0xMjctcGhwJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzZXR0aW5nczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcbiAgICAgICAgICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnSlMgQ29yZScsICdFc3NheSddLFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcblxuICAgIGZ1bmN0aW9uIGxhdW5jaFRlc3REYXRhICgpIHtcbiAgICAgICAgYXBwLnNldEdyb3Vwcyh0ZXN0RGF0YS5ncm91cHMpO1xuICAgIH1cbiAgICBsYXVuY2hUZXN0RGF0YSgpO1xuXG4gICAgYXBwLnN0YXJ0KCk7XG59XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIERpcmVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IgKGRpcmVjdGlvbk5hbWUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25OYW1lID0gZGlyZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFtdOyAvLyBbJ0VuZzEnLCAnRW5nbDInLCDigKZdXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFtdOyAgLy8gWydmaWx0ZXIxJywgJ2ZpbHRlcjInLCDigKZdIFxuICAgIH1cblxuICAgIGFkZFRlc3QgKHRlc3ROYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xuICAgIH1cblxuICAgIGFkZEZpbHRlciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLmZpbHRlckxpc3QucHVzaChuZXcgRmlsdGVyKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpKTtcbiAgICB9XG5cbiAgICBkZWxldGVUZXN0ICgpIHtcblxuICAgIH1cblxuICAgIGRlbGV0ZUZpbHRlciAoKSB7XG5cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gRGlyZWN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwL01vZGVsL0RpcmVjdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLnRlc3RzID0gdGVzdHM7IC8vIGFycmF5XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247IC8vIHN0cmluZ1xuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7IC8vIG51bWJlclxuICAgIH1cblxuLy8gYWRkVGVzdCwgY2hhbmdlQWN0aW9uLCBjaGFuZ2VDb25kaXRpb24sIGNoYW5nZUdyYWRlXG59XG5tb2R1bGUuZXhwb3J0ID0gRmlsdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwL01vZGVsL0ZpbHRlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVzdCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XG4gICAgICAgIC8vIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG5cbiAgICAvLyBhZGRSZXN1bHRzICgpIHtcblxuICAgIC8vIH0gIFxufVxubW9kdWxlLmV4cG9ydCA9IFRlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC9Nb2RlbC9UZXN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBBcHBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEFwcFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAvVmlldy9BcHBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyk7XG5cbmNsYXNzIEFwcENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChncm91cHMpIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XG4gICAgICAgIHRoaXMuc2hvd0FsbEdyb3VwcygpO1xuICAgIH1cblxuICAgIHNob3dBbGxHcm91cHMgKCkge1xuICAgICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcblxuICAgICAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcbiAgICAgICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwL0FwcENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBBcHBWaWV3ID0gcmVxdWlyZSgnLi4vVmlldy9BcHBWaWV3LmpzJyksXG4gICAgQXBwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4uL0FwcENvbnRyb2xsZXIuanMnKTtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gW107XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBbXTtcbiAgICB9XG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgYXBwVmlldyA9IG5ldyBBcHBWaWV3KCksXG4gICAgICAgICAgICBhcHBDb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIodGhpcy5ncm91cHMpO1xuICAgIH1cbiAgICBzZXRHcm91cHMgKGdyb3Vwcykge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAvTW9kZWwvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247IC8vIHN0cmluZ1xuICAgIH1cblxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcblxuICAgIH1cblxuICAgIGFkZFRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICgpIHtcblxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBHcm91cDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXAgPSAnJztcbiAgICB9XG4gICAgc2V0R3JvdXAgKGdyb3VwKSB7XG4gICAgICAgIGxldCBncm91cFRpdGxlID0gZ3JvdXAubmFtZTtcblxuICAgICAgICB0aGlzLmdyb3VwID0gdGhpcy5nZW5lcmF0ZVRwbChncm91cFRpdGxlKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVUcGwgKHRpdGxlKSB7XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHt0aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPmZvcm1hdCBhZGRlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIH1cbiAgICByZW5kZXJHcm91cCAoKSB7XG4gICAgICAgIC8vZ2V0VGVtcGxhdGVcbiAgICAgICAgLy9zZXQgYXR0ciB0byB0ZW1wbGF0ZVxuICAgICAgICAvL2NvbnZlcnQgdHBsIHRvIGRvbVxuICAgICAgICAvL2FkZEV2ZW50TGlzdGVuZXJcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwX3dyYXBwZXInKTtcblxuICAgICAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmdyb3VwKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBHcm91cENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbXTsgLy8gc3RyaW5nXG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uIChkaXJlY3Rpb25OYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgRGlyZWN0aW9uKGRpcmVjdGlvbk5hbWUpKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5ncy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2V0dGluZ3NWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBTZXR0aW5nc1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBTZXR0aW5nc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9