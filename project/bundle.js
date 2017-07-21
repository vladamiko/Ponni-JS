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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupModel = function () {
    function GroupModel(name, direction) {
        _classCallCheck(this, GroupModel);

        this.name = name;
        this.direction = direction;
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var groupTpl = __webpack_require__(5),
    mediator = __webpack_require__(0);

var GroupView = function () {
    function GroupView() {
        _classCallCheck(this, GroupView);

        this.template = '';
        this.addListeners();
    }

    _createClass(GroupView, [{
        key: 'setGroup',
        value: function setGroup(group) {
            this.template = groupTpl(group);
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsModel = function () {
    function SettingsModel() {
        _classCallCheck(this, SettingsModel);

        this.directionList = ['UI', 'GO', 'PHP', 'Other'];
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupTpl(group) {
    return '<div class="group">\n                <h2 class="group-title">' + group.name + ' ' + group.direction + '</h2>\n                <div>\n                    <button class="btn">format added</button>\n                </div>\n            </div>';
}

module.exports = groupTpl;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0);

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

var mediator = __webpack_require__(0),
    GroupView = __webpack_require__(3),
    GroupModel = __webpack_require__(2),
    groupPopupTpl = __webpack_require__(8);

var PopupAddGroupView = function () {
    function PopupAddGroupView() {
        _classCallCheck(this, PopupAddGroupView);

        this.modal = document.querySelector('#modal-add-group');
        this.renderPopup();
        this.addListeners();
    }

    _createClass(PopupAddGroupView, [{
        key: 'renderPopup',
        value: function renderPopup() {
            this.modal.innerHTML = groupPopupTpl();
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var closeGroupBtn = document.querySelector('#close-group-btn');

            mediator.sub('group:added', function () {
                var groupNameElement = document.querySelector('.modal-group_name'),
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
            this.modal.classList.remove('visible');
        }
    }]);

    return PopupAddGroupView;
}();

module.exports = PopupAddGroupView;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupPopupTpl() {
    return '<div id="group-popup" class="modal-content">\n                <input type="text" class="modal-group_name" placeholder="Enter group name">\n                <select class="modal-group_direction">\n                </select>\n                <button id="close-group-btn" class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n          </div>';
}

module.exports = groupPopupTpl;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    GroupView = __webpack_require__(3),
    GroupModel = __webpack_require__(2);

var PopupAddSettingView = function () {
    function PopupAddSettingView() {
        _classCallCheck(this, PopupAddSettingView);

        this.addListeners();
    }

    _createClass(PopupAddSettingView, [{
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var closeSettingBtn = document.querySelector('#close-setting-btn');

            mediator.sub('setting:open', function () {
                var modal = document.querySelector('#modal-add-setting');

                _this.close();
            });

            closeSettingBtn.addEventListener('click', function () {
                return mediator.pub('setting:open');
            });
        }
    }, {
        key: 'close',
        value: function close() {
            var modal = document.querySelector('#modal-add-setting');

            modal.classList.remove('visible');
        }
    }]);

    return PopupAddSettingView;
}();

module.exports = PopupAddSettingView;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupListView = __webpack_require__(6),
    PopupAddGroupView = __webpack_require__(7),
    PopupAddSettingView = __webpack_require__(9),
    SettingsModel = __webpack_require__(4),
    mediator = __webpack_require__(0);

var GroupController = function () {
    function GroupController(groups) {
        _classCallCheck(this, GroupController);

        this.groups = groups;
        this.subscribe();
    }

    _createClass(GroupController, [{
        key: 'showGroupList',
        value: function showGroupList() {
            var popupAddGroupView = new PopupAddGroupView(),
                groupListView = new GroupListView(),
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var DirectionModel = __webpack_require__(12),
        FilterModel = __webpack_require__(13),
        TestModel = __webpack_require__(14),
        SettingsModel = __webpack_require__(4),
        SettingsView = __webpack_require__(15),
        SettingsController = __webpack_require__(16),
        GroupModel = __webpack_require__(2),
        GroupView = __webpack_require__(3),
        GroupListView = __webpack_require__(6),
        PopupAddGroupView = __webpack_require__(7),
        PopupAddSettingView = __webpack_require__(9),
        groupPopupTpl = __webpack_require__(8),
        groupTpl = __webpack_require__(5),
        GroupController = __webpack_require__(10),
        App = __webpack_require__(17),
        testData = __webpack_require__(18),
        Mediator = __webpack_require__(0);

    var app = new App();

    app.start();
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirectionModel = function () {
    function DirectionModel(directionName) {
        _classCallCheck(this, DirectionModel);

        this.directionName = directionName;
        this.testList = [];
        this.filterList = [];
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterModel = function FilterModel(tests, action, condition, grade) {
    _classCallCheck(this, FilterModel);

    this.tests = tests;
    this.action = action;
    this.condition = condition;
    this.grade = grade;
}

// addTest, changeAction, changeCondition, changeGrade
;

module.export = FilterModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestModel = function TestModel(name, maxGrade, grade) {
    _classCallCheck(this, TestModel);

    this.name = name;
    // this.maxGrade = maxGrade;
    // this.grade = grade;
};

module.export = TestModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsView = function SettingsView() {
    _classCallCheck(this, SettingsView);
};

module.export = SettingsView;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsController = function SettingsController() {
    _classCallCheck(this, SettingsController);
};

module.export = SettingsController;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(10);

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
/* 18 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzM1MGUzZjBkOGE1ZTcwYjFiN2EiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkU2V0dGluZ1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sIm5hbWVzIjpbIk1lZGlhdG9yIiwiY2hhbm5lbHMiLCJjaGFubmVsIiwiZm9yRWFjaCIsImZuIiwicHVzaCIsIm1lZGlhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIkdyb3VwTW9kZWwiLCJuYW1lIiwiZGlyZWN0aW9uIiwiZ3JvdXBUcGwiLCJyZXF1aXJlIiwiR3JvdXBWaWV3IiwidGVtcGxhdGUiLCJhZGRMaXN0ZW5lcnMiLCJncm91cCIsImdyb3Vwc0Jsb2NrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYWRkR3JvdXBCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicHViIiwiU2V0dGluZ3NNb2RlbCIsImRpcmVjdGlvbkxpc3QiLCJkaXJlY3Rpb25OYW1lIiwidGVzdExpc3QiLCJEaXJlY3Rpb24iLCJHcm91cExpc3RWaWV3Iiwib3B0aW9ucyIsIml0ZW0iLCJzZWxlY3QiLCJpbm5lckhUTUwiLCJnZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwiLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJtb2RhbCIsInJlbmRlclBvcHVwIiwiY2xvc2VHcm91cEJ0biIsInN1YiIsImdyb3VwTmFtZUVsZW1lbnQiLCJncm91cERpcmVjdGlvbkVsZW1lbnQiLCJncm91cERpcmVjdGlvblZhbHVlIiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJncm91cE5hbWVUZXh0IiwidmFsdWUiLCJncm91cFZpZXciLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiY2xvc2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJQb3B1cEFkZFNldHRpbmdWaWV3IiwiY2xvc2VTZXR0aW5nQnRuIiwiR3JvdXBDb250cm9sbGVyIiwiZ3JvdXBzIiwic3Vic2NyaWJlIiwicG9wdXBBZGRHcm91cFZpZXciLCJncm91cExpc3RWaWV3Iiwic2V0dGluZ3NNb2RlbCIsInJlbmRlciIsImFkZERpcmVjdGlvbkxpc3QiLCJnZXREaXJlY3Rpb25MaXN0IiwiYWRkIiwiaW5pdCIsIkRpcmVjdGlvbk1vZGVsIiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJTZXR0aW5nc1ZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJBcHAiLCJ0ZXN0RGF0YSIsImFwcCIsInN0YXJ0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwiVGVzdCIsInRlc3RzIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJGaWx0ZXIiLCJleHBvcnQiLCJtYXhHcmFkZSIsInNldHRpbmdzIiwiZ3JvdXBDb250cm9sbGVyIiwic2hvd0dyb3VwTGlzdCIsImZpbHRlcnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7Ozs7SUFFTUEsUTtBQUNGLHdCQUFlO0FBQUE7O0FBQ1gsYUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7OzRCQUVJQyxPLEVBQVM7QUFDVixnQkFBSSxLQUFLRCxRQUFMLENBQWNDLE9BQWQsQ0FBSixFQUE0QjtBQUN4QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLEVBQXVC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bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDExKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3MzUwZTNmMGQ4YTVlNzBiMWI3YSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE1lZGlhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHViIChjaGFubmVsKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YiAoY2hhbm5lbCwgZm4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgR3JvdXBNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0aW5nU2Vzc2lvbiAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3QgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWx0ZXIgKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZ3JvdXBUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cFRwbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBUcGwoZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyb3VwICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXBfd3JhcHBlcicpO1xyXG5cclxuICAgICAgICBncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMudGVtcGxhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKTtcclxuXHJcbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IG1lZGlhdG9yLnB1YignR3JvdXA6YWRkZWQnKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gWydVSScsICdHTycsICdQSFAnLCAnT3RoZXInXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGREaXJlY3Rpb24gKGRpcmVjdGlvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IERpcmVjdGlvbihkaXJlY3Rpb25OYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uTGlzdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uTGlzdDtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwVHBsIChncm91cCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHtncm91cC5uYW1lfSAke2dyb3VwLmRpcmVjdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlHcm91cFNlY3Rpb24gKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGlyZWN0aW9uTGlzdFRwbCAoZGlyZWN0aW9uTGlzdCkge1xyXG4gICAgICAgIGxldCBvcHRpb25zO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGlyZWN0aW9uTGlzdCAoZGlyZWN0aW9uTGlzdCkge1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwIHNlbGVjdCcpO1xyXG5cclxuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gdGhpcy5nZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9uTGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgYWRkR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpO1xyXG5cclxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gbWVkaWF0b3IucHViKCdwb3B1cC1hZGQtZ3JvdXA6b3BlbicpKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cEFkZEdyb3VwVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcclxuICAgICAgICB0aGlzLnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBncm91cFBvcHVwVHBsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgY2xvc2VHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1idG4nKTtcclxuXHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDphZGRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZ3JvdXBfbmFtZScpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWdyb3VwX2RpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25WYWx1ZSA9IGdyb3VwRGlyZWN0aW9uRWxlbWVudC5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbWVudC5zZWxlY3RlZEluZGV4XS50ZXh0LFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBOYW1lVGV4dCA9IGdyb3VwTmFtZUVsZW1lbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGdyb3VwTmFtZVRleHQsIGdyb3VwRGlyZWN0aW9uVmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcclxuICAgICAgICAgICAgZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2dyb3VwOmFkZGVkJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBQb3B1cFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJncm91cC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJtb2RhbC1ncm91cF9uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBncm91cCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwibW9kYWwtZ3JvdXBfZGlyZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1ncm91cC1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cFBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXHJcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkU2V0dGluZ1ZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgY2xvc2VTZXR0aW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXNldHRpbmctYnRuJyk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZzpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLXNldHRpbmcnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY2xvc2VTZXR0aW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdzZXR0aW5nOm9wZW4nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtc2V0dGluZycpO1xyXG5cclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRTZXR0aW5nVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGRTZXR0aW5nVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxyXG4gICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxyXG4gICAgUG9wdXBBZGRTZXR0aW5nVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGRTZXR0aW5nVmlldy5qcycpLFxyXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBzKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcclxuICAgICAgICBsZXQgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoKSxcclxuICAgICAgICAgICAgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KCksXHJcbiAgICAgICAgICAgIHNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbCgpO1xyXG5cclxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xyXG4gICAgICAgIGdyb3VwTGlzdFZpZXcuYWRkRGlyZWN0aW9uTGlzdChzZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbkxpc3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ3BvcHVwLWFkZC1ncm91cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKCkge1xyXG4gICAgbGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpLFxyXG4gICAgICAgIEZpbHRlck1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcycpLFxyXG4gICAgICAgIFRlc3RNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzJyksXHJcbiAgICAgICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgICAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxyXG4gICAgICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICAgICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgICAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXHJcbiAgICAgICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICAgICAgUG9wdXBBZGRTZXR0aW5nVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9Qb3B1cEFkZFNldHRpbmdWaWV3LmpzJyksXHJcbiAgICAgICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKSxcclxuICAgICAgICBncm91cFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzJyksXHJcbiAgICAgICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXHJcbiAgICAgICAgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKSxcclxuICAgICAgICB0ZXN0RGF0YSA9IHJlcXVpcmUoJy4vdGVzdERhdGEuanMnKSxcclxuICAgICAgICBNZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcclxuXHJcbiAgICBsZXQgYXBwID0gbmV3IEFwcCgpO1xyXG5cclxuICAgIGFwcC5zdGFydCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgRGlyZWN0aW9uTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKGRpcmVjdGlvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbk5hbWUgPSBkaXJlY3Rpb25OYW1lO1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0ICh0ZXN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRlc3QgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWx0ZXIgKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydCA9IERpcmVjdGlvbk1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBGaWx0ZXJNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMudGVzdHMgPSB0ZXN0cztcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcclxuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XHJcbiAgICB9XHJcblxyXG4vLyBhZGRUZXN0LCBjaGFuZ2VBY3Rpb24sIGNoYW5nZUNvbmRpdGlvbiwgY2hhbmdlR3JhZGVcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydCA9IEZpbHRlck1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBUZXN0TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgLy8gdGhpcy5tYXhHcmFkZSA9IG1heEdyYWRlO1xyXG4gICAgICAgIC8vIHRoaXMuZ3JhZGUgPSBncmFkZTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0gVGVzdE1vZGVsO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1Rlc3RNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFNldHRpbmdzVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5zaG93R3JvdXBMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JvdXBzIChncm91cHMpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IHRlc3REYXRhID0ge1xyXG4gICAgZ3JvdXBzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMTctanMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2dvJyxcclxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyMy1nbydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAncGhwJyxcclxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyNy1waHAnXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNldHRpbmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXHJcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdKUyBDb3JlJywgJ0Vzc2F5J10sXHJcbiAgICAgICAgICAgIGZpbHRlcnM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0RGF0YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==