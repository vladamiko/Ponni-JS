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
        value: function renderPopup() {
            this.modal.innerHTML = addFilterPopupTpl();
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
        value: function addListeners() {}
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
    var tests = generateList(testList),
        actions = generateList(actionList),
        conditions = generateList(conditionList);

    function generateList(list) {
        list.forEach(function (item) {
            list += '<option>' + item + '</option>';
        });

        return list;
    }

    return '<div class="modal-content add-filter-popup">\n                <div class="left-column-filter">' + tests + '</div>\n                <div class="right-column-filter">\n                    <div>\n                        <input type="text" class="add-test-name" placeholder="Enter test name">\n                    </div>\n                    <div>\n                        <select class="modal-filter-action">' + actions + '</select>\n                        <select class="modal-filter-condition">' + conditions + '</select>\n                        <input type="text" class="add-test-grade" placeholder="Enter grade">\n                    </div>\n                </div>\n                <button class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
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
        value: function addListeners() {}
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
    return '<div class="modal-content add-direction-popup">\n                <input type="text" class="add-direction-name" placeholder="Enter direction name">\n                <button class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
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
        value: function addListeners() {}
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
    return '<div class="modal-content add-test-popup">\n                <input type="text" class="add-test-name" placeholder="Enter test name">\n                <button class="btn btn-cog">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTU1Y2Y5NDkzNTU4NmNiMmNmM2MiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9kaXJlY3Rpb25MaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZEZpbHRlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGRGaWx0ZXJQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkVGVzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGRUZXN0UG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiU2V0dGluZ3NNb2RlbCIsImRpcmVjdGlvbnMiLCJkaXJlY3Rpb25OYW1lcyIsIml0ZW0iLCJuYW1lIiwiRGlyZWN0aW9uIiwicmVxdWlyZSIsIkdyb3VwVmlldyIsIkdyb3VwTW9kZWwiLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJkaXJlY3Rpb25MaXN0IiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJvcGVuIiwiYWRkTGlzdGVuZXJzIiwiY2xvc2VHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJ1bnN1YiIsImNsYXNzTGlzdCIsImFkZCIsImdyb3VwTmFtZUVsZW0iLCJncm91cERpcmVjdGlvbkVsZW0iLCJkaXJlY3Rpb24iLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJ2YWx1ZSIsInJlbW92ZSIsImdyb3VwVHBsIiwidGVtcGxhdGUiLCJncm91cCIsImdyb3Vwc0Jsb2NrIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiUG9wdXBTZXR0aW5nc1ZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJzZXR0aW5ncyIsInNldHRpbmdzTW9kZWwiLCJwb3B1cFNldHRpbmdzVmlldyIsInN1YnNjcmliZSIsInN1YnNjcmliZU9wZW5Qb3B1cHMiLCJzdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24iLCJzdWJzY3JpYmVTZWxlY3RGaWx0ZXIiLCJzdWJzY3JpYmVTZWxlY3RUZXN0Iiwic3ViIiwiZ2V0RGlyZWN0aW9uTmFtZXMiLCJzZWxlY3RlZERpcmVjdGlvbiIsIm1vZGUiLCJyZW5kZXJQb3B1cCIsInN1YnNjcmliZUNsb3NlUG9wdXAiLCJwb3B1cEFkZEdyb3VwVmlldyIsInNldERpcmVjdGlvbkxpc3QiLCJjbG9zZSIsImRpcmVjdGlvbk5hbWUiLCJmaW5kIiwicmVSZW5kZXJQb3B1cCIsInNldHRpbmdzUG9wdXBUcGwiLCJkaXJlY3Rpb25TZWxlY3QiLCJzZWxlY3RUZXN0QnRuIiwic2VsZWN0RmlsdGVyQnRuIiwiZSIsInRhcmdldCIsImRpcmVjdGlvbkxpc3RUcGwiLCJmaWx0ZXJMaXN0VHBsIiwidGVzdExpc3RUcGwiLCJmaWx0ZXJMaXN0IiwiZmlsdGVycyIsInRlc3RMaXN0IiwidGVzdHMiLCJncm91cExpc3RUcGwiLCJHcm91cExpc3RWaWV3IiwibGVmdEJsb2NrIiwiYWRkR3JvdXBCdG4iLCJzZXR0aW5nc0J0biIsIkdyb3VwQ29udHJvbGxlciIsImdyb3VwcyIsInN1YnNjcmliZU9wZW4iLCJncm91cExpc3RWaWV3IiwicmVuZGVyIiwic3Vic2NyaWJlQWRkR3JvdXAiLCJncm91cFZpZXciLCJncm91cERhdGEiLCJnZW5lcmF0ZURhdGEiLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiaW5pdCIsIkRpcmVjdGlvbk1vZGVsIiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJQb3B1cEFkZEZpbHRlclZpZXciLCJQb3B1cEFkZERpcmVjdGlvblZpZXciLCJQb3B1cEFkZFRlc3RWaWV3IiwiQXBwIiwiYXBwIiwic3RhcnQiLCJvYmoiLCJVSSIsIkdPIiwiUEhQIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJ0ZXN0TmFtZSIsIlRlc3QiLCJGaWx0ZXIiLCJleHBvcnQiLCJhY3Rpb25MaXN0IiwiY29uZGl0aW9uTGlzdCIsIm1heEdyYWRlIiwiZmlsdGVyIiwidGVzdHNMaXN0IiwidGVzdCIsImFkZEZpbHRlclBvcHVwVHBsIiwiZ2VuZXJhdGVMaXN0IiwiYWN0aW9ucyIsImNvbmRpdGlvbnMiLCJsaXN0IiwiYWRkRGlyZWN0aW9uUG9wdXBUcGwiLCJhZGRUZXN0UG9wdXBUcGwiLCJ0ZXN0RGF0YSIsImdyb3VwQ29udHJvbGxlciIsInNldHRpbmdzQ29udHJvbGxlciIsInNob3dHcm91cExpc3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FB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ZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlNTVjZjk0OTM1NTg2Y2IyY2YzYyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE1lZGlhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWIgKGNoYW5uZWwpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uTmFtZXMgKCkge1xyXG4gICAgXHRsZXQgZGlyZWN0aW9uTmFtZXMgPSBbXTtcclxuXHJcbiAgICBcdHRoaXMuZGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgXHRkaXJlY3Rpb25OYW1lcy5wdXNoKGl0ZW0ubmFtZSk7XHJcbiAgICBcdH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uTmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGlyZWN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbihuYW1lKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGdyb3VwUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0KTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZ3JvdXA6YWRkZWQnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2dyb3VwOmFkZGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1uYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1kaXJlY3Rpb24nKSxcclxuICAgICAgICAgICAgZGF0YSA9IHt9O1xyXG5cclxuICAgICAgICBkYXRhLmRpcmVjdGlvbiA9IGdyb3VwRGlyZWN0aW9uRWxlbS5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbS5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwVHBsID0gcmVxdWlyZSgnLi90cGwvZ3JvdXBUcGwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwVHBsKGdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBHcm91cE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlciAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBQb3B1cFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcclxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IgKHNldHRpbmdzKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5nc01vZGVsID0gbmV3IFNldHRpbmdzTW9kZWwoc2V0dGluZ3MpO1xyXG4gICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcgPSBuZXcgUG9wdXBTZXR0aW5nc1ZpZXcoKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVPcGVuUG9wdXBzKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdEZpbHRlcigpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0VGVzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZU9wZW5Qb3B1cHMgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zWzBdO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQ2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCksXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcuc2V0RGlyZWN0aW9uTGlzdChkaXJlY3Rpb25zKTtcclxuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlQ2xvc2VQb3B1cCAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uICgpIHtcclxuICAgIFx0bWVkaWF0b3Iuc3ViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgKGRpcmVjdGlvbk5hbWUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gZGlyZWN0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVNlbGVjdFRlc3QgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YigndGVzdDpzZWxlY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVNlbGVjdEZpbHRlciAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdmaWx0ZXI6c2VsZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnRic7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgc2V0dGluZ3NQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwU2V0dGluZ3NWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNldHRpbmdzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlUmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbk5hbWVzIChkaXJlY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIHNlbGVjdFRlc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdC1zZXR0aW5ncy1idG4nKSxcclxuICAgICAgICAgICAgc2VsZWN0RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlci1zZXR0aW5ncy1idG4nKTtcclxuXHJcbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGVjdFRlc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YigndGVzdDpzZWxlY3QnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2ZpbHRlcjpzZWxlY3QnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZURhdGEgKCkge1xyXG4gICAgICAgIGxldCBncm91cE5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBOYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwRGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBTZXR0aW5nc1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGRpcmVjdGlvbkxpc3RUcGwgPSByZXF1aXJlKCcuL2RpcmVjdGlvbkxpc3RUcGwuanMnKSxcclxuICAgIGZpbHRlckxpc3RUcGwgPSByZXF1aXJlKCcuL2ZpbHRlckxpc3RUcGwuanMnKSxcclxuICAgIHRlc3RMaXN0VHBsID0gcmVxdWlyZSgnLi90ZXN0TGlzdFRwbC5qcycpO1xyXG5cclxuZnVuY3Rpb24gc2V0dGluZ3NQb3B1cFRwbCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgIGxldCBkaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdFRwbChkaXJlY3Rpb25zLCBzZWxlY3RlZERpcmVjdGlvbi5uYW1lKSxcclxuICAgICAgICBmaWx0ZXJMaXN0ID0gZmlsdGVyTGlzdFRwbChzZWxlY3RlZERpcmVjdGlvbi5maWx0ZXJzKSxcclxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLnRlc3RzKTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJzZXR0aW5ncy1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZmlsdGVyLXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1mdFwiPkY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7bW9kZSA9PT0gJ1QnPyB0ZXN0TGlzdDogZmlsdGVyTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdzUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBUcGwgKGdyb3VwKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBQb3B1cFRwbCAoZGlyZWN0aW9uTGlzdCkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSAnJztcclxuXHJcbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwiZ3JvdXAtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibW9kYWwtZ3JvdXAtbmFtZVwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtZGlyZWN0aW9uXCI+JHtvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWdyb3VwLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBMaXN0VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoKSB7XHJcbiAgICAgICAgbGV0IGxlZnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbHVtbicpO1xyXG5cclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gZ3JvdXBMaXN0VHBsKCk7XHJcblxyXG4gICAgICAgIGxlZnRCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCB0aGlzLnRlbXBsYXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgYWRkR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWdyb3VwLWJ0bicpLFxyXG4gICAgICAgICAgICBzZXR0aW5nc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1idG4nKTtcclxuXHJcbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ2dyb3VwUG9wdXA6b3BlbicpKTtcclxuICAgICAgICBzZXR0aW5nc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1Yignc2V0dGluZ3NQb3B1cDpvcGVuJykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTGlzdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBMaXN0VHBsICgpIHtcclxuICAgIHJldHVybiBgPHNlY3Rpb24gaWQ9XCJncm91cC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+R3JvdXA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY29nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2stYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay13cmFwcGVyIGdyb3VwLXdyYXBwZXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZ3JvdXAtYnRuXCI+YWRkIGdyb3VwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChncm91cHMpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcclxuICAgICAgICB0aGlzLnN1YnNjcmliZU9wZW4oKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KCk7XHJcblxyXG4gICAgICAgIGdyb3VwTGlzdFZpZXcucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlT3BlbiAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cFBvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQWRkR3JvdXAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVBZGRHcm91cCAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDphZGRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCksXHJcbiAgICAgICAgICAgICAgICBncm91cFZpZXcgPSBuZXcgR3JvdXBWaWV3KCksXHJcbiAgICAgICAgICAgICAgICBncm91cERhdGEgPSB7fSxcclxuICAgICAgICAgICAgICAgIGdyb3VwID0ge307XHJcblxyXG4gICAgICAgICAgICBncm91cERhdGEgPSBwb3B1cEFkZEdyb3VwVmlldy5nZW5lcmF0ZURhdGEoKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwID0gbmV3IEdyb3VwTW9kZWwoZ3JvdXBEYXRhLm5hbWUsIGdyb3VwRGF0YS5kaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcclxuXHJcbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LmNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGluaXQpO1xyXG5cclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgICBsZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXHJcbiAgICAgICAgRmlsdGVyTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzJyksXHJcbiAgICAgICAgVGVzdE1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMnKSxcclxuICAgICAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXHJcbiAgICAgICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcclxuICAgICAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXHJcbiAgICAgICAgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxyXG4gICAgICAgIGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxyXG4gICAgICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxyXG4gICAgICAgIFBvcHVwU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXHJcbiAgICAgICAgUG9wdXBBZGRGaWx0ZXJWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRmlsdGVyVmlldy5qcycpLFxyXG4gICAgICAgIFBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMnKSxcclxuICAgICAgICBQb3B1cEFkZFRlc3RWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkVGVzdFZpZXcuanMnKSxcclxuICAgICAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpLFxyXG4gICAgICAgIGdyb3VwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMnKSxcclxuICAgICAgICBzZXR0aW5nc1BvcHVwVHBsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyksXHJcbiAgICAgICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXHJcbiAgICAgICAgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKSxcclxuICAgICAgICBNZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcclxuXHJcbiAgICBsZXQgYXBwID0gbmV3IEFwcCgpO1xyXG4gICAgXHJcbiAgICBhcHAuc3RhcnQoKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvbWFpbi5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIERpcmVjdGlvbk1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yIChkaXJlY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25OYW1lID0gZGlyZWN0aW9uTmFtZTtcclxuICAgICAgICB0aGlzLnRlc3RMaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uVGVzdCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgVUk6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVzdExpc3QgPSBbJ0VuZ2xpc2ggMScsICdFbmdsaXNoIDInLCAnRW5nbGlzaCAzJywgJ0VuZ2xpc2ggNCcsICdKUyBDb3JlJywgJ0Vzc2F5J107XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIEdPOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RMaXN0ID0gWydFbmdsaXNoIDEnLCAnRW5nbGlzaCAyJywgJ0VuZ2xpc2ggMycsICdFbmdsaXNoIDQnLCAnR08gQ29yZScsICdFc3NheSddO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQSFA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVzdExpc3QgPSBbJ0VuZ2xpc2ggMScsICdFbmdsaXNoIDInLCAnRW5nbGlzaCAzJywgJ0VuZ2xpc2ggNCcsICdQSFAgQ29yZScsICdFc3NheSddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG9ialtkaXJlY3Rpb25dKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uRmlsdGVyIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICBVSTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAxJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAyJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAzJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCA0JyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnSlMgQ29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBHTzogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAxJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAyJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAzJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCA0JyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnR08gQ29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBQSFA6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMycsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ1BIUCBDb3JlJyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICAgICAgfV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmpbZGlyZWN0aW9uXSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3QgKHRlc3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0LnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlVGVzdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUZpbHRlciAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEZpbHRlck1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uTGlzdCA9IFsnYXZlcmFnZScsICdtYXgnLCAnbWluJywgJ2VxdWFsJ107XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25MaXN0ID0gWyc+JywgJz49JywgJz0nLCAnPD0nLCAnPCddO1xyXG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcclxuICAgIH1cclxuXHJcbi8vIGFkZFRlc3QsIGNoYW5nZUFjdGlvbiwgY2hhbmdlQ29uZGl0aW9uLCBjaGFuZ2VHcmFkZVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0gRmlsdGVyTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFRlc3RNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbWF4R3JhZGUsIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XHJcbiAgICAgICAgLy8gdGhpcy5ncmFkZSA9IGdyYWRlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnQgPSBUZXN0TW9kZWw7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZGlyZWN0aW9uTGlzdFRwbCAoZGlyZWN0aW9uTGlzdCwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcblxyXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0nJHtpdGVtfScgJHtzZWxlY3RlZERpcmVjdGlvbiA9PT0gaXRlbT8gJ3NlbGVjdGVkJzogJyd9PiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uLWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiIGNsYXNzPVwibW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uXCI+JHtvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZGlyZWN0aW9uLWJ0blwiPmFkZCBkaXJlY3Rpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25MaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckxpc3RUcGwgKGZpbHRlckxpc3QpIHtcclxuICAgIGxldCBmaWx0ZXJzID0gJyc7XHJcblxyXG4gICAgZmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICBmaWx0ZXJzICs9IGA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+JHtmaWx0ZXJ9PC9kaXY+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdFwiPiR7ZmlsdGVyc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtZmlsdGVyLWJ0biBidG5cIj5hZGQgZmlsdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0TGlzdFRwbCAodGVzdHNMaXN0KSB7XHJcbiAgICBsZXQgdGVzdHMgPSAnJztcclxuXHJcbiAgICB0ZXN0c0xpc3QuZm9yRWFjaCgodGVzdCkgPT4ge1xyXG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdFwiPiR7dGVzdH08L2Rpdj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGVzdC1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5UZXN0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+JHt0ZXN0c308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGVzdC1idG4gYnRuXCI+YWRkIHRlc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0TGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIGFkZEZpbHRlclBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvYWRkRmlsdGVyUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkRmlsdGVyVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtZmlsdGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYWRkRmlsdGVyUG9wdXBUcGwoKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkRmlsdGVyVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGRGaWx0ZXJWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gYWRkRmlsdGVyUG9wdXBUcGwgKHRlc3RMaXN0LCBhY3Rpb25MaXN0LCBjb25kaXRpb25MaXN0KSB7XHJcbiAgICBsZXQgdGVzdHMgPSBnZW5lcmF0ZUxpc3QodGVzdExpc3QpLFxyXG4gICAgICAgIGFjdGlvbnMgPSBnZW5lcmF0ZUxpc3QoYWN0aW9uTGlzdCksXHJcbiAgICAgICAgY29uZGl0aW9ucyA9IGdlbmVyYXRlTGlzdChjb25kaXRpb25MaXN0KTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUxpc3QgKGxpc3QpIHtcclxuICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbGlzdCArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBhZGQtZmlsdGVyLXBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1jb2x1bW4tZmlsdGVyXCI+JHt0ZXN0c308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZGQtdGVzdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXN0IG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwibW9kYWwtZmlsdGVyLWFjdGlvblwiPiR7YWN0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIm1vZGFsLWZpbHRlci1jb25kaXRpb25cIj4ke2NvbmRpdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLXRlc3QtZ3JhZGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhZGRGaWx0ZXJQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZEZpbHRlclBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIGFkZERpcmVjdGlvblBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkRGlyZWN0aW9uVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtZGlyZWN0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYWRkRGlyZWN0aW9uUG9wdXBUcGwoKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkRGlyZWN0aW9uVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gYWRkRGlyZWN0aW9uUG9wdXBUcGwgKCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBhZGQtZGlyZWN0aW9uLXBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC1kaXJlY3Rpb24tbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGlyZWN0aW9uIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhZGREaXJlY3Rpb25Qb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIGFkZFRlc3RQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL2FkZFRlc3RQb3B1cFRwbC5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBBZGRUZXN0VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtdGVzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGFkZFRlc3RQb3B1cFRwbCgpO1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRUZXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGRUZXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGFkZFRlc3RQb3B1cFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC10ZXN0LXBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC10ZXN0LW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRlc3QgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFRlc3RQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZFRlc3RQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcclxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXHJcbiAgICB0ZXN0RGF0YSA9IHJlcXVpcmUoJy4vdGVzdERhdGEuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IHRlc3REYXRhLmRpcmVjdGlvbnM7XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBncm91cENvbnRyb2xsZXIgPSBuZXcgR3JvdXBDb250cm9sbGVyKHRoaXMuZ3JvdXBzKSxcclxuICAgICAgICAgICAgc2V0dGluZ3NDb250cm9sbGVyID0gbmV3IFNldHRpbmdzQ29udHJvbGxlcih0aGlzLmRpcmVjdGlvbnMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5zaG93R3JvdXBMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkR3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCB0ZXN0RGF0YSA9IHtcclxuICAgIGdyb3VwczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAndWknLFxyXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTE3LWpzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdnbycsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMjMtZ28nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3BocCcsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMjctcGhwJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgZGlyZWN0aW9uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1VJJyxcclxuICAgICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0pTIENvcmUnLCAnRXNzYXkgVUknXSxcclxuICAgICAgICAgICAgZmlsdGVyczogWydVSSAxJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1BIUCcsXHJcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBQSFAnXSxcclxuICAgICAgICAgICAgZmlsdGVyczogWydQSFAgMSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdHTycsXHJcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBHTyddLFxyXG4gICAgICAgICAgICBmaWx0ZXJzOiBbJ0dPIDEnXVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdGVzdERhdGE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=