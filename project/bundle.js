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
            var formatGroupBtn = this.groupsBlock.querySelector('.format-added-btn');

            formatGroupBtn.addEventListener('click', function () {
                return mediator.pub('group:formatted');
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

            mediator.sub('group:formatted', function () {
                console.log('formated');
                var popupFormatView = new PopupFormatView();
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
   function PopupFormatView() {
      _classCallCheck(this, PopupFormatView);

      this.template = '';
      this.modal = document.querySelector('.modal-format-added');
      this.renderGroup();
   }

   _createClass(PopupFormatView, [{
      key: 'setGroup',
      value: function setGroup(group) {
         this.template = popupFormatTpl(group);
      }
   }, {
      key: 'renderGroup',
      value: function renderGroup() {
         this.modal.insertAdjacentHTML('afterbegin', this.template);
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
    var tests = '';

    testList.forEach(function (item) {
        tests += '<option>' + item + '</option>';
    });

    return '<div id="test-list-popup" class="modal-content">\n                <div class="test-list">' + tests + '</div>\n                <button id="close-group-btn" class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOThiNDBkYThmMmRhZGU4MTdmMWQiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBGb3JtYXRWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL3BvcHVwRm9ybWF0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JvdXBUcGwiLCJyZXF1aXJlIiwiR3JvdXBWaWV3IiwidGVtcGxhdGUiLCJncm91cHNCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdyb3VwIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYWRkTGlzdGVuZXJzIiwiZm9ybWF0R3JvdXBCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicHViIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJkaXJlY3Rpb25MaXN0IiwibW9kYWwiLCJpbm5lckhUTUwiLCJvcGVuIiwiY2xvc2VHcm91cEJ0biIsImdlbmVyYXRlRGF0YSIsImNsb3NlIiwiZ3JvdXBOYW1lRWxlbSIsImdyb3VwRGlyZWN0aW9uRWxlbSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiRGlyZWN0aW9uTW9kZWwiLCJTZXR0aW5nc01vZGVsIiwiZGVmYXVsdERpcmVjdGlvbnMiLCJkaXJlY3Rpb25zIiwicmVuZGVyIiwiaXRlbSIsImRpcmVjdGlvbk5hbWVzIiwidGVzdE5hbWUiLCJ0ZXN0cyIsIlRlc3QiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsImZpbHRlcnMiLCJGaWx0ZXIiLCJpbml0IiwiQXBwIiwiZ3JvdXBMaXN0IiwiYXBwIiwic3RhcnQiLCJHcm91cENvbnRyb2xsZXIiLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJzdWJzY3JpYmUiLCJncm91cENvbnRyb2xsZXIiLCJzaG93R3JvdXBMaXN0Iiwic3ViIiwiYWRkR3JvdXAiLCJHcm91cExpc3RWaWV3IiwiUG9wdXBGb3JtYXRWaWV3IiwiZ3JvdXBMaXN0VmlldyIsInBvcHVwQWRkR3JvdXBWaWV3IiwicmVuZGVyUG9wdXAiLCJhcHBlbmRHcm91cCIsImNvbnNvbGUiLCJsb2ciLCJwb3B1cEZvcm1hdFZpZXciLCJncm91cExpc3RUcGwiLCJsZWZ0QmxvY2siLCJyZW5kZXJHcm91cHMiLCJncm91cFZpZXciLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiYWRkR3JvdXBCdG4iLCJzZXR0aW5nc0J0biIsInBvcHVwRm9ybWF0VHBsIiwidGVzdExpc3QiLCJQb3B1cFNldHRpbmdzVmlldyIsIlBvcHVwQWRkRGlyZWN0aW9uVmlldyIsInNldHRpbmdzTW9kZWwiLCJwb3B1cFNldHRpbmdzVmlldyIsInBvcHVwQWRkRGlyZWN0aW9uVmlldyIsInN1YnNjcmliZU9wZW5Qb3B1cHMiLCJzdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24iLCJzdWJzY3JpYmVTZWxlY3RGaWx0ZXIiLCJzdWJzY3JpYmVTZWxlY3RUZXN0IiwiZ2V0RGlyZWN0aW9uTmFtZXMiLCJzZWxlY3RlZERpcmVjdGlvbiIsIm1vZGUiLCJzdWJzY3JpYmVDbG9zZVBvcHVwIiwic2V0RGlyZWN0aW9uTGlzdCIsInJlUmVuZGVyUG9wdXAiLCJkaXJlY3Rpb25OYW1lIiwiZmluZCIsInNldHRpbmdzUG9wdXBUcGwiLCJkaXJlY3Rpb25TZWxlY3QiLCJzZWxlY3RUZXN0QnRuIiwic2VsZWN0RmlsdGVyQnRuIiwiYWRkRGlyZWN0aW9uUG9wdXAiLCJhZGRUZXN0UG9wdXAiLCJhZGRGaWx0ZXJQb3B1cCIsInVuc3ViIiwiZSIsInRhcmdldCIsImRpcmVjdGlvbkxpc3RUcGwiLCJmaWx0ZXJMaXN0VHBsIiwidGVzdExpc3RUcGwiLCJmaWx0ZXJMaXN0IiwiZmlsdGVyIiwidGVzdHNMaXN0IiwidGVzdCIsImFkZERpcmVjdGlvblBvcHVwVHBsIiwiY2xvc2VEaXJlY3Rpb25CdG4iLCJ0ZXN0RGF5cyIsImRhdGUiLCJ0aW1lIiwicGVvcGxlIiwibGFzdE5hbWUiLCJlbWFpbCIsInRlc3REYXkiLCJncmFkZXMiLCJFbmcxIiwiRW5nMiIsIkVuZzMiLCJFbmc0IiwiQ29yZSIsIkVzc2F5Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7O0lBRU1BLFE7QUFDRix3QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUws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RjtBQUdKQyxrQkFBTSxFQUhGO0FBSUpDLGtCQUFNLEVBSkY7QUFLSkMsa0JBQU0sR0FMRjtBQU1KQyxtQkFBTztBQU5IO0FBUlosS0FsQkk7QUExRFQsQ0E3TFMsQ0FBaEI7O0FBOFJJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSjs7QUFFQW5JLE9BQU9DLE9BQVAsR0FBaUJvRCxTQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk4YjQwZGE4ZjJkYWRlODE3ZjFkIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgTWVkaWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWIgKGNoYW5uZWwsIGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YiAoY2hhbm5lbCwgZm4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YiAoY2hhbm5lbCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwVHBsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcclxuICAgICAgICB0aGlzLmdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLXdyYXBwZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBUcGwoZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyb3VwICgpIHtcclxuICAgICAgICB0aGlzLmdyb3Vwc0Jsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgZm9ybWF0R3JvdXBCdG4gPSB0aGlzLmdyb3Vwc0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtYXQtYWRkZWQtYnRuJyk7XHJcblxyXG4gICAgICAgIGZvcm1hdEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cDpmb3JtYXR0ZWQnKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgR3JvdXBNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0aW5nU2Vzc2lvbiAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3QgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWx0ZXIgKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXHJcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcclxuICAgIGdyb3VwUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBBZGRHcm91cFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIC8vIGRpcmVjdGlvbkxpc3Qg0LzRiyDQtNC+0LvQttC90Ysg0LHRgNCw0YLRjCDQvtGC0LrRg9C00LAg0YLQvlxyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IFsndWknLCAncGhwJywgJ2pzJywgJ2phdmEnXTtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGdyb3VwUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0KTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1idG4nKTtcclxuXHJcbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdlbmVyYXRlRGF0YSgpLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0YS5kaXJlY3Rpb24gLSDQvNGLINC/0L7Qu9GD0YfQsNC10Lwg0LjQtyDQvdCw0YjQuNGFINGB0LXRgtGC0LjQvdCz0YFcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gbmV3IEdyb3VwTW9kZWwoZGF0YS5uYW1lLCBkYXRhLmRpcmVjdGlvbik7XHJcblxyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2dyb3VwOmNyZWF0ZWQnLCBncm91cCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlyZWN0aW9uTGlzdCAoZGlyZWN0aW9uTGlzdCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLW5hbWUnKSxcclxuICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25FbGVtID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ3JvdXAtZGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyk7XHJcblxyXG5jbGFzcyBTZXR0aW5nc01vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yIChkZWZhdWx0RGlyZWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKGRlZmF1bHREaXJlY3Rpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKGRlZmF1bHREaXJlY3Rpb25zKSB7XHJcbiAgICAgICAgZGVmYXVsdERpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgRGlyZWN0aW9uTW9kZWwoaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGlvbk5hbWVzICgpIHtcclxuICAgIFx0bGV0IGRpcmVjdGlvbk5hbWVzID0gW107XHJcblxyXG4gICAgXHR0aGlzLmRpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIFx0ZGlyZWN0aW9uTmFtZXMucHVzaChpdGVtLm5hbWUpO1xyXG4gICAgXHR9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbk5hbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZERpcmVjdGlvbiAobmFtZSkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ldyBEaXJlY3Rpb25Nb2RlbChuYW1lKSk7XHJcblxyXG4gICAgICAgIGRlZmF1bHREaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbk1vZGVsKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0cyAodGVzdE5hbWUpIHtcclxuICAgICAgICB0aGlzLnRlc3RzLnB1c2gobmV3IFRlc3QodGVzdE5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWx0ZXJzICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBEaXJlY3Rpb25Nb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50ZXN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZFRlc3QgKHRlc3ROYW1lKSB7XHJcbiAgICAvLyAgICAgdGhpcy50ZXN0cy5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAvLyAgICAgdGhpcy5maWx0ZXJzLnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKCkge1xyXG4gICAgbGV0IEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyksXHJcbiAgICAgICAgZ3JvdXBMaXN0ID0gcmVxdWlyZSgnLi90ZXN0RGF0YScpO1xyXG5cclxuICAgIGxldCBhcHAgPSBuZXcgQXBwKGdyb3VwTGlzdCk7XHJcbiAgICBcclxuICAgIGFwcC5zdGFydCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxyXG4gICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcclxuICAgICAgICAvLyB0aGlzLmRpcmVjdGlvbnMgPSBncm91cExpc3QuZGlyZWN0aW9ucztcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3VwTGlzdCk7XHJcbiAgICAgICAgICAgIC8vIHNldHRpbmdzQ29udHJvbGxlciA9IG5ldyBTZXR0aW5nc0NvbnRyb2xsZXIodGhpcy5kaXJlY3Rpb25zKTtcclxuICAgICAgICBcclxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDpjcmVhdGVkJywgKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkR3JvdXAoZ3JvdXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEdyb3VwIChncm91cCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0LnB1c2goZ3JvdXApO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgUG9wdXBGb3JtYXRWaWV3ID0gcmVxdWlyZSgnLi9WaWV3L1BvcHVwRm9ybWF0Vmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dHcm91cExpc3QgKCkge1xyXG4gICAgICAgIGxldCBncm91cExpc3RWaWV3ID0gbmV3IEdyb3VwTGlzdFZpZXcodGhpcy5ncm91cExpc3QpO1xyXG5cclxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cFBvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpO1xyXG5cclxuICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDpjcmVhdGVkJywgKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBncm91cExpc3RWaWV3ID0gbmV3IEdyb3VwTGlzdFZpZXcoKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwTGlzdFZpZXcuYXBwZW5kR3JvdXAoZ3JvdXApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmZvcm1hdHRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm1hdGVkJyk7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cEZvcm1hdFZpZXcgPSBuZXcgUG9wdXBGb3JtYXRWaWV3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cExpc3RUcGwuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBWaWV3LmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBsZXQgbGVmdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29sdW1uJyk7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcclxuXHJcbiAgICAgICAgbGVmdEJsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlckdyb3VwcygpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyb3VwcyAoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QuZm9yRWFjaCgoZ3JvdXApID0+IHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kR3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcclxuXHJcbiAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcclxuICAgICAgICBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyksXHJcbiAgICAgICAgICAgIHNldHRpbmdzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzLWJ0bicpO1xyXG5cclxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXBQb3B1cDpvcGVuJykpO1xyXG4gICAgICAgIHNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOm9wZW4nKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBMaXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBncm91cExpc3RUcGwgKCkge1xyXG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cImdyb3VwLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2staGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Hcm91cDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLXdyYXBwZXIgZ3JvdXAtd3JhcHBlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1ncm91cC1idG5cIj5hZGQgZ3JvdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwVHBsIChncm91cCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHtncm91cC5uYW1lfSAke2dyb3VwLmRpcmVjdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGZvcm1hdC1hZGRlZC1idG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IHBvcHVwRm9ybWF0VHBsID0gcmVxdWlyZSgnLi90cGwvcG9wdXBGb3JtYXRUcGwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwRm9ybWF0VmlldyB7XHJcbiAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvcm1hdC1hZGRlZCcpO1xyXG4gICAgICB0aGlzLnJlbmRlckdyb3VwKCk7XHJcbiAgIH1cclxuXHJcbiAgIHNldEdyb3VwIChncm91cCkge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlID0gcG9wdXBGb3JtYXRUcGwoZ3JvdXApO1xyXG4gICB9XHJcbiAgIFxyXG4gICByZW5kZXJHcm91cCAoKSB7XHJcbiAgICAgIHRoaXMubW9kYWwuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XHJcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgIH1cclxuXHJcbiAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgIH1cclxuXHJcbiAgIG9wZW4gKCkge1xyXG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgfVxyXG5cclxuICAgY2xvc2UgKCkge1xyXG4gICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgfVxyXG4gICBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEZvcm1hdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEZvcm1hdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBwb3B1cEZvcm1hdFRwbCAodGVzdExpc3QpIHtcclxuICAgIGxldCB0ZXN0cyA9ICcnO1xyXG5cclxuICAgIHRlc3RMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0ZXN0cyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBpZD1cInRlc3QtbGlzdC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlc3QtbGlzdFwiPiR7dGVzdHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBwb3B1cEZvcm1hdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9wb3B1cEZvcm1hdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwUG9wdXBUcGwgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcblxyXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBpZD1cImdyb3VwLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1vZGFsLWdyb3VwLW5hbWVcIiBjbGFzcz1cIm1vZGFsLWdyb3VwLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1ncm91cC1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBQb3B1cFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcclxuICAgIFBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzJyksXHJcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChkZWZhdWx0RGlyZWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKGRlZmF1bHREaXJlY3Rpb25zKTtcclxuICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3ID0gbmV3IFBvcHVwU2V0dGluZ3NWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5wb3B1cEFkZERpcmVjdGlvblZpZXcgPSBuZXcgUG9wdXBBZGREaXJlY3Rpb25WaWV3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlT3BlblBvcHVwcygpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3RGaWx0ZXIoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdFRlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVPcGVuUG9wdXBzICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9uc1swXTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cFBvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnNldERpcmVjdGlvbkxpc3QoZGlyZWN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2FkZERpcmVjdGlvblBvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZERpcmVjdGlvblZpZXcgPSBuZXcgUG9wdXBBZGREaXJlY3Rpb25WaWV3KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwb3B1cEFkZERpcmVjdGlvblZpZXcucmVuZGVyUG9wdXAoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVDbG9zZVBvcHVwICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cEFkZERpcmVjdGlvblZpZXcuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5vcGVuKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24gKCkge1xyXG4gICAgXHRtZWRpYXRvci5zdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCAoZGlyZWN0aW9uTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBkaXJlY3Rpb25OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlU2VsZWN0VGVzdCAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCd0ZXN0OnNlbGVjdCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlU2VsZWN0RmlsdGVyICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2ZpbHRlcjpzZWxlY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdGJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZUFkZERpcmVjdGlvbiAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdkaXJlY3Rpb246YWRkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgc2V0dGluZ3NQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwU2V0dGluZ3NWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNldHRpbmdzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlUmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbk5hbWVzIChkaXJlY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIHNlbGVjdFRlc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdC1zZXR0aW5ncy1idG4nKSxcclxuICAgICAgICAgICAgc2VsZWN0RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlci1zZXR0aW5ncy1idG4nKSxcclxuICAgICAgICAgICAgYWRkRGlyZWN0aW9uUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpcmVjdGlvbi1idG4nKSxcclxuICAgICAgICAgICAgYWRkVGVzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXN0LWJ0bicpLFxyXG4gICAgICAgICAgICBhZGRGaWx0ZXJQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZmlsdGVyLWJ0bicpO1xyXG5cclxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0VGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCd0ZXN0OnNlbGVjdCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxlY3RGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZmlsdGVyOnNlbGVjdCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGREaXJlY3Rpb25Qb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGFkZFRlc3RQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgbWVkaWF0b3IucHViKCdhZGRGaWx0ZXJQb3B1cDpvcGVuJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIGFkZEZpbHRlclBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBtZWRpYXRvci5wdWIoJ2FkZFRlc3RQb3B1cDpvcGVuJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwTmFtZScpLFxyXG4gICAgICAgICAgICBncm91cERpcmVjdGlvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cERpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhID0ge307XHJcblxyXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBkaXJlY3Rpb25MaXN0VHBsID0gcmVxdWlyZSgnLi9kaXJlY3Rpb25MaXN0VHBsLmpzJyksXHJcbiAgICBmaWx0ZXJMaXN0VHBsID0gcmVxdWlyZSgnLi4vLi4vLi4vRmlsdGVycy9WaWV3L3RwbC9maWx0ZXJMaXN0VHBsLmpzJyksXHJcbiAgICB0ZXN0TGlzdFRwbCA9IHJlcXVpcmUoJy4uLy4uLy4uL1Rlc3RzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzJyk7XHJcblxyXG5mdW5jdGlvbiBzZXR0aW5nc1BvcHVwVHBsIChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xyXG4gICAgbGV0IGRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0VHBsKGRpcmVjdGlvbnMsIHNlbGVjdGVkRGlyZWN0aW9uLm5hbWUpLFxyXG4gICAgICAgIGZpbHRlckxpc3QgPSBmaWx0ZXJMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLmZpbHRlcnMpLFxyXG4gICAgICAgIHRlc3RMaXN0ID0gdGVzdExpc3RUcGwoc2VsZWN0ZWREaXJlY3Rpb24udGVzdHMpO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBpZD1cInNldHRpbmdzLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb2x1bW4tc2V0dGluZ3NcIj4ke2RpcmVjdGlvbkxpc3R9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidGVzdC1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5UPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmaWx0ZXItc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+RjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHttb2RlID09PSAnVCc/IHRlc3RMaXN0OiBmaWx0ZXJMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2V0dGluZ3NQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBkaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0LCBzZWxlY3RlZERpcmVjdGlvbikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSAnJztcclxuXHJcbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPScke2l0ZW19JyAke3NlbGVjdGVkRGlyZWN0aW9uID09PSBpdGVtPyAnc2VsZWN0ZWQnOiAnJ30+JHtpdGVtfTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJkaXJlY3Rpb24tbGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1kaXJlY3Rpb24tYnRuXCI+YWRkIGRpcmVjdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRpcmVjdGlvbkxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9kaXJlY3Rpb25MaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZmlsdGVyTGlzdFRwbCAoZmlsdGVyTGlzdCkge1xyXG4gICAgbGV0IGZpbHRlcnMgPSAnJztcclxuXHJcbiAgICBmaWx0ZXJMaXN0LmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAgIGZpbHRlcnMgKz0gYDxkaXYgY2xhc3M9XCJmaWx0ZXJcIj4ke2ZpbHRlcn08L2Rpdj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZmlsdGVyLWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkZpbHRlcnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0XCI+JHtmaWx0ZXJzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1maWx0ZXItYnRuIGJ0blwiPmFkZCBmaWx0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmaWx0ZXJMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRmlsdGVycy9WaWV3L3RwbC9maWx0ZXJMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gdGVzdExpc3RUcGwgKHRlc3RzTGlzdCkge1xyXG4gICAgbGV0IHRlc3RzID0gJyc7XHJcblxyXG4gICAgdGVzdHNMaXN0LmZvckVhY2goKHRlc3QpID0+IHtcclxuICAgICAgICB0ZXN0cyArPSBgPGRpdiBjbGFzcz1cInRlc3RcIj4ke3Rlc3R9PC9kaXY+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRlc3QtbGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+VGVzdHM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlc3QtbGlzdFwiPiR7dGVzdHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRlc3QtYnRuIGJ0blwiPmFkZCB0ZXN0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdGVzdExpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBhZGREaXJlY3Rpb25Qb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cEFkZERpcmVjdGlvblZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLWRpcmVjdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGFkZERpcmVjdGlvblBvcHVwVHBsKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZURpcmVjdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1kaXJlY3Rpb24tYnRuJyksXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpcmVjdGlvbi1uYW1lJyk7XHJcblxyXG5cclxuICAgICAgICBjbG9zZURpcmVjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScpO1xyXG4gICAgICAgICAgICBtZWRpYXRvci51bnN1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uTmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGREaXJlY3Rpb25WaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBhZGREaXJlY3Rpb25Qb3B1cFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC1kaXJlY3Rpb24tcG9wdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLWRpcmVjdGlvbi1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBkaXJlY3Rpb24gbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjayBjbG9zZS1kaXJlY3Rpb24tYnRuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYWRkRGlyZWN0aW9uUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cExpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0RwLTExNycsXHJcbiAgICAgICAgdGVzdExpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSlMgQ29yZScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRW5nMScsICdFbmcyJywgJ0VuZzMnLCAnRW5nNCddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydKUyBDb3JlJ10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXN0RGF5czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwZW9wbGU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0hhcnJ5JyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnUG90dGVyJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnaGFycnktcG90dGVyQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTU6MzAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogOTUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JvbicsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ1dpc2xleScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3Jvbi13aXNsZXlAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdEcC0xMjEnLFxyXG4gICAgICAgIHRlc3RMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dvIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBmaWx0ZXJMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnR28gQ29yZSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFc3NheSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA3NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGVzdERheXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGVvcGxlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdIZXJtaW9uZScsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ0dyYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdoZXJtaW9uZS1ncmFuZ2VyQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTU6MzAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogOTUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldmlsbGUnLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdMb25nYm90dG9tJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnbmV2aWxsZS1sb25nYm90dG9tQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTc6MDAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAzNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnRHAtMTIzJyxcclxuICAgICAgICB0ZXN0TGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQSFAgQ29yZScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRW5nMScsICdFbmcyJywgJ0VuZzMnLCAnRW5nNCddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydQSFAgQ29yZSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFc3NheSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA3NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGVzdERheXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGVvcGxlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEcmFjbycsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ01hbGZveScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2RyYWNvLW1hbGZveUBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDg1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQZXRlcicsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ0dyaWZmaW4nLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdwZXRlci1ncmlmZmluQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTc6MDAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAzNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0gXHJcbl07XHJcblxyXG4gICAgLy8gZGlyZWN0aW9uczogWydVSScsICdQSFAnLCAnR08nLCAnSlMnXVxyXG5cclxuICAgIC8vIGRpcmVjdGlvbnM6IFtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIG5hbWU6ICdVSScsXHJcbiAgICAvLyAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdKUyBDb3JlJywgJ0Vzc2F5IFVJJ10sXHJcbiAgICAvLyAgICAgICAgIGZpbHRlcnM6IFsnVUkgMSddXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIG5hbWU6ICdQSFAnLFxyXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnRXNzYXkgUEhQJ10sXHJcbiAgICAvLyAgICAgICAgIGZpbHRlcnM6IFsnUEhQIDEnXVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBuYW1lOiAnR08nLFxyXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnRXNzYXkgR08nXSxcclxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydHTyAxJ11cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyBdXHJcbi8vIH07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==