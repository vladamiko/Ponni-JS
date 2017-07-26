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

var groupTpl = __webpack_require__(10),
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

var Test = __webpack_require__(15),
    Filter = __webpack_require__(16);

var DirectionModel = function () {
    function DirectionModel(name) {
        _classCallCheck(this, DirectionModel);

        this.name = name;
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


document.addEventListener('DOMContentLoaded', init);

function init() {
    var App = __webpack_require__(6),
        groupList = __webpack_require__(23),
        defaultDiretions = __webpack_require__(24);

    var app = new App(groupList);

    app.settingsModel.directions = defaultDiretions;
    app.start();
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(7),
    DaysController = __webpack_require__(26),
    SettingsModel = __webpack_require__(3),
    SettingsController = __webpack_require__(17),
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupListView = __webpack_require__(8),
    GroupView = __webpack_require__(1),
    PopupFormatView = __webpack_require__(11),
    GroupModel = __webpack_require__(2),
    PopupAddGroupView = __webpack_require__(13),
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var groupListTpl = __webpack_require__(9),
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupListTpl() {
    return '<section id="group-block">\n                <div class="group-block-head">\n                    <h1>Group</h1>\n                    <button id="settings-btn" class="btn btn-cog">\n                        <i class="fa fa-cog" aria-hidden="true"></i>\n                    </button>\n                </div>\n                <div class="group-block-body">\n                    <div class="group-block-wrapper group-wrapper"></div>\n                        <button class="btn add-group-btn">add group</button>\n                    </div>\n            </section>';
}

module.exports = groupListTpl;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupTpl(group) {
    return '<div class="group">\n                <h2 class="group-title">' + group.name + ' ' + group.direction + '</h2>\n                <div>\n                    <button class="btn format-added-btn">format added</button>\n                </div>\n            </div>';
}

module.exports = groupTpl;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var popupFormatTpl = __webpack_require__(12),
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    GroupView = __webpack_require__(1),
    GroupModel = __webpack_require__(2),
    groupPopupTpl = __webpack_require__(14);

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
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopupSettingsView = __webpack_require__(18),

// PopupAddGroupView = require('../Groups/View/PopupAddGroupView.js'),
// PopupAddDirectionView = require('../Settings/View/PopupAddDirectionView.js'),
// SettingsModel = require('../Settings/Model/SettingsModel.js'),
// DirectionModel = require('../Settings/Model/DirectionModel.js'),
mediator = __webpack_require__(0);

var SettingsController = function () {
    function SettingsController(directions, directionNames) {
        _classCallCheck(this, SettingsController);

        this.directions = directions;
        this.directionNames = directionNames;
        // this.settingsModel = new SettingsModel(defaultDirections);
        // this.popupSettingsView = new PopupSettingsView(directions);
        // this.popupAddDirectionView = new PopupAddDirectionView();
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

        // subscribe () {
        //     this.subscribeOpenPopups();
        //     this.subscribeSelectDirection();
        //     this.subscribeSelectFilter();
        //     this.subscribeSelectTest();
        // }

        // subscribeOpenPopups () {
        //     mediator.sub('settingsPopup:open', () => {
        //         let directions = this.settingsModel.getDirectionNames();


        //         this.selectedDirection = this.settingsModel.directions[0];
        //         this.mode = 'T';

        //         this.popupSettingsView.renderPopup(directions, this.mode, this.selectedDirection);
        //         this.subscribeClosePopup();
        //     });

        //     mediator.sub('groupPopup:open', () => {
        //         let popupAddGroupView = new PopupAddGroupView(),
        //             directions = this.settingsModel.getDirectionNames();

        //             popupAddGroupView.setDirectionList(directions);
        //             popupAddGroupView.renderPopup();
        //     });

        //     mediator.sub('addDirectionPopup:open', () => {
        //         let popupAddDirectionView = new PopupAddDirectionView();

        //         popupAddDirectionView.renderPopup();
        //         this.popupSettingsView.close();
        //         this.subscribeClosePopup();
        //     });
        // }

        // subscribeClosePopup () {
        //     mediator.sub('settingsPopup:close', () => {
        //         this.popupSettingsView.close();
        //     });

        //     mediator.sub('addDirectionPopup:close', () => {
        //         this.popupAddDirectionView.close();
        //         this.popupSettingsView.open();

        //         let directions = this.settingsModel.getDirectionNames();
        //         this.mode = 'T';

        //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
        //     });
        // }

        // subscribeSelectDirection () {
        // 	mediator.sub('directionSelect:change', (directionName) => {
        //         let directions = this.settingsModel.getDirectionNames();
        //         this.selectedDirection = this.settingsModel.directions.find((item) => item.name === directionName);
        //         this.mode = 'T';

        //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
        //     });
        // }

        // subscribeSelectTest () {
        //     mediator.sub('test:select', () => {
        //         let directions = this.settingsModel.getDirectionNames();
        //         this.mode = 'T';

        //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
        //     });
        // }

        // subscribeSelectFilter () {
        //     mediator.sub('filter:select', () => {
        //         let directions = this.settingsModel.getDirectionNames();
        //         this.mode = 'F';

        //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
        //     });
        // }

        // subscribeAddDirection () {
        //     mediator.sub('direction:add', () => {
        //         let directions = this.settingsModel.getDirectionNames();
        //         this.mode = 'T';

        //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
        //     });
        // }

    }]);

    return SettingsController;
}();

module.exports = SettingsController;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    settingsPopupTpl = __webpack_require__(19);

var PopupSettingsView = function () {
    function PopupSettingsView(directions, directionNames) {
        _classCallCheck(this, PopupSettingsView);

        this.directions = directions;
        this.directionNames = directionNames;
        this.selectedDirection = directions[0];
        this.mode = 'T';

        this.setDirectionNames();
        this.modal = document.querySelector('#modal-settings');
    }

    _createClass(PopupSettingsView, [{
        key: 'renderPopup',
        value: function renderPopup() {
            this.modal.innerHTML = settingsPopupTpl(this.directionNames, this.mode, this.selectedDirection);
            this.open();
            this.addListeners();
        }
    }, {
        key: 'reRenderPopup',
        value: function reRenderPopup(directions, mode, selectedDirection) {
            this.modal.innerHTML = settingsPopupTpl(directions, mode, selectedDirection);
            this.addListeners();
        }
    }, {
        key: 'setDirectionNames',
        value: function setDirectionNames() {
            // let directionSelect = document.querySelector('.direction-select'),
            //     optionList = '',
            //     tpl = '';

            // this.settings.directionList.forEach((direction, i) => {
            //     optionList += `
            //         <option ${(i = 0) ? 'selected' : ''} value="${direction.name}">
            //             ${direction.name}
            //         </option>
            //     `;
            // });


            var directionNames = [];

            this.directions.forEach(function (item) {
                directionNames.push(item.name);
            });
            console.log(this.directions);
            return directionNames;
        }
    }, {
        key: 'open',
        value: function open() {
            this.modal.classList.add('visible');
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var closeGroupBtn = document.querySelector('#close-settings-btn'),
                directionSelect = document.querySelector('#modal-settings-direction'),
                selectTestBtn = document.querySelector('#test-settings-btn'),
                selectFilterBtn = document.querySelector('#filter-settings-btn'),
                addDirectionPopup = document.querySelector('.add-direction-btn'),
                addTestPopup = document.querySelector('.add-test-btn'),
                addFilterPopup = document.querySelector('.add-filter-btn');

            closeGroupBtn.addEventListener('click', function () {
                mediator.pub('settingsPopup:close');
                mediator.unsub('settingsPopup:close');
            });

            directionSelect.addEventListener('change', function (e) {
                mediator.pub('directionSelect:change', e.target.value);
            });

            selectTestBtn.addEventListener('click', function () {
                mediator.pub('test:select');
            });

            selectFilterBtn.addEventListener('click', function () {
                mediator.pub('filter:select');
            });

            addDirectionPopup.addEventListener('click', function () {
                mediator.pub('addDirectionPopup:open');
            });

            // addTestPopup.addEventListener('click', () => {
            //     mediator.pub('addFilterPopup:open');
            // });

            // addFilterPopup.addEventListener('click', () => {
            //     mediator.pub('addTestPopup:open');
            // });
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

    return PopupSettingsView;
}();

module.exports = PopupSettingsView;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var directionListTpl = __webpack_require__(20),
    filterListTpl = __webpack_require__(21),
    testListTpl = __webpack_require__(22);

function settingsPopupTpl(directions, mode, selectedDirection) {
    var directionList = directionListTpl(directions, selectedDirection.name),
        filterList = filterListTpl(selectedDirection.filterList),
        testList = testListTpl(selectedDirection.testList);

    return '<div id="settings-popup" class="modal-content">\n                <div class="left-column-settings">' + directionList + '</div>\n                <div class="right-column-settings">\n                    <div class="column-settings">\n                        <button id="test-settings-btn" class="btn btn-ft">T</button>\n                        <button id="filter-settings-btn" class="btn btn-ft">F</button>\n                    </div>\n                    <div class="column-settings">\n                        ' + (mode === 'T' ? testList : filterList) + '\n                    </div>\n                    <div class="column-settings">\n                        <button id="close-settings-btn" class="btn btn-cog">\n                            <i class="fa fa-check" aria-hidden="true"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>';
}

module.exports = settingsPopupTpl;

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function filterListTpl(filterList) {
    var filters = '';

    filterList.forEach(function (filter) {
        filters += '<div class="filter">' + filter + '</div>';
    });

    return '<div class="filter-list-wrapper">\n                <h3>Filters</h3>\n                <div class="filter-list">' + filters + '</div>\n                <button class="add-filter-btn btn">add filter</button>\n            </div>';
}

module.exports = filterListTpl;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function testListTpl(testsList) {
    var tests = '';

    testsList.forEach(function (test) {
        tests += '<div class="test">' + test.name + '</div>';
    });

    return '<div class="test-list-wrapper">\n                <h3>Tests</h3>\n                <div class="test-list">' + tests + '</div>\n                <button class="add-test-btn btn">add test</button>\n            </div>';
}

module.exports = testListTpl;

/***/ }),
/* 23 */
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
/* 24 */
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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dayTpl = __webpack_require__(28),
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DayListView = __webpack_require__(27),
    PopupAddDayView = __webpack_require__(29),
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DayView = __webpack_require__(25),
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function dayTpl(date) {
    return '<div class="day">\n                <h2 class="day-title">' + date + '</h2>\n                <div>\n                    <button class="btn slot-add-btn">add slot</button>\n                </div>\n            </div>';
}

module.exports = dayTpl;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    DayView = __webpack_require__(25),
    Day = __webpack_require__(30),
    popupAddDayTpl = __webpack_require__(31);

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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Day = function Day(date) {
    _classCallCheck(this, Day);

    this.date = date;
};

module.exports = Day;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function popupAddDayTpl() {
    return '<div id="day-popup" class="modal-content">\n                <input type="date" class="dateInput">\n                <button class="btn btn-cog close-day-btn">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = popupAddDayTpl;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGM1MThlYzNlMzY5YzhkYWNiNTYiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwRm9ybWF0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9wb3B1cEZvcm1hdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9Nb2RlbC9UZXN0LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvRmlsdGVycy9Nb2RlbC9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvZGVmYXVsdERpcmV0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0RheXMvVmlldy9EYXlWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvRGF5cy9EYXlzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0RheXMvVmlldy9EYXlMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0RheXMvVmlldy90cGwvZGF5VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvRGF5cy9WaWV3L1BvcHVwQWRkRGF5Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0RheXMvTW9kZWwvRGF5LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvRGF5cy9WaWV3L3RwbC9wb3B1cEFkZERheVRwbC5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JvdXBUcGwiLCJyZXF1aXJlIiwiR3JvdXBWaWV3IiwidGVtcGxhdGUiLCJncm91cHNCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdyb3VwIiwic2V0VGVtcGxhdGUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhZGRMaXN0ZW5lcnMiLCJmb3JtYXRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJHcm91cE1vZGVsIiwibmFtZSIsImRpcmVjdGlvbiIsIkRpcmVjdGlvbk1vZGVsIiwiU2V0dGluZ3NNb2RlbCIsImRpcmVjdGlvbnMiLCJkaXJlY3Rpb25OYW1lcyIsIml0ZW0iLCJUZXN0IiwiRmlsdGVyIiwidGVzdExpc3QiLCJmaWx0ZXJMaXN0IiwidGVzdE5hbWUiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsImluaXQiLCJBcHAiLCJncm91cExpc3QiLCJkZWZhdWx0RGlyZXRpb25zIiwiYXBwIiwic2V0dGluZ3NNb2RlbCIsInN0YXJ0IiwiR3JvdXBDb250cm9sbGVyIiwiRGF5c0NvbnRyb2xsZXIiLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJzdWJzY3JpYmUiLCJncm91cENvbnRyb2xsZXIiLCJzZXR0aW5nc0NvbnRyb2xsZXIiLCJnZXREaXJlY3Rpb25OYW1lcyIsImRheXNDb250cm9sbGVyIiwic2hvd0dyb3VwTGlzdCIsInN1YiIsImFkZEdyb3VwIiwiR3JvdXBMaXN0VmlldyIsIlBvcHVwRm9ybWF0VmlldyIsIlBvcHVwQWRkR3JvdXBWaWV3IiwiZ3JvdXBMaXN0VmlldyIsInJlbmRlciIsInBvcHVwQWRkR3JvdXBWaWV3IiwicmVuZGVyUG9wdXAiLCJhcHBlbmRHcm91cCIsInBvcHVwRm9ybWF0VmlldyIsImdyb3VwTGlzdFRwbCIsImxlZnRCbG9jayIsInJlbmRlckdyb3VwcyIsImdyb3VwVmlldyIsInNldEdyb3VwIiwicmVuZGVyR3JvdXAiLCJhZGRHcm91cEJ0biIsInNldHRpbmdzQnRuIiwicG9wdXBGb3JtYXRUcGwiLCJtb2RhbCIsIm9wZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwidGVzdHMiLCJ0ZXN0IiwiZ3JvdXBQb3B1cFRwbCIsImRpcmVjdGlvbkxpc3QiLCJpbm5lckhUTUwiLCJjbG9zZUdyb3VwQnRuIiwiZ2VuZXJhdGVEYXRhIiwiY2xvc2UiLCJncm91cE5hbWVFbGVtIiwiZ3JvdXBEaXJlY3Rpb25FbGVtIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwidmFsdWUiLCJhY3Rpb25MaXN0IiwiY29uZGl0aW9uTGlzdCIsIlBvcHVwU2V0dGluZ3NWaWV3IiwicG9wdXBTZXR0aW5nc1ZpZXciLCJzZXR0aW5nc1BvcHVwVHBsIiwic2VsZWN0ZWREaXJlY3Rpb24iLCJtb2RlIiwic2V0RGlyZWN0aW9uTmFtZXMiLCJkaXJlY3Rpb25TZWxlY3QiLCJzZWxlY3RUZXN0QnRuIiwic2VsZWN0RmlsdGVyQnRuIiwiYWRkRGlyZWN0aW9uUG9wdXAiLCJhZGRUZXN0UG9wdXAiLCJhZGRGaWx0ZXJQb3B1cCIsInVuc3ViIiwiZSIsInRhcmdldCIsImRpcmVjdGlvbkxpc3RUcGwiLCJmaWx0ZXJMaXN0VHBsIiwidGVzdExpc3RUcGwiLCJmaWx0ZXJzIiwiZmlsdGVyIiwidGVzdHNMaXN0IiwidGVzdERheXMiLCJkYXRlIiwidGltZSIsInBlb3BsZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ0ZXN0RGF5IiwiZ3JhZGVzIiwiRW5nMSIsIkVuZzIiLCJFbmczIiwiRW5nNCIsIkNvcmUiLCJFc3NheSIsImFkZFRlc3QiLCJ0ZXN0TGlzdFVJIiwidGVzdExpc3RKUyIsInRlc3RMaXN0UEhQIiwidGVzdExpc3RHTyIsImFkZEZpbHRlciIsImRheVRwbCIsIkRheVZpZXciLCJkYXlzQmxvY2siLCJkYXkiLCJhZGRTbG90QnRuIiwiRGF5TGlzdFZpZXciLCJQb3B1cEFkZERheVZpZXciLCJkYXlMaXN0VmlldyIsInBvcHVwQWRkRGF5VmlldyIsImFwcGVuZERheSIsImFkZERheUJ0biIsImRheVZpZXciLCJzZXREYXkiLCJyZW5kZXJEYXkiLCJEYXkiLCJwb3B1cEFkZERheVRwbCIsInNlbGVjdGVkRGF0ZSIsImNsb3NlRGF5QnRuIiwiZGF0ZUlucHV0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7O0lBRU1BLFE7QUFDRix3QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7Ozs0QkFFSUMsTyxFQUFTQyxJLEVBQU07QUFDaEIsZ0JBQUksS0FBS0YsUUFBTCxDQUFjQyxPQUFkLENBQUosRUFBNEI7QUFDeEIscUJBQUtELFFBQUwsQ0FBY0MsT0FBZCxFQUF1QkUsT0FBdkIsQ0FBK0IsVUFBQ0MsRUFBRDtBQUFBLDJCQUFRQSxHQUFHRixJQUFILENBQVI7QUFBQSxpQkFBL0I7QUFDSDtBQUNKOzs7NEJBRUlELE8sRUFBU0csRSxFQUFJO0FBQ2QsZ0JBQUksQ0FBQyxLQUFLSixRQUFMLENBQWNDLE9BQWQsQ0FBTCxFQUE2QjtBQUN6QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLElBQXlCLEVBQXpCO0FBQ0g7O0FBRUQsaUJBQUtELFFBQUwsQ0FBY0MsT0FBZCxFQUF1QkksSUFBdkIsQ0FBNEJELEVBQTVCO0FBQ0g7Ozs4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QUwsQ0FBV0UsU0FBWCxDQUFxQkUsTUFBckIsQ0FBNEIsU0FBNUI7QUFDSDs7Ozs7O0FBR0x4RSxPQUFPQyxPQUFQLEdBQWlCeUksZUFBakIsQzs7Ozs7OztBQzdDQTs7OztJQUVNUSxHLEdBQ0YsYUFBYWpDLElBQWIsRUFBbUI7QUFBQTs7QUFDZixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDSCxDOztBQUdMakgsT0FBT0MsT0FBUCxHQUFpQmlKLEdBQWpCLEM7Ozs7Ozs7QUNSQTs7QUFFQSxTQUFTQyxjQUFULEdBQTJCO0FBQ3ZCO0FBTUg7O0FBRURuSixPQUFPQyxPQUFQLEdBQWlCa0osY0FBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4YzUxOGVjM2UzNjljOGRhY2I1NiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE1lZGlhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWIgKGNoYW5uZWwpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZ3JvdXBUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cFRwbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgdGhpcy5ncm91cHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC13cmFwcGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xyXG4gICAgICAgIHRoaXMuc2V0VGVtcGxhdGUodGhpcy5ncm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGVtcGxhdGUgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwVHBsKGdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcm91cCAoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdEdyb3VwQnRuID0gdGhpcy5ncm91cHNCbG9jay5xdWVyeVNlbGVjdG9yKCcuZm9ybWF0LWFkZGVkLWJ0bicpO1xyXG5cclxuICAgICAgICBmb3JtYXRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXA6Zm9ybWF0dGVkJywgdGhpcy5ncm91cCkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEdyb3VwTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdGluZ1Nlc3Npb24gKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKTtcclxuXHJcbmNsYXNzIFNldHRpbmdzTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGlvbk5hbWVzICgpIHtcclxuICAgIFx0bGV0IGRpcmVjdGlvbk5hbWVzID0gW107XHJcblxyXG4gICAgXHR0aGlzLmRpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIFx0ZGlyZWN0aW9uTmFtZXMucHVzaChpdGVtLm5hbWUpO1xyXG4gICAgXHR9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbk5hbWVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IFRlc3QgPSByZXF1aXJlKCcuLi8uLi9UZXN0cy9Nb2RlbC9UZXN0LmpzJyksXHJcbiAgICBGaWx0ZXIgPSByZXF1aXJlKCcuLi8uLi9GaWx0ZXJzL01vZGVsL0ZpbHRlci5qcycpO1xyXG5cclxuY2xhc3MgRGlyZWN0aW9uTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0ICh0ZXN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlciAodGVzdExpc3QsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdExpc3QsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGlvbk1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuICAgIGxldCBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxyXG4gICAgICAgIGdyb3VwTGlzdCA9IHJlcXVpcmUoJy4vdGVzdERhdGEnKSxcclxuICAgICAgICBkZWZhdWx0RGlyZXRpb25zID0gcmVxdWlyZSgnLi9kZWZhdWx0RGlyZXRpb25zJyk7XHJcblxyXG5cclxuICAgIGxldCBhcHAgPSBuZXcgQXBwKGdyb3VwTGlzdCk7XHJcblxyXG4gICAgYXBwLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9ucyA9IGRlZmF1bHREaXJldGlvbnM7XHJcbiAgICBhcHAuc3RhcnQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcclxuICAgIERheXNDb250cm9sbGVyID0gcmVxdWlyZSgnLi9EYXlzL0RheXNDb250cm9sbGVyLmpzJyksXHJcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXHJcbiAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IgKGdyb3VwTGlzdCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0ID0gZ3JvdXBMaXN0O1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBncm91cENvbnRyb2xsZXIgPSBuZXcgR3JvdXBDb250cm9sbGVyKHRoaXMuZ3JvdXBMaXN0KSxcclxuICAgICAgICAgICAgc2V0dGluZ3NDb250cm9sbGVyID0gbmV3IFNldHRpbmdzQ29udHJvbGxlcih0aGlzLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9ucywgdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCkpLFxyXG4gICAgICAgICAgICBkYXlzQ29udHJvbGxlciA9IG5ldyBEYXlzQ29udHJvbGxlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5zaG93R3JvdXBMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRHcm91cChncm91cCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkR3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QucHVzaChncm91cCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxyXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXHJcbiAgICBQb3B1cEZvcm1hdFZpZXcgPSByZXF1aXJlKCcuL1ZpZXcvUG9wdXBGb3JtYXRWaWV3LmpzJyksXHJcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcclxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcclxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IgKGdyb3VwTGlzdCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0ID0gZ3JvdXBMaXN0O1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0dyb3VwTGlzdCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0Vmlldyh0aGlzLmdyb3VwTGlzdCk7XHJcblxyXG4gICAgICAgIGdyb3VwTGlzdFZpZXcucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XHJcblxyXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBMaXN0Vmlldy5hcHBlbmRHcm91cChncm91cCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Zm9ybWF0dGVkJywgKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cEZvcm1hdFZpZXcgPSBuZXcgUG9wdXBGb3JtYXRWaWV3KGdyb3VwKTtcclxuXHJcbiAgICAgICAgICAgIHBvcHVwRm9ybWF0Vmlldy5yZW5kZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxyXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cFZpZXcuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwTGlzdFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKGdyb3VwTGlzdCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGxldCBsZWZ0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1jb2x1bW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwTGlzdFRwbCgpO1xyXG5cclxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyR3JvdXBzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyR3JvdXBzICgpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdC5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRHcm91cCAoZ3JvdXApIHtcclxuICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xyXG5cclxuICAgICAgICBncm91cFZpZXcuc2V0R3JvdXAoZ3JvdXApO1xyXG4gICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKSxcclxuICAgICAgICAgICAgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0dGluZ3MtYnRuJyk7XHJcblxyXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cFBvcHVwOm9wZW4nKSk7XHJcbiAgICAgICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicpKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwTGlzdFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkdyb3VwPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2std3JhcHBlciBncm91cC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWdyb3VwLWJ0blwiPmFkZCBncm91cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cExpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBUcGwgKGdyb3VwKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gZm9ybWF0LWFkZGVkLWJ0blwiPmZvcm1hdCBhZGRlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgcG9wdXBGb3JtYXRUcGwgPSByZXF1aXJlKCcuL3RwbC9wb3B1cEZvcm1hdFRwbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBGb3JtYXRWaWV3IHtcclxuICAgY29uc3RydWN0b3IgKGdyb3VwKSB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcclxuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtYXQtYWRkZWQnKTtcclxuICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xyXG4gICB9XHJcblxyXG4gICBzZXRHcm91cCAoKSB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSBwb3B1cEZvcm1hdFRwbCh0aGlzLmdyb3VwLnRlc3RMaXN0KTtcclxuICAgfVxyXG4gICBcclxuICAgcmVuZGVyICgpIHtcclxuICAgICAgdGhpcy5zZXRHcm91cCgpO1xyXG4gICAgICB0aGlzLm1vZGFsLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG4gICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgfVxyXG5cclxuICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgfVxyXG5cclxuICAgb3BlbiAoKSB7XHJcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICB9XHJcblxyXG4gICBjbG9zZSAoKSB7XHJcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICB9XHJcbiAgIFxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwRm9ybWF0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwRm9ybWF0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHBvcHVwRm9ybWF0VHBsICh0ZXN0TGlzdCkge1xyXG4gICAgZGVidWdnZXI7XHJcbiAgICBjb25zb2xlLmxvZyh0ZXN0TGlzdCk7XHJcbiAgICBsZXQgdGVzdHMgPSAnJztcclxuXHJcbiAgICB0ZXN0TGlzdC5mb3JFYWNoKCh0ZXN0KSA9PiB7XHJcbiAgICAgICAgdGVzdHMgKz0gYDxkaXYgY2xhc3M9XCJ0ZXN0LW5hbWVcIj4ke3Rlc3QubmFtZX08L2Rpdj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwidGVzdC1saXN0LXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50IGZvcm1hdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1hdC10ZXN0LWxpc3RcIj4ke3Rlc3RzfVxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLXRlc3QtYnRuXCI+YWRkIHRlc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWdyb3VwLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcG9wdXBGb3JtYXRUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvcG9wdXBGb3JtYXRUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXHJcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcclxuICAgIGdyb3VwUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBBZGRHcm91cFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIC8vIGRpcmVjdGlvbkxpc3Qg0LzRiyDQtNC+0LvQttC90Ysg0LHRgNCw0YLRjCDQvtGC0LrRg9C00LAg0YLQvlxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IFsndWknLCAncGhwJywgJ2pzJywgJ2phdmEnXTtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGdyb3VwUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0KTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1idG4nKTtcclxuXHJcbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdlbmVyYXRlRGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0YS5kaXJlY3Rpb24gLSDQvNGLINC/0L7Qu9GD0YfQsNC10Lwg0LjQtyDQvdCw0YjQuNGFINGB0LXRgtGC0LjQvdCz0YFcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gbmV3IEdyb3VwTW9kZWwoZGF0YS5uYW1lLCBkYXRhLmRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2dyb3VwOmNyZWF0ZWQnLCBncm91cCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlyZWN0aW9uTGlzdCAoZGlyZWN0aW9uTGlzdCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLW5hbWUnKSxcclxuICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25FbGVtID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ3JvdXAtZGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwUG9wdXBUcGwgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcblxyXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBpZD1cImdyb3VwLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1vZGFsLWdyb3VwLW5hbWVcIiBjbGFzcz1cIm1vZGFsLWdyb3VwLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1ncm91cC1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFRlc3Qge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gVGVzdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9UZXN0cy9Nb2RlbC9UZXN0LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgRmlsdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uTGlzdCA9IFsnYXZlcmFnZScsICdtYXgnLCAnbWluJywgJ2VxdWFsJ107XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25MaXN0ID0gWyc+JywgJz49JywgJz0nLCAnPD0nLCAnPCddO1xyXG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9GaWx0ZXJzL01vZGVsL0ZpbHRlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBQb3B1cFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgIC8vIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcclxuICAgIC8vIFBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzJyksXHJcbiAgICAvLyBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgLy8gRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChkaXJlY3Rpb25zLCBkaXJlY3Rpb25OYW1lcykge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25OYW1lcyA9IGRpcmVjdGlvbk5hbWVzO1xyXG4gICAgICAgIC8vIHRoaXMuc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKGRlZmF1bHREaXJlY3Rpb25zKTtcclxuICAgICAgICAvLyB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3ID0gbmV3IFBvcHVwU2V0dGluZ3NWaWV3KGRpcmVjdGlvbnMpO1xyXG4gICAgICAgIC8vIHRoaXMucG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gbmV3IFBvcHVwQWRkRGlyZWN0aW9uVmlldygpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICBsZXQgcG9wdXBTZXR0aW5nc1ZpZXcgPSBuZXcgUG9wdXBTZXR0aW5nc1ZpZXcodGhpcy5kaXJlY3Rpb25zLCB0aGlzLmRpcmVjdGlvbk5hbWVzKTtcclxuICAgICAgICAgICAgIHBvcHVwU2V0dGluZ3NWaWV3LnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIHN1YnNjcmliZSAoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdWJzY3JpYmVPcGVuUG9wdXBzKCk7XHJcbiAgICAvLyAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24oKTtcclxuICAgIC8vICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdEZpbHRlcigpO1xyXG4gICAgLy8gICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0VGVzdCgpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHN1YnNjcmliZU9wZW5Qb3B1cHMgKCkge1xyXG4gICAgLy8gICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnNbMF07XHJcbiAgICAvLyAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdWJzY3JpYmVDbG9zZVBvcHVwKCk7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoKSxcclxuICAgIC8vICAgICAgICAgICAgIGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5zZXREaXJlY3Rpb25MaXN0KGRpcmVjdGlvbnMpO1xyXG4gICAgLy8gICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgcG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gbmV3IFBvcHVwQWRkRGlyZWN0aW9uVmlldygpO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgcG9wdXBBZGREaXJlY3Rpb25WaWV3LnJlbmRlclBvcHVwKCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdWJzY3JpYmVDbG9zZVBvcHVwKCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3Vic2NyaWJlQ2xvc2VQb3B1cCAoKSB7XHJcbiAgICAvLyAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIG1lZGlhdG9yLnN1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9wdXBBZGREaXJlY3Rpb25WaWV3LmNsb3NlKCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcub3BlbigpO1xyXG5cclxuICAgIC8vICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uICgpIHtcclxuICAgIC8vIFx0bWVkaWF0b3Iuc3ViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgKGRpcmVjdGlvbk5hbWUpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gZGlyZWN0aW9uTmFtZSk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHN1YnNjcmliZVNlbGVjdFRlc3QgKCkge1xyXG4gICAgLy8gICAgIG1lZGlhdG9yLnN1YigndGVzdDpzZWxlY3QnLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHN1YnNjcmliZVNlbGVjdEZpbHRlciAoKSB7XHJcbiAgICAvLyAgICAgbWVkaWF0b3Iuc3ViKCdmaWx0ZXI6c2VsZWN0JywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm1vZGUgPSAnRic7XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzdWJzY3JpYmVBZGREaXJlY3Rpb24gKCkge1xyXG4gICAgLy8gICAgIG1lZGlhdG9yLnN1YignZGlyZWN0aW9uOmFkZCcsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIHNldHRpbmdzUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cFNldHRpbmdzVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9ucywgZGlyZWN0aW9uTmFtZXMpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTmFtZXMgPSBkaXJlY3Rpb25OYW1lcztcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gZGlyZWN0aW9uc1swXTtcclxuICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHNldHRpbmdzUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25OYW1lcywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmVSZW5kZXJQb3B1cCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHNldHRpbmdzUG9wdXBUcGwoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlyZWN0aW9uTmFtZXMgKCkge1xyXG4gICAgICAgIC8vIGxldCBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlyZWN0aW9uLXNlbGVjdCcpLFxyXG4gICAgICAgIC8vICAgICBvcHRpb25MaXN0ID0gJycsXHJcbiAgICAgICAgLy8gICAgIHRwbCA9ICcnO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNldHRpbmdzLmRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoZGlyZWN0aW9uLCBpKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIG9wdGlvbkxpc3QgKz0gYFxyXG4gICAgICAgIC8vICAgICAgICAgPG9wdGlvbiAkeyhpID0gMCkgPyAnc2VsZWN0ZWQnIDogJyd9IHZhbHVlPVwiJHtkaXJlY3Rpb24ubmFtZX1cIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAke2RpcmVjdGlvbi5uYW1lfVxyXG4gICAgICAgIC8vICAgICAgICAgPC9vcHRpb24+XHJcbiAgICAgICAgLy8gICAgIGA7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBkaXJlY3Rpb25OYW1lcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb25OYW1lcy5wdXNoKGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbmNvbnNvbGUubG9nKHRoaXMuZGlyZWN0aW9ucyk7XHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbk5hbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2Utc2V0dGluZ3MtYnRuJyksXHJcbiAgICAgICAgICAgIGRpcmVjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb24nKSxcclxuICAgICAgICAgICAgc2VsZWN0VGVzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0LXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBzZWxlY3RGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBhZGREaXJlY3Rpb25Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyZWN0aW9uLWJ0bicpLFxyXG4gICAgICAgICAgICBhZGRUZXN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRlc3QtYnRuJyksXHJcbiAgICAgICAgICAgIGFkZEZpbHRlclBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1maWx0ZXItYnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScpO1xyXG4gICAgICAgICAgICBtZWRpYXRvci51bnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxlY3RUZXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ3Rlc3Q6c2VsZWN0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGVjdEZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdmaWx0ZXI6c2VsZWN0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZERpcmVjdGlvblBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FkZERpcmVjdGlvblBvcHVwOm9wZW4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYWRkVGVzdFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBtZWRpYXRvci5wdWIoJ2FkZEZpbHRlclBvcHVwOm9wZW4nKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gYWRkRmlsdGVyUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkVGVzdFBvcHVwOm9wZW4nKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZURhdGEgKCkge1xyXG4gICAgICAgIGxldCBncm91cE5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBOYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwRGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBTZXR0aW5nc1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGRpcmVjdGlvbkxpc3RUcGwgPSByZXF1aXJlKCcuL2RpcmVjdGlvbkxpc3RUcGwuanMnKSxcclxuICAgIGZpbHRlckxpc3RUcGwgPSByZXF1aXJlKCcuLi8uLi8uLi9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMnKSxcclxuICAgIHRlc3RMaXN0VHBsID0gcmVxdWlyZSgnLi4vLi4vLi4vVGVzdHMvVmlldy90cGwvdGVzdExpc3RUcGwuanMnKTtcclxuXHJcbmZ1bmN0aW9uIHNldHRpbmdzUG9wdXBUcGwgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICBsZXQgZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9ucywgc2VsZWN0ZWREaXJlY3Rpb24ubmFtZSksXHJcbiAgICAgICAgZmlsdGVyTGlzdCA9IGZpbHRlckxpc3RUcGwoc2VsZWN0ZWREaXJlY3Rpb24uZmlsdGVyTGlzdCksXHJcbiAgICAgICAgdGVzdExpc3QgPSB0ZXN0TGlzdFRwbChzZWxlY3RlZERpcmVjdGlvbi50ZXN0TGlzdCk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwic2V0dGluZ3MtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbHVtbi1zZXR0aW5nc1wiPiR7ZGlyZWN0aW9uTGlzdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0ZXN0LXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1mdFwiPlQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbHRlci1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5GPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke21vZGUgPT09ICdUJz8gdGVzdExpc3Q6IGZpbHRlckxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2Utc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXR0aW5nc1BvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGRpcmVjdGlvbkxpc3RUcGwgKGRpcmVjdGlvbkxpc3QsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xyXG5cclxuICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9JyR7aXRlbX0nICR7c2VsZWN0ZWREaXJlY3Rpb24gPT09IGl0ZW0/ICdzZWxlY3RlZCc6ICcnfT4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImRpcmVjdGlvbi1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWRpcmVjdGlvbi1idG5cIj5hZGQgZGlyZWN0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGlyZWN0aW9uTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJMaXN0VHBsIChmaWx0ZXJMaXN0KSB7XHJcbiAgICBsZXQgZmlsdGVycyA9ICcnO1xyXG5cclxuICAgIGZpbHRlckxpc3QuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgZmlsdGVycyArPSBgPGRpdiBjbGFzcz1cImZpbHRlclwiPiR7ZmlsdGVyfTwvZGl2PmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+RmlsdGVyczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWxpc3RcIj4ke2ZpbHRlcnN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWZpbHRlci1idG4gYnRuXCI+YWRkIGZpbHRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZpbHRlckxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0TGlzdFRwbCAodGVzdHNMaXN0KSB7XHJcbiAgICBsZXQgdGVzdHMgPSAnJztcclxuXHJcbiAgICB0ZXN0c0xpc3QuZm9yRWFjaCgodGVzdCkgPT4ge1xyXG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdFwiPiR7dGVzdC5uYW1lfTwvZGl2PmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ0ZXN0LWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlRlc3RzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0LWxpc3RcIj4ke3Rlc3RzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10ZXN0LWJ0biBidG5cIj5hZGQgdGVzdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRlc3RMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvVGVzdHMvVmlldy90cGwvdGVzdExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZ3JvdXBMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdEcC0xMTcnLFxyXG4gICAgICAgIHRlc3RMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0pTIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBmaWx0ZXJMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnSlMgQ29yZSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFc3NheSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA3NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGVzdERheXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGVvcGxlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdIYXJyeScsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ1BvdHRlcicsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hhcnJ5LXBvdHRlckBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDg1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdSb24nLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdXaXNsZXknLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdyb24td2lzbGV5QGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTc6MDAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAzNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnRHAtMTIxJyxcclxuICAgICAgICB0ZXN0TGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdHbyBDb3JlJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZmlsdGVyTGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0dvIENvcmUnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlc3REYXlzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBlb3BsZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGVybWlvbmUnLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdHcmFuZ2VyJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnaGVybWlvbmUtZ3JhbmdlckBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDg1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXZpbGxlJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnTG9uZ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ25ldmlsbGUtbG9uZ2JvdHRvbUBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE3OjAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ0RwLTEyMycsXHJcbiAgICAgICAgdGVzdExpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUEhQIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBmaWx0ZXJMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnUEhQIENvcmUnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlc3REYXlzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBlb3BsZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRHJhY28nLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdNYWxmb3knLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdkcmFjby1tYWxmb3lAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDI2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGV0ZXInLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdHcmlmZmluJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAncGV0ZXItZ3JpZmZpbkBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE3OjAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9IFxyXG5dO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cExpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKTtcclxuXHJcbmxldCBkZWZhdWx0RGlyZXRpb25zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpcmVjdGlvbk1vZGVsKCdVSScpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEaXJlY3Rpb25Nb2RlbCgnSlMnKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGlyZWN0aW9uTW9kZWwoJ1BIUCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpcmVjdGlvbk1vZGVsKCdHTycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcblxyXG5kZWZhdWx0RGlyZXRpb25zWzBdLmFkZFRlc3QoJ0VuZyAxJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRUZXN0KCdFbmcgMicsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMF0uYWRkVGVzdCgnRW5nIDMnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzBdLmFkZFRlc3QoJ0VuZyA0JywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRUZXN0KCdFc3NheSBVSScsIDIwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMV0uYWRkVGVzdCgnRW5nIDEnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZFRlc3QoJ0VuZyAyJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1sxXS5hZGRUZXN0KCdFbmcgMycsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMV0uYWRkVGVzdCgnSlMgQ29yZScsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMV0uYWRkVGVzdCgnRXNzYXkgSlMnLCAyMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzJdLmFkZFRlc3QoJ0VuZyAxJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRUZXN0KCdFbmcgMicsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMl0uYWRkVGVzdCgnUEhQIENvcmUnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzJdLmFkZFRlc3QoJ0Vzc2F5IFBIUCcsIDIwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbM10uYWRkVGVzdCgnRW5nIDEnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0VuZyAyJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdFbmcgMycsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbM10uYWRkVGVzdCgnRW5nIDQnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0dPIENvcmUnLCAyMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0Vzc2F5IEdPJywgMzAwKTtcclxuXHJcbmxldCB0ZXN0TGlzdFVJID0gWydFbmcgMScsICdFbmcgMicsICdFbmcgMycsXSxcclxuICAgIHRlc3RMaXN0SlMgPSBbJ0VuZyAxJyxdLFxyXG4gICAgdGVzdExpc3RQSFAgPSBbJ1BIUCBDb3JlJ10sXHJcbiAgICB0ZXN0TGlzdEdPID0gWydFbmcgMScsICdFbmcgMicsICdFbmcgMycsJ0VuZyA0J107XHJcblxyXG5kZWZhdWx0RGlyZXRpb25zWzBdLmFkZEZpbHRlcih0ZXN0TGlzdFVJLCAnYXZlcmFnZScsICc+JywgNjApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZEZpbHRlcih0ZXN0TGlzdEpTLCAnYXZlcmFnZScsICc+JywgNzUpO1xyXG5kZWZhdWx0RGlyZXRpb25zWzJdLmFkZEZpbHRlcih0ZXN0TGlzdFBIUCwgJ2F2ZXJhZ2UnLCAnPicsIDgwKTtcclxuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRGaWx0ZXIodGVzdExpc3RHTywgJ3N1bW0nLCAnPicsIDcwKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdERpcmV0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL2RlZmF1bHREaXJldGlvbnMuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZGF5VHBsID0gcmVxdWlyZSgnLi90cGwvZGF5VHBsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBEYXlWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgdGhpcy5kYXlzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF5LXdyYXBwZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXkgKGRheSkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBkYXlUcGwoZGF5KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJEYXkgKCkge1xyXG4gICAgICAgIHRoaXMuZGF5c0Jsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgYWRkU2xvdEJ0biA9IHRoaXMuZGF5c0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5zbG90LWFkZC1idG4nKTtcclxuXHJcbiAgICAgICAgYWRkU2xvdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZGF5OmFkZGVkU2xvdCcpKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEYXlWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRGF5cy9WaWV3L0RheVZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgRGF5TGlzdFZpZXcgPSByZXF1aXJlKCcuLi9EYXlzL1ZpZXcvRGF5TGlzdFZpZXcuanMnKSxcclxuICAgIFBvcHVwQWRkRGF5VmlldyA9IHJlcXVpcmUoJy4uL0RheXMvVmlldy9Qb3B1cEFkZERheVZpZXcuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIERheXNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIHRoaXMuZGF5TGlzdFZpZXcgPSBuZXcgRGF5TGlzdFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZGF5UG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkRGF5VmlldyA9IG5ldyBQb3B1cEFkZERheVZpZXcoKTtcclxuXHJcbiAgICAgICAgICAgIHBvcHVwQWRkRGF5Vmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2RheTpjcmVhdGVkJywgKGRheSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF5TGlzdFZpZXcgPSBuZXcgRGF5TGlzdFZpZXcoZGF5KTtcclxuXHJcbiAgICAgICAgICAgIGRheUxpc3RWaWV3LmFwcGVuZERheSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dEYXlMaXN0ICgpIHtcclxuICAgICAgICBsZXQgZGF5TGlzdFZpZXcgPSBuZXcgRGF5TGlzdFZpZXcodGhpcy5ncm91cExpc3QpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERheXNDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRGF5cy9EYXlzQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBEYXlWaWV3ID0gcmVxdWlyZSgnLi9EYXlWaWV3LmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBEYXlMaXN0VmlldyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IgKGRheSkge1xyXG4gICAgICAgIHRoaXMuZGF5ID0gZGF5O1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgYWRkRGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kYXktYnRuJyk7XHJcblxyXG4gICAgICAgIGFkZERheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZGF5UG9wdXA6b3BlbicpKTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmREYXkgKCkge1xyXG4gICAgICAgIGxldCBkYXlWaWV3ID0gbmV3IERheVZpZXcoKTtcclxuXHJcbiAgICAgICAgZGF5Vmlldy5zZXREYXkodGhpcy5kYXkuZGF0ZSk7XHJcbiAgICAgICAgZGF5Vmlldy5yZW5kZXJEYXkoKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEYXlMaXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0RheXMvVmlldy9EYXlMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGRheVRwbCAoZGF0ZSkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGF5XCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJkYXktdGl0bGVcIj4ke2RhdGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBzbG90LWFkZC1idG5cIj5hZGQgc2xvdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGF5VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRGF5cy9WaWV3L3RwbC9kYXlUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgRGF5VmlldyA9IHJlcXVpcmUoJy4vRGF5Vmlldy5qcycpLFxyXG4gICAgRGF5ID0gcmVxdWlyZSgnLi4vLi4vRGF5cy9Nb2RlbC9EYXkuanMnKSxcclxuICAgIHBvcHVwQWRkRGF5VHBsID0gcmVxdWlyZSgnLi4vLi4vRGF5cy9WaWV3L3RwbC9wb3B1cEFkZERheVRwbC5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBBZGREYXlWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1kYXknKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHBvcHVwQWRkRGF5VHBsKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZURheUJ0biA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignLmNsb3NlLWRheS1idG4nKSxcclxuICAgICAgICAgICAgZGF0ZUlucHV0ID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcuZGF0ZUlucHV0Jyk7XHJcblxyXG4gICAgICAgIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjbG9zZURheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXkgPSBuZXcgRGF5KHRoaXMuc2VsZWN0ZWREYXRlKTtcclxuXHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGF5OmNyZWF0ZWQnLCBkYXkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZERheVZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9EYXlzL1ZpZXcvUG9wdXBBZGREYXlWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgRGF5IHtcclxuICAgIGNvbnN0cnVjdG9yIChkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEYXk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9EYXlzL01vZGVsL0RheS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHBvcHVwQWRkRGF5VHBsICgpIHtcclxuICAgIHJldHVybiBgPGRpdiBpZD1cImRheS1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgY2xhc3M9XCJkYXRlSW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZyBjbG9zZS1kYXktYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBvcHVwQWRkRGF5VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRGF5cy9WaWV3L3RwbC9wb3B1cEFkZERheVRwbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=