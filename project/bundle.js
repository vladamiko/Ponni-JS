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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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

var SettingsModel = function () {
    function SettingsModel(directions) {
        _classCallCheck(this, SettingsModel);

        this.directions = directions;
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
    }, {
        key: 'addDirection',
        value: function addDirection(name) {
            this.directions.push(new Direction(name));
        }
    }]);

    return SettingsModel;
}();

module.exports = SettingsModel;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    GroupView = __webpack_require__(4),
    GroupModel = __webpack_require__(5),
    groupPopupTpl = __webpack_require__(10);

var PopupAddGroupView = function () {
    function PopupAddGroupView() {
        _classCallCheck(this, PopupAddGroupView);

        this.directionList = [];
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
        key: 'setDirectionList',
        value: function setDirectionList(directionList) {
            this.directionList = directionList;
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var closeGroupBtn = document.querySelector('#close-group-btn');

            closeGroupBtn.addEventListener('click', function () {
                mediator.pub('group:added');
                mediator.unsub('group:added');
            });
        }
    }, {
        key: 'open',
        value: function open() {
            this.modal.classList.add('visible');
        }
    }, {
        key: 'generateData',
        value: function generateData() {
            var groupNameElem = document.querySelector('#modal-group-name'),
                groupDirectionElem = document.querySelector('#modal-group-direction'),
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

    return PopupAddGroupView;
}();

module.exports = PopupAddGroupView;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var groupTpl = __webpack_require__(9),
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopupSettingsView = __webpack_require__(7),
    PopupAddGroupView = __webpack_require__(3),
    SettingsModel = __webpack_require__(2),
    mediator = __webpack_require__(0);

var SettingsController = function () {
    function SettingsController(settings) {
        _classCallCheck(this, SettingsController);

        this.settingsModel = new SettingsModel(settings);
        this.popupSettingsView = new PopupSettingsView();

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
        }
    }, {
        key: 'subscribeClosePopup',
        value: function subscribeClosePopup() {
            var _this2 = this;

            mediator.sub('settingsPopup:close', function () {
                _this2.popupSettingsView.close();
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
    }]);

    return SettingsController;
}();

module.exports = SettingsController;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    settingsPopupTpl = __webpack_require__(8);

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
                selectFilterBtn = document.querySelector('#filter-settings-btn');

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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupTpl(group) {
    return '<div class="group">\n                <h2 class="group-title">' + group.name + ' ' + group.direction + '</h2>\n                <div>\n                    <button class="btn">format added</button>\n                </div>\n            </div>';
}

module.exports = groupTpl;

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var groupListTpl = __webpack_require__(12),
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupListTpl() {
    return '<section id="group-block">\n                <div class="group-block-head">\n                    <h1>Group</h1>\n                    <button id="settings-btn" class="btn btn-cog">\n                        <i class="fa fa-cog" aria-hidden="true"></i>\n                    </button>\n                </div>\n                <div class="group-block-body">\n                    <div class="group-block-wrapper group-wrapper"></div>\n                        <button class="btn add-group-btn">add group</button>\n                    </div>\n            </section>';
}

module.exports = groupListTpl;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupListView = __webpack_require__(11),
    GroupView = __webpack_require__(4),
    GroupModel = __webpack_require__(5),
    PopupAddGroupView = __webpack_require__(3),
    SettingsModel = __webpack_require__(2),
    mediator = __webpack_require__(0);

var GroupController = function () {
    function GroupController(groups) {
        _classCallCheck(this, GroupController);

        this.groups = groups;
        this.subscribeOpen();
    }

    _createClass(GroupController, [{
        key: 'showGroupList',
        value: function showGroupList() {
            var groupListView = new GroupListView();

            groupListView.render();
        }
    }, {
        key: 'subscribeOpen',
        value: function subscribeOpen() {
            var _this = this;

            mediator.sub('groupPopup:open', function () {
                _this.subscribeAddGroup();
            });
        }
    }, {
        key: 'subscribeAddGroup',
        value: function subscribeAddGroup() {
            mediator.sub('group:added', function () {
                var popupAddGroupView = new PopupAddGroupView(),
                    groupView = new GroupView(),
                    groupData = {},
                    group = {};

                groupData = popupAddGroupView.generateData();

                group = new GroupModel(groupData.name, groupData.direction);

                mediator.pub('group:created', group);

                groupView.setGroup(group);

                popupAddGroupView.close();

                groupView.renderGroup();
            });
        }
    }]);

    return GroupController;
}();

module.exports = GroupController;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var DirectionModel = __webpack_require__(15),
        FilterModel = __webpack_require__(16),
        TestModel = __webpack_require__(17),
        SettingsModel = __webpack_require__(2),
        SettingsController = __webpack_require__(6),
        GroupModel = __webpack_require__(5),
        GroupView = __webpack_require__(4),
        GroupListView = __webpack_require__(11),
        groupListTpl = __webpack_require__(12),
        PopupAddGroupView = __webpack_require__(3),
        PopupSettingsView = __webpack_require__(7),
        PopupAddFilterView = __webpack_require__(21),
        PopupAddDirectionView = __webpack_require__(23),
        PopupAddTestView = __webpack_require__(25),
        groupPopupTpl = __webpack_require__(10),
        groupTpl = __webpack_require__(9),
        settingsPopupTpl = __webpack_require__(8),
        GroupController = __webpack_require__(13),
        App = __webpack_require__(27),
        Mediator = __webpack_require__(0);

    var app = new App();

    app.start();
}

/***/ }),
/* 15 */
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
        key: 'getDirectionTest',
        value: function getDirectionTest(direction) {
            var _this = this;

            var obj = {
                UI: function UI() {
                    _this.testList = ['English 1', 'English 2', 'English 3', 'English 4', 'JS Core', 'Essay'];
                },
                GO: function GO() {
                    _this.testList = ['English 1', 'English 2', 'English 3', 'English 4', 'GO Core', 'Essay'];
                },
                PHP: function PHP() {
                    _this.testList = ['English 1', 'English 2', 'English 3', 'English 4', 'PHP Core', 'Essay'];
                }
            };

            return obj[direction]();
        }
    }, {
        key: 'getDirectionFilter',
        value: function getDirectionFilter(direction) {
            var _this2 = this;

            var obj = {
                UI: function UI() {
                    _this2.filterList = [{
                        name: 'English 1',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'English 2',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'English 3',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'English 4',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'JS Core',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'Essay',
                        action: action,
                        condition: condition,
                        grade: 60
                    }];
                },
                GO: function GO() {
                    _this2.filterList = [{
                        name: 'English 1',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'English 2',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'English 3',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'English 4',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'GO Core',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'Essay',
                        action: action,
                        condition: condition,
                        grade: 60
                    }];
                },
                PHP: function PHP() {
                    _this2.filterList = [{
                        name: 'English 1',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'English 2',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'English 3',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'English 4',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'PHP Core',
                        action: action,
                        condition: condition,
                        grade: 60
                    }, {
                        name: 'Essay',
                        action: action,
                        condition: condition,
                        grade: 60
                    }];
                }
            };

            return obj[direction]();
        }
    }, {
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterModel = function FilterModel(tests, action, condition, grade) {
    _classCallCheck(this, FilterModel);

    this.tests = tests;
    this.actionList = ['average', 'max', 'min', 'equal'];
    this.conditionList = ['>', '>=', '=', '<=', '<'];
    this.grade = grade;
}

// addTest, changeAction, changeCondition, changeGrade
;

module.export = FilterModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 17 */
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
    addFilterPopupTpl = __webpack_require__(22);

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
            var closeFilterBtn = document.querySelector('.close-filter-btn'),
                tests = document.querySelector('.left-column-filter'),
                testName = document.querySelector('.add-test-name'),
                actionSelect = document.querySelector('.modal-filter-action'),
                conditionSelect = document.querySelector('.modal-filter-condition'),
                testGrade = document.querySelector('.add-test-grade');

            closeFilterBtn.addEventListener('click', function () {
                mediator.pub('filterPopup:close');
                mediator.unsub('filterPopup:close');
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
/* 22 */
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    addDirectionPopupTpl = __webpack_require__(24);

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
                mediator.pub('directionPopup:close');
                mediator.unsub('directionPopup:close');
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addDirectionPopupTpl() {
    return '<div class="modal-content add-direction-popup">\n                <input type="text" class="add-direction-name" placeholder="Enter direction name">\n                <button class="btn btn-cog">\n                    <i class="fa fa-check close-direction-btn" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addDirectionPopupTpl;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    addTestPopupTpl = __webpack_require__(26);

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
            var closeTestBtn = document.querySelector('.close-test-btn'),
                testName = document.querySelector('.add-test-name');

            closeTestBtn.addEventListener('click', function () {
                mediator.pub('testPopup:close');
                mediator.unsub('testPopup:close');
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addTestPopupTpl() {
    return '<div class="modal-content add-test-popup">\n                <input type="text" class="add-test-name" placeholder="Enter test name">\n                <button class="btn btn-cog close-test-btn">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addTestPopupTpl;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(13),
    SettingsController = __webpack_require__(6),
    testData = __webpack_require__(28),
    mediator = __webpack_require__(0);

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.groups = [];
        this.directions = testData.directions;

        this.subscribe();
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
            var groupController = new GroupController(this.groups),
                settingsController = new SettingsController(this.directions);

            groupController.showGroupList();
        }
    }, {
        key: 'addGroup',
        value: function addGroup(group) {
            this.groups.push(group);
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            var _this = this;

            mediator.sub('group:created', function (group) {
                _this.groups.push(group);
            });
        }
    }]);

    return App;
}();

module.exports = App;

/***/ }),
/* 28 */
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

    directions: [{
        name: 'UI',
        tests: ['Eng1', 'Eng2', 'JS Core', 'Essay UI'],
        filters: ['UI 1']
    }, {
        name: 'PHP',
        tests: ['Eng1', 'Eng2', 'Essay PHP'],
        filters: ['PHP 1']
    }, {
        name: 'GO',
        tests: ['Eng1', 'Eng2', 'Essay GO'],
        filters: ['GO 1']
    }]
};

