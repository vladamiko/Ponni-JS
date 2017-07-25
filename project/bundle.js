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

var DirectionModel = __webpack_require__(15);

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
    PopupAddDirectionView = __webpack_require__(23),
    SettingsModel = __webpack_require__(2),
    DirectionModel = __webpack_require__(15),
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
                mediator.pub('addFilterPopup:close');
                mediator.unsub('addFilterPopup:close');
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
                mediator.pub('addTestPopup:close');
                mediator.unsub('addTestPopup:close');
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

    directions: ['UI', 'PHP', 'GO', 'JS']

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
};

module.exports = testData;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGRjOGI1N2FkMjY3MDQ2YTJiMDEiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9kaXJlY3Rpb25MaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZEZpbHRlclZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGRGaWx0ZXJQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkVGVzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGRUZXN0UG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiRGlyZWN0aW9uTW9kZWwiLCJyZXF1aXJlIiwiU2V0dGluZ3NNb2RlbCIsImRlZmF1bHREaXJlY3Rpb25zIiwiZGlyZWN0aW9ucyIsInJlbmRlciIsIml0ZW0iLCJkaXJlY3Rpb25OYW1lcyIsIm5hbWUiLCJ0ZXN0TmFtZSIsInRlc3RzIiwiVGVzdCIsImFjdGlvbiIsImNvbmRpdGlvbiIsImdyYWRlIiwiZmlsdGVycyIsIkZpbHRlciIsIkdyb3VwVmlldyIsIkdyb3VwTW9kZWwiLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJkaXJlY3Rpb25MaXN0IiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJvcGVuIiwiYWRkTGlzdGVuZXJzIiwiY2xvc2VHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJ1bnN1YiIsImNsYXNzTGlzdCIsImFkZCIsImdyb3VwTmFtZUVsZW0iLCJncm91cERpcmVjdGlvbkVsZW0iLCJkaXJlY3Rpb24iLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJ2YWx1ZSIsInJlbW92ZSIsImdyb3VwVHBsIiwidGVtcGxhdGUiLCJncm91cCIsImdyb3Vwc0Jsb2NrIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiUG9wdXBTZXR0aW5nc1ZpZXciLCJQb3B1cEFkZERpcmVjdGlvblZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJzZXR0aW5nc01vZGVsIiwicG9wdXBTZXR0aW5nc1ZpZXciLCJwb3B1cEFkZERpcmVjdGlvblZpZXciLCJzdWJzY3JpYmUiLCJzdWJzY3JpYmVPcGVuUG9wdXBzIiwic3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uIiwic3Vic2NyaWJlU2VsZWN0RmlsdGVyIiwic3Vic2NyaWJlU2VsZWN0VGVzdCIsInN1YiIsImdldERpcmVjdGlvbk5hbWVzIiwic2VsZWN0ZWREaXJlY3Rpb24iLCJtb2RlIiwicmVuZGVyUG9wdXAiLCJzdWJzY3JpYmVDbG9zZVBvcHVwIiwicG9wdXBBZGRHcm91cFZpZXciLCJzZXREaXJlY3Rpb25MaXN0IiwiY2xvc2UiLCJyZVJlbmRlclBvcHVwIiwiZGlyZWN0aW9uTmFtZSIsImZpbmQiLCJzZXR0aW5nc1BvcHVwVHBsIiwiZGlyZWN0aW9uU2VsZWN0Iiwic2VsZWN0VGVzdEJ0biIsInNlbGVjdEZpbHRlckJ0biIsImFkZERpcmVjdGlvblBvcHVwIiwiYWRkVGVzdFBvcHVwIiwiYWRkRmlsdGVyUG9wdXAiLCJlIiwidGFyZ2V0IiwiZGlyZWN0aW9uTGlzdFRwbCIsImZpbHRlckxpc3RUcGwiLCJ0ZXN0TGlzdFRwbCIsImZpbHRlckxpc3QiLCJ0ZXN0TGlzdCIsImdyb3VwTGlzdFRwbCIsIkdyb3VwTGlzdFZpZXciLCJsZWZ0QmxvY2siLCJhZGRHcm91cEJ0biIsInNldHRpbmdzQnRuIiwiR3JvdXBDb250cm9sbGVyIiwiZ3JvdXBzIiwic3Vic2NyaWJlT3BlbiIsImdyb3VwTGlzdFZpZXciLCJzdWJzY3JpYmVBZGRHcm91cCIsImdyb3VwVmlldyIsImdyb3VwRGF0YSIsImdlbmVyYXRlRGF0YSIsInNldEdyb3VwIiwicmVuZGVyR3JvdXAiLCJpbml0IiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJQb3B1cEFkZEZpbHRlclZpZXciLCJQb3B1cEFkZFRlc3RWaWV3IiwiQXBwIiwiYXBwIiwic3RhcnQiLCJhY3Rpb25MaXN0IiwiY29uZGl0aW9uTGlzdCIsImV4cG9ydCIsIm1heEdyYWRlIiwiZmlsdGVyIiwidGVzdHNMaXN0IiwidGVzdCIsImFkZEZpbHRlclBvcHVwVHBsIiwiY2xvc2VGaWx0ZXJCdG4iLCJhY3Rpb25TZWxlY3QiLCJjb25kaXRpb25TZWxlY3QiLCJ0ZXN0R3JhZGUiLCJnZW5lcmF0ZUxpc3QiLCJhY3Rpb25zIiwiY29uZGl0aW9ucyIsImxpc3QiLCJhZGREaXJlY3Rpb25Qb3B1cFRwbCIsImNsb3NlRGlyZWN0aW9uQnRuIiwiYWRkVGVzdFBvcHVwVHBsIiwiY2xvc2VUZXN0QnRuIiwidGVzdERhdGEiLCJncm91cENvbnRyb2xsZXIiLCJzZXR0aW5nc0NvbnRyb2xsZXIiLCJz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QyxVQUE1QixDQUR6Qjs7QUFHQTRILDRCQUFnQkUsYUFBaEI7QUFDSDs7O2lDQUVTdEYsSyxFQUFPO0FBQ2IsaUJBQUs4QyxNQUFMLENBQVk5RixJQUFaLENBQWlCZ0QsS0FBakI7QUFDSDs7O29DQUVZO0FBQUE7O0FBQ1QvQyxxQkFBUzZELEdBQVQsQ0FBYSxlQUFiLEVBQThCLFVBQUNkLEtBQUQsRUFBVztBQUNyQyxzQkFBSzhDLE1BQUwsQ0FBWTlGLElBQVosQ0FBaUJnRCxLQUFqQjtBQUNILGFBRkQ7QUFHSDs7Ozs7O0FBR0w5QyxPQUFPQyxPQUFQLEdBQWlCeUcsR0FBakIsQzs7Ozs7OztBQ2pDQTs7QUFFQSxJQUFJdUIsV0FBVztBQUNYckMsWUFBUSxDQUNKO0FBQ0l0RCxtQkFBVyxJQURmO0FBRUk1QixjQUFNO0FBRlYsS0FESSxFQUtKO0FBQ0k0QixtQkFBVyxJQURmO0FBRUk1QixjQUFNO0FBRlYsS0FMSSxFQVNKO0FBQ0k0QixtQkFBVyxLQURmO0FBRUk1QixjQUFNO0FBRlYsS0FUSSxDQURHOztBQWdCWEosZ0JBQVksQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsSUFBcEI7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDVyxDQUFmOztBQXFDQU4sT0FBT0MsT0FBUCxHQUFpQmdJLFFBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBkYzhiNTdhZDI2NzA0NmEyYjAxIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgTWVkaWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWIgKGNoYW5uZWwsIGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YiAoY2hhbm5lbCwgZm4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YiAoY2hhbm5lbCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGVmYXVsdERpcmVjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlbmRlcihkZWZhdWx0RGlyZWN0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyIChkZWZhdWx0RGlyZWN0aW9ucykge1xyXG4gICAgICAgIGRlZmF1bHREaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbk1vZGVsKGl0ZW0pKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3Rpb25OYW1lcyAoKSB7XHJcbiAgICBcdGxldCBkaXJlY3Rpb25OYW1lcyA9IFtdO1xyXG5cclxuICAgIFx0dGhpcy5kaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBcdGRpcmVjdGlvbk5hbWVzLnB1c2goaXRlbS5uYW1lKTtcclxuICAgIFx0fSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb25OYW1lcztcclxuICAgIH1cclxuXHJcbiAgICBhZGREaXJlY3Rpb24gKG5hbWUpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgRGlyZWN0aW9uTW9kZWwobmFtZSkpO1xyXG5cclxuICAgICAgICBkZWZhdWx0RGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ldyBEaXJlY3Rpb25Nb2RlbChpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdHMgKHRlc3ROYW1lKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0cy5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVycyAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVycy5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGdyb3VwUG9wdXBUcGwodGhpcy5kaXJlY3Rpb25MaXN0KTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBkaXJlY3Rpb25MaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZ3JvdXA6YWRkZWQnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2dyb3VwOmFkZGVkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1uYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1kaXJlY3Rpb24nKSxcclxuICAgICAgICAgICAgZGF0YSA9IHt9O1xyXG5cclxuICAgICAgICBkYXRhLmRpcmVjdGlvbiA9IGdyb3VwRGlyZWN0aW9uRWxlbS5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbS5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdyb3VwVHBsID0gcmVxdWlyZSgnLi90cGwvZ3JvdXBUcGwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwVHBsKGdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwLXdyYXBwZXInKTtcclxuXHJcbiAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBHcm91cE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdCAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlciAoKSB7XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBQb3B1cFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcclxuICAgIFBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzJyksXHJcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yIChkZWZhdWx0RGlyZWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKGRlZmF1bHREaXJlY3Rpb25zKTtcclxuICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3ID0gbmV3IFBvcHVwU2V0dGluZ3NWaWV3KCk7XHJcbiAgICAgICAgdGhpcy5wb3B1cEFkZERpcmVjdGlvblZpZXcgPSBuZXcgUG9wdXBBZGREaXJlY3Rpb25WaWV3KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmUgKCkge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlT3BlblBvcHVwcygpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3RGaWx0ZXIoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdFRlc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVPcGVuUG9wdXBzICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9uc1swXTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cFBvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnNldERpcmVjdGlvbkxpc3QoZGlyZWN0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5yZW5kZXJQb3B1cCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2FkZERpcmVjdGlvblBvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZERpcmVjdGlvblZpZXcgPSBuZXcgUG9wdXBBZGREaXJlY3Rpb25WaWV3KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwb3B1cEFkZERpcmVjdGlvblZpZXcucmVuZGVyUG9wdXAoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5jbG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVDbG9zZVBvcHVwICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cEFkZERpcmVjdGlvblZpZXcuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5vcGVuKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24gKCkge1xyXG4gICAgXHRtZWRpYXRvci5zdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCAoZGlyZWN0aW9uTmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBkaXJlY3Rpb25OYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlU2VsZWN0VGVzdCAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCd0ZXN0OnNlbGVjdCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlU2VsZWN0RmlsdGVyICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2ZpbHRlcjpzZWxlY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdGJztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZUFkZERpcmVjdGlvbiAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdkaXJlY3Rpb246YWRkJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgc2V0dGluZ3NQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwU2V0dGluZ3NWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNldHRpbmdzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlUmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERpcmVjdGlvbk5hbWVzIChkaXJlY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLXNldHRpbmdzLWJ0bicpLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uJyksXHJcbiAgICAgICAgICAgIHNlbGVjdFRlc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdC1zZXR0aW5ncy1idG4nKSxcclxuICAgICAgICAgICAgc2VsZWN0RmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpbHRlci1zZXR0aW5ncy1idG4nKSxcclxuICAgICAgICAgICAgYWRkRGlyZWN0aW9uUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpcmVjdGlvbi1idG4nKSxcclxuICAgICAgICAgICAgYWRkVGVzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXN0LWJ0bicpLFxyXG4gICAgICAgICAgICBhZGRGaWx0ZXJQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZmlsdGVyLWJ0bicpO1xyXG5cclxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0VGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCd0ZXN0OnNlbGVjdCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZWxlY3RGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZmlsdGVyOnNlbGVjdCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhZGREaXJlY3Rpb25Qb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGFkZFRlc3RQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgbWVkaWF0b3IucHViKCdhZGRGaWx0ZXJQb3B1cDpvcGVuJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIC8vIGFkZEZpbHRlclBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBtZWRpYXRvci5wdWIoJ2FkZFRlc3RQb3B1cDpvcGVuJyk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBOYW1lRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwTmFtZScpLFxyXG4gICAgICAgICAgICBncm91cERpcmVjdGlvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cERpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhID0ge307XHJcblxyXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBkaXJlY3Rpb25MaXN0VHBsID0gcmVxdWlyZSgnLi9kaXJlY3Rpb25MaXN0VHBsLmpzJyksXHJcbiAgICBmaWx0ZXJMaXN0VHBsID0gcmVxdWlyZSgnLi9maWx0ZXJMaXN0VHBsLmpzJyksXHJcbiAgICB0ZXN0TGlzdFRwbCA9IHJlcXVpcmUoJy4vdGVzdExpc3RUcGwuanMnKTtcclxuXHJcbmZ1bmN0aW9uIHNldHRpbmdzUG9wdXBUcGwgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XHJcbiAgICBsZXQgZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9ucywgc2VsZWN0ZWREaXJlY3Rpb24ubmFtZSksXHJcbiAgICAgICAgZmlsdGVyTGlzdCA9IGZpbHRlckxpc3RUcGwoc2VsZWN0ZWREaXJlY3Rpb24uZmlsdGVycyksXHJcbiAgICAgICAgdGVzdExpc3QgPSB0ZXN0TGlzdFRwbChzZWxlY3RlZERpcmVjdGlvbi50ZXN0cyk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwic2V0dGluZ3MtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbHVtbi1zZXR0aW5nc1wiPiR7ZGlyZWN0aW9uTGlzdH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0ZXN0LXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1mdFwiPlQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbHRlci1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5GPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke21vZGUgPT09ICdUJz8gdGVzdExpc3Q6IGZpbHRlckxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2Utc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXR0aW5nc1BvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwVHBsIChncm91cCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHtncm91cC5uYW1lfSAke2dyb3VwLmRpcmVjdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwUG9wdXBUcGwgKGRpcmVjdGlvbkxpc3QpIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcblxyXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbj4ke2l0ZW19PC9vcHRpb24+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBpZD1cImdyb3VwLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm1vZGFsLWdyb3VwLW5hbWVcIiBjbGFzcz1cIm1vZGFsLWdyb3VwLW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyb3VwIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1ncm91cC1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cExpc3RUcGwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwTGlzdFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGxldCBsZWZ0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1jb2x1bW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwTGlzdFRwbCgpO1xyXG5cclxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKSxcclxuICAgICAgICAgICAgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0dGluZ3MtYnRuJyk7XHJcblxyXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cFBvcHVwOm9wZW4nKSk7XHJcbiAgICAgICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicpKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwTGlzdFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkdyb3VwPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2std3JhcHBlciBncm91cC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWdyb3VwLWJ0blwiPmFkZCBncm91cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cExpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXHJcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxyXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBzKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVPcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0dyb3VwTGlzdCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpO1xyXG5cclxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZU9wZW4gKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUFkZEdyb3VwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlQWRkR3JvdXAgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6YWRkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBEYXRhID0ge30sXHJcbiAgICAgICAgICAgICAgICBncm91cCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBEYXRhID0gcG9wdXBBZGRHcm91cFZpZXcuZ2VuZXJhdGVEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGdyb3VwRGF0YS5uYW1lLCBncm91cERhdGEuZGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZ3JvdXA6Y3JlYXRlZCcsIGdyb3VwKTtcclxuXHJcbiAgICAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XHJcblxyXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5jbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcclxuXHJcbmZ1bmN0aW9uIGluaXQgKCkge1xyXG4gICAgbGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpLFxyXG4gICAgICAgIEZpbHRlck1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcycpLFxyXG4gICAgICAgIFRlc3RNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzJyksXHJcbiAgICAgICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxyXG4gICAgICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXHJcbiAgICAgICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcclxuICAgICAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxyXG4gICAgICAgIEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcclxuICAgICAgICBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMnKSxcclxuICAgICAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcclxuICAgICAgICBQb3B1cFNldHRpbmdzVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcycpLFxyXG4gICAgICAgIFBvcHVwQWRkRmlsdGVyVmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9Qb3B1cEFkZEZpbHRlclZpZXcuanMnKSxcclxuICAgICAgICBQb3B1cEFkZERpcmVjdGlvblZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzJyksXHJcbiAgICAgICAgUG9wdXBBZGRUZXN0VmlldyA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy9Qb3B1cEFkZFRlc3RWaWV3LmpzJyksXHJcbiAgICAgICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKSxcclxuICAgICAgICBncm91cFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzJyksXHJcbiAgICAgICAgc2V0dGluZ3NQb3B1cFRwbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcycpLFxyXG4gICAgICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxyXG4gICAgICAgIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyksXHJcbiAgICAgICAgTWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XHJcblxyXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcclxuICAgIFxyXG4gICAgYXBwLnN0YXJ0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBEaXJlY3Rpb25Nb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50ZXN0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZFRlc3QgKHRlc3ROYW1lKSB7XHJcbiAgICAvLyAgICAgdGhpcy50ZXN0cy5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAvLyAgICAgdGhpcy5maWx0ZXJzLnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIEZpbHRlck1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uTGlzdCA9IFsnYXZlcmFnZScsICdtYXgnLCAnbWluJywgJ2VxdWFsJ107XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25MaXN0ID0gWyc+JywgJz49JywgJz0nLCAnPD0nLCAnPCddO1xyXG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcclxuICAgIH1cclxuXHJcbi8vIGFkZFRlc3QsIGNoYW5nZUFjdGlvbiwgY2hhbmdlQ29uZGl0aW9uLCBjaGFuZ2VHcmFkZVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0gRmlsdGVyTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIFRlc3RNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbWF4R3JhZGUsIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XHJcbiAgICAgICAgLy8gdGhpcy5ncmFkZSA9IGdyYWRlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnQgPSBUZXN0TW9kZWw7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZGlyZWN0aW9uTGlzdFRwbCAoZGlyZWN0aW9uTGlzdCwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgIGxldCBvcHRpb25zID0gJyc7XHJcblxyXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0nJHtpdGVtfScgJHtzZWxlY3RlZERpcmVjdGlvbiA9PT0gaXRlbT8gJ3NlbGVjdGVkJzogJyd9PiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uLWxpc3Qtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiIGNsYXNzPVwibW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uXCI+JHtvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZGlyZWN0aW9uLWJ0blwiPmFkZCBkaXJlY3Rpb248L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25MaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGZpbHRlckxpc3RUcGwgKGZpbHRlckxpc3QpIHtcclxuICAgIGxldCBmaWx0ZXJzID0gJyc7XHJcblxyXG4gICAgZmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtcclxuICAgICAgICBmaWx0ZXJzICs9IGA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+JHtmaWx0ZXJ9PC9kaXY+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5GaWx0ZXJzPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdFwiPiR7ZmlsdGVyc308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtZmlsdGVyLWJ0biBidG5cIj5hZGQgZmlsdGVyPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0TGlzdFRwbCAodGVzdHNMaXN0KSB7XHJcbiAgICBsZXQgdGVzdHMgPSAnJztcclxuXHJcbiAgICB0ZXN0c0xpc3QuZm9yRWFjaCgodGVzdCkgPT4ge1xyXG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdFwiPiR7dGVzdH08L2Rpdj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGVzdC1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5UZXN0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+JHt0ZXN0c308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGVzdC1idG4gYnRuXCI+YWRkIHRlc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0TGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIGFkZEZpbHRlclBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvYWRkRmlsdGVyUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkRmlsdGVyVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtZmlsdGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKHRlc3RMaXN0LCBhY3Rpb25MaXN0LCBjb25kaXRpb25MaXN0KSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBhZGRGaWx0ZXJQb3B1cFRwbCh0ZXN0TGlzdCwgYWN0aW9uTGlzdCwgY29uZGl0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1maWx0ZXItYnRuJyksXHJcbiAgICAgICAgICAgIHRlc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29sdW1uLWZpbHRlcicpLFxyXG4gICAgICAgICAgICB0ZXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1uYW1lJyksXHJcbiAgICAgICAgICAgIGFjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWx0ZXItYWN0aW9uJyksXHJcbiAgICAgICAgICAgIGNvbmRpdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWx0ZXItY29uZGl0aW9uJyksXHJcbiAgICAgICAgICAgIHRlc3RHcmFkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1ncmFkZScpO1xyXG5cclxuXHJcbiAgICAgICAgY2xvc2VGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWRkRmlsdGVyUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2FkZEZpbHRlclBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRlc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0ZXN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWN0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uZGl0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignY29uZGl0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGVzdEdyYWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEZpbHRlclZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRmlsdGVyVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGFkZEZpbHRlclBvcHVwVHBsICh0ZXN0TGlzdCwgYWN0aW9uTGlzdCwgY29uZGl0aW9uTGlzdCkge1xyXG4gICAgbGV0IHRlc3RzID0gZ2VuZXJhdGVMaXN0KHRlc3RMaXN0KSxcclxuICAgICAgICBhY3Rpb25zID0gZ2VuZXJhdGVMaXN0KGFjdGlvbkxpc3QpLFxyXG4gICAgICAgIGNvbmRpdGlvbnMgPSBnZW5lcmF0ZUxpc3QoY29uZGl0aW9uTGlzdCk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVMaXN0IChsaXN0KSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgYWRkLWZpbHRlci1wb3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLWZpbHRlclwiPiR7dGVzdHN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtY29sdW1uLWZpbHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLXRlc3QtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGVzdCBuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIm1vZGFsLWZpbHRlci1hY3Rpb25cIj4ke2FjdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJtb2RhbC1maWx0ZXItY29uZGl0aW9uXCI+JHtjb25kaXRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC10ZXN0LWdyYWRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBncmFkZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYWRkRmlsdGVyUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGRGaWx0ZXJQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBhZGREaXJlY3Rpb25Qb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cEFkZERpcmVjdGlvblZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLWRpcmVjdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGFkZERpcmVjdGlvblBvcHVwVHBsKCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZURpcmVjdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1kaXJlY3Rpb24tYnRuJyksXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpcmVjdGlvbi1uYW1lJyk7XHJcblxyXG5cclxuICAgICAgICBjbG9zZURpcmVjdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScpO1xyXG4gICAgICAgICAgICBtZWRpYXRvci51bnN1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZGlyZWN0aW9uTmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGREaXJlY3Rpb25WaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBhZGREaXJlY3Rpb25Qb3B1cFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC1kaXJlY3Rpb24tcG9wdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLWRpcmVjdGlvbi1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBkaXJlY3Rpb24gbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjayBjbG9zZS1kaXJlY3Rpb24tYnRuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gYWRkRGlyZWN0aW9uUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBhZGRUZXN0UG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9hZGRUZXN0UG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkVGVzdFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLXRlc3QnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBhZGRUZXN0UG9wdXBUcGwoKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlVGVzdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS10ZXN0LWJ0bicpLFxyXG4gICAgICAgICAgICB0ZXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1uYW1lJyk7XHJcblxyXG5cclxuICAgICAgICBjbG9zZVRlc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWRkVGVzdFBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdhZGRUZXN0UG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGVzdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkVGVzdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkVGVzdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBhZGRUZXN0UG9wdXBUcGwgKCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBhZGQtdGVzdC1wb3B1cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZGQtdGVzdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXN0IG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhZGRUZXN0UG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGRUZXN0UG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXHJcbiAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxyXG4gICAgdGVzdERhdGEgPSByZXF1aXJlKCcuL3Rlc3REYXRhLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMgPSBbXTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSB0ZXN0RGF0YS5kaXJlY3Rpb25zO1xyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBDb250cm9sbGVyID0gbmV3IEdyb3VwQ29udHJvbGxlcih0aGlzLmdyb3VwcyksXHJcbiAgICAgICAgICAgIHNldHRpbmdzQ29udHJvbGxlciA9IG5ldyBTZXR0aW5nc0NvbnRyb2xsZXIodGhpcy5kaXJlY3Rpb25zKTtcclxuICAgICAgICBcclxuICAgICAgICBncm91cENvbnRyb2xsZXIuc2hvd0dyb3VwTGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEdyb3VwIChncm91cCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cDpjcmVhdGVkJywgKGdyb3VwKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBzLnB1c2goZ3JvdXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgdGVzdERhdGEgPSB7XHJcbiAgICBncm91cHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcclxuICAgICAgICAgICAgbmFtZTogJ2RwLTExNy1qcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnZ28nLFxyXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTIzLWdvJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdwaHAnLFxyXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTI3LXBocCdcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG5cclxuICAgIGRpcmVjdGlvbnM6IFsnVUknLCAnUEhQJywgJ0dPJywgJ0pTJ11cclxuXHJcbiAgICAvLyBkaXJlY3Rpb25zOiBbXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBuYW1lOiAnVUknLFxyXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnSlMgQ29yZScsICdFc3NheSBVSSddLFxyXG4gICAgLy8gICAgICAgICBmaWx0ZXJzOiBbJ1VJIDEnXVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBuYW1lOiAnUEhQJyxcclxuICAgIC8vICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0Vzc2F5IFBIUCddLFxyXG4gICAgLy8gICAgICAgICBmaWx0ZXJzOiBbJ1BIUCAxJ11cclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgbmFtZTogJ0dPJyxcclxuICAgIC8vICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0Vzc2F5IEdPJ10sXHJcbiAgICAvLyAgICAgICAgIGZpbHRlcnM6IFsnR08gMSddXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gXVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0RGF0YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==
