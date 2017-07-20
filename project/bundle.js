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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mediator = function () {
    function Mediator() {
        _classCallCheck(this, Mediator);

        this.channels = {};
    }

    _createClass(Mediator, [{
        key: 'pub',
        value: function pub(channel) {
            if (this.channels[channel]) {
                this.channels[channel].forEach(function (fn) {
                    return fn();
                });
            }
        }
    }, {
        key: 'sub',
        value: function sub(channel, fn) {
            if (!this.channels[channel]) {
                this.channels[channel] = [];
            }

            this.channels[channel].push(fn);
        }
    }]);

    return Mediator;
}();

var mediator = new Mediator();

module.exports = mediator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var generateTpl = __webpack_require__(3),
    mediator = __webpack_require__(1);

var GroupView = function () {
    function GroupView() {
        _classCallCheck(this, GroupView);

        this.group = '';
        this.addListeners();
    }

    _createClass(GroupView, [{
        key: 'setGroup',
        value: function setGroup(group) {
            var groupTitle = group.name;

            this.group = generateTpl(groupTitle);
        }
    }, {
        key: 'renderGroup',
        value: function renderGroup() {
            var groupsBlock = document.querySelector('.group_wrapper');

            groupsBlock.insertAdjacentHTML('beforeend', this.group);
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var addGroupBtn = document.querySelector('.add-group-btn');

            addGroupBtn.addEventListener('click', function () {
                return mediator.pub('Group:added');
            });
        }
    }]);

    return GroupView;
}();

module.exports = GroupView;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function generateTpl(title) {
    return '<div class="group">\n                <h2 class="group-title">' + title + '</h2>\n                <div>\n                    <button class="btn">format added</button>\n                </div>\n            </div>';
}

module.exports = generateTpl;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupView = __webpack_require__(2),
    mediator = __webpack_require__(1);

var GroupController = function () {
    function GroupController(groups) {
        _classCallCheck(this, GroupController);

        this.groups = groups;
        this.subscribe();
    }

    _createClass(GroupController, [{
        key: 'showAllGroups',
        value: function showAllGroups() {
            this.groups.forEach(function (group) {
                var groupView = new GroupView();

                groupView.setGroup(group);
                groupView.renderGroup();
            });
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            mediator.sub('Group:added', function () {
                return console.log('openPopup');
            });
        }
    }]);

    return GroupController;
}();

