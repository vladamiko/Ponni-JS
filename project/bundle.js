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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
    }, {
        key: 'unsub',
        value: function unsub(channel) {
            delete this.channels[channel];
        }
    }]);

    return Mediator;
}();

var mediator = new Mediator();

module.exports = mediator;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var groupTpl = __webpack_require__(11),
    mediator = __webpack_require__(0);

var GroupView = function () {
    function GroupView() {
        _classCallCheck(this, GroupView);

        this.template = '';
        this.groupsBlock = document.querySelector('.group-wrapper');
    }

    _createClass(GroupView, [{
        key: 'setGroup',
        value: function setGroup(group) {
            this.group = group;
            this.setTemplate(this.group);
        }
    }, {
        key: 'setTemplate',
        value: function setTemplate(group) {
            this.template = groupTpl(group);
        }
    }, {
        key: 'renderGroup',
        value: function renderGroup() {
            this.groupsBlock.insertAdjacentHTML('afterbegin', this.template);
            this.addListeners();
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var formatGroupBtn = this.groupsBlock.querySelector('.format-added-btn');

            formatGroupBtn.addEventListener('click', function () {
                return mediator.pub('group:formatted', _this.group);
            });
        }
    }]);

    return GroupView;
}();

module.exports = GroupView;

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

var DirectionModel = __webpack_require__(4);

var SettingsModel = function () {
    function SettingsModel() {
        _classCallCheck(this, SettingsModel);

        this.directions = [];
    }

    _createClass(SettingsModel, [{
        key: 'getDirectionNames',
        value: function getDirectionNames() {
            var directionNames = [];

            this.directions.forEach(function (item) {
                directionNames.push(item.name);
            });

            return directionNames;
        }
    }]);

    return SettingsModel;
}();

module.exports = SettingsModel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = __webpack_require__(16),
    Filter = __webpack_require__(17);

var DirectionModel = function () {
    function DirectionModel(name) {
        _classCallCheck(this, DirectionModel);

        this.name = name;
        this.testList = [];
        this.filterList = [];
    }

    _createClass(DirectionModel, [{
        key: 'addTest',
        value: function addTest(testName, grade) {
            this.testList.push(new Test(testName, grade));
        }
    }, {
        key: 'addFilter',
        value: function addFilter(testList, action, condition, grade) {
            this.filterList.push(new Filter(testList, action, condition, grade));
        }
    }]);

    return DirectionModel;
}();

module.exports = DirectionModel;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dayTpl = __webpack_require__(20),
    mediator = __webpack_require__(0);

var DayView = function () {
    function DayView() {
        _classCallCheck(this, DayView);

        this.template = '';
        this.daysBlock = document.querySelector('.day-wrapper');
    }

    _createClass(DayView, [{
        key: 'setDay',
        value: function setDay(day) {
            this.template = dayTpl(day);
        }
    }, {
        key: 'renderDay',
        value: function renderDay() {
            this.daysBlock.insertAdjacentHTML('afterbegin', this.template);
            this.addListeners();
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var addSlotBtn = this.daysBlock.querySelector('.slot-add-btn');

            addSlotBtn.addEventListener('click', function () {
                return mediator.pub('day:addedSlot');
            });
        }
    }]);

    return DayView;
}();

module.exports = DayView;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var App = __webpack_require__(7),
        groupList = __webpack_require__(36),
        defaultDiretions = __webpack_require__(37);

    var app = new App(groupList);

    app.settingsModel.directions = defaultDiretions;
    app.start();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(8),
    DaysController = __webpack_require__(18),
    SettingsModel = __webpack_require__(3),
    SettingsController = __webpack_require__(24),
    mediator = __webpack_require__(0);

var App = function () {
    function App(groupList) {
        _classCallCheck(this, App);

        this.groupList = groupList;
        this.settingsModel = new SettingsModel();

        this.subscribe();
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
            var groupController = new GroupController(this.groupList),
                settingsController = new SettingsController(this.settingsModel.directions, this.settingsModel.getDirectionNames()),
                daysController = new DaysController();

            groupController.showGroupList();
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this = this;

            mediator.sub('group:created', function (group) {
                _this.addGroup(group);
            });
        }
    }, {
        key: 'addGroup',
        value: function addGroup(group) {
            this.groupList.push(group);
        }
    }]);

    return App;
}();

module.exports = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupListView = __webpack_require__(9),
    GroupView = __webpack_require__(1),
    PopupFormatView = __webpack_require__(12),
    GroupModel = __webpack_require__(2),
    PopupAddGroupView = __webpack_require__(14),
    SettingsModel = __webpack_require__(3),
    mediator = __webpack_require__(0);

var GroupController = function () {
    function GroupController(groupList) {
        _classCallCheck(this, GroupController);

        this.groupList = groupList;
        this.subscribe();
    }

    _createClass(GroupController, [{
        key: 'showGroupList',
        value: function showGroupList() {
            var groupListView = new GroupListView(this.groupList);

            groupListView.render();
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            mediator.sub('groupPopup:open', function () {
                var popupAddGroupView = new PopupAddGroupView();

                popupAddGroupView.renderPopup();
            });

            mediator.sub('group:created', function (group) {
                var groupListView = new GroupListView();

                groupListView.appendGroup(group);
            });

            mediator.sub('group:formatted', function (group) {
                var popupFormatView = new PopupFormatView(group);

                popupFormatView.render();
            });
        }
    }]);

    return GroupController;
}();

module.exports = GroupController;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var groupListTpl = __webpack_require__(10),
    GroupView = __webpack_require__(1),
    mediator = __webpack_require__(0);

var GroupListView = function () {
    function GroupListView(groupList) {
        _classCallCheck(this, GroupListView);

        this.template = '';
        this.groupList = groupList;
    }

    _createClass(GroupListView, [{
        key: 'render',
        value: function render() {
            var leftBlock = document.querySelector('.left-column');

            this.template = groupListTpl();

            leftBlock.insertAdjacentHTML('afterbegin', this.template);

            this.renderGroups();

            this.addListeners();
        }
    }, {
        key: 'renderGroups',
        value: function renderGroups() {
            this.groupList.forEach(function (group) {
                var groupView = new GroupView();

                groupView.setGroup(group);

                return groupView.renderGroup();
            });
        }
    }, {
        key: 'appendGroup',
        value: function appendGroup(group) {
            var groupView = new GroupView();

            groupView.setGroup(group);
            groupView.renderGroup();
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var addGroupBtn = document.querySelector('.add-group-btn'),
                settingsBtn = document.querySelector('#settings-btn');

            addGroupBtn.addEventListener('click', function () {
                return mediator.pub('groupPopup:open');
            });
            settingsBtn.addEventListener('click', function () {
                return mediator.pub('settingsPopup:open');
            });
        }
    }]);

    return GroupListView;
}();

module.exports = GroupListView;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupListTpl() {
    return '<section id="group-block">\n                <div class="group-block-head">\n                    <h1>Group</h1>\n                    <button id="settings-btn" class="btn btn-cog">\n                        <i class="fa fa-cog" aria-hidden="true"></i>\n                    </button>\n                </div>\n                <div class="group-block-body">\n                    <div class="group-block-wrapper group-wrapper"></div>\n                        <button class="btn add-group-btn">add group</button>\n                    </div>\n            </section>';
}

module.exports = groupListTpl;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupTpl(group) {
    return '<div class="group">\n                <h2 class="group-title">' + group.name + ' ' + group.direction + '</h2>\n                <div>\n                    <button class="btn format-added-btn">format added</button>\n                </div>\n            </div>';
}

module.exports = groupTpl;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var popupFormatTpl = __webpack_require__(13),
    mediator = __webpack_require__(0);

