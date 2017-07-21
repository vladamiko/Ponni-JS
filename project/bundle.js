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

            groupsBlock.insertAdjacentHTML('beforeend', this.template);
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
    return '<section id="group-block">\n                <div class="group-block__head">\n                    <h1>Group</h1>\n                        <button id="add-group-btn" class="btn btn-cog">\n                            <i class="fa fa-cog" aria-hidden="true"></i>\n                        </button>\n                </div>\n                <div class="group-block__body">\n                    <div class="group-block__wrapper group_wrapper"></div>\n                        <button class="btn add-group-btn">add group</button>\n                    </div>\n            </section>';
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

        this.modal = document.querySelector('#modal-add-group');
        this.renderPopup();
    }

    _createClass(PopupAddGroupView, [{
        key: 'generateDirectionListTpl',
        value: function generateDirectionListTpl(directionList) {
            var options = '';

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
        key: 'renderPopup',
        value: function renderPopup() {
            this.modal.innerHTML = groupPopupTpl();
            this.open();
            this.addListeners();
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


function groupPopupTpl() {
    return '<div id="group-popup" class="modal-content">\n                <input type="text" class="modal-group_name" placeholder="Enter group name">\n                <select class="modal-group_direction">\n                </select>\n                <button id="close-group-btn" class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n          </div>';
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
                console.log('open');

                var popupAddGroupView = new PopupAddGroupView(),
                    settingsModel = new SettingsModel();

                popupAddGroupView.renderPopup();
                popupAddGroupView.addDirectionList(settingsModel.getDirectionList());
            });

            mediator.sub('group:added', function () {
                var groupNameElem = document.querySelector('.modal-group_name'),
                    groupDirectionElem = document.querySelector('.modal-group_direction'),
                    groupDirectionValue = '',
                    groupNameText = '',
                    groupView = {},
                    group = {};

                groupDirectionValue = groupDirectionElem.options[groupDirectionElem.selectedIndex].text;
                groupNameText = groupNameElem.value;

                group = new GroupModel(groupNameText, groupDirectionValue);

                groupView = new GroupView();

                groupView.setGroup(group);
                groupView.renderGroup();

                //Тут надо подумать!!!
                var popupAddGroupView = new PopupAddGroupView();
                popupAddGroupView.close();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjMxNmVkZjk4ZDA2ZGI2ODQ0NmEiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZFNldHRpbmdWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJncm91cFRwbCIsInJlcXVpcmUiLCJHcm91cFZpZXciLCJ0ZW1wbGF0ZSIsImFkZExpc3RlbmVycyIsImdyb3VwIiwiZ3JvdXBzQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJTZXR0aW5nc01vZGVsIiwiZGlyZWN0aW9uTGlzdCIsImRpcmVjdGlvbk5hbWUiLCJ0ZXN0TGlzdCIsIkRpcmVjdGlvbiIsImdyb3VwTGlzdFRwbCIsIkdyb3VwTGlzdFZpZXciLCJsZWZ0QmxvY2siLCJhZGRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJtb2RhbCIsInJlbmRlclBvcHVwIiwib3B0aW9ucyIsIml0ZW0iLCJzZWxlY3QiLCJpbm5lckhUTUwiLCJnZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwiLCJvcGVuIiwiY2xvc2VHcm91cEJ0biIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlBvcHVwQWRkU2V0dGluZ1ZpZXciLCJjbG9zZVNldHRpbmdCdG4iLCJzdWIiLCJjbG9zZSIsIkdyb3VwQ29udHJvbGxlciIsImdyb3VwcyIsInN1YnNjcmliZSIsImdyb3VwTGlzdFZpZXciLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwicG9wdXBBZGRHcm91cFZpZXciLCJzZXR0aW5nc01vZGVsIiwiYWRkRGlyZWN0aW9uTGlzdCIsImdldERpcmVjdGlvbkxpc3QiLCJncm91cE5hbWVFbGVtIiwiZ3JvdXBEaXJlY3Rpb25FbGVtIiwiZ3JvdXBEaXJlY3Rpb25WYWx1ZSIsImdyb3VwTmFtZVRleHQiLCJncm91cFZpZXciLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInZhbHVlIiwic2V0R3JvdXAiLCJyZW5kZXJHcm91cCIsImluaXQiLCJEaXJlY3Rpb25Nb2RlbCIsIkZpbHRlck1vZGVsIiwiVGVzdE1vZGVsIiwiU2V0dGluZ3NWaWV3IiwiU2V0dGluZ3NDb250cm9sbGVyIiwiQXBwIiwidGVzdERhdGEiLCJhcHAiLCJzdGFydCIsImZpbHRlckxpc3QiLCJ0ZXN0TmFtZSIsIlRlc3QiLCJ0ZXN0cyIsImFjdGlvbiIsImNvbmRpdGlvbiIsImdyYWRlIiwiRmlsdGVyIiwiZXhwb3J0IiwibWF4R3JhZGUiLCJzZXR0aW5ncyIsImdyb3VwQ29udHJvbGxlciIsInNob3dHcm91cExpc3QiLCJmaWx0ZXJzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7O0lBRU1BLFE7QUFDRix3QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7Ozs0QkFFSUMsTyxFQUFTQyxJLEVBQU07QUFDaEIsZ0JBQUksS0FBS0YsUUFBTCxDQUFjQyxPQUFkLENBQUosRUFBNEI7QUFDeEIscUJBQUtELFFBQUwsQ0FBY0MsT0FBZCxFQUF1QkUsT0FBdkIsQ0FBK0IsVUFBQ0MsRUFBRDtBQUFBLDJCQUFRQSxHQUFHRixJQUFILENBQVI7QUFBQSxpQkFBL0I7QUFDSDtBQUNKOzs7NEJBRUlELE8sRUFBU0csRSxFQUFJO0FBQ2QsZ0JBQUksQ0FBQyxLQUFLSixRQUFMLENBQWNDLE9BQWQsQ0FBTCxFQUE2QjtBQUN6QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLElBQXlCLEVBQXpCO0FBQ0g7O0FBRUQsaUJBQUtELFFBQUwsQ0FBY0MsT0FBZCxFQUF1QkksSUFBdkIsQ0FBNEJELEVBQTVCO0FBQ0g7Ozs7OztBQUdMLElBQUlFLFdBQVcsSUFBSVAsUUFBSixFQUFmOztBQUVBUSxPQUFPQyxPQUFQLEdBQWlCRixRQUFqQixDOzs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JCQTs7Ozs7O0lBRU1HLFU7QUFDRix3QkFBYUMsSUFBYixFQUFtQkMsU0FBbkIsRUFBOEI7QUFBQTs7QUFDMUIsYUFBS0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDSDs7Ozs0Q0FFb0IsQ0FFcEI7OztrQ0FFVSxDQUVWOzs7b0NBRVksQ0FFWjs7Ozs7O0FBR0xKLE9BQU9DLE9BQVAsR0FBaUJDLFVBQWpCLEM7Ozs7Ozs7QUNyQkE7Ozs7OztBQUVBLElBQUlHLFdBQVcsbUJBQUFDLENBQVEsQ0FBUixDQUFmO0FBQUEsSUFDSVAsV0FBVyxtQkFBQU8sQ0FBUSxDQUFSLENBRGY7O0lBR01DLFM7QUFDRix5QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxhQUFLQyxZQUFMO0FBQ0g7Ozs7aUNBRVNDLEssRUFBTztBQUNiLGlCQUFLRixRQUFMLEdBQWdCSCxTQUFTSyxLQUFULENBQWhCO0FBQ0g7OztzQ0FFYztBQUNYLGdCQUFJQyxjQUFjQyxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQUFsQjs7QUFFQUYsd0JBQVlHLGtCQUFaLENBQStCLFdBQS9CLEVBQTRDLEtBQUtOLFFBQWpEO0FBQ0g7Ozt1Q0FFZSxDQUNmOzs7Ozs7QUFHTFIsT0FBT0MsT0FBUCxHQUFpQk0sU0FBakIsQzs7Ozs7OztBQ3pCQTs7Ozs7O0lBRU1RLGE7QUFDRiw2QkFBZTtBQUFBOztBQUNYLGFBQUtDLGFBQUwsR0FBcUIsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLEtBQWIsRUFBb0IsT0FBcEIsQ0FBckI7QUFDSDs7OztxQ0FFYUMsYSxFQUFlO0FBQ3pCLGlCQUFLQyxRQUFMLENBQWNwQixJQUFkLENBQW1CLElBQUlxQixTQUFKLENBQWNGLGFBQWQsQ0FBbkI7QUFDSDs7OzJDQUVtQjtBQUNoQixtQkFBTyxLQUFLRCxhQUFaO0FBQ0g7Ozs7OztBQUdMaEIsT0FBT0MsT0FBUCxHQUFpQmMsYUFBakIsQzs7Ozs7OztBQ2hCQTs7QUFFQSxTQUFTVixRQUFULENBQW1CSyxLQUFuQixFQUEwQjtBQUN0Qiw2RUFDc0NBLE1BQU1QLElBRDVDLFNBQ29ETyxNQUFNTixTQUQxRDtBQU1IOztBQUVESixPQUFPQyxPQUFQLEdBQWlCSSxRQUFqQixDOzs7Ozs7O0FDWEE7Ozs7OztBQUVBLElBQUllLGVBQWUsbUJBQUFkLENBQVEsQ0FBUixDQUFuQjtBQUFBLElBQ0lQLFdBQVcsbUJBQUFPLENBQVEsQ0FBUixDQURmOztJQUdNZSxhO0FBQ0YsNkJBQWU7QUFBQTs7QUFDWCxhQUFLYixRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7Ozs7aUNBRVM7QUFDTixnQkFBSWMsWUFBWVYsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUFoQjs7QUFFQSxpQkFBS0wsUUFBTCxHQUFnQlksY0FBaEI7O0FBRUFFLHNCQUFVUixrQkFBVixDQUE2QixZQUE3QixFQUEyQyxLQUFLTixRQUFoRDs7QUFFQSxpQkFBS0MsWUFBTDtBQUNIOzs7dUNBRWU7QUFDWixnQkFBSWMsY0FBY1gsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBbEI7O0FBRUFVLHdCQUFZQyxnQkFBWixDQUE2QixPQUE3QixFQUFzQztBQUFBLHVCQUFNekIsU0FBUzBCLEdBQVQsQ0FBYSxpQkFBYixDQUFOO0FBQUEsYUFBdEM7QUFDSDs7Ozs7O0FBR0x6QixPQUFPQyxPQUFQLEdBQWlCb0IsYUFBakIsQzs7Ozs7OztBQzNCQTs7QUFFQSxTQUFTRCxZQUFULEdBQXlCO0FBQ3JCO0FBWUg7O0FBRURwQixPQUFPQyxPQUFQLEdBQWlCbUIsWUFBakIsQzs7Ozs7OztBQ2pCQTs7Ozs7O0FBRUEsSUFBSXJCLFdBQVcsbUJBQUFPLENBQVEsQ0FBUixDQUFmO0FBQUEsSUFDSUMsWUFBWSxtQkFBQUQsQ0FBUSxDQUFSLENBRGhCO0FBQUEsSUFFSUosYUFBYSxtQkFBQUksQ0FBUSxDQUFSLENBRmpCO0FBQUEsSUFHSW9CLGdCQUFnQixtQkFBQXBCLENBQVEsQ0FBUixDQUhwQjs7SUFLTXFCLGlCO0FBQ0YsaUNBQWU7QUFBQTs7QUFDWCxhQUFLQyxLQUFMLEdBQWFoQixTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUFiO0FBQ0EsYUFBS2dCLFdBQUw7QUFDSDs7OztpREFFeUJiLGEsRUFBZTtBQUNyQyxnQkFBSWMsVUFBVSxFQUFkOztBQUVBZCwwQkFBY3BCLE9BQWQsQ0FBc0IsVUFBQ21DLElBQUQsRUFBVTtBQUM1QkQsd0NBQXNCQyxJQUF0QjtBQUNILGFBRkQ7O0FBSUEsbUJBQU9ELE9BQVA7QUFDSDs7O3lDQUVpQmQsYSxFQUFlO0FBQzdCLGdCQUFJZ0IsU0FBU3BCLFNBQVNDLGFBQVQsQ0FBdUIseUJBQXZCLENBQWI7O0FBRUFtQixtQkFBT0MsU0FBUCxHQUFtQixLQUFLQyx3QkFBTCxDQUE4QmxCLGFBQTlCLENBQW5CO0FBQ0g7OztzQ0FFYztBQUNYLGlCQUFLWSxLQUFMLENBQVdLLFNBQVgsR0FBdUJQLGVBQXZCO0FBQ0EsaUJBQUtTLElBQUw7QUFDQSxpQkFBSzFCLFlBQUw7QUFDSDs7O3VDQUVlO0FBQ1osZ0JBQUkyQixnQkFBZ0J4QixTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUFwQjs7QUFFQXVCLDBCQUFjWixnQkFBZCxDQUErQixPQUEvQixFQUF3QztBQUFBLHVCQUFNekIsU0FBUzBCLEdBQVQsQ0FBYSxhQUFiLENBQU47QUFBQSxhQUF4QztBQUNIOzs7K0JBRU87QUFDSixpQkFBS0csS0FBTCxDQUFXUyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixTQUF6QjtBQUNIOzs7Z0NBRVE7QUFDTCxpQkFBS1YsS0FBTCxDQUFXUyxTQUFYLENBQXFCRSxNQUFyQixDQUE0QixTQUE1QjtBQUNIOzs7Ozs7QUFHTHZDLE9BQU9DLE9BQVAsR0FBaUIwQixpQkFBakIsQzs7Ozs7OztBQ2xEQTs7QUFFQSxTQUFTRCxhQUFULEdBQTBCO0FBQ3RCO0FBUUg7O0FBRUQxQixPQUFPQyxPQUFQLEdBQWlCeUIsYUFBakIsQzs7Ozs7OztBQ2JBOzs7Ozs7QUFFQSxJQUFJM0IsV0FBVyxtQkFBQU8sQ0FBUSxDQUFSLENBQWY7QUFBQSxJQUNJQyxZQUFZLG1CQUFBRCxDQUFRLENBQVIsQ0FEaEI7QUFBQSxJQUVJSixhQUFhLG1CQUFBSSxDQUFRLENBQVIsQ0FGakI7O0lBSU1rQyxtQjtBQUNGLG1DQUFlO0FBQUE7O0FBQ1gsYUFBSy9CLFlBQUw7QUFDSDs7Ozt1Q0FFZTtBQUFBOztBQUNaLGdCQUFJZ0Msa0JBQWtCN0IsU0FBU0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBdEI7O0FBRUFkLHFCQUFTMkMsR0FBVCxDQUFhLGNBQWIsRUFBNkIsWUFBTTtBQUMvQixvQkFBSWQsUUFBUWhCLFNBQVNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQVo7O0FBRUEsc0JBQUs4QixLQUFMO0FBQ0gsYUFKRDs7QUFNQUYsNEJBQWdCakIsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDO0FBQUEsdUJBQU16QixTQUFTMEIsR0FBVCxDQUFhLGNBQWIsQ0FBTjtBQUFBLGFBQTFDO0FBQ0g7OztnQ0FFUTtBQUNMLGdCQUFJRyxRQUFRaEIsU0FBU0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBWjs7QUFFQWUsa0JBQU1TLFNBQU4sQ0FBZ0JFLE1BQWhCLENBQXVCLFNBQXZCO0FBQ0g7Ozs7OztBQUdMdkMsT0FBT0MsT0FBUCxHQUFpQnVDLG1CQUFqQixDOzs7Ozs7O0FDOUJBOzs7Ozs7QUFFQSxJQUFJbkIsZ0JBQWdCLG1CQUFBZixDQUFRLENBQVIsQ0FBcEI7QUFBQSxJQUNJQyxZQUFZLG1CQUFBRCxDQUFRLENBQVIsQ0FEaEI7QUFBQSxJQUVJSixhQUFhLG1CQUFBSSxDQUFRLENBQVIsQ0FGakI7QUFBQSxJQUdJcUIsb0JBQW9CLG1CQUFBckIsQ0FBUSxDQUFSLENBSHhCO0FBQUEsSUFJSWtDLHNCQUFzQixtQkFBQWxDLENBQVEsRUFBUixDQUoxQjtBQUFBLElBS0lTLGdCQUFnQixtQkFBQVQsQ0FBUSxDQUFSLENBTHBCO0FBQUEsSUFNSVAsV0FBVyxtQkFBQU8sQ0FBUSxDQUFSLENBTmY7O0lBUU1zQyxlO0FBQ0YsNkJBQWFDLE1BQWIsRUFBcUI7QUFBQTs7QUFDakIsYUFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsYUFBS0MsU0FBTDtBQUNIOzs7O3dDQUVnQjtBQUNiLGdCQUFJQyxnQkFBZ0IsSUFBSTFCLGFBQUosRUFBcEI7O0FBRUEwQiwwQkFBY0MsTUFBZDtBQUNIOzs7b0NBRVk7QUFDVGpELHFCQUFTMkMsR0FBVCxDQUFhLGlCQUFiLEVBQWdDLFlBQU07QUFDbENPLHdCQUFRQyxHQUFSLENBQVksTUFBWjs7QUFFQSxvQkFBSUMsb0JBQW9CLElBQUl4QixpQkFBSixFQUF4QjtBQUFBLG9CQUNJeUIsZ0JBQWdCLElBQUlyQyxhQUFKLEVBRHBCOztBQUdBb0Msa0NBQWtCdEIsV0FBbEI7QUFDQXNCLGtDQUFrQkUsZ0JBQWxCLENBQW1DRCxjQUFjRSxnQkFBZCxFQUFuQztBQUNILGFBUkQ7O0FBVUF2RCxxQkFBUzJDLEdBQVQsQ0FBYSxhQUFiLEVBQTRCLFlBQU07QUFDOUIsb0JBQUlhLGdCQUFnQjNDLFNBQVNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQXBCO0FBQUEsb0JBQ0kyQyxxQkFBcUI1QyxTQUFTQyxhQUFULENBQXVCLHdCQUF2QixDQUR6QjtBQUFBLG9CQUVJNEMsc0JBQXNCLEVBRjFCO0FBQUEsb0JBR0lDLGdCQUFnQixFQUhwQjtBQUFBLG9CQUlJQyxZQUFZLEVBSmhCO0FBQUEsb0JBS0lqRCxRQUFRLEVBTFo7O0FBT0ErQyxzQ0FBc0JELG1CQUFtQjFCLE9BQW5CLENBQTJCMEIsbUJBQW1CSSxhQUE5QyxFQUE2REMsSUFBbkY7QUFDQUgsZ0NBQWdCSCxjQUFjTyxLQUE5Qjs7QUFFQXBELHdCQUFRLElBQUlSLFVBQUosQ0FBZXdELGFBQWYsRUFBOEJELG1CQUE5QixDQUFSOztBQUVBRSw0QkFBWSxJQUFJcEQsU0FBSixFQUFaOztBQUVBb0QsMEJBQVVJLFFBQVYsQ0FBbUJyRCxLQUFuQjtBQUNBaUQsMEJBQVVLLFdBQVY7O0FBRUE7QUFDQSxvQkFBSWIsb0JBQW9CLElBQUl4QixpQkFBSixFQUF4QjtBQUNBd0Isa0NBQWtCUixLQUFsQjtBQUNILGFBckJEO0FBc0JIOzs7Ozs7QUFHTDNDLE9BQU9DLE9BQVAsR0FBaUIyQyxlQUFqQixDOzs7Ozs7O0FDMURBOztBQUVBaEMsU0FBU1ksZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDeUMsSUFBOUM7O0FBRUEsU0FBU0EsSUFBVCxHQUFpQjtBQUNiLFFBQUlDLGlCQUFpQixtQkFBQTVELENBQVEsRUFBUixDQUFyQjtBQUFBLFFBQ0k2RCxjQUFjLG1CQUFBN0QsQ0FBUSxFQUFSLENBRGxCO0FBQUEsUUFFSThELFlBQVksbUJBQUE5RCxDQUFRLEVBQVIsQ0FGaEI7QUFBQSxRQUdJUyxnQkFBZ0IsbUJBQUFULENBQVEsQ0FBUixDQUhwQjtBQUFBLFFBSUkrRCxlQUFlLG1CQUFBL0QsQ0FBUSxFQUFSLENBSm5CO0FBQUEsUUFLSWdFLHFCQUFxQixtQkFBQWhFLENBQVEsRUFBUixDQUx6QjtBQUFBLFFBTUlKLGFBQWEsbUJBQUFJLENBQVEsQ0FBUixDQU5qQjtBQUFBLFFBT0lDLFlBQVksbUJBQUFELENBQVEsQ0FBUixDQVBoQjtBQUFBLFFBUUllLGdCQUFnQixtQkFBQWYsQ0FBUSxDQUFSLENBUnBCO0FBQUEsUUFTSWMsZUFBZSxtQkFBQWQsQ0FBUSxDQUFSLENBVG5CO0FBQUEsUUFVSXFCLG9CQUFvQixtQkFBQXJCLENBQVEsQ0FBUixDQVZ4QjtBQUFBLFFBV0lrQyxzQkFBc0IsbUJBQUFsQyxDQUFRLEVBQVIsQ0FYMUI7QUFBQSxRQVlJb0IsZ0JBQWdCLG1CQUFBcEIsQ0FBUSxDQUFSLENBWnBCO0FBQUEsUUFhSUQsV0FBVyxtQkFBQUMsQ0FBUSxDQUFSLENBYmY7QUFBQSxRQWNJc0Msa0JBQWtCLG1CQUFBdEMsQ0FBUSxFQUFSLENBZHRCO0FBQUEsUUFlSWlFLE1BQU0sbUJBQUFqRSxDQUFRLEVBQVIsQ0FmVjtBQUFBLFFBZ0JJa0UsV0FBVyxtQkFBQWxFLENBQVEsRUFBUixDQWhCZjtBQUFBLFFBaUJJZCxXQUFXLG1CQUFBYyxDQUFRLENBQVIsQ0FqQmY7O0FBbUJBLFFBQUltRSxNQUFNLElBQUlGLEdBQUosRUFBVjs7QUFFQUUsUUFBSUMsS0FBSjtBQUNILEM7Ozs7Ozs7OENDM0JEOzs7Ozs7SUFFTVIsYztBQUNGLDRCQUFhakQsYUFBYixFQUE0QjtBQUFBOztBQUN4QixhQUFLQSxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxhQUFLeUQsVUFBTCxHQUFrQixFQUFsQjtBQUNIOzs7O2dDQUVRQyxRLEVBQVU7QUFDZixpQkFBSzFELFFBQUwsQ0FBY3BCLElBQWQsQ0FBbUIsSUFBSStFLElBQUosQ0FBU0QsUUFBVCxDQUFuQjtBQUNIOzs7a0NBRVVFLEssRUFBT0MsTSxFQUFRQyxTLEVBQVdDLEssRUFBTztBQUN4QyxpQkFBS04sVUFBTCxDQUFnQjdFLElBQWhCLENBQXFCLElBQUlvRixNQUFKLENBQVdKLEtBQVgsRUFBa0JDLE1BQWxCLEVBQTBCQyxTQUExQixFQUFxQ0MsS0FBckMsQ0FBckI7QUFDSDs7O3FDQUVhLENBRWI7Ozt1Q0FFZSxDQUVmOzs7Ozs7QUFHTGpGLE9BQU9tRixNQUFQLEdBQWdCakIsY0FBaEIsQzs7Ozs7Ozs7OENDMUJBOzs7O0lBRU1DLFcsR0FDRixxQkFBYVcsS0FBYixFQUFvQkMsTUFBcEIsRUFBNEJDLFNBQTVCLEVBQXVDQyxLQUF2QyxFQUE4QztBQUFBOztBQUMxQyxTQUFLSCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNIOztBQUVMOzs7QUFHQWpGLE9BQU9tRixNQUFQLEdBQWdCaEIsV0FBaEIsQzs7Ozs7Ozs7OENDYkE7Ozs7SUFFTUMsUyxHQUNGLG1CQUFhakUsSUFBYixFQUFtQmlGLFFBQW5CLEVBQTZCSCxLQUE3QixFQUFvQztBQUFBOztBQUNoQyxTQUFLOUUsSUFBTCxHQUFZQSxJQUFaO0FBQ0E7QUFDQTtBQUNILEM7O0FBS0xILE9BQU9tRixNQUFQLEdBQWdCZixTQUFoQixDOzs7Ozs7Ozs4Q0NaQTs7OztJQUVNQyxZLEdBQ0Ysd0JBQWU7QUFBQTtBQUVkLEM7O0FBRUxyRSxPQUFPbUYsTUFBUCxHQUFnQmQsWUFBaEIsQzs7Ozs7Ozs7OENDUEE7Ozs7SUFFTUMsa0IsR0FDRiw4QkFBZTtBQUFBO0FBRWQsQzs7QUFFTHRFLE9BQU9tRixNQUFQLEdBQWdCYixrQkFBaEIsQzs7Ozs7Ozs7QUNQQTs7Ozs7O0FBRUEsSUFBSTFCLGtCQUFrQixtQkFBQXRDLENBQVEsRUFBUixDQUF0Qjs7SUFFTWlFLEc7QUFDRixtQkFBZTtBQUFBOztBQUNYLGFBQUsxQixNQUFMLEdBQWMsRUFBZDtBQUNBLGFBQUt3QyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7Ozs7Z0NBRVE7QUFDTCxnQkFBSUMsa0JBQWtCLElBQUkxQyxlQUFKLENBQW9CLEtBQUtDLE1BQXpCLENBQXRCOztBQUVBeUMsNEJBQWdCQyxhQUFoQjtBQUNIOzs7a0NBRVUxQyxNLEVBQVE7QUFDZixpQkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7Ozs7OztBQUdMN0MsT0FBT0MsT0FBUCxHQUFpQnNFLEdBQWpCLEM7Ozs7Ozs7QUNyQkE7O0FBRUEsSUFBSUMsV0FBVztBQUNYM0IsWUFBUSxDQUNKO0FBQ0l6QyxtQkFBVyxJQURmO0FBRUlELGNBQU07QUFGVixLQURJLEVBS0o7QUFDSUMsbUJBQVcsSUFEZjtBQUVJRCxjQUFNO0FBRlYsS0FMSSxFQVNKO0FBQ0lDLG1CQUFXLEtBRGY7QUFFSUQsY0FBTTtBQUZWLEtBVEksQ0FERztBQWVYa0YsY0FBVSxDQUNOO0FBQ0lqRixtQkFBVyxJQURmO0FBRUkwRSxlQUFPLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsU0FBakIsRUFBNEIsT0FBNUIsQ0FGWDtBQUdJVSxpQkFBUztBQUhiLEtBRE07QUFmQyxDQUFmOztBQXdCQXhGLE9BQU9DLE9BQVAsR0FBaUJ1RSxRQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiMzE2ZWRmOThkMDZkYjY4NDQ2YSIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTWVkaWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xuICAgIH1cblxuICAgIHB1YiAoY2hhbm5lbCwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3ViIChjaGFubmVsLCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XG4gICAgfVxufVxuXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBhZGRUZXN0aW5nU2Vzc2lvbiAoKSB7XG5cbiAgICB9XG5cbiAgICBhZGRUZXN0ICgpIHtcblxuICAgIH1cblxuICAgIGFkZEZpbHRlciAoKSB7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ3JvdXBUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cFRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwVHBsKGdyb3VwKTtcbiAgICB9XG5cbiAgICByZW5kZXJHcm91cCAoKSB7XG4gICAgICAgIGxldCBncm91cHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cF93cmFwcGVyJyk7XG5cbiAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gWydVSScsICdHTycsICdQSFAnLCAnT3RoZXInXTtcbiAgICB9XG5cbiAgICBhZGREaXJlY3Rpb24gKGRpcmVjdGlvbk5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBEaXJlY3Rpb24oZGlyZWN0aW9uTmFtZSkpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGlvbkxpc3QgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb25MaXN0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ3JvdXBUcGwgKGdyb3VwKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJncm91cC10aXRsZVwiPiR7Z3JvdXAubmFtZX0gJHtncm91cC5kaXJlY3Rpb259PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ3JvdXBMaXN0VHBsID0gcmVxdWlyZSgnLi90cGwvZ3JvdXBMaXN0VHBsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICB9XG5cbiAgICByZW5kZXIgKCkge1xuICAgICAgICBsZXQgbGVmdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29sdW1uJyk7XG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwTGlzdFRwbCgpO1xuXG4gICAgICAgIGxlZnRCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcblxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cbiAgICBcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgYWRkR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpO1xuXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cFBvcHVwOm9wZW4nKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTGlzdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm91cExpc3RUcGwgKCkge1xuICAgIHJldHVybiBgPHNlY3Rpb24gaWQ9XCJncm91cC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9ja19faGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+R3JvdXA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC1ncm91cC1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2tfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrX193cmFwcGVyIGdyb3VwX3dyYXBwZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWdyb3VwLWJ0blwiPmFkZCBncm91cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXG4gICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzJyk7XG5cbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyk7XG4gICAgICAgIHRoaXMucmVuZGVyUG9wdXAoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSAnJztcblxuICAgICAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAgc2VsZWN0Jyk7XG5cbiAgICAgICAgc2VsZWN0LmlubmVySFRNTCA9IHRoaXMuZ2VuZXJhdGVEaXJlY3Rpb25MaXN0VHBsKGRpcmVjdGlvbkxpc3QpO1xuICAgIH1cblxuICAgIHJlbmRlclBvcHVwICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBncm91cFBvcHVwVHBsKCk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWdyb3VwLWJ0bicpO1xuXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2dyb3VwOmFkZGVkJykpO1xuICAgIH1cblxuICAgIG9wZW4gKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm91cFBvcHVwVHBsICgpIHtcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJncm91cC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwibW9kYWwtZ3JvdXBfbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJtb2RhbC1ncm91cF9kaXJlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpO1xuXG5jbGFzcyBQb3B1cEFkZFNldHRpbmdWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGNsb3NlU2V0dGluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZXR0aW5nLWJ0bicpO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZzpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1zZXR0aW5nJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2xvc2VTZXR0aW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdzZXR0aW5nOm9wZW4nKSk7XG4gICAgfVxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLXNldHRpbmcnKTtcblxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkU2V0dGluZ1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkU2V0dGluZ1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcbiAgICBQb3B1cEFkZFNldHRpbmdWaWV3ID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvVmlldy9Qb3B1cEFkZFNldHRpbmdWaWV3LmpzJyksXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKGdyb3Vwcykge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpO1xuXG4gICAgICAgIGdyb3VwTGlzdFZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cFBvcHVwOm9wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3BlbicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoKSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nc01vZGVsID0gbmV3IFNldHRpbmdzTW9kZWwoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LmFkZERpcmVjdGlvbkxpc3Qoc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25MaXN0KCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmFkZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZ3JvdXBfbmFtZScpLFxuICAgICAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ncm91cF9kaXJlY3Rpb24nKSxcbiAgICAgICAgICAgICAgICBncm91cERpcmVjdGlvblZhbHVlID0gJycsXG4gICAgICAgICAgICAgICAgZ3JvdXBOYW1lVGV4dCA9ICcnLFxuICAgICAgICAgICAgICAgIGdyb3VwVmlldyA9IHt9LFxuICAgICAgICAgICAgICAgIGdyb3VwID0ge307XG5cbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uVmFsdWUgPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgICAgICAgIGdyb3VwTmFtZVRleHQgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xuXG4gICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGdyb3VwTmFtZVRleHQsIGdyb3VwRGlyZWN0aW9uVmFsdWUpO1xuXG4gICAgICAgICAgICBncm91cFZpZXcgPSBuZXcgR3JvdXBWaWV3KCk7XG5cbiAgICAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XG4gICAgICAgICAgICBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcblxuICAgICAgICAgICAgLy/QotGD0YIg0L3QsNC00L4g0L/QvtC00YPQvNCw0YLRjCEhIVxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xuXG5mdW5jdGlvbiBpbml0ICgpIHtcbiAgICBsZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXG4gICAgICAgIEZpbHRlck1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcycpLFxuICAgICAgICBUZXN0TW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1Rlc3RNb2RlbC5qcycpLFxuICAgICAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXG4gICAgICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMnKSxcbiAgICAgICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcbiAgICAgICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcbiAgICAgICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcbiAgICAgICAgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxuICAgICAgICBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMnKSxcbiAgICAgICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXG4gICAgICAgIFBvcHVwQWRkU2V0dGluZ1ZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGRTZXR0aW5nVmlldy5qcycpLFxuICAgICAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpLFxuICAgICAgICBncm91cFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzJyksXG4gICAgICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgICAgICBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxuICAgICAgICB0ZXN0RGF0YSA9IHJlcXVpcmUoJy4vdGVzdERhdGEuanMnKSxcbiAgICAgICAgTWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XG5cbiAgICBsZXQgYXBwID0gbmV3IEFwcCgpO1xuXG4gICAgYXBwLnN0YXJ0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBEaXJlY3Rpb25Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKGRpcmVjdGlvbk5hbWUpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25OYW1lID0gZGlyZWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUZXN0ICh0ZXN0TmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IFRlc3QodGVzdE5hbWUpKTtcbiAgICB9XG5cbiAgICBhZGRGaWx0ZXIgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XG4gICAgfVxuXG4gICAgZGVsZXRlVGVzdCAoKSB7XG5cbiAgICB9XG5cbiAgICBkZWxldGVGaWx0ZXIgKCkge1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0ID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRmlsdGVyTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMudGVzdHMgPSB0ZXN0cztcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XG4gICAgfVxuXG4vLyBhZGRUZXN0LCBjaGFuZ2VBY3Rpb24sIGNoYW5nZUNvbmRpdGlvbiwgY2hhbmdlR3JhZGVcbn1cblxubW9kdWxlLmV4cG9ydCA9IEZpbHRlck1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRlc3RNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XG4gICAgICAgIC8vIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0ID0gVGVzdE1vZGVsO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBcbiAgICB9XG59XG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyk7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gW107XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3Vwcyk7XG4gICAgICAgIFxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xuICAgIH1cblxuICAgIHNldEdyb3VwcyAoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IHRlc3REYXRhID0ge1xuICAgIGdyb3VwczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTE3LWpzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdnbycsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTIzLWdvJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdwaHAnLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyNy1waHAnXG4gICAgICAgIH1cbiAgICBdLFxuICAgIHNldHRpbmdzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdKUyBDb3JlJywgJ0Vzc2F5J10sXG4gICAgICAgICAgICBmaWx0ZXJzOiBbXVxuICAgICAgICB9XG4gICAgXVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0RGF0YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==