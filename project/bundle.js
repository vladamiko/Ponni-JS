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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
        value: function pub(channel, data) {
            if (this.channels[channel]) {
                this.channels[channel].forEach(function (fn) {
                    return fn(data);
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

            groupsBlock.insertAdjacentHTML('afterbegin', this.template);
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {}
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

var groupListTpl = __webpack_require__(7),
    mediator = __webpack_require__(0);

var GroupListView = function () {
    function GroupListView() {
        _classCallCheck(this, GroupListView);

        this.template = '';
    }

    _createClass(GroupListView, [{
        key: 'render',
        value: function render() {
            var leftBlock = document.querySelector('.left-column');

            this.template = groupListTpl();

            leftBlock.insertAdjacentHTML('afterbegin', this.template);

            this.addListeners();
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var addGroupBtn = document.querySelector('.add-group-btn');

            addGroupBtn.addEventListener('click', function () {
                return mediator.pub('groupPopup:open');
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


function groupListTpl() {
    return '<section id="group-block">\n                <div class="group-block-head">\n                    <h1>Group</h1>\n                        <button id="add-group-btn" class="btn btn-cog">\n                            <i class="fa fa-cog" aria-hidden="true"></i>\n                        </button>\n                </div>\n                <div class="group-block-body">\n                    <div class="group-block-wrapper group_wrapper"></div>\n                        <button class="btn add-group-btn">add group</button>\n                    </div>\n            </section>';
}

module.exports = groupListTpl;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    GroupView = __webpack_require__(3),
    GroupModel = __webpack_require__(2),
    groupPopupTpl = __webpack_require__(9);

var PopupAddGroupView = function () {
    function PopupAddGroupView() {
        _classCallCheck(this, PopupAddGroupView);

        this.directionList = [];
        this.modal = document.querySelector('#modal-add-group');
    }

    _createClass(PopupAddGroupView, [{
        key: 'renderPopup',
        value: function renderPopup() {
            this.modal.innerHTML = groupPopupTpl(this.directionList);
            this.open();
            this.addListeners();
        }
    }, {
        key: 'setDirectionList',
        value: function setDirectionList(directionList) {
            this.directionList = directionList;
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var closeGroupBtn = document.querySelector('#close-group-btn');

            closeGroupBtn.addEventListener('click', function () {
                return mediator.pub('group:added');
            });
        }
    }, {
        key: 'open',
        value: function open() {
            this.modal.classList.add('visible');
        }
    }, {
        key: 'generateData',
        value: function generateData() {
            var groupNameElem = document.querySelector('#modalGroupName'),
                groupDirectionElem = document.querySelector('#modalGroupDirection'),
                data = {};

            data.direction = groupDirectionElem.options[groupDirectionElem.selectedIndex].text;
            data.name = groupNameElem.value;

            return data;
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupPopupTpl(directionList) {
    var options = '';

    directionList.forEach(function (item) {
        options += '<option>' + item + '</option>';
    });

    return '<div id="group-popup" class="modal-content">\n                <input type="text" id="modalGroupName" class="modal-group-name" placeholder="Enter group name">\n                <select id="modalGroupDirection" class="modal-group-direction">' + options + '</select>\n                <button id="close-group-btn" class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n          </div>';
}

module.exports = groupPopupTpl;

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupListView = __webpack_require__(6),
    GroupView = __webpack_require__(3),
    GroupModel = __webpack_require__(2),
    PopupAddGroupView = __webpack_require__(8),
    PopupAddSettingView = __webpack_require__(10),
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
            var groupListView = new GroupListView();

            groupListView.render();
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            mediator.sub('groupPopup:open', function () {
                var settingsModel = new SettingsModel(),
                    popupAddGroupView = new PopupAddGroupView();

                popupAddGroupView.setDirectionList(settingsModel.getDirectionList());
                popupAddGroupView.renderPopup();
            });

            mediator.sub('group:added', function () {
                var popupAddGroupView = new PopupAddGroupView(),
                    groupView = new GroupView(),
                    groupData = {},
                    group = {};

                groupData = popupAddGroupView.generateData();

                group = new GroupModel(groupData.name, groupData.direction);

                groupView.setGroup(group);

                popupAddGroupView.close();

                groupView.renderGroup();
            });
        }
    }]);

    return GroupController;
}();

module.exports = GroupController;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var DirectionModel = __webpack_require__(13),
        FilterModel = __webpack_require__(14),
        TestModel = __webpack_require__(15),
        SettingsModel = __webpack_require__(4),
        SettingsView = __webpack_require__(16),
        SettingsController = __webpack_require__(17),
        GroupModel = __webpack_require__(2),
        GroupView = __webpack_require__(3),
        GroupListView = __webpack_require__(6),
        groupListTpl = __webpack_require__(7),
        PopupAddGroupView = __webpack_require__(8),
        PopupAddSettingView = __webpack_require__(10),
        groupPopupTpl = __webpack_require__(9),
        groupTpl = __webpack_require__(5),
        GroupController = __webpack_require__(11),
        App = __webpack_require__(18),
        testData = __webpack_require__(19),
        Mediator = __webpack_require__(0);

    var app = new App();

    app.start();
}

/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(11);

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
/* 19 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWNmMWQ1NTJkMjRjZmUzYzMxMGYiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZFNldHRpbmdWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJncm91cFRwbCIsInJlcXVpcmUiLCJHcm91cFZpZXciLCJ0ZW1wbGF0ZSIsImFkZExpc3RlbmVycyIsImdyb3VwIiwiZ3JvdXBzQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJTZXR0aW5nc01vZGVsIiwiZGlyZWN0aW9uTGlzdCIsImRpcmVjdGlvbk5hbWUiLCJ0ZXN0TGlzdCIsIkRpcmVjdGlvbiIsImdyb3VwTGlzdFRwbCIsIkdyb3VwTGlzdFZpZXciLCJsZWZ0QmxvY2siLCJhZGRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJtb2RhbCIsImlubmVySFRNTCIsIm9wZW4iLCJjbG9zZUdyb3VwQnRuIiwiY2xhc3NMaXN0IiwiYWRkIiwiZ3JvdXBOYW1lRWxlbSIsImdyb3VwRGlyZWN0aW9uRWxlbSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInZhbHVlIiwicmVtb3ZlIiwiaXRlbSIsIlBvcHVwQWRkU2V0dGluZ1ZpZXciLCJjbG9zZVNldHRpbmdCdG4iLCJzdWIiLCJjbG9zZSIsIkdyb3VwQ29udHJvbGxlciIsImdyb3VwcyIsInN1YnNjcmliZSIsImdyb3VwTGlzdFZpZXciLCJyZW5kZXIiLCJzZXR0aW5nc01vZGVsIiwicG9wdXBBZGRHcm91cFZpZXciLCJzZXREaXJlY3Rpb25MaXN0IiwiZ2V0RGlyZWN0aW9uTGlzdCIsInJlbmRlclBvcHVwIiwiZ3JvdXBWaWV3IiwiZ3JvdXBEYXRhIiwiZ2VuZXJhdGVEYXRhIiwic2V0R3JvdXAiLCJyZW5kZXJHcm91cCIsImluaXQiLCJEaXJlY3Rpb25Nb2RlbCIsIkZpbHRlck1vZGVsIiwiVGVzdE1vZGVsIiwiU2V0dGluZ3NWaWV3IiwiU2V0dGluZ3NDb250cm9sbGVyIiwiQXBwIiwidGVzdERhdGEiLCJhcHAiLCJzdGFydCIsImZpbHRlckxpc3QiLCJ0ZXN0TmFtZSIsIlRlc3QiLCJ0ZXN0cyIsImFjdGlvbiIsImNvbmRpdGlvbiIsImdyYWRlIiwiRmlsdGVyIiwiZXhwb3J0IiwibWF4R3JhZGUiLCJzZXR0aW5ncyIsImdyb3VwQ29udHJvbGxlciIsInNob3dHcm91cExpc3QiLCJmaWx0ZXJzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7O0lBRU1BLFE7QUFDRix3QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7Ozs0QkFFSUMsTyxFQUFTQyxJLEVBQU07QUFDaEIsZ0JBQUksS0FBS0YsUUFBTCxD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QUFDZixpQkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozs7OztBQUdML0MsT0FBT0MsT0FBUCxHQUFpQmtFLEdBQWpCLEM7Ozs7Ozs7QUNyQkE7O0FBRUEsSUFBSUMsV0FBVztBQUNYckIsWUFBUSxDQUNKO0FBQ0kzQyxtQkFBVyxJQURmO0FBRUlELGNBQU07QUFGVixLQURJLEVBS0o7QUFDSUMsbUJBQVcsSUFEZjtBQUVJRCxjQUFNO0FBRlYsS0FMSSxFQVNKO0FBQ0lDLG1CQUFXLEtBRGY7QUFFSUQsY0FBTTtBQUZWLEtBVEksQ0FERztBQWVYOEUsY0FBVSxDQUNOO0FBQ0k3RSxtQkFBVyxJQURmO0FBRUlzRSxlQUFPLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsU0FBakIsRUFBNEIsT0FBNUIsQ0FGWDtBQUdJVSxpQkFBUztBQUhiLEtBRE07QUFmQyxDQUFmOztBQXdCQXBGLE9BQU9DLE9BQVAsR0FBaUJtRSxRQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxY2YxZDU1MmQyNGNmZTNjMzEwZiIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTWVkaWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xuICAgIH1cblxuICAgIHB1YiAoY2hhbm5lbCwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3ViIChjaGFubmVsLCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XG4gICAgfVxufVxuXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBhZGRUZXN0aW5nU2Vzc2lvbiAoKSB7XG5cbiAgICB9XG5cbiAgICBhZGRUZXN0ICgpIHtcblxuICAgIH1cblxuICAgIGFkZEZpbHRlciAoKSB7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ3JvdXBUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cFRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwVHBsKGdyb3VwKTtcbiAgICB9XG5cbiAgICByZW5kZXJHcm91cCAoKSB7XG4gICAgICAgIGxldCBncm91cHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cF93cmFwcGVyJyk7XG5cbiAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IFsnVUknLCAnR08nLCAnUEhQJywgJ090aGVyJ107XG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uIChkaXJlY3Rpb25OYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgRGlyZWN0aW9uKGRpcmVjdGlvbk5hbWUpKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25MaXN0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uTGlzdDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3VwVHBsIChncm91cCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPmZvcm1hdCBhZGRlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncm91cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBMaXN0VmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IGxlZnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbHVtbicpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcblxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKTtcblxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXBQb3B1cDpvcGVuJykpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ3JvdXBMaXN0VHBsICgpIHtcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2staGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+R3JvdXA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1ncm91cC1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2stYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2std3JhcHBlciBncm91cF93cmFwcGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1ncm91cC1idG5cIj5hZGQgZ3JvdXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncm91cExpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgIGdyb3VwUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpO1xuXG5jbGFzcyBQb3B1cEFkZEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3B1cCAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gZ3JvdXBQb3B1cFRwbCh0aGlzLmRpcmVjdGlvbkxpc3QpO1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb25MaXN0IChkaXJlY3Rpb25MaXN0KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3Q7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XG5cbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXA6YWRkZWQnKSk7XG4gICAgfVxuXG4gICAgb3BlbiAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XG4gICAgICAgIGxldCBncm91cE5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBOYW1lJyksXG4gICAgICAgICAgICBncm91cERpcmVjdGlvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cERpcmVjdGlvbicpLFxuICAgICAgICAgICAgZGF0YSA9IHt9O1xuXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ3JvdXBQb3B1cFRwbCAoZGlyZWN0aW9uTGlzdCkge1xuICAgIGxldCBvcHRpb25zID0gJyc7XG5cbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgPGRpdiBpZD1cImdyb3VwLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtb2RhbEdyb3VwTmFtZVwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbEdyb3VwRGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWdyb3VwLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKTtcblxuY2xhc3MgUG9wdXBBZGRTZXR0aW5nVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBjbG9zZVNldHRpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2Utc2V0dGluZy1idG4nKTtcblxuICAgICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmc6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtc2V0dGluZycpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNsb3NlU2V0dGluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1Yignc2V0dGluZzpvcGVuJykpO1xuICAgIH1cblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1zZXR0aW5nJyk7XG5cbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZFNldHRpbmdWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZFNldHRpbmdWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXG4gICAgUG9wdXBBZGRTZXR0aW5nVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGRTZXR0aW5nVmlldy5qcycpLFxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChncm91cHMpIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgc2hvd0dyb3VwTGlzdCAoKSB7XG4gICAgICAgIGxldCBncm91cExpc3RWaWV3ID0gbmV3IEdyb3VwTGlzdFZpZXcoKTtcblxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbCgpLFxuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XG5cbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnNldERpcmVjdGlvbkxpc3Qoc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25MaXN0KCkpO1xuICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDphZGRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxuICAgICAgICAgICAgICAgIGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKSxcbiAgICAgICAgICAgICAgICBncm91cERhdGEgPSB7fSxcbiAgICAgICAgICAgICAgICBncm91cCA9IHt9O1xuXG4gICAgICAgICAgICBncm91cERhdGEgPSBwb3B1cEFkZEdyb3VwVmlldy5nZW5lcmF0ZURhdGEoKTtcblxuICAgICAgICAgICAgZ3JvdXAgPSBuZXcgR3JvdXBNb2RlbChncm91cERhdGEubmFtZSwgZ3JvdXBEYXRhLmRpcmVjdGlvbik7XG5cbiAgICAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XG5cbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LmNsb3NlKCk7XG5cbiAgICAgICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0ICgpIHtcbiAgICBsZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXG4gICAgICAgIEZpbHRlck1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcycpLFxuICAgICAgICBUZXN0TW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1Rlc3RNb2RlbC5qcycpLFxuICAgICAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXG4gICAgICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMnKSxcbiAgICAgICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcbiAgICAgICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcbiAgICAgICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcbiAgICAgICAgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxuICAgICAgICBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMnKSxcbiAgICAgICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXG4gICAgICAgIFBvcHVwQWRkU2V0dGluZ1ZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGRTZXR0aW5nVmlldy5qcycpLFxuICAgICAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpLFxuICAgICAgICBncm91cFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzJyksXG4gICAgICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgICAgICBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxuICAgICAgICB0ZXN0RGF0YSA9IHJlcXVpcmUoJy4vdGVzdERhdGEuanMnKSxcbiAgICAgICAgTWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XG5cbiAgICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuXG4gICAgYXBwLnN0YXJ0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBEaXJlY3Rpb25Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKGRpcmVjdGlvbk5hbWUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25OYW1lID0gZGlyZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUZXN0ICh0ZXN0TmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IFRlc3QodGVzdE5hbWUpKTtcbiAgICB9XG5cbiAgICBhZGRGaWx0ZXIgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGVzdCAoKSB7XG5cbiAgICB9XG5cbiAgICBkZWxldGVGaWx0ZXIgKCkge1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0ID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRmlsdGVyTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMudGVzdHMgPSB0ZXN0cztcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XG4gICAgfVxuXG4vLyBhZGRUZXN0LCBjaGFuZ2VBY3Rpb24sIGNoYW5nZUNvbmRpdGlvbiwgY2hhbmdlR3JhZGVcbn1cblxubW9kdWxlLmV4cG9ydCA9IEZpbHRlck1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRlc3RNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XG4gICAgICAgIC8vIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0ID0gVGVzdE1vZGVsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyk7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gW107XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3Vwcyk7XG4gICAgICAgIFxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xuICAgIH1cblxuICAgIHNldEdyb3VwcyAoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHRlc3REYXRhID0ge1xuICAgIGdyb3VwczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTE3LWpzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdnbycsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTIzLWdvJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdwaHAnLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyNy1waHAnXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdKUyBDb3JlJywgJ0Vzc2F5J10sXG4gICAgICAgICAgICBmaWx0ZXJzOiBbXVxuICAgICAgICB9XG4gICAgXVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0RGF0YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==