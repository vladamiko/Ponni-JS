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

        this.groups = [];
    }

    _createClass(GroupView, [{
        key: 'setGroup',
        value: function setGroup(group) {
            var groupTitle = group.name;

            this.groups.push(this.generateTpl(groupTitle));
        }
    }, {
        key: 'generateTpl',
        value: function generateTpl(title) {
            return '<div class="group">\n                    <h2>' + title + '</h2>\n                    <div>\n                        <button class="btn">format added</button>\n                    </div>\n                </div>';
        }
    }, {
        key: 'renderGroup',
        value: function renderGroup() {
            //getTemplate
            //set attr to template
            //convert tpl to dom
            //addEventListener
            var groupsBlock = document.querySelector('#group');
            console.log(groupsBlock);

            groupsBlock.insertAdjacentHTML('beforeend', this.groups[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODBhY2Y5ZTQzODdiY2E0Yzg3ZWUiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAvTW9kZWwvRGlyZWN0aW9uLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwL01vZGVsL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC9Nb2RlbC9UZXN0LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwL1ZpZXcvQXBwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC9BcHBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwL01vZGVsL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJEaXJlY3Rpb24iLCJyZXF1aXJlIiwiRmlsdGVyIiwiVGVzdCIsIkFwcFZpZXciLCJBcHBDb250cm9sbGVyIiwiQXBwIiwiR3JvdXAiLCJHcm91cFZpZXciLCJHcm91cENvbnRyb2xsZXIiLCJTZXR0aW5ncyIsIlNldHRpbmdzVmlldyIsIlNldHRpbmdzQ29udHJvbGxlciIsInRlc3REYXRhIiwiZ3JvdXBzIiwiZGlyZWN0aW9uIiwibmFtZSIsInNldHRpbmdzIiwidGVzdHMiLCJmaWx0ZXJzIiwiYXBwIiwibGF1bmNoVGVzdERhdGEiLCJzZXRHcm91cHMiLCJzdGFydCIsImRpcmVjdGlvbk5hbWUiLCJ0ZXN0TGlzdCIsImZpbHRlckxpc3QiLCJ0ZXN0TmFtZSIsInB1c2giLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsIm1vZHVsZSIsImV4cG9ydCIsIm1heEdyYWRlIiwiZXhwb3J0cyIsInNob3dBbGxHcm91cHMiLCJmb3JFYWNoIiwiZ3JvdXAiLCJncm91cFZpZXciLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiYXBwVmlldyIsImFwcENvbnRyb2xsZXIiLCJncm91cFRpdGxlIiwiZ2VuZXJhdGVUcGwiLCJ0aXRsZSIsImdyb3Vwc0Jsb2NrIiwicXVlcnlTZWxlY3RvciIsImNvbnNvbGUiLCJsb2ciLCJpbnNlcnRBZGphY2VudEhUTUwiLCJkaXJlY3Rpb25MaXN0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7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QUFxQixFQUFyQixDQURXLENBQ2M7QUFDNUI7Ozs7cUNBRWE1QixhLEVBQWU7QUFDekIsaUJBQUtDLFFBQUwsQ0FBY0csSUFBZCxDQUFtQixJQUFJNUIsU0FBSixDQUFjd0IsYUFBZCxDQUFuQjtBQUNIOzs7Ozs7QUFFTFEsT0FBT0MsTUFBUCxHQUFnQnZCLFFBQWhCLEM7Ozs7Ozs7OzhDQ1hBOzs7O0lBRU1DLFksR0FDRix3QkFBZTtBQUFBO0FBRWQsQzs7QUFFTHFCLE9BQU9DLE1BQVAsR0FBZ0J0QixZQUFoQixDOzs7Ozs7Ozs4Q0NQQTs7OztJQUVNQyxrQixHQUNGLDhCQUFlO0FBQUE7QUFFZCxDOztBQUVMb0IsT0FBT0MsTUFBUCxHQUFnQnJCLGtCQUFoQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgwYWNmOWU0Mzg3YmNhNGM4N2VlIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0ICgpIHtcbiAgICBsZXQgRGlyZWN0aW9uID0gcmVxdWlyZSgnLi9BcHAvTW9kZWwvRGlyZWN0aW9uLmpzJyksXG4gICAgICAgIEZpbHRlciA9IHJlcXVpcmUoJy4vQXBwL01vZGVsL0ZpbHRlci5qcycpLFxuICAgICAgICBUZXN0ID0gcmVxdWlyZSgnLi9BcHAvTW9kZWwvVGVzdC5qcycpLFxuICAgICAgICBBcHBWaWV3ID0gcmVxdWlyZSgnLi9BcHAvVmlldy9BcHBWaWV3LmpzJyksXG4gICAgICAgIEFwcENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0FwcC9BcHBDb250cm9sbGVyLmpzJyksXG4gICAgICAgIEFwcCA9IHJlcXVpcmUoJy4vQXBwL01vZGVsL0FwcC5qcycpLFxuICAgICAgICBHcm91cCA9IHJlcXVpcmUoJy4vR3JvdXBzL01vZGVsL0dyb3VwLmpzJyksXG4gICAgICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgICAgICBTZXR0aW5ncyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3MuanMnKSxcbiAgICAgICAgU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcycpLFxuICAgICAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpO1xuXG5cbiAgICAvL0VudHJ5IHBvaW50XG4gICAgbGV0IHRlc3REYXRhID0ge1xuICAgICAgICBncm91cHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RwLTExNy1qcydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdnbycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RwLTEyMy1nbydcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246ICdwaHAnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdkcC0xMjctcGhwJ1xuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzZXR0aW5nczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcbiAgICAgICAgICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnSlMgQ29yZScsICdFc3NheSddLFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcblxuICAgIGZ1bmN0aW9uIGxhdW5jaFRlc3REYXRhICgpIHtcbiAgICAgICAgYXBwLnNldEdyb3Vwcyh0ZXN0RGF0YS5ncm91cHMpO1xuICAgIH1cbiAgICBsYXVuY2hUZXN0RGF0YSgpO1xuXG4gICAgYXBwLnN0YXJ0KCk7XG59XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIERpcmVjdGlvbiB7XG4gICAgY29uc3RydWN0b3IgKGRpcmVjdGlvbk5hbWUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25OYW1lID0gZGlyZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFtdOyAvLyBbJ0VuZzEnLCAnRW5nbDInLCDigKZdXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFtdOyAgLy8gWydmaWx0ZXIxJywgJ2ZpbHRlcjInLCDigKZdIFxuICAgIH1cblxuICAgIGFkZFRlc3QgKHRlc3ROYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xuICAgIH1cblxuICAgIGFkZEZpbHRlciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLmZpbHRlckxpc3QucHVzaChuZXcgRmlsdGVyKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpKTtcbiAgICB9XG5cbiAgICBkZWxldGVUZXN0ICgpIHtcblxuICAgIH1cblxuICAgIGRlbGV0ZUZpbHRlciAoKSB7XG5cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gRGlyZWN0aW9uO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwL01vZGVsL0RpcmVjdGlvbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLnRlc3RzID0gdGVzdHM7IC8vIGFycmF5XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247IC8vIHN0cmluZ1xuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7IC8vIG51bWJlclxuICAgIH1cblxuLy8gYWRkVGVzdCwgY2hhbmdlQWN0aW9uLCBjaGFuZ2VDb25kaXRpb24sIGNoYW5nZUdyYWRlXG59XG5tb2R1bGUuZXhwb3J0ID0gRmlsdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwL01vZGVsL0ZpbHRlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVzdCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XG4gICAgICAgIC8vIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG5cbiAgICAvLyBhZGRSZXN1bHRzICgpIHtcblxuICAgIC8vIH0gIFxufVxubW9kdWxlLmV4cG9ydCA9IFRlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC9Nb2RlbC9UZXN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBBcHBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG5cbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEFwcFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAvVmlldy9BcHBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyk7XG5cbmNsYXNzIEFwcENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChncm91cHMpIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XG4gICAgICAgIHRoaXMuc2hvd0FsbEdyb3VwcygpO1xuICAgIH1cblxuICAgIHNob3dBbGxHcm91cHMgKCkge1xuICAgICAgICB0aGlzLmdyb3Vwcy5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcblxuICAgICAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcbiAgICAgICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwL0FwcENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBBcHBWaWV3ID0gcmVxdWlyZSgnLi4vVmlldy9BcHBWaWV3LmpzJyksXG4gICAgQXBwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4uL0FwcENvbnRyb2xsZXIuanMnKTtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gW107XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBbXTtcbiAgICB9XG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgYXBwVmlldyA9IG5ldyBBcHBWaWV3KCksXG4gICAgICAgICAgICBhcHBDb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIodGhpcy5ncm91cHMpO1xuICAgIH1cbiAgICBzZXRHcm91cHMgKGdyb3Vwcykge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAvTW9kZWwvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247IC8vIHN0cmluZ1xuICAgIH1cblxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcblxuICAgIH1cblxuICAgIGFkZFRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICgpIHtcblxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBHcm91cDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gW107XG4gICAgfVxuICAgIHNldEdyb3VwIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBUaXRsZSA9IGdyb3VwLm5hbWU7XG5cbiAgICAgICAgdGhpcy5ncm91cHMucHVzaCh0aGlzLmdlbmVyYXRlVHBsKGdyb3VwVGl0bGUpKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVUcGwgKHRpdGxlKSB7XG4gICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj4ke3RpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgfVxuICAgIHJlbmRlckdyb3VwICgpIHtcbiAgICAgICAgLy9nZXRUZW1wbGF0ZVxuICAgICAgICAvL3NldCBhdHRyIHRvIHRlbXBsYXRlXG4gICAgICAgIC8vY29udmVydCB0cGwgdG8gZG9tXG4gICAgICAgIC8vYWRkRXZlbnRMaXN0ZW5lclxuICAgICAgICBsZXQgZ3JvdXBzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ3JvdXAnKTtcbiAgICAgICAgY29uc29sZS5sb2coZ3JvdXBzQmxvY2spO1xuXG4gICAgICAgICAgICBncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMuZ3JvdXBzWzBdKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBHcm91cENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5ncyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbXTsgLy8gc3RyaW5nXG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uIChkaXJlY3Rpb25OYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgRGlyZWN0aW9uKGRpcmVjdGlvbk5hbWUpKTtcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5ncy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2V0dGluZ3NWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBTZXR0aW5nc1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBTZXR0aW5nc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9