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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirectionModel = __webpack_require__(1);

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
    groupPopupTpl = __webpack_require__(11);

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

var groupTpl = __webpack_require__(10),
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
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopupSettingsView = __webpack_require__(8),
    PopupAddGroupView = __webpack_require__(3),
    PopupAddDirectionView = __webpack_require__(12),
    SettingsModel = __webpack_require__(2),
    DirectionModel = __webpack_require__(1),
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    settingsPopupTpl = __webpack_require__(9);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var directionListTpl = __webpack_require__(19),
    filterListTpl = __webpack_require__(29),
    testListTpl = __webpack_require__(30);

function settingsPopupTpl(directions, mode, selectedDirection) {
    var directionList = directionListTpl(directions, selectedDirection.name),
        filterList = filterListTpl(selectedDirection.filters),
        testList = testListTpl(selectedDirection.tests);

    return '<div id="settings-popup" class="modal-content">\n                <div class="left-column-settings">' + directionList + '</div>\n                <div class="right-column-settings">\n                    <div class="column-settings">\n                        <button id="test-settings-btn" class="btn btn-ft">T</button>\n                        <button id="filter-settings-btn" class="btn btn-ft">F</button>\n                    </div>\n                    <div class="column-settings">\n                        ' + (mode === 'T' ? testList : filterList) + '\n                    </div>\n                    <div class="column-settings">\n                        <button id="close-settings-btn" class="btn btn-cog">\n                            <i class="fa fa-check" aria-hidden="true"></i>\n                        </button>\n                    </div>\n                </div>\n            </div>';
}

module.exports = settingsPopupTpl;

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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var groupListTpl = __webpack_require__(14),
    GroupView = __webpack_require__(4),
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupListTpl() {
    return '<section id="group-block">\n                <div class="group-block-head">\n                    <h1>Group</h1>\n                    <button id="settings-btn" class="btn btn-cog">\n                        <i class="fa fa-cog" aria-hidden="true"></i>\n                    </button>\n                </div>\n                <div class="group-block-body">\n                    <div class="group-block-wrapper group-wrapper"></div>\n                        <button class="btn add-group-btn">add group</button>\n                    </div>\n            </section>';
}

module.exports = groupListTpl;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupListView = __webpack_require__(13),
    GroupView = __webpack_require__(4),
    GroupModel = __webpack_require__(5),
    PopupAddGroupView = __webpack_require__(3),
    SettingsModel = __webpack_require__(2),
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var App = __webpack_require__(27),
        groupList = __webpack_require__(28);

    var app = new App(groupList);

    app.start();
}

