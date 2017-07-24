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
    testData = __webpack_require__(23);

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.groups = [];
        this.settings = testData.settings;
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
            var groupController = new GroupController(this.groups),
                settingsController = new SettingsController(this.settings);

            groupController.showGroupList();
        }
    }, {
        key: 'setGroups',
        value: function setGroups(groups) {
            this.groups = groups;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTU2Zjg1ODExZDVlMWFjNjY3YjYiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9maWx0ZXJMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvdGVzdExpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiU2V0dGluZ3NNb2RlbCIsImRpcmVjdGlvbkxpc3QiLCJkaXJlY3Rpb25OYW1lIiwidGVzdExpc3QiLCJEaXJlY3Rpb24iLCJHcm91cE1vZGVsIiwibmFtZSIsImRpcmVjdGlvbiIsImdyb3VwVHBsIiwicmVxdWlyZSIsIkdyb3VwVmlldyIsInRlbXBsYXRlIiwiYWRkTGlzdGVuZXJzIiwiZ3JvdXAiLCJncm91cHNCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImluc2VydEFkamFjZW50SFRNTCIsIlBvcHVwU2V0dGluZ3NWaWV3IiwiU2V0dGluZ3NDb250cm9sbGVyIiwic2V0dGluZ0xpc3QiLCJzZXR0aW5nIiwibW9kZSIsInN1YnNjcmliZU9wZW5Qb3B1cCIsInN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiIsInN1YnNjcmliZVNlbGVjdEZpbHRlciIsInN1YnNjcmliZVNlbGVjdFRlc3QiLCJzZXR0aW5nc01vZGVsIiwicG9wdXBTZXR0aW5nc1ZpZXciLCJzZXREaXJlY3Rpb25MaXN0IiwiZ2V0RGlyZWN0aW9uTGlzdCIsInN1YiIsInJlbmRlclBvcHVwIiwidGVzdHMiLCJmaWx0ZXJzIiwic3Vic2NyaWJlQ2xvc2VQb3B1cCIsImNsb3NlIiwidmFsdWUiLCJmaW5kIiwiaXRlbSIsInJlUmVuZGVyUG9wdXAiLCJzZXR0aW5nc1BvcHVwVHBsIiwibW9kYWwiLCJmaWx0ZXJMaXN0Iiwic2VsZWN0ZWREaXJlY3Rpb24iLCJpbm5lckhUTUwiLCJvcGVuIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xvc2VHcm91cEJ0biIsImRpcmVjdGlvblNlbGVjdCIsInNlbGVjdFRlc3RCdG4iLCJzZWxlY3RGaWx0ZXJCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicHViIiwidW5zdWIiLCJlIiwidGFyZ2V0IiwiZ3JvdXBOYW1lRWxlbSIsImdyb3VwRGlyZWN0aW9uRWxlbSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInJlbW92ZSIsImRpcmVjdGlvbkxpc3RUcGwiLCJmaWx0ZXJMaXN0VHBsIiwidGVzdExpc3RUcGwiLCJkaXJlY3Rpb25zIiwib3B0aW9uIiwiZ3JvdXBMaXN0VHBsIiwiR3JvdXBMaXN0VmlldyIsImxlZnRCbG9jayIsImFkZEdyb3VwQnRuIiwic2V0dGluZ3NCdG4iLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJHcm91cENvbnRyb2xsZXIiLCJncm91cHMiLCJzdWJzY3JpYmVPcGVuIiwiZ3JvdXBMaXN0VmlldyIsInJlbmRlciIsInBvcHVwQWRkR3JvdXBWaWV3Iiwic3Vic2NyaWJlQWRkR3JvdXAiLCJncm91cFZpZXciLCJncm91cERhdGEiLCJnZW5lcmF0ZURhdGEiLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiaW5pdCIsIkRpcmVjdGlvbk1vZGVsIiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJTZXR0aW5nc1ZpZXciLCJBcHAiLCJhcHAiLCJzdGFydCIsIm9iaiIsIlVJIiwiR08iLCJQSFAiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsInRlc3ROYW1lIiwiVGVzdCIsIkZpbHRlciIsImV4cG9ydCIsImFjdGlvbkxpc3QiLCJjb25kaXRpb25MaXN0IiwibWF4R3JhZGUiLCJmaWx0ZXIiLCJ0ZXN0c0xpc3QiLCJ0ZXN0IiwidGVzdERhdGEiLCJzZXR0aW5ncyIsImdyb3VwQ29udHJvbGxlciIsInNldHRpbmdzQ29udHJvbGxlciIsInNob3dHcm91cExpc3QiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDN0RBOzs7Ozs7SUFFTUEsUTtBQUNGLHdCQUFlO0FBQUE7O0FBQ1gsYUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7OzRCQUVJQyxPLEVBQVNDLEksRUFBTTtBQUNoQixnQkFBSSxLQUFLRixRQUFMLENBQWNDLE9BQWQsQ0FBSixFQUE0QjtBQUN4QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLEVBQXVCRSxPQUF2QixDQUErQixVQUFDQyxFQUFEO0FBQUEsMkJBQVFBLEdBQUdGLElBQUgsQ0FBUjtBQUFBLGlCQUEvQjtBQUNIO0FBQ0o7Ozs0QkFFSUQsTyxFQUFTRyxFLEVBQUk7QUFDZCxnQkFB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QXBDLE9BQU9DLE9BQVAsR0FBaUJrSCxRQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNTZmODU4MTFkNWUxYWM2NjdiNiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIE1lZGlhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWIgKGNoYW5uZWwpIHtcclxuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IG1lZGlhdG9yID0gbmV3IE1lZGlhdG9yKCk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gWydVSScsICdHTycsICdQSFAnLCAnT3RoZXInXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGREaXJlY3Rpb24gKGRpcmVjdGlvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IERpcmVjdGlvbihkaXJlY3Rpb25OYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uTGlzdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uTGlzdDtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEdyb3VwTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdGluZ1Nlc3Npb24gKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwVHBsID0gcmVxdWlyZSgnLi90cGwvZ3JvdXBUcGwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwVHBsKGdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXHJcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChzZXR0aW5nTGlzdCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ0xpc3QgPSBzZXR0aW5nTGlzdDtcclxuICAgICAgICB0aGlzLnNldHRpbmcgPSB0aGlzLnNldHRpbmdMaXN0WzBdO1xyXG4gICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVPcGVuUG9wdXAoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdERpcmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0RmlsdGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3RUZXN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKCk7XHJcbiAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldyA9IG5ldyBQb3B1cFNldHRpbmdzVmlldygpO1xyXG4gICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuc2V0RGlyZWN0aW9uTGlzdCh0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTGlzdCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVPcGVuUG9wdXAgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlbmRlclBvcHVwKHRoaXMuc2V0dGluZy50ZXN0cywgdGhpcy5zZXR0aW5nLmZpbHRlcnMsIHRoaXMubW9kZSwgdGhpcy5zZXR0aW5nLmRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVDbG9zZVBvcHVwICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24gKCkge1xyXG4gICAgXHRtZWRpYXRvci5zdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCAodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5nID0gdGhpcy5zZXR0aW5nTGlzdC5maW5kKChpdGVtKSA9PiBpdGVtLmRpcmVjdGlvbiA9PT0gdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAodGhpcy5zZXR0aW5nLnRlc3RzLCB0aGlzLnNldHRpbmcuZmlsdGVycywgdGhpcy5tb2RlLCB0aGlzLnNldHRpbmcuZGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVTZWxlY3RUZXN0ICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ3Rlc3Q6c2VsZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAodGhpcy5zZXR0aW5nLnRlc3RzLCB0aGlzLnNldHRpbmcuZmlsdGVycywgdGhpcy5tb2RlLCB0aGlzLnNldHRpbmcuZGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVTZWxlY3RGaWx0ZXIgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZmlsdGVyOnNlbGVjdCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ0YnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKHRoaXMuc2V0dGluZy50ZXN0cywgdGhpcy5zZXR0aW5nLmZpbHRlcnMsIHRoaXMubW9kZSwgdGhpcy5zZXR0aW5nLmRpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIHNldHRpbmdzUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cFNldHRpbmdzVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICh0ZXN0TGlzdCwgZmlsdGVyTGlzdCwgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IHNldHRpbmdzUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0LCB0ZXN0TGlzdCwgZmlsdGVyTGlzdCwgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVSZW5kZXJQb3B1cCAodGVzdExpc3QsIGZpbHRlckxpc3QsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTGlzdCwgdGVzdExpc3QsIGZpbHRlckxpc3QsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2Utc2V0dGluZ3MtYnRuJyksXHJcbiAgICAgICAgICAgIGRpcmVjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb24nKSxcclxuICAgICAgICAgICAgc2VsZWN0VGVzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZXN0LXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBzZWxlY3RGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLXNldHRpbmdzLWJ0bicpO1xyXG5cclxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0VGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCd0ZXN0OnNlbGVjdCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxlY3RGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZmlsdGVyOnNlbGVjdCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cE5hbWUnKSxcclxuICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBEaXJlY3Rpb24nKSxcclxuICAgICAgICAgICAgZGF0YSA9IHt9O1xyXG5cclxuICAgICAgICBkYXRhLmRpcmVjdGlvbiA9IGdyb3VwRGlyZWN0aW9uRWxlbS5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbS5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZGlyZWN0aW9uTGlzdFRwbCA9IHJlcXVpcmUoJy4vZGlyZWN0aW9uTGlzdFRwbC5qcycpLFxyXG4gICAgZmlsdGVyTGlzdFRwbCA9IHJlcXVpcmUoJy4vZmlsdGVyTGlzdFRwbC5qcycpLFxyXG4gICAgdGVzdExpc3RUcGwgPSByZXF1aXJlKCcuL3Rlc3RMaXN0VHBsLmpzJyk7XHJcblxyXG5mdW5jdGlvbiBzZXR0aW5nc1BvcHVwVHBsIChkaXJlY3Rpb25zLCB0ZXN0cywgZmlsdGVycywgb3B0aW9uLCBzZWxlY3RlZERpcmVjdGlvbikge1xyXG4gICAgbGV0IGRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0VHBsKGRpcmVjdGlvbnMsIHNlbGVjdGVkRGlyZWN0aW9uKSxcclxuICAgICAgICBmaWx0ZXJMaXN0ID0gZmlsdGVyTGlzdFRwbChmaWx0ZXJzKSxcclxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHRlc3RzKTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJzZXR0aW5ncy1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZmlsdGVyLXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1mdFwiPkY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7b3B0aW9uID09PSAnVCc/IHRlc3RMaXN0OiBmaWx0ZXJMaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gc2V0dGluZ3NQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBncm91cFRwbCAoZ3JvdXApIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJncm91cC10aXRsZVwiPiR7Z3JvdXAubmFtZX0gJHtncm91cC5kaXJlY3Rpb259PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPmZvcm1hdCBhZGRlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZ3JvdXBMaXN0VHBsID0gcmVxdWlyZSgnLi90cGwvZ3JvdXBMaXN0VHBsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBsZXQgbGVmdEJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29sdW1uJyk7XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcclxuXHJcbiAgICAgICAgbGVmdEJsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyksXHJcbiAgICAgICAgICAgIHNldHRpbmdzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzLWJ0bicpO1xyXG5cclxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXBQb3B1cDpvcGVuJykpO1xyXG4gICAgICAgIHNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOm9wZW4nKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBMaXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBncm91cExpc3RUcGwgKCkge1xyXG4gICAgcmV0dXJuIGA8c2VjdGlvbiBpZD1cImdyb3VwLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2staGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT5Hcm91cDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLXdyYXBwZXIgZ3JvdXAtd3JhcHBlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1ncm91cC1idG5cIj5hZGQgZ3JvdXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cEFkZEdyb3VwVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBncm91cFBvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXJlY3Rpb25MaXN0IChkaXJlY3Rpb25MaXN0KSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWdyb3VwLWJ0bicpO1xyXG5cclxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2dyb3VwOmFkZGVkJyk7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdncm91cDphZGRlZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ3JvdXAtbmFtZScpLFxyXG4gICAgICAgICAgICBncm91cERpcmVjdGlvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZ3JvdXAtZGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcclxuXHJcbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcclxuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwUG9wdXBUcGwgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcblxyXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBpZD1cImdyb3VwLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1vZGFsLWdyb3VwLW5hbWVcIiBjbGFzcz1cIm1vZGFsLWdyb3VwLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1ncm91cC1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxyXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXHJcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcclxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcclxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IgKGdyb3Vwcykge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlT3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dHcm91cExpc3QgKCkge1xyXG4gICAgICAgIGxldCBncm91cExpc3RWaWV3ID0gbmV3IEdyb3VwTGlzdFZpZXcoKTtcclxuXHJcbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVPcGVuICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbCgpLFxyXG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoKTtcclxuXHJcbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnNldERpcmVjdGlvbkxpc3Qoc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25MaXN0KCkpO1xyXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUFkZEdyb3VwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlQWRkR3JvdXAgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6YWRkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBEYXRhID0ge30sXHJcbiAgICAgICAgICAgICAgICBncm91cCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBEYXRhID0gcG9wdXBBZGRHcm91cFZpZXcuZ2VuZXJhdGVEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGdyb3VwRGF0YS5uYW1lLCBncm91cERhdGEuZGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XHJcblxyXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKCkge1xyXG4gICAgbGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpLFxyXG4gICAgICAgIEZpbHRlck1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcycpLFxyXG4gICAgICAgIFRlc3RNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzJyksXHJcbiAgICAgICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgICAgIFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgICAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxyXG4gICAgICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICAgICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgICAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXHJcbiAgICAgICAgZ3JvdXBMaXN0VHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzJyksXHJcbiAgICAgICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICAgICAgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgICAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpLFxyXG4gICAgICAgIGdyb3VwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMnKSxcclxuICAgICAgICBzZXR0aW5nc1BvcHVwVHBsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyksXHJcbiAgICAgICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXHJcbiAgICAgICAgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKSxcclxuICAgICAgICBNZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcclxuXHJcbiAgICBsZXQgYXBwID0gbmV3IEFwcCgpO1xyXG5cclxuICAgIGFwcC5zdGFydCgpO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgRGlyZWN0aW9uTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKGRpcmVjdGlvbk5hbWUpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbk5hbWUgPSBkaXJlY3Rpb25OYW1lO1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3Rpb25UZXN0IChkaXJlY3Rpb24pIHtcclxuICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICBVSTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFsnRW5nbGlzaCAxJywgJ0VuZ2xpc2ggMicsICdFbmdsaXNoIDMnLCAnRW5nbGlzaCA0JywgJ0pTIENvcmUnLCAnRXNzYXknXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgR086ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVzdExpc3QgPSBbJ0VuZ2xpc2ggMScsICdFbmdsaXNoIDInLCAnRW5nbGlzaCAzJywgJ0VuZ2xpc2ggNCcsICdHTyBDb3JlJywgJ0Vzc2F5J107XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFBIUDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFsnRW5nbGlzaCAxJywgJ0VuZ2xpc2ggMicsICdFbmdsaXNoIDMnLCAnRW5nbGlzaCA0JywgJ1BIUCBDb3JlJywgJ0Vzc2F5J107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmpbZGlyZWN0aW9uXSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGlvbkZpbHRlciAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgICAgVUk6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMycsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0pTIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgR086ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyTGlzdCA9IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMicsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggMycsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0VuZ2xpc2ggNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0dPIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgUEhQOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckxpc3QgPSBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFbmdsaXNoIDEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFbmdsaXNoIDInLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFbmdsaXNoIDMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdFbmdsaXNoIDQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdQSFAgQ29yZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uOiBjb25kaXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhZGU6IDYwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IGFjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb246IGNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgICAgIH1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb2JqW2RpcmVjdGlvbl0oKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0ICh0ZXN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMudGVzdExpc3QucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRlc3QgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVGaWx0ZXIgKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydCA9IERpcmVjdGlvbk1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBGaWx0ZXJNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMudGVzdHMgPSB0ZXN0cztcclxuICAgICAgICB0aGlzLmFjdGlvbkxpc3QgPSBbJ2F2ZXJhZ2UnLCAnbWF4JywgJ21pbicsICdlcXVhbCddO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uTGlzdCA9IFsnPicsICc+PScsICc9JywgJzw9JywgJzwnXTtcclxuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7XHJcbiAgICB9XHJcblxyXG4vLyBhZGRUZXN0LCBjaGFuZ2VBY3Rpb24sIGNoYW5nZUNvbmRpdGlvbiwgY2hhbmdlR3JhZGVcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydCA9IEZpbHRlck1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBUZXN0TW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKG5hbWUsIG1heEdyYWRlLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgLy8gdGhpcy5tYXhHcmFkZSA9IG1heEdyYWRlO1xyXG4gICAgICAgIC8vIHRoaXMuZ3JhZGUgPSBncmFkZTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0gVGVzdE1vZGVsO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1Rlc3RNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFNldHRpbmdzVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZGlyZWN0aW9uTGlzdFRwbCAoZGlyZWN0aW9uTGlzdCwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcblxyXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0nJHtpdGVtfScgJHtzZWxlY3RlZERpcmVjdGlvbiA9PT0gaXRlbT8gJ3NlbGVjdGVkJzogJyd9PiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uLWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiIGNsYXNzPVwibW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uXCI+JHtvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZGlyZWN0aW9uLWJ0blwiPmFkZCBkaXJlY3Rpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25MaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckxpc3RUcGwgKGZpbHRlckxpc3QpIHtcclxuICAgIGxldCBmaWx0ZXJzID0gJyc7XHJcblxyXG4gICAgZmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICBmaWx0ZXJzICs9IGA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+JHtmaWx0ZXJ9PC9kaXY+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdFwiPiR7ZmlsdGVyc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtZmlsdGVyLWJ0biBidG5cIj5hZGQgZmlsdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0TGlzdFRwbCAodGVzdHNMaXN0KSB7XHJcbiAgICBsZXQgdGVzdHMgPSAnJztcclxuXHJcbiAgICB0ZXN0c0xpc3QuZm9yRWFjaCgodGVzdCkgPT4ge1xyXG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdFwiPiR7dGVzdH08L2Rpdj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGVzdC1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5UZXN0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+JHt0ZXN0c308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGVzdC1idG4gYnRuXCI+YWRkIHRlc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0TGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxyXG4gICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcclxuICAgIHRlc3REYXRhID0gcmVxdWlyZSgnLi90ZXN0RGF0YS5qcycpO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0ZXN0RGF0YS5zZXR0aW5ncztcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cHMpLFxyXG4gICAgICAgICAgICBzZXR0aW5nc0NvbnRyb2xsZXIgPSBuZXcgU2V0dGluZ3NDb250cm9sbGVyKHRoaXMuc2V0dGluZ3MpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5zaG93R3JvdXBMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JvdXBzIChncm91cHMpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IHRlc3REYXRhID0ge1xyXG4gICAgZ3JvdXBzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMTctanMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2dvJyxcclxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyMy1nbydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAncGhwJyxcclxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyNy1waHAnXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNldHRpbmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdVSScsXHJcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdKUyBDb3JlJywgJ0Vzc2F5IFVJJ10sXHJcbiAgICAgICAgICAgIGZpbHRlcnM6IFsnVUkgMSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ1BIUCcsXHJcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBQSFAnXSxcclxuICAgICAgICAgICAgZmlsdGVyczogWydQSFAgMSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ0dPJyxcclxuICAgICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0Vzc2F5IEdPJ10sXHJcbiAgICAgICAgICAgIGZpbHRlcnM6IFsnR08gMSddXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ090aGVyJyxcclxuICAgICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ090aGVyJywgJ090aGVyJ10sXHJcbiAgICAgICAgICAgIGZpbHRlcnM6IFsnT3RoZXIgMSddXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0RGF0YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==