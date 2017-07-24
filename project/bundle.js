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
    function SettingsModel() {
        _classCallCheck(this, SettingsModel);

        this.directionList = ['UI', 'GO', 'PHP', 'Other'];
    }

    _createClass(SettingsModel, [{
        key: 'addDirection',
        value: function addDirection(directionName) {
            this.testList.push(new Direction(directionName));
        }
    }, {
        key: 'getDirectionList',
        value: function getDirectionList() {
            return this.directionList;
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var groupTpl = __webpack_require__(8),
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

var PopupSettingsView = __webpack_require__(6),
    SettingsModel = __webpack_require__(2),
    mediator = __webpack_require__(0);

var SettingsController = function () {
    function SettingsController(settingList) {
        _classCallCheck(this, SettingsController);

        this.settingList = settingList;
        this.setting = this.settingList[0];
        this.mode = 'T';

        this.subscribeOpenPopup();
        this.subscribeSelectDirection();
        this.subscribeSelectFilter();
        this.subscribeSelectTest();

        this.settingsModel = new SettingsModel();
        this.popupSettingsView = new PopupSettingsView();
        this.popupSettingsView.setDirectionList(this.settingsModel.getDirectionList());
    }

    _createClass(SettingsController, [{
        key: 'subscribeOpenPopup',
        value: function subscribeOpenPopup() {
            var _this = this;

            mediator.sub('settingsPopup:open', function () {
                _this.popupSettingsView.renderPopup(_this.setting.tests, _this.setting.filters, _this.mode, _this.setting.direction);

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
        }
    }, {
        key: 'subscribeSelectDirection',
        value: function subscribeSelectDirection() {
            var _this3 = this;

            mediator.sub('directionSelect:change', function (value) {
                _this3.setting = _this3.settingList.find(function (item) {
                    return item.direction === value;
                });
                _this3.mode = 'T';

                _this3.popupSettingsView.reRenderPopup(_this3.setting.tests, _this3.setting.filters, _this3.mode, _this3.setting.direction);
            });
        }
    }, {
        key: 'subscribeSelectTest',
        value: function subscribeSelectTest() {
            var _this4 = this;

            mediator.sub('test:select', function () {
                _this4.mode = 'T';

                _this4.popupSettingsView.reRenderPopup(_this4.setting.tests, _this4.setting.filters, _this4.mode, _this4.setting.direction);
            });
        }
    }, {
        key: 'subscribeSelectFilter',
        value: function subscribeSelectFilter() {
            var _this5 = this;

            mediator.sub('filter:select', function () {
                _this5.mode = 'F';

                _this5.popupSettingsView.reRenderPopup(_this5.setting.tests, _this5.setting.filters, _this5.mode, _this5.setting.direction);
            });
        }
    }]);

    return SettingsController;
}();

module.exports = SettingsController;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    settingsPopupTpl = __webpack_require__(7);

var PopupSettingsView = function () {
    function PopupSettingsView() {
        _classCallCheck(this, PopupSettingsView);

        this.modal = document.querySelector('#modal-settings');
    }

    _createClass(PopupSettingsView, [{
        key: 'renderPopup',
        value: function renderPopup(testList, filterList, mode, selectedDirection) {
            this.modal.innerHTML = settingsPopupTpl(this.directionList, testList, filterList, mode, selectedDirection);
            this.open();
            this.addListeners();
        }
    }, {
        key: 'reRenderPopup',
        value: function reRenderPopup(testList, filterList, mode, selectedDirection) {
            this.modal.innerHTML = settingsPopupTpl(this.directionList, testList, filterList, mode, selectedDirection);
            this.addListeners();
        }
    }, {
        key: 'setDirectionList',
        value: function setDirectionList(directionList) {
            this.directionList = directionList;
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var directionListTpl = __webpack_require__(19),
    filterListTpl = __webpack_require__(20),
    testListTpl = __webpack_require__(21);

function settingsPopupTpl(directions, tests, filters, option, selectedDirection) {
    var directionList = directionListTpl(directions, selectedDirection),
        filterList = filterListTpl(filters),
        testList = testListTpl(tests);

    return '<div id="settings-popup" class="modal-content">\n                <div class="left-column-settings">' + directionList + '</div>\n                <div class="right-column-settings">\n                    <div class="column-settings">\n                        <button id="test-settings-btn" class="btn btn-ft">T</button>\n                        <button id="filter-settings-btn" class="btn btn-ft">F</button>\n                    </div>\n                    <div class="column-settings">\n                        ' + (option === 'T' ? testList : filterList) + '\n                    </div>\n                    <div class="column-settings">\n                        <button id="close-settings-btn" class="btn btn-cog">\n                            <i class="fa fa-check" aria-hidden="true"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>';
}

module.exports = settingsPopupTpl;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupTpl(group) {
    return '<div class="group">\n                <h2 class="group-title">' + group.name + ' ' + group.direction + '</h2>\n                <div>\n                    <button class="btn">format added</button>\n                </div>\n            </div>';
}

module.exports = groupTpl;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var groupListTpl = __webpack_require__(10),
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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    GroupView = __webpack_require__(4),
    GroupModel = __webpack_require__(3),
    groupPopupTpl = __webpack_require__(12);

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

var GroupListView = __webpack_require__(9),
    GroupView = __webpack_require__(4),
    GroupModel = __webpack_require__(3),
    PopupAddGroupView = __webpack_require__(11),
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
                var settingsModel = new SettingsModel(),
                    popupAddGroupView = new PopupAddGroupView();

                popupAddGroupView.setDirectionList(settingsModel.getDirectionList());
                popupAddGroupView.renderPopup();
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
        SettingsView = __webpack_require__(18),
        SettingsController = __webpack_require__(5),
        GroupModel = __webpack_require__(3),
        GroupView = __webpack_require__(4),
        GroupListView = __webpack_require__(9),
        groupListTpl = __webpack_require__(10),
        PopupAddGroupView = __webpack_require__(11),
        PopupSettingsView = __webpack_require__(6),
        groupPopupTpl = __webpack_require__(12),
        groupTpl = __webpack_require__(8),
        settingsPopupTpl = __webpack_require__(7),
        GroupController = __webpack_require__(13),
        App = __webpack_require__(22),
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
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsView = function SettingsView() {
    _classCallCheck(this, SettingsView);
};

module.export = SettingsView;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 19 */
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
/* 20 */
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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(13),
    SettingsController = __webpack_require__(5),
    testData = __webpack_require__(23),
    mediator = __webpack_require__(0);

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.groups = [];
        this.settings = testData.settings;
        this.subscribe();
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
            var groupController = new GroupController(this.groups),
                settingsController = new SettingsController(this.settings);

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
/* 23 */
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
    settings: [{
        direction: 'UI',
        tests: ['Eng1', 'Eng2', 'JS Core', 'Essay UI'],
        filters: ['UI 1']
    }, {
        direction: 'PHP',
        tests: ['Eng1', 'Eng2', 'Essay PHP'],
        filters: ['PHP 1']
    }, {
        direction: 'GO',
        tests: ['Eng1', 'Eng2', 'Essay GO'],
        filters: ['GO 1']
    }, {
        direction: 'Other',
        tests: ['Eng1', 'Eng2', 'Other', 'Other'],
        filters: ['Other 1']
    }]
};

module.exports = testData;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTA4Y2JjMmJkODAxMzc4YjhlN2MiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9maWx0ZXJMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvdGVzdExpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiU2V0dGluZ3NNb2RlbCIsImRpcmVjdGlvbkxpc3QiLCJkaXJlY3Rpb25OYW1lIiwidGVzdExpc3QiLCJEaXJlY3Rpb24iLCJHcm91cE1vZGVsIiwibmFtZSIsImRpcmVjdGlvbiIsImdyb3VwVHBsIiwicmVxdWlyZSIsIkdyb3VwVmlldyIsInRlbXBsYXRlIiwiYWRkTGlzdGVuZXJzIiwiZ3JvdXAiLCJncm91cHNCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImluc2VydEFkamFjZW50SFRNTCIsIlBvcHVwU2V0dGluZ3NWaWV3IiwiU2V0dGluZ3NDb250cm9sbGVyIiwic2V0dGluZ0xpc3QiLCJzZXR0aW5nIiwibW9kZSIsInN1YnNjcmliZU9wZW5Qb3B1cCIsInN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiIsInN1YnNjcmliZVNlbGVjdEZpbHRlciIsInN1YnNjcmliZVNlbGVjdFRlc3QiLCJzZXR0aW5nc01vZGVsIiwicG9wdXBTZXR0aW5nc1ZpZXciLCJzZXREaXJlY3Rpb25MaXN0IiwiZ2V0RGlyZWN0aW9uTGlzdCIsInN1YiIsInJlbmRlclBvcHVwIiwidGVzdHMiLCJmaWx0ZXJzIiwic3Vic2NyaWJlQ2xvc2VQb3B1cCIsImNsb3NlIiwidmFsdWUiLCJmaW5kIiwiaXRlbSIsInJlUmVuZGVyUG9wdXAiLCJzZXR0aW5nc1BvcHVwVHBsIiwibW9kYWwiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWREaXJlY3Rpb24iLCJpbm5lckhUTUwiLCJvcGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xvc2VHcm91cEJ0biIsImRpcmVjdGlvblNlbGVjdCIsInNlbGVjdFRlc3RCdG4iLCJzZWxlY3RGaWx0ZXJCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicHViIiwidW5zdWIiLCJlIiwidGFyZ2V0IiwiZ3JvdXBOYW1lRWxlbSIsImdyb3VwRGlyZWN0aW9uRWxlbSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInJlbW92ZSIsImRpcmVjdGlvbkxpc3RUcGwiLCJmaWx0ZXJMaXN0VHBsIiwidGVzdExpc3RUcGwiLCJkaXJlY3Rpb25zIiwib3B0aW9uIiwiZ3JvdXBMaXN0VHBsIiwiR3JvdXBMaXN0VmlldyIsImxlZnRCbG9jayIsImFkZEdyb3VwQnRuIiwic2V0dGluZ3NCdG4iLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJHcm91cENvbnRyb2xsZXIiLCJncm91cHMiLCJzdWJzY3JpYmVPcGVuIiwiZ3JvdXBMaXN0VmlldyIsInJlbmRlciIsInBvcHVwQWRkR3JvdXBWaWV3Iiwic3Vic2NyaWJlQWRkR3JvdXAiLCJncm91cFZpZXciLCJncm91cERhdGEiLCJnZW5lcmF0ZURhdGEiLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiaW5pdCIsIkRpcmVjdGlvbk1vZGVsIiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJTZXR0aW5nc1ZpZXciLCJBcHAiLCJhcHAiLCJzdGFydCIsIm9iaiIsIlVJIiwiR08iLCJQSFAiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsInRlc3ROYW1lIiwiVGVzdCIsIkZpbHRlciIsImV4cG9ydCIsImFjdGlvbkxpc3QiLCJjb25kaXRpb25MaXN0IiwibWF4R3JhZGUiLCJmaWx0ZXIiLCJ0ZXN0c0xpc3QiLCJ0ZXN0IiwidGVzdERhdGEiLCJzZXR0aW5ncyIsInN1YnNjcmliZSIsImdyb3VwQ29udHJvbGxlciIsInNldHRpbmdzQ29udHJvbGxlciIsInNob3dHcm91cExpc3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7Ozs7SUFFTUEsUTtBQUNGLHdCQUFlO0FBQUE7O0FBQ1gsYUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7OzRCQUVJQyxPLEVBQVNDLEksRUFBTTtBQUNoQixnQkFBSSxLQUFLRixRQUFMLENBQWNDLE9BQWQsQ0FBSixFQUE0QjtBQUN4QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLEVBQXVCRSxPQUF2QixDQUErQixVQUFDQyxFQUFEO0FBQUEsMkJBQVFBLEdBQUdGLElBQUgsQ0FBUjtBQUFBLGlCQUEvQjtBQUNIO0FBQ0o7Ozs0QkFFSUQsTyxFQUFTRyxFLEVBQUk7QUFDZCxnQkFBSSxDQUFDLEtBQUtKLFFBQUwsQ0FBY0MsT0FBZCxDQUFMLEVBQTZCO0FBQ3pCLHFCQUFLRCxRQUFMLENBQWNDLE9BQWQsSUFBeUIsRUFBekI7QUFDSDs7QUFFRCxpQkFBS0QsUUFBTCxDQUFjQyxPQUFkLEVBQXVCSSxJQUF2QixDQUE0QkQsRUFBNUI7QUFDSDs7OzhCQUVNSCxPLEVBQVM7QUFDWixtQkFBTyxLQUFLRCxRQUFMLENBQWNDLE9BQWQsQ0FBUDtBQUNIOzs7Ozs7QUFHTCxJQUFJSyxXQUFXLElBQUlQLFFBQUosRUFBZjs7QUFFQVEsT0FBT0MsT0FBUCxHQUFpQkYsUUFBakIsQzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7Ozs7OztJQUVNRyxhO0FBQ0YsNkJBQWU7QUFBQTs7QUFDWCxhQUFLQyxhQUFMLEdBQXFCLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxLQUFiLEVBQW9CLE9BQXBCLENBQXJCO0FBQ0g7Ozs7cUNBRWFDLGEsRUFBZTtBQUN6QixpQkFBS0MsUUFBTCxDQUFjUCxJQUFkLENBQW1CLElBQUlRLFNBQUosQ0FBY0YsYUFBZCxDQUFuQjtBQUNIOzs7MkNBRW1CO0FBQ2hCLG1CQUFPLEtBQUtELGFBQVo7QUFDSDs7Ozs7O0FBR0xILE9BQU9DLE9BQVAsR0FBaUJDLGFBQWpCLEM7Ozs7Ozs7QUNoQkE7Ozs7OztJQUVNSyxVO0FBQ0Ysd0JBQWFDLElBQWIsRUFBbUJDLFNBQW5CLEVBQThCO0FBQUE7O0FBQzFCLGFBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLGFBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0g7Ozs7NENBRW9CLENBRXBCOzs7a0NBRVUsQ0FFVjs7O29DQUVZLENBRVo7Ozs7OztBQUdMVCxPQUFPQyxPQUFQLEdBQWlCTSxVQUFqQixDOzs7Ozs7O0FDckJBOzs7Ozs7QUFFQSxJQUFJRyxXQUFXLG1CQUFBQyxDQUFRLENBQVIsQ0FBZjtBQUFBLElBQ0laLFdBQVcsbUJBQUFZLENBQVEsQ0FBUixDQURmOztJQUdNQyxTO0FBQ0YseUJBQWU7QUFBQTs7QUFDWCxhQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsYUFBS0MsWUFBTDtBQUNIOzs7O2lDQUVTQyxLLEVBQU87QUFDYixpQkFBS0YsUUFBTCxHQUFnQkgsU0FBU0ssS0FBVCxDQUFoQjtBQUNIOzs7c0NBRWM7QUFDWCxnQkFBSUMsY0FBY0MsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBbEI7O0FBRUFGLHdCQUFZRyxrQkFBWixDQUErQixZQUEvQixFQUE2QyxLQUFLTixRQUFsRDtBQUNIOzs7dUNBRWUsQ0FDZjs7Ozs7O0FBR0xiLE9BQU9DLE9BQVAsR0FBaUJXLFNBQWpCLEM7Ozs7Ozs7QUN6QkE7Ozs7OztBQUVBLElBQUlRLG9CQUFvQixtQkFBQVQsQ0FBUSxDQUFSLENBQXhCO0FBQUEsSUFDSVQsZ0JBQWdCLG1CQUFBUyxDQUFRLENBQVIsQ0FEcEI7QUFBQSxJQUVJWixXQUFXLG1CQUFBWSxDQUFRLENBQVIsQ0FGZjs7SUFJTVUsa0I7QUFDRixnQ0FBYUMsV0FBYixFQUEwQjtBQUFBOztBQUN0QixhQUFLQSxXQUFMLEdBQW1CQSxXQUFuQjtBQUNBLGFBQUtDLE9BQUwsR0FBZSxLQUFLRCxXQUFMLENBQWlCLENBQWpCLENBQWY7QUFDQSxhQUFLRSxJQUFMLEdBQVksR0FBWjs7QUFFQSxhQUFLQyxrQkFBTDtBQUNBLGFBQUtDLHdCQUFMO0FBQ0EsYUFBS0MscUJBQUw7QUFDQSxhQUFLQyxtQkFBTDs7QUFFQSxhQUFLQyxhQUFMLEdBQXFCLElBQUkzQixhQUFKLEVBQXJCO0FBQ0EsYUFBSzRCLGlCQUFMLEdBQXlCLElBQUlWLGlCQUFKLEVBQXpCO0FBQ0EsYUFBS1UsaUJBQUwsQ0FBdUJDLGdCQUF2QixDQUF3QyxLQUFLRixhQUFMLENBQW1CRyxnQkFBbkIsRUFBeEM7QUFDSDs7Ozs2Q0FFcUI7QUFBQTs7QUFDbEJqQyxxQkFBU2tDLEdBQVQsQ0FBYSxvQkFBYixFQUFtQyxZQUFNO0FBQ3JDLHNCQUFLSCxpQkFBTCxDQUF1QkksV0FBdkIsQ0FBbUMsTUFBS1gsT0FBTCxDQUFhWSxLQUFoRCxFQUF1RCxNQUFLWixPQUFMLENBQWFhLE9BQXBFLEVBQTZFLE1BQUtaLElBQWxGLEVBQXdGLE1BQUtELE9BQUwsQ0FBYWQsU0FBckc7O0FBRUEsc0JBQUs0QixtQkFBTDtBQUNILGFBSkQ7QUFLSDs7OzhDQUVzQjtBQUFBOztBQUNuQnRDLHFCQUFTa0MsR0FBVCxDQUFhLHFCQUFiLEVBQW9DLFlBQU07QUFDdEMsdUJBQUtILGlCQUFMLENBQXVCUSxLQUF2QjtBQUNILGFBRkQ7QUFHSDs7O21EQUUyQjtBQUFBOztBQUMzQnZDLHFCQUFTa0MsR0FBVCxDQUFhLHdCQUFiLEVBQXVDLFVBQUNNLEtBQUQsRUFBVztBQUMzQyx1QkFBS2hCLE9BQUwsR0FBZSxPQUFLRCxXQUFMLENBQWlCa0IsSUFBakIsQ0FBc0IsVUFBQ0MsSUFBRDtBQUFBLDJCQUFVQSxLQUFLaEMsU0FBTCxLQUFtQjhCLEtBQTdCO0FBQUEsaUJBQXRCLENBQWY7QUFDQSx1QkFBS2YsSUFBTCxHQUFZLEdBQVo7O0FBRUEsdUJBQUtNLGlCQUFMLENBQXVCWSxhQUF2QixDQUFxQyxPQUFLbkIsT0FBTCxDQUFhWSxLQUFsRCxFQUF5RCxPQUFLWixPQUFMLENBQWFhLE9BQXRFLEVBQStFLE9BQUtaLElBQXBGLEVBQTBGLE9BQUtELE9BQUwsQ0FBYWQsU0FBdkc7QUFDSCxhQUxKO0FBTUE7Ozs4Q0FFc0I7QUFBQTs7QUFDbkJWLHFCQUFTa0MsR0FBVCxDQUFhLGFBQWIsRUFBNEIsWUFBTTtBQUM5Qix1QkFBS1QsSUFBTCxHQUFZLEdBQVo7O0FBRUEsdUJBQUtNLGlCQUFMLENBQXVCWSxhQUF2QixDQUFxQyxPQUFLbkIsT0FBTCxDQUFhWSxLQUFsRCxFQUF5RCxPQUFLWixPQUFMLENBQWFhLE9BQXRFLEVBQStFLE9BQUtaLElBQXBGLEVBQTBGLE9BQUtELE9BQUwsQ0FBYWQsU0FBdkc7QUFDSCxhQUpEO0FBS0g7OztnREFFd0I7QUFBQTs7QUFDckJWLHFCQUFTa0MsR0FBVCxDQUFhLGVBQWIsRUFBOEIsWUFBTTtBQUNoQyx1QkFBS1QsSUFBTCxHQUFZLEdBQVo7O0FBRUEsdUJBQUtNLGlCQUFMLENBQXVCWSxhQUF2QixDQUFxQyxPQUFLbkIsT0FBTCxDQUFhWSxLQUFsRCxFQUF5RCxPQUFLWixPQUFMLENBQWFhLE9BQXRFLEVBQStFLE9BQUtaLElBQXBGLEVBQTBGLE9BQUtELE9BQUwsQ0FBYWQsU0FBdkc7QUFDSCxhQUpEO0FBS0g7Ozs7OztBQUdMVCxPQUFPQyxPQUFQLEdBQWlCb0Isa0JBQWpCLEM7Ozs7Ozs7QUM5REE7Ozs7OztBQUVBLElBQUl0QixXQUFXLG1CQUFBWSxDQUFRLENBQVIsQ0FBZjtBQUFBLElBQ0lnQyxtQkFBbUIsbUJBQUFoQyxDQUFRLENBQVIsQ0FEdkI7O0lBR01TLGlCO0FBQ0YsaUNBQWU7QUFBQTs7QUFDWCxhQUFLd0IsS0FBTCxHQUFhM0IsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBYjtBQUNIOzs7O29DQUVZYixRLEVBQVV3QyxVLEVBQVlyQixJLEVBQU1zQixpQixFQUFtQjtBQUN4RCxpQkFBS0YsS0FBTCxDQUFXRyxTQUFYLEdBQXVCSixpQkFBaUIsS0FBS3hDLGFBQXRCLEVBQXFDRSxRQUFyQyxFQUErQ3dDLFVBQS9DLEVBQTJEckIsSUFBM0QsRUFBaUVzQixpQkFBakUsQ0FBdkI7QUFDQSxpQkFBS0UsSUFBTDtBQUNBLGlCQUFLbEMsWUFBTDtBQUNIOzs7c0NBRWNULFEsRUFBVXdDLFUsRUFBWXJCLEksRUFBTXNCLGlCLEVBQW1CO0FBQzFELGlCQUFLRixLQUFMLENBQVdHLFNBQVgsR0FBdUJKLGlCQUFpQixLQUFLeEMsYUFBdEIsRUFBcUNFLFFBQXJDLEVBQStDd0MsVUFBL0MsRUFBMkRyQixJQUEzRCxFQUFpRXNCLGlCQUFqRSxDQUF2QjtBQUNBLGlCQUFLaEMsWUFBTDtBQUNIOzs7eUNBRWlCWCxhLEVBQWU7QUFDN0IsaUJBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0g7OzsrQkFFTztBQUNKLGlCQUFLeUMsS0FBTCxDQUFXSyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixTQUF6QjtBQUNIOzs7dUNBRWU7QUFDWixnQkFBSUMsZ0JBQWdCbEMsU0FBU0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBcEI7QUFBQSxnQkFDSWtDLGtCQUFrQm5DLFNBQVNDLGFBQVQsQ0FBdUIsMkJBQXZCLENBRHRCO0FBQUEsZ0JBRUltQyxnQkFBZ0JwQyxTQUFTQyxhQUFULENBQXVCLG9CQUF2QixDQUZwQjtBQUFBLGdCQUdJb0Msa0JBQWtCckMsU0FBU0MsYUFBVCxDQUF1QixzQkFBdkIsQ0FIdEI7O0FBS0FpQywwQkFBY0ksZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUMxQ3hELHlCQUFTeUQsR0FBVCxDQUFhLHFCQUFiO0FBQ0F6RCx5QkFBUzBELEtBQVQsQ0FBZSxxQkFBZjtBQUNILGFBSEQ7O0FBS0FMLDRCQUFnQkcsZ0JBQWhCLENBQWlDLFFBQWpDLEVBQTJDLFVBQUNHLENBQUQsRUFBTztBQUM5QzNELHlCQUFTeUQsR0FBVCxDQUFhLHdCQUFiLEVBQXVDRSxFQUFFQyxNQUFGLENBQVNwQixLQUFoRDtBQUNILGFBRkQ7O0FBSUFjLDBCQUFjRSxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFNO0FBQzFDeEQseUJBQVN5RCxHQUFULENBQWEsYUFBYjtBQUNILGFBRkQ7O0FBSUFGLDRCQUFnQkMsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFlBQU07QUFDNUN4RCx5QkFBU3lELEdBQVQsQ0FBYSxlQUFiO0FBQ0gsYUFGRDtBQUdIOzs7dUNBRWU7QUFDWixnQkFBSUksZ0JBQWdCM0MsU0FBU0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBcEI7QUFBQSxnQkFDSTJDLHFCQUFxQjVDLFNBQVNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBRHpCO0FBQUEsZ0JBRUl2QixPQUFPLEVBRlg7O0FBSUFBLGlCQUFLYyxTQUFMLEdBQWlCb0QsbUJBQW1CQyxPQUFuQixDQUEyQkQsbUJBQW1CRSxhQUE5QyxFQUE2REMsSUFBOUU7QUFDQXJFLGlCQUFLYSxJQUFMLEdBQVlvRCxjQUFjckIsS0FBMUI7O0FBRUEsbUJBQU81QyxJQUFQO0FBQ0g7OztnQ0FFUTtBQUNMLGlCQUFLaUQsS0FBTCxDQUFXSyxTQUFYLENBQXFCZ0IsTUFBckIsQ0FBNEIsU0FBNUI7QUFDSDs7Ozs7O0FBR0xqRSxPQUFPQyxPQUFQLEdBQWlCbUIsaUJBQWpCLEM7Ozs7Ozs7QUNyRUE7O0FBRUEsSUFBSThDLG1CQUFtQixtQkFBQXZELENBQVEsRUFBUixDQUF2QjtBQUFBLElBQ0l3RCxnQkFBZ0IsbUJBQUF4RCxDQUFRLEVBQVIsQ0FEcEI7QUFBQSxJQUVJeUQsY0FBYyxtQkFBQXpELENBQVEsRUFBUixDQUZsQjs7QUFJQSxTQUFTZ0MsZ0JBQVQsQ0FBMkIwQixVQUEzQixFQUF1Q2xDLEtBQXZDLEVBQThDQyxPQUE5QyxFQUF1RGtDLE1BQXZELEVBQStEeEIsaUJBQS9ELEVBQWtGO0FBQzlFLFFBQUkzQyxnQkFBZ0IrRCxpQkFBaUJHLFVBQWpCLEVBQTZCdkIsaUJBQTdCLENBQXBCO0FBQUEsUUFDSUQsYUFBYXNCLGNBQWMvQixPQUFkLENBRGpCO0FBQUEsUUFFSS9CLFdBQVcrRCxZQUFZakMsS0FBWixDQUZmOztBQUlBLG1IQUNnRGhDLGFBRGhELDhZQVFzQm1FLFdBQVcsR0FBWCxHQUFnQmpFLFFBQWhCLEdBQTBCd0MsVUFSaEQ7QUFpQkg7O0FBRUQ3QyxPQUFPQyxPQUFQLEdBQWlCMEMsZ0JBQWpCLEM7Ozs7Ozs7QUM5QkE7O0FBRUEsU0FBU2pDLFFBQVQsQ0FBbUJLLEtBQW5CLEVBQTBCO0FBQ3RCLDZFQUNzQ0EsTUFBTVAsSUFENUMsU0FDb0RPLE1BQU1OLFNBRDFEO0FBTUg7O0FBRURULE9BQU9DLE9BQVAsR0FBaUJTLFFBQWpCLEM7Ozs7Ozs7QUNYQTs7Ozs7O0FBRUEsSUFBSTZELGVBQWUsbUJBQUE1RCxDQUFRLEVBQVIsQ0FBbkI7QUFBQSxJQUNJWixXQUFXLG1CQUFBWSxDQUFRLENBQVIsQ0FEZjs7SUFHTTZELGE7QUFDRiw2QkFBZTtBQUFBOztBQUNYLGFBQUszRCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7Ozs7aUNBRVM7QUFDTixnQkFBSTRELFlBQVl4RCxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBQWhCOztBQUVBLGlCQUFLTCxRQUFMLEdBQWdCMEQsY0FBaEI7O0FBRUFFLHNCQUFVdEQsa0JBQVYsQ0FBNkIsWUFBN0IsRUFBMkMsS0FBS04sUUFBaEQ7O0FBRUEsaUJBQUtDLFlBQUw7QUFDSDs7O3VDQUVlO0FBQ1osZ0JBQUk0RCxjQUFjekQsU0FBU0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBbEI7QUFBQSxnQkFDSXlELGNBQWMxRCxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBRGxCOztBQUdBd0Qsd0JBQVluQixnQkFBWixDQUE2QixPQUE3QixFQUFzQztBQUFBLHVCQUFNeEQsU0FBU3lELEdBQVQsQ0FBYSxpQkFBYixDQUFOO0FBQUEsYUFBdEM7QUFDQW1CLHdCQUFZcEIsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0M7QUFBQSx1QkFBTXhELFNBQVN5RCxHQUFULENBQWEsb0JBQWIsQ0FBTjtBQUFBLGFBQXRDO0FBQ0g7Ozs7OztBQUdMeEQsT0FBT0MsT0FBUCxHQUFpQnVFLGFBQWpCLEM7Ozs7Ozs7QUM3QkE7O0FBRUEsU0FBU0QsWUFBVCxHQUF5QjtBQUNyQjtBQVlIOztBQUVEdkUsT0FBT0MsT0FBUCxHQUFpQnNFLFlBQWpCLEM7Ozs7Ozs7QUNqQkE7Ozs7OztBQUVBLElBQUl4RSxXQUFXLG1CQUFBWSxDQUFRLENBQVIsQ0FBZjtBQUFBLElBQ0lDLFlBQVksbUJBQUFELENBQVEsQ0FBUixDQURoQjtBQUFBLElBRUlKLGFBQWEsbUJBQUFJLENBQVEsQ0FBUixDQUZqQjtBQUFBLElBR0lpRSxnQkFBZ0IsbUJBQUFqRSxDQUFRLEVBQVIsQ0FIcEI7O0lBS01rRSxpQjtBQUNGLGlDQUFlO0FBQUE7O0FBQ1gsYUFBSzFFLGFBQUwsR0FBcUIsRUFBckI7QUFDQSxhQUFLeUMsS0FBTCxHQUFhM0IsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBYjtBQUNIOzs7O3NDQUVjO0FBQ1gsaUJBQUswQixLQUFMLENBQVdHLFNBQVgsR0FBdUI2QixjQUFjLEtBQUt6RSxhQUFuQixDQUF2QjtBQUNBLGlCQUFLNkMsSUFBTDtBQUNBLGlCQUFLbEMsWUFBTDtBQUNIOzs7eUNBRWlCWCxhLEVBQWU7QUFDN0IsaUJBQUtBLGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0g7Ozt1Q0FFZTtBQUNaLGdCQUFJZ0QsZ0JBQWdCbEMsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBcEI7O0FBRUFpQywwQkFBY0ksZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtBQUMxQ3hELHlCQUFTeUQsR0FBVCxDQUFhLGFBQWI7QUFDQXpELHlCQUFTMEQsS0FBVCxDQUFlLGFBQWY7QUFDSCxhQUhEO0FBSUg7OzsrQkFFTztBQUNKLGlCQUFLYixLQUFMLENBQVdLLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFNBQXpCO0FBQ0g7Ozt1Q0FFZTtBQUNaLGdCQUFJVSxnQkFBZ0IzQyxTQUFTQyxhQUFULENBQXVCLG1CQUF2QixDQUFwQjtBQUFBLGdCQUNJMkMscUJBQXFCNUMsU0FBU0MsYUFBVCxDQUF1Qix3QkFBdkIsQ0FEekI7QUFBQSxnQkFFSXZCLE9BQU8sRUFGWDs7QUFJQUEsaUJBQUtjLFNBQUwsR0FBaUJvRCxtQkFBbUJDLE9BQW5CLENBQTJCRCxtQkFBbUJFLGFBQTlDLEVBQTZEQyxJQUE5RTtBQUNBckUsaUJBQUthLElBQUwsR0FBWW9ELGNBQWNyQixLQUExQjs7QUFFQSxtQkFBTzVDLElBQVA7QUFDSDs7O2dDQUVRO0FBQ0wsaUJBQUtpRCxLQUFMLENBQVdLLFNBQVgsQ0FBcUJnQixNQUFyQixDQUE0QixTQUE1QjtBQUNIOzs7Ozs7QUFHTGpFLE9BQU9DLE9BQVAsR0FBaUI0RSxpQkFBakIsQzs7Ozs7OztBQ3BEQTs7QUFFQSxTQUFTRCxhQUFULENBQXdCekUsYUFBeEIsRUFBdUM7QUFDbkMsUUFBSTJELFVBQVUsRUFBZDs7QUFFQTNELGtCQUFjUCxPQUFkLENBQXNCLFVBQUM2QyxJQUFELEVBQVU7QUFDNUJxQixnQ0FBc0JyQixJQUF0QjtBQUNILEtBRkQ7O0FBSUEsa1FBRStFcUIsT0FGL0U7QUFPSDs7QUFFRDlELE9BQU9DLE9BQVAsR0FBaUIyRSxhQUFqQixDOzs7Ozs7O0FDbEJBOzs7Ozs7QUFFQSxJQUFJSixnQkFBZ0IsbUJBQUE3RCxDQUFRLENBQVIsQ0FBcEI7QUFBQSxJQUNJQyxZQUFZLG1CQUFBRCxDQUFRLENBQVIsQ0FEaEI7QUFBQSxJQUVJSixhQUFhLG1CQUFBSSxDQUFRLENBQVIsQ0FGakI7QUFBQSxJQUdJa0Usb0JBQW9CLG1CQUFBbEUsQ0FBUSxFQUFSLENBSHhCO0FBQUEsSUFJSVQsZ0JBQWdCLG1CQUFBUyxDQUFRLENBQVIsQ0FKcEI7QUFBQSxJQUtJWixXQUFXLG1CQUFBWSxDQUFRLENBQVIsQ0FMZjs7SUFPTW1FLGU7QUFDRiw2QkFBYUMsTUFBYixFQUFxQjtBQUFBOztBQUNqQixhQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxhQUFLQyxhQUFMO0FBQ0g7Ozs7d0NBRWdCO0FBQ2IsZ0JBQUlDLGdCQUFnQixJQUFJVCxhQUFKLEVBQXBCOztBQUVBUywwQkFBY0MsTUFBZDtBQUNIOzs7d0NBRWdCO0FBQUE7O0FBQ2JuRixxQkFBU2tDLEdBQVQsQ0FBYSxpQkFBYixFQUFnQyxZQUFNO0FBQ2xDLG9CQUFJSixnQkFBZ0IsSUFBSTNCLGFBQUosRUFBcEI7QUFBQSxvQkFDSWlGLG9CQUFvQixJQUFJTixpQkFBSixFQUR4Qjs7QUFHQU0sa0NBQWtCcEQsZ0JBQWxCLENBQW1DRixjQUFjRyxnQkFBZCxFQUFuQztBQUNBbUQsa0NBQWtCakQsV0FBbEI7QUFDQSxzQkFBS2tELGlCQUFMO0FBQ0gsYUFQRDtBQVFIOzs7NENBRW9CO0FBQ2pCckYscUJBQVNrQyxHQUFULENBQWEsYUFBYixFQUE0QixZQUFNO0FBQzlCLG9CQUFJa0Qsb0JBQW9CLElBQUlOLGlCQUFKLEVBQXhCO0FBQUEsb0JBQ0lRLFlBQVksSUFBSXpFLFNBQUosRUFEaEI7QUFBQSxvQkFFSTBFLFlBQVksRUFGaEI7QUFBQSxvQkFHSXZFLFFBQVEsRUFIWjs7QUFLQXVFLDRCQUFZSCxrQkFBa0JJLFlBQWxCLEVBQVo7O0FBRUF4RSx3QkFBUSxJQUFJUixVQUFKLENBQWUrRSxVQUFVOUUsSUFBekIsRUFBK0I4RSxVQUFVN0UsU0FBekMsQ0FBUjs7QUFFQVYseUJBQVN5RCxHQUFULENBQWEsZUFBYixFQUE4QnpDLEtBQTlCOztBQUVBc0UsMEJBQVVHLFFBQVYsQ0FBbUJ6RSxLQUFuQjs7QUFFQW9FLGtDQUFrQjdDLEtBQWxCOztBQUVBK0MsMEJBQVVJLFdBQVY7QUFDSCxhQWpCRDtBQWtCSDs7Ozs7O0FBR0x6RixPQUFPQyxPQUFQLEdBQWlCNkUsZUFBakIsQzs7Ozs7OztBQ3REQTs7QUFFQTdELFNBQVNzQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENtQyxJQUE5Qzs7QUFFQSxTQUFTQSxJQUFULEdBQWlCO0FBQ2IsUUFBSUMsaUJBQWlCLG1CQUFBaEYsQ0FBUSxFQUFSLENBQXJCO0FBQUEsUUFDSWlGLGNBQWMsbUJBQUFqRixDQUFRLEVBQVIsQ0FEbEI7QUFBQSxRQUVJa0YsWUFBWSxtQkFBQWxGLENBQVEsRUFBUixDQUZoQjtBQUFBLFFBR0lULGdCQUFnQixtQkFBQVMsQ0FBUSxDQUFSLENBSHBCO0FBQUEsUUFJSW1GLGVBQWUsbUJBQUFuRixDQUFRLEVBQVIsQ0FKbkI7QUFBQSxRQUtJVSxxQkFBcUIsbUJBQUFWLENBQVEsQ0FBUixDQUx6QjtBQUFBLFFBTUlKLGFBQWEsbUJBQUFJLENBQVEsQ0FBUixDQU5qQjtBQUFBLFFBT0lDLFlBQVksbUJBQUFELENBQVEsQ0FBUixDQVBoQjtBQUFBLFFBUUk2RCxnQkFBZ0IsbUJBQUE3RCxDQUFRLENBQVIsQ0FScEI7QUFBQSxRQVNJNEQsZUFBZSxtQkFBQTVELENBQVEsRUFBUixDQVRuQjtBQUFBLFFBVUlrRSxvQkFBb0IsbUJBQUFsRSxDQUFRLEVBQVIsQ0FWeEI7QUFBQSxRQVdJUyxvQkFBb0IsbUJBQUFULENBQVEsQ0FBUixDQVh4QjtBQUFBLFFBWUlpRSxnQkFBZ0IsbUJBQUFqRSxDQUFRLEVBQVIsQ0FacEI7QUFBQSxRQWFJRCxXQUFXLG1CQUFBQyxDQUFRLENBQVIsQ0FiZjtBQUFBLFFBY0lnQyxtQkFBbUIsbUJBQUFoQyxDQUFRLENBQVIsQ0FkdkI7QUFBQSxRQWVJbUUsa0JBQWtCLG1CQUFBbkUsQ0FBUSxFQUFSLENBZnRCO0FBQUEsUUFnQklvRixNQUFNLG1CQUFBcEYsQ0FBUSxFQUFSLENBaEJWO0FBQUEsUUFpQkluQixXQUFXLG1CQUFBbUIsQ0FBUSxDQUFSLENBakJmOztBQW1CQSxRQUFJcUYsTUFBTSxJQUFJRCxHQUFKLEVBQVY7O0FBRUFDLFFBQUlDLEtBQUo7QUFDSCxDOzs7Ozs7OzhDQzNCRDs7Ozs7O0lBRU1OLGM7QUFDRiw0QkFBYXZGLGFBQWIsRUFBNEI7QUFBQTs7QUFDeEIsYUFBS0EsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsYUFBS3dDLFVBQUwsR0FBa0IsRUFBbEI7QUFDSDs7Ozt5Q0FFaUJwQyxTLEVBQVc7QUFBQTs7QUFDekIsZ0JBQUl5RixNQUFNO0FBQ05DLG9CQUFJLGNBQU07QUFDTiwwQkFBSzlGLFFBQUwsR0FBZ0IsQ0FBQyxXQUFELEVBQWMsV0FBZCxFQUEyQixXQUEzQixFQUF3QyxXQUF4QyxFQUFxRCxTQUFyRCxFQUFnRSxPQUFoRSxDQUFoQjtBQUNILGlCQUhLO0FBSU4rRixvQkFBSSxjQUFNO0FBQ04sMEJBQUsvRixRQUFMLEdBQWdCLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsV0FBM0IsRUFBd0MsV0FBeEMsRUFBcUQsU0FBckQsRUFBZ0UsT0FBaEUsQ0FBaEI7QUFDSCxpQkFOSztBQU9OZ0cscUJBQUssZUFBTTtBQUNQLDBCQUFLaEcsUUFBTCxHQUFnQixDQUFDLFdBQUQsRUFBYyxXQUFkLEVBQTJCLFdBQTNCLEVBQXdDLFdBQXhDLEVBQXFELFVBQXJELEVBQWlFLE9BQWpFLENBQWhCO0FBQ0g7QUFUSyxhQUFWOztBQVlBLG1CQUFPNkYsSUFBSXpGLFNBQUosR0FBUDtBQUNIOzs7MkNBRW1CQSxTLEVBQVc7QUFBQTs7QUFDM0IsZ0JBQUl5RixNQUFNO0FBQ05DLG9CQUFJLGNBQU07QUFDTiwyQkFBS3RELFVBQUwsR0FBa0IsQ0FBQztBQUNmckMsOEJBQU0sV0FEUztBQUVmOEYsZ0NBQVFBLE1BRk87QUFHZkMsbUNBQVdBLFNBSEk7QUFJZkMsK0JBQU87QUFKUSxxQkFBRCxFQUtmO0FBQ0NoRyw4QkFBTSxXQURQO0FBRUM4RixnQ0FBUUEsTUFGVDtBQUdDQyxtQ0FBV0EsU0FIWjtBQUlDQywrQkFBTztBQUpSLHFCQUxlLEVBVWY7QUFDQ2hHLDhCQUFNLFdBRFA7QUFFQzhGLGdDQUFRQSxNQUZUO0FBR0NDLG1DQUFXQSxTQUhaO0FBSUNDLCtCQUFPO0FBSlIscUJBVmUsRUFlZjtBQUNDaEcsOEJBQU0sV0FEUDtBQUVDOEYsZ0NBQVFBLE1BRlQ7QUFHQ0MsbUNBQVdBLFNBSFo7QUFJQ0MsK0JBQU87QUFKUixxQkFmZSxFQW9CZjtBQUNDaEcsOEJBQU0sU0FEUDtBQUVDOEYsZ0NBQVFBLE1BRlQ7QUFHQ0MsbUNBQVdBLFNBSFo7QUFJQ0MsK0JBQU87QUFKUixxQkFwQmUsRUF5QmY7QUFDQ2hHLDhCQUFNLE9BRFA7QUFFQzhGLGdDQUFRQSxNQUZUO0FBR0NDLG1DQUFXQSxTQUhaO0FBSUNDLCtCQUFPO0FBSlIscUJBekJlLENBQWxCO0FBK0JILGlCQWpDSztBQWtDTkosb0JBQUksY0FBTTtBQUNOLDJCQUFLdkQsVUFBTCxHQUFrQixDQUFDO0FBQ2ZyQyw4QkFBTSxXQURTO0FBRWY4RixnQ0FBUUEsTUFGTztBQUdmQyxtQ0FBV0EsU0FISTtBQUlmQywrQkFBTztBQUpRLHFCQUFELEVBS2Y7QUFDQ2hHLDhCQUFNLFdBRFA7QUFFQzhGLGdDQUFRQSxNQUZUO0FBR0NDLG1DQUFXQSxTQUhaO0FBSUNDLCtCQUFPO0FBSlIscUJBTGUsRUFVZjtBQUNDaEcsOEJBQU0sV0FEUDtBQUVDOEYsZ0NBQVFBLE1BRlQ7QUFHQ0MsbUNBQVdBLFNBSFo7QUFJQ0MsK0JBQU87QUFKUixxQkFWZSxFQWVmO0FBQ0NoRyw4QkFBTSxXQURQO0FBRUM4RixnQ0FBUUEsTUFGVDtBQUdDQyxtQ0FBV0EsU0FIWjtBQUlDQywrQkFBTztBQUpSLHFCQWZlLEVBb0JmO0FBQ0NoRyw4QkFBTSxTQURQO0FBRUM4RixnQ0FBUUEsTUFGVDtBQUdDQyxtQ0FBV0EsU0FIWjtBQUlDQywrQkFBTztBQUpSLHFCQXBCZSxFQXlCZjtBQUNDaEcsOEJBQU0sT0FEUDtBQUVDOEYsZ0NBQVFBLE1BRlQ7QUFHQ0MsbUNBQVdBLFNBSFo7QUFJQ0MsK0JBQU87QUFKUixxQkF6QmUsQ0FBbEI7QUErQkgsaUJBbEVLO0FBbUVOSCxxQkFBSyxlQUFNO0FBQ1AsMkJBQUt4RCxVQUFMLEdBQWtCLENBQUM7QUFDZnJDLDhCQUFNLFdBRFM7QUFFZjhGLGdDQUFRQSxNQUZPO0FBR2ZDLG1DQUFXQSxTQUhJO0FBSWZDLCtCQUFPO0FBSlEscUJBQUQsRUFLZjtBQUNDaEcsOEJBQU0sV0FEUDtBQUVDOEYsZ0NBQVFBLE1BRlQ7QUFHQ0MsbUNBQVdBLFNBSFo7QUFJQ0MsK0JBQU87QUFKUixxQkFMZSxFQVVmO0FBQ0NoRyw4QkFBTSxXQURQO0FBRUM4RixnQ0FBUUEsTUFGVDtBQUdDQyxtQ0FBV0EsU0FIWjtBQUlDQywrQkFBTztBQUpSLHFCQVZlLEVBZWY7QUFDQ2hHLDhCQUFNLFdBRFA7QUFFQzhGLGdDQUFRQSxNQUZUO0FBR0NDLG1DQUFXQSxTQUhaO0FBSUNDLCtCQUFPO0FBSlIscUJBZmUsRUFvQmY7QUFDQ2hHLDhCQUFNLFVBRFA7QUFFQzhGLGdDQUFRQSxNQUZUO0FBR0NDLG1DQUFXQSxTQUhaO0FBSUNDLCtCQUFPO0FBSlIscUJBcEJlLEVBeUJmO0FBQ0NoRyw4QkFBTSxPQURQO0FBRUM4RixnQ0FBUUEsTUFGVDtBQUdDQyxtQ0FBV0EsU0FIWjtBQUlDQywrQkFBTztBQUpSLHFCQXpCZSxDQUFsQjtBQStCSDtBQW5HSyxhQUFWOztBQXNHQSxtQkFBT04sSUFBSXpGLFNBQUosR0FBUDtBQUNIOzs7Z0NBRVFnRyxRLEVBQVU7QUFDZixpQkFBS3BHLFFBQUwsQ0FBY1AsSUFBZCxDQUFtQixJQUFJNEcsSUFBSixDQUFTRCxRQUFULENBQW5CO0FBQ0g7OztrQ0FFVXRFLEssRUFBT21FLE0sRUFBUUMsUyxFQUFXQyxLLEVBQU87QUFDeEMsaUJBQUszRCxVQUFMLENBQWdCL0MsSUFBaEIsQ0FBcUIsSUFBSTZHLE1BQUosQ0FBV3hFLEtBQVgsRUFBa0JtRSxNQUFsQixFQUEwQkMsU0FBMUIsRUFBcUNDLEtBQXJDLENBQXJCO0FBQ0g7OztxQ0FFYSxDQUViOzs7dUNBRWUsQ0FFZjs7Ozs7O0FBR0x4RyxPQUFPNEcsTUFBUCxHQUFnQmpCLGNBQWhCLEM7Ozs7Ozs7OzhDQ3BKQTs7OztJQUVNQyxXLEdBQ0YscUJBQWF6RCxLQUFiLEVBQW9CbUUsTUFBcEIsRUFBNEJDLFNBQTVCLEVBQXVDQyxLQUF2QyxFQUE4QztBQUFBOztBQUMxQyxTQUFLckUsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBSzBFLFVBQUwsR0FBa0IsQ0FBQyxTQUFELEVBQVksS0FBWixFQUFtQixLQUFuQixFQUEwQixPQUExQixDQUFsQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLEdBQVosRUFBaUIsSUFBakIsRUFBdUIsR0FBdkIsQ0FBckI7QUFDQSxTQUFLTixLQUFMLEdBQWFBLEtBQWI7QUFDSDs7QUFFTDs7O0FBR0F4RyxPQUFPNEcsTUFBUCxHQUFnQmhCLFdBQWhCLEM7Ozs7Ozs7OzhDQ2JBOzs7O0lBRU1DLFMsR0FDRixtQkFBYXJGLElBQWIsRUFBbUJ1RyxRQUFuQixFQUE2QlAsS0FBN0IsRUFBb0M7QUFBQTs7QUFDaEMsU0FBS2hHLElBQUwsR0FBWUEsSUFBWjtBQUNBO0FBQ0E7QUFDSCxDOztBQUtMUixPQUFPNEcsTUFBUCxHQUFnQmYsU0FBaEIsQzs7Ozs7Ozs7OENDWkE7Ozs7SUFFTUMsWSxHQUNGLHdCQUFlO0FBQUE7QUFFZCxDOztBQUVMOUYsT0FBTzRHLE1BQVAsR0FBZ0JkLFlBQWhCLEM7Ozs7Ozs7O0FDUEE7O0FBRUEsU0FBUzVCLGdCQUFULENBQTJCL0QsYUFBM0IsRUFBMEMyQyxpQkFBMUMsRUFBNkQ7QUFDekQsUUFBSWdCLFVBQVUsRUFBZDs7QUFFQTNELGtCQUFjUCxPQUFkLENBQXNCLFVBQUM2QyxJQUFELEVBQVU7QUFDNUJxQix3Q0FBNkJyQixJQUE3QixZQUFzQ0ssc0JBQXNCTCxJQUF0QixHQUE0QixVQUE1QixHQUF3QyxFQUE5RSxVQUFvRkEsSUFBcEY7QUFDSCxLQUZEOztBQUlBLDZJQUNxRnFCLE9BRHJGO0FBSUg7O0FBRUQ5RCxPQUFPQyxPQUFQLEdBQWlCaUUsZ0JBQWpCLEM7Ozs7Ozs7QUNmQTs7QUFFQSxTQUFTQyxhQUFULENBQXdCdEIsVUFBeEIsRUFBb0M7QUFDaEMsUUFBSVQsVUFBVSxFQUFkOztBQUVBUyxlQUFXakQsT0FBWCxDQUFtQixVQUFDb0gsTUFBRCxFQUFZO0FBQzNCNUUsNENBQWtDNEUsTUFBbEM7QUFDSCxLQUZEOztBQUlBLDhIQUV1QzVFLE9BRnZDO0FBS0g7O0FBRURwQyxPQUFPQyxPQUFQLEdBQWlCa0UsYUFBakIsQzs7Ozs7OztBQ2hCQTs7QUFFQSxTQUFTQyxXQUFULENBQXNCNkMsU0FBdEIsRUFBaUM7QUFDN0IsUUFBSTlFLFFBQVEsRUFBWjs7QUFFQThFLGNBQVVySCxPQUFWLENBQWtCLFVBQUNzSCxJQUFELEVBQVU7QUFDeEIvRSx3Q0FBOEIrRSxJQUE5QjtBQUNILEtBRkQ7O0FBSUEsd0hBRXFDL0UsS0FGckM7QUFLSDs7QUFFRG5DLE9BQU9DLE9BQVAsR0FBaUJtRSxXQUFqQixDOzs7Ozs7O0FDaEJBOzs7Ozs7QUFFQSxJQUFJVSxrQkFBa0IsbUJBQUFuRSxDQUFRLEVBQVIsQ0FBdEI7QUFBQSxJQUNJVSxxQkFBcUIsbUJBQUFWLENBQVEsQ0FBUixDQUR6QjtBQUFBLElBRUl3RyxXQUFXLG1CQUFBeEcsQ0FBUSxFQUFSLENBRmY7QUFBQSxJQUdJWixXQUFXLG1CQUFBWSxDQUFRLENBQVIsQ0FIZjs7SUFLTW9GLEc7QUFDRixtQkFBZTtBQUFBOztBQUNYLGFBQUtoQixNQUFMLEdBQWMsRUFBZDtBQUNBLGFBQUtxQyxRQUFMLEdBQWdCRCxTQUFTQyxRQUF6QjtBQUNBLGFBQUtDLFNBQUw7QUFDSDs7OztnQ0FFUTtBQUNMLGdCQUFJQyxrQkFBa0IsSUFBSXhDLGVBQUosQ0FBb0IsS0FBS0MsTUFBekIsQ0FBdEI7QUFBQSxnQkFDSXdDLHFCQUFxQixJQUFJbEcsa0JBQUosQ0FBdUIsS0FBSytGLFFBQTVCLENBRHpCOztBQUdBRSw0QkFBZ0JFLGFBQWhCO0FBQ0g7OztpQ0FFU3pHLEssRUFBTztBQUNiLGlCQUFLZ0UsTUFBTCxDQUFZakYsSUFBWixDQUFpQmlCLEtBQWpCO0FBQ0g7OztvQ0FFWTtBQUFBOztBQUNUaEIscUJBQVNrQyxHQUFULENBQWEsZUFBYixFQUE4QixVQUFDbEIsS0FBRCxFQUFXO0FBQ3JDLHNCQUFLZ0UsTUFBTCxDQUFZakYsSUFBWixDQUFpQmlCLEtBQWpCO0FBQ0gsYUFGRDtBQUdIOzs7Ozs7QUFHTGYsT0FBT0MsT0FBUCxHQUFpQjhGLEdBQWpCLEM7Ozs7Ozs7QUNoQ0E7O0FBRUEsSUFBSW9CLFdBQVc7QUFDWHBDLFlBQVEsQ0FDSjtBQUNJdEUsbUJBQVcsSUFEZjtBQUVJRCxjQUFNO0FBRlYsS0FESSxFQUtKO0FBQ0lDLG1CQUFXLElBRGY7QUFFSUQsY0FBTTtBQUZWLEtBTEksRUFTSjtBQUNJQyxtQkFBVyxLQURmO0FBRUlELGNBQU07QUFGVixLQVRJLENBREc7QUFlWDRHLGNBQVUsQ0FDTjtBQUNJM0csbUJBQVcsSUFEZjtBQUVJMEIsZUFBTyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFNBQWpCLEVBQTRCLFVBQTVCLENBRlg7QUFHSUMsaUJBQVMsQ0FBQyxNQUFEO0FBSGIsS0FETSxFQU1OO0FBQ0kzQixtQkFBVyxLQURmO0FBRUkwQixlQUFPLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsV0FBakIsQ0FGWDtBQUdJQyxpQkFBUyxDQUFDLE9BQUQ7QUFIYixLQU5NLEVBV047QUFDSTNCLG1CQUFXLElBRGY7QUFFSTBCLGVBQU8sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixDQUZYO0FBR0lDLGlCQUFTLENBQUMsTUFBRDtBQUhiLEtBWE0sRUFnQk47QUFDSTNCLG1CQUFXLE9BRGY7QUFFSTBCLGVBQU8sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixPQUFqQixFQUEwQixPQUExQixDQUZYO0FBR0lDLGlCQUFTLENBQUMsU0FBRDtBQUhiLEtBaEJNO0FBZkMsQ0FBZjs7QUF1Q0FwQyxPQUFPQyxPQUFQLEdBQWlCa0gsUUFBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTA4Y2JjMmJkODAxMzc4YjhlN2MiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE1lZGlhdG9yIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICB9XG5cbiAgICBwdWIgKGNoYW5uZWwsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0uZm9yRWFjaCgoZm4pID0+IGZuKGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1YiAoY2hhbm5lbCwgZm4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLnB1c2goZm4pO1xuICAgIH1cblxuICAgIHVuc3ViIChjaGFubmVsKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xuICAgIH1cbn1cblxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFNldHRpbmdzTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gWydVSScsICdHTycsICdQSFAnLCAnT3RoZXInXTtcbiAgICB9XG5cbiAgICBhZGREaXJlY3Rpb24gKGRpcmVjdGlvbk5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBEaXJlY3Rpb24oZGlyZWN0aW9uTmFtZSkpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGlvbkxpc3QgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb25MaXN0O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBhZGRUZXN0aW5nU2Vzc2lvbiAoKSB7XG5cbiAgICB9XG5cbiAgICBhZGRUZXN0ICgpIHtcblxuICAgIH1cblxuICAgIGFkZEZpbHRlciAoKSB7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ3JvdXBUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cFRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwVHBsKGdyb3VwKTtcbiAgICB9XG5cbiAgICByZW5kZXJHcm91cCAoKSB7XG4gICAgICAgIGxldCBncm91cHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC13cmFwcGVyJyk7XG5cbiAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKHNldHRpbmdMaXN0KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ0xpc3QgPSBzZXR0aW5nTGlzdDtcbiAgICAgICAgdGhpcy5zZXR0aW5nID0gdGhpcy5zZXR0aW5nTGlzdFswXTtcbiAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlT3BlblBvcHVwKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0RmlsdGVyKCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0VGVzdCgpO1xuXG4gICAgICAgIHRoaXMuc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKCk7XG4gICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcgPSBuZXcgUG9wdXBTZXR0aW5nc1ZpZXcoKTtcbiAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5zZXREaXJlY3Rpb25MaXN0KHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25MaXN0KCkpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZU9wZW5Qb3B1cCAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZW5kZXJQb3B1cCh0aGlzLnNldHRpbmcudGVzdHMsIHRoaXMuc2V0dGluZy5maWx0ZXJzLCB0aGlzLm1vZGUsIHRoaXMuc2V0dGluZy5kaXJlY3Rpb24pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlQ2xvc2VQb3B1cCAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uICgpIHtcbiAgICBcdG1lZGlhdG9yLnN1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXR0aW5nID0gdGhpcy5zZXR0aW5nTGlzdC5maW5kKChpdGVtKSA9PiBpdGVtLmRpcmVjdGlvbiA9PT0gdmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAodGhpcy5zZXR0aW5nLnRlc3RzLCB0aGlzLnNldHRpbmcuZmlsdGVycywgdGhpcy5tb2RlLCB0aGlzLnNldHRpbmcuZGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU2VsZWN0VGVzdCAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YigndGVzdDpzZWxlY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cCh0aGlzLnNldHRpbmcudGVzdHMsIHRoaXMuc2V0dGluZy5maWx0ZXJzLCB0aGlzLm1vZGUsIHRoaXMuc2V0dGluZy5kaXJlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVTZWxlY3RGaWx0ZXIgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ2ZpbHRlcjpzZWxlY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnRic7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cCh0aGlzLnNldHRpbmcudGVzdHMsIHRoaXMuc2V0dGluZy5maWx0ZXJzLCB0aGlzLm1vZGUsIHRoaXMuc2V0dGluZy5kaXJlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIHNldHRpbmdzUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyk7XG5cbmNsYXNzIFBvcHVwU2V0dGluZ3NWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MnKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3B1cCAodGVzdExpc3QsIGZpbHRlckxpc3QsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gc2V0dGluZ3NQb3B1cFRwbCh0aGlzLmRpcmVjdGlvbkxpc3QsIHRlc3RMaXN0LCBmaWx0ZXJMaXN0LCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJlUmVuZGVyUG9wdXAgKHRlc3RMaXN0LCBmaWx0ZXJMaXN0LCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHNldHRpbmdzUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0LCB0ZXN0TGlzdCwgZmlsdGVyTGlzdCwgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdDtcbiAgICB9XG5cbiAgICBvcGVuICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2Utc2V0dGluZ3MtYnRuJyksXG4gICAgICAgICAgICBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uJyksXG4gICAgICAgICAgICBzZWxlY3RUZXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3Qtc2V0dGluZ3MtYnRuJyksXG4gICAgICAgICAgICBzZWxlY3RGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLXNldHRpbmdzLWJ0bicpO1xuXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpcmVjdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3RUZXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCd0ZXN0OnNlbGVjdCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBzZWxlY3RGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2ZpbHRlcjpzZWxlY3QnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cE5hbWUnKSxcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwRGlyZWN0aW9uJyksXG4gICAgICAgICAgICBkYXRhID0ge307XG5cbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBkaXJlY3Rpb25MaXN0VHBsID0gcmVxdWlyZSgnLi9kaXJlY3Rpb25MaXN0VHBsLmpzJyksXG4gICAgZmlsdGVyTGlzdFRwbCA9IHJlcXVpcmUoJy4vZmlsdGVyTGlzdFRwbC5qcycpLFxuICAgIHRlc3RMaXN0VHBsID0gcmVxdWlyZSgnLi90ZXN0TGlzdFRwbC5qcycpO1xuXG5mdW5jdGlvbiBzZXR0aW5nc1BvcHVwVHBsIChkaXJlY3Rpb25zLCB0ZXN0cywgZmlsdGVycywgb3B0aW9uLCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgIGxldCBkaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdFRwbChkaXJlY3Rpb25zLCBzZWxlY3RlZERpcmVjdGlvbiksXG4gICAgICAgIGZpbHRlckxpc3QgPSBmaWx0ZXJMaXN0VHBsKGZpbHRlcnMpLFxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHRlc3RzKTtcblxuICAgIHJldHVybiBgPGRpdiBpZD1cInNldHRpbmdzLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbHRlci1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5GPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke29wdGlvbiA9PT0gJ1QnPyB0ZXN0TGlzdDogZmlsdGVyTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dGluZ3NQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3VwVHBsIChncm91cCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPmZvcm1hdCBhZGRlZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncm91cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBMaXN0VmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IGxlZnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbHVtbicpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcblxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKSxcbiAgICAgICAgICAgIHNldHRpbmdzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzLWJ0bicpO1xuXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cFBvcHVwOm9wZW4nKSk7XG4gICAgICAgIHNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOm9wZW4nKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTGlzdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm91cExpc3RUcGwgKCkge1xuICAgIHJldHVybiBgPHNlY3Rpb24gaWQ9XCJncm91cC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Hcm91cDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLXdyYXBwZXIgZ3JvdXAtd3JhcHBlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZ3JvdXAtYnRuXCI+YWRkIGdyb3VwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcbiAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKTtcblxuY2xhc3MgUG9wdXBBZGRHcm91cFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gW107XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGdyb3VwUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0KTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgc2V0RGlyZWN0aW9uTGlzdCAoZGlyZWN0aW9uTGlzdCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0O1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWdyb3VwLWJ0bicpO1xuXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2dyb3VwOmFkZGVkJyk7XG4gICAgICAgICAgICBtZWRpYXRvci51bnN1YignZ3JvdXA6YWRkZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3BlbiAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XG4gICAgICAgIGxldCBncm91cE5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLW5hbWUnKSxcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1kaXJlY3Rpb24nKSxcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcblxuICAgICAgICBkYXRhLmRpcmVjdGlvbiA9IGdyb3VwRGlyZWN0aW9uRWxlbS5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbS5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3VwUG9wdXBUcGwgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xuXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJncm91cC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibW9kYWwtZ3JvdXAtbmFtZVwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncm91cFBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgICAgICB0aGlzLnN1YnNjcmliZU9wZW4oKTtcbiAgICB9XG5cbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpO1xuXG4gICAgICAgIGdyb3VwTGlzdFZpZXcucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlT3BlbiAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbCgpLFxuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XG5cbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnNldERpcmVjdGlvbkxpc3Qoc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25MaXN0KCkpO1xuICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQWRkR3JvdXAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlQWRkR3JvdXAgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmFkZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCksXG4gICAgICAgICAgICAgICAgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpLFxuICAgICAgICAgICAgICAgIGdyb3VwRGF0YSA9IHt9LFxuICAgICAgICAgICAgICAgIGdyb3VwID0ge307XG5cbiAgICAgICAgICAgIGdyb3VwRGF0YSA9IHBvcHVwQWRkR3JvdXBWaWV3LmdlbmVyYXRlRGF0YSgpO1xuXG4gICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGdyb3VwRGF0YS5uYW1lLCBncm91cERhdGEuZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xuXG4gICAgICAgICAgICBncm91cFZpZXcuc2V0R3JvdXAoZ3JvdXApO1xuXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5jbG9zZSgpO1xuXG4gICAgICAgICAgICBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gICAgbGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpLFxuICAgICAgICBGaWx0ZXJNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMnKSxcbiAgICAgICAgVGVzdE1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMnKSxcbiAgICAgICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgICAgICBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzJyksXG4gICAgICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXG4gICAgICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXG4gICAgICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgICAgIEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcbiAgICAgICAgZ3JvdXBMaXN0VHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzJyksXG4gICAgICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxuICAgICAgICBQb3B1cFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcycpLFxuICAgICAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpLFxuICAgICAgICBncm91cFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzJyksXG4gICAgICAgIHNldHRpbmdzUG9wdXBUcGwgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMnKSxcbiAgICAgICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXG4gICAgICAgIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyksXG4gICAgICAgIE1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xuXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgICBcbiAgICBhcHAuc3RhcnQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIERpcmVjdGlvbk1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbk5hbWUgPSBkaXJlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnRlc3RMaXN0ID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFtdO1xuICAgIH1cblxuICAgIGdldERpcmVjdGlvblRlc3QgKGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgVUk6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RMaXN0ID0gWydFbmdsaXNoIDEnLCAnRW5nbGlzaCAyJywgJ0VuZ2xpc2ggMycsICdFbmdsaXNoIDQnLCAnSlMgQ29yZScsICdFc3NheSddO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEdPOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFsnRW5nbGlzaCAxJywgJ0VuZ2xpc2ggMicsICdFbmdsaXNoIDMnLCAnRW5nbGlzaCA0JywgJ0dPIENvcmUnLCAnRXNzYXknXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBQSFA6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RMaXN0ID0gWydFbmdsaXNoIDEnLCAnRW5nbGlzaCAyJywgJ0VuZ2xpc2ggMycsICdFbmdsaXNoIDQnLCAnUEhQIENvcmUnLCAnRXNzYXknXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb2JqW2RpcmVjdGlvbl0oKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25GaWx0ZXIgKGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgVUk6ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAxJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFbmdsaXNoIDInLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMycsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCA0JyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdKUyBDb3JlJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgR086ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAxJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFbmdsaXNoIDInLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMycsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCA0JyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdHTyBDb3JlJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUEhQOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW3tcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMScsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRW5nbGlzaCAyJyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFbmdsaXNoIDMnLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggNCcsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnUEhQIENvcmUnLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmpbZGlyZWN0aW9uXSgpO1xuICAgIH1cblxuICAgIGFkZFRlc3QgKHRlc3ROYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xuICAgIH1cblxuICAgIGFkZEZpbHRlciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLmZpbHRlckxpc3QucHVzaChuZXcgRmlsdGVyKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpKTtcbiAgICB9XG5cbiAgICBkZWxldGVUZXN0ICgpIHtcblxuICAgIH1cblxuICAgIGRlbGV0ZUZpbHRlciAoKSB7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnQgPSBEaXJlY3Rpb25Nb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBGaWx0ZXJNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzO1xuICAgICAgICB0aGlzLmFjdGlvbkxpc3QgPSBbJ2F2ZXJhZ2UnLCAnbWF4JywgJ21pbicsICdlcXVhbCddO1xuICAgICAgICB0aGlzLmNvbmRpdGlvbkxpc3QgPSBbJz4nLCAnPj0nLCAnPScsICc8PScsICc8J107XG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcbiAgICB9XG5cbi8vIGFkZFRlc3QsIGNoYW5nZUFjdGlvbiwgY2hhbmdlQ29uZGl0aW9uLCBjaGFuZ2VHcmFkZVxufVxuXG5tb2R1bGUuZXhwb3J0ID0gRmlsdGVyTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgVGVzdE1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbWF4R3JhZGUsIGdyYWRlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8vIHRoaXMubWF4R3JhZGUgPSBtYXhHcmFkZTtcbiAgICAgICAgLy8gdGhpcy5ncmFkZSA9IGdyYWRlO1xuICAgIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnQgPSBUZXN0TW9kZWw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1Rlc3RNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgU2V0dGluZ3NWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIFxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnQgPSBTZXR0aW5nc1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZGlyZWN0aW9uTGlzdFRwbCAoZGlyZWN0aW9uTGlzdCwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xuXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9JyR7aXRlbX0nICR7c2VsZWN0ZWREaXJlY3Rpb24gPT09IGl0ZW0/ICdzZWxlY3RlZCc6ICcnfT4ke2l0ZW19PC9vcHRpb24+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImRpcmVjdGlvbi1saXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZGlyZWN0aW9uLWJ0blwiPmFkZCBkaXJlY3Rpb248L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGlyZWN0aW9uTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpbHRlckxpc3RUcGwgKGZpbHRlckxpc3QpIHtcbiAgICBsZXQgZmlsdGVycyA9ICcnO1xuXG4gICAgZmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgZmlsdGVycyArPSBgPGRpdiBjbGFzcz1cImZpbHRlclwiPiR7ZmlsdGVyfTwvZGl2PmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgzPkZpbHRlcnM8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdFwiPiR7ZmlsdGVyc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWZpbHRlci1idG4gYnRuXCI+YWRkIGZpbHRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaWx0ZXJMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gdGVzdExpc3RUcGwgKHRlc3RzTGlzdCkge1xuICAgIGxldCB0ZXN0cyA9ICcnO1xuXG4gICAgdGVzdHNMaXN0LmZvckVhY2goKHRlc3QpID0+IHtcbiAgICAgICAgdGVzdHMgKz0gYDxkaXYgY2xhc3M9XCJ0ZXN0XCI+JHt0ZXN0fTwvZGl2PmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ0ZXN0LWxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxoMz5UZXN0czwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlc3QtbGlzdFwiPiR7dGVzdHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC10ZXN0LWJ0biBidG5cIj5hZGQgdGVzdDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0TGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXG4gICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcbiAgICB0ZXN0RGF0YSA9IHJlcXVpcmUoJy4vdGVzdERhdGEuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gW107XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0ZXN0RGF0YS5zZXR0aW5ncztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBncm91cENvbnRyb2xsZXIgPSBuZXcgR3JvdXBDb250cm9sbGVyKHRoaXMuZ3JvdXBzKSxcbiAgICAgICAgICAgIHNldHRpbmdzQ29udHJvbGxlciA9IG5ldyBTZXR0aW5nc0NvbnRyb2xsZXIodGhpcy5zZXR0aW5ncyk7XG4gICAgICAgIFxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xuICAgIH1cblxuICAgIGFkZEdyb3VwIChncm91cCkge1xuICAgICAgICB0aGlzLmdyb3Vwcy5wdXNoKGdyb3VwKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCB0ZXN0RGF0YSA9IHtcbiAgICBncm91cHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAndWknLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTExNy1qcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnZ28nLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyMy1nbydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAncGhwJyxcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMjctcGhwJ1xuICAgICAgICB9XG4gICAgXSxcbiAgICBzZXR0aW5nczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdVSScsXG4gICAgICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnSlMgQ29yZScsICdFc3NheSBVSSddLFxuICAgICAgICAgICAgZmlsdGVyczogWydVSSAxJ11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnUEhQJyxcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBQSFAnXSxcbiAgICAgICAgICAgIGZpbHRlcnM6IFsnUEhQIDEnXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdHTycsXG4gICAgICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnRXNzYXkgR08nXSxcbiAgICAgICAgICAgIGZpbHRlcnM6IFsnR08gMSddXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ090aGVyJyxcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdPdGhlcicsICdPdGhlciddLFxuICAgICAgICAgICAgZmlsdGVyczogWydPdGhlciAxJ11cbiAgICAgICAgfVxuICAgIF1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdERhdGE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=