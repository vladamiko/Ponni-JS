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
    function PopupAddGroupView(directionList) {
        _classCallCheck(this, PopupAddGroupView);

        this.directionList = directionList;
        this.modal = document.querySelector('#modal-add-group');
        this.renderPopup();
    }

    /*generateDirectionListTpl (directionList) {
        let options = '';
          directionList.forEach((item) => {
            options += `<option>${item}</option>`;
        });
          return options;
    }
      addDirectionList (directionList) {
        let select = document.querySelector('#modal-add-group select');
          select.innerHTML = this.generateDirectionListTpl(directionList);
    }*/

    _createClass(PopupAddGroupView, [{
        key: 'renderPopup',
        value: function renderPopup() {
            this.modal.innerHTML = groupPopupTpl(this.directionList);
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
    }], [{
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupPopupTpl(directionList) {
    var options = '';

    directionList.forEach(function (item) {
        options += '<option>' + item + '</option>';
    });

    return '<div id="group-popup" class="modal-content">\n                <input type="text" class="modal-group_name" placeholder="Enter group name">\n                <select class="modal-group_direction">' + options + '</select>\n                <button id="close-group-btn" class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n          </div>';
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

                var settingsModel = new SettingsModel(),
                    popupAddGroupView = new PopupAddGroupView(settingsModel.getDirectionList());
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

                // Тут надо подумать!!!         
                PopupAddGroupView.close();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjY3OGJhM2FmMTA4YTE4NzNkNjQiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZFNldHRpbmdWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJncm91cFRwbCIsInJlcXVpcmUiLCJHcm91cFZpZXciLCJ0ZW1wbGF0ZSIsImFkZExpc3RlbmVycyIsImdyb3VwIiwiZ3JvdXBzQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJTZXR0aW5nc01vZGVsIiwiZGlyZWN0aW9uTGlzdCIsImRpcmVjdGlvbk5hbWUiLCJ0ZXN0TGlzdCIsIkRpcmVjdGlvbiIsImdyb3VwTGlzdFRwbCIsIkdyb3VwTGlzdFZpZXciLCJsZWZ0QmxvY2siLCJhZGRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJtb2RhbCIsInJlbmRlclBvcHVwIiwiaW5uZXJIVE1MIiwib3BlbiIsImNsb3NlR3JvdXBCdG4iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvcHRpb25zIiwiaXRlbSIsIlBvcHVwQWRkU2V0dGluZ1ZpZXciLCJjbG9zZVNldHRpbmdCdG4iLCJzdWIiLCJjbG9zZSIsIkdyb3VwQ29udHJvbGxlciIsImdyb3VwcyIsInN1YnNjcmliZSIsImdyb3VwTGlzdFZpZXciLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwic2V0dGluZ3NNb2RlbCIsInBvcHVwQWRkR3JvdXBWaWV3IiwiZ2V0RGlyZWN0aW9uTGlzdCIsImdyb3VwTmFtZUVsZW0iLCJncm91cERpcmVjdGlvbkVsZW0iLCJncm91cERpcmVjdGlvblZhbHVlIiwiZ3JvdXBOYW1lVGV4dCIsImdyb3VwVmlldyIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwidmFsdWUiLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiaW5pdCIsIkRpcmVjdGlvbk1vZGVsIiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJTZXR0aW5nc1ZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJBcHAiLCJ0ZXN0RGF0YSIsImFwcCIsInN0YXJ0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwiVGVzdCIsInRlc3RzIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJGaWx0ZXIiLCJleHBvcnQiLCJtYXhHcmFkZSIsInNldHRpbmdzIiwiZ3JvdXBDb250cm9sbGVyIiwic2hvd0dyb3VwTGlzdCIsImZpbHRlcnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7Ozs7SUFFTUEsUTtBQUNGLHdCQUFlO0FBQUE7O0FBQ1gsYUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7OzRCQUVJQyxPLEVBQVNDLEksRUFBTTtBQUNoQixnQkFBSSxLQUFL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QUVBLElBQUlDLFdBQVc7QUFDWDFCLFlBQVEsQ0FDSjtBQUNJdkMsbUJBQVcsSUFEZjtBQUVJRCxjQUFNO0FBRlYsS0FESSxFQUtKO0FBQ0lDLG1CQUFXLElBRGY7QUFFSUQsY0FBTTtBQUZWLEtBTEksRUFTSjtBQUNJQyxtQkFBVyxLQURmO0FBRUlELGNBQU07QUFGVixLQVRJLENBREc7QUFlWCtFLGNBQVUsQ0FDTjtBQUNJOUUsbUJBQVcsSUFEZjtBQUVJdUUsZUFBTyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFNBQWpCLEVBQTRCLE9BQTVCLENBRlg7QUFHSVUsaUJBQVM7QUFIYixLQURNO0FBZkMsQ0FBZjs7QUF3QkFyRixPQUFPQyxPQUFQLEdBQWlCb0UsUUFBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjY3OGJhM2FmMTA4YTE4NzNkNjQiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBNZWRpYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YiAoY2hhbm5lbCwgZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0uZm9yRWFjaCgoZm4pID0+IGZuKGRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3ViIChjaGFubmVsLCBmbikge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLnB1c2goZm4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBHcm91cE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlciAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwVHBsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdyb3VwIChncm91cCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cFRwbChncm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyR3JvdXAgKCkge1xyXG4gICAgICAgIGxldCBncm91cHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cF93cmFwcGVyJyk7XHJcblxyXG4gICAgICAgIGdyb3Vwc0Jsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gWydVSScsICdHTycsICdQSFAnLCAnT3RoZXInXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGREaXJlY3Rpb24gKGRpcmVjdGlvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IERpcmVjdGlvbihkaXJlY3Rpb25OYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uTGlzdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uTGlzdDtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwVHBsIChncm91cCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHtncm91cC5uYW1lfSAke2dyb3VwLmRpcmVjdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cExpc3RUcGwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwTGlzdFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGxldCBsZWZ0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1jb2x1bW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwTGlzdFRwbCgpO1xyXG5cclxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKTtcclxuXHJcbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2dyb3VwUG9wdXA6b3BlbicpKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwTGlzdFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9ja19faGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Hcm91cDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJhZGQtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2tfX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2tfX3dyYXBwZXIgZ3JvdXBfd3JhcHBlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1ncm91cC1idG5cIj5hZGQgZ3JvdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cEFkZEdyb3VwVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9uTGlzdCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3Q7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcclxuICAgICAgICB0aGlzLnJlbmRlclBvcHVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLypnZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9ICcnO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGlyZWN0aW9uTGlzdCAoZGlyZWN0aW9uTGlzdCkge1xyXG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwIHNlbGVjdCcpO1xyXG5cclxuICAgICAgICBzZWxlY3QuaW5uZXJIVE1MID0gdGhpcy5nZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9uTGlzdCk7XHJcbiAgICB9Ki9cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBncm91cFBvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWdyb3VwLWJ0bicpO1xyXG5cclxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cDphZGRlZCcpKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY2xvc2UgKCkge1xyXG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcclxuICAgICAgICBcclxuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwUG9wdXBUcGwgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcblxyXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBpZD1cImdyb3VwLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm1vZGFsLWdyb3VwX25hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJtb2RhbC1ncm91cF9kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cEFkZFNldHRpbmdWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlU2V0dGluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZXR0aW5nLWJ0bicpO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmc6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1zZXR0aW5nJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNsb3NlU2V0dGluZ0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1Yignc2V0dGluZzpvcGVuJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLXNldHRpbmcnKTtcclxuXHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkU2V0dGluZ1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkU2V0dGluZ1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICBQb3B1cEFkZFNldHRpbmdWaWV3ID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvVmlldy9Qb3B1cEFkZFNldHRpbmdWaWV3LmpzJyksXHJcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cHMpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dHcm91cExpc3QgKCkge1xyXG4gICAgICAgIGxldCBncm91cExpc3RWaWV3ID0gbmV3IEdyb3VwTGlzdFZpZXcoKTtcclxuXHJcbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3BlbicpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbCgpLFxyXG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25MaXN0KCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmFkZGVkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ncm91cF9uYW1lJyksXHJcbiAgICAgICAgICAgICAgICBncm91cERpcmVjdGlvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZ3JvdXBfZGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgICAgICBncm91cERpcmVjdGlvblZhbHVlID0gJycsXHJcbiAgICAgICAgICAgICAgICBncm91cE5hbWVUZXh0ID0gJycsXHJcbiAgICAgICAgICAgICAgICBncm91cFZpZXcgPSB7fSxcclxuICAgICAgICAgICAgICAgIGdyb3VwID0ge307XHJcblxyXG4gICAgICAgICAgICBncm91cERpcmVjdGlvblZhbHVlID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICAgICAgICAgIGdyb3VwTmFtZVRleHQgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXAgPSBuZXcgR3JvdXBNb2RlbChncm91cE5hbWVUZXh0LCBncm91cERpcmVjdGlvblZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XHJcbiAgICAgICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xyXG5cclxuICAgICAgICAgICAgLy8g0KLRg9GCINC90LDQtNC+INC/0L7QtNGD0LzQsNGC0YwhISEgICAgICAgICBcclxuICAgICAgICAgICAgUG9wdXBBZGRHcm91cFZpZXcuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgICBsZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXHJcbiAgICAgICAgRmlsdGVyTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzJyksXHJcbiAgICAgICAgVGVzdE1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMnKSxcclxuICAgICAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXHJcbiAgICAgICAgU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcycpLFxyXG4gICAgICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXHJcbiAgICAgICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcclxuICAgICAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgICAgIEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcclxuICAgICAgICBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMnKSxcclxuICAgICAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcclxuICAgICAgICBQb3B1cEFkZFNldHRpbmdWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkU2V0dGluZ1ZpZXcuanMnKSxcclxuICAgICAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpLFxyXG4gICAgICAgIGdyb3VwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMnKSxcclxuICAgICAgICBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcclxuICAgICAgICBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxyXG4gICAgICAgIHRlc3REYXRhID0gcmVxdWlyZSgnLi90ZXN0RGF0YS5qcycpLFxyXG4gICAgICAgIE1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xyXG5cclxuICAgIGxldCBhcHAgPSBuZXcgQXBwKCk7XHJcblxyXG4gICAgYXBwLnN0YXJ0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBEaXJlY3Rpb25Nb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9uTmFtZSkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTmFtZSA9IGRpcmVjdGlvbk5hbWU7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3QgKHRlc3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGVzdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbHRlciAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEZpbHRlck1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xyXG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcclxuICAgIH1cclxuXHJcbi8vIGFkZFRlc3QsIGNoYW5nZUFjdGlvbiwgY2hhbmdlQ29uZGl0aW9uLCBjaGFuZ2VHcmFkZVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0gRmlsdGVyTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFRlc3RNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbWF4R3JhZGUsIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XHJcbiAgICAgICAgLy8gdGhpcy5ncmFkZSA9IGdyYWRlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnQgPSBUZXN0TW9kZWw7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnQgPSBTZXR0aW5nc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyk7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzID0gW107XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3Vwcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZ3JvdXBDb250cm9sbGVyLnNob3dHcm91cExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHcm91cHMgKGdyb3Vwcykge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgdGVzdERhdGEgPSB7XHJcbiAgICBncm91cHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcclxuICAgICAgICAgICAgbmFtZTogJ2RwLTExNy1qcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnZ28nLFxyXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTIzLWdvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdwaHAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTI3LXBocCdcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgc2V0dGluZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcclxuICAgICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0pTIENvcmUnLCAnRXNzYXknXSxcclxuICAgICAgICAgICAgZmlsdGVyczogW11cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRlc3REYXRhO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdGVzdERhdGEuanMiXSwic291cmNlUm9vdCI6IiJ9