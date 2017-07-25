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
            var groupsBlock = document.querySelector('.group-wrapper');

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
    groupPopupTpl = __webpack_require__(12);

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
        groupList = __webpack_require__(21);

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
    SettingsController = __webpack_require__(13),
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
    return '<div class="group">\n                <h2 class="group-title">' + group.name + ' ' + group.direction + '</h2>\n                <div>\n                    <button class="btn">format added</button>\n                </div>\n            </div>';
}

module.exports = groupTpl;

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopupSettingsView = __webpack_require__(14),
    PopupAddGroupView = __webpack_require__(3),
    PopupAddDirectionView = __webpack_require__(19),
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    settingsPopupTpl = __webpack_require__(15);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var directionListTpl = __webpack_require__(16),
    filterListTpl = __webpack_require__(17),
    testListTpl = __webpack_require__(18);

function settingsPopupTpl(directions, mode, selectedDirection) {
    var directionList = directionListTpl(directions, selectedDirection.name),
        filterList = filterListTpl(selectedDirection.filters),
        testList = testListTpl(selectedDirection.tests);

    return '<div id="settings-popup" class="modal-content">\n                <div class="left-column-settings">' + directionList + '</div>\n                <div class="right-column-settings">\n                    <div class="column-settings">\n                        <button id="test-settings-btn" class="btn btn-ft">T</button>\n                        <button id="filter-settings-btn" class="btn btn-ft">F</button>\n                    </div>\n                    <div class="column-settings">\n                        ' + (mode === 'T' ? testList : filterList) + '\n                    </div>\n                    <div class="column-settings">\n                        <button id="close-settings-btn" class="btn btn-cog">\n                            <i class="fa fa-check" aria-hidden="true"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>';
}