/***/ }),
/* 17 */,
/* 18 */,
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
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addDirectionPopupTpl() {
    return '<div class="modal-content add-direction-popup">\n                <input type="text" class="add-direction-name" placeholder="Enter direction name">\n                <button class="btn btn-cog">\n                    <i class="fa fa-check close-direction-btn" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addDirectionPopupTpl;

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(15),
    SettingsController = __webpack_require__(7),
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
/* 28 */
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

/***/ }),
/* 29 */
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
/* 30 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOGY5OWMyNjg3MjhlYjRiMmZiMGEiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvdGVzdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiRGlyZWN0aW9uTW9kZWwiLCJuYW1lIiwidGVzdHMiLCJmaWx0ZXJzIiwicmVxdWlyZSIsIlNldHRpbmdzTW9kZWwiLCJkZWZhdWx0RGlyZWN0aW9ucyIsImRpcmVjdGlvbnMiLCJyZW5kZXIiLCJpdGVtIiwiZGlyZWN0aW9uTmFtZXMiLCJ0ZXN0TmFtZSIsIlRlc3QiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsIkZpbHRlciIsIkdyb3VwVmlldyIsIkdyb3VwTW9kZWwiLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJkaXJlY3Rpb25MaXN0IiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJvcGVuIiwiYWRkTGlzdGVuZXJzIiwiY2xvc2VHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZURhdGEiLCJncm91cCIsImRpcmVjdGlvbiIsInB1YiIsImNsb3NlIiwiZ3JvdXBOYW1lRWxlbSIsImdyb3VwRGlyZWN0aW9uRWxlbSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsInZhbHVlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZ3JvdXBUcGwiLCJ0ZW1wbGF0ZSIsImdyb3Vwc0Jsb2NrIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiUG9wdXBTZXR0aW5nc1ZpZXciLCJQb3B1cEFkZERpcmVjdGlvblZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJzZXR0aW5nc01vZGVsIiwicG9wdXBTZXR0aW5nc1ZpZXciLCJwb3B1cEFkZERpcmVjdGlvblZpZXciLCJzdWJzY3JpYmUiLCJzdWJzY3JpYmVPcGVuUG9wdXBzIiwic3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uIiwic3Vic2NyaWJlU2VsZWN0RmlsdGVyIiwic3Vic2NyaWJlU2VsZWN0VGVzdCIsInN1YiIsImdldERpcmVjdGlvbk5hbWVzIiwic2VsZWN0ZWREaXJlY3Rpb24iLCJtb2RlIiwicmVuZGVyUG9wdXAiLCJzdWJzY3JpYmVDbG9zZVBvcHVwIiwicG9wdXBBZGRHcm91cFZpZXciLCJzZXREaXJlY3Rpb25MaXN0IiwicmVSZW5kZXJQb3B1cCIsImRpcmVjdGlvbk5hbWUiLCJmaW5kIiwic2V0dGluZ3NQb3B1cFRwbCIsImRpcmVjdGlvblNlbGVjdCIsInNlbGVjdFRlc3RCdG4iLCJzZWxlY3RGaWx0ZXJCdG4iLCJhZGREaXJlY3Rpb25Qb3B1cCIsImFkZFRlc3RQb3B1cCIsImFkZEZpbHRlclBvcHVwIiwidW5zdWIiLCJlIiwidGFyZ2V0IiwiZGlyZWN0aW9uTGlzdFRwbCIsImZpbHRlckxpc3RUcGwiLCJ0ZXN0TGlzdFRwbCIsImZpbHRlckxpc3QiLCJ0ZXN0TGlzdCIsImFkZERpcmVjdGlvblBvcHVwVHBsIiwiY2xvc2VEaXJlY3Rpb25CdG4iLCJncm91cExpc3RUcGwiLCJHcm91cExpc3RWaWV3IiwiZ3JvdXBMaXN0IiwibGVmdEJsb2NrIiwicmVuZGVyR3JvdXBzIiwiZ3JvdXBWaWV3Iiwic2V0R3JvdXAiLCJyZW5kZXJHcm91cCIsImFkZEdyb3VwQnRuIiwic2V0dGluZ3NCdG4iLCJHcm91cENvbnRyb2xsZXIiLCJncm91cExpc3RWaWV3IiwiYXBwZW5kR3JvdXAiLCJpbml0IiwiQXBwIiwiYXBwIiwic3RhcnQiLCJncm91cENvbnRyb2xsZXIiLCJzaG93R3JvdXBMaXN0IiwiYWRkR3JvdXAiLCJ0ZXN0RGF5cyIsImRhdGUiLCJ0aW1lIiwicGVvcGxlIiwibGFzdE5hbWUiLCJlbWFpbCIsInRlc3REYXkiLCJncmFkZXMiLCJFbmcxIiwiRW5nMiIsIkVuZzMiLCJFbmc0IiwiQ29yZSIsIkVzc2F5IiwiZmlsdGVyIiwidGVzdHNMaXN0IiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7Ozs7OztJQUVNQSxRO0FBQ0Ysd0JBQWU7QUFBQTs7QUFDWCxhQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7Ozs7NEJBRUlDLE8sRUFBU0MsSSxFQUFNO0FBQ2hCLGdCQUFJLEtBQUtGLFFBQUwsQ0FBY0MsT0FBZCxDQUFKLEVBQTRCO0FBQ3hCLHFCQUFLRCxRQUFMLENBQWNDLE9BQWQsRUFBdUJFLE9BQXZCLENBQStCLFVBQUNDLEVBQUQ7QUFBQSwyQkFBUUEsR0FBR0YsSUFBSCxDQUFSO0FBQUEsaUJBQS9CO0FBQ0g7QUFDSjs7OzRCQUVJ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RkQsU0FKYjtBQVFJSyxnQkFBUTtBQUNKQyxrQkFBTSxFQURGO0FBRUpDLGtCQUFNLEVBRkY7QUFHSkMsa0JBQU0sRUFIRjtBQUlKQyxrQkFBTSxFQUpGO0FBS0pDLGtCQUFNLEdBTEY7QUFNSkMsbUJBQU87QUFOSDtBQVJaLEtBbEJJO0FBMURULENBN0xTLENBQWhCOztBQThSSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0o7O0FBRUExSCxPQUFPQyxPQUFQLEdBQWlCMEYsU0FBakIsQzs7Ozs7OztBQ3JUQTs7QUFFQSxTQUFTUixhQUFULENBQXdCRSxVQUF4QixFQUFvQztBQUNoQyxRQUFJaEYsVUFBVSxFQUFkOztBQUVBZ0YsZUFBV3pGLE9BQVgsQ0FBbUIsVUFBQytILE1BQUQsRUFBWTtBQUMzQnRILDRDQUFrQ3NILE1BQWxDO0FBQ0gsS0FGRDs7QUFJQSw4SEFFdUN0SCxPQUZ2QztBQUtIOztBQUVETCxPQUFPQyxPQUFQLEdBQWlCa0YsYUFBakIsQzs7Ozs7OztBQ2hCQTs7QUFFQSxTQUFTQyxXQUFULENBQXNCd0MsU0FBdEIsRUFBaUM7QUFDN0IsUUFBSXhILFFBQVEsRUFBWjs7QUFFQXdILGNBQVVoSSxPQUFWLENBQWtCLFVBQUNpSSxJQUFELEVBQVU7QUFDeEJ6SCx3Q0FBOEJ5SCxJQUE5QjtBQUNILEtBRkQ7O0FBSUEsd0hBRXFDekgsS0FGckM7QUFLSDs7QUFFREosT0FBT0MsT0FBUCxHQUFpQm1GLFdBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDhmOTljMjY4NzI4ZWI0YjJmYjBhIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBNZWRpYXRvciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gICAgfVxuXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICB1bnN1YiAoY2hhbm5lbCkge1xuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcbiAgICB9XG59XG5cbmxldCBtZWRpYXRvciA9IG5ldyBNZWRpYXRvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIERpcmVjdGlvbk1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRlc3RzID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xuICAgIH1cblxuICAgIC8vIGFkZFRlc3QgKHRlc3ROYW1lKSB7XG4gICAgLy8gICAgIHRoaXMudGVzdHMucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xuICAgIC8vIH1cblxuICAgIC8vIGFkZEZpbHRlciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgIC8vICAgICB0aGlzLmZpbHRlcnMucHVzaChuZXcgRmlsdGVyKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpKTtcbiAgICAvLyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKTtcblxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKGRlZmF1bHREaXJlY3Rpb25zKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnJlbmRlcihkZWZhdWx0RGlyZWN0aW9ucyk7XG4gICAgfVxuXG4gICAgcmVuZGVyIChkZWZhdWx0RGlyZWN0aW9ucykge1xuICAgICAgICBkZWZhdWx0RGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgRGlyZWN0aW9uTW9kZWwoaXRlbSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25OYW1lcyAoKSB7XG4gICAgXHRsZXQgZGlyZWN0aW9uTmFtZXMgPSBbXTtcblxuICAgIFx0dGhpcy5kaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgXHRkaXJlY3Rpb25OYW1lcy5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgXHR9KTtcblxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uTmFtZXM7XG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ldyBEaXJlY3Rpb25Nb2RlbChuYW1lKSk7XG5cbiAgICAgICAgZGVmYXVsdERpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbk1vZGVsKGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkVGVzdHMgKHRlc3ROYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdHMucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xuICAgIH1cblxuICAgIGFkZEZpbHRlcnMgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgIGdyb3VwUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpO1xuXG5jbGFzcyBQb3B1cEFkZEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvLyBkaXJlY3Rpb25MaXN0INC80Ysg0LTQvtC70LbQvdGLINCx0YDQsNGC0Ywg0L7RgtC60YPQtNCwINGC0L5cbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gWyd1aScsICdwaHAnLCAnanMnLCAnamF2YSddO1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xuICAgIH1cblxuICAgIHJlbmRlclBvcHVwICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBncm91cFBvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTGlzdCk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XG5cbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZW5lcmF0ZURhdGEoKSxcbiAgICAgICAgICAgICAgICAvLyBkYXRhLmRpcmVjdGlvbiAtINC80Ysg0L/QvtC70YPRh9Cw0LXQvCDQuNC3INC90LDRiNC40YUg0YHQtdGC0YLQuNC90LPRgVxuICAgICAgICAgICAgICAgIGdyb3VwID0gbmV3IEdyb3VwTW9kZWwoZGF0YS5uYW1lLCBkYXRhLmRpcmVjdGlvbik7XG5cbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZ3JvdXA6Y3JlYXRlZCcsIGdyb3VwKTtcblxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb25MaXN0IChkaXJlY3Rpb25MaXN0KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3Q7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1uYW1lJyksXG4gICAgICAgICAgICBncm91cERpcmVjdGlvbkVsZW0gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1kaXJlY3Rpb24nKSxcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcblxuICAgICAgICBkYXRhLmRpcmVjdGlvbiA9IGdyb3VwRGlyZWN0aW9uRWxlbS5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbS5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIG9wZW4gKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ3JvdXBUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cFRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwVHBsKGdyb3VwKTtcbiAgICB9XG5cbiAgICByZW5kZXJHcm91cCAoKSB7XG4gICAgICAgIGxldCBncm91cHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC13cmFwcGVyJyk7XG5cbiAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBhZGRUZXN0aW5nU2Vzc2lvbiAoKSB7XG5cbiAgICB9XG5cbiAgICBhZGRUZXN0ICgpIHtcblxuICAgIH1cblxuICAgIGFkZEZpbHRlciAoKSB7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXG4gICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxuICAgIFBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzJyksXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChkZWZhdWx0RGlyZWN0aW9ucykge1xuICAgICAgICB0aGlzLnNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbChkZWZhdWx0RGlyZWN0aW9ucyk7XG4gICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcgPSBuZXcgUG9wdXBTZXR0aW5nc1ZpZXcoKTtcbiAgICAgICAgdGhpcy5wb3B1cEFkZERpcmVjdGlvblZpZXcgPSBuZXcgUG9wdXBBZGREaXJlY3Rpb25WaWV3KCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlT3BlblBvcHVwcygpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdERpcmVjdGlvbigpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdEZpbHRlcigpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdFRlc3QoKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVPcGVuUG9wdXBzICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOm9wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnNbMF07XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaWJlQ2xvc2VQb3B1cCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcblxuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnNldERpcmVjdGlvbkxpc3QoZGlyZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcHVwQWRkRGlyZWN0aW9uVmlldyA9IG5ldyBQb3B1cEFkZERpcmVjdGlvblZpZXcoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcG9wdXBBZGREaXJlY3Rpb25WaWV3LnJlbmRlclBvcHVwKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlQ2xvc2VQb3B1cCAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucG9wdXBBZGREaXJlY3Rpb25WaWV3LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3Lm9wZW4oKTtcblxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcblxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiAoKSB7XG4gICAgXHRtZWRpYXRvci5zdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCAoZGlyZWN0aW9uTmFtZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24gPSB0aGlzLnNldHRpbmdzTW9kZWwuZGlyZWN0aW9ucy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IGRpcmVjdGlvbk5hbWUpO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU2VsZWN0VGVzdCAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YigndGVzdDpzZWxlY3QnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlU2VsZWN0RmlsdGVyICgpIHtcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdmaWx0ZXI6c2VsZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdGJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZUFkZERpcmVjdGlvbiAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZGlyZWN0aW9uOmFkZCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIHNldHRpbmdzUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyk7XG5cbmNsYXNzIFBvcHVwU2V0dGluZ3NWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MnKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3B1cCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgcmVSZW5kZXJQb3B1cCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBzZXR0aW5nc1BvcHVwVHBsKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb25OYW1lcyAoZGlyZWN0aW9ucykge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSBkaXJlY3Rpb25zO1xuICAgIH1cblxuICAgIG9wZW4gKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgY2xvc2VHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZXR0aW5ncy1idG4nKSxcbiAgICAgICAgICAgIGRpcmVjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb24nKSxcbiAgICAgICAgICAgIHNlbGVjdFRlc3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdC1zZXR0aW5ncy1idG4nKSxcbiAgICAgICAgICAgIHNlbGVjdEZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItc2V0dGluZ3MtYnRuJyksXG4gICAgICAgICAgICBhZGREaXJlY3Rpb25Qb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyZWN0aW9uLWJ0bicpLFxuICAgICAgICAgICAgYWRkVGVzdFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXN0LWJ0bicpLFxuICAgICAgICAgICAgYWRkRmlsdGVyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZpbHRlci1idG4nKTtcblxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XG4gICAgICAgICAgICBtZWRpYXRvci51bnN1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkaXJlY3Rpb25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZGlyZWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0VGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YigndGVzdDpzZWxlY3QnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZWN0RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdmaWx0ZXI6c2VsZWN0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZERpcmVjdGlvblBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGFkZFRlc3RQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkRmlsdGVyUG9wdXA6b3BlbicpO1xuICAgICAgICAvLyB9KTtcblxuICAgICAgICAvLyBhZGRGaWx0ZXJQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkVGVzdFBvcHVwOm9wZW4nKTtcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cE5hbWUnKSxcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbEdyb3VwRGlyZWN0aW9uJyksXG4gICAgICAgICAgICBkYXRhID0ge307XG5cbiAgICAgICAgZGF0YS5kaXJlY3Rpb24gPSBncm91cERpcmVjdGlvbkVsZW0ub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW0uc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBkaXJlY3Rpb25MaXN0VHBsID0gcmVxdWlyZSgnLi9kaXJlY3Rpb25MaXN0VHBsLmpzJyksXG4gICAgZmlsdGVyTGlzdFRwbCA9IHJlcXVpcmUoJy4uLy4uLy4uL0ZpbHRlcnMvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcycpLFxuICAgIHRlc3RMaXN0VHBsID0gcmVxdWlyZSgnLi4vLi4vLi4vVGVzdHMvVmlldy90cGwvdGVzdExpc3RUcGwuanMnKTtcblxuZnVuY3Rpb24gc2V0dGluZ3NQb3B1cFRwbCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICBsZXQgZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9ucywgc2VsZWN0ZWREaXJlY3Rpb24ubmFtZSksXG4gICAgICAgIGZpbHRlckxpc3QgPSBmaWx0ZXJMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLmZpbHRlcnMpLFxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLnRlc3RzKTtcblxuICAgIHJldHVybiBgPGRpdiBpZD1cInNldHRpbmdzLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbHRlci1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5GPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke21vZGUgPT09ICdUJz8gdGVzdExpc3Q6IGZpbHRlckxpc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2Utc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdzUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm91cFRwbCAoZ3JvdXApIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHtncm91cC5uYW1lfSAke2dyb3VwLmRpcmVjdGlvbn08L2gyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3VwUG9wdXBUcGwgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xuXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJncm91cC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibW9kYWwtZ3JvdXAtbmFtZVwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncm91cFBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXG4gICAgYWRkRGlyZWN0aW9uUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcycpO1xuXG5jbGFzcyBQb3B1cEFkZERpcmVjdGlvblZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtZGlyZWN0aW9uJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGFkZERpcmVjdGlvblBvcHVwVHBsKCk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIG9wZW4gKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgY2xvc2VEaXJlY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZGlyZWN0aW9uLWJ0bicpLFxuICAgICAgICAgICAgZGlyZWN0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyZWN0aW9uLW5hbWUnKTtcblxuXG4gICAgICAgIGNsb3NlRGlyZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScpO1xuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2FkZERpcmVjdGlvblBvcHVwOmNsb3NlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpcmVjdGlvbk5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZERpcmVjdGlvblZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRGlyZWN0aW9uVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBWaWV3LmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cExpc3RWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IGxlZnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbHVtbicpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcblxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJHcm91cHMoKTtcblxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJlbmRlckdyb3VwcyAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0LmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xuXG4gICAgICAgICAgICBncm91cFZpZXcuc2V0R3JvdXAoZ3JvdXApO1xuXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFwcGVuZEdyb3VwIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xuXG4gICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XG4gICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyksXG4gICAgICAgICAgICBzZXR0aW5nc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZXR0aW5ncy1idG4nKTtcblxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1YignZ3JvdXBQb3B1cDpvcGVuJykpO1xuICAgICAgICBzZXR0aW5nc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG1lZGlhdG9yLnB1Yignc2V0dGluZ3NQb3B1cDpvcGVuJykpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ3JvdXBMaXN0VHBsICgpIHtcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2staGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+R3JvdXA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay13cmFwcGVyIGdyb3VwLXdyYXBwZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWdyb3VwLWJ0blwiPmFkZCBncm91cDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XG4gICAgICAgIHRoaXMuZ3JvdXBMaXN0ID0gZ3JvdXBMaXN0O1xuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNob3dHcm91cExpc3QgKCkge1xuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KHRoaXMuZ3JvdXBMaXN0KTtcblxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XG5cbiAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsIChncm91cCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpO1xuXG4gICAgICAgICAgICBncm91cExpc3RWaWV3LmFwcGVuZEdyb3VwKGdyb3VwKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gICAgbGV0IEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyksXG4gICAgICAgIGdyb3VwTGlzdCA9IHJlcXVpcmUoJy4vdGVzdERhdGEnKTtcblxuICAgIGxldCBhcHAgPSBuZXcgQXBwKGdyb3VwTGlzdCk7XG4gICAgXG4gICAgYXBwLnN0YXJ0KCk7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9tYWluLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBkaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0LCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgIGxldCBvcHRpb25zID0gJyc7XG5cbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0nJHtpdGVtfScgJHtzZWxlY3RlZERpcmVjdGlvbiA9PT0gaXRlbT8gJ3NlbGVjdGVkJzogJyd9PiR7aXRlbX08L29wdGlvbj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uLWxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1kaXJlY3Rpb24tYnRuXCI+YWRkIGRpcmVjdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25MaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYWRkRGlyZWN0aW9uUG9wdXBUcGwgKCkge1xuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgYWRkLWRpcmVjdGlvbi1wb3B1cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLWRpcmVjdGlvbi1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBkaXJlY3Rpb24gbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrIGNsb3NlLWRpcmVjdGlvbi1idG5cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZERpcmVjdGlvblBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcbiAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aW9ucyA9IGdyb3VwTGlzdC5kaXJlY3Rpb25zO1xuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cExpc3QpO1xuICAgICAgICAgICAgLy8gc2V0dGluZ3NDb250cm9sbGVyID0gbmV3IFNldHRpbmdzQ29udHJvbGxlcih0aGlzLmRpcmVjdGlvbnMpO1xuICAgICAgICBcbiAgICAgICAgZ3JvdXBDb250cm9sbGVyLnNob3dHcm91cExpc3QoKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkR3JvdXAoZ3JvdXApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRHcm91cCAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy5ncm91cExpc3QucHVzaChncm91cCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ3JvdXBMaXN0ID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ0RwLTExNycsXG4gICAgICAgIHRlc3RMaXN0OiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0pTIENvcmUnLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ0Vzc2F5JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFbmcxJywgJ0VuZzInLCAnRW5nMycsICdFbmc0J10sXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDYwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0pTIENvcmUnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3REYXlzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwZW9wbGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnSGFycnknLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnUG90dGVyJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hhcnJ5LXBvdHRlckBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdSb24nLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnV2lzbGV5JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3Jvbi13aXNsZXlAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSwge1xuICAgICAgICBuYW1lOiAnRHAtMTIxJyxcbiAgICAgICAgdGVzdExpc3Q6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnR28gQ29yZScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZmlsdGVyTGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnR28gQ29yZSddLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA4MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFc3NheSddLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA3NVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdGVzdERheXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHBlb3BsZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdIZXJtaW9uZScsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdHcmFuZ2VyJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2hlcm1pb25lLWdyYW5nZXJAZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNTozMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA5NSxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTmV2aWxsZScsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdMb25nYm90dG9tJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ25ldmlsbGUtbG9uZ2JvdHRvbUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE3OjAwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDgwLFxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzUsXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDYwLFxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAzNjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LCB7XG4gICAgICAgIG5hbWU6ICdEcC0xMjMnLFxuICAgICAgICB0ZXN0TGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdQSFAgQ29yZScsXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxuICAgICAgICAgICAgICAgIGdyYWRlOiA0MDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZmlsdGVyTGlzdDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnUEhQIENvcmUnXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogODBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRXNzYXknXSxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcbiAgICAgICAgICAgICAgICBncmFkZTogNzVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHRlc3REYXlzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICB0aW1lOiBbJzE1OjMwJywgJzE3OjAwJ10gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBwZW9wbGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnRHJhY28nLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnTWFsZm95JyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2RyYWNvLW1hbGZveUBnbWFpbC5jb20nLFxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA4NSxcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdQZXRlcicsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdHcmlmZmluJyxcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3BldGVyLWdyaWZmaW5AZ21haWwuY29tJyxcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMS8wNi8yMycsXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDc1LFxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMzYwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSBcbl07XG5cbiAgICAvLyBkaXJlY3Rpb25zOiBbJ1VJJywgJ1BIUCcsICdHTycsICdKUyddXG5cbiAgICAvLyBkaXJlY3Rpb25zOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6ICdVSScsXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnSlMgQ29yZScsICdFc3NheSBVSSddLFxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydVSSAxJ11cbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogJ1BIUCcsXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnRXNzYXkgUEhQJ10sXG4gICAgLy8gICAgICAgICBmaWx0ZXJzOiBbJ1BIUCAxJ11cbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogJ0dPJyxcbiAgICAvLyAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBHTyddLFxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydHTyAxJ11cbiAgICAvLyAgICAgfVxuICAgIC8vIF1cbi8vIH07XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdGVzdERhdGEuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGZpbHRlckxpc3RUcGwgKGZpbHRlckxpc3QpIHtcbiAgICBsZXQgZmlsdGVycyA9ICcnO1xuXG4gICAgZmlsdGVyTGlzdC5mb3JFYWNoKChmaWx0ZXIpID0+IHtcbiAgICAgICAgZmlsdGVycyArPSBgPGRpdiBjbGFzcz1cImZpbHRlclwiPiR7ZmlsdGVyfTwvZGl2PmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgzPkZpbHRlcnM8L2gzPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdFwiPiR7ZmlsdGVyc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWZpbHRlci1idG4gYnRuXCI+YWRkIGZpbHRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaWx0ZXJMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRmlsdGVycy9WaWV3L3RwbC9maWx0ZXJMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiB0ZXN0TGlzdFRwbCAodGVzdHNMaXN0KSB7XG4gICAgbGV0IHRlc3RzID0gJyc7XG5cbiAgICB0ZXN0c0xpc3QuZm9yRWFjaCgodGVzdCkgPT4ge1xuICAgICAgICB0ZXN0cyArPSBgPGRpdiBjbGFzcz1cInRlc3RcIj4ke3Rlc3R9PC9kaXY+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRlc3QtbGlzdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgzPlRlc3RzPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+JHt0ZXN0c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRlc3QtYnRuIGJ0blwiPmFkZCB0ZXN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRlc3RMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvVGVzdHMvVmlldy90cGwvdGVzdExpc3RUcGwuanMiXSwic291cmNlUm9vdCI6IiJ9