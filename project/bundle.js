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
            var groupListView = new GroupListView();

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
        key: 'appendGroup',
        value: function appendGroup(group) {
            this.group = group;
            this.groupView = new GroupView();
            this.groupView.setGroup(this.group);
            this.groupView.renderGroup();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2MwMmYxY2FhODU3YTMyMjU0ZDAiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JvdXBUcGwiLCJyZXF1aXJlIiwiR3JvdXBWaWV3IiwidGVtcGxhdGUiLCJhZGRMaXN0ZW5lcnMiLCJncm91cCIsImdyb3Vwc0Jsb2NrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJkaXJlY3Rpb25MaXN0IiwibW9kYWwiLCJpbm5lckhUTUwiLCJvcGVuIiwiY2xvc2VHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZURhdGEiLCJwdWIiLCJjbG9zZSIsImdyb3VwTmFtZUVsZW0iLCJncm91cERpcmVjdGlvbkVsZW0iLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJ2YWx1ZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIkRpcmVjdGlvbk1vZGVsIiwiU2V0dGluZ3NNb2RlbCIsImRlZmF1bHREaXJlY3Rpb25zIiwiZGlyZWN0aW9ucyIsInJlbmRlciIsIml0ZW0iLCJkaXJlY3Rpb25OYW1lcyIsInRlc3ROYW1lIiwidGVzdHMiLCJUZXN0IiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJmaWx0ZXJzIiwiRmlsdGVyIiwiaW5pdCIsIkFwcCIsImdyb3VwTGlzdCIsImFwcCIsInN0YXJ0IiwiR3JvdXBDb250cm9sbGVyIiwiU2V0dGluZ3NDb250cm9sbGVyIiwic3Vic2NyaWJlIiwiZ3JvdXBDb250cm9sbGVyIiwic2hvd0dyb3VwTGlzdCIsInN1YiIsImFkZEdyb3VwIiwiR3JvdXBMaXN0VmlldyIsImdyb3VwTGlzdFZpZXciLCJwb3B1cEFkZEdyb3VwVmlldyIsInJlbmRlclBvcHVwIiwiYXBwZW5kR3JvdXAiLCJncm91cExpc3RUcGwiLCJsZWZ0QmxvY2siLCJncm91cFZpZXciLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiYWRkR3JvdXBCdG4iLCJzZXR0aW5nc0J0biIsIlBvcHVwU2V0dGluZ3NWaWV3IiwiUG9wdXBBZGREaXJlY3Rpb25WaWV3Iiwic2V0dGluZ3NNb2RlbCIsInBvcHVwU2V0dGluZ3NWaWV3IiwicG9wdXBBZGREaXJlY3Rpb25WaWV3Iiwic3Vic2NyaWJlT3BlblBvcHVwcyIsInN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiIsInN1YnNjcmliZVNlbGVjdEZpbHRlciIsInN1YnNjcmliZVNlbGVjdFRlc3QiLCJnZXREaXJlY3Rpb25OYW1lcyIsInNlbGVjdGVkRGlyZWN0aW9uIiwibW9kZSIsInN1YnNjcmliZUNsb3NlUG9wdXAiLCJzZXREaXJlY3Rpb25MaXN0IiwicmVSZW5kZXJQb3B1cCIsImRpcmVjdGlvbk5hbWUiLCJmaW5kIiwic2V0dGluZ3NQb3B1cFRwbCIsImRpcmVjdGlvblNlbGVjdCIsInNlbGVjdFRlc3RCdG4iLCJzZWxlY3RGaWx0ZXJCdG4iLCJhZGREaXJlY3Rpb25Qb3B1cCIsImFkZFRlc3RQb3B1cCIsImFkZEZpbHRlclBvcHVwIiwidW5zdWIiLCJlIiwidGFyZ2V0IiwiZGlyZWN0aW9uTGlzdFRwbCIsImZpbHRlckxpc3RUcGwiLCJ0ZXN0TGlzdFRwbCIsImZpbHRlckxpc3QiLCJ0ZXN0TGlzdCIsImZpbHRlciIsInRlc3RzTGlzdCIsInRlc3QiLCJhZGREaXJlY3Rpb25Qb3B1cFRwbCIsImNsb3NlRGlyZWN0aW9uQnRuIiwidGVzdERheXMiLCJkYXRlIiwidGltZSIsInBlb3BsZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ0ZXN0RGF5IiwiZ3JhZGVzIiwiRW5nMSIsIkVuZzIiLCJFbmczIiwiRW5nNCIsIkNvcmUiLCJFc3NheSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7Ozs7OztJQUVNQSxRO0FBQ0Ysd0JBQWU7QUFBQTs7QUFDWCxhQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7Ozs7NEJBRUlDLE8sRUFBU0MsSSxFQUFNO0FBQ2hCLGdCQUFJLEtBQUtGLFFBQUwsQ0FBY0MsT0FBZCxDQUFKLEVBQTRCO0FBQ3hCLHFCQUFLRCxRQUFMLENBQWNDLE9BQWQsRUFBdUJFLE9BQXZCLENBQStCLFVBQUNDLEVBQUQ7QUFBQSwyQkFBUUEsR0FBR0YsSUFBSCxDQUFSO0FBQUEsaUJBQS9CO0FBQ0g7QUFDSjs7OzRCQUVJRCxPLEVBQVNHLEUsRUFB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LFNBSmI7QUFRSUssZ0JBQVE7QUFDSkMsa0JBQU0sRUFERjtBQUVKQyxrQkFBTSxFQUZGO0FBR0pDLGtCQUFNLEVBSEY7QUFJSkMsa0JBQU0sRUFKRjtBQUtKQyxrQkFBTSxHQUxGO0FBTUpDLG1CQUFPO0FBTkg7QUFSWixLQURJLEVBa0JKO0FBQ0kvRyxjQUFNLE9BRFY7QUFFSXNHLGtCQUFVLFNBRmQ7QUFHSUMsZUFBTyx5QkFIWDtBQUlJQyxpQkFBUztBQUNMTCxrQkFBTSxVQUREO0FBRUxDLGtCQUFNO0FBRkQsU0FKYjtBQVFJSyxnQkFBUTtBQUNKQyxrQkFBTSxFQURGO0FBRUpDLGtCQUFNLEVBRkY7QUFHSkMsa0JBQU0sRUFIRjtBQUlKQyxrQkFBTSxFQUpGO0FBS0pDLGtCQUFNLEdBTEY7QUFNSkMsbUJBQU87QUFOSDtBQVJaLEtBbEJJO0FBMURULENBN0xTLENBQWhCOztBQThSSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0o7O0FBRUE1SCxPQUFPQyxPQUFQLEdBQWlCbUQsU0FBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzYzAyZjFjYWE4NTdhMzIyNTRkMCIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE1lZGlhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWIgKGNoYW5uZWwpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZ3JvdXBUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cFRwbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBUcGwoZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyb3VwICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtd3JhcHBlcicpO1xyXG5cclxuICAgICAgICBncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEdyb3VwTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdGluZ1Nlc3Npb24gKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICAvLyBkaXJlY3Rpb25MaXN0INC80Ysg0LTQvtC70LbQvdGLINCx0YDQsNGC0Ywg0L7RgtC60YPQtNCwINGC0L5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbJ3VpJywgJ3BocCcsICdqcycsICdqYXZhJ107XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBncm91cFBvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZW5lcmF0ZURhdGEoKSxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGEuZGlyZWN0aW9uIC0g0LzRiyDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0L3QsNGI0LjRhSDRgdC10YLRgtC40L3Qs9GBXHJcbiAgICAgICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGRhdGEubmFtZSwgZGF0YS5kaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1uYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLWRpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhID0ge307XHJcblxyXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGVmYXVsdERpcmVjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlbmRlcihkZWZhdWx0RGlyZWN0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyIChkZWZhdWx0RGlyZWN0aW9ucykge1xyXG4gICAgICAgIGRlZmF1bHREaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbk1vZGVsKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3Rpb25OYW1lcyAoKSB7XHJcbiAgICBcdGxldCBkaXJlY3Rpb25OYW1lcyA9IFtdO1xyXG5cclxuICAgIFx0dGhpcy5kaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBcdGRpcmVjdGlvbk5hbWVzLnB1c2goaXRlbS5uYW1lKTtcclxuICAgIFx0fSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25OYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBhZGREaXJlY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgRGlyZWN0aW9uTW9kZWwobmFtZSkpO1xyXG5cclxuICAgICAgICBkZWZhdWx0RGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ldyBEaXJlY3Rpb25Nb2RlbChpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdHMgKHRlc3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0cy5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVycyAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgRGlyZWN0aW9uTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGVzdHMgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGRUZXN0ICh0ZXN0TmFtZSkge1xyXG4gICAgLy8gICAgIHRoaXMudGVzdHMucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGFkZEZpbHRlciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgLy8gICAgIHRoaXMuZmlsdGVycy5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGlvbk1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuICAgIGxldCBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxyXG4gICAgICAgIGdyb3VwTGlzdCA9IHJlcXVpcmUoJy4vdGVzdERhdGEnKTtcclxuXHJcbiAgICBsZXQgYXBwID0gbmV3IEFwcChncm91cExpc3QpO1xyXG4gICAgXHJcbiAgICBhcHAuc3RhcnQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcclxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XHJcbiAgICAgICAgLy8gdGhpcy5kaXJlY3Rpb25zID0gZ3JvdXBMaXN0LmRpcmVjdGlvbnM7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cExpc3QpO1xyXG4gICAgICAgICAgICAvLyBzZXR0aW5nc0NvbnRyb2xsZXIgPSBuZXcgU2V0dGluZ3NDb250cm9sbGVyKHRoaXMuZGlyZWN0aW9ucyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZ3JvdXBDb250cm9sbGVyLnNob3dHcm91cExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsIChncm91cCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEdyb3VwKGdyb3VwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRHcm91cCAoZ3JvdXApIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdC5wdXNoKGdyb3VwKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXHJcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxyXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KCk7XHJcblxyXG4gICAgICAgIGdyb3VwTGlzdFZpZXcucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XHJcblxyXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBMaXN0Vmlldy5hcHBlbmRHcm91cChncm91cCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cExpc3RUcGwuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBWaWV3LmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBsZXQgbGVmdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29sdW1uJyk7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcclxuXHJcbiAgICAgICAgbGVmdEJsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZEdyb3VwIChncm91cCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcclxuICAgICAgICB0aGlzLmdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcclxuICAgICAgICB0aGlzLmdyb3VwVmlldy5zZXRHcm91cCh0aGlzLmdyb3VwKTtcclxuICAgICAgICB0aGlzLmdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKSxcclxuICAgICAgICAgICAgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0dGluZ3MtYnRuJyk7XHJcblxyXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cFBvcHVwOm9wZW4nKSk7XHJcbiAgICAgICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicpKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwTGlzdFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkdyb3VwPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2std3JhcHBlciBncm91cC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWdyb3VwLWJ0blwiPmFkZCBncm91cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cExpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBUcGwgKGdyb3VwKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBQb3B1cFRwbCAoZGlyZWN0aW9uTGlzdCkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSAnJztcclxuXHJcbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwiZ3JvdXAtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibW9kYWwtZ3JvdXAtbmFtZVwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtZGlyZWN0aW9uXCI+JHtvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWdyb3VwLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IFBvcHVwU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcycpLFxyXG4gICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxyXG4gICAgUG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMnKSxcclxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXHJcbiAgICBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IgKGRlZmF1bHREaXJlY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc01vZGVsID0gbmV3IFNldHRpbmdzTW9kZWwoZGVmYXVsdERpcmVjdGlvbnMpO1xyXG4gICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcgPSBuZXcgUG9wdXBTZXR0aW5nc1ZpZXcoKTtcclxuICAgICAgICB0aGlzLnBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IG5ldyBQb3B1cEFkZERpcmVjdGlvblZpZXcoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVPcGVuUG9wdXBzKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdEZpbHRlcigpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0VGVzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZU9wZW5Qb3B1cHMgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zWzBdO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQ2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcuc2V0RGlyZWN0aW9uTGlzdChkaXJlY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLnN1YignYWRkRGlyZWN0aW9uUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IG5ldyBQb3B1cEFkZERpcmVjdGlvblZpZXcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBvcHVwQWRkRGlyZWN0aW9uVmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQ2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZUNsb3NlUG9wdXAgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2FkZERpcmVjdGlvblBvcHVwOmNsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwQWRkRGlyZWN0aW9uVmlldy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3Lm9wZW4oKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiAoKSB7XHJcbiAgICBcdG1lZGlhdG9yLnN1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIChkaXJlY3Rpb25OYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IGRpcmVjdGlvbk5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVTZWxlY3RUZXN0ICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ3Rlc3Q6c2VsZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVTZWxlY3RGaWx0ZXIgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZmlsdGVyOnNlbGVjdCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ0YnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlQWRkRGlyZWN0aW9uICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2RpcmVjdGlvbjphZGQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBzZXR0aW5nc1BvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBTZXR0aW5nc1ZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHNldHRpbmdzUG9wdXBUcGwoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVSZW5kZXJQb3B1cCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHNldHRpbmdzUG9wdXBUcGwoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGlyZWN0aW9uTmFtZXMgKGRpcmVjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2Utc2V0dGluZ3MtYnRuJyksXHJcbiAgICAgICAgICAgIGRpcmVjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb24nKSxcclxuICAgICAgICAgICAgc2VsZWN0VGVzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0LXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBzZWxlY3RGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBhZGREaXJlY3Rpb25Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyZWN0aW9uLWJ0bicpLFxyXG4gICAgICAgICAgICBhZGRUZXN0UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRlc3QtYnRuJyksXHJcbiAgICAgICAgICAgIGFkZEZpbHRlclBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1maWx0ZXItYnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScpO1xyXG4gICAgICAgICAgICBtZWRpYXRvci51bnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxlY3RUZXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ3Rlc3Q6c2VsZWN0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGVjdEZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdmaWx0ZXI6c2VsZWN0Jyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFkZERpcmVjdGlvblBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FkZERpcmVjdGlvblBvcHVwOm9wZW4nKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gYWRkVGVzdFBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBtZWRpYXRvci5wdWIoJ2FkZEZpbHRlclBvcHVwOm9wZW4nKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gYWRkRmlsdGVyUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkVGVzdFBvcHVwOm9wZW4nKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZURhdGEgKCkge1xyXG4gICAgICAgIGxldCBncm91cE5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBOYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwRGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBTZXR0aW5nc1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGRpcmVjdGlvbkxpc3RUcGwgPSByZXF1aXJlKCcuL2RpcmVjdGlvbkxpc3RUcGwuanMnKSxcclxuICAgIGZpbHRlckxpc3RUcGwgPSByZXF1aXJlKCcuLi8uLi8uLi9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMnKSxcclxuICAgIHRlc3RMaXN0VHBsID0gcmVxdWlyZSgnLi4vLi4vLi4vVGVzdHMvVmlldy90cGwvdGVzdExpc3RUcGwuanMnKTtcclxuXHJcbmZ1bmN0aW9uIHNldHRpbmdzUG9wdXBUcGwgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICBsZXQgZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9ucywgc2VsZWN0ZWREaXJlY3Rpb24ubmFtZSksXHJcbiAgICAgICAgZmlsdGVyTGlzdCA9IGZpbHRlckxpc3RUcGwoc2VsZWN0ZWREaXJlY3Rpb24uZmlsdGVycyksXHJcbiAgICAgICAgdGVzdExpc3QgPSB0ZXN0TGlzdFRwbChzZWxlY3RlZERpcmVjdGlvbi50ZXN0cyk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwic2V0dGluZ3MtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbHVtbi1zZXR0aW5nc1wiPiR7ZGlyZWN0aW9uTGlzdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0ZXN0LXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1mdFwiPlQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbHRlci1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5GPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke21vZGUgPT09ICdUJz8gdGVzdExpc3Q6IGZpbHRlckxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2Utc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXR0aW5nc1BvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGRpcmVjdGlvbkxpc3RUcGwgKGRpcmVjdGlvbkxpc3QsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xyXG5cclxuICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9JyR7aXRlbX0nICR7c2VsZWN0ZWREaXJlY3Rpb24gPT09IGl0ZW0/ICdzZWxlY3RlZCc6ICcnfT4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImRpcmVjdGlvbi1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWRpcmVjdGlvbi1idG5cIj5hZGQgZGlyZWN0aW9uPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGlyZWN0aW9uTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJMaXN0VHBsIChmaWx0ZXJMaXN0KSB7XHJcbiAgICBsZXQgZmlsdGVycyA9ICcnO1xyXG5cclxuICAgIGZpbHRlckxpc3QuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgZmlsdGVycyArPSBgPGRpdiBjbGFzcz1cImZpbHRlclwiPiR7ZmlsdGVyfTwvZGl2PmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+RmlsdGVyczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWxpc3RcIj4ke2ZpbHRlcnN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWZpbHRlci1idG4gYnRuXCI+YWRkIGZpbHRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZpbHRlckxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0TGlzdFRwbCAodGVzdHNMaXN0KSB7XHJcbiAgICBsZXQgdGVzdHMgPSAnJztcclxuXHJcbiAgICB0ZXN0c0xpc3QuZm9yRWFjaCgodGVzdCkgPT4ge1xyXG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdFwiPiR7dGVzdH08L2Rpdj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGVzdC1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5UZXN0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+JHt0ZXN0c308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGVzdC1idG4gYnRuXCI+YWRkIHRlc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0TGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIGFkZERpcmVjdGlvblBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkRGlyZWN0aW9uVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtZGlyZWN0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYWRkRGlyZWN0aW9uUG9wdXBUcGwoKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlRGlyZWN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWRpcmVjdGlvbi1idG4nKSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyZWN0aW9uLW5hbWUnKTtcclxuXHJcblxyXG4gICAgICAgIGNsb3NlRGlyZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FkZERpcmVjdGlvblBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb25OYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZERpcmVjdGlvblZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRGlyZWN0aW9uVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGFkZERpcmVjdGlvblBvcHVwVHBsICgpIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgYWRkLWRpcmVjdGlvbi1wb3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZGQtZGlyZWN0aW9uLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGRpcmVjdGlvbiBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrIGNsb3NlLWRpcmVjdGlvbi1idG5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhZGREaXJlY3Rpb25Qb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRHAtMTE3JyxcclxuICAgICAgICB0ZXN0TGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdKUyBDb3JlJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZmlsdGVyTGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0pTIENvcmUnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlc3REYXlzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBlb3BsZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGFycnknLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdQb3R0ZXInLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdoYXJyeS1wb3R0ZXJAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDI2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUm9uJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnV2lzbGV5JyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAncm9uLXdpc2xleUBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE3OjAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ0RwLTEyMScsXHJcbiAgICAgICAgdGVzdExpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnR28gQ29yZScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRW5nMScsICdFbmcyJywgJ0VuZzMnLCAnRW5nNCddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydHbyBDb3JlJ10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXN0RGF5czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwZW9wbGU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0hlcm1pb25lJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnR3JhbmdlcicsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hlcm1pb25lLWdyYW5nZXJAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDI2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV2aWxsZScsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ0xvbmdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICduZXZpbGxlLWxvbmdib3R0b21AZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdEcC0xMjMnLFxyXG4gICAgICAgIHRlc3RMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BIUCBDb3JlJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZmlsdGVyTGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ1BIUCBDb3JlJ10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXN0RGF5czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwZW9wbGU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RyYWNvJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnTWFsZm95JyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnZHJhY28tbWFsZm95QGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTU6MzAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogOTUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BldGVyJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnR3JpZmZpbicsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3BldGVyLWdyaWZmaW5AZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSBcclxuXTtcclxuXHJcbiAgICAvLyBkaXJlY3Rpb25zOiBbJ1VJJywgJ1BIUCcsICdHTycsICdKUyddXHJcblxyXG4gICAgLy8gZGlyZWN0aW9uczogW1xyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgbmFtZTogJ1VJJyxcclxuICAgIC8vICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0pTIENvcmUnLCAnRXNzYXkgVUknXSxcclxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydVSSAxJ11cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgbmFtZTogJ1BIUCcsXHJcbiAgICAvLyAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBQSFAnXSxcclxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydQSFAgMSddXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIG5hbWU6ICdHTycsXHJcbiAgICAvLyAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBHTyddLFxyXG4gICAgLy8gICAgICAgICBmaWx0ZXJzOiBbJ0dPIDEnXVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIF1cclxuLy8gfTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdGVzdERhdGEuanMiXSwic291cmNlUm9vdCI6IiJ9