module.exports = testData;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTU0ZjgyYWRlYjQzNmUxN2E3MjEiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9kaXJlY3Rpb25MaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZEZpbHRlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGRGaWx0ZXJQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkVGVzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGRUZXN0UG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiU2V0dGluZ3NNb2RlbCIsImRpcmVjdGlvbnMiLCJkaXJlY3Rpb25OYW1lcyIsIml0ZW0iLCJuYW1lIiwiRGlyZWN0aW9uIiwicmVxdWlyZSIsIkdyb3VwVmlldyIsIkdyb3VwTW9kZWwiLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJkaXJlY3Rpb25MaXN0IiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJvcGVuIiwiYWRkTGlzdGVuZXJzIiwiY2xvc2VHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJ1bnN1YiIsImNsYXNzTGlzdCIsImFkZCIsImdyb3VwTmFtZUVsZW0iLCJncm91cERpcmVjdGlvbkVsZW0iLCJkaXJlY3Rpb24iLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJ2YWx1ZSIsInJlbW92ZSIsImdyb3VwVHBsIiwidGVtcGxhdGUiLCJncm91cCIsImdyb3Vwc0Jsb2NrIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiUG9wdXBTZXR0aW5nc1ZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJzZXR0aW5ncyIsInNldHRpbmdzTW9kZWwiLCJwb3B1cFNldHRpbmdzVmlldyIsInN1YnNjcmliZSIsInN1YnNjcmliZU9wZW5Qb3B1cHMiLCJzdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24iLCJzdWJzY3JpYmVTZWxlY3RGaWx0ZXIiLCJzdWJzY3JpYmVTZWxlY3RUZXN0Iiwic3ViIiwiZ2V0RGlyZWN0aW9uTmFtZXMiLCJzZWxlY3RlZERpcmVjdGlvbiIsIm1vZGUiLCJyZW5kZXJQb3B1cCIsInN1YnNjcmliZUNsb3NlUG9wdXAiLCJwb3B1cEFkZEdyb3VwVmlldyIsInNldERpcmVjdGlvbkxpc3QiLCJjbG9zZSIsImRpcmVjdGlvbk5hbWUiLCJmaW5kIiwicmVSZW5kZXJQb3B1cCIsInNldHRpbmdzUG9wdXBUcGwiLCJkaXJlY3Rpb25TZWxlY3QiLCJzZWxlY3RUZXN0QnRuIiwic2VsZWN0RmlsdGVyQnRuIiwiZSIsInRhcmdldCIsImRpcmVjdGlvbkxpc3RUcGwiLCJmaWx0ZXJMaXN0VHBsIiwidGVzdExpc3RUcGwiLCJmaWx0ZXJMaXN0IiwiZmlsdGVycyIsInRlc3RMaXN0IiwidGVzdHMiLCJncm91cExpc3RUcGwiLCJHcm91cExpc3RWaWV3IiwibGVmdEJsb2NrIiwiYWRkR3JvdXBCdG4iLCJzZXR0aW5nc0J0biIsIkdyb3VwQ29udHJvbGxlciIsImdyb3VwcyIsInN1YnNjcmliZU9wZW4iLCJncm91cExpc3RWaWV3IiwicmVuZGVyIiwic3Vic2NyaWJlQWRkR3JvdXAiLCJncm91cFZpZXciLCJncm91cERhdGEiLCJnZW5lcmF0ZURhdGEiLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiaW5pdCIsIkRpcmVjdGlvbk1vZGVsIiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJQb3B1cEFkZEZpbHRlclZpZXciLCJQb3B1cEFkZERpcmVjdGlvblZpZXciLCJQb3B1cEFkZFRlc3RWaWV3IiwiQXBwIiwiYXBwIiwic3RhcnQiLCJvYmoiLCJVSSIsIkdPIiwiUEhQIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJ0ZXN0TmFtZSIsIlRlc3QiLCJGaWx0ZXIiLCJleHBvcnQiLCJhY3Rpb25MaXN0IiwiY29uZGl0aW9uTGlzdCIsIm1heEdyYWRlIiwiZmlsdGVyIiwidGVzdHNMaXN0IiwidGVzdCIsImFkZEZpbHRlclBvcHVwVHBsIiwiY2xvc2VGaWx0ZXJCdG4iLCJhY3Rpb25TZWxlY3QiLCJjb25kaXRpb25TZWxlY3QiLCJ0ZXN0R3JhZGUiLCJnZW5lcmF0ZVRlc3RMaXN0IiwiYWN0aW9ucyIsImdlbmVyYXRlTGlzdCIsImNvbmRpdGlvbnMiLCJsaXN0IiwiYWRkRGlyZWN0aW9uUG9wdXBUcGwiLCJjbG9zZURpcmVjdGlvbkJ0biIsImFkZFRlc3RQb3B1cFRwbCIsImNsb3NlVGVzdEJ0biIsInRlc3REYXRhIiwiZ3JvdXBDb250cm9sbGVyIiwic2V0dGluZ3NDb250cm9sbGVyIiwic2hvd0dyb3VwTGlzdCJdLCJtYXBwaW5ncyI6Ijs7QUFB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Y2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NTRmODJhZGViNDM2ZTE3YTcyMSIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE1lZGlhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWIgKGNoYW5uZWwpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uTmFtZXMgKCkge1xyXG4gICAgXHRsZXQgZGlyZWN0aW9uTmFtZXMgPSBbXTtcclxuXHJcbiAgICBcdHRoaXMuZGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgXHRkaXJlY3Rpb25OYW1lcy5wdXNoKGl0ZW0ubmFtZSk7XHJcbiAgICBcdH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uTmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGlyZWN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbihuYW1lKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGdyb3VwUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0KTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZ3JvdXA6YWRkZWQnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2dyb3VwOmFkZGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1uYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1kaXJlY3Rpb24nKSxcclxuICAgICAgICAgICAgZGF0YSA9IHt9O1xyXG5cclxuICAgICAgICBkYXRhLmRpcmVjdGlvbiA9IGdyb3VwRGlyZWN0aW9uRWxlbS5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbS5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwVHBsID0gcmVxdWlyZSgnLi90cGwvZ3JvdXBUcGwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwVHBsKGdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBHcm91cE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlciAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBQb3B1cFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcclxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc01vZGVsID0gbmV3IFNldHRpbmdzTW9kZWwoc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcgPSBuZXcgUG9wdXBTZXR0aW5nc1ZpZXcoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVPcGVuUG9wdXBzKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdEZpbHRlcigpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0VGVzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZU9wZW5Qb3B1cHMgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zWzBdO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQ2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcuc2V0RGlyZWN0aW9uTGlzdChkaXJlY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlQ2xvc2VQb3B1cCAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uICgpIHtcclxuICAgIFx0bWVkaWF0b3Iuc3ViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgKGRpcmVjdGlvbk5hbWUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gZGlyZWN0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVNlbGVjdFRlc3QgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YigndGVzdDpzZWxlY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVNlbGVjdEZpbHRlciAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdmaWx0ZXI6c2VsZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnRic7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgc2V0dGluZ3NQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwU2V0dGluZ3NWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNldHRpbmdzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlUmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbk5hbWVzIChkaXJlY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIHNlbGVjdFRlc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdC1zZXR0aW5ncy1idG4nKSxcclxuICAgICAgICAgICAgc2VsZWN0RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlci1zZXR0aW5ncy1idG4nKTtcclxuXHJcbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGVjdFRlc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YigndGVzdDpzZWxlY3QnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2ZpbHRlcjpzZWxlY3QnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZURhdGEgKCkge1xyXG4gICAgICAgIGxldCBncm91cE5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBOYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwRGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBTZXR0aW5nc1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGRpcmVjdGlvbkxpc3RUcGwgPSByZXF1aXJlKCcuL2RpcmVjdGlvbkxpc3RUcGwuanMnKSxcclxuICAgIGZpbHRlckxpc3RUcGwgPSByZXF1aXJlKCcuL2ZpbHRlckxpc3RUcGwuanMnKSxcclxuICAgIHRlc3RMaXN0VHBsID0gcmVxdWlyZSgnLi90ZXN0TGlzdFRwbC5qcycpO1xyXG5cclxuZnVuY3Rpb24gc2V0dGluZ3NQb3B1cFRwbCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgIGxldCBkaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdFRwbChkaXJlY3Rpb25zLCBzZWxlY3RlZERpcmVjdGlvbi5uYW1lKSxcclxuICAgICAgICBmaWx0ZXJMaXN0ID0gZmlsdGVyTGlzdFRwbChzZWxlY3RlZERpcmVjdGlvbi5maWx0ZXJzKSxcclxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLnRlc3RzKTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJzZXR0aW5ncy1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZmlsdGVyLXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1mdFwiPkY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7bW9kZSA9PT0gJ1QnPyB0ZXN0TGlzdDogZmlsdGVyTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdzUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBUcGwgKGdyb3VwKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBQb3B1cFRwbCAoZGlyZWN0aW9uTGlzdCkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSAnJztcclxuXHJcbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwiZ3JvdXAtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibW9kYWwtZ3JvdXAtbmFtZVwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtZGlyZWN0aW9uXCI+JHtvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWdyb3VwLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBMaXN0VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgbGV0IGxlZnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbHVtbicpO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBMaXN0VHBsKCk7XHJcblxyXG4gICAgICAgIGxlZnRCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgYWRkR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpLFxyXG4gICAgICAgICAgICBzZXR0aW5nc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1idG4nKTtcclxuXHJcbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2dyb3VwUG9wdXA6b3BlbicpKTtcclxuICAgICAgICBzZXR0aW5nc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1Yignc2V0dGluZ3NQb3B1cDpvcGVuJykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTGlzdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBMaXN0VHBsICgpIHtcclxuICAgIHJldHVybiBgPHNlY3Rpb24gaWQ9XCJncm91cC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+R3JvdXA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2stYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay13cmFwcGVyIGdyb3VwLXdyYXBwZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZ3JvdXAtYnRuXCI+YWRkIGdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cHMpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcclxuICAgICAgICB0aGlzLnN1YnNjcmliZU9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KCk7XHJcblxyXG4gICAgICAgIGdyb3VwTGlzdFZpZXcucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlT3BlbiAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cFBvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQWRkR3JvdXAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVBZGRHcm91cCAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDphZGRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCksXHJcbiAgICAgICAgICAgICAgICBncm91cFZpZXcgPSBuZXcgR3JvdXBWaWV3KCksXHJcbiAgICAgICAgICAgICAgICBncm91cERhdGEgPSB7fSxcclxuICAgICAgICAgICAgICAgIGdyb3VwID0ge307XHJcblxyXG4gICAgICAgICAgICBncm91cERhdGEgPSBwb3B1cEFkZEdyb3VwVmlldy5nZW5lcmF0ZURhdGEoKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwID0gbmV3IEdyb3VwTW9kZWwoZ3JvdXBEYXRhLm5hbWUsIGdyb3VwRGF0YS5kaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcclxuXHJcbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgICBsZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXHJcbiAgICAgICAgRmlsdGVyTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzJyksXHJcbiAgICAgICAgVGVzdE1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMnKSxcclxuICAgICAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXHJcbiAgICAgICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcclxuICAgICAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXHJcbiAgICAgICAgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxyXG4gICAgICAgIGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxyXG4gICAgICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxyXG4gICAgICAgIFBvcHVwU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXHJcbiAgICAgICAgUG9wdXBBZGRGaWx0ZXJWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRmlsdGVyVmlldy5qcycpLFxyXG4gICAgICAgIFBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMnKSxcclxuICAgICAgICBQb3B1cEFkZFRlc3RWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkVGVzdFZpZXcuanMnKSxcclxuICAgICAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpLFxyXG4gICAgICAgIGdyb3VwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMnKSxcclxuICAgICAgICBzZXR0aW5nc1BvcHVwVHBsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyksXHJcbiAgICAgICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXHJcbiAgICAgICAgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKSxcclxuICAgICAgICBNZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcclxuXHJcbiAgICBsZXQgYXBwID0gbmV3IEFwcCgpO1xyXG4gICAgXHJcbiAgICBhcHAuc3RhcnQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIERpcmVjdGlvbk1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yIChkaXJlY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25OYW1lID0gZGlyZWN0aW9uTmFtZTtcclxuICAgICAgICB0aGlzLnRlc3RMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uVGVzdCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgVUk6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVzdExpc3QgPSBbJ0VuZ2xpc2ggMScsICdFbmdsaXNoIDInLCAnRW5nbGlzaCAzJywgJ0VuZ2xpc2ggNCcsICdKUyBDb3JlJywgJ0Vzc2F5J107XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEdPOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RMaXN0ID0gWydFbmdsaXNoIDEnLCAnRW5nbGlzaCAyJywgJ0VuZ2xpc2ggMycsICdFbmdsaXNoIDQnLCAnR08gQ29yZScsICdFc3NheSddO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQSFA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVzdExpc3QgPSBbJ0VuZ2xpc2ggMScsICdFbmdsaXNoIDInLCAnRW5nbGlzaCAzJywgJ0VuZ2xpc2ggNCcsICdQSFAgQ29yZScsICdFc3NheSddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9ialtkaXJlY3Rpb25dKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uRmlsdGVyIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICBVSTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAxJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAyJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAzJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCA0JyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSlMgQ29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBHTzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAxJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAyJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAzJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCA0JyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnR08gQ29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQSFA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMycsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1BIUCBDb3JlJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmpbZGlyZWN0aW9uXSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3QgKHRlc3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGVzdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbHRlciAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEZpbHRlck1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uTGlzdCA9IFsnYXZlcmFnZScsICdtYXgnLCAnbWluJywgJ2VxdWFsJ107XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25MaXN0ID0gWyc+JywgJz49JywgJz0nLCAnPD0nLCAnPCddO1xyXG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcclxuICAgIH1cclxuXHJcbi8vIGFkZFRlc3QsIGNoYW5nZUFjdGlvbiwgY2hhbmdlQ29uZGl0aW9uLCBjaGFuZ2VHcmFkZVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0gRmlsdGVyTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFRlc3RNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbWF4R3JhZGUsIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XHJcbiAgICAgICAgLy8gdGhpcy5ncmFkZSA9IGdyYWRlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnQgPSBUZXN0TW9kZWw7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZGlyZWN0aW9uTGlzdFRwbCAoZGlyZWN0aW9uTGlzdCwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcblxyXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0nJHtpdGVtfScgJHtzZWxlY3RlZERpcmVjdGlvbiA9PT0gaXRlbT8gJ3NlbGVjdGVkJzogJyd9PiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uLWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiIGNsYXNzPVwibW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uXCI+JHtvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZGlyZWN0aW9uLWJ0blwiPmFkZCBkaXJlY3Rpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25MaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckxpc3RUcGwgKGZpbHRlckxpc3QpIHtcclxuICAgIGxldCBmaWx0ZXJzID0gJyc7XHJcblxyXG4gICAgZmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICBmaWx0ZXJzICs9IGA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+JHtmaWx0ZXJ9PC9kaXY+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdFwiPiR7ZmlsdGVyc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtZmlsdGVyLWJ0biBidG5cIj5hZGQgZmlsdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0TGlzdFRwbCAodGVzdHNMaXN0KSB7XHJcbiAgICBsZXQgdGVzdHMgPSAnJztcclxuXHJcbiAgICB0ZXN0c0xpc3QuZm9yRWFjaCgodGVzdCkgPT4ge1xyXG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdFwiPiR7dGVzdH08L2Rpdj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGVzdC1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5UZXN0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+JHt0ZXN0c308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGVzdC1idG4gYnRuXCI+YWRkIHRlc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0TGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIGFkZEZpbHRlclBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvYWRkRmlsdGVyUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkRmlsdGVyVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtZmlsdGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKHRlc3RMaXN0LCBhY3Rpb25MaXN0LCBjb25kaXRpb25MaXN0KSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBhZGRGaWx0ZXJQb3B1cFRwbCh0ZXN0TGlzdCwgYWN0aW9uTGlzdCwgY29uZGl0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1maWx0ZXItYnRuJyksXHJcbiAgICAgICAgICAgIHRlc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29sdW1uLWZpbHRlcicpLFxyXG4gICAgICAgICAgICB0ZXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1uYW1lJyksXHJcbiAgICAgICAgICAgIGFjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWx0ZXItYWN0aW9uJyksXHJcbiAgICAgICAgICAgIGNvbmRpdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWx0ZXItY29uZGl0aW9uJyksXHJcbiAgICAgICAgICAgIHRlc3RHcmFkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1ncmFkZScpO1xyXG5cclxuXHJcbiAgICAgICAgY2xvc2VGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZmlsdGVyUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2ZpbHRlclBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRlc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0ZXN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWN0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uZGl0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignY29uZGl0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGVzdEdyYWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEZpbHRlclZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRmlsdGVyVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGFkZEZpbHRlclBvcHVwVHBsICh0ZXN0TGlzdCwgYWN0aW9uTGlzdCwgY29uZGl0aW9uTGlzdCkge1xyXG4gICAgbGV0IHRlc3RzID0gZ2VuZXJhdGVUZXN0TGlzdCh0ZXN0TGlzdCksXHJcbiAgICAgICAgYWN0aW9ucyA9IGdlbmVyYXRlTGlzdChhY3Rpb25MaXN0KSxcclxuICAgICAgICBjb25kaXRpb25zID0gZ2VuZXJhdGVMaXN0KGNvbmRpdGlvbkxpc3QpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTGlzdCAobGlzdCkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0ICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRlc3RMaXN0IChsaXN0KSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QgKz0gYDxsaT4ke2l0ZW19PC9saT5gO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC1maWx0ZXItcG9wdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbHVtbi1maWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx1bD4ke3Rlc3RzfTwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZGQtdGVzdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXN0IG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwibW9kYWwtZmlsdGVyLWFjdGlvblwiPiR7YWN0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIm1vZGFsLWZpbHRlci1jb25kaXRpb25cIj4ke2NvbmRpdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLXRlc3QtZ3JhZGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZyBjbG9zZS1maWx0ZXItYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFkZEZpbHRlclBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRmlsdGVyUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgYWRkRGlyZWN0aW9uUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBBZGREaXJlY3Rpb25WaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFkZC1kaXJlY3Rpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBhZGREaXJlY3Rpb25Qb3B1cFRwbCgpO1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgY2xvc2VEaXJlY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZGlyZWN0aW9uLWJ0bicpLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kaXJlY3Rpb24tbmFtZScpO1xyXG5cclxuXHJcbiAgICAgICAgY2xvc2VEaXJlY3Rpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGlyZWN0aW9uUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2RpcmVjdGlvblBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvbk5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGREaXJlY3Rpb25WaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBhZGREaXJlY3Rpb25Qb3B1cFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC1kaXJlY3Rpb24tcG9wdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLWRpcmVjdGlvbi1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBkaXJlY3Rpb24gbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjayBjbG9zZS1kaXJlY3Rpb24tYnRuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYWRkRGlyZWN0aW9uUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBhZGRUZXN0UG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9hZGRUZXN0UG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkVGVzdFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLXRlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBhZGRUZXN0UG9wdXBUcGwoKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlVGVzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS10ZXN0LWJ0bicpLFxyXG4gICAgICAgICAgICB0ZXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1uYW1lJyk7XHJcblxyXG5cclxuICAgICAgICBjbG9zZVRlc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YigndGVzdFBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCd0ZXN0UG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGVzdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRUZXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGRUZXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGFkZFRlc3RQb3B1cFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC10ZXN0LXBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC10ZXN0LW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRlc3QgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29nIGNsb3NlLXRlc3QtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFRlc3RQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZFRlc3RQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcclxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXHJcbiAgICB0ZXN0RGF0YSA9IHJlcXVpcmUoJy4vdGVzdERhdGEuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IHRlc3REYXRhLmRpcmVjdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBncm91cENvbnRyb2xsZXIgPSBuZXcgR3JvdXBDb250cm9sbGVyKHRoaXMuZ3JvdXBzKSxcclxuICAgICAgICAgICAgc2V0dGluZ3NDb250cm9sbGVyID0gbmV3IFNldHRpbmdzQ29udHJvbGxlcih0aGlzLmRpcmVjdGlvbnMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5zaG93R3JvdXBMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkR3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCB0ZXN0RGF0YSA9IHtcclxuICAgIGdyb3VwczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAndWknLFxyXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTE3LWpzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdnbycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMjMtZ28nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3BocCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMjctcGhwJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgZGlyZWN0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1VJJyxcclxuICAgICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0pTIENvcmUnLCAnRXNzYXkgVUknXSxcclxuICAgICAgICAgICAgZmlsdGVyczogWydVSSAxJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1BIUCcsXHJcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBQSFAnXSxcclxuICAgICAgICAgICAgZmlsdGVyczogWydQSFAgMSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdHTycsXHJcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBHTyddLFxyXG4gICAgICAgICAgICBmaWx0ZXJzOiBbJ0dPIDEnXVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdGVzdERhdGE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=