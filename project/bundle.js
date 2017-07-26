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
    function SettingsModel(defaultDirections) {
        _classCallCheck(this, SettingsModel);

        this.directions = [];
        this.render(defaultDirections);
    }

    _createClass(SettingsModel, [{
        key: 'render',
        value: function render(defaultDirections) {
            var _this = this;

            defaultDirections.forEach(function (item) {
                _this.directions.push(new DirectionModel(item));
            });
        }
    }, {
        key: 'getDirectionNames',
        value: function getDirectionNames() {
            var directionNames = [];

            this.directions.forEach(function (item) {
                directionNames.push(item.name);
            });

            return directionNames;
        }
    }, {
        key: 'addDirection',
        value: function addDirection(name) {
            var _this2 = this;

            this.directions.push(new DirectionModel(name));

            defaultDirections.forEach(function (item) {
                _this2.directions.push(new DirectionModel(item));
            });
        }
    }, {
        key: 'addTests',
        value: function addTests(testName) {
            this.tests.push(new Test(testName));
        }
    }, {
        key: 'addFilters',
        value: function addFilters(tests, action, condition, grade) {
            this.filters.push(new Filter(tests, action, condition, grade));
        }
    }]);

    return SettingsModel;
}();

module.exports = SettingsModel;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirectionModel = function DirectionModel(name) {
    _classCallCheck(this, DirectionModel);

    this.name = name;
    this.tests = [];
    this.filters = [];
}

// addTest (testName) {
//     this.tests.push(new Test(testName));
// }

// addFilter (tests, action, condition, grade) {
//     this.filters.push(new Filter(tests, action, condition, grade));
// }
;

module.exports = DirectionModel;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var App = __webpack_require__(7),
        groupList = __webpack_require__(23);

    var app = new App(groupList);

    app.start();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(8),
    SettingsController = __webpack_require__(15),
    mediator = __webpack_require__(0);

