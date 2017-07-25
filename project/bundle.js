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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
    groupPopupTpl = __webpack_require__(10);

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
<<<<<<< HEAD
=======

                _this.close();
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
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
<<<<<<< HEAD
        // Исправить

    }], [{
=======
    }, {
        key: 'open',
        value: function open() {
            this.modal.classList.add('visible');
        }
    }, {
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
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
<<<<<<< HEAD
/* 6 */
=======
/* 6 */,
/* 7 */
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopupSettingsView = __webpack_require__(7),
    PopupAddGroupView = __webpack_require__(3),
    PopupAddDirectionView = __webpack_require__(11),
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


var directionListTpl = __webpack_require__(16),
    filterListTpl = __webpack_require__(23),
    testListTpl = __webpack_require__(24);

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

var mediator = __webpack_require__(0),
    addDirectionPopupTpl = __webpack_require__(17);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

<<<<<<< HEAD
var groupListTpl = __webpack_require__(13),
=======
var groupListTpl = __webpack_require__(14),
    GroupView = __webpack_require__(4),
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function groupListTpl() {
    return '<section id="group-block">\n                <div class="group-block-head">\n                    <h1>Group</h1>\n                    <button id="settings-btn" class="btn btn-cog">\n                        <i class="fa fa-cog" aria-hidden="true"></i>\n                    </button>\n                </div>\n                <div class="group-block-body">\n                    <div class="group-block-wrapper group-wrapper"></div>\n                        <button class="btn add-group-btn">add group</button>\n                    </div>\n            </section>';
}

module.exports = groupListTpl;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupListView = __webpack_require__(12),
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

<<<<<<< HEAD
            mediator.sub('group:created', function () {
                //popupAddGroupView - Должна генерироваться при создании addGroup
                // Создаем объект группы в groupPopup: open
                // и потом передаем в groupPopup сreated
                // GroupList View должен иметь в себе метод создания GroupView
                // И она должна уметь рендерить группу
                // group:created
                // Это должно быть все в одном контроллере
                // groupList.appendView;
                var groupView = new GroupView(),
                    groupData = {},
                    group = {};

                groupView.setGroup(group);
                // PopUp - сам себя закроет
                // PopupAddGroupView.close();
                groupView.renderGroup();
=======
            mediator.sub('group:created', function (group) {
                var groupListView = new GroupListView();

                groupListView.appendGroup(group);
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
            });
        }
    }]);

    return GroupController;
}();

module.exports = GroupController;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
<<<<<<< HEAD
    var DirectionModel = __webpack_require__(1),
        Filter = __webpack_require__(20),
        Test = __webpack_require__(22),
        SettingsModel = __webpack_require__(2),
        SettingsController = __webpack_require__(6),
        GroupModel = __webpack_require__(5),
        GroupView = __webpack_require__(4),
        GroupListView = __webpack_require__(12),
        groupListTpl = __webpack_require__(13),
        PopupAddGroupView = __webpack_require__(3),
        PopupSettingsView = __webpack_require__(7),
        PopupAddFilterView = __webpack_require__(25),
        PopupAddDirectionView = __webpack_require__(11),
        PopupAddTestView = __webpack_require__(26),
        groupPopupTpl = __webpack_require__(10),
        groupTpl = __webpack_require__(9),
        settingsPopupTpl = __webpack_require__(8),
        GroupController = __webpack_require__(14),
        App = __webpack_require__(18),
        Mediator = __webpack_require__(0);

    var app = new App();
=======
    var App = __webpack_require__(27),
        groupList = __webpack_require__(28);
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385

    var app = new App(groupList);

<<<<<<< HEAD
/***/ }),
/* 16 */
=======
    app.start();
}

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
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


function addDirectionPopupTpl() {
    return '<div class="modal-content add-direction-popup">\n                <input type="text" class="add-direction-name" placeholder="Enter direction name">\n                <button class="btn btn-cog">\n                    <i class="fa fa-check close-direction-btn" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addDirectionPopupTpl;

/***/ }),
<<<<<<< HEAD
/* 18 */
=======
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

<<<<<<< HEAD
var GroupController = __webpack_require__(14),
    SettingsController = __webpack_require__(6),
    testData = __webpack_require__(19),
    mediator = __webpack_require__(0);

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.groupList = [];
        this.directions = testData.directions;
=======
var GroupController = __webpack_require__(15),
    SettingsController = __webpack_require__(7),
    mediator = __webpack_require__(0);

var App = function () {
    function App(groupList) {
        _classCallCheck(this, App);

        this.groupList = groupList;
        // this.directions = groupList.directions;
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
        this.subscribe();
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
<<<<<<< HEAD
            var groupController = new GroupController(this.groupList),
                settingsController = new SettingsController(this.directions);
=======
            var groupController = new GroupController(this.groupList);
            // settingsController = new SettingsController(this.directions);
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385

            groupController.showGroupList();
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
<<<<<<< HEAD
            // mediator.sub('group:created', (group) => {
            //     this.addGroup(group);
            // });
=======
            var _this = this;

            mediator.sub('group:created', function (group) {
                _this.addGroup(group);
            });
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
        }
    }, {
        key: 'addGroup',
        value: function addGroup(group) {
<<<<<<< HEAD
            this.groups.push(group);
=======
            this.groupList.push(group);
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
        }
    }]);

    return App;
}();

module.exports = App;

/***/ }),
<<<<<<< HEAD
/* 19 */
=======
/* 28 */
>>>>>>> f5fdac0b95495951ec9969a2597a92cbc0ce7385
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

<<<<<<< HEAD
/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Filter = function Filter(tests, action, condition, grade) {
    _classCallCheck(this, Filter);

    this.tests = tests;
    this.actionList = ['average', 'max', 'min', 'equal'];
    this.conditionList = ['>', '>=', '=', '<=', '<'];
    this.grade = grade;
}

// addTest, changeAction, changeCondition, changeGrade
;

