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

        // this.displayGroupSection();
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

                console.log(group);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzQxZmE4NWY1N2ZjOTgzNjhlMjMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sIm5hbWVzIjpbIk1lZGlhdG9yIiwiY2hhbm5lbHMiLCJjaGFubmVsIiwiZm9yRWFjaCIsImZuIiwicHVzaCIsIm1lZGlhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNldHRpbmdzTW9kZWwiLCJkaXJlY3Rpb25MaXN0IiwiZGlyZWN0aW9uTmFtZSIsInRlc3RMaXN0IiwiRGlyZWN0aW9uIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJnZW5lcmF0ZVRwbCIsInJlcXVpcmUiLCJHcm91cFZpZXciLCJ0ZW1wbGF0ZSIsImFkZExpc3RlbmVycyIsImdyb3VwIiwiZ3JvdXBzQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhZGRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJHcm91cExpc3RWaWV3Iiwib3B0aW9ucyIsIml0ZW0iLCJzZWxlY3QiLCJpbm5lckhUTUwiLCJnZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwiLCJQb3B1cEFkZEdyb3VwVmlldyIsIkdyb3VwQ29udHJvbGxlciIsImdyb3VwcyIsInN1YnNjcmliZSIsImdyb3VwTGlzdFZpZXciLCJwb3B1cEFkZEdyb3VwVmlldyIsInNldHRpbmdzTW9kZWwiLCJyZW5kZXIiLCJhZGREaXJlY3Rpb25MaXN0IiwiZ2V0RGlyZWN0aW9uTGlzdCIsInN1YiIsIm1vZGFsIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5pdCIsIkRpcmVjdGlvbk1vZGVsIiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJTZXR0aW5nc1ZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJBcHAiLCJ0ZXN0RGF0YSIsImFwcCIsInNldEdyb3VwcyIsInN0YXJ0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwiVGVzdCIsInRlc3RzIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJGaWx0ZXIiLCJleHBvcnQiLCJtYXhHcmFkZSIsImNsb3NlR3JvdXBCdG4iLCJncm91cE5hbWVFbGVtZW50IiwiZ3JvdXBEaXJlY3Rpb25FbGVtZW50IiwiZ3JvdXBEaXJlY3Rpb25WYWx1ZSIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwiZ3JvdXBOYW1lVGV4dCIsInZhbHVlIiwiZ3JvdXBWaWV3IiwiY29uc29sZSIsImxvZyIsInNldEdyb3VwIiwicmVuZGVyR3JvdXAiLCJjbG9zZSIsInJlbW92ZSIsInNldHRpbmdzIiwiZ3JvdXBDb250cm9sbGVyIiwic2hvd0dyb3VwTGlzdCIsImZpbHRlcnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JCQTs7Ozs7O0lBRU1BLFE7QUFDRix3QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7Ozs0QkFFSUMsTyxFQUFTO0FBQ1YsZ0JBQUksS0FBS0QsUUFBTCxDQUFjQyxPQUFkLENBQUosRUFBNEI7QUFDeEIscUJBQUtELFFBQUwsQ0FBY0MsT0FBZCxFQUF1QkMsT0FBdkIsQ0FBK0IsVUFBQ0MsRUFBRDtBQUFBLDJCQUFR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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NDFmYTg1ZjU3ZmM5ODM2OGUyMyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE1lZGlhdG9yIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICB9XG5cbiAgICBwdWIgKGNoYW5uZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0uZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3ViIChjaGFubmVsLCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XG4gICAgfVxufVxuXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IFsnVUknLCAnR08nLCAnUEhQJywgJ090aGVyJ107IC8vIHN0cmluZ1xuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbiAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IERpcmVjdGlvbihkaXJlY3Rpb25OYW1lKSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uTGlzdCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbkxpc3Q7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7IC8vIHN0cmluZ1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjsgLy8gc3RyaW5nXG4gICAgfVxuXG4gICAgYWRkVGVzdGluZ1Nlc3Npb24gKCkge1xuXG4gICAgfVxuXG4gICAgYWRkVGVzdCAoKSB7XG5cbiAgICB9XG5cbiAgICBhZGRGaWx0ZXIgKCkge1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdlbmVyYXRlVHBsID0gcmVxdWlyZSgnLi9nZW5lcmF0ZVRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdlbmVyYXRlVHBsKGdyb3VwKTtcbiAgICB9XG5cbiAgICByZW5kZXJHcm91cCAoKSB7XG4gICAgICAgIGxldCBncm91cHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cF93cmFwcGVyJyk7XG5cbiAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgYWRkR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpO1xuXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBtZWRpYXRvci5wdWIoJ0dyb3VwOmFkZGVkJykpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVHBsIChncm91cCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPmZvcm1hdCBhZGRlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZVRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L2dlbmVyYXRlVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIHRoaXMuZGlzcGxheUdyb3VwU2VjdGlvbigpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGRpc3BsYXlHcm91cFNlY3Rpb24gKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0KSB7XG4gICAgICAgIGxldCBvcHRpb25zO1xuXG4gICAgICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uTGlzdCAoZGlyZWN0aW9uTGlzdCkge1xuICAgICAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCBzZWxlY3QnKTtcblxuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gdGhpcy5nZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9uTGlzdCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKTtcblxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gbWVkaWF0b3IucHViKCdwb3B1cC1hZGQtZ3JvdXA6b3BlbicpKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBMaXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNob3dHcm91cExpc3QgKCkge1xuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KCksXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxuICAgICAgICAgICAgc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKCk7XG5cbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5yZW5kZXIoKTtcbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5hZGREaXJlY3Rpb25MaXN0KHNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTGlzdCgpKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ3BvcHVwLWFkZC1ncm91cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuICAgIGxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKSxcbiAgICAgICAgRmlsdGVyTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzJyksXG4gICAgICAgIFRlc3RNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzJyksXG4gICAgICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICAgICAgU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcycpLFxuICAgICAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxuICAgICAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgICAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgICAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXG4gICAgICAgIGdlbmVyYXRlVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9nZW5lcmF0ZVRwbC5qcycpLFxuICAgICAgICBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcbiAgICAgICAgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKSxcbiAgICAgICAgdGVzdERhdGEgPSByZXF1aXJlKCcuL3Rlc3REYXRhLmpzJyksXG4gICAgICAgIE1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xuXG4gICAgLy9FbnRyeSBwb2ludFxuICAgIGxldCBhcHAgPSBuZXcgQXBwKCk7XG5cbiAgICBhcHAuc2V0R3JvdXBzKHRlc3REYXRhLmdyb3Vwcyk7XG5cbiAgICBhcHAuc3RhcnQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIERpcmVjdGlvbk1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbk5hbWUgPSBkaXJlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnRlc3RMaXN0ID0gW107IC8vIFsnRW5nMScsICdFbmdsMicsIOKApl1cbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW107ICAvLyBbJ2ZpbHRlcjEnLCAnZmlsdGVyMicsIOKApl0gXG4gICAgfVxuXG4gICAgYWRkVGVzdCAodGVzdE5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIH1cblxuICAgIGRlbGV0ZVRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgZGVsZXRlRmlsdGVyICgpIHtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydCA9IERpcmVjdGlvbk1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEZpbHRlck1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLnRlc3RzID0gdGVzdHM7IC8vIGFycmF5XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247IC8vIHN0cmluZ1xuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7IC8vIG51bWJlclxuICAgIH1cblxuLy8gYWRkVGVzdCwgY2hhbmdlQWN0aW9uLCBjaGFuZ2VDb25kaXRpb24sIGNoYW5nZUdyYWRlXG59XG5cbm1vZHVsZS5leHBvcnQgPSBGaWx0ZXJNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUZXN0TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBtYXhHcmFkZSwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgLy8gdGhpcy5tYXhHcmFkZSA9IG1heEdyYWRlO1xuICAgICAgICAvLyB0aGlzLmdyYWRlID0gZ3JhZGU7XG4gICAgfVxuXG4gICAgLy8gYWRkUmVzdWx0cyAoKSB7XG5cbiAgICAvLyB9ICBcbn1cblxubW9kdWxlLmV4cG9ydCA9IFRlc3RNb2RlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKTtcblxuY2xhc3MgUG9wdXBBZGRHcm91cFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgY2xvc2VHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1idG4nKTtcblxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmFkZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpLFxuICAgICAgICAgICAgICAgIGdyb3VwTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZ3JvdXBfbmFtZScpLFxuICAgICAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ncm91cF9kaXJlY3Rpb24nKSxcbiAgICAgICAgICAgICAgICBncm91cERpcmVjdGlvblZhbHVlID0gZ3JvdXBEaXJlY3Rpb25FbGVtZW50Lm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtZW50LnNlbGVjdGVkSW5kZXhdLnRleHQsXG4gICAgICAgICAgICAgICAgZ3JvdXBOYW1lVGV4dCA9IGdyb3VwTmFtZUVsZW1lbnQudmFsdWUsXG5cbiAgICAgICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGdyb3VwTmFtZVRleHQsIGdyb3VwRGlyZWN0aW9uVmFsdWUpLFxuICAgICAgICAgICAgICAgIGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZ3JvdXApO1xuXG4gICAgICAgICAgICBncm91cFZpZXcuc2V0R3JvdXAoZ3JvdXApO1xuICAgICAgICAgICAgZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXA6YWRkZWQnKSk7XG4gICAgfVxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyk7XG5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyk7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gW107XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3Vwcyk7XG4gICAgICAgIFxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xuICAgIH1cblxuICAgIHNldEdyb3VwcyAoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHRlc3REYXRhID0ge1xuICAgIGdyb3VwczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTE3LWpzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdnbycsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTIzLWdvJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdwaHAnLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyNy1waHAnXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdKUyBDb3JlJywgJ0Vzc2F5J10sXG4gICAgICAgICAgICBmaWx0ZXJzOiBbXVxuICAgICAgICB9XG4gICAgXVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0RGF0YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==