module.exports = GroupController;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var DirectionModel = __webpack_require__(6),
        FilterModel = __webpack_require__(7),
        TestModel = __webpack_require__(8),
        SettingsModel = __webpack_require__(9),
        SettingsView = __webpack_require__(10),
        SettingsController = __webpack_require__(11),
        GroupModel = __webpack_require__(12),
        GroupView = __webpack_require__(2),
        generateTpl = __webpack_require__(3),
        GroupController = __webpack_require__(4),
        App = __webpack_require__(13),
        testData = __webpack_require__(14),
        Mediator = __webpack_require__(1);

    //Entry point
    var app = new App();

    app.setGroups(testData.groups);

    app.start();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirectionModel = function () {
    function DirectionModel(directionName) {
        _classCallCheck(this, DirectionModel);

        this.directionName = directionName;
        this.testList = []; // ['Eng1', 'Engl2', …]
        this.filterList = []; // ['filter1', 'filter2', …] 
    }

    _createClass(DirectionModel, [{
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

    return DirectionModel;
}();

module.export = DirectionModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterModel = function FilterModel(tests, action, condition, grade) {
    _classCallCheck(this, FilterModel);

    this.tests = tests; // array
    this.action = action; // string
    this.condition = condition; // string
    this.grade = grade; // number
}

// addTest, changeAction, changeCondition, changeGrade
;

module.export = FilterModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestModel = function TestModel(name, maxGrade, grade) {
    _classCallCheck(this, TestModel);

    this.name = name;
    // this.maxGrade = maxGrade;
    // this.grade = grade;
}

// addResults () {

// }  
;

module.export = TestModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsModel = function () {
    function SettingsModel() {
        _classCallCheck(this, SettingsModel);

        this.directionList = []; // string
    }

    _createClass(SettingsModel, [{
        key: 'addDirection',
        value: function addDirection(directionName) {
            this.testList.push(new Direction(directionName));
        }
    }]);

    return SettingsModel;
}();

module.export = SettingsModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsController = function SettingsController() {
    _classCallCheck(this, SettingsController);
};

module.export = SettingsController;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupModel = function () {
    function GroupModel(name, direction) {
        _classCallCheck(this, GroupModel);

        this.name = name; // string
        this.direction = direction; // string
    }

    _createClass(GroupModel, [{
        key: 'addTestingSession',
        value: function addTestingSession() {}
    }, {
        key: 'addTest',
        value: function addTest() {}
    }, {
        key: 'addFilter',
        value: function addFilter() {}
    }]);

    return GroupModel;
}();

module.export = GroupModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(4);

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.groups = [];
        this.settings = [];
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
            var groupController = new GroupController(this.groups);

            groupController.showAllGroups();
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = testData;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTM4MjhkYjQwNjUxMDU2ZWZkOGQiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sIm5hbWVzIjpbIk1lZGlhdG9yIiwiY2hhbm5lbHMiLCJjaGFubmVsIiwiZm9yRWFjaCIsImZuIiwicHVzaCIsIm1lZGlhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImdlbmVyYXRlVHBsIiwicmVxdWlyZSIsIkdyb3VwVmlldyIsImdyb3VwIiwiYWRkTGlzdGVuZXJzIiwiZ3JvdXBUaXRsZSIsIm5hbWUiLCJncm91cHNCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImluc2VydEFkamFjZW50SFRNTCIsImFkZEdyb3VwQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1YiIsInRpdGxlIiwiR3JvdXBDb250cm9sbGVyIiwiZ3JvdXBzIiwic3Vic2NyaWJlIiwiZ3JvdXBWaWV3Iiwic2V0R3JvdXAiLCJyZW5kZXJHcm91cCIsInN1YiIsImNvbnNvbGUiLCJsb2ciLCJpbml0IiwiRGlyZWN0aW9uTW9kZWwiLCJGaWx0ZXJNb2RlbCIsIlRlc3RNb2RlbCIsIlNldHRpbmdzTW9kZWwiLCJTZXR0aW5nc1ZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJHcm91cE1vZGVsIiwiQXBwIiwidGVzdERhdGEiLCJhcHAiLCJzZXRHcm91cHMiLCJzdGFydCIsImRpcmVjdGlvbk5hbWUiLCJ0ZXN0TGlzdCIsImZpbHRlckxpc3QiLCJ0ZXN0TmFtZSIsIlRlc3QiLCJ0ZXN0cyIsImFjdGlvbiIsImNvbmRpdGlvbiIsImdyYWRlIiwiRmlsdGVyIiwiZXhwb3J0IiwibWF4R3JhZGUiLCJkaXJlY3Rpb25MaXN0IiwiRGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwic2V0dGluZ3MiLCJncm91cENvbnRyb2xsZXIiLCJzaG93QWxsR3JvdXBzIiwiZmlsdGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBC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Q0FDSjtBQUNJbUMsbUJBQVcsSUFEZjtBQUVJN0MsY0FBTTtBQUZWLEtBREksRUFLSjtBQUNJNkMsbUJBQVcsSUFEZjtBQUVJN0MsY0FBTTtBQUZWLEtBTEksRUFTSjtBQUNJNkMsbUJBQVcsS0FEZjtBQUVJN0MsY0FBTTtBQUZWLEtBVEksQ0FERztBQWVYOEMsY0FBVSxDQUNOO0FBQ0lELG1CQUFXLElBRGY7QUFFSVQsZUFBTyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFNBQWpCLEVBQTRCLE9BQTVCLENBRlg7QUFHSWEsaUJBQVM7QUFIYixLQURNO0FBZkMsQ0FBZjs7QUF3QkF6RCxPQUFPQyxPQUFQLEdBQWlCa0MsUUFBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5MzgyOGRiNDA2NTEwNTZlZmQ4ZCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE1lZGlhdG9yIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICB9XG5cbiAgICBwdWIgKGNoYW5uZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0uZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3ViIChjaGFubmVsLCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XG4gICAgfVxufVxuXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ2VuZXJhdGVUcGwgPSByZXF1aXJlKCcuL2dlbmVyYXRlVHBsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5ncm91cCA9ICcnO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHNldEdyb3VwIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBUaXRsZSA9IGdyb3VwLm5hbWU7XG5cbiAgICAgICAgdGhpcy5ncm91cCA9IGdlbmVyYXRlVHBsKGdyb3VwVGl0bGUpO1xuICAgIH1cblxuICAgIHJlbmRlckdyb3VwICgpIHtcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwX3dyYXBwZXInKTtcblxuICAgICAgICBncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMuZ3JvdXApO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyk7XG5cbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IG1lZGlhdG9yLnB1YignR3JvdXA6YWRkZWQnKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ2VuZXJhdGVUcGwgKHRpdGxlKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJncm91cC10aXRsZVwiPiR7dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKGdyb3Vwcykge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzaG93QWxsR3JvdXBzICgpIHtcbiAgICAgICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGxldCBncm91cFZpZXcgPSBuZXcgR3JvdXBWaWV3KCk7XG5cbiAgICAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XG4gICAgICAgICAgICBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdHcm91cDphZGRlZCcsICgpPT4gY29uc29sZS5sb2coJ29wZW5Qb3B1cCcpKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0ICgpIHtcbiAgICBsZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXG4gICAgICAgIEZpbHRlck1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcycpLFxuICAgICAgICBUZXN0TW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1Rlc3RNb2RlbC5qcycpLFxuICAgICAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXG4gICAgICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMnKSxcbiAgICAgICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcbiAgICAgICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcbiAgICAgICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcbiAgICAgICAgZ2VuZXJhdGVUcGwgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L2dlbmVyYXRlVHBsLmpzJyksXG4gICAgICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgICAgICBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxuICAgICAgICB0ZXN0RGF0YSA9IHJlcXVpcmUoJy4vdGVzdERhdGEuanMnKSxcbiAgICAgICAgTWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XG5cbiAgICAvL0VudHJ5IHBvaW50XG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcblxuICAgIGFwcC5zZXRHcm91cHModGVzdERhdGEuZ3JvdXBzKTtcblxuICAgIGFwcC5zdGFydCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRGlyZWN0aW9uTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChkaXJlY3Rpb25OYW1lKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTmFtZSA9IGRpcmVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBbXTsgLy8gWydFbmcxJywgJ0VuZ2wyJywg4oCmXVxuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbXTsgIC8vIFsnZmlsdGVyMScsICdmaWx0ZXIyJywg4oCmXSBcbiAgICB9XG5cbiAgICBhZGRUZXN0ICh0ZXN0TmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IFRlc3QodGVzdE5hbWUpKTtcbiAgICB9XG5cbiAgICBhZGRGaWx0ZXIgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGVzdCAoKSB7XG5cbiAgICB9XG5cbiAgICBkZWxldGVGaWx0ZXIgKCkge1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0ID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRmlsdGVyTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMudGVzdHMgPSB0ZXN0czsgLy8gYXJyYXlcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247IC8vIHN0cmluZ1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjsgLy8gc3RyaW5nXG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTsgLy8gbnVtYmVyXG4gICAgfVxuXG4vLyBhZGRUZXN0LCBjaGFuZ2VBY3Rpb24sIGNoYW5nZUNvbmRpdGlvbiwgY2hhbmdlR3JhZGVcbn1cblxubW9kdWxlLmV4cG9ydCA9IEZpbHRlck1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRlc3RNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XG4gICAgICAgIC8vIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG5cbiAgICAvLyBhZGRSZXN1bHRzICgpIHtcblxuICAgIC8vIH0gIFxufVxuXG5tb2R1bGUuZXhwb3J0ID0gVGVzdE1vZGVsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gW107IC8vIHN0cmluZ1xuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbiAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IERpcmVjdGlvbihkaXJlY3Rpb25OYW1lKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7IC8vIHN0cmluZ1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjsgLy8gc3RyaW5nXG4gICAgfVxuXG4gICAgYWRkVGVzdGluZ1Nlc3Npb24gKCkge1xuXG4gICAgfVxuXG4gICAgYWRkVGVzdCAoKSB7XG5cbiAgICB9XG5cbiAgICBhZGRGaWx0ZXIgKCkge1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0ID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyk7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gW107XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3Vwcyk7XG4gICAgICAgIFxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0FsbEdyb3VwcygpO1xuICAgIH1cblxuICAgIHNldEdyb3VwcyAoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHRlc3REYXRhID0ge1xuICAgIGdyb3VwczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTE3LWpzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdnbycsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTIzLWdvJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdwaHAnLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyNy1waHAnXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdKUyBDb3JlJywgJ0Vzc2F5J10sXG4gICAgICAgICAgICBmaWx0ZXJzOiBbXVxuICAgICAgICB9XG4gICAgXVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0RGF0YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==