module.exports = settingsPopupTpl;

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    addDirectionPopupTpl = __webpack_require__(20);

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addDirectionPopupTpl() {
    return '<div class="modal-content add-direction-popup">\n                <input type="text" class="add-direction-name" placeholder="Enter direction name">\n                <button class="btn btn-cog">\n                    <i class="fa fa-check close-direction-btn" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addDirectionPopupTpl;

/***/ }),
/* 21 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWNjYmY0N2EwOTIxZjZlMDZlOTIiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JvdXBUcGwiLCJyZXF1aXJlIiwiR3JvdXBWaWV3IiwidGVtcGxhdGUiLCJhZGRMaXN0ZW5lcnMiLCJncm91cCIsImdyb3Vwc0Jsb2NrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJkaXJlY3Rpb25MaXN0IiwibW9kYWwiLCJpbm5lckhUTUwiLCJvcGVuIiwiY2xvc2VHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZURhdGEiLCJwdWIiLCJjbG9zZSIsImdyb3VwTmFtZUVsZW0iLCJncm91cERpcmVjdGlvbkVsZW0iLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkRpcmVjdGlvbk1vZGVsIiwiU2V0dGluZ3NNb2RlbCIsImRlZmF1bHREaXJlY3Rpb25zIiwiZGlyZWN0aW9ucyIsInJlbmRlciIsIml0ZW0iLCJkaXJlY3Rpb25OYW1lcyIsInRlc3ROYW1lIiwidGVzdHMiLCJUZXN0IiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJmaWx0ZXJzIiwiRmlsdGVyIiwiaW5pdCIsIkFwcCIsImdyb3VwTGlzdCIsImFwcCIsInN0YXJ0IiwiR3JvdXBDb250cm9sbGVyIiwiU2V0dGluZ3NDb250cm9sbGVyIiwic3Vic2NyaWJlIiwiZ3JvdXBDb250cm9sbGVyIiwic2hvd0dyb3VwTGlzdCIsInN1YiIsImFkZEdyb3VwIiwiR3JvdXBMaXN0VmlldyIsImdyb3VwTGlzdFZpZXciLCJwb3B1cEFkZEdyb3VwVmlldyIsInJlbmRlclBvcHVwIiwiYXBwZW5kR3JvdXAiLCJncm91cExpc3RUcGwiLCJsZWZ0QmxvY2siLCJyZW5kZXJHcm91cHMiLCJncm91cFZpZXciLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiYWRkR3JvdXBCdG4iLCJzZXR0aW5nc0J0biIsIlBvcHVwU2V0dGluZ3NWaWV3IiwiUG9wdXBBZGREaXJlY3Rpb25WaWV3Iiwic2V0dGluZ3NNb2RlbCIsInBvcHVwU2V0dGluZ3NWaWV3IiwicG9wdXBBZGREaXJlY3Rpb25WaWV3Iiwic3Vic2NyaWJlT3BlblBvcHVwcyIsInN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiIsInN1YnNjcmliZVNlbGVjdEZpbHRlciIsInN1YnNjcmliZVNlbGVjdFRlc3QiLCJnZXREaXJlY3Rpb25OYW1lcyIsInNlbGVjdGVkRGlyZWN0aW9uIiwibW9kZSIsInN1YnNjcmliZUNsb3NlUG9wdXAiLCJzZXREaXJlY3Rpb25MaXN0IiwicmVSZW5kZXJQb3B1cCIsImRpcmVjdGlvbk5hbWUiLCJmaW5kIiwic2V0dGluZ3NQb3B1cFRwbCIsImRpcmVjdGlvblNlbGVjdCIsInNlbGVjdFRlc3RCdG4iLCJzZWxlY3RGaWx0ZXJCdG4iLCJhZGREaXJlY3Rpb25Qb3B1cCIsImFkZFRlc3RQb3B1cCIsImFkZEZpbHRlclBvcHVwIiwidW5zdWIiLCJlIiwidGFyZ2V0IiwiZGlyZWN0aW9uTGlzdFRwbCIsImZpbHRlckxpc3RUcGwiLCJ0ZXN0TGlzdFRwbCIsImZpbHRlckxpc3QiLCJ0ZXN0TGlzdCIsImZpbHRlciIsInRlc3RzTGlzdCIsInRlc3QiLCJhZGREaXJlY3Rpb25Qb3B1cFRwbCIsImNsb3NlRGlyZWN0aW9uQnRuIiwidGVzdERheXMiLCJkYXRlIiwidGltZSIsInBlb3BsZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ0ZXN0RGF5IiwiZ3JhZGVzIiwiRW5nMSIsIkVuZzIiLCJFbmczIiwiRW5nNCIsIkNvcmUiLCJFc3NheSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7Ozs7OztJQUVNQSxRO0FBQ0Ysd0JBQWU7QUFBQTs7QUFDWCxhQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7Ozs7NEJBRUlDLE8sRUFBU0MsSSxFQUFNO0FBQ2hCLGdCQUFJLEtBQUtGLFFBQUwsQ0FBY0MsT0FBZCxDQUFKLEVBQTRCO0FBQ3hCLHFCQUFLRCxRQUFMLENBQWNDLE9BQWQsRUFBdUJFLE9BQXZCLENBQStCLFVBQUNDLEVBQUQ7QUFBQSwyQkFBUUEsR0FBR0YsSUFBSCxDQUFSO0FBQUEsaUJBQS9CO0FBQ0g7QUFDSjs7OzRCQUVJ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QU0sQ0FBQyxPQUFELEVBQVUsT0FBVjtBQUZWLEtBRE0sRUFLTjtBQUNJRCxjQUFNLFVBRFY7QUFFSUMsY0FBTSxDQUFDLE9BQUQsRUFBVSxPQUFWO0FBRlYsS0FMTSxDQWhEWDtBQTBEQ0MsWUFBUSxDQUNKO0FBQ0l0RyxjQUFNLE9BRFY7QUFFSXVHLGtCQUFVLFFBRmQ7QUFHSUMsZUFBTyx3QkFIWDtBQUlJQyxpQkFBUztBQUNMTCxrQkFBTSxVQUREO0FBRUxDLGtCQUFNO0FBRkQsU0FKYjtBQVFJSyxnQkFBUTtBQUNKQyxrQkFBTSxFQURGO0FBRUpDLGtCQUFNLEVBRkY7QUFHSkMsa0JBQU0sRUFIRjtBQUlKQyxrQkFBTSxFQUpGO0FBS0pDLGtCQUFNLEdBTEY7QUFNSkMsbUJBQU87QUFOSDtBQVJaLEtBREksRUFrQko7QUFDSWhILGNBQU0sT0FEVjtBQUVJdUcsa0JBQVUsU0FGZDtBQUdJQyxlQUFPLHlCQUhYO0FBSUlDLGlCQUFTO0FBQ0xMLGtCQUFNLFVBREQ7QUFFTEMsa0JBQU07QUFGRCxTQUpiO0FBUUlLLGdCQUFRO0FBQ0pDLGtCQUFNLEVBREY7QUFFSkMsa0JBQU0sRUFGRjtBQUdKQyxrQkFBTSxFQUhGO0FBSUpDLGtCQUFNLEVBSkY7QUFLSkMsa0JBQU0sR0FMRjtBQU1KQyxtQkFBTztBQU5IO0FBUlosS0FsQkk7QUExRFQsQ0E3TFMsQ0FBaEI7O0FBOFJJOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSjs7QUFFQTdILE9BQU9DLE9BQVAsR0FBaUJtRCxTQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGFjY2JmNDdhMDkyMWY2ZTA2ZTkyIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBNZWRpYXRvciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gICAgfVxuXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICB1bnN1YiAoY2hhbm5lbCkge1xuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcbiAgICB9XG59XG5cbmxldCBtZWRpYXRvciA9IG5ldyBNZWRpYXRvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBncm91cFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwVHBsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHNldEdyb3VwIChncm91cCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBUcGwoZ3JvdXApO1xuICAgIH1cblxuICAgIHJlbmRlckdyb3VwICgpIHtcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLXdyYXBwZXInKTtcblxuICAgICAgICBncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcblxuICAgIH1cblxuICAgIGFkZFRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICgpIHtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXG4gICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzJyk7XG5cbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIGRpcmVjdGlvbkxpc3Qg0LzRiyDQtNC+0LvQttC90Ysg0LHRgNCw0YLRjCDQvtGC0LrRg9C00LAg0YLQvlxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbJ3VpJywgJ3BocCcsICdqcycsICdqYXZhJ107XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGdyb3VwUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0KTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1idG4nKTtcblxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdlbmVyYXRlRGF0YSgpLFxuICAgICAgICAgICAgICAgIC8vIGRhdGEuZGlyZWN0aW9uIC0g0LzRiyDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0L3QsNGI0LjRhSDRgdC10YLRgtC40L3Qs9GBXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBuZXcgR3JvdXBNb2RlbChkYXRhLm5hbWUsIGRhdGEuZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURhdGEgKCkge1xuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLW5hbWUnKSxcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLWRpcmVjdGlvbicpLFxuICAgICAgICAgICAgZGF0YSA9IHt9O1xuXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgb3BlbiAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyk7XG5cbmNsYXNzIFNldHRpbmdzTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChkZWZhdWx0RGlyZWN0aW9ucykge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW5kZXIoZGVmYXVsdERpcmVjdGlvbnMpO1xuICAgIH1cblxuICAgIHJlbmRlciAoZGVmYXVsdERpcmVjdGlvbnMpIHtcbiAgICAgICAgZGVmYXVsdERpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbk1vZGVsKGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uTmFtZXMgKCkge1xuICAgIFx0bGV0IGRpcmVjdGlvbk5hbWVzID0gW107XG5cbiAgICBcdHRoaXMuZGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIFx0ZGlyZWN0aW9uTmFtZXMucHVzaChpdGVtLm5hbWUpO1xuICAgIFx0fSk7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbk5hbWVzO1xuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgRGlyZWN0aW9uTW9kZWwobmFtZSkpO1xuXG4gICAgICAgIGRlZmF1bHREaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ldyBEaXJlY3Rpb25Nb2RlbChpdGVtKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFRlc3RzICh0ZXN0TmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RzLnB1c2gobmV3IFRlc3QodGVzdE5hbWUpKTtcbiAgICB9XG5cbiAgICBhZGRGaWx0ZXJzICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRGlyZWN0aW9uTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGVzdHMgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gW107XG4gICAgfVxuXG4gICAgLy8gYWRkVGVzdCAodGVzdE5hbWUpIHtcbiAgICAvLyAgICAgdGhpcy50ZXN0cy5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XG4gICAgLy8gfVxuXG4gICAgLy8gYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgLy8gICAgIHRoaXMuZmlsdGVycy5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIC8vIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rpb25Nb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuICAgIGxldCBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxuICAgICAgICBncm91cExpc3QgPSByZXF1aXJlKCcuL3Rlc3REYXRhJyk7XG5cbiAgICBsZXQgYXBwID0gbmV3IEFwcChncm91cExpc3QpO1xuICAgIFxuICAgIGFwcC5zdGFydCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKGdyb3VwTGlzdCkge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcbiAgICAgICAgLy8gdGhpcy5kaXJlY3Rpb25zID0gZ3JvdXBMaXN0LmRpcmVjdGlvbnM7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3VwTGlzdCk7XG4gICAgICAgICAgICAvLyBzZXR0aW5nc0NvbnRyb2xsZXIgPSBuZXcgU2V0dGluZ3NDb250cm9sbGVyKHRoaXMuZGlyZWN0aW9ucyk7XG4gICAgICAgIFxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsIChncm91cCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRHcm91cChncm91cCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEdyb3VwIChncm91cCkge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdC5wdXNoKGdyb3VwKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0ID0gZ3JvdXBMaXN0O1xuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNob3dHcm91cExpc3QgKCkge1xuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KHRoaXMuZ3JvdXBMaXN0KTtcblxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XG5cbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsIChncm91cCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpO1xuXG4gICAgICAgICAgICBncm91cExpc3RWaWV3LmFwcGVuZEdyb3VwKGdyb3VwKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cExpc3RUcGwuanMnKSxcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3VwVmlldy5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBMaXN0VmlldyB7XG4gICAgY29uc3RydWN0b3IgKGdyb3VwTGlzdCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0ID0gZ3JvdXBMaXN0O1xuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG4gICAgICAgIGxldCBsZWZ0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1jb2x1bW4nKTtcblxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBMaXN0VHBsKCk7XG5cbiAgICAgICAgbGVmdEJsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xuXG4gICAgICAgIHRoaXMucmVuZGVyR3JvdXBzKCk7XG5cbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICByZW5kZXJHcm91cHMgKCkge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdC5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcblxuICAgICAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcblxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcHBlbmRHcm91cCAoZ3JvdXApIHtcbiAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcblxuICAgICAgICBncm91cFZpZXcuc2V0R3JvdXAoZ3JvdXApO1xuICAgICAgICBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgYWRkR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpLFxuICAgICAgICAgICAgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0dGluZ3MtYnRuJyk7XG5cbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2dyb3VwUG9wdXA6b3BlbicpKTtcbiAgICAgICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicpKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBMaXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3VwTGlzdFRwbCAoKSB7XG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cImdyb3VwLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWhlYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxPkdyb3VwPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2stYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2std3JhcHBlciBncm91cC13cmFwcGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1ncm91cC1idG5cIj5hZGQgZ3JvdXA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncm91cExpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm91cFRwbCAoZ3JvdXApIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHtncm91cC5uYW1lfSAke2dyb3VwLmRpcmVjdGlvbn08L2gyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3VwUG9wdXBUcGwgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xuXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJncm91cC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibW9kYWwtZ3JvdXAtbmFtZVwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncm91cFBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBQb3B1cFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMnKSxcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXG4gICAgUG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMnKSxcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgIERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKGRlZmF1bHREaXJlY3Rpb25zKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKGRlZmF1bHREaXJlY3Rpb25zKTtcbiAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldyA9IG5ldyBQb3B1cFNldHRpbmdzVmlldygpO1xuICAgICAgICB0aGlzLnBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IG5ldyBQb3B1cEFkZERpcmVjdGlvblZpZXcoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlICgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVPcGVuUG9wdXBzKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0RmlsdGVyKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0VGVzdCgpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZU9wZW5Qb3B1cHMgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9uc1swXTtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcblxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVDbG9zZVBvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCksXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuXG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcuc2V0RGlyZWN0aW9uTGlzdChkaXJlY3Rpb25zKTtcbiAgICAgICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5yZW5kZXJQb3B1cCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYXRvci5zdWIoJ2FkZERpcmVjdGlvblBvcHVwOm9wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gbmV3IFBvcHVwQWRkRGlyZWN0aW9uVmlldygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwb3B1cEFkZERpcmVjdGlvblZpZXcucmVuZGVyUG9wdXAoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQ2xvc2VQb3B1cCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVDbG9zZVBvcHVwICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5jbG9zZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYXRvci5zdWIoJ2FkZERpcmVjdGlvblBvcHVwOmNsb3NlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3B1cEFkZERpcmVjdGlvblZpZXcuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcub3BlbigpO1xuXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uICgpIHtcbiAgICBcdG1lZGlhdG9yLnN1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIChkaXJlY3Rpb25OYW1lKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gZGlyZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVTZWxlY3RUZXN0ICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCd0ZXN0OnNlbGVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVTZWxlY3RGaWx0ZXIgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ2ZpbHRlcjpzZWxlY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ0YnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlQWRkRGlyZWN0aW9uICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdkaXJlY3Rpb246YWRkJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXG4gICAgc2V0dGluZ3NQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMnKTtcblxuY2xhc3MgUG9wdXBTZXR0aW5nc1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncycpO1xuICAgIH1cblxuICAgIHJlbmRlclBvcHVwIChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHNldHRpbmdzUG9wdXBUcGwoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICByZVJlbmRlclBvcHVwIChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHNldHRpbmdzUG9wdXBUcGwoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHNldERpcmVjdGlvbk5hbWVzIChkaXJlY3Rpb25zKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XG4gICAgfVxuXG4gICAgb3BlbiAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXNldHRpbmdzLWJ0bicpLFxuICAgICAgICAgICAgZGlyZWN0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNldHRpbmdzLWRpcmVjdGlvbicpLFxuICAgICAgICAgICAgc2VsZWN0VGVzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0LXNldHRpbmdzLWJ0bicpLFxuICAgICAgICAgICAgc2VsZWN0RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlci1zZXR0aW5ncy1idG4nKSxcbiAgICAgICAgICAgIGFkZERpcmVjdGlvblBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kaXJlY3Rpb24tYnRuJyksXG4gICAgICAgICAgICBhZGRUZXN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRlc3QtYnRuJyksXG4gICAgICAgICAgICBhZGRGaWx0ZXJQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZmlsdGVyLWJ0bicpO1xuXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpcmVjdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3RUZXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCd0ZXN0OnNlbGVjdCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3RGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2ZpbHRlcjpzZWxlY3QnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWRkRGlyZWN0aW9uUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FkZERpcmVjdGlvblBvcHVwOm9wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkVGVzdFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgbWVkaWF0b3IucHViKCdhZGRGaWx0ZXJQb3B1cDpvcGVuJyk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIGFkZEZpbHRlclBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgbWVkaWF0b3IucHViKCdhZGRUZXN0UG9wdXA6b3BlbicpO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURhdGEgKCkge1xuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwTmFtZScpLFxuICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBEaXJlY3Rpb24nKSxcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcblxuICAgICAgICBkYXRhLmRpcmVjdGlvbiA9IGdyb3VwRGlyZWN0aW9uRWxlbS5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbS5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGRpcmVjdGlvbkxpc3RUcGwgPSByZXF1aXJlKCcuL2RpcmVjdGlvbkxpc3RUcGwuanMnKSxcbiAgICBmaWx0ZXJMaXN0VHBsID0gcmVxdWlyZSgnLi4vLi4vLi4vRmlsdGVycy9WaWV3L3RwbC9maWx0ZXJMaXN0VHBsLmpzJyksXG4gICAgdGVzdExpc3RUcGwgPSByZXF1aXJlKCcuLi8uLi8uLi9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcycpO1xuXG5mdW5jdGlvbiBzZXR0aW5nc1BvcHVwVHBsIChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgIGxldCBkaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdFRwbChkaXJlY3Rpb25zLCBzZWxlY3RlZERpcmVjdGlvbi5uYW1lKSxcbiAgICAgICAgZmlsdGVyTGlzdCA9IGZpbHRlckxpc3RUcGwoc2VsZWN0ZWREaXJlY3Rpb24uZmlsdGVycyksXG4gICAgICAgIHRlc3RMaXN0ID0gdGVzdExpc3RUcGwoc2VsZWN0ZWREaXJlY3Rpb24udGVzdHMpO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwic2V0dGluZ3MtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb2x1bW4tc2V0dGluZ3NcIj4ke2RpcmVjdGlvbkxpc3R9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbHVtbi1zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidGVzdC1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5UPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZmlsdGVyLXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1mdFwiPkY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7bW9kZSA9PT0gJ1QnPyB0ZXN0TGlzdDogZmlsdGVyTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dGluZ3NQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGRpcmVjdGlvbkxpc3RUcGwgKGRpcmVjdGlvbkxpc3QsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XG4gICAgbGV0IG9wdGlvbnMgPSAnJztcblxuICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPScke2l0ZW19JyAke3NlbGVjdGVkRGlyZWN0aW9uID09PSBpdGVtPyAnc2VsZWN0ZWQnOiAnJ30+JHtpdGVtfTwvb3B0aW9uPmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJkaXJlY3Rpb24tbGlzdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiIGNsYXNzPVwibW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uXCI+JHtvcHRpb25zfTwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWRpcmVjdGlvbi1idG5cIj5hZGQgZGlyZWN0aW9uPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpcmVjdGlvbkxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9kaXJlY3Rpb25MaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBmaWx0ZXJMaXN0VHBsIChmaWx0ZXJMaXN0KSB7XG4gICAgbGV0IGZpbHRlcnMgPSAnJztcblxuICAgIGZpbHRlckxpc3QuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XG4gICAgICAgIGZpbHRlcnMgKz0gYDxkaXYgY2xhc3M9XCJmaWx0ZXJcIj4ke2ZpbHRlcn08L2Rpdj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZmlsdGVyLWxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWxpc3RcIj4ke2ZpbHRlcnN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1maWx0ZXItYnRuIGJ0blwiPmFkZCBmaWx0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0ZpbHRlcnMvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gdGVzdExpc3RUcGwgKHRlc3RzTGlzdCkge1xuICAgIGxldCB0ZXN0cyA9ICcnO1xuXG4gICAgdGVzdHNMaXN0LmZvckVhY2goKHRlc3QpID0+IHtcbiAgICAgICAgdGVzdHMgKz0gYDxkaXYgY2xhc3M9XCJ0ZXN0XCI+JHt0ZXN0fTwvZGl2PmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ0ZXN0LWxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxoMz5UZXN0czwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlc3QtbGlzdFwiPiR7dGVzdHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10ZXN0LWJ0biBidG5cIj5hZGQgdGVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0TGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIGFkZERpcmVjdGlvblBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMnKTtcblxuY2xhc3MgUG9wdXBBZGREaXJlY3Rpb25WaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLWRpcmVjdGlvbicpO1xuICAgIH1cblxuICAgIHJlbmRlclBvcHVwICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBhZGREaXJlY3Rpb25Qb3B1cFRwbCgpO1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBvcGVuICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGNsb3NlRGlyZWN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWRpcmVjdGlvbi1idG4nKSxcbiAgICAgICAgICAgIGRpcmVjdGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpcmVjdGlvbi1uYW1lJyk7XG5cblxuICAgICAgICBjbG9zZURpcmVjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnKTtcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXJlY3Rpb25OYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGREaXJlY3Rpb25WaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFkZERpcmVjdGlvblBvcHVwVHBsICgpIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC1kaXJlY3Rpb24tcG9wdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC1kaXJlY3Rpb24tbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGlyZWN0aW9uIG5hbWVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjayBjbG9zZS1kaXJlY3Rpb24tYnRuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGREaXJlY3Rpb25Qb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ3JvdXBMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0RwLTExNycsXG4gICAgICAgIHRlc3RMaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0pTIENvcmUnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0pTIENvcmUnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3REYXlzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwZW9wbGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGFycnknLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnUG90dGVyJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hhcnJ5LXBvdHRlckBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdSb24nLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnV2lzbGV5JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3Jvbi13aXNsZXlAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnRHAtMTIxJyxcbiAgICAgICAgdGVzdExpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnR28gQ29yZScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZmlsdGVyTGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnR28gQ29yZSddLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA4MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFc3NheSddLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA3NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdGVzdERheXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHBlb3BsZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdIZXJtaW9uZScsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdHcmFuZ2VyJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hlcm1pb25lLWdyYW5nZXJAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV2aWxsZScsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdMb25nYm90dG9tJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ25ldmlsbGUtbG9uZ2JvdHRvbUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE3OjAwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDgwLFxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzUsXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDYwLFxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAzNjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdEcC0xMjMnLFxuICAgICAgICB0ZXN0TGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdQSFAgQ29yZScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZmlsdGVyTGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnUEhQIENvcmUnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3REYXlzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwZW9wbGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRHJhY28nLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnTWFsZm95JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2RyYWNvLW1hbGZveUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdQZXRlcicsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdHcmlmZmluJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3BldGVyLWdyaWZmaW5AZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSBcbl07XG5cbiAgICAvLyBkaXJlY3Rpb25zOiBbJ1VJJywgJ1BIUCcsICdHTycsICdKUyddXG5cbiAgICAvLyBkaXJlY3Rpb25zOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6ICdVSScsXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnSlMgQ29yZScsICdFc3NheSBVSSddLFxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydVSSAxJ11cbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogJ1BIUCcsXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnRXNzYXkgUEhQJ10sXG4gICAgLy8gICAgICAgICBmaWx0ZXJzOiBbJ1BIUCAxJ11cbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogJ0dPJyxcbiAgICAvLyAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBHTyddLFxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydHTyAxJ11cbiAgICAvLyAgICAgfVxuICAgIC8vIF1cbi8vIH07XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdGVzdERhdGEuanMiXSwic291cmNlUm9vdCI6IiJ9