module.export = FilterModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Test = function Test(name, maxGrade, grade) {
    _classCallCheck(this, Test);

    this.name = name;
    // this.maxGrade = maxGrade;
    // this.grade = grade;
};

module.export = Test;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)(module)))

/***/ }),
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    addFilterPopupTpl = __webpack_require__(28);

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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    addTestPopupTpl = __webpack_require__(27);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function addTestPopupTpl() {
    return '<div class="modal-content add-test-popup">\n                <input type="text" class="add-test-name" placeholder="Enter test name">\n                <button class="btn btn-cog close-test-btn">\n                    <i class="fa fa-check" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addTestPopupTpl;

/***/ }),
/* 28 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTI1MzBlMDJlZmRhMzQwZGJhOWUiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9Qb3B1cEFkZERpcmVjdGlvblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvQXBwLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvdGVzdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9GaWx0ZXJzL01vZGVsL0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvVGVzdHMvTW9kZWwvVGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0ZpbHRlcnMvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvRmlsdGVycy9WaWV3L1BvcHVwQWRkRmlsdGVyVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvUG9wdXBBZGRUZXN0Vmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvdHBsL2FkZFRlc3RQb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0ZpbHRlcnMvVmlldy90cGwvYWRkRmlsdGVyUG9wdXBUcGwuanMiXSwibmFtZXMiOlsiTWVkaWF0b3IiLCJjaGFubmVscyIsImNoYW5uZWwiLCJkYXRhIiwiZm9yRWFjaCIsImZuIiwicHVzaCIsIm1lZGlhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIkRpcmVjdGlvbk1vZGVsIiwibmFtZSIsInRlc3RzIiwiZmlsdGVycyIsInJlcXVpcmUiLCJTZXR0aW5nc01vZGVsIiwiZGVmYXVsdERpcmVjdGlvbnMiLCJkaXJlY3Rpb25zIiwicmVuZGVyIiwiaXRlbSIsImRpcmVjdGlvbk5hbWVzIiwidGVzdE5hbWUiLCJUZXN0IiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJGaWx0ZXIiLCJHcm91cFZpZXciLCJHcm91cE1vZGVsIiwiZ3JvdXBQb3B1cFRwbCIsIlBvcHVwQWRkR3JvdXBWaWV3IiwiZGlyZWN0aW9uTGlzdCIsIm1vZGFsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwib3BlbiIsImFkZExpc3RlbmVycyIsImNsb3NlR3JvdXBCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwiZ2VuZXJhdGVEYXRhIiwiZ3JvdXAiLCJkaXJlY3Rpb24iLCJwdWIiLCJjbGFzc0xpc3QiLCJhZGQiLCJncm91cE5hbWVFbGVtIiwiZ3JvdXBEaXJlY3Rpb25FbGVtIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ0ZXh0IiwidmFsdWUiLCJyZW1vdmUiLCJncm91cFRwbCIsInRlbXBsYXRlIiwiZ3JvdXBzQmxvY2siLCJpbnNlcnRBZGphY2VudEhUTUwiLCJQb3B1cFNldHRpbmdzVmlldyIsIlBvcHVwQWRkRGlyZWN0aW9uVmlldyIsIlNldHRpbmdzQ29udHJvbGxlciIsInNldHRpbmdzTW9kZWwiLCJwb3B1cFNldHRpbmdzVmlldyIsInBvcHVwQWRkRGlyZWN0aW9uVmlldyIsInN1YnNjcmliZSIsInN1YnNjcmliZU9wZW5Qb3B1cHMiLCJzdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24iLCJzdWJzY3JpYmVTZWxlY3RGaWx0ZXIiLCJzdWJzY3JpYmVTZWxlY3RUZXN0Iiwic3ViIiwiZ2V0RGlyZWN0aW9uTmFtZXMiLCJzZWxlY3RlZERpcmVjdGlvbiIsIm1vZGUiLCJyZW5kZXJQb3B1cCIsInN1YnNjcmliZUNsb3NlUG9wdXAiLCJwb3B1cEFkZEdyb3VwVmlldyIsInNldERpcmVjdGlvbkxpc3QiLCJjbG9zZSIsInJlUmVuZGVyUG9wdXAiLCJkaXJlY3Rpb25OYW1lIiwiZmluZCIsInNldHRpbmdzUG9wdXBUcGwiLCJkaXJlY3Rpb25TZWxlY3QiLCJzZWxlY3RUZXN0QnRuIiwic2VsZWN0RmlsdGVyQnRuIiwiYWRkRGlyZWN0aW9uUG9wdXAiLCJhZGRUZXN0UG9wdXAiLCJhZGRGaWx0ZXJQb3B1cCIsInVuc3ViIiwiZSIsInRhcmdldCIsImRpcmVjdGlvbkxpc3RUcGwiLCJmaWx0ZXJMaXN0VHBsIiwidGVzdExpc3RUcGwiLCJmaWx0ZXJMaXN0IiwidGVzdExpc3QiLCJhZGREaXJlY3Rpb25Qb3B1cFRwbCIsImNsb3NlRGlyZWN0aW9uQnRuIiwiZ3JvdXBMaXN0VHBsIiwiR3JvdXBMaXN0VmlldyIsImxlZnRCbG9jayIsImFkZEdyb3VwQnRuIiwic2V0dGluZ3NCdG4iLCJHcm91cENvbnRyb2xsZXIiLCJncm91cExpc3QiLCJncm91cExpc3RWaWV3IiwiZ3JvdXBWaWV3IiwiZ3JvdXBEYXRhIiwic2V0R3JvdXAiLCJyZW5kZXJHcm91cCIsImluaXQiLCJQb3B1cEFkZEZpbHRlclZpZXciLCJQb3B1cEFkZFRlc3RWaWV3IiwiQXBwIiwiYXBwIiwic3RhcnQiLCJ0ZXN0RGF0YSIsImdyb3VwQ29udHJvbGxlciIsInNldHRpbmdzQ29udHJvbGxlciIsInNob3dHcm91cExpc3QiLCJncm91cHMiLCJ0ZXN0RGF5cyIsImRhdGUiLCJ0aW1lIiwicGVvcGxlIiwibGFzdE5hbWUiLCJlbWFpbCIsInRlc3REYXkiLCJncmFkZXMiLCJFbmcxIiwiRW5nMiIsIkVuZzMiLCJFbmc0IiwiQ29yZSIsIkVzc2F5IiwiYWN0aW9uTGlzdCIsImNvbmRpdGlvbkxpc3QiLCJleHBvcnQiLCJGaWx0ZXJNb2RlbCIsIm1heEdyYWRlIiwiZmlsdGVyIiwidGVzdHNMaXN0IiwidGVzdCIsImFkZEZpbHRlclBvcHVwVHBsIiwiY2xvc2VGaWx0ZXJCdG4iLCJhY3Rpb25TZWxlY3QiLCJjb25kaXRpb25TZWxlY3QiLCJ0ZXN0R3JhZGUiLCJhZGRUZXN0UG9wdXBUcGwiLCJjbG9zZVRlc3RCdG4iLCJnZW5lcmF0ZVRlc3RMaXN0IiwiYWN0aW9ucyIsImdlbmVyYXRlTGlzdCIsImNvbmRpdGlvbnMiLCJsaXN0Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzdEQTs7Ozs7O0lBRU1BLFE7QUFDRix3QkFBZTtBQUFBOztBQUNYLGFBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSDs7Ozs0QkFFSUMsTyxFQUFTQyxJLEVBQU07QUFDaEIsZ0JBQUksS0FBS0YsUUFBTCxDQUFjQyxPQUFkLENBQUosRUFBNEI7QUFDeEIscUJBQUtELFFBQUwsQ0FBY0MsT0FBZCxFQUF1QkUsT0FBdkIsQ0FBK0IsVUFBQ0MsRUFBRDtBQUFBLDJCQUFRQSxHQUFHRixJQUFILENBQVI7QUFBQSxpQkFBL0I7QUFDSDtBQUNKOzs7NEJBRUlELE8sRUFBU0csRSxFQUFJO0FBQ2QsZ0JBQUksQ0FBQyxLQUFLSixRQUFMLENBQWNDLE9BQWQsQ0FBTCxFQUE2QjtBQUN6QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLElBQXlCLEVBQXpCO0FBQ0g7O0FBRUQsaUJBQUtELFFBQUwsQ0FBY0MsT0FBZCxFQUF1QkksSUFBdkIsQ0FBNEJELEVBQTVCO0FBQ0g7Ozs4QkFFTUgsTyxFQUFTO0FBQ1osbUJBQU8sS0FBS0QsUUFBTCxDQUFjQyxPQUFkLENBQVA7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QUFFQSxTQUFTb0MsZUFBVCxHQUE0QjtBQUN4QjtBQU1IOztBQUVEM0ksT0FBT0MsT0FBUCxHQUFpQjBJLGVBQWpCLEM7Ozs7Ozs7QUNYQTs7QUFFQSxTQUFTTCxpQkFBVCxDQUE0QmhELFFBQTVCLEVBQXNDd0MsVUFBdEMsRUFBa0RDLGFBQWxELEVBQWlFO0FBQzdELFFBQUkzSCxRQUFReUksaUJBQWlCdkQsUUFBakIsQ0FBWjtBQUFBLFFBQ0l3RCxVQUFVQyxhQUFhakIsVUFBYixDQURkO0FBQUEsUUFFSWtCLGFBQWFELGFBQWFoQixhQUFiLENBRmpCOztBQUlBLGFBQVNnQixZQUFULENBQXVCRSxJQUF2QixFQUE2QjtBQUN6QkEsYUFBS3JKLE9BQUwsQ0FBYSxVQUFDZSxJQUFELEVBQVU7QUFDbkJzSSxpQ0FBbUJ0SSxJQUFuQjtBQUNILFNBRkQ7O0FBSUEsZUFBT3NJLElBQVA7QUFDSDs7QUFFRCxhQUFTSixnQkFBVCxDQUEyQkksSUFBM0IsRUFBaUM7QUFDN0JBLGFBQUtySixPQUFMLENBQWEsVUFBQ2UsSUFBRCxFQUFVO0FBQ25Cc0ksNkJBQWV0SSxJQUFmO0FBQ0gsU0FGRDs7QUFJQSxlQUFPc0ksSUFBUDtBQUNIOztBQUVELG9JQUVrQjdJLEtBRmxCLHlVQVMwRDBJLE9BVDFELGtGQVU2REUsVUFWN0Q7QUFrQkg7O0FBRURoSixPQUFPQyxPQUFQLEdBQWlCcUksaUJBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDEyNTMwZTAyZWZkYTM0MGRiYTllIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgTWVkaWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdWIgKGNoYW5uZWwsIGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1YiAoY2hhbm5lbCwgZm4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YiAoY2hhbm5lbCkge1xyXG4gICAgICAgIGRlbGV0ZSB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gbWVkaWF0b3I7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNsYXNzIERpcmVjdGlvbk1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRlc3RzID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkVGVzdCAodGVzdE5hbWUpIHtcclxuICAgIC8vICAgICB0aGlzLnRlc3RzLnB1c2gobmV3IFRlc3QodGVzdE5hbWUpKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBhZGRGaWx0ZXIgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcclxuICAgIC8vICAgICB0aGlzLmZpbHRlcnMucHVzaChuZXcgRmlsdGVyKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpKTtcclxuICAgIC8vIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBEaXJlY3Rpb25Nb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKTtcclxuXHJcbmNsYXNzIFNldHRpbmdzTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKGRlZmF1bHREaXJlY3Rpb25zKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gW107XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoZGVmYXVsdERpcmVjdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlciAoZGVmYXVsdERpcmVjdGlvbnMpIHtcclxuICAgICAgICBkZWZhdWx0RGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ldyBEaXJlY3Rpb25Nb2RlbChpdGVtKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aW9uTmFtZXMgKCkge1xyXG4gICAgXHRsZXQgZGlyZWN0aW9uTmFtZXMgPSBbXTtcclxuXHJcbiAgICBcdHRoaXMuZGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgXHRkaXJlY3Rpb25OYW1lcy5wdXNoKGl0ZW0ubmFtZSk7XHJcbiAgICBcdH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uTmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGlyZWN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbk1vZGVsKG5hbWUpKTtcclxuXHJcbiAgICAgICAgZGVmYXVsdERpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgRGlyZWN0aW9uTW9kZWwoaXRlbSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3RzICh0ZXN0TmFtZSkge1xyXG4gICAgICAgIHRoaXMudGVzdHMucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEZpbHRlcnMgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcclxuICAgICAgICB0aGlzLmZpbHRlcnMucHVzaChuZXcgRmlsdGVyKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBTZXR0aW5nc01vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXHJcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cEFkZEdyb3VwVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJQb3B1cCAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBncm91cFBvcHVwVHBsKHRoaXMuZGlyZWN0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXJlY3Rpb25MaXN0IChkaXJlY3Rpb25MaXN0KSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUdyb3VwQnRuID0gdGhpcy5tb2RhbC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZW5lcmF0ZURhdGEoKSxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGEuZGlyZWN0aW9uIC0g0LzRiyDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0L3QsNGI0LjRhSDRgdC10YLRgtC40L3Qs9GBXHJcbiAgICAgICAgICAgICAgICBncm91cCA9IG5ldyBHcm91cE1vZGVsKGRhdGEubmFtZSwgZGF0YS5kaXJlY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1uYW1lJyksXHJcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbSA9IHRoaXMubW9kYWwucXVlcnlTZWxlY3RvcignI21vZGFsLWdyb3VwLWRpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBkYXRhID0ge307XHJcblxyXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XHJcbiAgICAgICAgZGF0YS5uYW1lID0gZ3JvdXBOYW1lRWxlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICAvLyDQmNGB0L/RgNCw0LLQuNGC0YxcclxuICAgIHN0YXRpYyBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwVHBsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEdyb3VwIChncm91cCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cFRwbChncm91cCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyR3JvdXAgKCkge1xyXG4gICAgICAgIGxldCBncm91cHNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncm91cC13cmFwcGVyJyk7XHJcblxyXG4gICAgICAgIGdyb3Vwc0Jsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgR3JvdXBNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0aW5nU2Vzc2lvbiAoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFkZFRlc3QgKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWx0ZXIgKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzJyksXHJcbiAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICBQb3B1cEFkZERpcmVjdGlvblZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRGlyZWN0aW9uVmlldy5qcycpLFxyXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgIERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIFNldHRpbmdzQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGVmYXVsdERpcmVjdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzTW9kZWwgPSBuZXcgU2V0dGluZ3NNb2RlbChkZWZhdWx0RGlyZWN0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldyA9IG5ldyBQb3B1cFNldHRpbmdzVmlldygpO1xyXG4gICAgICAgIHRoaXMucG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gbmV3IFBvcHVwQWRkRGlyZWN0aW9uVmlldygpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZU9wZW5Qb3B1cHMoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVNlbGVjdERpcmVjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlU2VsZWN0RmlsdGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3RUZXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlT3BlblBvcHVwcyAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOm9wZW4nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnNbMF07XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVDbG9zZVBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoKSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5zZXREaXJlY3Rpb25MaXN0KGRpcmVjdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgcG9wdXBBZGRHcm91cFZpZXcucmVuZGVyUG9wdXAoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpvcGVuJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gbmV3IFBvcHVwQWRkRGlyZWN0aW9uVmlldygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcG9wdXBBZGREaXJlY3Rpb25WaWV3LnJlbmRlclBvcHVwKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcuY2xvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVDbG9zZVBvcHVwKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlQ2xvc2VQb3B1cCAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLnN1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBBZGREaXJlY3Rpb25WaWV3LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcub3BlbigpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlU2VsZWN0RGlyZWN0aW9uICgpIHtcclxuICAgIFx0bWVkaWF0b3Iuc3ViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgKGRpcmVjdGlvbk5hbWUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gZGlyZWN0aW9uTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVNlbGVjdFRlc3QgKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YigndGVzdDpzZWxlY3QnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZVNlbGVjdEZpbHRlciAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdmaWx0ZXI6c2VsZWN0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnRic7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVBZGREaXJlY3Rpb24gKCkge1xyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZGlyZWN0aW9uOmFkZCcsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NDb250cm9sbGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIHNldHRpbmdzUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzJyk7XHJcblxyXG5jbGFzcyBQb3B1cFNldHRpbmdzVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1zZXR0aW5ncycpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwIChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gc2V0dGluZ3NQb3B1cFRwbChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZVJlbmRlclBvcHVwIChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gc2V0dGluZ3NQb3B1cFRwbChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbik7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXJlY3Rpb25OYW1lcyAoZGlyZWN0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IGRpcmVjdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgY2xvc2VHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1zZXR0aW5ncy1idG4nKSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uU2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNldHRpbmdzLWRpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICBzZWxlY3RUZXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3Qtc2V0dGluZ3MtYnRuJyksXHJcbiAgICAgICAgICAgIHNlbGVjdEZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXItc2V0dGluZ3MtYnRuJyksXHJcbiAgICAgICAgICAgIGFkZERpcmVjdGlvblBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kaXJlY3Rpb24tYnRuJyksXHJcbiAgICAgICAgICAgIGFkZFRlc3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1idG4nKSxcclxuICAgICAgICAgICAgYWRkRmlsdGVyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWZpbHRlci1idG4nKTtcclxuXHJcbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdzZXR0aW5nc1BvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNlbGVjdFRlc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YigndGVzdDpzZWxlY3QnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2VsZWN0RmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2ZpbHRlcjpzZWxlY3QnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWRkRGlyZWN0aW9uUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWRkRGlyZWN0aW9uUG9wdXA6b3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBhZGRUZXN0UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIG1lZGlhdG9yLnB1YignYWRkRmlsdGVyUG9wdXA6b3BlbicpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyBhZGRGaWx0ZXJQb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgbWVkaWF0b3IucHViKCdhZGRUZXN0UG9wdXA6b3BlbicpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cE5hbWUnKSxcclxuICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25FbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBEaXJlY3Rpb24nKSxcclxuICAgICAgICAgICAgZGF0YSA9IHt9O1xyXG5cclxuICAgICAgICBkYXRhLmRpcmVjdGlvbiA9IGdyb3VwRGlyZWN0aW9uRWxlbS5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbS5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgZGlyZWN0aW9uTGlzdFRwbCA9IHJlcXVpcmUoJy4vZGlyZWN0aW9uTGlzdFRwbC5qcycpLFxyXG4gICAgZmlsdGVyTGlzdFRwbCA9IHJlcXVpcmUoJy4uLy4uLy4uL0ZpbHRlcnMvVmlldy90cGwvZmlsdGVyTGlzdFRwbC5qcycpLFxyXG4gICAgdGVzdExpc3RUcGwgPSByZXF1aXJlKCcuLi8uLi8uLi9UZXN0cy9WaWV3L3RwbC90ZXN0TGlzdFRwbC5qcycpO1xyXG5cclxuZnVuY3Rpb24gc2V0dGluZ3NQb3B1cFRwbCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcclxuICAgIGxldCBkaXJlY3Rpb25MaXN0ID0gZGlyZWN0aW9uTGlzdFRwbChkaXJlY3Rpb25zLCBzZWxlY3RlZERpcmVjdGlvbi5uYW1lKSxcclxuICAgICAgICBmaWx0ZXJMaXN0ID0gZmlsdGVyTGlzdFRwbChzZWxlY3RlZERpcmVjdGlvbi5maWx0ZXJzKSxcclxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLnRlc3RzKTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJzZXR0aW5ncy1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWNvbHVtbi1zZXR0aW5nc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4tc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiZmlsdGVyLXNldHRpbmdzLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1mdFwiPkY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICR7bW9kZSA9PT0gJ1QnPyB0ZXN0TGlzdDogZmlsdGVyTGlzdH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdzUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBUcGwgKGdyb3VwKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZ3JvdXAtdGl0bGVcIj4ke2dyb3VwLm5hbWV9ICR7Z3JvdXAuZGlyZWN0aW9ufTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gZ3JvdXBQb3B1cFRwbCAoZGlyZWN0aW9uTGlzdCkge1xyXG4gICAgbGV0IG9wdGlvbnMgPSAnJztcclxuXHJcbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGlkPVwiZ3JvdXAtcG9wdXBcIiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibW9kYWwtZ3JvdXAtbmFtZVwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtZGlyZWN0aW9uXCI+JHtvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLWdyb3VwLWJ0blwiIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PmA7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L3RwbC9ncm91cFBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIGFkZERpcmVjdGlvblBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkRGlyZWN0aW9uVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtZGlyZWN0aW9uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYWRkRGlyZWN0aW9uUG9wdXBUcGwoKTtcclxuICAgICAgICB0aGlzLm9wZW4oKTtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4gKCkge1xyXG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlRGlyZWN0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWRpcmVjdGlvbi1idG4nKSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyZWN0aW9uLW5hbWUnKTtcclxuXHJcblxyXG4gICAgICAgIGNsb3NlRGlyZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FkZERpcmVjdGlvblBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkaXJlY3Rpb25OYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZERpcmVjdGlvblZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRGlyZWN0aW9uVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cExpc3RUcGwgPSByZXF1aXJlKCcuL3RwbC9ncm91cExpc3RUcGwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwTGlzdFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIgKCkge1xyXG4gICAgICAgIGxldCBsZWZ0QmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1jb2x1bW4nKTtcclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGdyb3VwTGlzdFRwbCgpO1xyXG5cclxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKSxcclxuICAgICAgICAgICAgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0dGluZ3MtYnRuJyk7XHJcblxyXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cFBvcHVwOm9wZW4nKSk7XHJcbiAgICAgICAgc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBtZWRpYXRvci5wdWIoJ3NldHRpbmdzUG9wdXA6b3BlbicpKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdyb3VwTGlzdFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxzZWN0aW9uIGlkPVwiZ3JvdXAtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkdyb3VwPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwic2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JvdXAtYmxvY2std3JhcHBlciBncm91cC13cmFwcGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYWRkLWdyb3VwLWJ0blwiPmFkZCBncm91cDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBncm91cExpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXHJcbiAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxyXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBMaXN0KSB7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcclxuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KCk7XHJcblxyXG4gICAgICAgIGdyb3VwTGlzdFZpZXcucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwUG9wdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy9wb3B1cEFkZEdyb3VwVmlldyAtINCU0L7Qu9C20L3QsCDQs9C10L3QtdGA0LjRgNC+0LLQsNGC0YzRgdGPINC/0YDQuCDRgdC+0LfQtNCw0L3QuNC4IGFkZEdyb3VwXHJcbiAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQtdC8INC+0LHRitC10LrRgiDQs9GA0YPQv9C/0Ysg0LIgZ3JvdXBQb3B1cDogb3BlblxyXG4gICAgICAgICAgICAvLyDQuCDQv9C+0YLQvtC8INC/0LXRgNC10LTQsNC10Lwg0LIgZ3JvdXBQb3B1cCDRgXJlYXRlZFxyXG4gICAgICAgICAgICAvLyBHcm91cExpc3QgVmlldyDQtNC+0LvQttC10L0g0LjQvNC10YLRjCDQsiDRgdC10LHQtSDQvNC10YLQvtC0INGB0L7Qt9C00LDQvdC40Y8gR3JvdXBWaWV3XHJcbiAgICAgICAgICAgIC8vINCYINC+0L3QsCDQtNC+0LvQttC90LAg0YPQvNC10YLRjCDRgNC10L3QtNC10YDQuNGC0Ywg0LPRgNGD0L/Qv9GDXHJcbiAgICAgICAgICAgIC8vIGdyb3VwOmNyZWF0ZWRcclxuICAgICAgICAgICAgLy8g0K3RgtC+INC00L7Qu9C20L3QviDQsdGL0YLRjCDQstGB0LUg0LIg0L7QtNC90L7QvCDQutC+0L3RgtGA0L7Qu9C70LXRgNC1XHJcbiAgICAgICAgICAgIC8vIGdyb3VwTGlzdC5hcHBlbmRWaWV3O1xyXG4gICAgICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBEYXRhID0ge30sXHJcbiAgICAgICAgICAgICAgICBncm91cCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZ3JvdXBWaWV3LnNldEdyb3VwKGdyb3VwKTtcclxuICAgICAgICAgICAgIC8vIFBvcFVwIC0g0YHQsNC8INGB0LXQsdGPINC30LDQutGA0L7QtdGCXHJcbiAgICAgICAgICAgIC8vIFBvcHVwQWRkR3JvdXBWaWV3LmNsb3NlKCk7XHJcbiAgICAgICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuICAgIGxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKSxcclxuICAgICAgICBGaWx0ZXIgPSByZXF1aXJlKCcuL0ZpbHRlcnMvTW9kZWwvRmlsdGVyLmpzJyksXHJcbiAgICAgICAgVGVzdCA9IHJlcXVpcmUoJy4vVGVzdHMvTW9kZWwvVGVzdC5qcycpLFxyXG4gICAgICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgICAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxyXG4gICAgICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXHJcbiAgICAgICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cFZpZXcuanMnKSxcclxuICAgICAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXHJcbiAgICAgICAgZ3JvdXBMaXN0VHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzJyksXHJcbiAgICAgICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzJyksXHJcbiAgICAgICAgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMnKSxcclxuICAgICAgICBQb3B1cEFkZEZpbHRlclZpZXcgPSByZXF1aXJlKCcuL0ZpbHRlcnMvVmlldy9Qb3B1cEFkZEZpbHRlclZpZXcuanMnKSxcclxuICAgICAgICBQb3B1cEFkZERpcmVjdGlvblZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzJyksXHJcbiAgICAgICAgUG9wdXBBZGRUZXN0VmlldyA9IHJlcXVpcmUoJy4vVGVzdHMvVmlldy9Qb3B1cEFkZFRlc3RWaWV3LmpzJyksXHJcbiAgICAgICAgZ3JvdXBQb3B1cFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMnKSxcclxuICAgICAgICBncm91cFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzJyksXHJcbiAgICAgICAgc2V0dGluZ3NQb3B1cFRwbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcycpLFxyXG4gICAgICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxyXG4gICAgICAgIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyksXHJcbiAgICAgICAgTWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XHJcblxyXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcclxuICAgIFxyXG4gICAgYXBwLnN0YXJ0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBkaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0LCBzZWxlY3RlZERpcmVjdGlvbikge1xyXG4gICAgbGV0IG9wdGlvbnMgPSAnJztcclxuXHJcbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPScke2l0ZW19JyAke3NlbGVjdGVkRGlyZWN0aW9uID09PSBpdGVtPyAnc2VsZWN0ZWQnOiAnJ30+JHtpdGVtfTwvb3B0aW9uPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJkaXJlY3Rpb24tbGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwibW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uXCIgY2xhc3M9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIj4ke29wdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1kaXJlY3Rpb24tYnRuXCI+YWRkIGRpcmVjdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRpcmVjdGlvbkxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9kaXJlY3Rpb25MaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuZnVuY3Rpb24gYWRkRGlyZWN0aW9uUG9wdXBUcGwgKCkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBhZGQtZGlyZWN0aW9uLXBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC1kaXJlY3Rpb24tbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGlyZWN0aW9uIG5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2sgY2xvc2UtZGlyZWN0aW9uLWJ0blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFkZERpcmVjdGlvblBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRGlyZWN0aW9uUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXHJcbiAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxyXG4gICAgdGVzdERhdGEgPSByZXF1aXJlKCcuL3Rlc3REYXRhLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSB0ZXN0RGF0YS5kaXJlY3Rpb25zO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIGxldCBncm91cENvbnRyb2xsZXIgPSBuZXcgR3JvdXBDb250cm9sbGVyKHRoaXMuZ3JvdXBMaXN0KSxcclxuICAgICAgICAgICAgc2V0dGluZ3NDb250cm9sbGVyID0gbmV3IFNldHRpbmdzQ29udHJvbGxlcih0aGlzLmRpcmVjdGlvbnMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5zaG93R3JvdXBMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3Vic2NyaWJlICgpIHtcclxuICAgICAgICAvLyBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5hZGRHcm91cChncm91cCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkR3JvdXAgKGdyb3VwKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0FwcC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmxldCBncm91cExpc3QgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0RwLTExNycsXHJcbiAgICAgICAgdGVzdExpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzEnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmczJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzQnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnSlMgQ29yZScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRW5nMScsICdFbmcyJywgJ0VuZzMnLCAnRW5nNCddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydKUyBDb3JlJ10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDgwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0Vzc2F5J10sXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhdmVyYWdlJyxcclxuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjogJz4nLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDc1XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB0ZXN0RGF5czogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTAvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogWycxNTozMCcsICcxNzowMCddIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBwZW9wbGU6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0hhcnJ5JyxcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiAnUG90dGVyJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnaGFycnktcG90dGVyQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTU6MzAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogOTUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JvbicsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ1dpc2xleScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3Jvbi13aXNsZXlAZ21haWwuY29tJyxcclxuICAgICAgICAgICAgICAgIHRlc3REYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiAnMTEvMDYvMjMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6ICcxNzowMCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBncmFkZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBFbmcxOiA4MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmcyOiA5MCxcclxuICAgICAgICAgICAgICAgICAgICBFbmczOiA3NSxcclxuICAgICAgICAgICAgICAgICAgICBFbmc0OiA2MCxcclxuICAgICAgICAgICAgICAgICAgICBDb3JlOiAyMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRXNzYXk6IDM2MFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIG5hbWU6ICdEcC0xMjEnLFxyXG4gICAgICAgIHRlc3RMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcxJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzInLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMycsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmc0JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0dvIENvcmUnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRXNzYXknLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDQwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBmaWx0ZXJMaXN0OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRlc3RMaXN0OiBbJ0VuZzEnLCAnRW5nMicsICdFbmczJywgJ0VuZzQnXSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2F2ZXJhZ2UnLFxyXG4gICAgICAgICAgICAgICAgY29uZGl0aW9uOiAnPicsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNjBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnR28gQ29yZSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFc3NheSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA3NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGVzdERheXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGVvcGxlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdIZXJtaW9uZScsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ0dyYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdoZXJtaW9uZS1ncmFuZ2VyQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTU6MzAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogODUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogOTUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAyNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ05ldmlsbGUnLFxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWU6ICdMb25nYm90dG9tJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnbmV2aWxsZS1sb25nYm90dG9tQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTc6MDAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAzNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBuYW1lOiAnRHAtMTIzJyxcclxuICAgICAgICB0ZXN0TGlzdDogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nMScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFbmcyJyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiAxMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ0VuZzMnLFxyXG4gICAgICAgICAgICAgICAgZ3JhZGU6IDEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnRW5nNCcsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogMTAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQSFAgQ29yZScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdFc3NheScsXHJcbiAgICAgICAgICAgICAgICBncmFkZTogNDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGZpbHRlckxpc3Q6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGVzdExpc3Q6IFsnRW5nMScsICdFbmcyJywgJ0VuZzMnLCAnRW5nNCddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA2MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydQSFAgQ29yZSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA4MFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0TGlzdDogWydFc3NheSddLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYXZlcmFnZScsXHJcbiAgICAgICAgICAgICAgICBjb25kaXRpb246ICc+JyxcclxuICAgICAgICAgICAgICAgIGdyYWRlOiA3NVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGVzdERheXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzEwLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IFsnMTU6MzAnLCAnMTc6MDAnXSBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcGVvcGxlOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdEcmFjbycsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ01hbGZveScsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ2RyYWNvLW1hbGZveUBnbWFpbC5jb20nLFxyXG4gICAgICAgICAgICAgICAgdGVzdERheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6ICcxMC8wNi8yMycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogJzE1OjMwJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdyYWRlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIEVuZzE6IDYwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzI6IDg1LFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzM6IDcwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVuZzQ6IDk1LFxyXG4gICAgICAgICAgICAgICAgICAgIENvcmU6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBFc3NheTogMjYwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdQZXRlcicsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogJ0dyaWZmaW4nLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdwZXRlci1ncmlmZmluQGdtYWlsLmNvbScsXHJcbiAgICAgICAgICAgICAgICB0ZXN0RGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogJzExLzA2LzIzJyxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiAnMTc6MDAnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ3JhZGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMTogODAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMjogOTAsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nMzogNzUsXHJcbiAgICAgICAgICAgICAgICAgICAgRW5nNDogNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgQ29yZTogMjEwLFxyXG4gICAgICAgICAgICAgICAgICAgIEVzc2F5OiAzNjBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0gXHJcbl07XHJcblxyXG4gICAgLy8gZGlyZWN0aW9uczogWydVSScsICdQSFAnLCAnR08nLCAnSlMnXVxyXG5cclxuICAgIC8vIGRpcmVjdGlvbnM6IFtcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIG5hbWU6ICdVSScsXHJcbiAgICAvLyAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdKUyBDb3JlJywgJ0Vzc2F5IFVJJ10sXHJcbiAgICAvLyAgICAgICAgIGZpbHRlcnM6IFsnVUkgMSddXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIG5hbWU6ICdQSFAnLFxyXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnRXNzYXkgUEhQJ10sXHJcbiAgICAvLyAgICAgICAgIGZpbHRlcnM6IFsnUEhQIDEnXVxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBuYW1lOiAnR08nLFxyXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnRXNzYXkgR08nXSxcclxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydHTyAxJ11cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyBdXHJcbi8vIH07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGdyb3VwTGlzdDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgRmlsdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0cyA9IHRlc3RzO1xyXG4gICAgICAgIHRoaXMuYWN0aW9uTGlzdCA9IFsnYXZlcmFnZScsICdtYXgnLCAnbWluJywgJ2VxdWFsJ107XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25MaXN0ID0gWyc+JywgJz49JywgJz0nLCAnPD0nLCAnPCddO1xyXG4gICAgICAgIHRoaXMuZ3JhZGUgPSBncmFkZTtcclxuICAgIH1cclxuXHJcbi8vIGFkZFRlc3QsIGNoYW5nZUFjdGlvbiwgY2hhbmdlQ29uZGl0aW9uLCBjaGFuZ2VHcmFkZVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0ID0gRmlsdGVyTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9GaWx0ZXJzL01vZGVsL0ZpbHRlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgVGVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvciAobmFtZSwgbWF4R3JhZGUsIGdyYWRlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvLyB0aGlzLm1heEdyYWRlID0gbWF4R3JhZGU7XHJcbiAgICAgICAgLy8gdGhpcy5ncmFkZSA9IGdyYWRlO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnQgPSBUZXN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1Rlc3RzL01vZGVsL1Rlc3QuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJMaXN0VHBsIChmaWx0ZXJMaXN0KSB7XHJcbiAgICBsZXQgZmlsdGVycyA9ICcnO1xyXG5cclxuICAgIGZpbHRlckxpc3QuZm9yRWFjaCgoZmlsdGVyKSA9PiB7XHJcbiAgICAgICAgZmlsdGVycyArPSBgPGRpdiBjbGFzcz1cImZpbHRlclwiPiR7ZmlsdGVyfTwvZGl2PmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJmaWx0ZXItbGlzdC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+RmlsdGVyczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWxpc3RcIj4ke2ZpbHRlcnN9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLWZpbHRlci1idG4gYnRuXCI+YWRkIGZpbHRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZpbHRlckxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvdHBsL2ZpbHRlckxpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiB0ZXN0TGlzdFRwbCAodGVzdHNMaXN0KSB7XHJcbiAgICBsZXQgdGVzdHMgPSAnJztcclxuXHJcbiAgICB0ZXN0c0xpc3QuZm9yRWFjaCgodGVzdCkgPT4ge1xyXG4gICAgICAgIHRlc3RzICs9IGA8ZGl2IGNsYXNzPVwidGVzdFwiPiR7dGVzdH08L2Rpdj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGVzdC1saXN0LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5UZXN0czwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+JHt0ZXN0c308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtdGVzdC1idG4gYnRuXCI+YWRkIHRlc3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0TGlzdFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvdHBsL3Rlc3RMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIGFkZEZpbHRlclBvcHVwVHBsID0gcmVxdWlyZSgnLi90cGwvYWRkRmlsdGVyUG9wdXBUcGwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkRmlsdGVyVmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtZmlsdGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9wdXAgKHRlc3RMaXN0LCBhY3Rpb25MaXN0LCBjb25kaXRpb25MaXN0KSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5pbm5lckhUTUwgPSBhZGRGaWx0ZXJQb3B1cFRwbCh0ZXN0TGlzdCwgYWN0aW9uTGlzdCwgY29uZGl0aW9uTGlzdCk7XHJcbiAgICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBjbG9zZUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1maWx0ZXItYnRuJyksXHJcbiAgICAgICAgICAgIHRlc3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtY29sdW1uLWZpbHRlcicpLFxyXG4gICAgICAgICAgICB0ZXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1uYW1lJyksXHJcbiAgICAgICAgICAgIGFjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWx0ZXItYWN0aW9uJyksXHJcbiAgICAgICAgICAgIGNvbmRpdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWx0ZXItY29uZGl0aW9uJyksXHJcbiAgICAgICAgICAgIHRlc3RHcmFkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1ncmFkZScpO1xyXG5cclxuXHJcbiAgICAgICAgY2xvc2VGaWx0ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWRkRmlsdGVyUG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2FkZEZpbHRlclBvcHVwOmNsb3NlJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRlc3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0ZXN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWN0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWN0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uZGl0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignY29uZGl0aW9uU2VsZWN0OmNoYW5nZScsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGVzdEdyYWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEZpbHRlclZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9GaWx0ZXJzL1ZpZXcvUG9wdXBBZGRGaWx0ZXJWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcclxuICAgIGFkZFRlc3RQb3B1cFRwbCA9IHJlcXVpcmUoJy4vdHBsL2FkZFRlc3RQb3B1cFRwbC5qcycpO1xyXG5cclxuY2xhc3MgUG9wdXBBZGRUZXN0VmlldyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtdGVzdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclBvcHVwICgpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGFkZFRlc3RQb3B1cFRwbCgpO1xyXG4gICAgICAgIHRoaXMub3BlbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcclxuICAgICAgICBsZXQgY2xvc2VUZXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXRlc3QtYnRuJyksXHJcbiAgICAgICAgICAgIHRlc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXN0LW5hbWUnKTtcclxuXHJcblxyXG4gICAgICAgIGNsb3NlVGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGRUZXN0UG9wdXA6Y2xvc2UnKTtcclxuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2FkZFRlc3RQb3B1cDpjbG9zZScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0ZXN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgLy9cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZSAoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRUZXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvUG9wdXBBZGRUZXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGFkZFRlc3RQb3B1cFRwbCAoKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC10ZXN0LXBvcHVwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC10ZXN0LW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRlc3QgbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29nIGNsb3NlLXRlc3QtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFRlc3RQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1Rlc3RzL1ZpZXcvdHBsL2FkZFRlc3RQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGFkZEZpbHRlclBvcHVwVHBsICh0ZXN0TGlzdCwgYWN0aW9uTGlzdCwgY29uZGl0aW9uTGlzdCkge1xyXG4gICAgbGV0IHRlc3RzID0gZ2VuZXJhdGVUZXN0TGlzdCh0ZXN0TGlzdCksXHJcbiAgICAgICAgYWN0aW9ucyA9IGdlbmVyYXRlTGlzdChhY3Rpb25MaXN0KSxcclxuICAgICAgICBjb25kaXRpb25zID0gZ2VuZXJhdGVMaXN0KGNvbmRpdGlvbkxpc3QpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlTGlzdCAobGlzdCkge1xyXG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsaXN0ICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRlc3RMaXN0IChsaXN0KSB7XHJcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGxpc3QgKz0gYDxsaT4ke2l0ZW19PC9saT5gO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC1maWx0ZXItcG9wdXBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbHVtbi1maWx0ZXJcIj5cclxuICAgICAgICAgICAgICAgIDx1bD4ke3Rlc3RzfTwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tZmlsdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZGQtdGVzdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXN0IG5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwibW9kYWwtZmlsdGVyLWFjdGlvblwiPiR7YWN0aW9uc308L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIm1vZGFsLWZpbHRlci1jb25kaXRpb25cIj4ke2NvbmRpdGlvbnN9PC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLXRlc3QtZ3JhZGVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGdyYWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWNvZyBjbG9zZS1maWx0ZXItYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5gO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGFkZEZpbHRlclBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvRmlsdGVycy9WaWV3L3RwbC9hZGRGaWx0ZXJQb3B1cFRwbC5qcyJdLCJzb3VyY2VSb290IjoiIn0=
=======
/***/ })
/******/ ]);