var PopupFormatView = function () {
   function PopupFormatView(group) {
      _classCallCheck(this, PopupFormatView);

      this.template = '';
      this.modal = document.querySelector('.modal-format-added');
      this.group = group;
   }

   _createClass(PopupFormatView, [{
      key: 'setGroup',
      value: function setGroup() {
         this.template = popupFormatTpl(this.group.testList);
      }
   }, {
      key: 'render',
      value: function render() {
         this.setGroup();
         this.modal.insertAdjacentHTML('afterbegin', this.template);
         this.open();
         this.addListeners();
      }
   }, {
      key: 'addListeners',
      value: function addListeners() {}
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

   return PopupFormatView;
}();

module.exports = PopupFormatView;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function popupFormatTpl(testList) {
    debugger;
    console.log(testList);
    var tests = '';

    testList.forEach(function (test) {
        tests += '<div class="test-name">' + test.name + '</div>';
    });

    return '<div id="test-list-popup" class="modal-content format">\n                <div class="format-test-list">' + tests + '\n                    <button class="btn add-test-btn">add test</button>\n                </div>\n                <button id="close-group-btn" class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = popupFormatTpl;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    GroupView = __webpack_require__(1),
    GroupModel = __webpack_require__(2),
    groupPopupTpl = __webpack_require__(15);

var PopupAddGroupView = function () {
    function PopupAddGroupView() {
        _classCallCheck(this, PopupAddGroupView);

        // directionList мы должны брать откуда то
        this.directionList = ['ui', 'php', 'js', 'java'];
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
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var closeGroupBtn = this.modal.querySelector('#close-group-btn');

            closeGroupBtn.addEventListener('click', function () {
                var data = _this.generateData(),

                // data.direction - мы получаем из наших сеттингс
                group = new GroupModel(data.name, data.direction);

                mediator.pub('group:created', group);

                _this.close();
            });
        }
    }, {
        key: 'setDirectionList',
        value: function setDirectionList(directionList) {
            this.directionList = directionList;
        }
    }, {
        key: 'generateData',
        value: function generateData() {
            var groupNameElem = this.modal.querySelector('#modal-group-name'),
                groupDirectionElem = this.modal.querySelector('#modal-group-direction'),
                data = {};

            data.direction = groupDirectionElem.options[groupDirectionElem.selectedIndex].text;
            data.name = groupNameElem.value;

            return data;
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupPopupTpl(directionList) {
    var options = '';

    directionList.forEach(function (item) {
        options += '<option>' + item + '</option>';
    });

    return '<div id="group-popup" class="modal-content">\n                <input type="text" id="modal-group-name" class="modal-group-name" placeholder="Enter group name">\n                <select id="modal-group-direction" class="modal-group-direction">' + options + '</select>\n                <button id="close-group-btn" class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = groupPopupTpl;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function Test(name, grade) {
    _classCallCheck(this, Test);

    this.name = name;
    this.grade = grade;
};

module.exports = Test;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function Filter(tests, action, condition, grade) {
    _classCallCheck(this, Filter);

    this.tests = tests;
    this.actionList = ['average', 'max', 'min', 'equal'];
    this.conditionList = ['>', '>=', '=', '<=', '<'];
    this.grade = grade;
};

module.exports = Filter;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DayListView = __webpack_require__(19),
    PopupAddDayView = __webpack_require__(21),
    mediator = __webpack_require__(0);

var DaysController = function () {
    function DaysController(groupList) {
        _classCallCheck(this, DaysController);

        this.groupList = groupList;
        this.subscribe();
        this.dayListView = new DayListView();
    }

    _createClass(DaysController, [{
        key: 'subscribe',
        value: function subscribe() {
            mediator.sub('dayPopup:open', function () {
                var popupAddDayView = new PopupAddDayView();

                popupAddDayView.renderPopup();
            });

            mediator.sub('day:created', function (day) {
                var dayListView = new DayListView(day);

                dayListView.appendDay();
            });
        }
    }, {
        key: 'showDayList',
        value: function showDayList() {
            var dayListView = new DayListView(this.groupList);
        }
    }]);

    return DaysController;
}();

module.exports = DaysController;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DayView = __webpack_require__(5),
    mediator = __webpack_require__(0);

var DayListView = function () {
    function DayListView(day) {
        _classCallCheck(this, DayListView);

        this.day = day;
        this.addListeners();
    }

    _createClass(DayListView, [{
        key: 'addListeners',
        value: function addListeners() {
            var addDayBtn = document.querySelector('.add-day-btn');

            addDayBtn.addEventListener('click', function () {
                return mediator.pub('dayPopup:open');
            });
        }
    }, {
        key: 'appendDay',
        value: function appendDay() {
            var dayView = new DayView();

            dayView.setDay(this.day.date);
            dayView.renderDay();
        }
    }]);

    return DayListView;
}();

module.exports = DayListView;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dayTpl(date) {
    return '<div class="day">\n                <h2 class="day-title">' + date + '</h2>\n                <div>\n                    <button class="btn slot-add-btn">add slot</button>\n                </div>\n            </div>';
}

module.exports = dayTpl;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    DayView = __webpack_require__(5),
    Day = __webpack_require__(22),
    popupAddDayTpl = __webpack_require__(23);

var PopupAddDayView = function () {
    function PopupAddDayView() {
        _classCallCheck(this, PopupAddDayView);

        this.modal = document.querySelector('.modal-add-day');
        this.selectedDate = '';
    }

    _createClass(PopupAddDayView, [{
        key: 'renderPopup',
        value: function renderPopup() {
            this.modal.innerHTML = popupAddDayTpl();
            this.open();
            this.addListeners();
        }
    }, {
        key: 'open',
        value: function open() {
            this.modal.classList.add('visible');
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var closeDayBtn = this.modal.querySelector('.close-day-btn'),
                dateInput = this.modal.querySelector('.dateInput');

            dateInput.addEventListener('change', function (e) {
                _this.selectedDate = e.target.value;
            });

            closeDayBtn.addEventListener('click', function (e) {
                var day = new Day(_this.selectedDate);

                mediator.pub('day:created', day);

                _this.close();
            });
        }
    }, {
        key: 'close',
        value: function close() {
            this.modal.classList.remove('visible');
        }
    }]);

    return PopupAddDayView;
}();

module.exports = PopupAddDayView;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Day = function Day(date) {
    _classCallCheck(this, Day);

    this.date = date;
};

module.exports = Day;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function popupAddDayTpl() {
    return '<div id="day-popup" class="modal-content">\n                <input type="date" class="dateInput">\n                <button class="btn btn-cog close-day-btn">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = popupAddDayTpl;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopupSettingsView = __webpack_require__(25),
    mediator = __webpack_require__(0);

var SettingsController = function () {
    function SettingsController(directions, directionNames) {
        _classCallCheck(this, SettingsController);

        this.directions = directions;
        this.directionNames = directionNames;
        this.subscribe();
    }

    _createClass(SettingsController, [{
        key: 'subscribe',
        value: function subscribe() {
            var _this = this;

            mediator.sub('settingsPopup:open', function () {
                var popupSettingsView = new PopupSettingsView(_this.directions, _this.directionNames);
                popupSettingsView.renderPopup();
            });
        }
    }]);

    return SettingsController;
}();

module.exports = SettingsController;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    PopupAddDirectionView = __webpack_require__(26),
    PopupAddTestView = __webpack_require__(28),
    PopupAddFilterView = __webpack_require__(30),
    settingsPopupTpl = __webpack_require__(32);

var PopupSettingsView = function () {
    function PopupSettingsView(directions, directionNames) {
        _classCallCheck(this, PopupSettingsView);

        this.directions = directions;
        this.directionNames = directionNames;
        this.selectedDirection = directions[0];
        this.mode = 'T';

        this.modal = document.querySelector('#modal-settings');
    }

    _createClass(PopupSettingsView, [{
        key: 'renderPopup',
        value: function renderPopup() {
            this.modal.innerHTML = settingsPopupTpl(this.directionNames, this.mode, this.selectedDirection);
            this.open();
            this.addListeners();
            this.subscribe();
        }
    }, {
        key: 'open',
        value: function open() {
            this.modal.classList.add('visible');
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var directionSelect = document.querySelector('#modal-settings-direction'),
                closeSettingsBtn = document.querySelector('#close-settings-btn'),
                selectTestBtn = document.querySelector('#test-settings-btn'),
                selectFilterBtn = document.querySelector('#filter-settings-btn'),
                addDirectionPopup = document.querySelector('.add-direction-btn'),
                addFilterTestPopup = document.querySelector('.add-test-filter-btn');

            directionSelect.addEventListener('change', function (e) {
                _this.selectedDirection = _this.directions.find(function (item) {
                    return item.name === e.target.value;
                });
                _this.mode = 'T';
                _this.renderPopup();
            });

            selectTestBtn.addEventListener('click', function () {
                _this.mode = 'T';
                _this.renderPopup();
            });

            selectFilterBtn.addEventListener('click', function () {
                _this.mode = 'F';
                _this.renderPopup();
            });

            addDirectionPopup.addEventListener('click', function () {
                var popupAddDirectionView = new PopupAddDirectionView();

                popupAddDirectionView.renderPopup();
                _this.close();
            });

            addFilterTestPopup.addEventListener('click', function () {
                var popup = _this.mode === 'T' ? new PopupAddTestView() : new PopupAddFilterView(_this.directions.testList, _this.directions.actionList, _this.directions.conditionList);

                popup.renderPopup();
                _this.close();
            });

            closeSettingsBtn.addEventListener('click', function () {
                _this.close();
            });
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
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this2 = this;

            mediator.sub('addPopup:close', function () {
                _this2.open();
            });

            // mediator.sub('groupPopup:open', () => {
            //     return this.directionNames;
            // });
        }
    }]);

    return PopupSettingsView;
}();

module.exports = PopupSettingsView;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    addDirectionPopupTpl = __webpack_require__(27);

var PopupAddDirectionView = function () {
    function PopupAddDirectionView() {
        _classCallCheck(this, PopupAddDirectionView);

        this.modal = document.querySelector('.modal-add-direction');
    }

    _createClass(PopupAddDirectionView, [{
        key: 'renderPopup',
        value: function renderPopup() {
            this.modal.innerHTML = addDirectionPopupTpl();
            this.open();
            this.addListeners();
        }
    }, {
        key: 'open',
        value: function open() {
            this.modal.classList.add('visible');
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var closeDirectionBtn = document.querySelector('.close-direction-btn'),
                directionName = document.querySelector('.add-direction-name');

            closeDirectionBtn.addEventListener('click', function () {
                _this.close();
                mediator.pub('addPopup:close');
            });

            directionName.addEventListener('input', function () {
                //
            });
        }
    }, {
        key: 'close',
        value: function close() {
            this.modal.classList.remove('visible');
        }
    }]);

    return PopupAddDirectionView;
}();

module.exports = PopupAddDirectionView;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addDirectionPopupTpl() {
    return '<div class="modal-content add-direction-popup">\n                <input type="text" class="add-direction-name" placeholder="Enter direction name">\n                <button class="btn btn-cog">\n                    <i class="fa fa-check close-direction-btn" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addDirectionPopupTpl;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    addTestPopupTpl = __webpack_require__(29);

var PopupAddTestView = function () {
    function PopupAddTestView() {
        _classCallCheck(this, PopupAddTestView);

        this.modal = document.querySelector('.modal-add-test');
    }

    _createClass(PopupAddTestView, [{
        key: 'renderPopup',
        value: function renderPopup() {
            this.modal.innerHTML = addTestPopupTpl();
            this.open();
            this.addListeners();
        }
    }, {
        key: 'open',
        value: function open() {
            this.modal.classList.add('visible');
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var closeTestBtn = document.querySelector('.close-test-btn'),
                testName = document.querySelector('.add-test-name');

            closeTestBtn.addEventListener('click', function () {
                _this.close();
                mediator.pub('addPopup:close');
                // mediator.unsub('addTestPopup:close');
            });

            testName.addEventListener('input', function () {
                //
            });
        }
    }, {
        key: 'close',
        value: function close() {
            this.modal.classList.remove('visible');
        }
    }]);

    return PopupAddTestView;
}();

module.exports = PopupAddTestView;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addTestPopupTpl() {
    return '<div class="modal-content add-test-popup">\n                <input type="text" class="add-test-name" placeholder="Enter test name">\n                <button class="btn btn-cog close-test-btn">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addTestPopupTpl;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    addFilterPopupTpl = __webpack_require__(31);

var PopupAddFilterView = function () {
    function PopupAddFilterView() {
        _classCallCheck(this, PopupAddFilterView);

        this.modal = document.querySelector('.modal-add-filter');
    }

    _createClass(PopupAddFilterView, [{
        key: 'renderPopup',
        value: function renderPopup(testList, actionList, conditionList) {
            this.modal.innerHTML = addFilterPopupTpl(testList, actionList, conditionList);
            this.open();
            this.addListeners();
        }
    }, {
        key: 'open',
        value: function open() {
            this.modal.classList.add('visible');
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var closeFilterBtn = document.querySelector('.close-filter-btn'),
                tests = document.querySelector('.left-column-filter'),
                testName = document.querySelector('.add-test-name'),
                actionSelect = document.querySelector('.modal-filter-action'),
                conditionSelect = document.querySelector('.modal-filter-condition'),
                testGrade = document.querySelector('.add-test-grade');

            closeFilterBtn.addEventListener('click', function () {
                _this.close();
                mediator.pub('addPopup:close');
            });

            tests.addEventListener('click', function () {
                //
            });

            testName.addEventListener('input', function () {
                //
            });

            actionSelect.addEventListener('change', function (e) {
                mediator.pub('actionSelect:change', e.target.value);
            });

            conditionSelect.addEventListener('change', function (e) {
                mediator.pub('conditionSelect:change', e.target.value);
            });

            testGrade.addEventListener('input', function () {
                //
            });
        }
    }, {
        key: 'close',
        value: function close() {
            this.modal.classList.remove('visible');
        }
    }]);

    return PopupAddFilterView;
}();

module.exports = PopupAddFilterView;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addFilterPopupTpl(testList, actionList, conditionList) {
    var tests = generateTestList(testList),
        actions = generateList(actionList),
        conditions = generateList(conditionList);

    function generateList(list) {
        list.forEach(function (item) {
            list += '<option>' + item + '</option>';
        });

        return list;
    }

    function generateTestList(list) {
        list.forEach(function (item) {
            list += '<li>' + item + '</li>';
        });

        return list;
    }

    return '<div class="modal-content add-filter-popup">\n                <div class="left-column-filter">\n                <ul>' + tests + '</ul>\n                </div>\n                <div class="right-column-filter">\n                    <div>\n                        <input type="text" class="add-test-name" placeholder="Enter test name">\n                    </div>\n                    <div>\n                        <select class="modal-filter-action">' + actions + '</select>\n                        <select class="modal-filter-condition">' + conditions + '</select>\n                        <input type="text" class="add-test-grade" placeholder="Enter grade">\n                    </div>\n                </div>\n                <button class="btn btn-cog close-filter-btn">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addFilterPopupTpl;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var directionListTpl = __webpack_require__(33),
    filterListSettingsTpl = __webpack_require__(34),
    testListSettingsTpl = __webpack_require__(35);

function settingsPopupTpl(directions, mode, selectedDirection) {
    var directionList = directionListTpl(directions, selectedDirection.name),
        filterList = filterListSettingsTpl(selectedDirection.filterList),
        testList = testListSettingsTpl(selectedDirection.testList);

    return '<div id="settings-popup" class="modal-content">\n                <div class="left-column-settings">' + directionList + '</div>\n                <div class="right-column-settings">\n                    <div class="column-settings">\n                        <button id="test-settings-btn" class="btn btn-ft">T</button>\n                        <button id="filter-settings-btn" class="btn btn-ft">F</button>\n                    </div>\n                    <div class="column-settings">\n                        ' + (mode === 'T' ? testList : filterList) + '\n                    </div>\n                    <div class="column-settings">\n                        <button id="close-settings-btn" class="btn btn-cog">\n                            <i class="fa fa-check" aria-hidden="true"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>';
}

module.exports = settingsPopupTpl;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function directionListTpl(directionList, selectedDirection) {
    var options = '';

    directionList.forEach(function (item) {
        options += '<option value=\'' + item + '\' ' + (selectedDirection === item ? 'selected' : '') + '>' + item + '</option>';
    });

    return '<div class="direction-list-wrapper">\n                <select id="modal-settings-direction" class="modal-settings-direction">' + options + '</select>\n                <button class="btn add-direction-btn">add direction</button>\n            </div>';
}

module.exports = directionListTpl;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function filterListSettingsTpl(filterList) {
    var filters = '';

    filterList.forEach(function (filter) {
        filters += '<div class="filter">' + filter + '</div>';
    });

    return '<div class="filter-list-wrapper">\n                <h3>Filters</h3>\n                <div class="filter-list">' + filters + '</div>\n                <button class="add-test-filter-btn btn">add filter</button>\n            </div>';
}

module.exports = filterListSettingsTpl;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function testListSettingsTpl(testsList) {
    var tests = '';

    testsList.forEach(function (test) {
        tests += '<div class="test">' + test.name + '</div>';
    });

    return '<div class="test-list-wrapper">\n                <h3>Tests</h3>\n                <div class="test-list">' + tests + '</div>\n                <button class="add-test-filter-btn btn">add test</button>\n            </div>';
}

module.exports = testListSettingsTpl;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var groupList = [{
    name: 'Dp-117',
    testList: [{
        name: 'Eng1',
        grade: 100
    }, {
        name: 'Eng2',
        grade: 100
    }, {
        name: 'Eng3',
        grade: 100
    }, {
        name: 'Eng4',
        grade: 100
    }, {
        name: 'JS Core',
        grade: 400
    }, {
        name: 'Essay',
        grade: 400
    }],
    filterList: [{
        testList: ['Eng1', 'Eng2', 'Eng3', 'Eng4'],
        action: 'average',
        condition: '>',
        grade: 60
    }, {
        testList: ['JS Core'],
        action: 'average',
        condition: '>',
        grade: 80
    }, {
        testList: ['Essay'],
        action: 'average',
        condition: '>',
        grade: 75
    }],
    testDays: [{
        date: '10/06/23',
        time: ['15:30', '17:00']
    }, {
        date: '11/06/23',
        time: ['15:30', '17:00']
    }],
    people: [{
        name: 'Harry',
        lastName: 'Potter',
        email: 'harry-potter@gmail.com',
        testDay: {
            date: '10/06/23',
            time: '15:30'
        },
        grades: {
            Eng1: 60,
            Eng2: 85,
            Eng3: 70,
            Eng4: 95,
            Core: 300,
            Essay: 260
        }
    }, {
        name: 'Ron',
        lastName: 'Wisley',
        email: 'ron-wisley@gmail.com',
        testDay: {
            date: '11/06/23',
            time: '17:00'
        },
        grades: {
            Eng1: 80,
            Eng2: 90,
            Eng3: 75,
            Eng4: 60,
            Core: 210,
            Essay: 360
        }
    }]
}, {
    name: 'Dp-121',
    testList: [{
        name: 'Eng1',
        grade: 100
    }, {
        name: 'Eng2',
        grade: 100
    }, {
        name: 'Eng3',
        grade: 100
    }, {
        name: 'Eng4',
        grade: 100
    }, {
        name: 'Go Core',
        grade: 400
    }, {
        name: 'Essay',
        grade: 400
    }],
    filterList: [{
        testList: ['Eng1', 'Eng2', 'Eng3', 'Eng4'],
        action: 'average',
        condition: '>',
        grade: 60
    }, {
        testList: ['Go Core'],
        action: 'average',
        condition: '>',
        grade: 80
    }, {
        testList: ['Essay'],
        action: 'average',
        condition: '>',
        grade: 75
    }],
    testDays: [{
        date: '10/06/23',
        time: ['15:30', '17:00']
    }, {
        date: '11/06/23',
        time: ['15:30', '17:00']
    }],
    people: [{
        name: 'Hermione',
        lastName: 'Granger',
        email: 'hermione-granger@gmail.com',
        testDay: {
            date: '10/06/23',
            time: '15:30'
        },
        grades: {
            Eng1: 60,
            Eng2: 85,
            Eng3: 70,
            Eng4: 95,
            Core: 300,
            Essay: 260
        }
    }, {
        name: 'Neville',
        lastName: 'Longbottom',
        email: 'neville-longbottom@gmail.com',
        testDay: {
            date: '11/06/23',
            time: '17:00'
        },
        grades: {
            Eng1: 80,
            Eng2: 90,
            Eng3: 75,
            Eng4: 60,
            Core: 210,
            Essay: 360
        }
    }]
}, {
    name: 'Dp-123',
    testList: [{
        name: 'Eng1',
        grade: 100
    }, {
        name: 'Eng2',
        grade: 100
    }, {
        name: 'Eng3',
        grade: 100
    }, {
        name: 'Eng4',
        grade: 100
    }, {
        name: 'PHP Core',
        grade: 400
    }, {
        name: 'Essay',
        grade: 400
    }],
    filterList: [{
        testList: ['Eng1', 'Eng2', 'Eng3', 'Eng4'],
        action: 'average',
        condition: '>',
        grade: 60
    }, {
        testList: ['PHP Core'],
        action: 'average',
        condition: '>',
        grade: 80
    }, {
        testList: ['Essay'],
        action: 'average',
        condition: '>',
        grade: 75
    }],
    testDays: [{
        date: '10/06/23',
        time: ['15:30', '17:00']
    }, {
        date: '11/06/23',
        time: ['15:30', '17:00']
    }],
    people: [{
        name: 'Draco',
        lastName: 'Malfoy',
        email: 'draco-malfoy@gmail.com',
        testDay: {
            date: '10/06/23',
            time: '15:30'
        },
        grades: {
            Eng1: 60,
            Eng2: 85,
            Eng3: 70,
            Eng4: 95,
            Core: 300,
            Essay: 260
        }
    }, {
        name: 'Peter',
        lastName: 'Griffin',
        email: 'peter-griffin@gmail.com',
        testDay: {
            date: '11/06/23',
            time: '17:00'
        },
        grades: {
            Eng1: 80,
            Eng2: 90,
            Eng3: 75,
            Eng4: 60,
            Core: 210,
            Essay: 360
        }
    }]
}];

module.exports = groupList;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DirectionModel = __webpack_require__(4);

var defaultDiretions = [new DirectionModel('UI'), new DirectionModel('JS'), new DirectionModel('PHP'), new DirectionModel('GO')];

defaultDiretions[0].addTest('Eng 1', 100);
defaultDiretions[0].addTest('Eng 2', 100);
defaultDiretions[0].addTest('Eng 3', 100);
defaultDiretions[0].addTest('Eng 4', 100);
defaultDiretions[0].addTest('Essay UI', 200);
defaultDiretions[1].addTest('Eng 1', 100);
defaultDiretions[1].addTest('Eng 2', 100);
defaultDiretions[1].addTest('Eng 3', 100);
defaultDiretions[1].addTest('JS Core', 100);
defaultDiretions[1].addTest('Essay JS', 200);
defaultDiretions[2].addTest('Eng 1', 100);
defaultDiretions[2].addTest('Eng 2', 100);
defaultDiretions[2].addTest('PHP Core', 100);
defaultDiretions[2].addTest('Essay PHP', 200);
defaultDiretions[3].addTest('Eng 1', 100);
defaultDiretions[3].addTest('Eng 2', 100);
defaultDiretions[3].addTest('Eng 3', 100);
defaultDiretions[3].addTest('Eng 4', 100);
defaultDiretions[3].addTest('GO Core', 200);
defaultDiretions[3].addTest('Essay GO', 300);

var testListUI = ['Eng 1', 'Eng 2', 'Eng 3'],
    testListJS = ['Eng 1'],
    testListPHP = ['PHP Core'],
    testListGO = ['Eng 1', 'Eng 2', 'Eng 3', 'Eng 4'];

defaultDiretions[0].addFilter(testListUI, 'average', '>', 60);
defaultDiretions[1].addFilter(testListJS, 'average', '>', 75);
defaultDiretions[2].addFilter(testListPHP, 'average', '>', 80);
defaultDiretions[3].addFilter(testListGO, 'summ', '>', 70);

module.exports = defaultDiretions;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDQ4MzViMWFhMTM5OGQyYTdiMjciLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvRGF5cy9WaWV3L0RheVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBGb3JtYXRWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL3BvcHVwRm9ybWF0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1Rlc3RzL01vZGVsL1Rlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL01vZGVsL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0RheXMvRGF5c0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9EYXlzL1ZpZXcvRGF5TGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9EYXlzL1ZpZXcvdHBsL2RheVRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0RheXMvVmlldy9Qb3B1cEFkZERheVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9EYXlzL01vZGVsL0RheS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0RheXMvVmlldy90cGwvcG9wdXBBZGREYXlUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvUG9wdXBBZGRUZXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvdHBsL2FkZFRlc3RQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0ZpbHRlcnMvVmlldy9Qb3B1cEFkZEZpbHRlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2FkZEZpbHRlclBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9maWx0ZXJMaXN0U2V0dGluZ3NUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC90ZXN0TGlzdFNldHRpbmdzVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvdGVzdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9kZWZhdWx0RGlyZXRpb25zLmpzIl0sIm5hbWVzIjpbIk1lZGlhdG9yIiwiY2hhbm5lbHMiLCJjaGFubmVsIiwiZGF0YSIsImZvckVhY2giLCJmbiIsInB1c2giLCJtZWRpYXRvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJncm91cFRwbCIsInJlcXVpcmUiLCJHcm91cFZpZXciLCJ0ZW1wbGF0ZSIsImdyb3Vwc0Jsb2NrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ3JvdXAiLCJzZXRUZW1wbGF0ZSIsImluc2VydEFkamFjZW50SFRNTCIsImFkZExpc3RlbmVycyIsImZvcm1hdEdyb3VwQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1YiIsIkdyb3VwTW9kZWwiLCJuYW1lIiwiZGlyZWN0aW9uIiwiRGlyZWN0aW9uTW9kZWwiLCJTZXR0aW5nc01vZGVsIiwiZGlyZWN0aW9ucyIsImRpcmVjdGlvbk5hbWVzIiwiaXRlbSIsIlRlc3QiLCJGaWx0ZXIiLCJ0ZXN0TGlzdCIsImZpbHRlckxpc3QiLCJ0ZXN0TmFtZSIsImdyYWRlIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZGF5VHBsIiwiRGF5VmlldyIsImRheXNCbG9jayIsImRheSIsImFkZFNsb3RCdG4iLCJpbml0IiwiQXBwIiwiZ3JvdXBMaXN0IiwiZGVmYXVsdERpcmV0aW9ucyIsImFwcCIsInNldHRpbmdzTW9kZWwiLCJzdGFydCIsIkdyb3VwQ29udHJvbGxlciIsIkRheXNDb250cm9sbGVyIiwiU2V0dGluZ3NDb250cm9sbGVyIiwic3Vic2NyaWJlIiwiZ3JvdXBDb250cm9sbGVyIiwic2V0dGluZ3NDb250cm9sbGVyIiwiZ2V0RGlyZWN0aW9uTmFtZXMiLCJkYXlzQ29udHJvbGxlciIsInNob3dHcm91cExpc3QiLCJzdWIiLCJhZGRHcm91cCIsIkdyb3VwTGlzdFZpZXciLCJQb3B1cEZvcm1hdFZpZXciLCJQb3B1cEFkZEdyb3VwVmlldyIsImdyb3VwTGlzdFZpZXciLCJyZW5kZXIiLCJwb3B1cEFkZEdyb3VwVmlldyIsInJlbmRlclBvcHVwIiwiYXBwZW5kR3JvdXAiLCJwb3B1cEZvcm1hdFZpZXciLCJncm91cExpc3RUcGwiLCJsZWZ0QmxvY2siLCJyZW5kZXJHcm91cHMiLCJncm91cFZpZXciLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiYWRkR3JvdXBCdG4iLCJzZXR0aW5nc0J0biIsInBvcHVwRm9ybWF0VHBsIiwibW9kYWwiLCJvcGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsInRlc3RzIiwidGVzdCIsImdyb3VwUG9wdXBUcGwiLCJkaXJlY3Rpb25MaXN0IiwiaW5uZXJIVE1MIiwiY2xvc2VHcm91cEJ0biIsImdlbmVyYXRlRGF0YSIsImNsb3NlIiwiZ3JvdXBOYW1lRWxlbSIsImdyb3VwRGlyZWN0aW9uRWxlbSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInZhbHVlIiwiYWN0aW9uTGlzdCIsImNvbmRpdGlvbkxpc3QiLCJEYXlMaXN0VmlldyIsIlBvcHVwQWRkRGF5VmlldyIsImRheUxpc3RWaWV3IiwicG9wdXBBZGREYXlWaWV3IiwiYXBwZW5kRGF5IiwiYWRkRGF5QnRuIiwiZGF5VmlldyIsInNldERheSIsImRhdGUiLCJyZW5kZXJEYXkiLCJEYXkiLCJwb3B1cEFkZERheVRwbCIsInNlbGVjdGVkRGF0ZSIsImNsb3NlRGF5QnRuIiwiZGF0ZUlucHV0IiwiZSIsInRhcmdldCIsIlBvcHVwU2V0dGluZ3NWaWV3IiwicG9wdXBTZXR0aW5nc1ZpZXciLCJQb3B1cEFkZERpcmVjdGlvblZpZXciLCJQb3B1cEFkZFRlc3RWaWV3IiwiUG9wdXBBZGRGaWx0ZXJWaWV3Iiwic2V0dGluZ3NQb3B1cFRwbCIsInNlbGVjdGVkRGlyZWN0aW9uIiwibW9kZSIsImRpcmVjdGlvblNlbGVjdCIsImNsb3NlU2V0dGluZ3NCdG4iLCJzZWxlY3RUZXN0QnRuIiwic2VsZWN0RmlsdGVyQnRuIiwiYWRkRGlyZWN0aW9uUG9wdXAiLCJhZGRGaWx0ZXJUZXN0UG9wdXAiLCJmaW5kIiwicG9wdXBBZGREaXJlY3Rpb25WaWV3IiwicG9wdXAiLCJhZGREaXJlY3Rpb25Qb3B1cFRwbCIsImNsb3NlRGlyZWN0aW9uQnRuIiwiZGlyZWN0aW9uTmFtZSIsImFkZFRlc3RQb3B1cFRwbCIsImNsb3NlVGVzdEJ0biIsImFkZEZpbHRlclBvcHVwVHBsIiwiY2xvc2VGaWx0ZXJCdG4iLCJhY3Rpb25TZWxlY3QiLCJjb25kaXRpb25TZWxlY3QiLCJ0ZXN0R3JhZGUiLCJnZW5lcmF0ZVRlc3RMaXN0IiwiYWN0aW9ucyIsImdlbmVyYXRlTGlzdCIsImNvbmRpdGlvbnMiLCJsaXN0IiwiZGlyZWN0aW9uTGlzdFRwbCIsImZpbHRlckxpc3RTZXR0aW5nc1RwbCIsInRlc3RMaXN0U2V0dGluZ3NUcGwiLCJmaWx0ZXJzIiwiZmlsdGVyIiwidGVzdHNMaXN0IiwidGVzdERheXMiLCJ0aW1lIiwicGVvcGxlIiwibGFzdE5hbWUiLCJlbWFpbCIsInRlc3REYXkiLCJncmFkZXMiLCJFbmcxIiwiRW5nMiIsIkVuZzMiLCJFbmc0IiwiQ29yZSIsIkVzc2F5IiwiYWRkVGVzdCIsInRlc3RMaXN0VUkiLCJ0ZXN0TGlzdEpTIiwidGVzdExpc3RQSFAiLCJ0ZXN0TGlzdEdPIiwiYWRkRmlsdGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7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cyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA0ODM1YjFhYTEzOThkMmE3YjI3IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgTWVkaWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWIgKGNoYW5uZWwsIGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YiAoY2hhbm5lbCwgZm4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YiAoY2hhbm5lbCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwVHBsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcclxuICAgICAgICB0aGlzLmdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLXdyYXBwZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcclxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XHJcbiAgICAgICAgdGhpcy5zZXRUZW1wbGF0ZSh0aGlzLmdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUZW1wbGF0ZSAoZ3JvdXApIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBUcGwoZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyb3VwICgpIHtcclxuICAgICAgICB0aGlzLmdyb3Vwc0Jsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgZm9ybWF0R3JvdXBCdG4gPSB0aGlzLmdyb3Vwc0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtYXQtYWRkZWQtYnRuJyk7XHJcblxyXG4gICAgICAgIGZvcm1hdEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cDpmb3JtYXR0ZWQnLCB0aGlzLmdyb3VwKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgR3JvdXBNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0aW5nU2Vzc2lvbiAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3QgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWx0ZXIgKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uTmFtZXMgKCkge1xyXG4gICAgXHRsZXQgZGlyZWN0aW9uTmFtZXMgPSBbXTtcclxuXHJcbiAgICBcdHRoaXMuZGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgXHRkaXJlY3Rpb25OYW1lcy5wdXNoKGl0ZW0ubmFtZSk7XHJcbiAgICBcdH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uTmFtZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgVGVzdCA9IHJlcXVpcmUoJy4uLy4uL1Rlc3RzL01vZGVsL1Rlc3QuanMnKSxcclxuICAgIEZpbHRlciA9IHJlcXVpcmUoJy4uLy4uL0ZpbHRlcnMvTW9kZWwvRmlsdGVyLmpzJyk7XHJcblxyXG5jbGFzcyBEaXJlY3Rpb25Nb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3QgKHRlc3ROYW1lLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSwgZ3JhZGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWx0ZXIgKHRlc3RMaXN0LCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcclxuICAgICAgICB0aGlzLmZpbHRlckxpc3QucHVzaChuZXcgRmlsdGVyKHRlc3RMaXN0LCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rpb25Nb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGRheVRwbCA9IHJlcXVpcmUoJy4vdHBsL2RheVRwbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgRGF5VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuZGF5c0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRheS13cmFwcGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF5IChkYXkpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZGF5VHBsKGRheSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRGF5ICgpIHtcclxuICAgICAgICB0aGlzLmRheXNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGFkZFNsb3RCdG4gPSB0aGlzLmRheXNCbG9jay5xdWVyeVNlbGVjdG9yKCcuc2xvdC1hZGQtYnRuJyk7XHJcblxyXG4gICAgICAgIGFkZFNsb3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2RheTphZGRlZFNsb3QnKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGF5VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0RheXMvVmlldy9EYXlWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgICBsZXQgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKSxcclxuICAgICAgICBncm91cExpc3QgPSByZXF1aXJlKCcuL3Rlc3REYXRhJyksXHJcbiAgICAgICAgZGVmYXVsdERpcmV0aW9ucyA9IHJlcXVpcmUoJy4vZGVmYXVsdERpcmV0aW9ucycpO1xyXG5cclxuXHJcbiAgICBsZXQgYXBwID0gbmV3IEFwcChncm91cExpc3QpO1xyXG5cclxuICAgIGFwcC5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnMgPSBkZWZhdWx0RGlyZXRpb25zO1xyXG4gICAgYXBwLnN0YXJ0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXHJcbiAgICBEYXlzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vRGF5cy9EYXlzQ29udHJvbGxlci5qcycpLFxyXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcclxuICAgICAgICB0aGlzLnNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3VwTGlzdCksXHJcbiAgICAgICAgICAgIHNldHRpbmdzQ29udHJvbGxlciA9IG5ldyBTZXR0aW5nc0NvbnRyb2xsZXIodGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnMsIHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpKSxcclxuICAgICAgICAgICAgZGF5c0NvbnRyb2xsZXIgPSBuZXcgRGF5c0NvbnRyb2xsZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDpjcmVhdGVkJywgKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkR3JvdXAoZ3JvdXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEdyb3VwIChncm91cCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0LnB1c2goZ3JvdXApO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgUG9wdXBGb3JtYXRWaWV3ID0gcmVxdWlyZSgnLi9WaWV3L1BvcHVwRm9ybWF0Vmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dHcm91cExpc3QgKCkge1xyXG4gICAgICAgIGxldCBncm91cExpc3RWaWV3ID0gbmV3IEdyb3VwTGlzdFZpZXcodGhpcy5ncm91cExpc3QpO1xyXG5cclxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cFBvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpO1xyXG5cclxuICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDpjcmVhdGVkJywgKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBncm91cExpc3RWaWV3ID0gbmV3IEdyb3VwTGlzdFZpZXcoKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwTGlzdFZpZXcuYXBwZW5kR3JvdXAoZ3JvdXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmZvcm1hdHRlZCcsIChncm91cCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9wdXBGb3JtYXRWaWV3ID0gbmV3IFBvcHVwRm9ybWF0Vmlldyhncm91cCk7XHJcblxyXG4gICAgICAgICAgICBwb3B1cEZvcm1hdFZpZXcucmVuZGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cExpc3RUcGwuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBWaWV3LmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBsZXQgbGVmdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29sdW1uJyk7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcclxuXHJcbiAgICAgICAgbGVmdEJsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckdyb3VwcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyb3VwcyAoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QuZm9yRWFjaCgoZ3JvdXApID0+IHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kR3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcclxuXHJcbiAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcclxuICAgICAgICBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyksXHJcbiAgICAgICAgICAgIHNldHRpbmdzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzLWJ0bicpO1xyXG5cclxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXBQb3B1cDpvcGVuJykpO1xyXG4gICAgICAgIHNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOm9wZW4nKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBMaXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBncm91cExpc3RUcGwgKCkge1xyXG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cImdyb3VwLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2staGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Hcm91cDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLXdyYXBwZXIgZ3JvdXAtd3JhcHBlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1ncm91cC1idG5cIj5hZGQgZ3JvdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwVHBsIChncm91cCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHtncm91cC5uYW1lfSAke2dyb3VwLmRpcmVjdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGZvcm1hdC1hZGRlZC1idG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IHBvcHVwRm9ybWF0VHBsID0gcmVxdWlyZSgnLi90cGwvcG9wdXBGb3JtYXRUcGwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwRm9ybWF0VmlldyB7XHJcbiAgIGNvbnN0cnVjdG9yIChncm91cCkge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybWF0LWFkZGVkJyk7XHJcbiAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcclxuICAgfVxyXG5cclxuICAgc2V0R3JvdXAgKCkge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlID0gcG9wdXBGb3JtYXRUcGwodGhpcy5ncm91cC50ZXN0TGlzdCk7XHJcbiAgIH1cclxuICAgXHJcbiAgIHJlbmRlciAoKSB7XHJcbiAgICAgIHRoaXMuc2V0R3JvdXAoKTtcclxuICAgICAgdGhpcy5tb2RhbC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcclxuICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgIH1cclxuXHJcbiAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgIH1cclxuXHJcbiAgIG9wZW4gKCkge1xyXG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgfVxyXG5cclxuICAgY2xvc2UgKCkge1xyXG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgfVxyXG4gICBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEZvcm1hdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEZvcm1hdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBwb3B1cEZvcm1hdFRwbCAodGVzdExpc3QpIHtcclxuICAgIGRlYnVnZ2VyO1xyXG4gICAgY29uc29sZS5sb2codGVzdExpc3QpO1xyXG4gICAgbGV0IHRlc3RzID0gJyc7XHJcblxyXG4gICAgdGVzdExpc3QuZm9yRWFjaCgodGVzdCkgPT4ge1xyXG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdC1uYW1lXCI+JHt0ZXN0Lm5hbWV9PC9kaXY+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBpZD1cInRlc3QtbGlzdC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudCBmb3JtYXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtYXQtdGVzdC1saXN0XCI+JHt0ZXN0c31cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC10ZXN0LWJ0blwiPmFkZCB0ZXN0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1ncm91cC1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBvcHVwRm9ybWF0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL3BvcHVwRm9ybWF0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICAvLyBkaXJlY3Rpb25MaXN0INC80Ysg0LTQvtC70LbQvdGLINCx0YDQsNGC0Ywg0L7RgtC60YPQtNCwINGC0L5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbJ3VpJywgJ3BocCcsICdqcycsICdqYXZhJ107XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBncm91cFBvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZW5lcmF0ZURhdGEoKSxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGEuZGlyZWN0aW9uIC0g0LzRiyDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0L3QsNGI0LjRhSDRgdC10YLRgtC40L3Qs9GBXHJcbiAgICAgICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGRhdGEubmFtZSwgZGF0YS5kaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1uYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLWRpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhID0ge307XHJcblxyXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBncm91cFBvcHVwVHBsIChkaXJlY3Rpb25MaXN0KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xyXG5cclxuICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJncm91cC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtb2RhbC1ncm91cC1uYW1lXCIgY2xhc3M9XCJtb2RhbC1ncm91cC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBncm91cCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibW9kYWwtZ3JvdXAtZGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cFBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBUZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ncmFkZSA9IGdyYWRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRlc3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvVGVzdHMvTW9kZWwvVGVzdC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMudGVzdHMgPSB0ZXN0cztcclxuICAgICAgICB0aGlzLmFjdGlvbkxpc3QgPSBbJ2F2ZXJhZ2UnLCAnbWF4JywgJ21pbicsICdlcXVhbCddO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uTGlzdCA9IFsnPicsICc+PScsICc9JywgJzw9JywgJzwnXTtcclxuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRmlsdGVycy9Nb2RlbC9GaWx0ZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgRGF5TGlzdFZpZXcgPSByZXF1aXJlKCcuLi9EYXlzL1ZpZXcvRGF5TGlzdFZpZXcuanMnKSxcclxuICAgIFBvcHVwQWRkRGF5VmlldyA9IHJlcXVpcmUoJy4uL0RheXMvVmlldy9Qb3B1cEFkZERheVZpZXcuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIERheXNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMuZGF5TGlzdFZpZXcgPSBuZXcgRGF5TGlzdFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZGF5UG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkRGF5VmlldyA9IG5ldyBQb3B1cEFkZERheVZpZXcoKTtcclxuXHJcbiAgICAgICAgICAgIHBvcHVwQWRkRGF5Vmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2RheTpjcmVhdGVkJywgKGRheSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF5TGlzdFZpZXcgPSBuZXcgRGF5TGlzdFZpZXcoZGF5KTtcclxuXHJcbiAgICAgICAgICAgIGRheUxpc3RWaWV3LmFwcGVuZERheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEYXlMaXN0ICgpIHtcclxuICAgICAgICBsZXQgZGF5TGlzdFZpZXcgPSBuZXcgRGF5TGlzdFZpZXcodGhpcy5ncm91cExpc3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERheXNDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRGF5cy9EYXlzQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBEYXlWaWV3ID0gcmVxdWlyZSgnLi9EYXlWaWV3LmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBEYXlMaXN0VmlldyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgKGRheSkge1xyXG4gICAgICAgIHRoaXMuZGF5ID0gZGF5O1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgYWRkRGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kYXktYnRuJyk7XHJcblxyXG4gICAgICAgIGFkZERheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZGF5UG9wdXA6b3BlbicpKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmREYXkgKCkge1xyXG4gICAgICAgIGxldCBkYXlWaWV3ID0gbmV3IERheVZpZXcoKTtcclxuXHJcbiAgICAgICAgZGF5Vmlldy5zZXREYXkodGhpcy5kYXkuZGF0ZSk7XHJcbiAgICAgICAgZGF5Vmlldy5yZW5kZXJEYXkoKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEYXlMaXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0RheXMvVmlldy9EYXlMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGRheVRwbCAoZGF0ZSkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGF5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJkYXktdGl0bGVcIj4ke2RhdGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBzbG90LWFkZC1idG5cIj5hZGQgc2xvdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGF5VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRGF5cy9WaWV3L3RwbC9kYXlUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgRGF5VmlldyA9IHJlcXVpcmUoJy4vRGF5Vmlldy5qcycpLFxyXG4gICAgRGF5ID0gcmVxdWlyZSgnLi4vLi4vRGF5cy9Nb2RlbC9EYXkuanMnKSxcclxuICAgIHBvcHVwQWRkRGF5VHBsID0gcmVxdWlyZSgnLi4vLi4vRGF5cy9WaWV3L3RwbC9wb3B1cEFkZERheVRwbC5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBBZGREYXlWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1kYXknKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHBvcHVwQWRkRGF5VHBsKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZURheUJ0biA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignLmNsb3NlLWRheS1idG4nKSxcclxuICAgICAgICAgICAgZGF0ZUlucHV0ID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcuZGF0ZUlucHV0Jyk7XHJcblxyXG4gICAgICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjbG9zZURheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXkgPSBuZXcgRGF5KHRoaXMuc2VsZWN0ZWREYXRlKTtcclxuXHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGF5OmNyZWF0ZWQnLCBkYXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZERheVZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9EYXlzL1ZpZXcvUG9wdXBBZGREYXlWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgRGF5IHtcclxuICAgIGNvbnN0cnVjdG9yIChkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEYXk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9EYXlzL01vZGVsL0RheS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHBvcHVwQWRkRGF5VHBsICgpIHtcclxuICAgIHJldHVybiBgPGRpdiBpZD1cImRheS1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJkYXRlSW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZyBjbG9zZS1kYXktYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBvcHVwQWRkRGF5VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRGF5cy9WaWV3L3RwbC9wb3B1cEFkZERheVRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBQb3B1cFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9ucywgZGlyZWN0aW9uTmFtZXMpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTmFtZXMgPSBkaXJlY3Rpb25OYW1lcztcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgbGV0IHBvcHVwU2V0dGluZ3NWaWV3ID0gbmV3IFBvcHVwU2V0dGluZ3NWaWV3KHRoaXMuZGlyZWN0aW9ucywgdGhpcy5kaXJlY3Rpb25OYW1lcyk7XHJcbiAgICAgICAgICAgICBwb3B1cFNldHRpbmdzVmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBQb3B1cEFkZERpcmVjdGlvblZpZXcgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRGlyZWN0aW9uVmlldy5qcycpLFxyXG4gICAgUG9wdXBBZGRUZXN0VmlldyA9IHJlcXVpcmUoJy4uLy4uL1Rlc3RzL1ZpZXcvUG9wdXBBZGRUZXN0Vmlldy5qcycpLFxyXG4gICAgUG9wdXBBZGRGaWx0ZXJWaWV3ID0gcmVxdWlyZSgnLi4vLi4vRmlsdGVycy9WaWV3L1BvcHVwQWRkRmlsdGVyVmlldy5qcycpLFxyXG4gICAgc2V0dGluZ3NQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwU2V0dGluZ3NWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yIChkaXJlY3Rpb25zLCBkaXJlY3Rpb25OYW1lcykge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25OYW1lcyA9IGRpcmVjdGlvbk5hbWVzO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24gPSBkaXJlY3Rpb25zWzBdO1xyXG4gICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHNldHRpbmdzUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25OYW1lcywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNldHRpbmdzLWRpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBjbG9zZVNldHRpbmdzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBzZWxlY3RUZXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3Qtc2V0dGluZ3MtYnRuJyksXHJcbiAgICAgICAgICAgIHNlbGVjdEZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItc2V0dGluZ3MtYnRuJyksXHJcbiAgICAgICAgICAgIGFkZERpcmVjdGlvblBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kaXJlY3Rpb24tYnRuJyksXHJcbiAgICAgICAgICAgIGFkZEZpbHRlclRlc3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1maWx0ZXItYnRuJyk7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0VGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGVjdEZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ0YnO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZERpcmVjdGlvblBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gbmV3IFBvcHVwQWRkRGlyZWN0aW9uVmlldygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcG9wdXBBZGREaXJlY3Rpb25WaWV3LnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkRmlsdGVyVGVzdFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9wdXAgPSB0aGlzLm1vZGUgPT09ICdUJz8gbmV3IFBvcHVwQWRkVGVzdFZpZXcoKTogbmV3IFBvcHVwQWRkRmlsdGVyVmlldyh0aGlzLmRpcmVjdGlvbnMudGVzdExpc3QsIHRoaXMuZGlyZWN0aW9ucy5hY3Rpb25MaXN0LCB0aGlzLmRpcmVjdGlvbnMuY29uZGl0aW9uTGlzdCk7XHJcblxyXG4gICAgICAgICAgICBwb3B1cC5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNsb3NlU2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZURhdGEgKCkge1xyXG4gICAgICAgIGxldCBncm91cE5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBOYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwRGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2FkZFBvcHVwOmNsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gbWVkaWF0b3Iuc3ViKCdncm91cFBvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbk5hbWVzO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBhZGREaXJlY3Rpb25Qb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cEFkZERpcmVjdGlvblZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLWRpcmVjdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGFkZERpcmVjdGlvblBvcHVwVHBsKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZURpcmVjdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1kaXJlY3Rpb24tYnRuJyksXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpcmVjdGlvbi1uYW1lJyk7XHJcblxyXG5cclxuICAgICAgICBjbG9zZURpcmVjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FkZFBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvbk5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkRGlyZWN0aW9uVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gYWRkRGlyZWN0aW9uUG9wdXBUcGwgKCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBhZGQtZGlyZWN0aW9uLXBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC1kaXJlY3Rpb24tbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGlyZWN0aW9uIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2sgY2xvc2UtZGlyZWN0aW9uLWJ0blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFkZERpcmVjdGlvblBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgYWRkVGVzdFBvcHVwVHBsID0gcmVxdWlyZSgnLi90cGwvYWRkVGVzdFBvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cEFkZFRlc3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC10ZXN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYWRkVGVzdFBvcHVwVHBsKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZVRlc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtdGVzdC1idG4nKSxcclxuICAgICAgICAgICAgdGVzdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRlc3QtbmFtZScpO1xyXG5cclxuICAgICAgICBjbG9zZVRlc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGRQb3B1cDpjbG9zZScpO1xyXG4gICAgICAgICAgICAvLyBtZWRpYXRvci51bnN1YignYWRkVGVzdFBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRlc3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZFRlc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvVGVzdHMvVmlldy9Qb3B1cEFkZFRlc3RWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gYWRkVGVzdFBvcHVwVHBsICgpIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgYWRkLXRlc3QtcG9wdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLXRlc3QtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGVzdCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1jb2cgY2xvc2UtdGVzdC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYWRkVGVzdFBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvVGVzdHMvVmlldy90cGwvYWRkVGVzdFBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIGFkZEZpbHRlclBvcHVwVHBsID0gcmVxdWlyZSgnLi90cGwvYWRkRmlsdGVyUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkRmlsdGVyVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtZmlsdGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKHRlc3RMaXN0LCBhY3Rpb25MaXN0LCBjb25kaXRpb25MaXN0KSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBhZGRGaWx0ZXJQb3B1cFRwbCh0ZXN0TGlzdCwgYWN0aW9uTGlzdCwgY29uZGl0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1maWx0ZXItYnRuJyksXHJcbiAgICAgICAgICAgIHRlc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29sdW1uLWZpbHRlcicpLFxyXG4gICAgICAgICAgICB0ZXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1uYW1lJyksXHJcbiAgICAgICAgICAgIGFjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWx0ZXItYWN0aW9uJyksXHJcbiAgICAgICAgICAgIGNvbmRpdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWx0ZXItY29uZGl0aW9uJyksXHJcbiAgICAgICAgICAgIHRlc3RHcmFkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1ncmFkZScpO1xyXG5cclxuXHJcbiAgICAgICAgY2xvc2VGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGRQb3B1cDpjbG9zZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0ZXN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGVzdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFjdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FjdGlvblNlbGVjdDpjaGFuZ2UnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbmRpdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2NvbmRpdGlvblNlbGVjdDpjaGFuZ2UnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRlc3RHcmFkZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRGaWx0ZXJWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRmlsdGVycy9WaWV3L1BvcHVwQWRkRmlsdGVyVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGFkZEZpbHRlclBvcHVwVHBsICh0ZXN0TGlzdCwgYWN0aW9uTGlzdCwgY29uZGl0aW9uTGlzdCkge1xyXG4gICAgbGV0IHRlc3RzID0gZ2VuZXJhdGVUZXN0TGlzdCh0ZXN0TGlzdCksXHJcbiAgICAgICAgYWN0aW9ucyA9IGdlbmVyYXRlTGlzdChhY3Rpb25MaXN0KSxcclxuICAgICAgICBjb25kaXRpb25zID0gZ2VuZXJhdGVMaXN0KGNvbmRpdGlvbkxpc3QpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTGlzdCAobGlzdCkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0ICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRlc3RMaXN0IChsaXN0KSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QgKz0gYDxsaT4ke2l0ZW19PC9saT5gO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC1maWx0ZXItcG9wdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbHVtbi1maWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx1bD4ke3Rlc3RzfTwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZGQtdGVzdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXN0IG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwibW9kYWwtZmlsdGVyLWFjdGlvblwiPiR7YWN0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIm1vZGFsLWZpbHRlci1jb25kaXRpb25cIj4ke2NvbmRpdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLXRlc3QtZ3JhZGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZyBjbG9zZS1maWx0ZXItYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFkZEZpbHRlclBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRmlsdGVycy9WaWV3L3RwbC9hZGRGaWx0ZXJQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBkaXJlY3Rpb25MaXN0VHBsID0gcmVxdWlyZSgnLi9kaXJlY3Rpb25MaXN0VHBsLmpzJyksXHJcbiAgICBmaWx0ZXJMaXN0U2V0dGluZ3NUcGwgPSByZXF1aXJlKCcuL2ZpbHRlckxpc3RTZXR0aW5nc1RwbC5qcycpLFxyXG4gICAgdGVzdExpc3RTZXR0aW5nc1RwbCA9IHJlcXVpcmUoJy4vdGVzdExpc3RTZXR0aW5nc1RwbC5qcycpO1xyXG5cclxuZnVuY3Rpb24gc2V0dGluZ3NQb3B1cFRwbCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgIGxldCBkaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdFRwbChkaXJlY3Rpb25zLCBzZWxlY3RlZERpcmVjdGlvbi5uYW1lKSxcclxuICAgICAgICBmaWx0ZXJMaXN0ID0gZmlsdGVyTGlzdFNldHRpbmdzVHBsKHNlbGVjdGVkRGlyZWN0aW9uLmZpbHRlckxpc3QpLFxyXG4gICAgICAgIHRlc3RMaXN0ID0gdGVzdExpc3RTZXR0aW5nc1RwbChzZWxlY3RlZERpcmVjdGlvbi50ZXN0TGlzdCk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwic2V0dGluZ3MtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbHVtbi1zZXR0aW5nc1wiPiR7ZGlyZWN0aW9uTGlzdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0ZXN0LXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1mdFwiPlQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbHRlci1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5GPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke21vZGUgPT09ICdUJz8gdGVzdExpc3Q6IGZpbHRlckxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2Utc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXR0aW5nc1BvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGRpcmVjdGlvbkxpc3RUcGwgKGRpcmVjdGlvbkxpc3QsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xyXG5cclxuICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9JyR7aXRlbX0nICR7c2VsZWN0ZWREaXJlY3Rpb24gPT09IGl0ZW0/ICdzZWxlY3RlZCc6ICcnfT4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImRpcmVjdGlvbi1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWRpcmVjdGlvbi1idG5cIj5hZGQgZGlyZWN0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGlyZWN0aW9uTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJMaXN0U2V0dGluZ3NUcGwgKGZpbHRlckxpc3QpIHtcclxuICAgIGxldCBmaWx0ZXJzID0gJyc7XHJcblxyXG4gICAgZmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICBmaWx0ZXJzICs9IGA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+JHtmaWx0ZXJ9PC9kaXY+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdFwiPiR7ZmlsdGVyc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGVzdC1maWx0ZXItYnRuIGJ0blwiPmFkZCBmaWx0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmaWx0ZXJMaXN0U2V0dGluZ3NUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9maWx0ZXJMaXN0U2V0dGluZ3NUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0TGlzdFNldHRpbmdzVHBsICh0ZXN0c0xpc3QpIHtcclxuICAgIGxldCB0ZXN0cyA9ICcnO1xyXG5cclxuICAgIHRlc3RzTGlzdC5mb3JFYWNoKCh0ZXN0KSA9PiB7XHJcbiAgICAgICAgdGVzdHMgKz0gYDxkaXYgY2xhc3M9XCJ0ZXN0XCI+JHt0ZXN0Lm5hbWV9PC9kaXY+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRlc3QtbGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+VGVzdHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlc3QtbGlzdFwiPiR7dGVzdHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRlc3QtZmlsdGVyLWJ0biBidG5cIj5hZGQgdGVzdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRlc3RMaXN0U2V0dGluZ3NUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC90ZXN0TGlzdFNldHRpbmdzVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRHAtMTE3JyxcclxuICAgICAgICB0ZXN0TGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdKUyBDb3JlJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZmlsdGVyTGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0pTIENvcmUnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlc3REYXlzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBlb3BsZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGFycnknLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdQb3R0ZXInLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdoYXJyeS1wb3R0ZXJAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDI2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUm9uJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnV2lzbGV5JyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAncm9uLXdpc2xleUBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE3OjAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ0RwLTEyMScsXHJcbiAgICAgICAgdGVzdExpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnR28gQ29yZScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRW5nMScsICdFbmcyJywgJ0VuZzMnLCAnRW5nNCddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydHbyBDb3JlJ10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXN0RGF5czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwZW9wbGU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0hlcm1pb25lJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnR3JhbmdlcicsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hlcm1pb25lLWdyYW5nZXJAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDI2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV2aWxsZScsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ0xvbmdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICduZXZpbGxlLWxvbmdib3R0b21AZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdEcC0xMjMnLFxyXG4gICAgICAgIHRlc3RMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BIUCBDb3JlJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZmlsdGVyTGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ1BIUCBDb3JlJ10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXN0RGF5czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwZW9wbGU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RyYWNvJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnTWFsZm95JyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnZHJhY28tbWFsZm95QGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTU6MzAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogOTUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BldGVyJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnR3JpZmZpbicsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3BldGVyLWdyaWZmaW5AZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSBcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdGVzdERhdGEuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyk7XHJcblxyXG5sZXQgZGVmYXVsdERpcmV0aW9ucyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEaXJlY3Rpb25Nb2RlbCgnVUknKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGlyZWN0aW9uTW9kZWwoJ0pTJyksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpcmVjdGlvbk1vZGVsKCdQSFAnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEaXJlY3Rpb25Nb2RlbCgnR08nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG5cclxuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRUZXN0KCdFbmcgMScsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMF0uYWRkVGVzdCgnRW5nIDInLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzBdLmFkZFRlc3QoJ0VuZyAzJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRUZXN0KCdFbmcgNCcsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMF0uYWRkVGVzdCgnRXNzYXkgVUknLCAyMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZFRlc3QoJ0VuZyAxJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1sxXS5hZGRUZXN0KCdFbmcgMicsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMV0uYWRkVGVzdCgnRW5nIDMnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZFRlc3QoJ0pTIENvcmUnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZFRlc3QoJ0Vzc2F5IEpTJywgMjAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRUZXN0KCdFbmcgMScsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMl0uYWRkVGVzdCgnRW5nIDInLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzJdLmFkZFRlc3QoJ1BIUCBDb3JlJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRUZXN0KCdFc3NheSBQSFAnLCAyMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0VuZyAxJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdFbmcgMicsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbM10uYWRkVGVzdCgnRW5nIDMnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0VuZyA0JywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdHTyBDb3JlJywgMjAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdFc3NheSBHTycsIDMwMCk7XHJcblxyXG5sZXQgdGVzdExpc3RVSSA9IFsnRW5nIDEnLCAnRW5nIDInLCAnRW5nIDMnLF0sXHJcbiAgICB0ZXN0TGlzdEpTID0gWydFbmcgMScsXSxcclxuICAgIHRlc3RMaXN0UEhQID0gWydQSFAgQ29yZSddLFxyXG4gICAgdGVzdExpc3RHTyA9IFsnRW5nIDEnLCAnRW5nIDInLCAnRW5nIDMnLCdFbmcgNCddO1xyXG5cclxuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRGaWx0ZXIodGVzdExpc3RVSSwgJ2F2ZXJhZ2UnLCAnPicsIDYwKTtcclxuZGVmYXVsdERpcmV0aW9uc1sxXS5hZGRGaWx0ZXIodGVzdExpc3RKUywgJ2F2ZXJhZ2UnLCAnPicsIDc1KTtcclxuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRGaWx0ZXIodGVzdExpc3RQSFAsICdhdmVyYWdlJywgJz4nLCA4MCk7XHJcbmRlZmF1bHREaXJldGlvbnNbM10uYWRkRmlsdGVyKHRlc3RMaXN0R08sICdzdW1tJywgJz4nLCA3MCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHREaXJldGlvbnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9kZWZhdWx0RGlyZXRpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==