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
                // тут должен вызываться метод view который создает модальное окно
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTM0ZDQxZGZjMDUyNmJmMmJhNjEiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sIm5hbWVzIjpbIk1lZGlhdG9yIiwiY2hhbm5lbHMiLCJjaGFubmVsIiwiZm9yRWFjaCIsImZuIiwicHVzaCIsIm1lZGlhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNldHRpbmdzTW9kZWwiLCJkaXJlY3Rpb25MaXN0IiwiZGlyZWN0aW9uTmFtZSIsInRlc3RMaXN0IiwiRGlyZWN0aW9uIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJnZW5lcmF0ZVRwbCIsInJlcXVpcmUiLCJHcm91cFZpZXciLCJ0ZW1wbGF0ZSIsImFkZExpc3RlbmVycyIsImdyb3VwIiwiZ3JvdXBzQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhZGRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJHcm91cExpc3RWaWV3Iiwib3B0aW9ucyIsIml0ZW0iLCJzZWxlY3QiLCJpbm5lckhUTUwiLCJnZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwiLCJQb3B1cEFkZEdyb3VwVmlldyIsIkdyb3VwQ29udHJvbGxlciIsImdyb3VwcyIsInN1YnNjcmliZSIsImdyb3VwTGlzdFZpZXciLCJwb3B1cEFkZEdyb3VwVmlldyIsInNldHRpbmdzTW9kZWwiLCJyZW5kZXIiLCJhZGREaXJlY3Rpb25MaXN0IiwiZ2V0RGlyZWN0aW9uTGlzdCIsInN1YiIsIm1vZGFsIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5pdCIsIkRpcmVjdGlvbk1vZGVsIiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJTZXR0aW5nc1ZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJBcHAiLCJ0ZXN0RGF0YSIsImFwcCIsInNldEdyb3VwcyIsInN0YXJ0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwiVGVzdCIsInRlc3RzIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJGaWx0ZXIiLCJleHBvcnQiLCJtYXhHcmFkZSIsImNsb3NlR3JvdXBCdG4iLCJncm91cE5hbWVFbGVtZW50IiwiZ3JvdXBEaXJlY3Rpb25FbGVtZW50IiwiZ3JvdXBEaXJlY3Rpb25WYWx1ZSIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwiZ3JvdXBOYW1lVGV4dCIsInZhbHVlIiwiZ3JvdXBWaWV3Iiwic2V0R3JvdXAiLCJyZW5kZXJHcm91cCIsImNsb3NlIiwicmVtb3ZlIiwic2V0dGluZ3MiLCJncm91cENvbnRyb2xsZXIiLCJzaG93R3JvdXBMaXN0IiwiZmlsdGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckJBOzs7Ozs7SUFFTUEsUTtBQUNGLHdCQUFlO0FBQUE7O0FBQ1gsYUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7OzRCQUVJQyxPLEVBQVM7QUFDVixnQkFBSSxLQUFLRCxRQUFMLENBQWNDLE9BQWQsQ0FBSixFQUE0QjtBQUN4QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLEVBQXVCQyxPQUF2QixDQUErQixVQUFDQyxFQUFEO0FBQUEsMkJBQVFBLElBQVI7QUFBQSxpQkFBL0I7QUFDSDtBQUNKOzs7NEJBRUlGLE8sRUFBU0UsRSxFQUFJO0FBQ2QsZ0JBQUksQ0FBQyxLQUFLSCxRQUFMLENBQWNDLE9BQWQsQ0FBTCxFQUE2QjtBQUN6QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLElBQXlCLEVBQXpCO0FBQ0g7O0FBRUQsaUJBQUtELFFBQUwsQ0FBY0MsT0FBZCxFQUF1QkcsSUFBdkIsQ0FBNEJELEVBQTVCO0FBQ0g7Ozs7OztBQUdMLElBQUlFLFdBQVcsSUFBSU4sUUFBSixFQUFmOztBQUVBTyxPQUFPQyxPQUFQLEdBQWlCRixRQUFqQixDOzs7Ozs7O0FDeEJBOzs7Ozs7SUFFTUcsYTtBQUNGLDZCQUFlO0FBQUE7O0FBQ1gsYUFBS0MsYUFBTCxHQUFxQixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsS0FBYixFQUFvQixPQUFwQixDQUFyQixDQURXLENBQ3dDO0FBQ3REOzs7O3FDQUVhQyxhLEVBQWU7QUFDekIsaUJBQUtDLFFBQUwsQ0FBY1AsSUFBZCxDQUFtQixJQUFJUSxTQUFKLENBQWNGLGFBQWQsQ0FBbkI7QUFDSDs7OzJDQUVtQjtBQUNoQixtQkFBTyxLQUFLRCxhQUFaO0FBQ0g7Ozs7OztBQUdMSCxPQUFPQyxPQUFQLEdBQWlCQyxhQUFqQixDOzs7Ozs7O0FDaEJBOzs7Ozs7SUFFTUssVTtBQUNGLHdCQUFhQyxJQUFiLEVBQW1CQyxTQUFuQixFQUE4QjtBQUFBOztBQUMxQixhQUFLRCxJQUFMLEdBQVlBLElBQVosQ0FEMEIsQ0FDUjtBQUNsQixhQUFLQyxTQUFMLEdBQWlCQSxTQUFqQixDQUYwQixDQUVFO0FBQy9COzs7OzRDQUVvQixDQUVwQjs7O2tDQUVVLENBRVY7OztvQ0FFWSxDQUVaOzs7Ozs7QUFHTFQsT0FBT0MsT0FBUCxHQUFpQk0sVUFBakIsQzs7Ozs7OztBQ3JCQTs7Ozs7O0FBRUEsSUFBSUcsY0FBYyxtQkFBQUMsQ0FBUSxDQUFSLENBQWxCO0FBQUEsSUFDSVosV0FBVyxtQkFBQVksQ0FBUSxDQUFSLENBRGY7O0lBR01DLFM7QUFDRix5QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxhQUFLQyxZQUFMO0FBQ0g7Ozs7aUNBRVNDLEssRUFBTztBQUNiLGlCQUFLRixRQUFMLEdBQWdCSCxZQUFZSyxLQUFaLENBQWhCO0FBQ0g7OztzQ0FFYztBQUNYLGdCQUFJQyxjQUFjQyxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFsQjs7QUFFQUYsd0JBQVlHLGtCQUFaLENBQStCLFdBQS9CLEVBQTRDLEtBQUtOLFFBQWpEO0FBQ0g7Ozt1Q0FFZTtBQUNaLGdCQUFJTyxjQUFjSCxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFsQjs7QUFFQUUsd0JBQVlDLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDO0FBQUEsdUJBQUt0QixTQUFTdUIsR0FBVCxDQUFhLGFBQWIsQ0FBTDtBQUFBLGFBQXRDO0FBQ0g7Ozs7OztBQUdMdEIsT0FBT0MsT0FBUCxHQUFpQlcsU0FBakIsQzs7Ozs7OztBQzVCQTs7QUFFQSxTQUFTRixXQUFULENBQXNCSyxLQUF0QixFQUE2QjtBQUN6Qiw2RUFDc0NBLE1BQU1QLElBRDVDLFNBQ29ETyxNQUFNTixTQUQxRDtBQU1IOztBQUVEVCxPQUFPQyxPQUFQLEdBQWlCUyxXQUFqQixDOzs7Ozs7O0FDWEE7Ozs7OztBQUVBLElBQUlYLFdBQVcsbUJBQUFZLENBQVEsQ0FBUixDQUFmOztJQUVNWSxhO0FBQ0YsNkJBQWU7QUFBQTs7QUFDWCxhQUFLVCxZQUFMO0FBQ0g7Ozs7OENBRXNCLENBRXRCOzs7aUNBRVMsQ0FFVDs7O2lEQUV5QlgsYSxFQUFlO0FBQ3JDLGdCQUFJcUIsZ0JBQUo7O0FBRUFyQiwwQkFBY1AsT0FBZCxDQUFzQixVQUFDNkIsSUFBRCxFQUFVO0FBQzVCRCx3Q0FBc0JDLElBQXRCO0FBQ0gsYUFGRDs7QUFJQSxtQkFBT0QsT0FBUDtBQUNIOzs7eUNBRWlCckIsYSxFQUFlO0FBQzdCLGdCQUFJdUIsU0FBU1QsU0FBU0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBYjs7QUFFQVEsbUJBQU9DLFNBQVAsR0FBbUIsS0FBS0Msd0JBQUwsQ0FBOEJ6QixhQUE5QixDQUFuQjtBQUNIOzs7dUNBRWU7QUFDWixnQkFBSWlCLGNBQWNILFNBQVNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCOztBQUVBRSx3QkFBWUMsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0M7QUFBQSx1QkFBS3RCLFNBQVN1QixHQUFULENBQWEsc0JBQWIsQ0FBTDtBQUFBLGFBQXRDO0FBQ0g7Ozs7OztBQUdMdEIsT0FBT0MsT0FBUCxHQUFpQnNCLGFBQWpCLEM7Ozs7Ozs7QUN4Q0E7Ozs7OztBQUVBLElBQUlBLGdCQUFnQixtQkFBQVosQ0FBUSxDQUFSLENBQXBCO0FBQUEsSUFDSWtCLG9CQUFvQixtQkFBQWxCLENBQVEsRUFBUixDQUR4QjtBQUFBLElBRUlULGdCQUFnQixtQkFBQVMsQ0FBUSxDQUFSLENBRnBCO0FBQUEsSUFHSVosV0FBVyxtQkFBQVksQ0FBUSxDQUFSLENBSGY7O0lBS01tQixlO0FBQ0YsNkJBQWFDLE1BQWIsRUFBcUI7QUFBQTs7QUFDakIsYUFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsYUFBS0MsU0FBTDtBQUNIOzs7O3dDQUVnQjtBQUNiLGdCQUFJQyxnQkFBZ0IsSUFBSVYsYUFBSixFQUFwQjtBQUFBLGdCQUNJVyxvQkFBb0IsSUFBSUwsaUJBQUosRUFEeEI7QUFBQSxnQkFFSU0sZ0JBQWdCLElBQUlqQyxhQUFKLEVBRnBCOztBQUlBK0IsMEJBQWNHLE1BQWQ7QUFDQUgsMEJBQWNJLGdCQUFkLENBQStCRixjQUFjRyxnQkFBZCxFQUEvQjtBQUNIOzs7b0NBRVk7QUFDVHZDLHFCQUFTd0MsR0FBVCxDQUFhLHNCQUFiLEVBQXFDLFlBQU07QUFDdkM7QUFDQSxvQkFBSUMsUUFBUXZCLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVo7O0FBRUFzQixzQkFBTUMsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsU0FBcEI7QUFDSCxhQUxEO0FBTUg7Ozs7OztBQUdMMUMsT0FBT0MsT0FBUCxHQUFpQjZCLGVBQWpCLEM7Ozs7Ozs7QUNoQ0E7O0FBRUFiLFNBQVNJLGdCQUFULENBQTBCLGtCQUExQixFQUE4Q3NCLElBQTlDOztBQUVBLFNBQVNBLElBQVQsR0FBaUI7QUFDYixRQUFJQyxpQkFBaUIsbUJBQUFqQyxDQUFRLENBQVIsQ0FBckI7QUFBQSxRQUNJa0MsY0FBYyxtQkFBQWxDLENBQVEsRUFBUixDQURsQjtBQUFBLFFBRUltQyxZQUFZLG1CQUFBbkMsQ0FBUSxFQUFSLENBRmhCO0FBQUEsUUFHSVQsZ0JBQWdCLG1CQUFBUyxDQUFRLENBQVIsQ0FIcEI7QUFBQSxRQUlJb0MsZUFBZSxtQkFBQXBDLENBQVEsRUFBUixDQUpuQjtBQUFBLFFBS0lxQyxxQkFBcUIsbUJBQUFyQyxDQUFRLEVBQVIsQ0FMekI7QUFBQSxRQU1JSixhQUFhLG1CQUFBSSxDQUFRLENBQVIsQ0FOakI7QUFBQSxRQU9JQyxZQUFZLG1CQUFBRCxDQUFRLENBQVIsQ0FQaEI7QUFBQSxRQVFJWSxnQkFBZ0IsbUJBQUFaLENBQVEsQ0FBUixDQVJwQjtBQUFBLFFBU0lELGNBQWMsbUJBQUFDLENBQVEsQ0FBUixDQVRsQjtBQUFBLFFBVUltQixrQkFBa0IsbUJBQUFuQixDQUFRLENBQVIsQ0FWdEI7QUFBQSxRQVdJc0MsTUFBTSxtQkFBQXRDLENBQVEsRUFBUixDQVhWO0FBQUEsUUFZSXVDLFdBQVcsbUJBQUF2QyxDQUFRLEVBQVIsQ0FaZjtBQUFBLFFBYUlsQixXQUFXLG1CQUFBa0IsQ0FBUSxDQUFSLENBYmY7O0FBZUE7QUFDQSxRQUFJd0MsTUFBTSxJQUFJRixHQUFKLEVBQVY7O0FBRUFFLFFBQUlDLFNBQUosQ0FBY0YsU0FBU25CLE1BQXZCOztBQUVBb0IsUUFBSUUsS0FBSjtBQUNILEM7Ozs7Ozs7OENDMUJEOzs7Ozs7SUFFTVQsYztBQUNGLDRCQUFheEMsYUFBYixFQUE0QjtBQUFBOztBQUN4QixhQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEIsQ0FGd0IsQ0FFSjtBQUNwQixhQUFLaUQsVUFBTCxHQUFrQixFQUFsQixDQUh3QixDQUdEO0FBQzFCOzs7O2dDQUVRQyxRLEVBQVU7QUFDZixpQkFBS2xELFFBQUwsQ0FBY1AsSUFBZCxDQUFtQixJQUFJMEQsSUFBSixDQUFTRCxRQUFULENBQW5CO0FBQ0g7OztrQ0FFVUUsSyxFQUFPQyxNLEVBQVFDLFMsRUFBV0MsSyxFQUFPO0FBQ3hDLGlCQUFLTixVQUFMLENBQWdCeEQsSUFBaEIsQ0FBcUIsSUFBSStELE1BQUosQ0FBV0osS0FBWCxFQUFrQkMsTUFBbEIsRUFBMEJDLFNBQTFCLEVBQXFDQyxLQUFyQyxDQUFyQjtBQUNIOzs7cUNBRWEsQ0FFYjs7O3VDQUVlLENBRWY7Ozs7OztBQUdMNUQsT0FBTzhELE1BQVAsR0FBZ0JsQixjQUFoQixDOzs7Ozs7Ozs4Q0MxQkE7Ozs7SUFFTUMsVyxHQUNGLHFCQUFhWSxLQUFiLEVBQW9CQyxNQUFwQixFQUE0QkMsU0FBNUIsRUFBdUNDLEtBQXZDLEVBQThDO0FBQUE7O0FBQzFDLFNBQUtILEtBQUwsR0FBYUEsS0FBYixDQUQwQyxDQUN0QjtBQUNwQixTQUFLQyxNQUFMLEdBQWNBLE1BQWQsQ0FGMEMsQ0FFcEI7QUFDdEIsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakIsQ0FIMEMsQ0FHZDtBQUM1QixTQUFLQyxLQUFMLEdBQWFBLEtBQWIsQ0FKMEMsQ0FJdEI7QUFDdkI7O0FBRUw7OztBQUdBNUQsT0FBTzhELE1BQVAsR0FBZ0JqQixXQUFoQixDOzs7Ozs7Ozs4Q0NiQTs7OztJQUVNQyxTLEdBQ0YsbUJBQWF0QyxJQUFiLEVBQW1CdUQsUUFBbkIsRUFBNkJILEtBQTdCLEVBQW9DO0FBQUE7O0FBQ2hDLFNBQUtwRCxJQUFMLEdBQVlBLElBQVo7QUFDQTtBQUNBO0FBQ0g7O0FBRUQ7O0FBRUE7OztBQUdKUixPQUFPOEQsTUFBUCxHQUFnQmhCLFNBQWhCLEM7Ozs7Ozs7OzhDQ2RBOzs7O0lBRU1DLFksR0FDRix3QkFBZTtBQUFBO0FBRWQsQzs7QUFFTC9DLE9BQU84RCxNQUFQLEdBQWdCZixZQUFoQixDOzs7Ozs7Ozs4Q0NQQTs7OztJQUVNQyxrQixHQUNGLDhCQUFlO0FBQUE7QUFFZCxDOztBQUVMaEQsT0FBTzhELE1BQVAsR0FBZ0JkLGtCQUFoQixDOzs7Ozs7OztBQ1BBOzs7Ozs7QUFFQSxJQUFJakQsV0FBVyxtQkFBQVksQ0FBUSxDQUFSLENBQWY7QUFBQSxJQUNJQyxZQUFZLG1CQUFBRCxDQUFRLENBQVIsQ0FEaEI7QUFBQSxJQUVJSixhQUFhLG1CQUFBSSxDQUFRLENBQVIsQ0FGakI7O0lBSU1rQixpQjtBQUNGLGlDQUFlO0FBQUE7O0FBQ1gsYUFBS2YsWUFBTDtBQUNIOzs7O3VDQUVlO0FBQUE7O0FBQ1osZ0JBQUlrRCxnQkFBZ0IvQyxTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUFwQjs7QUFFQW5CLHFCQUFTd0MsR0FBVCxDQUFhLGFBQWIsRUFBNEIsWUFBTTtBQUM5QixvQkFBSUMsUUFBUXZCLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVo7QUFBQSxvQkFDSStDLG1CQUFtQmhELFNBQVNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBRHZCO0FBQUEsb0JBRUlnRCx3QkFBd0JqRCxTQUFTQyxhQUFULENBQXVCLHdCQUF2QixDQUY1QjtBQUFBLG9CQUdJaUQsc0JBQXNCRCxzQkFBc0IxQyxPQUF0QixDQUE4QjBDLHNCQUFzQkUsYUFBcEQsRUFBbUVDLElBSDdGO0FBQUEsb0JBSUlDLGdCQUFnQkwsaUJBQWlCTSxLQUpyQztBQUFBLG9CQUtJeEQsUUFBUSxJQUFJUixVQUFKLENBQWUrRCxhQUFmLEVBQThCSCxtQkFBOUIsQ0FMWjtBQUFBLG9CQU1JSyxZQUFZLElBQUk1RCxTQUFKLEVBTmhCOztBQVFBNEQsMEJBQVVDLFFBQVYsQ0FBbUIxRCxLQUFuQjtBQUNBeUQsMEJBQVVFLFdBQVY7O0FBRUEsc0JBQUtDLEtBQUw7QUFDSCxhQWJEOztBQWVBWCwwQkFBYzNDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDO0FBQUEsdUJBQU10QixTQUFTdUIsR0FBVCxDQUFhLGFBQWIsQ0FBTjtBQUFBLGFBQXhDO0FBQ0g7OztnQ0FFUTtBQUNMLGdCQUFJa0IsUUFBUXZCLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVo7O0FBRUFzQixrQkFBTUMsU0FBTixDQUFnQm1DLE1BQWhCLENBQXVCLFNBQXZCO0FBQ0g7Ozs7OztBQUdMNUUsT0FBT0MsT0FBUCxHQUFpQjRCLGlCQUFqQixDOzs7Ozs7O0FDdkNBOzs7Ozs7QUFFQSxJQUFJQyxrQkFBa0IsbUJBQUFuQixDQUFRLENBQVIsQ0FBdEI7O0lBRU1zQyxHO0FBQ0YsbUJBQWU7QUFBQTs7QUFDWCxhQUFLbEIsTUFBTCxHQUFjLEVBQWQ7QUFDQSxhQUFLOEMsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7O2dDQUVRO0FBQ0wsZ0JBQUlDLGtCQUFrQixJQUFJaEQsZUFBSixDQUFvQixLQUFLQyxNQUF6QixDQUF0Qjs7QUFFQStDLDRCQUFnQkMsYUFBaEI7QUFDSDs7O2tDQUVVaEQsTSxFQUFRO0FBQ2YsaUJBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7Ozs7QUFHTC9CLE9BQU9DLE9BQVAsR0FBaUJnRCxHQUFqQixDOzs7Ozs7O0FDckJBOztBQUVBLElBQUlDLFdBQVc7QUFDWG5CLFlBQVEsQ0FDSjtBQUNJdEIsbUJBQVcsSUFEZjtBQUVJRCxjQUFNO0FBRlYsS0FESSxFQUtKO0FBQ0lDLG1CQUFXLElBRGY7QUFFSUQsY0FBTTtBQUZWLEtBTEksRUFTSjtBQUNJQyxtQkFBVyxLQURmO0FBRUlELGNBQU07QUFGVixLQVRJLENBREc7QUFlWHFFLGNBQVUsQ0FDTjtBQUNJcEUsbUJBQVcsSUFEZjtBQUVJZ0QsZUFBTyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFNBQWpCLEVBQTRCLE9BQTVCLENBRlg7QUFHSXVCLGlCQUFTO0FBSGIsS0FETTtBQWZDLENBQWY7O0FBd0JBaEYsT0FBT0MsT0FBUCxHQUFpQmlELFFBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNTM0ZDQxZGZjMDUyNmJmMmJhNjEiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBNZWRpYXRvciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gICAgfVxuXG4gICAgcHViIChjaGFubmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLmZvckVhY2goKGZuKSA9PiBmbigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1YiAoY2hhbm5lbCwgZm4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLnB1c2goZm4pO1xuICAgIH1cbn1cblxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbJ1VJJywgJ0dPJywgJ1BIUCcsICdPdGhlciddOyAvLyBzdHJpbmdcbiAgICB9XG5cbiAgICBhZGREaXJlY3Rpb24gKGRpcmVjdGlvbk5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBEaXJlY3Rpb24oZGlyZWN0aW9uTmFtZSkpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGlvbkxpc3QgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb25MaXN0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247IC8vIHN0cmluZ1xuICAgIH1cblxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcblxuICAgIH1cblxuICAgIGFkZFRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICgpIHtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBnZW5lcmF0ZVRwbCA9IHJlcXVpcmUoJy4vZ2VuZXJhdGVUcGwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgc2V0R3JvdXAgKGdyb3VwKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBnZW5lcmF0ZVRwbChncm91cCk7XG4gICAgfVxuXG4gICAgcmVuZGVyR3JvdXAgKCkge1xuICAgICAgICBsZXQgZ3JvdXBzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXBfd3JhcHBlcicpO1xuXG4gICAgICAgIGdyb3Vwc0Jsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKTtcblxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gbWVkaWF0b3IucHViKCdHcm91cDphZGRlZCcpKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRwbCAoZ3JvdXApIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHtncm91cC5uYW1lfSAke2dyb3VwLmRpcmVjdGlvbn08L2gyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9nZW5lcmF0ZVRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBMaXN0VmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGRpc3BsYXlHcm91cFNlY3Rpb24gKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0KSB7XG4gICAgICAgIGxldCBvcHRpb25zO1xuXG4gICAgICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uTGlzdCAoZGlyZWN0aW9uTGlzdCkge1xuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCBzZWxlY3QnKTtcblxuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gdGhpcy5nZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9uTGlzdCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKTtcblxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gbWVkaWF0b3IucHViKCdwb3B1cC1hZGQtZ3JvdXA6b3BlbicpKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBMaXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNob3dHcm91cExpc3QgKCkge1xuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KCksXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxuICAgICAgICAgICAgc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKCk7XG5cbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5yZW5kZXIoKTtcbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5hZGREaXJlY3Rpb25MaXN0KHNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTGlzdCgpKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ3BvcHVwLWFkZC1ncm91cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8g0YLRg9GCINC00L7Qu9C20LXQvSDQstGL0LfRi9Cy0LDRgtGM0YHRjyDQvNC10YLQvtC0IHZpZXcg0LrQvtGC0L7RgNGL0Lkg0YHQvtC30LTQsNC10YIg0LzQvtC00LDQu9GM0L3QvtC1INC+0LrQvdC+XG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyk7XG5cbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gICAgbGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpLFxuICAgICAgICBGaWx0ZXJNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMnKSxcbiAgICAgICAgVGVzdE1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMnKSxcbiAgICAgICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgICAgICBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzJyksXG4gICAgICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXG4gICAgICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXG4gICAgICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgICAgIEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcbiAgICAgICAgZ2VuZXJhdGVUcGwgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L2dlbmVyYXRlVHBsLmpzJyksXG4gICAgICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgICAgICBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxuICAgICAgICB0ZXN0RGF0YSA9IHJlcXVpcmUoJy4vdGVzdERhdGEuanMnKSxcbiAgICAgICAgTWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XG5cbiAgICAvL0VudHJ5IHBvaW50XG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcblxuICAgIGFwcC5zZXRHcm91cHModGVzdERhdGEuZ3JvdXBzKTtcblxuICAgIGFwcC5zdGFydCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRGlyZWN0aW9uTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChkaXJlY3Rpb25OYW1lKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTmFtZSA9IGRpcmVjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBbXTsgLy8gWydFbmcxJywgJ0VuZ2wyJywg4oCmXVxuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbXTsgIC8vIFsnZmlsdGVyMScsICdmaWx0ZXIyJywg4oCmXSBcbiAgICB9XG5cbiAgICBhZGRUZXN0ICh0ZXN0TmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IFRlc3QodGVzdE5hbWUpKTtcbiAgICB9XG5cbiAgICBhZGRGaWx0ZXIgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGVzdCAoKSB7XG5cbiAgICB9XG5cbiAgICBkZWxldGVGaWx0ZXIgKCkge1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0ID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRmlsdGVyTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMudGVzdHMgPSB0ZXN0czsgLy8gYXJyYXlcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247IC8vIHN0cmluZ1xuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjsgLy8gc3RyaW5nXG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTsgLy8gbnVtYmVyXG4gICAgfVxuXG4vLyBhZGRUZXN0LCBjaGFuZ2VBY3Rpb24sIGNoYW5nZUNvbmRpdGlvbiwgY2hhbmdlR3JhZGVcbn1cblxubW9kdWxlLmV4cG9ydCA9IEZpbHRlck1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRlc3RNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XG4gICAgICAgIC8vIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG5cbiAgICAvLyBhZGRSZXN1bHRzICgpIHtcblxuICAgIC8vIH0gIFxufVxuXG5tb2R1bGUuZXhwb3J0ID0gVGVzdE1vZGVsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpO1xuXG5jbGFzcyBQb3B1cEFkZEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWdyb3VwLWJ0bicpO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6YWRkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyksXG4gICAgICAgICAgICAgICAgZ3JvdXBOYW1lRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ncm91cF9uYW1lJyksXG4gICAgICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWdyb3VwX2RpcmVjdGlvbicpLFxuICAgICAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uVmFsdWUgPSBncm91cERpcmVjdGlvbkVsZW1lbnQub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW1lbnQuc2VsZWN0ZWRJbmRleF0udGV4dCxcbiAgICAgICAgICAgICAgICBncm91cE5hbWVUZXh0ID0gZ3JvdXBOYW1lRWxlbWVudC52YWx1ZSxcbiAgICAgICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGdyb3VwTmFtZVRleHQsIGdyb3VwRGlyZWN0aW9uVmFsdWUpLFxuICAgICAgICAgICAgICAgIGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcblxuICAgICAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcbiAgICAgICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2dyb3VwOmFkZGVkJykpO1xuICAgIH1cblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xuXG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IFtdO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cHMpO1xuICAgICAgICBcbiAgICAgICAgZ3JvdXBDb250cm9sbGVyLnNob3dHcm91cExpc3QoKTtcbiAgICB9XG5cbiAgICBzZXRHcm91cHMgKGdyb3Vwcykge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCB0ZXN0RGF0YSA9IHtcbiAgICBncm91cHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAndWknLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTExNy1qcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnZ28nLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyMy1nbydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAncGhwJyxcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMjctcGhwJ1xuICAgICAgICB9XG4gICAgXSxcbiAgICBzZXR0aW5nczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXG4gICAgICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnSlMgQ29yZScsICdFc3NheSddLFxuICAgICAgICAgICAgZmlsdGVyczogW11cbiAgICAgICAgfVxuICAgIF1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdERhdGE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=