var App = function () {
    function App(groupList) {
        _classCallCheck(this, App);

        this.groupList = groupList;
        // this.directions = groupList.directions;
        this.subscribe();
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
            var groupController = new GroupController(this.groupList);
            // settingsController = new SettingsController(this.directions);

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
    PopupAddGroupView = __webpack_require__(3),
    PopupAddDirectionView = __webpack_require__(21),
    SettingsModel = __webpack_require__(4),
    DirectionModel = __webpack_require__(5),
    mediator = __webpack_require__(0);

var SettingsController = function () {
    function SettingsController(defaultDirections) {
        _classCallCheck(this, SettingsController);

        this.settingsModel = new SettingsModel(defaultDirections);
        this.popupSettingsView = new PopupSettingsView();
        this.popupAddDirectionView = new PopupAddDirectionView();

        this.subscribe();
    }

    _createClass(SettingsController, [{
        key: 'subscribe',
        value: function subscribe() {
            this.subscribeOpenPopups();
            this.subscribeSelectDirection();
            this.subscribeSelectFilter();
            this.subscribeSelectTest();
        }
    }, {
        key: 'subscribeOpenPopups',
        value: function subscribeOpenPopups() {
            var _this = this;

            mediator.sub('settingsPopup:open', function () {
                var directions = _this.settingsModel.getDirectionNames();

                _this.selectedDirection = _this.settingsModel.directions[0];
                _this.mode = 'T';

                _this.popupSettingsView.renderPopup(directions, _this.mode, _this.selectedDirection);
                _this.subscribeClosePopup();
            });

            mediator.sub('groupPopup:open', function () {
                var popupAddGroupView = new PopupAddGroupView(),
                    directions = _this.settingsModel.getDirectionNames();

                popupAddGroupView.setDirectionList(directions);
                popupAddGroupView.renderPopup();
            });

            mediator.sub('addDirectionPopup:open', function () {
                var popupAddDirectionView = new PopupAddDirectionView();

                popupAddDirectionView.renderPopup();
                _this.popupSettingsView.close();
                _this.subscribeClosePopup();
            });
        }
    }, {
        key: 'subscribeClosePopup',
        value: function subscribeClosePopup() {
            var _this2 = this;

            mediator.sub('settingsPopup:close', function () {
                _this2.popupSettingsView.close();
            });

            mediator.sub('addDirectionPopup:close', function () {
                _this2.popupAddDirectionView.close();
                _this2.popupSettingsView.open();

                var directions = _this2.settingsModel.getDirectionNames();
                _this2.mode = 'T';

                _this2.popupSettingsView.reRenderPopup(directions, _this2.mode, _this2.selectedDirection);
            });
        }
    }, {
        key: 'subscribeSelectDirection',
        value: function subscribeSelectDirection() {
            var _this3 = this;

            mediator.sub('directionSelect:change', function (directionName) {
                var directions = _this3.settingsModel.getDirectionNames();
                _this3.selectedDirection = _this3.settingsModel.directions.find(function (item) {
                    return item.name === directionName;
                });
                _this3.mode = 'T';

                _this3.popupSettingsView.reRenderPopup(directions, _this3.mode, _this3.selectedDirection);
            });
        }
    }, {
        key: 'subscribeSelectTest',
        value: function subscribeSelectTest() {
            var _this4 = this;

            mediator.sub('test:select', function () {
                var directions = _this4.settingsModel.getDirectionNames();
                _this4.mode = 'T';

                _this4.popupSettingsView.reRenderPopup(directions, _this4.mode, _this4.selectedDirection);
            });
        }
    }, {
        key: 'subscribeSelectFilter',
        value: function subscribeSelectFilter() {
            var _this5 = this;

            mediator.sub('filter:select', function () {
                var directions = _this5.settingsModel.getDirectionNames();
                _this5.mode = 'F';

                _this5.popupSettingsView.reRenderPopup(directions, _this5.mode, _this5.selectedDirection);
            });
        }
    }, {
        key: 'subscribeAddDirection',
        value: function subscribeAddDirection() {
            var _this6 = this;

            mediator.sub('direction:add', function () {
                var directions = _this6.settingsModel.getDirectionNames();
                _this6.mode = 'T';

                _this6.popupSettingsView.reRenderPopup(directions, _this6.mode, _this6.selectedDirection);
            });
        }
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
    function PopupSettingsView() {
        _classCallCheck(this, PopupSettingsView);

        this.modal = document.querySelector('#modal-settings');
    }

    _createClass(PopupSettingsView, [{
        key: 'renderPopup',
        value: function renderPopup(directions, mode, selectedDirection) {
            this.modal.innerHTML = settingsPopupTpl(directions, mode, selectedDirection);
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
        value: function setDirectionNames(directions) {
            this.directions = directions;
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
        filterList = filterListTpl(selectedDirection.filters),
        testList = testListTpl(selectedDirection.tests);

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
        tests += '<div class="test">' + test + '</div>';
    });

    return '<div class="test-list-wrapper">\n                <h3>Tests</h3>\n                <div class="test-list">' + tests + '</div>\n                <button class="add-test-btn btn">add test</button>\n            </div>';
}

module.exports = testListTpl;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    addDirectionPopupTpl = __webpack_require__(22);

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
            var closeDirectionBtn = document.querySelector('.close-direction-btn'),
                directionName = document.querySelector('.add-direction-name');

            closeDirectionBtn.addEventListener('click', function () {
                mediator.pub('addDirectionPopup:close');
                mediator.unsub('addDirectionPopup:close');
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addDirectionPopupTpl() {
    return '<div class="modal-content add-direction-popup">\n                <input type="text" class="add-direction-name" placeholder="Enter direction name">\n                <button class="btn btn-cog">\n                    <i class="fa fa-check close-direction-btn" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addDirectionPopupTpl;

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

// directions: ['UI', 'PHP', 'GO', 'JS']

// directions: [
//     {
//         name: 'UI',
//         tests: ['Eng1', 'Eng2', 'JS Core', 'Essay UI'],
//         filters: ['UI 1']
//     },
//     {
//         name: 'PHP',
//         tests: ['Eng1', 'Eng2', 'Essay PHP'],
//         filters: ['PHP 1']
//     },
//     {
//         name: 'GO',
//         tests: ['Eng1', 'Eng2', 'Essay GO'],
//         filters: ['GO 1']
//     }
// ]
// };

module.exports = groupList;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzQ0NWEyOTJiNjI1ZmMwZjYxNWIiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBGb3JtYXRWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL3BvcHVwRm9ybWF0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JvdXBUcGwiLCJyZXF1aXJlIiwiR3JvdXBWaWV3IiwidGVtcGxhdGUiLCJncm91cHNCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdyb3VwIiwic2V0VGVtcGxhdGUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhZGRMaXN0ZW5lcnMiLCJmb3JtYXRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJHcm91cE1vZGVsIiwibmFtZSIsImRpcmVjdGlvbiIsImdyb3VwUG9wdXBUcGwiLCJQb3B1cEFkZEdyb3VwVmlldyIsImRpcmVjdGlvbkxpc3QiLCJtb2RhbCIsImlubmVySFRNTCIsIm9wZW4iLCJjbG9zZUdyb3VwQnRuIiwiZ2VuZXJhdGVEYXRhIiwiY2xvc2UiLCJncm91cE5hbWVFbGVtIiwiZ3JvdXBEaXJlY3Rpb25FbGVtIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJEaXJlY3Rpb25Nb2RlbCIsIlNldHRpbmdzTW9kZWwiLCJkZWZhdWx0RGlyZWN0aW9ucyIsImRpcmVjdGlvbnMiLCJyZW5kZXIiLCJpdGVtIiwiZGlyZWN0aW9uTmFtZXMiLCJ0ZXN0TmFtZSIsInRlc3RzIiwiVGVzdCIsImFjdGlvbiIsImNvbmRpdGlvbiIsImdyYWRlIiwiZmlsdGVycyIsIkZpbHRlciIsImluaXQiLCJBcHAiLCJncm91cExpc3QiLCJhcHAiLCJzdGFydCIsIkdyb3VwQ29udHJvbGxlciIsIlNldHRpbmdzQ29udHJvbGxlciIsInN1YnNjcmliZSIsImdyb3VwQ29udHJvbGxlciIsInNob3dHcm91cExpc3QiLCJzdWIiLCJhZGRHcm91cCIsIkdyb3VwTGlzdFZpZXciLCJQb3B1cEZvcm1hdFZpZXciLCJncm91cExpc3RWaWV3IiwicG9wdXBBZGRHcm91cFZpZXciLCJyZW5kZXJQb3B1cCIsImFwcGVuZEdyb3VwIiwicG9wdXBGb3JtYXRWaWV3IiwiZ3JvdXBMaXN0VHBsIiwibGVmdEJsb2NrIiwicmVuZGVyR3JvdXBzIiwiZ3JvdXBWaWV3Iiwic2V0R3JvdXAiLCJyZW5kZXJHcm91cCIsImFkZEdyb3VwQnRuIiwic2V0dGluZ3NCdG4iLCJwb3B1cEZvcm1hdFRwbCIsInRlc3RMaXN0IiwiY29uc29sZSIsImxvZyIsInRlc3QiLCJQb3B1cFNldHRpbmdzVmlldyIsIlBvcHVwQWRkRGlyZWN0aW9uVmlldyIsInNldHRpbmdzTW9kZWwiLCJwb3B1cFNldHRpbmdzVmlldyIsInBvcHVwQWRkRGlyZWN0aW9uVmlldyIsInN1YnNjcmliZU9wZW5Qb3B1cHMiLCJzdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24iLCJzdWJzY3JpYmVTZWxlY3RGaWx0ZXIiLCJzdWJzY3JpYmVTZWxlY3RUZXN0IiwiZ2V0RGlyZWN0aW9uTmFtZXMiLCJzZWxlY3RlZERpcmVjdGlvbiIsIm1vZGUiLCJzdWJzY3JpYmVDbG9zZVBvcHVwIiwic2V0RGlyZWN0aW9uTGlzdCIsInJlUmVuZGVyUG9wdXAiLCJkaXJlY3Rpb25OYW1lIiwiZmluZCIsInNldHRpbmdzUG9wdXBUcGwiLCJkaXJlY3Rpb25TZWxlY3QiLCJzZWxlY3RUZXN0QnRuIiwic2VsZWN0RmlsdGVyQnRuIiwiYWRkRGlyZWN0aW9uUG9wdXAiLCJhZGRUZXN0UG9wdXAiLCJhZGRGaWx0ZXJQb3B1cCIsInVuc3ViIiwiZSIsInRhcmdldCIsImRpcmVjdGlvbkxpc3RUcGwiLCJmaWx0ZXJMaXN0VHBsIiwidGVzdExpc3RUcGwiLCJmaWx0ZXJMaXN0IiwiZmlsdGVyIiwidGVzdHNMaXN0IiwiYWRkRGlyZWN0aW9uUG9wdXBUcGwiLCJjbG9zZURpcmVjdGlvbkJ0biIsInRlc3REYXlzIiwiZGF0ZSIsInRpbWUiLCJwZW9wbGUiLCJsYXN0TmFtZSIsImVtYWlsIiwidGVzdERheSIsImdyYWRlcyIsIkVuZzEiLCJFbmcyIiwiRW5nMyIsIkVuZzQiLCJDb3JlIiwiRXNzYXkiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7Ozs7SUFFTUEsUTtBQUNGLHdCQUFlO0FBQUE7O0FB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O0FBQ0pDLGtCQUFNLEVBREY7QUFFSkMsa0JBQU0sRUFGRjtBQUdKQyxrQkFBTSxFQUhGO0FBSUpDLGtCQUFNLEVBSkY7QUFLSkMsa0JBQU0sR0FMRjtBQU1KQyxtQkFBTztBQU5IO0FBUlosS0FESSxFQWtCSjtBQUNJbkgsY0FBTSxPQURWO0FBRUkwRyxrQkFBVSxTQUZkO0FBR0lDLGVBQU8seUJBSFg7QUFJSUMsaUJBQVM7QUFDTEwsa0JBQU0sVUFERDtBQUVMQyxrQkFBTTtBQUZELFNBSmI7QUFRSUssZ0JBQVE7QUFDSkMsa0JBQU0sRUFERjtBQUVKQyxrQkFBTSxFQUZGO0FBR0pDLGtCQUFNLEVBSEY7QUFJSkMsa0JBQU0sRUFKRjtBQUtKQyxrQkFBTSxHQUxGO0FBTUpDLG1CQUFPO0FBTkg7QUFSWixLQWxCSTtBQTFEVCxDQTdMUyxDQUFoQjs7QUE4Ukk7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNKOztBQUVBcEksT0FBT0MsT0FBUCxHQUFpQnFELFNBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzQ0NWEyOTJiNjI1ZmMwZjYxNWIiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE1lZGlhdG9yIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICB9XG5cbiAgICBwdWIgKGNoYW5uZWwsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0uZm9yRWFjaCgoZm4pID0+IGZuKGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1YiAoY2hhbm5lbCwgZm4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLnB1c2goZm4pO1xuICAgIH1cblxuICAgIHVuc3ViIChjaGFubmVsKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xuICAgIH1cbn1cblxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwVHBsID0gcmVxdWlyZSgnLi90cGwvZ3JvdXBUcGwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XG4gICAgICAgIHRoaXMuZ3JvdXBzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtd3JhcHBlcicpO1xuICAgIH1cblxuICAgIHNldEdyb3VwIChncm91cCkge1xuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XG4gICAgICAgIHRoaXMuc2V0VGVtcGxhdGUodGhpcy5ncm91cCk7XG4gICAgfVxuXG4gICAgc2V0VGVtcGxhdGUgKGdyb3VwKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cFRwbChncm91cCk7XG4gICAgfVxuXG4gICAgcmVuZGVyR3JvdXAgKCkge1xuICAgICAgICB0aGlzLmdyb3Vwc0Jsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBmb3JtYXRHcm91cEJ0biA9IHRoaXMuZ3JvdXBzQmxvY2sucXVlcnlTZWxlY3RvcignLmZvcm1hdC1hZGRlZC1idG4nKTtcblxuICAgICAgICBmb3JtYXRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXA6Zm9ybWF0dGVkJywgdGhpcy5ncm91cCkpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEdyb3VwTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgfVxuXG4gICAgYWRkVGVzdGluZ1Nlc3Npb24gKCkge1xuXG4gICAgfVxuXG4gICAgYWRkVGVzdCAoKSB7XG5cbiAgICB9XG5cbiAgICBhZGRGaWx0ZXIgKCkge1xuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcbiAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKTtcblxuY2xhc3MgUG9wdXBBZGRHcm91cFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gZGlyZWN0aW9uTGlzdCDQvNGLINC00L7Qu9C20L3RiyDQsdGA0LDRgtGMINC+0YLQutGD0LTQsCDRgtC+XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IFsndWknLCAncGhwJywgJ2pzJywgJ2phdmEnXTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3B1cCAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gZ3JvdXBQb3B1cFRwbCh0aGlzLmRpcmVjdGlvbkxpc3QpO1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgY2xvc2VHcm91cEJ0biA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI2Nsb3NlLWdyb3VwLWJ0bicpO1xuXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2VuZXJhdGVEYXRhKCksXG4gICAgICAgICAgICAgICAgLy8gZGF0YS5kaXJlY3Rpb24gLSDQvNGLINC/0L7Qu9GD0YfQsNC10Lwg0LjQtyDQvdCw0YjQuNGFINGB0LXRgtGC0LjQvdCz0YFcbiAgICAgICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGRhdGEubmFtZSwgZGF0YS5kaXJlY3Rpb24pO1xuXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2dyb3VwOmNyZWF0ZWQnLCBncm91cCk7XG5cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0RGlyZWN0aW9uTGlzdCAoZGlyZWN0aW9uTGlzdCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0O1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XG4gICAgICAgIGxldCBncm91cE5hbWVFbGVtID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ3JvdXAtbmFtZScpLFxuICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25FbGVtID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ3JvdXAtZGlyZWN0aW9uJyksXG4gICAgICAgICAgICBkYXRhID0ge307XG5cbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBvcGVuICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKTtcblxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKGRlZmF1bHREaXJlY3Rpb25zKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnJlbmRlcihkZWZhdWx0RGlyZWN0aW9ucyk7XG4gICAgfVxuXG4gICAgcmVuZGVyIChkZWZhdWx0RGlyZWN0aW9ucykge1xuICAgICAgICBkZWZhdWx0RGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgRGlyZWN0aW9uTW9kZWwoaXRlbSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25OYW1lcyAoKSB7XG4gICAgXHRsZXQgZGlyZWN0aW9uTmFtZXMgPSBbXTtcblxuICAgIFx0dGhpcy5kaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgXHRkaXJlY3Rpb25OYW1lcy5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgXHR9KTtcblxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uTmFtZXM7XG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ldyBEaXJlY3Rpb25Nb2RlbChuYW1lKSk7XG5cbiAgICAgICAgZGVmYXVsdERpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbk1vZGVsKGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkVGVzdHMgKHRlc3ROYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdHMucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xuICAgIH1cblxuICAgIGFkZEZpbHRlcnMgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBEaXJlY3Rpb25Nb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50ZXN0cyA9IFtdO1xuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBhZGRUZXN0ICh0ZXN0TmFtZSkge1xuICAgIC8vICAgICB0aGlzLnRlc3RzLnB1c2gobmV3IFRlc3QodGVzdE5hbWUpKTtcbiAgICAvLyB9XG5cbiAgICAvLyBhZGRGaWx0ZXIgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAvLyAgICAgdGhpcy5maWx0ZXJzLnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XG4gICAgLy8gfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGlvbk1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gICAgbGV0IEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyksXG4gICAgICAgIGdyb3VwTGlzdCA9IHJlcXVpcmUoJy4vdGVzdERhdGEnKTtcblxuICAgIGxldCBhcHAgPSBuZXcgQXBwKGdyb3VwTGlzdCk7XG4gICAgXG4gICAgYXBwLnN0YXJ0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXG4gICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0ID0gZ3JvdXBMaXN0O1xuICAgICAgICAvLyB0aGlzLmRpcmVjdGlvbnMgPSBncm91cExpc3QuZGlyZWN0aW9ucztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBncm91cENvbnRyb2xsZXIgPSBuZXcgR3JvdXBDb250cm9sbGVyKHRoaXMuZ3JvdXBMaXN0KTtcbiAgICAgICAgICAgIC8vIHNldHRpbmdzQ29udHJvbGxlciA9IG5ldyBTZXR0aW5nc0NvbnRyb2xsZXIodGhpcy5kaXJlY3Rpb25zKTtcbiAgICAgICAgXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5zaG93R3JvdXBMaXN0KCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDpjcmVhdGVkJywgKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZEdyb3VwKGdyb3VwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkR3JvdXAgKGdyb3VwKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0LnB1c2goZ3JvdXApO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgUG9wdXBGb3JtYXRWaWV3ID0gcmVxdWlyZSgnLi9WaWV3L1BvcHVwRm9ybWF0Vmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0ID0gZ3JvdXBMaXN0O1xuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNob3dHcm91cExpc3QgKCkge1xuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KHRoaXMuZ3JvdXBMaXN0KTtcblxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XG5cbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsIChncm91cCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpO1xuXG4gICAgICAgICAgICBncm91cExpc3RWaWV3LmFwcGVuZEdyb3VwKGdyb3VwKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDpmb3JtYXR0ZWQnLCAoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGxldCBwb3B1cEZvcm1hdFZpZXcgPSBuZXcgUG9wdXBGb3JtYXRWaWV3KGdyb3VwKTtcblxuICAgICAgICAgICAgcG9wdXBGb3JtYXRWaWV3LnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBWaWV3LmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IGxlZnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbHVtbicpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcblxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJHcm91cHMoKTtcblxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJlbmRlckdyb3VwcyAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0LmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xuXG4gICAgICAgICAgICBncm91cFZpZXcuc2V0R3JvdXAoZ3JvdXApO1xuXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGVuZEdyb3VwIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xuXG4gICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XG4gICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyksXG4gICAgICAgICAgICBzZXR0aW5nc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1idG4nKTtcblxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXBQb3B1cDpvcGVuJykpO1xuICAgICAgICBzZXR0aW5nc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1Yignc2V0dGluZ3NQb3B1cDpvcGVuJykpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ3JvdXBMaXN0VHBsICgpIHtcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2staGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+R3JvdXA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay13cmFwcGVyIGdyb3VwLXdyYXBwZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWdyb3VwLWJ0blwiPmFkZCBncm91cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3VwVHBsIChncm91cCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBmb3JtYXQtYWRkZWQtYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgcG9wdXBGb3JtYXRUcGwgPSByZXF1aXJlKCcuL3RwbC9wb3B1cEZvcm1hdFRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgUG9wdXBGb3JtYXRWaWV3IHtcbiAgIGNvbnN0cnVjdG9yIChncm91cCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xuICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtYXQtYWRkZWQnKTtcbiAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcbiAgIH1cblxuICAgc2V0R3JvdXAgKCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZSA9IHBvcHVwRm9ybWF0VHBsKHRoaXMuZ3JvdXAudGVzdExpc3QpO1xuICAgfVxuICAgXG4gICByZW5kZXIgKCkge1xuICAgICAgdGhpcy5zZXRHcm91cCgpO1xuICAgICAgdGhpcy5tb2RhbC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgIH1cblxuICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgIH1cblxuICAgb3BlbiAoKSB7XG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgIH1cblxuICAgY2xvc2UgKCkge1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICB9XG4gICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEZvcm1hdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEZvcm1hdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHBvcHVwRm9ybWF0VHBsICh0ZXN0TGlzdCkge1xuICAgIGRlYnVnZ2VyO1xuICAgIGNvbnNvbGUubG9nKHRlc3RMaXN0KTtcbiAgICBsZXQgdGVzdHMgPSAnJztcblxuICAgIHRlc3RMaXN0LmZvckVhY2goKHRlc3QpID0+IHtcbiAgICAgICAgdGVzdHMgKz0gYDxkaXYgY2xhc3M9XCJ0ZXN0LW5hbWVcIj4ke3Rlc3QubmFtZX08L2Rpdj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwidGVzdC1saXN0LXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50IGZvcm1hdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtYXQtdGVzdC1saXN0XCI+JHt0ZXN0c31cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtdGVzdC1idG5cIj5hZGQgdGVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1ncm91cC1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBvcHVwRm9ybWF0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL3BvcHVwRm9ybWF0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm91cFBvcHVwVHBsIChkaXJlY3Rpb25MaXN0KSB7XG4gICAgbGV0IG9wdGlvbnMgPSAnJztcblxuICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwiZ3JvdXAtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1vZGFsLWdyb3VwLW5hbWVcIiBjbGFzcz1cIm1vZGFsLWdyb3VwLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibW9kYWwtZ3JvdXAtZGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWdyb3VwLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXG4gICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxuICAgIFBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzJyksXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChkZWZhdWx0RGlyZWN0aW9ucykge1xuICAgICAgICB0aGlzLnNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbChkZWZhdWx0RGlyZWN0aW9ucyk7XG4gICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcgPSBuZXcgUG9wdXBTZXR0aW5nc1ZpZXcoKTtcbiAgICAgICAgdGhpcy5wb3B1cEFkZERpcmVjdGlvblZpZXcgPSBuZXcgUG9wdXBBZGREaXJlY3Rpb25WaWV3KCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlT3BlblBvcHVwcygpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdERpcmVjdGlvbigpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdEZpbHRlcigpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdFRlc3QoKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVPcGVuUG9wdXBzICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOm9wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnNbMF07XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQ2xvc2VQb3B1cCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcblxuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnNldERpcmVjdGlvbkxpc3QoZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IG5ldyBQb3B1cEFkZERpcmVjdGlvblZpZXcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcG9wdXBBZGREaXJlY3Rpb25WaWV3LnJlbmRlclBvcHVwKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlQ2xvc2VQb3B1cCAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBBZGREaXJlY3Rpb25WaWV3LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3Lm9wZW4oKTtcblxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcblxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiAoKSB7XG4gICAgXHRtZWRpYXRvci5zdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCAoZGlyZWN0aW9uTmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IGRpcmVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU2VsZWN0VGVzdCAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YigndGVzdDpzZWxlY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU2VsZWN0RmlsdGVyICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdmaWx0ZXI6c2VsZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdGJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZUFkZERpcmVjdGlvbiAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZGlyZWN0aW9uOmFkZCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIHNldHRpbmdzUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyk7XG5cbmNsYXNzIFBvcHVwU2V0dGluZ3NWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MnKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3B1cCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmVSZW5kZXJQb3B1cCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb25OYW1lcyAoZGlyZWN0aW9ucykge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xuICAgIH1cblxuICAgIG9wZW4gKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgY2xvc2VHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZXR0aW5ncy1idG4nKSxcbiAgICAgICAgICAgIGRpcmVjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb24nKSxcbiAgICAgICAgICAgIHNlbGVjdFRlc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdC1zZXR0aW5ncy1idG4nKSxcbiAgICAgICAgICAgIHNlbGVjdEZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItc2V0dGluZ3MtYnRuJyksXG4gICAgICAgICAgICBhZGREaXJlY3Rpb25Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyZWN0aW9uLWJ0bicpLFxuICAgICAgICAgICAgYWRkVGVzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXN0LWJ0bicpLFxuICAgICAgICAgICAgYWRkRmlsdGVyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZpbHRlci1idG4nKTtcblxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XG4gICAgICAgICAgICBtZWRpYXRvci51bnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXJlY3Rpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0VGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YigndGVzdDpzZWxlY3QnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdmaWx0ZXI6c2VsZWN0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZERpcmVjdGlvblBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZFRlc3RQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkRmlsdGVyUG9wdXA6b3BlbicpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBhZGRGaWx0ZXJQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkVGVzdFBvcHVwOm9wZW4nKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cE5hbWUnKSxcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwRGlyZWN0aW9uJyksXG4gICAgICAgICAgICBkYXRhID0ge307XG5cbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBkaXJlY3Rpb25MaXN0VHBsID0gcmVxdWlyZSgnLi9kaXJlY3Rpb25MaXN0VHBsLmpzJyksXG4gICAgZmlsdGVyTGlzdFRwbCA9IHJlcXVpcmUoJy4uLy4uLy4uL0ZpbHRlcnMvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcycpLFxuICAgIHRlc3RMaXN0VHBsID0gcmVxdWlyZSgnLi4vLi4vLi4vVGVzdHMvVmlldy90cGwvdGVzdExpc3RUcGwuanMnKTtcblxuZnVuY3Rpb24gc2V0dGluZ3NQb3B1cFRwbCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICBsZXQgZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9ucywgc2VsZWN0ZWREaXJlY3Rpb24ubmFtZSksXG4gICAgICAgIGZpbHRlckxpc3QgPSBmaWx0ZXJMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLmZpbHRlcnMpLFxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLnRlc3RzKTtcblxuICAgIHJldHVybiBgPGRpdiBpZD1cInNldHRpbmdzLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbHRlci1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5GPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke21vZGUgPT09ICdUJz8gdGVzdExpc3Q6IGZpbHRlckxpc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2Utc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdzUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBkaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0LCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgIGxldCBvcHRpb25zID0gJyc7XG5cbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0nJHtpdGVtfScgJHtzZWxlY3RlZERpcmVjdGlvbiA9PT0gaXRlbT8gJ3NlbGVjdGVkJzogJyd9PiR7aXRlbX08L29wdGlvbj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uLWxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1kaXJlY3Rpb24tYnRuXCI+YWRkIGRpcmVjdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25MaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlsdGVyTGlzdFRwbCAoZmlsdGVyTGlzdCkge1xuICAgIGxldCBmaWx0ZXJzID0gJyc7XG5cbiAgICBmaWx0ZXJMaXN0LmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICBmaWx0ZXJzICs9IGA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+JHtmaWx0ZXJ9PC9kaXY+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+RmlsdGVyczwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0XCI+JHtmaWx0ZXJzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtZmlsdGVyLWJ0biBidG5cIj5hZGQgZmlsdGVyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbHRlckxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHRlc3RMaXN0VHBsICh0ZXN0c0xpc3QpIHtcbiAgICBsZXQgdGVzdHMgPSAnJztcblxuICAgIHRlc3RzTGlzdC5mb3JFYWNoKCh0ZXN0KSA9PiB7XG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdFwiPiR7dGVzdH08L2Rpdj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGVzdC1saXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+VGVzdHM8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0LWxpc3RcIj4ke3Rlc3RzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGVzdC1idG4gYnRuXCI+YWRkIHRlc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdExpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcbiAgICBhZGREaXJlY3Rpb25Qb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzJyk7XG5cbmNsYXNzIFBvcHVwQWRkRGlyZWN0aW9uVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1kaXJlY3Rpb24nKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3B1cCAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYWRkRGlyZWN0aW9uUG9wdXBUcGwoKTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgb3BlbiAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBjbG9zZURpcmVjdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1kaXJlY3Rpb24tYnRuJyksXG4gICAgICAgICAgICBkaXJlY3Rpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kaXJlY3Rpb24tbmFtZScpO1xuXG5cbiAgICAgICAgY2xvc2VEaXJlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FkZERpcmVjdGlvblBvcHVwOmNsb3NlJyk7XG4gICAgICAgICAgICBtZWRpYXRvci51bnN1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGlyZWN0aW9uTmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkRGlyZWN0aW9uVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhZGREaXJlY3Rpb25Qb3B1cFRwbCAoKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBhZGQtZGlyZWN0aW9uLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZGQtZGlyZWN0aW9uLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGRpcmVjdGlvbiBuYW1lXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2sgY2xvc2UtZGlyZWN0aW9uLWJ0blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkRGlyZWN0aW9uUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwTGlzdCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdEcC0xMTcnLFxuICAgICAgICB0ZXN0TGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdKUyBDb3JlJyxcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBmaWx0ZXJMaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRW5nMScsICdFbmcyJywgJ0VuZzMnLCAnRW5nNCddLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydKUyBDb3JlJ10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB0ZXN0RGF5czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcGVvcGxlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0hhcnJ5JyxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ1BvdHRlcicsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdoYXJyeS1wb3R0ZXJAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUm9uJyxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ1dpc2xleScsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdyb24td2lzbGV5QGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTc6MDAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogODAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogNjAsXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0RwLTEyMScsXG4gICAgICAgIHRlc3RMaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0dvIENvcmUnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0dvIENvcmUnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3REYXlzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwZW9wbGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGVybWlvbmUnLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnR3JhbmdlcicsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdoZXJtaW9uZS1ncmFuZ2VyQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTU6MzAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogNjAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDg1LFxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogOTUsXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDI2MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldmlsbGUnLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnTG9uZ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgZW1haWw6ICduZXZpbGxlLWxvbmdib3R0b21AZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnRHAtMTIzJyxcbiAgICAgICAgdGVzdExpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUEhQIENvcmUnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ1BIUCBDb3JlJ10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB0ZXN0RGF5czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcGVvcGxlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0RyYWNvJyxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ01hbGZveScsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdkcmFjby1tYWxmb3lAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGV0ZXInLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnR3JpZmZpbicsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdwZXRlci1ncmlmZmluQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTc6MDAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogODAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogNjAsXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0gXG5dO1xuXG4gICAgLy8gZGlyZWN0aW9uczogWydVSScsICdQSFAnLCAnR08nLCAnSlMnXVxuXG4gICAgLy8gZGlyZWN0aW9uczogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiAnVUknLFxuICAgIC8vICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0pTIENvcmUnLCAnRXNzYXkgVUknXSxcbiAgICAvLyAgICAgICAgIGZpbHRlcnM6IFsnVUkgMSddXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6ICdQSFAnLFxuICAgIC8vICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0Vzc2F5IFBIUCddLFxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydQSFAgMSddXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6ICdHTycsXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnRXNzYXkgR08nXSxcbiAgICAvLyAgICAgICAgIGZpbHRlcnM6IFsnR08gMSddXG4gICAgLy8gICAgIH1cbiAgICAvLyBdXG4vLyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==