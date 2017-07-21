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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

var SettingsModel = function () {
    function SettingsModel() {
        _classCallCheck(this, SettingsModel);

        this.directionList = ['UI', 'GO', 'PHP', 'Other']; // string
    }

    _createClass(SettingsModel, [{
        key: 'addDirection',
        value: function addDirection(directionName) {
            this.testList.push(new Direction(directionName));
        }
    }, {
        key: 'getDirectionList',
        value: function getDirectionList() {
            return this.directionList;
        }
    }]);

    return SettingsModel;
}();

module.exports = SettingsModel;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

module.exports = GroupModel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var generateTpl = __webpack_require__(5),
    mediator = __webpack_require__(1);

var GroupView = function () {
    function GroupView() {
        _classCallCheck(this, GroupView);

        this.template = '';
        this.addListeners();
    }

    _createClass(GroupView, [{
        key: 'setGroup',
        value: function setGroup(group) {
            this.template = generateTpl(group);
        }
    }, {
        key: 'renderGroup',
        value: function renderGroup() {
            var groupsBlock = document.querySelector('.group_wrapper');

            groupsBlock.insertAdjacentHTML('beforeend', this.template);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function generateTpl(group) {
    return '<div class="group">\n                <h2 class="group-title">' + group.name + ' ' + group.direction + '</h2>\n                <div>\n                    <button class="btn">format added</button>\n                </div>\n            </div>';
}

module.exports = generateTpl;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(1);

var GroupListView = function () {
    function GroupListView() {
        _classCallCheck(this, GroupListView);

        this.addListeners();
    }

    _createClass(GroupListView, [{
        key: 'displayGroupSection',
        value: function displayGroupSection() {}
    }, {
        key: 'render',
        value: function render() {}
    }, {
        key: 'generateDirectionListTpl',
        value: function generateDirectionListTpl(directionList) {
            var options = void 0;

            directionList.forEach(function (item) {
                options += '<option>' + item + '</option>';
            });

            return options;
        }
    }, {
        key: 'addDirectionList',
        value: function addDirectionList(directionList) {
            var select = document.querySelector('#modal-add-group select');

            select.innerHTML = this.generateDirectionListTpl(directionList);
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var addGroupBtn = document.querySelector('.add-group-btn');

            addGroupBtn.addEventListener('click', function () {
                return mediator.pub('popup-add-group:open');
            });
        }
    }]);

    return GroupListView;
}();

module.exports = GroupListView;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupListView = __webpack_require__(6),
    PopupAddGroupView = __webpack_require__(14),
    SettingsModel = __webpack_require__(2),
    mediator = __webpack_require__(1);

var GroupController = function () {
    function GroupController(groups) {
        _classCallCheck(this, GroupController);

        this.groups = groups;
        this.subscribe();
    }

    _createClass(GroupController, [{
        key: 'showGroupList',
        value: function showGroupList() {
            var groupListView = new GroupListView(),
                popupAddGroupView = new PopupAddGroupView(),
                settingsModel = new SettingsModel();

            groupListView.render();
            groupListView.addDirectionList(settingsModel.getDirectionList());
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            mediator.sub('popup-add-group:open', function () {
                var modal = document.querySelector('#modal-add-group');

                modal.classList.add('visible');
            });
        }
    }]);

    return GroupController;
}();

module.exports = GroupController;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var DirectionModel = __webpack_require__(9),
        FilterModel = __webpack_require__(10),
        TestModel = __webpack_require__(11),
        SettingsModel = __webpack_require__(2),
        SettingsView = __webpack_require__(12),
        SettingsController = __webpack_require__(13),
        GroupModel = __webpack_require__(3),
        GroupView = __webpack_require__(4),
        GroupListView = __webpack_require__(6),
        generateTpl = __webpack_require__(5),
        GroupController = __webpack_require__(7),
        App = __webpack_require__(15),
        testData = __webpack_require__(16),
        Mediator = __webpack_require__(1);

    //Entry point
    var app = new App();

    app.setGroups(testData.groups);

    app.start();
}

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(1),
    GroupView = __webpack_require__(4),
    GroupModel = __webpack_require__(3);

var PopupAddGroupView = function () {
    function PopupAddGroupView() {
        _classCallCheck(this, PopupAddGroupView);

        this.addListeners();
    }

    _createClass(PopupAddGroupView, [{
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var closeGroupBtn = document.querySelector('#close-group-btn');

            mediator.sub('group:added', function () {
                var modal = document.querySelector('#modal-add-group'),
                    groupNameElement = document.querySelector('.modal-group_name'),
                    groupDirectionElement = document.querySelector('.modal-group_direction'),
                    groupDirectionValue = groupDirectionElement.options[groupDirectionElement.selectedIndex].text,
                    groupNameText = groupNameElement.value,
                    group = new GroupModel(groupNameText, groupDirectionValue),
                    groupView = new GroupView();

                groupView.setGroup(group);
                groupView.renderGroup();

                _this.close();
            });

            closeGroupBtn.addEventListener('click', function () {
                return mediator.pub('group:added');
            });
        }
    }, {
        key: 'close',
        value: function close() {
            var modal = document.querySelector('#modal-add-group');

            modal.classList.remove('visible');
        }
    }]);

    return PopupAddGroupView;
}();

module.exports = PopupAddGroupView;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(7);

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

            groupController.showGroupList();
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
/* 16 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjMwOWQwZGVjZjZmYzVlZGU5NGQiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sIm5hbWVzIjpbIk1lZGlhdG9yIiwiY2hhbm5lbHMiLCJjaGFubmVsIiwiZm9yRWFjaCIsImZuIiwicHVzaCIsIm1lZGlhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNldHRpbmdzTW9kZWwiLCJkaXJlY3Rpb25MaXN0IiwiZGlyZWN0aW9uTmFtZSIsInRlc3RMaXN0IiwiRGlyZWN0aW9uIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJnZW5lcmF0ZVRwbCIsInJlcXVpcmUiLCJHcm91cFZpZXciLCJ0ZW1wbGF0ZSIsImFkZExpc3RlbmVycyIsImdyb3VwIiwiZ3JvdXBzQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhZGRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJHcm91cExpc3RWaWV3Iiwib3B0aW9ucyIsIml0ZW0iLCJzZWxlY3QiLCJpbm5lckhUTUwiLCJnZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwiLCJQb3B1cEFkZEdyb3VwVmlldyIsIkdyb3VwQ29udHJvbGxlciIsImdyb3VwcyIsInN1YnNjcmliZSIsImdyb3VwTGlzdFZpZXciLCJwb3B1cEFkZEdyb3VwVmlldyIsInNldHRpbmdzTW9kZWwiLCJyZW5kZXIiLCJhZGREaXJlY3Rpb25MaXN0IiwiZ2V0RGlyZWN0aW9uTGlzdCIsInN1YiIsIm1vZGFsIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5pdCIsIkRpcmVjdGlvbk1vZGVsIiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJTZXR0aW5nc1ZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJBcHAiLCJ0ZXN0RGF0YSIsImFwcCIsInNldEdyb3VwcyIsInN0YXJ0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwiVGVzdCIsInRlc3RzIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJGaWx0ZXIiLCJleHBvcnQiLCJtYXhHcmFkZSIsImNsb3NlR3JvdXBCdG4iLCJncm91cE5hbWVFbGVtZW50IiwiZ3JvdXBEaXJlY3Rpb25FbGVtZW50IiwiZ3JvdXBEaXJlY3Rpb25WYWx1ZSIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwiZ3JvdXBOYW1lVGV4dCIsInZhbHVlIiwiZ3JvdXBWaWV3Iiwic2V0R3JvdXAiLCJyZW5kZXJHcm91cCIsImNsb3NlIiwicmVtb3ZlIiwic2V0dGluZ3MiLCJncm91cENvbnRyb2xsZXIiLCJzaG93R3JvdXBMaXN0IiwiZmlsdGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckJBOzs7Ozs7SUFFTUEsUTtBQUNGLHdCQUFlO0FBQUE7O0FBQ1gsYUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7OzRCQUVJQyxPLEVBQVM7QUFDVixnQkFBSSxLQUFLRCxRQUFMLENBQWNDLE9BQWQsQ0FBSixFQUE0QjtBQUN4QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLEVBQXVCQyxPQUF2QixDQUErQixVQUFDQyxFQUFEO0FBQUEsMkJBQVFBLElBQVI7QUFBQSxpQkFB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QixTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUFaOztBQUVBc0Isa0JBQU1DLFNBQU4sQ0FBZ0JtQyxNQUFoQixDQUF1QixTQUF2QjtBQUNIOzs7Ozs7QUFHTDVFLE9BQU9DLE9BQVAsR0FBaUI0QixpQkFBakIsQzs7Ozs7OztBQ3ZDQTs7Ozs7O0FBRUEsSUFBSUMsa0JBQWtCLG1CQUFBbkIsQ0FBUSxDQUFSLENBQXRCOztJQUVNc0MsRztBQUNGLG1CQUFlO0FBQUE7O0FBQ1gsYUFBS2xCLE1BQUwsR0FBYyxFQUFkO0FBQ0EsYUFBSzhDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7OztnQ0FFUTtBQUNMLGdCQUFJQyxrQkFBa0IsSUFBSWhELGVBQUosQ0FBb0IsS0FBS0MsTUFBekIsQ0FBdEI7O0FBRUErQyw0QkFBZ0JDLGFBQWhCO0FBQ0g7OztrQ0FFVWhELE0sRUFBUTtBQUNmLGlCQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7Ozs7O0FBR0wvQixPQUFPQyxPQUFQLEdBQWlCZ0QsR0FBakIsQzs7Ozs7OztBQ3JCQTs7QUFFQSxJQUFJQyxXQUFXO0FBQ1huQixZQUFRLENBQ0o7QUFDSXRCLG1CQUFXLElBRGY7QUFFSUQsY0FBTTtBQUZWLEtBREksRUFLSjtBQUNJQyxtQkFBVyxJQURmO0FBRUlELGNBQU07QUFGVixLQUxJLEVBU0o7QUFDSUMsbUJBQVcsS0FEZjtBQUVJRCxjQUFNO0FBRlYsS0FUSSxDQURHO0FBZVhxRSxjQUFVLENBQ047QUFDSXBFLG1CQUFXLElBRGY7QUFFSWdELGVBQU8sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixTQUFqQixFQUE0QixPQUE1QixDQUZYO0FBR0l1QixpQkFBUztBQUhiLEtBRE07QUFmQyxDQUFmOztBQXdCQWhGLE9BQU9DLE9BQVAsR0FBaUJpRCxRQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIzMDlkMGRlY2Y2ZmM1ZWRlOTRkIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTWVkaWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xuICAgIH1cblxuICAgIHB1YiAoY2hhbm5lbCkge1xuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcbiAgICB9XG59XG5cbmxldCBtZWRpYXRvciA9IG5ldyBNZWRpYXRvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gWydVSScsICdHTycsICdQSFAnLCAnT3RoZXInXTsgLy8gc3RyaW5nXG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uIChkaXJlY3Rpb25OYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgRGlyZWN0aW9uKGRpcmVjdGlvbk5hbWUpKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25MaXN0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uTGlzdDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEdyb3VwTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTsgLy8gc3RyaW5nXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uOyAvLyBzdHJpbmdcbiAgICB9XG5cbiAgICBhZGRUZXN0aW5nU2Vzc2lvbiAoKSB7XG5cbiAgICB9XG5cbiAgICBhZGRUZXN0ICgpIHtcblxuICAgIH1cblxuICAgIGFkZEZpbHRlciAoKSB7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ2VuZXJhdGVUcGwgPSByZXF1aXJlKCcuL2dlbmVyYXRlVHBsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHNldEdyb3VwIChncm91cCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ2VuZXJhdGVUcGwoZ3JvdXApO1xuICAgIH1cblxuICAgIHJlbmRlckdyb3VwICgpIHtcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwX3dyYXBwZXInKTtcblxuICAgICAgICBncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyk7XG5cbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IG1lZGlhdG9yLnB1YignR3JvdXA6YWRkZWQnKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ2VuZXJhdGVUcGwgKGdyb3VwKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJncm91cC10aXRsZVwiPiR7Z3JvdXAubmFtZX0gJHtncm91cC5kaXJlY3Rpb259PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwTGlzdFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5R3JvdXBTZWN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcblxuICAgIH1cblxuICAgIGdlbmVyYXRlRGlyZWN0aW9uTGlzdFRwbCAoZGlyZWN0aW9uTGlzdCkge1xuICAgICAgICBsZXQgb3B0aW9ucztcblxuICAgICAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAgc2VsZWN0Jyk7XG5cbiAgICAgICAgc2VsZWN0LmlubmVySFRNTCA9IHRoaXMuZ2VuZXJhdGVEaXJlY3Rpb25MaXN0VHBsKGRpcmVjdGlvbkxpc3QpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyk7XG5cbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IG1lZGlhdG9yLnB1YigncG9wdXAtYWRkLWdyb3VwOm9wZW4nKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTGlzdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKGdyb3Vwcykge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpLFxuICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoKSxcbiAgICAgICAgICAgIHNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbCgpO1xuXG4gICAgICAgIGdyb3VwTGlzdFZpZXcucmVuZGVyKCk7XG4gICAgICAgIGdyb3VwTGlzdFZpZXcuYWRkRGlyZWN0aW9uTGlzdChzZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbkxpc3QoKSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdwb3B1cC1hZGQtZ3JvdXA6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcblxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0ICgpIHtcbiAgICBsZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXG4gICAgICAgIEZpbHRlck1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcycpLFxuICAgICAgICBUZXN0TW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1Rlc3RNb2RlbC5qcycpLFxuICAgICAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXG4gICAgICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMnKSxcbiAgICAgICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcbiAgICAgICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcbiAgICAgICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcbiAgICAgICAgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxuICAgICAgICBnZW5lcmF0ZVRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMnKSxcbiAgICAgICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXG4gICAgICAgIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyksXG4gICAgICAgIHRlc3REYXRhID0gcmVxdWlyZSgnLi90ZXN0RGF0YS5qcycpLFxuICAgICAgICBNZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcblxuICAgIC8vRW50cnkgcG9pbnRcbiAgICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuXG4gICAgYXBwLnNldEdyb3Vwcyh0ZXN0RGF0YS5ncm91cHMpO1xuXG4gICAgYXBwLnN0YXJ0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBEaXJlY3Rpb25Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKGRpcmVjdGlvbk5hbWUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25OYW1lID0gZGlyZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFtdOyAvLyBbJ0VuZzEnLCAnRW5nbDInLCDigKZdXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFtdOyAgLy8gWydmaWx0ZXIxJywgJ2ZpbHRlcjInLCDigKZdIFxuICAgIH1cblxuICAgIGFkZFRlc3QgKHRlc3ROYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xuICAgIH1cblxuICAgIGFkZEZpbHRlciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLmZpbHRlckxpc3QucHVzaChuZXcgRmlsdGVyKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpKTtcbiAgICB9XG5cbiAgICBkZWxldGVUZXN0ICgpIHtcblxuICAgIH1cblxuICAgIGRlbGV0ZUZpbHRlciAoKSB7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnQgPSBEaXJlY3Rpb25Nb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBGaWx0ZXJNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzOyAvLyBhcnJheVxuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjsgLy8gc3RyaW5nXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5ncmFkZSA9IGdyYWRlOyAvLyBudW1iZXJcbiAgICB9XG5cbi8vIGFkZFRlc3QsIGNoYW5nZUFjdGlvbiwgY2hhbmdlQ29uZGl0aW9uLCBjaGFuZ2VHcmFkZVxufVxuXG5tb2R1bGUuZXhwb3J0ID0gRmlsdGVyTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVzdE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbWF4R3JhZGUsIGdyYWRlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8vIHRoaXMubWF4R3JhZGUgPSBtYXhHcmFkZTtcbiAgICAgICAgLy8gdGhpcy5ncmFkZSA9IGdyYWRlO1xuICAgIH1cblxuICAgIC8vIGFkZFJlc3VsdHMgKCkge1xuXG4gICAgLy8gfSAgXG59XG5cbm1vZHVsZS5leHBvcnQgPSBUZXN0TW9kZWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1Rlc3RNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2V0dGluZ3NWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBTZXR0aW5nc1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBTZXR0aW5nc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyk7XG5cbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDphZGRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKSxcbiAgICAgICAgICAgICAgICBncm91cE5hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWdyb3VwX25hbWUnKSxcbiAgICAgICAgICAgICAgICBncm91cERpcmVjdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZ3JvdXBfZGlyZWN0aW9uJyksXG4gICAgICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25WYWx1ZSA9IGdyb3VwRGlyZWN0aW9uRWxlbWVudC5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbWVudC5zZWxlY3RlZEluZGV4XS50ZXh0LFxuICAgICAgICAgICAgICAgIGdyb3VwTmFtZVRleHQgPSBncm91cE5hbWVFbGVtZW50LnZhbHVlLFxuICAgICAgICAgICAgICAgIGdyb3VwID0gbmV3IEdyb3VwTW9kZWwoZ3JvdXBOYW1lVGV4dCwgZ3JvdXBEaXJlY3Rpb25WYWx1ZSksXG4gICAgICAgICAgICAgICAgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xuXG4gICAgICAgICAgICBncm91cFZpZXcuc2V0R3JvdXAoZ3JvdXApO1xuICAgICAgICAgICAgZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXA6YWRkZWQnKSk7XG4gICAgfVxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyk7XG5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyk7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gW107XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3Vwcyk7XG4gICAgICAgIFxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xuICAgIH1cblxuICAgIHNldEdyb3VwcyAoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHRlc3REYXRhID0ge1xuICAgIGdyb3VwczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTE3LWpzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdnbycsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTIzLWdvJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdwaHAnLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyNy1waHAnXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdKUyBDb3JlJywgJ0Vzc2F5J10sXG4gICAgICAgICAgICBmaWx0ZXJzOiBbXVxuICAgICAgICB9XG4gICAgXVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0RGF0YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==