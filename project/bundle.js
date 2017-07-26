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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirectionModel = __webpack_require__(5);

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = __webpack_require__(24),
    Filter = __webpack_require__(25);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var App = __webpack_require__(7),
        groupList = __webpack_require__(23),
        defaultDiretions = __webpack_require__(26);

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
    SettingsModel = __webpack_require__(4),
    SettingsController = __webpack_require__(15),
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
                settingsController = new SettingsController(this.settingsModel.directions, this.settingsModel.getDirectionNames());

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
    PopupAddGroupView = __webpack_require__(3),
    SettingsModel = __webpack_require__(4),
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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopupSettingsView = __webpack_require__(16),

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    settingsPopupTpl = __webpack_require__(17);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var directionListTpl = __webpack_require__(18),
    filterListTpl = __webpack_require__(19),
    testListTpl = __webpack_require__(20);

function settingsPopupTpl(directions, mode, selectedDirection) {
    var directionList = directionListTpl(directions, selectedDirection.name),
        filterList = filterListTpl(selectedDirection.filterList),
        testList = testListTpl(selectedDirection.testList);

    return '<div id="settings-popup" class="modal-content">\n                <div class="left-column-settings">' + directionList + '</div>\n                <div class="right-column-settings">\n                    <div class="column-settings">\n                        <button id="test-settings-btn" class="btn btn-ft">T</button>\n                        <button id="filter-settings-btn" class="btn btn-ft">F</button>\n                    </div>\n                    <div class="column-settings">\n                        ' + (mode === 'T' ? testList : filterList) + '\n                    </div>\n                    <div class="column-settings">\n                        <button id="close-settings-btn" class="btn btn-cog">\n                            <i class="fa fa-check" aria-hidden="true"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>';
}

module.exports = settingsPopupTpl;

/***/ }),
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */,
/* 22 */,
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


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function Test(name, grade) {
    _classCallCheck(this, Test);

    this.name = name;
    this.grade = grade;
};

