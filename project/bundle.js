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
<<<<<<< HEAD
/******/    // Load entry module and return exports
/******/    return __webpack_require__(__webpack_require__.s = 6);
=======
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
>>>>>>> settings
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

<<<<<<< HEAD
var groupTpl = __webpack_require__(11),
=======
var groupTpl = __webpack_require__(10),
>>>>>>> settings
    mediator = __webpack_require__(0);

var GroupView = function () {
    function GroupView() {
        _classCallCheck(this, GroupView);

        this.template = '';
<<<<<<< HEAD
        this.groupsBlock = document.querySelector('.group-wrapper');
=======
        this.addListeners();
>>>>>>> settings
    }

    _createClass(GroupView, [{
        key: 'setGroup',
        value: function setGroup(group) {
            this.template = groupTpl(group);
        }
    }, {
        key: 'renderGroup',
        value: function renderGroup() {
<<<<<<< HEAD
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
=======
            var groupsBlock = document.querySelector('.group-wrapper');

            groupsBlock.insertAdjacentHTML('afterbegin', this.template);
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {}
>>>>>>> settings
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
<<<<<<< HEAD

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
=======

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
>>>>>>> settings
    }]);

    return GroupModel;
}();

module.exports = GroupModel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

<<<<<<< HEAD
var mediator = __webpack_require__(0),
    GroupView = __webpack_require__(1),
    GroupModel = __webpack_require__(2),
    groupPopupTpl = __webpack_require__(12);
=======
var Test = __webpack_require__(13),
    Filter = __webpack_require__(14);
>>>>>>> settings

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
        groupList = __webpack_require__(21),
        defaultDiretions = __webpack_require__(22);

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

<<<<<<< HEAD
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
=======
var GroupController = __webpack_require__(7),
    SettingsModel = __webpack_require__(3),
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
>>>>>>> settings

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

<<<<<<< HEAD
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
=======
var GroupListView = __webpack_require__(8),
    GroupView = __webpack_require__(1),
    GroupModel = __webpack_require__(2),
    PopupAddGroupView = __webpack_require__(11),
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
/* 8 */
>>>>>>> settings
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

<<<<<<< HEAD
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
    PopupFormatView = __webpack_require__(24),
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
=======
var groupListTpl = __webpack_require__(9),
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
    return '<div class="group">\n                <h2 class="group-title">' + group.name + ' ' + group.direction + '</h2>\n                <div>\n                    <button class="btn">format added</button>\n                </div>\n            </div>';
}

module.exports = groupTpl;

/***/ }),
/* 11 */
>>>>>>> settings
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

<<<<<<< HEAD
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
=======
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
/* 12 */
>>>>>>> settings
/***/ (function(module, exports, __webpack_require__) {

"use strict";


<<<<<<< HEAD
function groupListTpl() {
    return '<section id="group-block">\n                <div class="group-block-head">\n                    <h1>Group</h1>\n                    <button id="settings-btn" class="btn btn-cog">\n                        <i class="fa fa-cog" aria-hidden="true"></i>\n                    </button>\n                </div>\n                <div class="group-block-body">\n                    <div class="group-block-wrapper group-wrapper"></div>\n                        <button class="btn add-group-btn">add group</button>\n                    </div>\n            </section>';
}

module.exports = groupListTpl;

/***/ }),
/* 11 */
=======
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
>>>>>>> settings
/***/ (function(module, exports, __webpack_require__) {

"use strict";


<<<<<<< HEAD
function groupTpl(group) {
    return '<div class="group">\n                <h2 class="group-title">' + group.name + ' ' + group.direction + '</h2>\n                <div>\n                    <button class="btn format-added-btn">format added</button>\n                </div>\n            </div>';
}
=======
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
>>>>>>> settings

var Test = function Test(name, grade) {
    _classCallCheck(this, Test);

    this.name = name;
    this.grade = grade;
};

module.exports = Test;

/***/ }),
<<<<<<< HEAD
/* 12 */
=======
/* 14 */
>>>>>>> settings
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
<<<<<<< HEAD
/* 13 */
=======
/* 15 */
>>>>>>> settings
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

<<<<<<< HEAD
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
=======
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
>>>>>>> settings

        // subscribeAddDirection () {
        //     mediator.sub('direction:add', () => {
        //         let directions = this.settingsModel.getDirectionNames();
        //         this.mode = 'T';

        //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
        //     });
        // }

    }]);

<<<<<<< HEAD
=======
    return SettingsController;
}();

module.exports = SettingsController;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


>>>>>>> settings
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
<<<<<<< HEAD
    settingsPopupTpl = __webpack_require__(15);

