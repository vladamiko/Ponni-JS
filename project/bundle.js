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
        groupList = __webpack_require__(21),
        defaultDiretions = __webpack_require__(22);

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
    SettingsController = __webpack_require__(13),
    SettingsModel = __webpack_require__(4),
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

module.exports = groupList;

/***/ }),
/* 22 */
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

/***/ }),
/* 23 */,
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmRiNzNkYmYzN2JjNjEwZGFiOTIiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL2RlZmF1bHREaXJldGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9Nb2RlbC9UZXN0LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvRmlsdGVycy9Nb2RlbC9GaWx0ZXIuanMiXSwibmFtZXMiOlsiTWVkaWF0b3IiLCJjaGFubmVscyIsImNoYW5uZWwiLCJkYXRhIiwiZm9yRWFjaCIsImZuIiwicHVzaCIsIm1lZGlhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsImdyb3VwVHBsIiwicmVxdWlyZSIsIkdyb3VwVmlldyIsInRlbXBsYXRlIiwiYWRkTGlzdGVuZXJzIiwiZ3JvdXAiLCJncm91cHNCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImluc2VydEFkamFjZW50SFRNTCIsIkdyb3VwTW9kZWwiLCJuYW1lIiwiZGlyZWN0aW9uIiwiZ3JvdXBQb3B1cFRwbCIsIlBvcHVwQWRkR3JvdXBWaWV3IiwiZGlyZWN0aW9uTGlzdCIsIm1vZGFsIiwiaW5uZXJIVE1MIiwib3BlbiIsImNsb3NlR3JvdXBCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZ2VuZXJhdGVEYXRhIiwicHViIiwiY2xvc2UiLCJncm91cE5hbWVFbGVtIiwiZ3JvdXBEaXJlY3Rpb25FbGVtIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwidmFsdWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJEaXJlY3Rpb25Nb2RlbCIsIlNldHRpbmdzTW9kZWwiLCJkaXJlY3Rpb25zIiwiZGlyZWN0aW9uTmFtZXMiLCJpdGVtIiwiVGVzdCIsIkZpbHRlciIsInRlc3RMaXN0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJpbml0IiwiQXBwIiwiZ3JvdXBMaXN0IiwiZGVmYXVsdERpcmV0aW9ucyIsImFwcCIsInNldHRpbmdzTW9kZWwiLCJzdGFydCIsIkdyb3VwQ29udHJvbGxlciIsIlNldHRpbmdzQ29udHJvbGxlciIsInN1YnNjcmliZSIsImdyb3VwQ29udHJvbGxlciIsInNob3dHcm91cExpc3QiLCJzdWIiLCJhZGRHcm91cCIsIkdyb3VwTGlzdFZpZXciLCJncm91cExpc3RWaWV3IiwicmVuZGVyIiwicG9wdXBBZGRHcm91cFZpZXciLCJyZW5kZXJQb3B1cCIsImFwcGVuZEdyb3VwIiwiZ3JvdXBMaXN0VHBsIiwibGVmdEJsb2NrIiwiZ3JvdXBWaWV3Iiwic2V0R3JvdXAiLCJyZW5kZXJHcm91cCIsImFkZEdyb3VwQnRuIiwic2V0dGluZ3NCdG4iLCJQb3B1cFNldHRpbmdzVmlldyIsIlBvcHVwQWRkRGlyZWN0aW9uVmlldyIsImRlZmF1bHREaXJlY3Rpb25zIiwicG9wdXBTZXR0aW5nc1ZpZXciLCJwb3B1cEFkZERpcmVjdGlvblZpZXciLCJzdWJzY3JpYmVPcGVuUG9wdXBzIiwic3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uIiwic3Vic2NyaWJlU2VsZWN0RmlsdGVyIiwic3Vic2NyaWJlU2VsZWN0VGVzdCIsImdldERpcmVjdGlvbk5hbWVzIiwic2VsZWN0ZWREaXJlY3Rpb24iLCJtb2RlIiwic3Vic2NyaWJlQ2xvc2VQb3B1cCIsInNldERpcmVjdGlvbkxpc3QiLCJyZVJlbmRlclBvcHVwIiwiZGlyZWN0aW9uTmFtZSIsImZpbmQiLCJzZXR0aW5nc1BvcHVwVHBsIiwiZGlyZWN0aW9uU2VsZWN0Iiwic2VsZWN0VGVzdEJ0biIsInNlbGVjdEZpbHRlckJ0biIsImFkZERpcmVjdGlvblBvcHVwIiwiYWRkVGVzdFBvcHVwIiwiYWRkRmlsdGVyUG9wdXAiLCJ1bnN1YiIsImUiLCJ0YXJnZXQiLCJkaXJlY3Rpb25MaXN0VHBsIiwiZmlsdGVyTGlzdFRwbCIsInRlc3RMaXN0VHBsIiwiZmlsdGVycyIsInRlc3RzIiwiZmlsdGVyIiwidGVzdHNMaXN0IiwidGVzdCIsImFkZERpcmVjdGlvblBvcHVwVHBsIiwiY2xvc2VEaXJlY3Rpb25CdG4iLCJ0ZXN0RGF5cyIsImRhdGUiLCJ0aW1lIiwicGVvcGxlIiwibGFzdE5hbWUiLCJlbWFpbCIsInRlc3REYXkiLCJncmFkZXMiLCJFbmcxIiwiRW5nMiIsIkVuZzMiLCJFbmc0IiwiQ29yZSIsIkVzc2F5IiwiYWRkVGVzdCIsInRlc3RMaXN0VUkiLCJ0ZXN0TGlzdEpTIiwidGVzdExpc3RQSFAiLCJ0ZXN0TGlzdEdPIiwiYWRkRmlsdGVyIiwiYWN0aW9uTGlzdCIsImNvbmRpdGlvbkxpc3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RB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QUswQixVQUFMLEdBQWtCLENBQUMsU0FBRCxFQUFZLEtBQVosRUFBbUIsS0FBbkIsRUFBMEIsT0FBMUIsQ0FBbEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxHQUFaLEVBQWlCLElBQWpCLEVBQXVCLEdBQXZCLENBQXJCO0FBQ0EsU0FBS3RGLEtBQUwsR0FBYUEsS0FBYjtBQUNILEM7O0FBR0wvQyxPQUFPQyxPQUFQLEdBQWlCd0MsTUFBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZGI3M2RiZjM3YmM2MTBkYWI5MiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE1lZGlhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWIgKGNoYW5uZWwpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZ3JvdXBUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cFRwbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBUcGwoZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyb3VwICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtd3JhcHBlcicpO1xyXG5cclxuICAgICAgICBncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEdyb3VwTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdGluZ1Nlc3Npb24gKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICAvLyBkaXJlY3Rpb25MaXN0INC80Ysg0LTQvtC70LbQvdGLINCx0YDQsNGC0Ywg0L7RgtC60YPQtNCwINGC0L5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbJ3VpJywgJ3BocCcsICdqcycsICdqYXZhJ107XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBncm91cFBvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZW5lcmF0ZURhdGEoKSxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGEuZGlyZWN0aW9uIC0g0LzRiyDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0L3QsNGI0LjRhSDRgdC10YLRgtC40L3Qs9GBXHJcbiAgICAgICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGRhdGEubmFtZSwgZGF0YS5kaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1uYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLWRpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhID0ge307XHJcblxyXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uTmFtZXMgKCkge1xyXG4gICAgXHRsZXQgZGlyZWN0aW9uTmFtZXMgPSBbXTtcclxuXHJcbiAgICBcdHRoaXMuZGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgXHRkaXJlY3Rpb25OYW1lcy5wdXNoKGl0ZW0ubmFtZSk7XHJcbiAgICBcdH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uTmFtZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgVGVzdCA9IHJlcXVpcmUoJy4uLy4uL1Rlc3RzL01vZGVsL1Rlc3QuanMnKSxcclxuICAgIEZpbHRlciA9IHJlcXVpcmUoJy4uLy4uL0ZpbHRlcnMvTW9kZWwvRmlsdGVyLmpzJyk7XHJcblxyXG5jbGFzcyBEaXJlY3Rpb25Nb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3QgKHRlc3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICh0ZXN0TGlzdCwgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEZpbHRlcih0ZXN0TGlzdCwgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKCkge1xyXG4gICAgbGV0IEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyksXHJcbiAgICAgICAgZ3JvdXBMaXN0ID0gcmVxdWlyZSgnLi90ZXN0RGF0YScpLFxyXG4gICAgICAgIGRlZmF1bHREaXJldGlvbnMgPSByZXF1aXJlKCcuL2RlZmF1bHREaXJldGlvbnMnKTtcclxuXHJcblxyXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoZ3JvdXBMaXN0KTtcclxuXHJcbiAgICBhcHAuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zID0gZGVmYXVsdERpcmV0aW9ucztcclxuICAgIGFwcC5zdGFydCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxyXG4gICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcclxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcclxuICAgICAgICB0aGlzLnNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3VwTGlzdCk7XHJcbiAgICAgICAgICAgIC8vIHNldHRpbmdzQ29udHJvbGxlciA9IG5ldyBTZXR0aW5nc0NvbnRyb2xsZXIodGhpcy5kaXJlY3Rpb25zKTtcclxuICAgICAgICBcclxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDpjcmVhdGVkJywgKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkR3JvdXAoZ3JvdXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEdyb3VwIChncm91cCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0LnB1c2goZ3JvdXApO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dHcm91cExpc3QgKCkge1xyXG4gICAgICAgIGxldCBncm91cExpc3RWaWV3ID0gbmV3IEdyb3VwTGlzdFZpZXcoKTtcclxuXHJcbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoKTtcclxuXHJcbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsIChncm91cCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KCk7XHJcblxyXG4gICAgICAgICAgICBncm91cExpc3RWaWV3LmFwcGVuZEdyb3VwKGdyb3VwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxyXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cFZpZXcuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwTGlzdFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGxldCBsZWZ0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1jb2x1bW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwTGlzdFRwbCgpO1xyXG5cclxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kR3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBWaWV3LnNldEdyb3VwKHRoaXMuZ3JvdXApO1xyXG4gICAgICAgIHRoaXMuZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgYWRkR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpLFxyXG4gICAgICAgICAgICBzZXR0aW5nc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1idG4nKTtcclxuXHJcbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2dyb3VwUG9wdXA6b3BlbicpKTtcclxuICAgICAgICBzZXR0aW5nc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1Yignc2V0dGluZ3NQb3B1cDpvcGVuJykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTGlzdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBMaXN0VHBsICgpIHtcclxuICAgIHJldHVybiBgPHNlY3Rpb24gaWQ9XCJncm91cC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+R3JvdXA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2stYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay13cmFwcGVyIGdyb3VwLXdyYXBwZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZ3JvdXAtYnRuXCI+YWRkIGdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBncm91cFRwbCAoZ3JvdXApIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJncm91cC10aXRsZVwiPiR7Z3JvdXAubmFtZX0gJHtncm91cC5kaXJlY3Rpb259PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPmZvcm1hdCBhZGRlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBncm91cFBvcHVwVHBsIChkaXJlY3Rpb25MaXN0KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xyXG5cclxuICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJncm91cC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtb2RhbC1ncm91cC1uYW1lXCIgY2xhc3M9XCJtb2RhbC1ncm91cC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBncm91cCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibW9kYWwtZ3JvdXAtZGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cFBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXHJcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICBQb3B1cEFkZERpcmVjdGlvblZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRGlyZWN0aW9uVmlldy5qcycpLFxyXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgIERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGVmYXVsdERpcmVjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbChkZWZhdWx0RGlyZWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldyA9IG5ldyBQb3B1cFNldHRpbmdzVmlldygpO1xyXG4gICAgICAgIHRoaXMucG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gbmV3IFBvcHVwQWRkRGlyZWN0aW9uVmlldygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZU9wZW5Qb3B1cHMoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdERpcmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0RmlsdGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3RUZXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlT3BlblBvcHVwcyAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnNbMF07XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVDbG9zZVBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoKSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5zZXREaXJlY3Rpb25MaXN0KGRpcmVjdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gbmV3IFBvcHVwQWRkRGlyZWN0aW9uVmlldygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcG9wdXBBZGREaXJlY3Rpb25WaWV3LnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVDbG9zZVBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlQ2xvc2VQb3B1cCAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLnN1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBBZGREaXJlY3Rpb25WaWV3LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcub3BlbigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uICgpIHtcclxuICAgIFx0bWVkaWF0b3Iuc3ViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgKGRpcmVjdGlvbk5hbWUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gZGlyZWN0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVNlbGVjdFRlc3QgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YigndGVzdDpzZWxlY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVNlbGVjdEZpbHRlciAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdmaWx0ZXI6c2VsZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnRic7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVBZGREaXJlY3Rpb24gKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZGlyZWN0aW9uOmFkZCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIHNldHRpbmdzUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cFNldHRpbmdzVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwIChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gc2V0dGluZ3NQb3B1cFRwbChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZVJlbmRlclBvcHVwIChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gc2V0dGluZ3NQb3B1cFRwbChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXJlY3Rpb25OYW1lcyAoZGlyZWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgY2xvc2VHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZXR0aW5ncy1idG4nKSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNldHRpbmdzLWRpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBzZWxlY3RUZXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3Qtc2V0dGluZ3MtYnRuJyksXHJcbiAgICAgICAgICAgIHNlbGVjdEZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItc2V0dGluZ3MtYnRuJyksXHJcbiAgICAgICAgICAgIGFkZERpcmVjdGlvblBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kaXJlY3Rpb24tYnRuJyksXHJcbiAgICAgICAgICAgIGFkZFRlc3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1idG4nKSxcclxuICAgICAgICAgICAgYWRkRmlsdGVyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZpbHRlci1idG4nKTtcclxuXHJcbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGVjdFRlc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YigndGVzdDpzZWxlY3QnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2ZpbHRlcjpzZWxlY3QnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkRGlyZWN0aW9uUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWRkRGlyZWN0aW9uUG9wdXA6b3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBhZGRUZXN0UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkRmlsdGVyUG9wdXA6b3BlbicpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyBhZGRGaWx0ZXJQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgbWVkaWF0b3IucHViKCdhZGRUZXN0UG9wdXA6b3BlbicpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cE5hbWUnKSxcclxuICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBEaXJlY3Rpb24nKSxcclxuICAgICAgICAgICAgZGF0YSA9IHt9O1xyXG5cclxuICAgICAgICBkYXRhLmRpcmVjdGlvbiA9IGdyb3VwRGlyZWN0aW9uRWxlbS5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbS5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZGlyZWN0aW9uTGlzdFRwbCA9IHJlcXVpcmUoJy4vZGlyZWN0aW9uTGlzdFRwbC5qcycpLFxyXG4gICAgZmlsdGVyTGlzdFRwbCA9IHJlcXVpcmUoJy4uLy4uLy4uL0ZpbHRlcnMvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcycpLFxyXG4gICAgdGVzdExpc3RUcGwgPSByZXF1aXJlKCcuLi8uLi8uLi9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcycpO1xyXG5cclxuZnVuY3Rpb24gc2V0dGluZ3NQb3B1cFRwbCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgIGxldCBkaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdFRwbChkaXJlY3Rpb25zLCBzZWxlY3RlZERpcmVjdGlvbi5uYW1lKSxcclxuICAgICAgICBmaWx0ZXJMaXN0ID0gZmlsdGVyTGlzdFRwbChzZWxlY3RlZERpcmVjdGlvbi5maWx0ZXJzKSxcclxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLnRlc3RzKTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJzZXR0aW5ncy1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZmlsdGVyLXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1mdFwiPkY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7bW9kZSA9PT0gJ1QnPyB0ZXN0TGlzdDogZmlsdGVyTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdzUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZGlyZWN0aW9uTGlzdFRwbCAoZGlyZWN0aW9uTGlzdCwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcblxyXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0nJHtpdGVtfScgJHtzZWxlY3RlZERpcmVjdGlvbiA9PT0gaXRlbT8gJ3NlbGVjdGVkJzogJyd9PiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uLWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiIGNsYXNzPVwibW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uXCI+JHtvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZGlyZWN0aW9uLWJ0blwiPmFkZCBkaXJlY3Rpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25MaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckxpc3RUcGwgKGZpbHRlckxpc3QpIHtcclxuICAgIGxldCBmaWx0ZXJzID0gJyc7XHJcblxyXG4gICAgZmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICBmaWx0ZXJzICs9IGA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+JHtmaWx0ZXJ9PC9kaXY+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdFwiPiR7ZmlsdGVyc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtZmlsdGVyLWJ0biBidG5cIj5hZGQgZmlsdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0ZpbHRlcnMvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIHRlc3RMaXN0VHBsICh0ZXN0c0xpc3QpIHtcclxuICAgIGxldCB0ZXN0cyA9ICcnO1xyXG5cclxuICAgIHRlc3RzTGlzdC5mb3JFYWNoKCh0ZXN0KSA9PiB7XHJcbiAgICAgICAgdGVzdHMgKz0gYDxkaXYgY2xhc3M9XCJ0ZXN0XCI+JHt0ZXN0fTwvZGl2PmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ0ZXN0LWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlRlc3RzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0LWxpc3RcIj4ke3Rlc3RzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10ZXN0LWJ0biBidG5cIj5hZGQgdGVzdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRlc3RMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvVGVzdHMvVmlldy90cGwvdGVzdExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgYWRkRGlyZWN0aW9uUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBBZGREaXJlY3Rpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1kaXJlY3Rpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBhZGREaXJlY3Rpb25Qb3B1cFRwbCgpO1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgY2xvc2VEaXJlY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZGlyZWN0aW9uLWJ0bicpLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kaXJlY3Rpb24tbmFtZScpO1xyXG5cclxuXHJcbiAgICAgICAgY2xvc2VEaXJlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2FkZERpcmVjdGlvblBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvbk5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkRGlyZWN0aW9uVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gYWRkRGlyZWN0aW9uUG9wdXBUcGwgKCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBhZGQtZGlyZWN0aW9uLXBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC1kaXJlY3Rpb24tbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGlyZWN0aW9uIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2sgY2xvc2UtZGlyZWN0aW9uLWJ0blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFkZERpcmVjdGlvblBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZ3JvdXBMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdEcC0xMTcnLFxyXG4gICAgICAgIHRlc3RMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0pTIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBmaWx0ZXJMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnSlMgQ29yZSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFc3NheSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA3NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGVzdERheXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGVvcGxlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdIYXJyeScsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ1BvdHRlcicsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hhcnJ5LXBvdHRlckBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDg1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdSb24nLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdXaXNsZXknLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdyb24td2lzbGV5QGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTc6MDAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAzNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnRHAtMTIxJyxcclxuICAgICAgICB0ZXN0TGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdHbyBDb3JlJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZmlsdGVyTGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0dvIENvcmUnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlc3REYXlzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBlb3BsZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGVybWlvbmUnLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdHcmFuZ2VyJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnaGVybWlvbmUtZ3JhbmdlckBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDg1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdOZXZpbGxlJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnTG9uZ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ25ldmlsbGUtbG9uZ2JvdHRvbUBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE3OjAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ0RwLTEyMycsXHJcbiAgICAgICAgdGVzdExpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUEhQIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBmaWx0ZXJMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnUEhQIENvcmUnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlc3REYXlzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBlb3BsZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRHJhY28nLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdNYWxmb3knLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdkcmFjby1tYWxmb3lAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDI2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGV0ZXInLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdHcmlmZmluJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAncGV0ZXItZ3JpZmZpbkBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE3OjAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9IFxyXG5dO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cExpc3Q7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKTtcclxuXHJcbmxldCBkZWZhdWx0RGlyZXRpb25zID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpcmVjdGlvbk1vZGVsKCdVSScpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEaXJlY3Rpb25Nb2RlbCgnSlMnKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGlyZWN0aW9uTW9kZWwoJ1BIUCcpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpcmVjdGlvbk1vZGVsKCdHTycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XHJcblxyXG5kZWZhdWx0RGlyZXRpb25zWzBdLmFkZFRlc3QoJ0VuZyAxJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRUZXN0KCdFbmcgMicsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMF0uYWRkVGVzdCgnRW5nIDMnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzBdLmFkZFRlc3QoJ0VuZyA0JywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRUZXN0KCdFc3NheSBVSScsIDIwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMV0uYWRkVGVzdCgnRW5nIDEnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZFRlc3QoJ0VuZyAyJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1sxXS5hZGRUZXN0KCdFbmcgMycsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMV0uYWRkVGVzdCgnSlMgQ29yZScsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMV0uYWRkVGVzdCgnRXNzYXkgSlMnLCAyMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzJdLmFkZFRlc3QoJ0VuZyAxJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRUZXN0KCdFbmcgMicsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMl0uYWRkVGVzdCgnUEhQIENvcmUnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzJdLmFkZFRlc3QoJ0Vzc2F5IFBIUCcsIDIwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbM10uYWRkVGVzdCgnRW5nIDEnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0VuZyAyJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdFbmcgMycsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbM10uYWRkVGVzdCgnRW5nIDQnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0dPIENvcmUnLCAyMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0Vzc2F5IEdPJywgMzAwKTtcclxuXHJcbmxldCB0ZXN0TGlzdFVJID0gWydFbmcgMScsICdFbmcgMicsICdFbmcgMycsXSxcclxuICAgIHRlc3RMaXN0SlMgPSBbJ0VuZyAxJyxdLFxyXG4gICAgdGVzdExpc3RQSFAgPSBbJ1BIUCBDb3JlJ10sXHJcbiAgICB0ZXN0TGlzdEdPID0gWydFbmcgMScsICdFbmcgMicsICdFbmcgMycsJ0VuZyA0J107XHJcblxyXG5kZWZhdWx0RGlyZXRpb25zWzBdLmFkZEZpbHRlcih0ZXN0TGlzdFVJLCAnYXZlcmFnZScsICc+JywgNjApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZEZpbHRlcih0ZXN0TGlzdEpTLCAnYXZlcmFnZScsICc+JywgNzUpO1xyXG5kZWZhdWx0RGlyZXRpb25zWzJdLmFkZEZpbHRlcih0ZXN0TGlzdFBIUCwgJ2F2ZXJhZ2UnLCAnPicsIDgwKTtcclxuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRGaWx0ZXIodGVzdExpc3RHTywgJ3N1bW0nLCAnPicsIDcwKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdERpcmV0aW9ucztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL2RlZmF1bHREaXJldGlvbnMuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBUZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ncmFkZSA9IGdyYWRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRlc3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvVGVzdHMvTW9kZWwvVGVzdC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMudGVzdHMgPSB0ZXN0cztcclxuICAgICAgICB0aGlzLmFjdGlvbkxpc3QgPSBbJ2F2ZXJhZ2UnLCAnbWF4JywgJ21pbicsICdlcXVhbCddO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uTGlzdCA9IFsnPicsICc+PScsICc9JywgJzw9JywgJzwnXTtcclxuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRmlsdGVycy9Nb2RlbC9GaWx0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9