module.exports = Test;

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DirectionModel = __webpack_require__(5);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWRhMTA3OWZiZjliNWYyODFiZTAiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBGb3JtYXRWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL3BvcHVwRm9ybWF0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvVGVzdHMvTW9kZWwvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0ZpbHRlcnMvTW9kZWwvRmlsdGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvZGVmYXVsdERpcmV0aW9ucy5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JvdXBUcGwiLCJyZXF1aXJlIiwiR3JvdXBWaWV3IiwidGVtcGxhdGUiLCJncm91cHNCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdyb3VwIiwic2V0VGVtcGxhdGUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhZGRMaXN0ZW5lcnMiLCJmb3JtYXRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJHcm91cE1vZGVsIiwibmFtZSIsImRpcmVjdGlvbiIsImdyb3VwUG9wdXBUcGwiLCJQb3B1cEFkZEdyb3VwVmlldyIsImRpcmVjdGlvbkxpc3QiLCJtb2RhbCIsImlubmVySFRNTCIsIm9wZW4iLCJjbG9zZUdyb3VwQnRuIiwiZ2VuZXJhdGVEYXRhIiwiY2xvc2UiLCJncm91cE5hbWVFbGVtIiwiZ3JvdXBEaXJlY3Rpb25FbGVtIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJEaXJlY3Rpb25Nb2RlbCIsIlNldHRpbmdzTW9kZWwiLCJkaXJlY3Rpb25zIiwiZGlyZWN0aW9uTmFtZXMiLCJpdGVtIiwiVGVzdCIsIkZpbHRlciIsInRlc3RMaXN0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJpbml0IiwiQXBwIiwiZ3JvdXBMaXN0IiwiZGVmYXVsdERpcmV0aW9ucyIsImFwcCIsInNldHRpbmdzTW9kZWwiLCJzdGFydCIsIkdyb3VwQ29udHJvbGxlciIsIlNldHRpbmdzQ29udHJvbGxlciIsInN1YnNjcmliZSIsImdyb3VwQ29udHJvbGxlciIsInNldHRpbmdzQ29udHJvbGxlciIsImdldERpcmVjdGlvbk5hbWVzIiwic2hvd0dyb3VwTGlzdCIsInN1YiIsImFkZEdyb3VwIiwiR3JvdXBMaXN0VmlldyIsIlBvcHVwRm9ybWF0VmlldyIsImdyb3VwTGlzdFZpZXciLCJyZW5kZXIiLCJwb3B1cEFkZEdyb3VwVmlldyIsInJlbmRlclBvcHVwIiwiYXBwZW5kR3JvdXAiLCJwb3B1cEZvcm1hdFZpZXciLCJncm91cExpc3RUcGwiLCJsZWZ0QmxvY2siLCJyZW5kZXJHcm91cHMiLCJncm91cFZpZXciLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiYWRkR3JvdXBCdG4iLCJzZXR0aW5nc0J0biIsInBvcHVwRm9ybWF0VHBsIiwiY29uc29sZSIsImxvZyIsInRlc3RzIiwidGVzdCIsIlBvcHVwU2V0dGluZ3NWaWV3IiwicG9wdXBTZXR0aW5nc1ZpZXciLCJzZXR0aW5nc1BvcHVwVHBsIiwic2VsZWN0ZWREaXJlY3Rpb24iLCJtb2RlIiwic2V0RGlyZWN0aW9uTmFtZXMiLCJkaXJlY3Rpb25TZWxlY3QiLCJzZWxlY3RUZXN0QnRuIiwic2VsZWN0RmlsdGVyQnRuIiwiYWRkRGlyZWN0aW9uUG9wdXAiLCJhZGRUZXN0UG9wdXAiLCJhZGRGaWx0ZXJQb3B1cCIsInVuc3ViIiwiZSIsInRhcmdldCIsImRpcmVjdGlvbkxpc3RUcGwiLCJmaWx0ZXJMaXN0VHBsIiwidGVzdExpc3RUcGwiLCJmaWx0ZXJzIiwiZmlsdGVyIiwidGVzdHNMaXN0IiwidGVzdERheXMiLCJkYXRlIiwidGltZSIsInBlb3BsZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ0ZXN0RGF5IiwiZ3JhZGVzIiwiRW5nMSIsIkVuZzIiLCJFbmczIiwiRW5nNCIsIkNvcmUiLCJFc3NheSIsImFjdGlvbkxpc3QiLCJjb25kaXRpb25MaXN0IiwiYWRkVGVzdCIsInRlc3RMaXN0VUkiLCJ0ZXN0TGlzdEpTIiwidGVzdExpc3RQSFAiLCJ0ZXN0TGlzdEdPIiwiYWRkRmlsdGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7O0lBRU1BLFE7QUFDRix3QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7Ozs0QkFFSUMsTyxFQUFTQyxJLEVBQU07QUFDaEIsZ0JBQUksS0FBS0YsUUFBTCxDQUFjQyxPQUFkLENBQUosRUFBNEI7QUFDeEIscUJBQUtE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R0FBckQsRUFBMEQsRUFBMUQ7QUFDQXpFLGlCQUFpQixDQUFqQixFQUFvQjRFLFNBQXBCLENBQThCRixXQUE5QixFQUEyQyxTQUEzQyxFQUFzRCxHQUF0RCxFQUEyRCxFQUEzRDtBQUNBMUUsaUJBQWlCLENBQWpCLEVBQW9CNEUsU0FBcEIsQ0FBOEJELFVBQTlCLEVBQTBDLE1BQTFDLEVBQWtELEdBQWxELEVBQXVELEVBQXZEOztBQUVBaEksT0FBT0MsT0FBUCxHQUFpQm9ELGdCQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVkYTEwNzlmYmY5YjVmMjgxYmUwIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBNZWRpYXRvciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gICAgfVxuXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICB1bnN1YiAoY2hhbm5lbCkge1xuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcbiAgICB9XG59XG5cbmxldCBtZWRpYXRvciA9IG5ldyBNZWRpYXRvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBncm91cFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwVHBsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLXdyYXBwZXInKTtcbiAgICB9XG5cbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xuICAgICAgICB0aGlzLnNldFRlbXBsYXRlKHRoaXMuZ3JvdXApO1xuICAgIH1cblxuICAgIHNldFRlbXBsYXRlIChncm91cCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBUcGwoZ3JvdXApO1xuICAgIH1cblxuICAgIHJlbmRlckdyb3VwICgpIHtcbiAgICAgICAgdGhpcy5ncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgZm9ybWF0R3JvdXBCdG4gPSB0aGlzLmdyb3Vwc0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtYXQtYWRkZWQtYnRuJyk7XG5cbiAgICAgICAgZm9ybWF0R3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2dyb3VwOmZvcm1hdHRlZCcsIHRoaXMuZ3JvdXApKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcblxuICAgIH1cblxuICAgIGFkZFRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICgpIHtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXG4gICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzJyk7XG5cbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIGRpcmVjdGlvbkxpc3Qg0LzRiyDQtNC+0LvQttC90Ysg0LHRgNCw0YLRjCDQvtGC0LrRg9C00LAg0YLQvlxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbJ3VpJywgJ3BocCcsICdqcycsICdqYXZhJ107XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGdyb3VwUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0KTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1idG4nKTtcblxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdlbmVyYXRlRGF0YSgpLFxuICAgICAgICAgICAgICAgIC8vIGRhdGEuZGlyZWN0aW9uIC0g0LzRiyDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0L3QsNGI0LjRhSDRgdC10YLRgtC40L3Qs9GBXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBuZXcgR3JvdXBNb2RlbChkYXRhLm5hbWUsIGRhdGEuZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURhdGEgKCkge1xuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLW5hbWUnKSxcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLWRpcmVjdGlvbicpLFxuICAgICAgICAgICAgZGF0YSA9IHt9O1xuXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgb3BlbiAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyk7XG5cbmNsYXNzIFNldHRpbmdzTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gW107XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uTmFtZXMgKCkge1xuICAgIFx0bGV0IGRpcmVjdGlvbk5hbWVzID0gW107XG5cbiAgICBcdHRoaXMuZGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIFx0ZGlyZWN0aW9uTmFtZXMucHVzaChpdGVtLm5hbWUpO1xuICAgIFx0fSk7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbk5hbWVzO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IFRlc3QgPSByZXF1aXJlKCcuLi8uLi9UZXN0cy9Nb2RlbC9UZXN0LmpzJyksXG4gICAgRmlsdGVyID0gcmVxdWlyZSgnLi4vLi4vRmlsdGVycy9Nb2RlbC9GaWx0ZXIuanMnKTtcblxuY2xhc3MgRGlyZWN0aW9uTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW107XG4gICAgfVxuXG4gICAgYWRkVGVzdCAodGVzdE5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICh0ZXN0TGlzdCwgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdExpc3QsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rpb25Nb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuICAgIGxldCBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxuICAgICAgICBncm91cExpc3QgPSByZXF1aXJlKCcuL3Rlc3REYXRhJyksXG4gICAgICAgIGRlZmF1bHREaXJldGlvbnMgPSByZXF1aXJlKCcuL2RlZmF1bHREaXJldGlvbnMnKTtcblxuXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoZ3JvdXBMaXN0KTtcblxuICAgIGFwcC5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnMgPSBkZWZhdWx0RGlyZXRpb25zO1xuICAgIGFwcC5zdGFydCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKCk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBncm91cENvbnRyb2xsZXIgPSBuZXcgR3JvdXBDb250cm9sbGVyKHRoaXMuZ3JvdXBMaXN0KSxcbiAgICAgICAgICAgIHNldHRpbmdzQ29udHJvbGxlciA9IG5ldyBTZXR0aW5nc0NvbnRyb2xsZXIodGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnMsIHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpKTtcbiAgICAgICAgXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5zaG93R3JvdXBMaXN0KCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDpjcmVhdGVkJywgKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZEdyb3VwKGdyb3VwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkR3JvdXAgKGdyb3VwKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0LnB1c2goZ3JvdXApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgUG9wdXBGb3JtYXRWaWV3ID0gcmVxdWlyZSgnLi9WaWV3L1BvcHVwRm9ybWF0Vmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0ID0gZ3JvdXBMaXN0O1xuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNob3dHcm91cExpc3QgKCkge1xuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KHRoaXMuZ3JvdXBMaXN0KTtcblxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XG5cbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsIChncm91cCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpO1xuXG4gICAgICAgICAgICBncm91cExpc3RWaWV3LmFwcGVuZEdyb3VwKGdyb3VwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDpmb3JtYXR0ZWQnLCAoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGxldCBwb3B1cEZvcm1hdFZpZXcgPSBuZXcgUG9wdXBGb3JtYXRWaWV3KGdyb3VwKTtcblxuICAgICAgICAgICAgcG9wdXBGb3JtYXRWaWV3LnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBWaWV3LmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IGxlZnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbHVtbicpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcblxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJHcm91cHMoKTtcblxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJlbmRlckdyb3VwcyAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0LmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xuXG4gICAgICAgICAgICBncm91cFZpZXcuc2V0R3JvdXAoZ3JvdXApO1xuXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGVuZEdyb3VwIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xuXG4gICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XG4gICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyksXG4gICAgICAgICAgICBzZXR0aW5nc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1idG4nKTtcblxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXBQb3B1cDpvcGVuJykpO1xuICAgICAgICBzZXR0aW5nc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1Yignc2V0dGluZ3NQb3B1cDpvcGVuJykpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ3JvdXBMaXN0VHBsICgpIHtcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2staGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+R3JvdXA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay13cmFwcGVyIGdyb3VwLXdyYXBwZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWdyb3VwLWJ0blwiPmFkZCBncm91cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3VwVHBsIChncm91cCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBmb3JtYXQtYWRkZWQtYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgcG9wdXBGb3JtYXRUcGwgPSByZXF1aXJlKCcuL3RwbC9wb3B1cEZvcm1hdFRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgUG9wdXBGb3JtYXRWaWV3IHtcbiAgIGNvbnN0cnVjdG9yIChncm91cCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtYXQtYWRkZWQnKTtcbiAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcbiAgIH1cblxuICAgc2V0R3JvdXAgKCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZSA9IHBvcHVwRm9ybWF0VHBsKHRoaXMuZ3JvdXAudGVzdExpc3QpO1xuICAgfVxuICAgXG4gICByZW5kZXIgKCkge1xuICAgICAgdGhpcy5zZXRHcm91cCgpO1xuICAgICAgdGhpcy5tb2RhbC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgIH1cblxuICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgIH1cblxuICAgb3BlbiAoKSB7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgIH1cblxuICAgY2xvc2UgKCkge1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICB9XG4gICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEZvcm1hdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEZvcm1hdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHBvcHVwRm9ybWF0VHBsICh0ZXN0TGlzdCkge1xuICAgIGRlYnVnZ2VyO1xuICAgIGNvbnNvbGUubG9nKHRlc3RMaXN0KTtcbiAgICBsZXQgdGVzdHMgPSAnJztcblxuICAgIHRlc3RMaXN0LmZvckVhY2goKHRlc3QpID0+IHtcbiAgICAgICAgdGVzdHMgKz0gYDxkaXYgY2xhc3M9XCJ0ZXN0LW5hbWVcIj4ke3Rlc3QubmFtZX08L2Rpdj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwidGVzdC1saXN0LXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50IGZvcm1hdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtYXQtdGVzdC1saXN0XCI+JHt0ZXN0c31cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtdGVzdC1idG5cIj5hZGQgdGVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1ncm91cC1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvcHVwRm9ybWF0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL3BvcHVwRm9ybWF0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm91cFBvcHVwVHBsIChkaXJlY3Rpb25MaXN0KSB7XG4gICAgbGV0IG9wdGlvbnMgPSAnJztcblxuICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwiZ3JvdXAtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1vZGFsLWdyb3VwLW5hbWVcIiBjbGFzcz1cIm1vZGFsLWdyb3VwLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibW9kYWwtZ3JvdXAtZGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWdyb3VwLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXG4gICAgLy8gUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxuICAgIC8vIFBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzJyksXG4gICAgLy8gU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICAvLyBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChkaXJlY3Rpb25zLCBkaXJlY3Rpb25OYW1lcykge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbk5hbWVzID0gZGlyZWN0aW9uTmFtZXM7XG4gICAgICAgIC8vIHRoaXMuc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKGRlZmF1bHREaXJlY3Rpb25zKTtcbiAgICAgICAgLy8gdGhpcy5wb3B1cFNldHRpbmdzVmlldyA9IG5ldyBQb3B1cFNldHRpbmdzVmlldyhkaXJlY3Rpb25zKTtcbiAgICAgICAgLy8gdGhpcy5wb3B1cEFkZERpcmVjdGlvblZpZXcgPSBuZXcgUG9wdXBBZGREaXJlY3Rpb25WaWV3KCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG5cbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgICBsZXQgcG9wdXBTZXR0aW5nc1ZpZXcgPSBuZXcgUG9wdXBTZXR0aW5nc1ZpZXcodGhpcy5kaXJlY3Rpb25zLCB0aGlzLmRpcmVjdGlvbk5hbWVzKTtcbiAgICAgICAgICAgICBwb3B1cFNldHRpbmdzVmlldy5yZW5kZXJQb3B1cCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIHN1YnNjcmliZSAoKSB7XG4gICAgLy8gICAgIHRoaXMuc3Vic2NyaWJlT3BlblBvcHVwcygpO1xuICAgIC8vICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdERpcmVjdGlvbigpO1xuICAgIC8vICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdEZpbHRlcigpO1xuICAgIC8vICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdFRlc3QoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBzdWJzY3JpYmVPcGVuUG9wdXBzICgpIHtcbiAgICAvLyAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOm9wZW4nLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuXG5cblxuICAgIC8vICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zWzBdO1xuICAgIC8vICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgLy8gICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyAgICAgbWVkaWF0b3Iuc3ViKCdncm91cFBvcHVwOm9wZW4nLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBsZXQgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoKSxcbiAgICAvLyAgICAgICAgICAgICBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG5cbiAgICAvLyAgICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5zZXREaXJlY3Rpb25MaXN0KGRpcmVjdGlvbnMpO1xuICAgIC8vICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgLy8gICAgIG1lZGlhdG9yLnN1YignYWRkRGlyZWN0aW9uUG9wdXA6b3BlbicsICgpID0+IHtcbiAgICAvLyAgICAgICAgIGxldCBwb3B1cEFkZERpcmVjdGlvblZpZXcgPSBuZXcgUG9wdXBBZGREaXJlY3Rpb25WaWV3KCk7XG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIHBvcHVwQWRkRGlyZWN0aW9uVmlldy5yZW5kZXJQb3B1cCgpO1xuICAgIC8vICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5jbG9zZSgpO1xuICAgIC8vICAgICAgICAgdGhpcy5zdWJzY3JpYmVDbG9zZVBvcHVwKCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIHN1YnNjcmliZUNsb3NlUG9wdXAgKCkge1xuICAgIC8vICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgLy8gICAgIG1lZGlhdG9yLnN1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwQWRkRGlyZWN0aW9uVmlldy5jbG9zZSgpO1xuICAgIC8vICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5vcGVuKCk7XG5cbiAgICAvLyAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG4gICAgLy8gICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG5cbiAgICAvLyAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBzdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24gKCkge1xuICAgIC8vIFx0bWVkaWF0b3Iuc3ViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgKGRpcmVjdGlvbk5hbWUpID0+IHtcbiAgICAvLyAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG4gICAgLy8gICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBkaXJlY3Rpb25OYW1lKTtcbiAgICAvLyAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcblxuICAgIC8vICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIHN1YnNjcmliZVNlbGVjdFRlc3QgKCkge1xuICAgIC8vICAgICBtZWRpYXRvci5zdWIoJ3Rlc3Q6c2VsZWN0JywgKCkgPT4ge1xuICAgIC8vICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAvLyAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcblxuICAgIC8vICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cblxuICAgIC8vIHN1YnNjcmliZVNlbGVjdEZpbHRlciAoKSB7XG4gICAgLy8gICAgIG1lZGlhdG9yLnN1YignZmlsdGVyOnNlbGVjdCcsICgpID0+IHtcbiAgICAvLyAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG4gICAgLy8gICAgICAgICB0aGlzLm1vZGUgPSAnRic7XG4gICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBzdWJzY3JpYmVBZGREaXJlY3Rpb24gKCkge1xuICAgIC8vICAgICBtZWRpYXRvci5zdWIoJ2RpcmVjdGlvbjphZGQnLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuICAgIC8vICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcbiAgICBzZXR0aW5nc1BvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcycpO1xuXG5jbGFzcyBQb3B1cFNldHRpbmdzVmlldyB7XG4gICAgY29uc3RydWN0b3IgKGRpcmVjdGlvbnMsIGRpcmVjdGlvbk5hbWVzKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTmFtZXMgPSBkaXJlY3Rpb25OYW1lcztcbiAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IGRpcmVjdGlvbnNbMF07XG4gICAgICAgIHRoaXMubW9kZSA9ICdUJztcblxuXG4gICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncycpO1xuICAgIH1cblxuICAgIHJlbmRlclBvcHVwICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTmFtZXMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuXG5cbiAgICByZVJlbmRlclBvcHVwIChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHNldHRpbmdzUG9wdXBUcGwoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHNldERpcmVjdGlvbk5hbWVzICgpIHtcbiAgICAgICAgLy8gbGV0IGRpcmVjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXJlY3Rpb24tc2VsZWN0JyksXG4gICAgICAgIC8vICAgICBvcHRpb25MaXN0ID0gJycsXG4gICAgICAgIC8vICAgICB0cGwgPSAnJztcblxuICAgICAgICAvLyB0aGlzLnNldHRpbmdzLmRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoZGlyZWN0aW9uLCBpKSA9PiB7XG4gICAgICAgIC8vICAgICBvcHRpb25MaXN0ICs9IGBcbiAgICAgICAgLy8gICAgICAgICA8b3B0aW9uICR7KGkgPSAwKSA/ICdzZWxlY3RlZCcgOiAnJ30gdmFsdWU9XCIke2RpcmVjdGlvbi5uYW1lfVwiPlxuICAgICAgICAvLyAgICAgICAgICAgICAke2RpcmVjdGlvbi5uYW1lfVxuICAgICAgICAvLyAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAvLyAgICAgYDtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIFxuXG4gICAgICAgIGxldCBkaXJlY3Rpb25OYW1lcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBkaXJlY3Rpb25OYW1lcy5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgICAgIH0pO1xuY29uc29sZS5sb2codGhpcy5kaXJlY3Rpb25zKTtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbk5hbWVzO1xuICAgIH1cblxuICAgIG9wZW4gKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgY2xvc2VHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZXR0aW5ncy1idG4nKSxcbiAgICAgICAgICAgIGRpcmVjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb24nKSxcbiAgICAgICAgICAgIHNlbGVjdFRlc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdC1zZXR0aW5ncy1idG4nKSxcbiAgICAgICAgICAgIHNlbGVjdEZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItc2V0dGluZ3MtYnRuJyksXG4gICAgICAgICAgICBhZGREaXJlY3Rpb25Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyZWN0aW9uLWJ0bicpLFxuICAgICAgICAgICAgYWRkVGVzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXN0LWJ0bicpLFxuICAgICAgICAgICAgYWRkRmlsdGVyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZpbHRlci1idG4nKTtcblxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XG4gICAgICAgICAgICBtZWRpYXRvci51bnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXJlY3Rpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0VGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YigndGVzdDpzZWxlY3QnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdmaWx0ZXI6c2VsZWN0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZERpcmVjdGlvblBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZFRlc3RQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkRmlsdGVyUG9wdXA6b3BlbicpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBhZGRGaWx0ZXJQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkVGVzdFBvcHVwOm9wZW4nKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cE5hbWUnKSxcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwRGlyZWN0aW9uJyksXG4gICAgICAgICAgICBkYXRhID0ge307XG5cbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBkaXJlY3Rpb25MaXN0VHBsID0gcmVxdWlyZSgnLi9kaXJlY3Rpb25MaXN0VHBsLmpzJyksXG4gICAgZmlsdGVyTGlzdFRwbCA9IHJlcXVpcmUoJy4uLy4uLy4uL0ZpbHRlcnMvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcycpLFxuICAgIHRlc3RMaXN0VHBsID0gcmVxdWlyZSgnLi4vLi4vLi4vVGVzdHMvVmlldy90cGwvdGVzdExpc3RUcGwuanMnKTtcblxuZnVuY3Rpb24gc2V0dGluZ3NQb3B1cFRwbCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICBsZXQgZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9ucywgc2VsZWN0ZWREaXJlY3Rpb24ubmFtZSksXG4gICAgICAgIGZpbHRlckxpc3QgPSBmaWx0ZXJMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLmZpbHRlckxpc3QpLFxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLnRlc3RMaXN0KTtcblxuICAgIHJldHVybiBgPGRpdiBpZD1cInNldHRpbmdzLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbHRlci1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5GPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke21vZGUgPT09ICdUJz8gdGVzdExpc3Q6IGZpbHRlckxpc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2Utc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdzUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBkaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0LCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgIGxldCBvcHRpb25zID0gJyc7XG5cbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0nJHtpdGVtfScgJHtzZWxlY3RlZERpcmVjdGlvbiA9PT0gaXRlbT8gJ3NlbGVjdGVkJzogJyd9PiR7aXRlbX08L29wdGlvbj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uLWxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1kaXJlY3Rpb24tYnRuXCI+YWRkIGRpcmVjdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25MaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlsdGVyTGlzdFRwbCAoZmlsdGVyTGlzdCkge1xuICAgIGxldCBmaWx0ZXJzID0gJyc7XG5cbiAgICBmaWx0ZXJMaXN0LmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICBmaWx0ZXJzICs9IGA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+JHtmaWx0ZXJ9PC9kaXY+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+RmlsdGVyczwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0XCI+JHtmaWx0ZXJzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtZmlsdGVyLWJ0biBidG5cIj5hZGQgZmlsdGVyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbHRlckxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHRlc3RMaXN0VHBsICh0ZXN0c0xpc3QpIHtcbiAgICBsZXQgdGVzdHMgPSAnJztcblxuICAgIHRlc3RzTGlzdC5mb3JFYWNoKCh0ZXN0KSA9PiB7XG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdFwiPiR7dGVzdC5uYW1lfTwvZGl2PmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ0ZXN0LWxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxoMz5UZXN0czwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlc3QtbGlzdFwiPiR7dGVzdHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10ZXN0LWJ0biBidG5cIj5hZGQgdGVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0TGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ3JvdXBMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0RwLTExNycsXG4gICAgICAgIHRlc3RMaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0pTIENvcmUnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0pTIENvcmUnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3REYXlzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwZW9wbGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGFycnknLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnUG90dGVyJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hhcnJ5LXBvdHRlckBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdSb24nLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnV2lzbGV5JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3Jvbi13aXNsZXlAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnRHAtMTIxJyxcbiAgICAgICAgdGVzdExpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnR28gQ29yZScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZmlsdGVyTGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnR28gQ29yZSddLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA4MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFc3NheSddLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA3NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdGVzdERheXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHBlb3BsZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdIZXJtaW9uZScsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdHcmFuZ2VyJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hlcm1pb25lLWdyYW5nZXJAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV2aWxsZScsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdMb25nYm90dG9tJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ25ldmlsbGUtbG9uZ2JvdHRvbUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE3OjAwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDgwLFxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzUsXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDYwLFxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAzNjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdEcC0xMjMnLFxuICAgICAgICB0ZXN0TGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdQSFAgQ29yZScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZmlsdGVyTGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnUEhQIENvcmUnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3REYXlzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwZW9wbGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRHJhY28nLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnTWFsZm95JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2RyYWNvLW1hbGZveUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdQZXRlcicsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdHcmlmZmluJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3BldGVyLWdyaWZmaW5AZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSBcbl07XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdGVzdERhdGEuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRlc3Qge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBncmFkZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRlc3Q7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1Rlc3RzL01vZGVsL1Rlc3QuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzO1xuICAgICAgICB0aGlzLmFjdGlvbkxpc3QgPSBbJ2F2ZXJhZ2UnLCAnbWF4JywgJ21pbicsICdlcXVhbCddO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbkxpc3QgPSBbJz4nLCAnPj0nLCAnPScsICc8PScsICc8J107XG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRmlsdGVycy9Nb2RlbC9GaWx0ZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKTtcblxubGV0IGRlZmF1bHREaXJldGlvbnMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpcmVjdGlvbk1vZGVsKCdVSScpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGlyZWN0aW9uTW9kZWwoJ0pTJyksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEaXJlY3Rpb25Nb2RlbCgnUEhQJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpcmVjdGlvbk1vZGVsKCdHTycpXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG5kZWZhdWx0RGlyZXRpb25zWzBdLmFkZFRlc3QoJ0VuZyAxJywgMTAwKTtcbmRlZmF1bHREaXJldGlvbnNbMF0uYWRkVGVzdCgnRW5nIDInLCAxMDApO1xuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRUZXN0KCdFbmcgMycsIDEwMCk7XG5kZWZhdWx0RGlyZXRpb25zWzBdLmFkZFRlc3QoJ0VuZyA0JywgMTAwKTtcbmRlZmF1bHREaXJldGlvbnNbMF0uYWRkVGVzdCgnRXNzYXkgVUknLCAyMDApO1xuZGVmYXVsdERpcmV0aW9uc1sxXS5hZGRUZXN0KCdFbmcgMScsIDEwMCk7XG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZFRlc3QoJ0VuZyAyJywgMTAwKTtcbmRlZmF1bHREaXJldGlvbnNbMV0uYWRkVGVzdCgnRW5nIDMnLCAxMDApO1xuZGVmYXVsdERpcmV0aW9uc1sxXS5hZGRUZXN0KCdKUyBDb3JlJywgMTAwKTtcbmRlZmF1bHREaXJldGlvbnNbMV0uYWRkVGVzdCgnRXNzYXkgSlMnLCAyMDApO1xuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRUZXN0KCdFbmcgMScsIDEwMCk7XG5kZWZhdWx0RGlyZXRpb25zWzJdLmFkZFRlc3QoJ0VuZyAyJywgMTAwKTtcbmRlZmF1bHREaXJldGlvbnNbMl0uYWRkVGVzdCgnUEhQIENvcmUnLCAxMDApO1xuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRUZXN0KCdFc3NheSBQSFAnLCAyMDApO1xuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdFbmcgMScsIDEwMCk7XG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0VuZyAyJywgMTAwKTtcbmRlZmF1bHREaXJldGlvbnNbM10uYWRkVGVzdCgnRW5nIDMnLCAxMDApO1xuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdFbmcgNCcsIDEwMCk7XG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0dPIENvcmUnLCAyMDApO1xuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdFc3NheSBHTycsIDMwMCk7XG5cbmxldCB0ZXN0TGlzdFVJID0gWydFbmcgMScsICdFbmcgMicsICdFbmcgMycsXSxcbiAgICB0ZXN0TGlzdEpTID0gWydFbmcgMScsXSxcbiAgICB0ZXN0TGlzdFBIUCA9IFsnUEhQIENvcmUnXSxcbiAgICB0ZXN0TGlzdEdPID0gWydFbmcgMScsICdFbmcgMicsICdFbmcgMycsJ0VuZyA0J107XG5cbmRlZmF1bHREaXJldGlvbnNbMF0uYWRkRmlsdGVyKHRlc3RMaXN0VUksICdhdmVyYWdlJywgJz4nLCA2MCk7XG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZEZpbHRlcih0ZXN0TGlzdEpTLCAnYXZlcmFnZScsICc+JywgNzUpO1xuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRGaWx0ZXIodGVzdExpc3RQSFAsICdhdmVyYWdlJywgJz4nLCA4MCk7XG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZEZpbHRlcih0ZXN0TGlzdEdPLCAnc3VtbScsICc+JywgNzApO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHREaXJldGlvbnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9kZWZhdWx0RGlyZXRpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==