var PopupSettingsView = function () {
    function PopupSettingsView() {
        _classCallCheck(this, PopupSettingsView);

=======
    settingsPopupTpl = __webpack_require__(17);

var PopupSettingsView = function () {
    function PopupSettingsView(directions, directionNames) {
        _classCallCheck(this, PopupSettingsView);

        this.directions = directions;
        this.directionNames = directionNames;
        this.selectedDirection = directions[0];
        this.mode = 'T';

        this.setDirectionNames();
>>>>>>> settings
        this.modal = document.querySelector('#modal-settings');
    }

    _createClass(PopupSettingsView, [{
        key: 'renderPopup',
<<<<<<< HEAD
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
=======
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
>>>>>>> settings
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
<<<<<<< HEAD
/* 15 */
=======
/* 17 */
>>>>>>> settings
/***/ (function(module, exports, __webpack_require__) {

"use strict";


<<<<<<< HEAD
var directionListTpl = __webpack_require__(16),
    filterListTpl = __webpack_require__(17),
    testListTpl = __webpack_require__(18);

function settingsPopupTpl(directions, mode, selectedDirection) {
    var directionList = directionListTpl(directions, selectedDirection.name),
        filterList = filterListTpl(selectedDirection.filters),
        testList = testListTpl(selectedDirection.tests);
=======
var directionListTpl = __webpack_require__(18),
    filterListTpl = __webpack_require__(19),
    testListTpl = __webpack_require__(20);

function settingsPopupTpl(directions, mode, selectedDirection) {
    var directionList = directionListTpl(directions, selectedDirection.name),
        filterList = filterListTpl(selectedDirection.filterList),
        testList = testListTpl(selectedDirection.testList);
>>>>>>> settings

    return '<div id="settings-popup" class="modal-content">\n                <div class="left-column-settings">' + directionList + '</div>\n                <div class="right-column-settings">\n                    <div class="column-settings">\n                        <button id="test-settings-btn" class="btn btn-ft">T</button>\n                        <button id="filter-settings-btn" class="btn btn-ft">F</button>\n                    </div>\n                    <div class="column-settings">\n                        ' + (mode === 'T' ? testList : filterList) + '\n                    </div>\n                    <div class="column-settings">\n                        <button id="close-settings-btn" class="btn btn-cog">\n                            <i class="fa fa-check" aria-hidden="true"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>';
}

module.exports = settingsPopupTpl;

/***/ }),
<<<<<<< HEAD
/* 16 */
=======
/* 18 */
>>>>>>> settings
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
<<<<<<< HEAD
/* 17 */
=======
/* 19 */
>>>>>>> settings
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
<<<<<<< HEAD
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
=======
/* 20 */
>>>>>>> settings
/***/ (function(module, exports, __webpack_require__) {

"use strict";


<<<<<<< HEAD
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
=======
function testListTpl(testsList) {
    var tests = '';

    testsList.forEach(function (test) {
        tests += '<div class="test">' + test.name + '</div>';
    });

    return '<div class="test-list-wrapper">\n                <h3>Tests</h3>\n                <div class="test-list">' + tests + '</div>\n                <button class="add-test-btn btn">add test</button>\n            </div>';
}

module.exports = testListTpl;

/***/ }),
>>>>>>> settings
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
<<<<<<< HEAD
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var popupFormatTpl = __webpack_require__(25),
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
/* 25 */
=======
/* 22 */
>>>>>>> settings
/***/ (function(module, exports, __webpack_require__) {

"use strict";


<<<<<<< HEAD
function popupFormatTpl(testList) {
    var tests = '';

    testList.forEach(function (item) {
        tests += '<option>' + item + '</option>';
    });

    return '<div id="test-list-popup" class="modal-content">\n                <div class="test-list">' + tests + '</div>\n                <button id="close-group-btn" class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = popupFormatTpl;
=======
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
>>>>>>> settings

/***/ })
<<<<<<< HEAD
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjQzZGZiMDUxNDgxYjVlZWM1ZGQiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwRm9ybWF0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9wb3B1cEZvcm1hdFRwbC5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JvdXBUcGwiLCJyZXF1aXJlIiwiR3JvdXBWaWV3IiwidGVtcGxhdGUiLCJncm91cHNCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdyb3VwIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiYWRkTGlzdGVuZXJzIiwiZm9ybWF0R3JvdXBCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicHViIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJkaXJlY3Rpb25MaXN0IiwibW9kYWwiLCJpbm5lckhUTUwiLCJvcGVuIiwiY2xvc2VHcm91cEJ0biIsImdlbmVyYXRlRGF0YSIsImNsb3NlIiwiZ3JvdXBOYW1lRWxlbSIsImdyb3VwRGlyZWN0aW9uRWxlbSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiRGlyZWN0aW9uTW9kZWwiLCJTZXR0aW5nc01vZGVsIiwiZGVmYXVsdERpcmVjdGlvbnMiLCJkaXJlY3Rpb25zIiwicmVuZGVyIiwiaXRlbSIsImRpcmVjdGlvbk5hbWVzIiwidGVzdE5hbWUiLCJ0ZXN0cyIsIlRlc3QiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsImZpbHRlcnMiLCJGaWx0ZXIiLCJpbml0IiwiQXBwIiwiZ3JvdXBMaXN0IiwiYXBwIiwic3RhcnQiLCJHcm91cENvbnRyb2xsZXIiLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJzdWJzY3JpYmUiLCJncm91cENvbnRyb2xsZXIiLCJzaG93R3JvdXBMaXN0Iiwic3ViIiwiYWRkR3JvdXAiLCJHcm91cExpc3RWaWV3IiwiUG9wdXBGb3JtYXRWaWV3IiwiZ3JvdXBMaXN0VmlldyIsInBvcHVwQWRkR3JvdXBWaWV3IiwicmVuZGVyUG9wdXAiLCJhcHBlbmRHcm91cCIsImNvbnNvbGUiLCJsb2ciLCJwb3B1cEZvcm1hdFZpZXciLCJncm91cExpc3RUcGwiLCJsZWZ0QmxvY2siLCJyZW5kZXJHcm91cHMiLCJncm91cFZpZXciLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiYWRkR3JvdXBCdG4iLCJzZXR0aW5nc0J0biIsIlBvcHVwU2V0dGluZ3NWaWV3IiwiUG9wdXBBZGREaXJlY3Rpb25WaWV3Iiwic2V0dGluZ3NNb2RlbCIsInBvcHVwU2V0dGluZ3NWaWV3IiwicG9wdXBBZGREaXJlY3Rpb25WaWV3Iiwic3Vic2NyaWJlT3BlblBvcHVwcyIsInN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiIsInN1YnNjcmliZVNlbGVjdEZpbHRlciIsInN1YnNjcmliZVNlbGVjdFRlc3QiLCJnZXREaXJlY3Rpb25OYW1lcyIsInNlbGVjdGVkRGlyZWN0aW9uIiwibW9kZSIsInN1YnNjcmliZUNsb3NlUG9wdXAiLCJzZXREaXJlY3Rpb25MaXN0IiwicmVSZW5kZXJQb3B1cCIsImRpcmVjdGlvbk5hbWUiLCJmaW5kIiwic2V0dGluZ3NQb3B1cFRwbCIsImRpcmVjdGlvblNlbGVjdCIsInNlbGVjdFRlc3RCdG4iLCJzZWxlY3RGaWx0ZXJCdG4iLCJhZGREaXJlY3Rpb25Qb3B1cCIsImFkZFRlc3RQb3B1cCIsImFkZEZpbHRlclBvcHVwIiwidW5zdWIiLCJlIiwidGFyZ2V0IiwiZGlyZWN0aW9uTGlzdFRwbCIsImZpbHRlckxpc3RUcGwiLCJ0ZXN0TGlzdFRwbCIsImZpbHRlckxpc3QiLCJ0ZXN0TGlzdCIsImZpbHRlciIsInRlc3RzTGlzdCIsInRlc3QiLCJhZGREaXJlY3Rpb25Qb3B1cFRwbCIsImNsb3NlRGlyZWN0aW9uQnRuIiwidGVzdERheXMiLCJkYXRlIiwidGltZSIsInBlb3BsZSIsImxhc3ROYW1lIiwiZW1haWwiLCJ0ZXN0RGF5IiwiZ3JhZGVzIiwiRW5nMSIsIkVuZzIiLCJFbmczIiwiRW5nNCIsIkNvcmUiLCJFc3NheSIsInBvcHVwRm9ybWF0VHBsIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7O0lBRU1BLFE7QUFDRix3QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUws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T0MsT0FBUCxHQUFpQitELGVBQWpCLEM7Ozs7Ozs7QUNsQ0E7O0FBRUEsU0FBU21FLGNBQVQsQ0FBeUJwQixRQUF6QixFQUFtQztBQUMvQixRQUFJbkUsUUFBUSxFQUFaOztBQUVBbUUsYUFBU25ILE9BQVQsQ0FBaUIsVUFBQzZDLElBQUQsRUFBVTtBQUN2QkcsOEJBQW9CSCxJQUFwQjtBQUNILEtBRkQ7O0FBSUEseUdBQ3FDRyxLQURyQztBQU1IOztBQUVENUMsT0FBT0MsT0FBUCxHQUFpQmtJLGNBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjQzZGZiMDUxNDgxYjVlZWM1ZGQiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE1lZGlhdG9yIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICB9XG5cbiAgICBwdWIgKGNoYW5uZWwsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0uZm9yRWFjaCgoZm4pID0+IGZuKGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1YiAoY2hhbm5lbCwgZm4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLnB1c2goZm4pO1xuICAgIH1cblxuICAgIHVuc3ViIChjaGFubmVsKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xuICAgIH1cbn1cblxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwVHBsID0gcmVxdWlyZSgnLi90cGwvZ3JvdXBUcGwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XG4gICAgICAgIHRoaXMuZ3JvdXBzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtd3JhcHBlcicpO1xuICAgIH1cblxuICAgIHNldEdyb3VwIChncm91cCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBUcGwoZ3JvdXApO1xuICAgIH1cblxuICAgIHJlbmRlckdyb3VwICgpIHtcbiAgICAgICAgdGhpcy5ncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgZm9ybWF0R3JvdXBCdG4gPSB0aGlzLmdyb3Vwc0Jsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtYXQtYWRkZWQtYnRuJyk7XG5cbiAgICAgICAgZm9ybWF0R3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2dyb3VwOmZvcm1hdHRlZCcpKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBHcm91cE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcblxuICAgIH1cblxuICAgIGFkZFRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICgpIHtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXG4gICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzJyk7XG5cbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vIGRpcmVjdGlvbkxpc3Qg0LzRiyDQtNC+0LvQttC90Ysg0LHRgNCw0YLRjCDQvtGC0LrRg9C00LAg0YLQvlxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbJ3VpJywgJ3BocCcsICdqcycsICdqYXZhJ107XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGdyb3VwUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0KTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1idG4nKTtcblxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdlbmVyYXRlRGF0YSgpLFxuICAgICAgICAgICAgICAgIC8vIGRhdGEuZGlyZWN0aW9uIC0g0LzRiyDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0L3QsNGI0LjRhSDRgdC10YLRgtC40L3Qs9GBXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBuZXcgR3JvdXBNb2RlbChkYXRhLm5hbWUsIGRhdGEuZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xuXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdDtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZURhdGEgKCkge1xuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLW5hbWUnKSxcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLWRpcmVjdGlvbicpLFxuICAgICAgICAgICAgZGF0YSA9IHt9O1xuXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgb3BlbiAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyk7XG5cbmNsYXNzIFNldHRpbmdzTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChkZWZhdWx0RGlyZWN0aW9ucykge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5yZW5kZXIoZGVmYXVsdERpcmVjdGlvbnMpO1xuICAgIH1cblxuICAgIHJlbmRlciAoZGVmYXVsdERpcmVjdGlvbnMpIHtcbiAgICAgICAgZGVmYXVsdERpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbk1vZGVsKGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uTmFtZXMgKCkge1xuICAgIFx0bGV0IGRpcmVjdGlvbk5hbWVzID0gW107XG5cbiAgICBcdHRoaXMuZGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIFx0ZGlyZWN0aW9uTmFtZXMucHVzaChpdGVtLm5hbWUpO1xuICAgIFx0fSk7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbk5hbWVzO1xuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbiAobmFtZSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgRGlyZWN0aW9uTW9kZWwobmFtZSkpO1xuXG4gICAgICAgIGRlZmF1bHREaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ldyBEaXJlY3Rpb25Nb2RlbChpdGVtKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZFRlc3RzICh0ZXN0TmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RzLnB1c2gobmV3IFRlc3QodGVzdE5hbWUpKTtcbiAgICB9XG5cbiAgICBhZGRGaWx0ZXJzICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgRGlyZWN0aW9uTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudGVzdHMgPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gW107XG4gICAgfVxuXG4gICAgLy8gYWRkVGVzdCAodGVzdE5hbWUpIHtcbiAgICAvLyAgICAgdGhpcy50ZXN0cy5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XG4gICAgLy8gfVxuXG4gICAgLy8gYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgLy8gICAgIHRoaXMuZmlsdGVycy5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIC8vIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rpb25Nb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuICAgIGxldCBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxuICAgICAgICBncm91cExpc3QgPSByZXF1aXJlKCcuL3Rlc3REYXRhJyk7XG5cbiAgICBsZXQgYXBwID0gbmV3IEFwcChncm91cExpc3QpO1xuICAgIFxuICAgIGFwcC5zdGFydCgpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKGdyb3VwTGlzdCkge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcbiAgICAgICAgLy8gdGhpcy5kaXJlY3Rpb25zID0gZ3JvdXBMaXN0LmRpcmVjdGlvbnM7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3VwTGlzdCk7XG4gICAgICAgICAgICAvLyBzZXR0aW5nc0NvbnRyb2xsZXIgPSBuZXcgU2V0dGluZ3NDb250cm9sbGVyKHRoaXMuZGlyZWN0aW9ucyk7XG4gICAgICAgIFxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsIChncm91cCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRHcm91cChncm91cCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEdyb3VwIChncm91cCkge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdC5wdXNoKGdyb3VwKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIFBvcHVwRm9ybWF0VmlldyA9IHJlcXVpcmUoJy4vVmlldy9Qb3B1cEZvcm1hdFZpZXcuanMnKSxcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKGdyb3VwTGlzdCkge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IGdyb3VwTGlzdDtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0Vmlldyh0aGlzLmdyb3VwTGlzdCk7XG5cbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpO1xuXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5yZW5kZXJQb3B1cCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIGxldCBncm91cExpc3RWaWV3ID0gbmV3IEdyb3VwTGlzdFZpZXcoKTtcblxuICAgICAgICAgICAgZ3JvdXBMaXN0Vmlldy5hcHBlbmRHcm91cChncm91cCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Zm9ybWF0dGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm1hdGVkJyk7XG4gICAgICAgICAgICBsZXQgcG9wdXBGb3JtYXRWaWV3ID0gbmV3IFBvcHVwRm9ybWF0VmlldygpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBWaWV3LmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IGxlZnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbHVtbicpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcblxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJHcm91cHMoKTtcblxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJlbmRlckdyb3VwcyAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0LmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xuXG4gICAgICAgICAgICBncm91cFZpZXcuc2V0R3JvdXAoZ3JvdXApO1xuXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGVuZEdyb3VwIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xuXG4gICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XG4gICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyksXG4gICAgICAgICAgICBzZXR0aW5nc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1idG4nKTtcblxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXBQb3B1cDpvcGVuJykpO1xuICAgICAgICBzZXR0aW5nc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1Yignc2V0dGluZ3NQb3B1cDpvcGVuJykpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ3JvdXBMaXN0VHBsICgpIHtcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2staGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+R3JvdXA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay13cmFwcGVyIGdyb3VwLXdyYXBwZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWdyb3VwLWJ0blwiPmFkZCBncm91cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3VwVHBsIChncm91cCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBmb3JtYXQtYWRkZWQtYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm91cFBvcHVwVHBsIChkaXJlY3Rpb25MaXN0KSB7XG4gICAgbGV0IG9wdGlvbnMgPSAnJztcblxuICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwiZ3JvdXAtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1vZGFsLWdyb3VwLW5hbWVcIiBjbGFzcz1cIm1vZGFsLWdyb3VwLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibW9kYWwtZ3JvdXAtZGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWdyb3VwLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXG4gICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxuICAgIFBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzJyksXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChkZWZhdWx0RGlyZWN0aW9ucykge1xuICAgICAgICB0aGlzLnNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbChkZWZhdWx0RGlyZWN0aW9ucyk7XG4gICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcgPSBuZXcgUG9wdXBTZXR0aW5nc1ZpZXcoKTtcbiAgICAgICAgdGhpcy5wb3B1cEFkZERpcmVjdGlvblZpZXcgPSBuZXcgUG9wdXBBZGREaXJlY3Rpb25WaWV3KCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlT3BlblBvcHVwcygpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdERpcmVjdGlvbigpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdEZpbHRlcigpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdFRlc3QoKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVPcGVuUG9wdXBzICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOm9wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnNbMF07XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQ2xvc2VQb3B1cCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcblxuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnNldERpcmVjdGlvbkxpc3QoZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IG5ldyBQb3B1cEFkZERpcmVjdGlvblZpZXcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcG9wdXBBZGREaXJlY3Rpb25WaWV3LnJlbmRlclBvcHVwKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlQ2xvc2VQb3B1cCAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBBZGREaXJlY3Rpb25WaWV3LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3Lm9wZW4oKTtcblxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcblxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiAoKSB7XG4gICAgXHRtZWRpYXRvci5zdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCAoZGlyZWN0aW9uTmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IGRpcmVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU2VsZWN0VGVzdCAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YigndGVzdDpzZWxlY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU2VsZWN0RmlsdGVyICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdmaWx0ZXI6c2VsZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdGJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZUFkZERpcmVjdGlvbiAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZGlyZWN0aW9uOmFkZCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIHNldHRpbmdzUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyk7XG5cbmNsYXNzIFBvcHVwU2V0dGluZ3NWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MnKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3B1cCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmVSZW5kZXJQb3B1cCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb25OYW1lcyAoZGlyZWN0aW9ucykge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xuICAgIH1cblxuICAgIG9wZW4gKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgY2xvc2VHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZXR0aW5ncy1idG4nKSxcbiAgICAgICAgICAgIGRpcmVjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb24nKSxcbiAgICAgICAgICAgIHNlbGVjdFRlc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdC1zZXR0aW5ncy1idG4nKSxcbiAgICAgICAgICAgIHNlbGVjdEZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItc2V0dGluZ3MtYnRuJyksXG4gICAgICAgICAgICBhZGREaXJlY3Rpb25Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyZWN0aW9uLWJ0bicpLFxuICAgICAgICAgICAgYWRkVGVzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXN0LWJ0bicpLFxuICAgICAgICAgICAgYWRkRmlsdGVyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZpbHRlci1idG4nKTtcblxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XG4gICAgICAgICAgICBtZWRpYXRvci51bnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXJlY3Rpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0VGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YigndGVzdDpzZWxlY3QnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdmaWx0ZXI6c2VsZWN0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZERpcmVjdGlvblBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZFRlc3RQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkRmlsdGVyUG9wdXA6b3BlbicpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBhZGRGaWx0ZXJQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkVGVzdFBvcHVwOm9wZW4nKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cE5hbWUnKSxcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwRGlyZWN0aW9uJyksXG4gICAgICAgICAgICBkYXRhID0ge307XG5cbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBkaXJlY3Rpb25MaXN0VHBsID0gcmVxdWlyZSgnLi9kaXJlY3Rpb25MaXN0VHBsLmpzJyksXG4gICAgZmlsdGVyTGlzdFRwbCA9IHJlcXVpcmUoJy4uLy4uLy4uL0ZpbHRlcnMvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcycpLFxuICAgIHRlc3RMaXN0VHBsID0gcmVxdWlyZSgnLi4vLi4vLi4vVGVzdHMvVmlldy90cGwvdGVzdExpc3RUcGwuanMnKTtcblxuZnVuY3Rpb24gc2V0dGluZ3NQb3B1cFRwbCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICBsZXQgZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9ucywgc2VsZWN0ZWREaXJlY3Rpb24ubmFtZSksXG4gICAgICAgIGZpbHRlckxpc3QgPSBmaWx0ZXJMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLmZpbHRlcnMpLFxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLnRlc3RzKTtcblxuICAgIHJldHVybiBgPGRpdiBpZD1cInNldHRpbmdzLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbHRlci1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5GPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke21vZGUgPT09ICdUJz8gdGVzdExpc3Q6IGZpbHRlckxpc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2Utc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdzUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBkaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0LCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgIGxldCBvcHRpb25zID0gJyc7XG5cbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0nJHtpdGVtfScgJHtzZWxlY3RlZERpcmVjdGlvbiA9PT0gaXRlbT8gJ3NlbGVjdGVkJzogJyd9PiR7aXRlbX08L29wdGlvbj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uLWxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1kaXJlY3Rpb24tYnRuXCI+YWRkIGRpcmVjdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25MaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlsdGVyTGlzdFRwbCAoZmlsdGVyTGlzdCkge1xuICAgIGxldCBmaWx0ZXJzID0gJyc7XG5cbiAgICBmaWx0ZXJMaXN0LmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICBmaWx0ZXJzICs9IGA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+JHtmaWx0ZXJ9PC9kaXY+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+RmlsdGVyczwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0XCI+JHtmaWx0ZXJzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtZmlsdGVyLWJ0biBidG5cIj5hZGQgZmlsdGVyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbHRlckxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIHRlc3RMaXN0VHBsICh0ZXN0c0xpc3QpIHtcbiAgICBsZXQgdGVzdHMgPSAnJztcblxuICAgIHRlc3RzTGlzdC5mb3JFYWNoKCh0ZXN0KSA9PiB7XG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdFwiPiR7dGVzdH08L2Rpdj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGVzdC1saXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+VGVzdHM8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXN0LWxpc3RcIj4ke3Rlc3RzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGVzdC1idG4gYnRuXCI+YWRkIHRlc3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdExpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcbiAgICBhZGREaXJlY3Rpb25Qb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzJyk7XG5cbmNsYXNzIFBvcHVwQWRkRGlyZWN0aW9uVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1kaXJlY3Rpb24nKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3B1cCAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYWRkRGlyZWN0aW9uUG9wdXBUcGwoKTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgb3BlbiAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBjbG9zZURpcmVjdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1kaXJlY3Rpb24tYnRuJyksXG4gICAgICAgICAgICBkaXJlY3Rpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kaXJlY3Rpb24tbmFtZScpO1xuXG5cbiAgICAgICAgY2xvc2VEaXJlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FkZERpcmVjdGlvblBvcHVwOmNsb3NlJyk7XG4gICAgICAgICAgICBtZWRpYXRvci51bnN1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGlyZWN0aW9uTmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkRGlyZWN0aW9uVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBhZGREaXJlY3Rpb25Qb3B1cFRwbCAoKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBhZGQtZGlyZWN0aW9uLXBvcHVwXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZGQtZGlyZWN0aW9uLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGRpcmVjdGlvbiBuYW1lXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2sgY2xvc2UtZGlyZWN0aW9uLWJ0blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkRGlyZWN0aW9uUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwTGlzdCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdEcC0xMTcnLFxuICAgICAgICB0ZXN0TGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdKUyBDb3JlJyxcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBmaWx0ZXJMaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRW5nMScsICdFbmcyJywgJ0VuZzMnLCAnRW5nNCddLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydKUyBDb3JlJ10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB0ZXN0RGF5czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcGVvcGxlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0hhcnJ5JyxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ1BvdHRlcicsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdoYXJyeS1wb3R0ZXJAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUm9uJyxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ1dpc2xleScsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdyb24td2lzbGV5QGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTc6MDAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogODAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogNjAsXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogJ0RwLTEyMScsXG4gICAgICAgIHRlc3RMaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0dvIENvcmUnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0dvIENvcmUnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3REYXlzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwZW9wbGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGVybWlvbmUnLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnR3JhbmdlcicsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdoZXJtaW9uZS1ncmFuZ2VyQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTU6MzAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogNjAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDg1LFxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogOTUsXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDMwMCxcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDI2MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldmlsbGUnLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnTG9uZ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgZW1haWw6ICduZXZpbGxlLWxvbmdib3R0b21AZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnRHAtMTIzJyxcbiAgICAgICAgdGVzdExpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUEhQIENvcmUnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ1BIUCBDb3JlJ10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB0ZXN0RGF5czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcGVvcGxlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0RyYWNvJyxcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ01hbGZveScsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdkcmFjby1tYWxmb3lAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnUGV0ZXInLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnR3JpZmZpbicsXG4gICAgICAgICAgICAgICAgZW1haWw6ICdwZXRlci1ncmlmZmluQGdtYWlsLmNvbScsXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTc6MDAnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogODAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogNjAsXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0gXG5dO1xuXG4gICAgLy8gZGlyZWN0aW9uczogWydVSScsICdQSFAnLCAnR08nLCAnSlMnXVxuXG4gICAgLy8gZGlyZWN0aW9uczogW1xuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBuYW1lOiAnVUknLFxuICAgIC8vICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0pTIENvcmUnLCAnRXNzYXkgVUknXSxcbiAgICAvLyAgICAgICAgIGZpbHRlcnM6IFsnVUkgMSddXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6ICdQSFAnLFxuICAgIC8vICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0Vzc2F5IFBIUCddLFxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydQSFAgMSddXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6ICdHTycsXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnRXNzYXkgR08nXSxcbiAgICAvLyAgICAgICAgIGZpbHRlcnM6IFsnR08gMSddXG4gICAgLy8gICAgIH1cbiAgICAvLyBdXG4vLyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgcG9wdXBGb3JtYXRUcGwgPSByZXF1aXJlKCcuL3RwbC9wb3B1cEZvcm1hdFRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgUG9wdXBGb3JtYXRWaWV3IHtcbiAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybWF0LWFkZGVkJyk7XG4gICAgICB0aGlzLnJlbmRlckdyb3VwKCk7XG4gICB9XG5cbiAgIHNldEdyb3VwIChncm91cCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZSA9IHBvcHVwRm9ybWF0VHBsKGdyb3VwKTtcbiAgIH1cbiAgIFxuICAgcmVuZGVyR3JvdXAgKCkge1xuICAgICAgdGhpcy5tb2RhbC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcbiAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICB9XG5cbiAgIGFkZExpc3RlbmVycyAoKSB7XG4gICB9XG5cbiAgIG9wZW4gKCkge1xuICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICB9XG5cbiAgIGNsb3NlICgpIHtcbiAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgfVxuICAgXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wdXBGb3JtYXRWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBGb3JtYXRWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBwb3B1cEZvcm1hdFRwbCAodGVzdExpc3QpIHtcbiAgICBsZXQgdGVzdHMgPSAnJztcblxuICAgIHRlc3RMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdGVzdHMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJ0ZXN0LWxpc3QtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+JHt0ZXN0c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwb3B1cEZvcm1hdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9wb3B1cEZvcm1hdFRwbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
=======
/******/ ]);
<<<<<<< HEAD
>>>>>>> 9821687d6415b424105a46bbca993fecb1e3a210
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2YwZjM3YmE1MWM2NWY5MmYyYTciLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9Nb2RlbC9UZXN0LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvRmlsdGVycy9Nb2RlbC9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvZGVmYXVsdERpcmV0aW9ucy5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JvdXBUcGwiLCJyZXF1aXJlIiwiR3JvdXBWaWV3IiwidGVtcGxhdGUiLCJhZGRMaXN0ZW5lcnMiLCJncm91cCIsImdyb3Vwc0Jsb2NrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJEaXJlY3Rpb25Nb2RlbCIsIlNldHRpbmdzTW9kZWwiLCJkaXJlY3Rpb25zIiwiZGlyZWN0aW9uTmFtZXMiLCJpdGVtIiwiVGVzdCIsIkZpbHRlciIsInRlc3RMaXN0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsIkFwcCIsImdyb3VwTGlzdCIsImRlZmF1bHREaXJldGlvbnMiLCJhcHAiLCJzZXR0aW5nc01vZGVsIiwic3RhcnQiLCJHcm91cENvbnRyb2xsZXIiLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJzdWJzY3JpYmUiLCJncm91cENvbnRyb2xsZXIiLCJzZXR0aW5nc0NvbnRyb2xsZXIiLCJnZXREaXJlY3Rpb25OYW1lcyIsInNob3dHcm91cExpc3QiLCJzdWIiLCJhZGRHcm91cCIsIkdyb3VwTGlzdFZpZXciLCJQb3B1cEFkZEdyb3VwVmlldyIsImdyb3VwTGlzdFZpZXciLCJyZW5kZXIiLCJwb3B1cEFkZEdyb3VwVmlldyIsInJlbmRlclBvcHVwIiwiYXBwZW5kR3JvdXAiLCJncm91cExpc3RUcGwiLCJsZWZ0QmxvY2siLCJncm91cFZpZXciLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiYWRkR3JvdXBCdG4iLCJzZXR0aW5nc0J0biIsInB1YiIsImdyb3VwUG9wdXBUcGwiLCJkaXJlY3Rpb25MaXN0IiwibW9kYWwiLCJpbm5lckhUTUwiLCJvcGVuIiwiY2xvc2VHcm91cEJ0biIsImdlbmVyYXRlRGF0YSIsImNsb3NlIiwiZ3JvdXBOYW1lRWxlbSIsImdyb3VwRGlyZWN0aW9uRWxlbSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwidGVzdHMiLCJhY3Rpb25MaXN0IiwiY29uZGl0aW9uTGlzdCIsIlBvcHVwU2V0dGluZ3NWaWV3IiwicG9wdXBTZXR0aW5nc1ZpZXciLCJzZXR0aW5nc1BvcHVwVHBsIiwic2VsZWN0ZWREaXJlY3Rpb24iLCJtb2RlIiwic2V0RGlyZWN0aW9uTmFtZXMiLCJjb25zb2xlIiwibG9nIiwiZGlyZWN0aW9uU2VsZWN0Iiwic2VsZWN0VGVzdEJ0biIsInNlbGVjdEZpbHRlckJ0biIsImFkZERpcmVjdGlvblBvcHVwIiwiYWRkVGVzdFBvcHVwIiwiYWRkRmlsdGVyUG9wdXAiLCJ1bnN1YiIsImUiLCJ0YXJnZXQiLCJkaXJlY3Rpb25MaXN0VHBsIiwiZmlsdGVyTGlzdFRwbCIsInRlc3RMaXN0VHBsIiwiZmlsdGVycyIsImZpbHRlciIsInRlc3RzTGlzdCIsInRlc3QiLCJ0ZXN0RGF5cyIsImRhdGUiLCJ0aW1lIiwicGVvcGxlIiwibGFzdE5hbWUiLCJlbWFpbCIsInRlc3REYXkiLCJncmFkZXMiLCJFbmcxIiwiRW5nMiIsIkVuZzMiLCJFbmc0IiwiQ29yZSIsIkVzc2F5IiwiYWRkVGVzdCIsInRlc3RMaXN0VUkiLCJ0ZXN0TGlzdEpTIiwidGVzdExpc3RQSFAiLCJ0ZXN0TGlzdEdPIiwiYWRkRmlsdGVyIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7O0lBRU1BLFE7QUFDRix3QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7Ozs0QkFFSUMsTyxFQUFTQyxJLEVBQU07QUFDaEIsZ0JBQUksS0FBS0YsUUFBTCxDQUFjQyxPQUFkLENBQUosRUFBNEI7QUFDeEIscUJBQUtELFFBQUwsQ0FBY0MsT0FBZCxFQUF1QkUsT0FBdkIsQ0FBK0IsVUFBQ0MsRUFBRDtBQUFBLDJCQUFRQSxHQUFHRixJQUFILENBQVI7QUFBQSxpQkFBL0I7QUFDSDtBQUNKOzs7NEJBRUlELE8sRUFBU0csRSxFQUFJO0FBQ2QsZ0JBQUksQ0FBQyxLQUFLSixRQUFMLENBQWNDLE9BQWQsQ0FBTCxFQUE2QjtBQUN6QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLElBQXlCLEVBQXpCO0FBQ0g7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LEVBQXFELEdBQXJELEVBQTBELEVBQTFEO0FBQ0F4RixpQkFBaUIsQ0FBakIsRUFBb0IyRixTQUFwQixDQUE4QkYsV0FBOUIsRUFBMkMsU0FBM0MsRUFBc0QsR0FBdEQsRUFBMkQsRUFBM0Q7QUFDQXpGLGlCQUFpQixDQUFqQixFQUFvQjJGLFNBQXBCLENBQThCRCxVQUE5QixFQUEwQyxNQUExQyxFQUFrRCxHQUFsRCxFQUF1RCxFQUF2RDs7QUFFQTFILE9BQU9DLE9BQVAsR0FBaUIrQixnQkFBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAzZjBmMzdiYTUxYzY1ZjkyZjJhNyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE1lZGlhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWIgKGNoYW5uZWwpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZ3JvdXBUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cFRwbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBUcGwoZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdyb3VwICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtd3JhcHBlcicpO1xyXG5cclxuICAgICAgICBncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEdyb3VwTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdGluZ1Nlc3Npb24gKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKTtcclxuXHJcbmNsYXNzIFNldHRpbmdzTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGlvbk5hbWVzICgpIHtcclxuICAgIFx0bGV0IGRpcmVjdGlvbk5hbWVzID0gW107XHJcblxyXG4gICAgXHR0aGlzLmRpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIFx0ZGlyZWN0aW9uTmFtZXMucHVzaChpdGVtLm5hbWUpO1xyXG4gICAgXHR9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbk5hbWVzO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IFRlc3QgPSByZXF1aXJlKCcuLi8uLi9UZXN0cy9Nb2RlbC9UZXN0LmpzJyksXHJcbiAgICBGaWx0ZXIgPSByZXF1aXJlKCcuLi8uLi9GaWx0ZXJzL01vZGVsL0ZpbHRlci5qcycpO1xyXG5cclxuY2xhc3MgRGlyZWN0aW9uTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0ICh0ZXN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlciAodGVzdExpc3QsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdExpc3QsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IERpcmVjdGlvbk1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuICAgIGxldCBBcHAgPSByZXF1aXJlKCcuL0FwcC5qcycpLFxyXG4gICAgICAgIGdyb3VwTGlzdCA9IHJlcXVpcmUoJy4vdGVzdERhdGEnKSxcclxuICAgICAgICBkZWZhdWx0RGlyZXRpb25zID0gcmVxdWlyZSgnLi9kZWZhdWx0RGlyZXRpb25zJyk7XHJcblxyXG5cclxuICAgIGxldCBhcHAgPSBuZXcgQXBwKGdyb3VwTGlzdCk7XHJcblxyXG4gICAgYXBwLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9ucyA9IGRlZmF1bHREaXJldGlvbnM7XHJcbiAgICBhcHAuc3RhcnQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcclxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc01vZGVsID0gbmV3IFNldHRpbmdzTW9kZWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cExpc3QpLFxyXG4gICAgICAgICAgICBzZXR0aW5nc0NvbnRyb2xsZXIgPSBuZXcgU2V0dGluZ3NDb250cm9sbGVyKHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zLCB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZ3JvdXBDb250cm9sbGVyLnNob3dHcm91cExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsIChncm91cCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFkZEdyb3VwKGdyb3VwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRHcm91cCAoZ3JvdXApIHtcclxuICAgICAgICB0aGlzLmdyb3VwTGlzdC5wdXNoKGdyb3VwKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXHJcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxyXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KCk7XHJcblxyXG4gICAgICAgIGdyb3VwTGlzdFZpZXcucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XHJcblxyXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcclxuICAgICAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBMaXN0Vmlldy5hcHBlbmRHcm91cChncm91cCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cExpc3RUcGwuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBWaWV3LmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBsZXQgbGVmdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29sdW1uJyk7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcclxuXHJcbiAgICAgICAgbGVmdEJsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZEdyb3VwIChncm91cCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcclxuICAgICAgICB0aGlzLmdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcclxuICAgICAgICB0aGlzLmdyb3VwVmlldy5zZXRHcm91cCh0aGlzLmdyb3VwKTtcclxuICAgICAgICB0aGlzLmdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKSxcclxuICAgICAgICAgICAgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0dGluZ3MtYnRuJyk7XHJcblxyXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cFBvcHVwOm9wZW4nKSk7XHJcbiAgICAgICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicpKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwTGlzdFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkdyb3VwPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2std3JhcHBlciBncm91cC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWdyb3VwLWJ0blwiPmFkZCBncm91cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cExpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBUcGwgKGdyb3VwKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICAvLyBkaXJlY3Rpb25MaXN0INC80Ysg0LTQvtC70LbQvdGLINCx0YDQsNGC0Ywg0L7RgtC60YPQtNCwINGC0L5cclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbJ3VpJywgJ3BocCcsICdqcycsICdqYXZhJ107XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBncm91cFBvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZW5lcmF0ZURhdGEoKSxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGEuZGlyZWN0aW9uIC0g0LzRiyDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0L3QsNGI0LjRhSDRgdC10YLRgtC40L3Qs9GBXHJcbiAgICAgICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGRhdGEubmFtZSwgZGF0YS5kaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1uYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLWRpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhID0ge307XHJcblxyXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBncm91cFBvcHVwVHBsIChkaXJlY3Rpb25MaXN0KSB7XHJcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xyXG5cclxuICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJncm91cC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJtb2RhbC1ncm91cC1uYW1lXCIgY2xhc3M9XCJtb2RhbC1ncm91cC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBncm91cCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibW9kYWwtZ3JvdXAtZGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cFBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBUZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ncmFkZSA9IGdyYWRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFRlc3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvVGVzdHMvTW9kZWwvVGVzdC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMudGVzdHMgPSB0ZXN0cztcclxuICAgICAgICB0aGlzLmFjdGlvbkxpc3QgPSBbJ2F2ZXJhZ2UnLCAnbWF4JywgJ21pbicsICdlcXVhbCddO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uTGlzdCA9IFsnPicsICc+PScsICc9JywgJzw9JywgJzwnXTtcclxuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRmlsdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRmlsdGVycy9Nb2RlbC9GaWx0ZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXHJcbiAgICAvLyBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICAvLyBQb3B1cEFkZERpcmVjdGlvblZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRGlyZWN0aW9uVmlldy5qcycpLFxyXG4gICAgLy8gU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgIC8vIERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9ucywgZGlyZWN0aW9uTmFtZXMpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTmFtZXMgPSBkaXJlY3Rpb25OYW1lcztcclxuICAgICAgICAvLyB0aGlzLnNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbChkZWZhdWx0RGlyZWN0aW9ucyk7XHJcbiAgICAgICAgLy8gdGhpcy5wb3B1cFNldHRpbmdzVmlldyA9IG5ldyBQb3B1cFNldHRpbmdzVmlldyhkaXJlY3Rpb25zKTtcclxuICAgICAgICAvLyB0aGlzLnBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IG5ldyBQb3B1cEFkZERpcmVjdGlvblZpZXcoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgbGV0IHBvcHVwU2V0dGluZ3NWaWV3ID0gbmV3IFBvcHVwU2V0dGluZ3NWaWV3KHRoaXMuZGlyZWN0aW9ucywgdGhpcy5kaXJlY3Rpb25OYW1lcyk7XHJcbiAgICAgICAgICAgICBwb3B1cFNldHRpbmdzVmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBzdWJzY3JpYmUgKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3Vic2NyaWJlT3BlblBvcHVwcygpO1xyXG4gICAgLy8gICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uKCk7XHJcbiAgICAvLyAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3RGaWx0ZXIoKTtcclxuICAgIC8vICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdFRlc3QoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzdWJzY3JpYmVPcGVuUG9wdXBzICgpIHtcclxuICAgIC8vICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuXHJcblxyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zWzBdO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3Vic2NyaWJlQ2xvc2VQb3B1cCgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCksXHJcbiAgICAvLyAgICAgICAgICAgICBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcuc2V0RGlyZWN0aW9uTGlzdChkaXJlY3Rpb25zKTtcclxuICAgIC8vICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gICAgIG1lZGlhdG9yLnN1YignYWRkRGlyZWN0aW9uUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IHBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IG5ldyBQb3B1cEFkZERpcmVjdGlvblZpZXcoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHBvcHVwQWRkRGlyZWN0aW9uVmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3Vic2NyaWJlQ2xvc2VQb3B1cCgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHN1YnNjcmliZUNsb3NlUG9wdXAgKCkge1xyXG4gICAgLy8gICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5jbG9zZSgpO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICBtZWRpYXRvci5zdWIoJ2FkZERpcmVjdGlvblBvcHVwOmNsb3NlJywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwQWRkRGlyZWN0aW9uVmlldy5jbG9zZSgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3Lm9wZW4oKTtcclxuXHJcbiAgICAvLyAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiAoKSB7XHJcbiAgICAvLyBcdG1lZGlhdG9yLnN1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIChkaXJlY3Rpb25OYW1lKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IGRpcmVjdGlvbk5hbWUpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzdWJzY3JpYmVTZWxlY3RUZXN0ICgpIHtcclxuICAgIC8vICAgICBtZWRpYXRvci5zdWIoJ3Rlc3Q6c2VsZWN0JywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzdWJzY3JpYmVTZWxlY3RGaWx0ZXIgKCkge1xyXG4gICAgLy8gICAgIG1lZGlhdG9yLnN1YignZmlsdGVyOnNlbGVjdCcsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5tb2RlID0gJ0YnO1xyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3Vic2NyaWJlQWRkRGlyZWN0aW9uICgpIHtcclxuICAgIC8vICAgICBtZWRpYXRvci5zdWIoJ2RpcmVjdGlvbjphZGQnLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBzZXR0aW5nc1BvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBTZXR0aW5nc1ZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKGRpcmVjdGlvbnMsIGRpcmVjdGlvbk5hbWVzKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbk5hbWVzID0gZGlyZWN0aW9uTmFtZXM7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IGRpcmVjdGlvbnNbMF07XHJcbiAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTmFtZXMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJlUmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbk5hbWVzICgpIHtcclxuICAgICAgICAvLyBsZXQgZGlyZWN0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpcmVjdGlvbi1zZWxlY3QnKSxcclxuICAgICAgICAvLyAgICAgb3B0aW9uTGlzdCA9ICcnLFxyXG4gICAgICAgIC8vICAgICB0cGwgPSAnJztcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zZXR0aW5ncy5kaXJlY3Rpb25MaXN0LmZvckVhY2goKGRpcmVjdGlvbiwgaSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBvcHRpb25MaXN0ICs9IGBcclxuICAgICAgICAvLyAgICAgICAgIDxvcHRpb24gJHsoaSA9IDApID8gJ3NlbGVjdGVkJyA6ICcnfSB2YWx1ZT1cIiR7ZGlyZWN0aW9uLm5hbWV9XCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgJHtkaXJlY3Rpb24ubmFtZX1cclxuICAgICAgICAvLyAgICAgICAgIDwvb3B0aW9uPlxyXG4gICAgICAgIC8vICAgICBgO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBsZXQgZGlyZWN0aW9uTmFtZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uTmFtZXMucHVzaChpdGVtLm5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5jb25zb2xlLmxvZyh0aGlzLmRpcmVjdGlvbnMpO1xyXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25OYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIHNlbGVjdFRlc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdC1zZXR0aW5ncy1idG4nKSxcclxuICAgICAgICAgICAgc2VsZWN0RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlci1zZXR0aW5ncy1idG4nKSxcclxuICAgICAgICAgICAgYWRkRGlyZWN0aW9uUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpcmVjdGlvbi1idG4nKSxcclxuICAgICAgICAgICAgYWRkVGVzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXN0LWJ0bicpLFxyXG4gICAgICAgICAgICBhZGRGaWx0ZXJQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZmlsdGVyLWJ0bicpO1xyXG5cclxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0VGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCd0ZXN0OnNlbGVjdCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxlY3RGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZmlsdGVyOnNlbGVjdCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGREaXJlY3Rpb25Qb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGFkZFRlc3RQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgbWVkaWF0b3IucHViKCdhZGRGaWx0ZXJQb3B1cDpvcGVuJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIGFkZEZpbHRlclBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBtZWRpYXRvci5wdWIoJ2FkZFRlc3RQb3B1cDpvcGVuJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwTmFtZScpLFxyXG4gICAgICAgICAgICBncm91cERpcmVjdGlvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cERpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhID0ge307XHJcblxyXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBkaXJlY3Rpb25MaXN0VHBsID0gcmVxdWlyZSgnLi9kaXJlY3Rpb25MaXN0VHBsLmpzJyksXHJcbiAgICBmaWx0ZXJMaXN0VHBsID0gcmVxdWlyZSgnLi4vLi4vLi4vRmlsdGVycy9WaWV3L3RwbC9maWx0ZXJMaXN0VHBsLmpzJyksXHJcbiAgICB0ZXN0TGlzdFRwbCA9IHJlcXVpcmUoJy4uLy4uLy4uL1Rlc3RzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzJyk7XHJcblxyXG5mdW5jdGlvbiBzZXR0aW5nc1BvcHVwVHBsIChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xyXG4gICAgbGV0IGRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0VHBsKGRpcmVjdGlvbnMsIHNlbGVjdGVkRGlyZWN0aW9uLm5hbWUpLFxyXG4gICAgICAgIGZpbHRlckxpc3QgPSBmaWx0ZXJMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLmZpbHRlckxpc3QpLFxyXG4gICAgICAgIHRlc3RMaXN0ID0gdGVzdExpc3RUcGwoc2VsZWN0ZWREaXJlY3Rpb24udGVzdExpc3QpO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBpZD1cInNldHRpbmdzLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb2x1bW4tc2V0dGluZ3NcIj4ke2RpcmVjdGlvbkxpc3R9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwidGVzdC1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5UPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJmaWx0ZXItc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+RjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJHttb2RlID09PSAnVCc/IHRlc3RMaXN0OiBmaWx0ZXJMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2V0dGluZ3NQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBkaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0LCBzZWxlY3RlZERpcmVjdGlvbikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSAnJztcclxuXHJcbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPScke2l0ZW19JyAke3NlbGVjdGVkRGlyZWN0aW9uID09PSBpdGVtPyAnc2VsZWN0ZWQnOiAnJ30+JHtpdGVtfTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJkaXJlY3Rpb24tbGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1kaXJlY3Rpb24tYnRuXCI+YWRkIGRpcmVjdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRpcmVjdGlvbkxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9kaXJlY3Rpb25MaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZmlsdGVyTGlzdFRwbCAoZmlsdGVyTGlzdCkge1xyXG4gICAgbGV0IGZpbHRlcnMgPSAnJztcclxuXHJcbiAgICBmaWx0ZXJMaXN0LmZvckVhY2goKGZpbHRlcikgPT4ge1xyXG4gICAgICAgIGZpbHRlcnMgKz0gYDxkaXYgY2xhc3M9XCJmaWx0ZXJcIj4ke2ZpbHRlcn08L2Rpdj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZmlsdGVyLWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkZpbHRlcnM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0XCI+JHtmaWx0ZXJzfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1maWx0ZXItYnRuIGJ0blwiPmFkZCBmaWx0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmaWx0ZXJMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRmlsdGVycy9WaWV3L3RwbC9maWx0ZXJMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gdGVzdExpc3RUcGwgKHRlc3RzTGlzdCkge1xyXG4gICAgbGV0IHRlc3RzID0gJyc7XHJcblxyXG4gICAgdGVzdHNMaXN0LmZvckVhY2goKHRlc3QpID0+IHtcclxuICAgICAgICB0ZXN0cyArPSBgPGRpdiBjbGFzcz1cInRlc3RcIj4ke3Rlc3QubmFtZX08L2Rpdj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGVzdC1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5UZXN0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+JHt0ZXN0c308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGVzdC1idG4gYnRuXCI+YWRkIHRlc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0TGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwTGlzdCA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRHAtMTE3JyxcclxuICAgICAgICB0ZXN0TGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdKUyBDb3JlJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZmlsdGVyTGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0pTIENvcmUnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogODBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHRlc3REYXlzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHBlb3BsZTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGFycnknLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdQb3R0ZXInLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdoYXJyeS1wb3R0ZXJAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDI2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnUm9uJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnV2lzbGV5JyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAncm9uLXdpc2xleUBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE3OjAwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDgwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDkwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDIxMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgbmFtZTogJ0RwLTEyMScsXHJcbiAgICAgICAgdGVzdExpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnR28gQ29yZScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRW5nMScsICdFbmcyJywgJ0VuZzMnLCAnRW5nNCddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydHbyBDb3JlJ10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXN0RGF5czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwZW9wbGU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0hlcm1pb25lJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnR3JhbmdlcicsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hlcm1pb25lLWdyYW5nZXJAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDI2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV2aWxsZScsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ0xvbmdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICduZXZpbGxlLWxvbmdib3R0b21AZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdEcC0xMjMnLFxyXG4gICAgICAgIHRlc3RMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BIUCBDb3JlJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgZmlsdGVyTGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ1BIUCBDb3JlJ10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXN0RGF5czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwZW9wbGU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0RyYWNvJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnTWFsZm95JyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnZHJhY28tbWFsZm95QGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTU6MzAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogOTUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1BldGVyJyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnR3JpZmZpbicsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3BldGVyLWdyaWZmaW5AZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSBcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdGVzdERhdGEuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyk7XHJcblxyXG5sZXQgZGVmYXVsdERpcmV0aW9ucyA9IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEaXJlY3Rpb25Nb2RlbCgnVUknKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGlyZWN0aW9uTW9kZWwoJ0pTJyksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERpcmVjdGlvbk1vZGVsKCdQSFAnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEaXJlY3Rpb25Nb2RlbCgnR08nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG5cclxuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRUZXN0KCdFbmcgMScsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMF0uYWRkVGVzdCgnRW5nIDInLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzBdLmFkZFRlc3QoJ0VuZyAzJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRUZXN0KCdFbmcgNCcsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMF0uYWRkVGVzdCgnRXNzYXkgVUknLCAyMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZFRlc3QoJ0VuZyAxJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1sxXS5hZGRUZXN0KCdFbmcgMicsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMV0uYWRkVGVzdCgnRW5nIDMnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZFRlc3QoJ0pTIENvcmUnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzFdLmFkZFRlc3QoJ0Vzc2F5IEpTJywgMjAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRUZXN0KCdFbmcgMScsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbMl0uYWRkVGVzdCgnRW5nIDInLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzJdLmFkZFRlc3QoJ1BIUCBDb3JlJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRUZXN0KCdFc3NheSBQSFAnLCAyMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0VuZyAxJywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdFbmcgMicsIDEwMCk7XHJcbmRlZmF1bHREaXJldGlvbnNbM10uYWRkVGVzdCgnRW5nIDMnLCAxMDApO1xyXG5kZWZhdWx0RGlyZXRpb25zWzNdLmFkZFRlc3QoJ0VuZyA0JywgMTAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdHTyBDb3JlJywgMjAwKTtcclxuZGVmYXVsdERpcmV0aW9uc1szXS5hZGRUZXN0KCdFc3NheSBHTycsIDMwMCk7XHJcblxyXG5sZXQgdGVzdExpc3RVSSA9IFsnRW5nIDEnLCAnRW5nIDInLCAnRW5nIDMnLF0sXHJcbiAgICB0ZXN0TGlzdEpTID0gWydFbmcgMScsXSxcclxuICAgIHRlc3RMaXN0UEhQID0gWydQSFAgQ29yZSddLFxyXG4gICAgdGVzdExpc3RHTyA9IFsnRW5nIDEnLCAnRW5nIDInLCAnRW5nIDMnLCdFbmcgNCddO1xyXG5cclxuZGVmYXVsdERpcmV0aW9uc1swXS5hZGRGaWx0ZXIodGVzdExpc3RVSSwgJ2F2ZXJhZ2UnLCAnPicsIDYwKTtcclxuZGVmYXVsdERpcmV0aW9uc1sxXS5hZGRGaWx0ZXIodGVzdExpc3RKUywgJ2F2ZXJhZ2UnLCAnPicsIDc1KTtcclxuZGVmYXVsdERpcmV0aW9uc1syXS5hZGRGaWx0ZXIodGVzdExpc3RQSFAsICdhdmVyYWdlJywgJz4nLCA4MCk7XHJcbmRlZmF1bHREaXJldGlvbnNbM10uYWRkRmlsdGVyKHRlc3RMaXN0R08sICdzdW1tJywgJz4nLCA3MCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHREaXJldGlvbnM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9kZWZhdWx0RGlyZXRpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
>>>>>>> settings
