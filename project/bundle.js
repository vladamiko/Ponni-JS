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
            var _this = this;

            var closeGroupBtn = this.modal.querySelector('#close-group-btn');

            closeGroupBtn.addEventListener('click', function () {
                var data = _this.generateData(),

                // data.direction - мы получаем из наших сеттингс
                group = new GroupModel(data.name, data.direction);

                mediator.pub('group:created', group);
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
            var groupNameElem = this.modal.querySelector('#modal-group-name'),
                groupDirectionElem = this.modal.querySelector('#modal-group-direction'),
                data = {};

            data.direction = groupDirectionElem.options[groupDirectionElem.selectedIndex].text;
            data.name = groupNameElem.value;

            return data;
        }
        // Исправить

    }], [{
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
/* 6 */
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
    filterListTpl = __webpack_require__(20),
    testListTpl = __webpack_require__(21);

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
            var groupListView = new GroupListView();

            groupListView.render();
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            mediator.sub('groupPopup:open', function () {
                // let popupAddGroupView = new PopupAddGroupView();
            });

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
    var DirectionModel = __webpack_require__(1),
        FilterModel = __webpack_require__(17),
        TestModel = __webpack_require__(18),
        SettingsModel = __webpack_require__(2),
        SettingsController = __webpack_require__(7),
        GroupModel = __webpack_require__(5),
        GroupView = __webpack_require__(4),
        GroupListView = __webpack_require__(13),
        groupListTpl = __webpack_require__(14),
        PopupAddGroupView = __webpack_require__(3),
        PopupSettingsView = __webpack_require__(8),
        PopupAddFilterView = __webpack_require__(23),
        PopupAddDirectionView = __webpack_require__(12),
        PopupAddTestView = __webpack_require__(25),
        groupPopupTpl = __webpack_require__(11),
        groupTpl = __webpack_require__(10),
        settingsPopupTpl = __webpack_require__(9),
        GroupController = __webpack_require__(15),
        App = __webpack_require__(27),
        Mediator = __webpack_require__(0);

    var app = new App();

    app.start();
}

/***/ }),
/* 17 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 18 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

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


function addDirectionPopupTpl() {
    return '<div class="modal-content add-direction-popup">\n                <input type="text" class="add-direction-name" placeholder="Enter direction name">\n                <button class="btn btn-cog">\n                    <i class="fa fa-check close-direction-btn" aria-hidden="true"></i>\n                </button>\n            </div>';
}

module.exports = addDirectionPopupTpl;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(0),
    addFilterPopupTpl = __webpack_require__(24);

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
/* 24 */
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

var GroupController = __webpack_require__(15),
    SettingsController = __webpack_require__(7),
    testData = __webpack_require__(28),
    mediator = __webpack_require__(0);

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.groupList = [];
        this.directions = testData.directions;
        this.subscribe();
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
            var groupController = new GroupController(this.groupList),
                settingsController = new SettingsController(this.directions);

            groupController.showGroupList();
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            // mediator.sub('group:created', (group) => {
            //     this.addGroup(group);
            // });
        }
    }, {
        key: 'addGroup',
        value: function addGroup(group) {
            this.groups.push(group);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzgyODEzODk1MmJkYjIwMGU5MmUiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9NZWRpYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRGlyZWN0aW9uVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9GaWx0ZXJNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1Rlc3RNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2RpcmVjdGlvbkxpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9maWx0ZXJMaXN0VHBsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvdGVzdExpc3RUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGRGaWx0ZXJWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvYWRkRmlsdGVyUG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkVGVzdFZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9hZGRUZXN0UG9wdXBUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImRhdGEiLCJmb3JFYWNoIiwiZm4iLCJwdXNoIiwibWVkaWF0b3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiRGlyZWN0aW9uTW9kZWwiLCJuYW1lIiwidGVzdHMiLCJmaWx0ZXJzIiwicmVxdWlyZSIsIlNldHRpbmdzTW9kZWwiLCJkZWZhdWx0RGlyZWN0aW9ucyIsImRpcmVjdGlvbnMiLCJyZW5kZXIiLCJpdGVtIiwiZGlyZWN0aW9uTmFtZXMiLCJ0ZXN0TmFtZSIsIlRlc3QiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsIkZpbHRlciIsIkdyb3VwVmlldyIsIkdyb3VwTW9kZWwiLCJncm91cFBvcHVwVHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJkaXJlY3Rpb25MaXN0IiwibW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJvcGVuIiwiYWRkTGlzdGVuZXJzIiwiY2xvc2VHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZW5lcmF0ZURhdGEiLCJncm91cCIsImRpcmVjdGlvbiIsInB1YiIsImNsYXNzTGlzdCIsImFkZCIsImdyb3VwTmFtZUVsZW0iLCJncm91cERpcmVjdGlvbkVsZW0iLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInRleHQiLCJ2YWx1ZSIsInJlbW92ZSIsImdyb3VwVHBsIiwidGVtcGxhdGUiLCJncm91cHNCbG9jayIsImluc2VydEFkamFjZW50SFRNTCIsIlBvcHVwU2V0dGluZ3NWaWV3IiwiUG9wdXBBZGREaXJlY3Rpb25WaWV3IiwiU2V0dGluZ3NDb250cm9sbGVyIiwic2V0dGluZ3NNb2RlbCIsInBvcHVwU2V0dGluZ3NWaWV3IiwicG9wdXBBZGREaXJlY3Rpb25WaWV3Iiwic3Vic2NyaWJlIiwic3Vic2NyaWJlT3BlblBvcHVwcyIsInN1YnNjcmliZVNlbGVjdERpcmVjdGlvbiIsInN1YnNjcmliZVNlbGVjdEZpbHRlciIsInN1YnNjcmliZVNlbGVjdFRlc3QiLCJzdWIiLCJnZXREaXJlY3Rpb25OYW1lcyIsInNlbGVjdGVkRGlyZWN0aW9uIiwibW9kZSIsInJlbmRlclBvcHVwIiwic3Vic2NyaWJlQ2xvc2VQb3B1cCIsInBvcHVwQWRkR3JvdXBWaWV3Iiwic2V0RGlyZWN0aW9uTGlzdCIsImNsb3NlIiwicmVSZW5kZXJQb3B1cCIsImRpcmVjdGlvbk5hbWUiLCJmaW5kIiwic2V0dGluZ3NQb3B1cFRwbCIsImRpcmVjdGlvblNlbGVjdCIsInNlbGVjdFRlc3RCdG4iLCJzZWxlY3RGaWx0ZXJCdG4iLCJhZGREaXJlY3Rpb25Qb3B1cCIsImFkZFRlc3RQb3B1cCIsImFkZEZpbHRlclBvcHVwIiwidW5zdWIiLCJlIiwidGFyZ2V0IiwiZGlyZWN0aW9uTGlzdFRwbCIsImZpbHRlckxpc3RUcGwiLCJ0ZXN0TGlzdFRwbCIsImZpbHRlckxpc3QiLCJ0ZXN0TGlzdCIsImFkZERpcmVjdGlvblBvcHVwVHBsIiwiY2xvc2VEaXJlY3Rpb25CdG4iLCJncm91cExpc3RUcGwiLCJHcm91cExpc3RWaWV3IiwibGVmdEJsb2NrIiwiYWRkR3JvdXBCdG4iLCJzZXR0aW5nc0J0biIsIkdyb3VwQ29udHJvbGxlciIsImdyb3VwTGlzdCIsImdyb3VwTGlzdFZpZXciLCJncm91cFZpZXciLCJncm91cERhdGEiLCJzZXRHcm91cCIsInJlbmRlckdyb3VwIiwiaW5pdCIsIkZpbHRlck1vZGVsIiwiVGVzdE1vZGVsIiwiUG9wdXBBZGRGaWx0ZXJWaWV3IiwiUG9wdXBBZGRUZXN0VmlldyIsIkFwcCIsImFwcCIsInN0YXJ0IiwiYWN0aW9uTGlzdCIsImNvbmRpdGlvbkxpc3QiLCJleHBvcnQiLCJtYXhHcmFkZSIsImZpbHRlciIsInRlc3RzTGlzdCIsInRlc3QiLCJhZGRGaWx0ZXJQb3B1cFRwbCIsImNsb3NlRmlsdGVyQnRuIiwiYWN0aW9uU2VsZWN0IiwiY29uZGl0aW9uU2VsZWN0IiwidGVzdEdyYWRlIiwiZ2VuZXJhdGVUZXN0TGlzdCIsImFjdGlvbnMiLCJnZW5lcmF0ZUxpc3QiLCJjb25kaXRpb25zIiwibGlzdCIsImFkZFRlc3RQb3B1cFRwbCIsImNsb3NlVGVzdEJ0biIsInRlc3REYXRhIiwiZ3JvdXBDb250cm9sbGVyIiwic2V0dGluZ3NDb250cm9sbGVyIiwic2hvd0dyb3VwTGlzdCIs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QXRCO0FBQUEsZ0JBQ0ltQyxxQkFBcUIsSUFBSS9FLGtCQUFKLENBQXVCLEtBQUsxQyxVQUE1QixDQUR6Qjs7QUFHQXdILDRCQUFnQkUsYUFBaEI7QUFDSDs7O29DQUVZO0FBQ1Q7QUFDQTtBQUNBO0FBQ0g7OztpQ0FFU2xHLEssRUFBTztBQUNiLGlCQUFLbUcsTUFBTCxDQUFZdEksSUFBWixDQUFpQm1DLEtBQWpCO0FBQ0g7Ozs7OztBQUdMakMsT0FBT0MsT0FBUCxHQUFpQnlHLEdBQWpCLEM7Ozs7Ozs7QUNoQ0E7O0FBRUEsSUFBSXNCLFdBQVc7QUFDWEksWUFBUSxDQUNKO0FBQ0lsRyxtQkFBVyxJQURmO0FBRUkvQixjQUFNO0FBRlYsS0FESSxFQUtKO0FBQ0krQixtQkFBVyxJQURmO0FBRUkvQixjQUFNO0FBRlYsS0FMSSxFQVNKO0FBQ0krQixtQkFBVyxLQURmO0FBRUkvQixjQUFNO0FBRlYsS0FUSSxDQURHOztBQWdCWE0sZ0JBQVksQ0FBQyxJQUFELEVBQU8sS0FBUCxFQUFjLElBQWQsRUFBb0IsSUFBcEI7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDVyxDQUFmOztBQXFDQVQsT0FBT0MsT0FBUCxHQUFpQitILFFBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc4MjgxMzg5NTJiZGIyMDBlOTJlIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBNZWRpYXRvciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0ge307XG4gICAgfVxuXG4gICAgcHViIChjaGFubmVsLCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxzW2NoYW5uZWxdLmZvckVhY2goKGZuKSA9PiBmbihkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcbiAgICB9XG5cbiAgICB1bnN1YiAoY2hhbm5lbCkge1xuICAgICAgICBkZWxldGUgdGhpcy5jaGFubmVsc1tjaGFubmVsXTtcbiAgICB9XG59XG5cbmxldCBtZWRpYXRvciA9IG5ldyBNZWRpYXRvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIERpcmVjdGlvbk1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRlc3RzID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVycyA9IFtdO1xuICAgIH1cblxuICAgIC8vIGFkZFRlc3QgKHRlc3ROYW1lKSB7XG4gICAgLy8gICAgIHRoaXMudGVzdHMucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xuICAgIC8vIH1cblxuICAgIC8vIGFkZEZpbHRlciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgIC8vICAgICB0aGlzLmZpbHRlcnMucHVzaChuZXcgRmlsdGVyKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpKTtcbiAgICAvLyB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRGlyZWN0aW9uTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKTtcblxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKGRlZmF1bHREaXJlY3Rpb25zKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucyA9IFtdO1xuICAgICAgICB0aGlzLnJlbmRlcihkZWZhdWx0RGlyZWN0aW9ucyk7XG4gICAgfVxuXG4gICAgcmVuZGVyIChkZWZhdWx0RGlyZWN0aW9ucykge1xuICAgICAgICBkZWZhdWx0RGlyZWN0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbnMucHVzaChuZXcgRGlyZWN0aW9uTW9kZWwoaXRlbSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3Rpb25OYW1lcyAoKSB7XG4gICAgXHRsZXQgZGlyZWN0aW9uTmFtZXMgPSBbXTtcblxuICAgIFx0dGhpcy5kaXJlY3Rpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgXHRkaXJlY3Rpb25OYW1lcy5wdXNoKGl0ZW0ubmFtZSk7XG4gICAgXHR9KTtcblxuICAgICAgICByZXR1cm4gZGlyZWN0aW9uTmFtZXM7XG4gICAgfVxuXG4gICAgYWRkRGlyZWN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9ucy5wdXNoKG5ldyBEaXJlY3Rpb25Nb2RlbChuYW1lKSk7XG5cbiAgICAgICAgZGVmYXVsdERpcmVjdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb25zLnB1c2gobmV3IERpcmVjdGlvbk1vZGVsKGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkVGVzdHMgKHRlc3ROYW1lKSB7XG4gICAgICAgIHRoaXMudGVzdHMucHVzaChuZXcgVGVzdCh0ZXN0TmFtZSkpO1xuICAgIH1cblxuICAgIGFkZEZpbHRlcnMgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5maWx0ZXJzLnB1c2gobmV3IEZpbHRlcih0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uLy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwTW9kZWwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgIGdyb3VwUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpO1xuXG5jbGFzcyBQb3B1cEFkZEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3B1cCAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gZ3JvdXBQb3B1cFRwbCh0aGlzLmRpcmVjdGlvbkxpc3QpO1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBzZXREaXJlY3Rpb25MaXN0IChkaXJlY3Rpb25MaXN0KSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3Q7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1idG4nKTtcblxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmdlbmVyYXRlRGF0YSgpLFxuICAgICAgICAgICAgICAgIC8vIGRhdGEuZGlyZWN0aW9uIC0g0LzRiyDQv9C+0LvRg9GH0LDQtdC8INC40Lcg0L3QsNGI0LjRhSDRgdC10YLRgtC40L3Qs9GBXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBuZXcgR3JvdXBNb2RlbChkYXRhLm5hbWUsIGRhdGEuZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdncm91cDpjcmVhdGVkJywgZ3JvdXApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvcGVuICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVEYXRhICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTmFtZUVsZW0gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1uYW1lJyksXG4gICAgICAgICAgICBncm91cERpcmVjdGlvbkVsZW0gPSB0aGlzLm1vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1ncm91cC1kaXJlY3Rpb24nKSxcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcblxuICAgICAgICBkYXRhLmRpcmVjdGlvbiA9IGdyb3VwRGlyZWN0aW9uRWxlbS5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbS5zZWxlY3RlZEluZGV4XS50ZXh0O1xuICAgICAgICBkYXRhLm5hbWUgPSBncm91cE5hbWVFbGVtLnZhbHVlO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICAvLyDQmNGB0L/RgNCw0LLQuNGC0YxcbiAgICBzdGF0aWMgY2xvc2UgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wdXBBZGRHcm91cFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwVHBsID0gcmVxdWlyZSgnLi90cGwvZ3JvdXBUcGwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgc2V0R3JvdXAgKGdyb3VwKSB7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cFRwbChncm91cCk7XG4gICAgfVxuXG4gICAgcmVuZGVyR3JvdXAgKCkge1xuICAgICAgICBsZXQgZ3JvdXBzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXAtd3JhcHBlcicpO1xuXG4gICAgICAgIGdyb3Vwc0Jsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIHRoaXMudGVtcGxhdGUpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBhZGRUZXN0aW5nU2Vzc2lvbiAoKSB7XG5cbiAgICB9XG5cbiAgICBhZGRUZXN0ICgpIHtcblxuICAgIH1cblxuICAgIGFkZEZpbHRlciAoKSB7XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxubGV0IFBvcHVwU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvVmlldy9Qb3B1cFNldHRpbmdzVmlldy5qcycpLFxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcbiAgICBQb3B1cEFkZERpcmVjdGlvblZpZXcgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRGlyZWN0aW9uVmlldy5qcycpLFxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXG4gICAgRGlyZWN0aW9uTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgU2V0dGluZ3NDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZGVmYXVsdERpcmVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5nc01vZGVsID0gbmV3IFNldHRpbmdzTW9kZWwoZGVmYXVsdERpcmVjdGlvbnMpO1xuICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3ID0gbmV3IFBvcHVwU2V0dGluZ3NWaWV3KCk7XG4gICAgICAgIHRoaXMucG9wdXBBZGREaXJlY3Rpb25WaWV3ID0gbmV3IFBvcHVwQWRkRGlyZWN0aW9uVmlldygpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKCkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZU9wZW5Qb3B1cHMoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3RGaWx0ZXIoKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVTZWxlY3RUZXN0KCk7XG4gICAgfVxuXG4gICAgc3Vic2NyaWJlT3BlblBvcHVwcyAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1Yignc2V0dGluZ3NQb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcblxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERpcmVjdGlvbiA9IHRoaXMuc2V0dGluZ3NNb2RlbC5kaXJlY3Rpb25zWzBdO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmliZUNsb3NlUG9wdXAoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdncm91cFBvcHVwOm9wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9wdXBBZGRHcm91cFZpZXcgPSBuZXcgUG9wdXBBZGRHcm91cFZpZXcoKSxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG5cbiAgICAgICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldy5zZXREaXJlY3Rpb25MaXN0KGRpcmVjdGlvbnMpO1xuICAgICAgICAgICAgICAgIHBvcHVwQWRkR3JvdXBWaWV3LnJlbmRlclBvcHVwKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1YignYWRkRGlyZWN0aW9uUG9wdXA6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3B1cEFkZERpcmVjdGlvblZpZXcgPSBuZXcgUG9wdXBBZGREaXJlY3Rpb25WaWV3KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBvcHVwQWRkRGlyZWN0aW9uVmlldy5yZW5kZXJQb3B1cCgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVDbG9zZVBvcHVwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZUNsb3NlUG9wdXAgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1YignYWRkRGlyZWN0aW9uUG9wdXA6Y2xvc2UnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBvcHVwQWRkRGlyZWN0aW9uVmlldy5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5vcGVuKCk7XG5cbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnVCc7XG5cbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVTZWxlY3REaXJlY3Rpb24gKCkge1xuICAgIFx0bWVkaWF0b3Iuc3ViKCdkaXJlY3Rpb25TZWxlY3Q6Y2hhbmdlJywgKGRpcmVjdGlvbk5hbWUpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uID0gdGhpcy5zZXR0aW5nc01vZGVsLmRpcmVjdGlvbnMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBkaXJlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcblxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZVNlbGVjdFRlc3QgKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ3Rlc3Q6c2VsZWN0JywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbnMgPSB0aGlzLnNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTmFtZXMoKTtcbiAgICAgICAgICAgIHRoaXMubW9kZSA9ICdUJztcblxuICAgICAgICAgICAgdGhpcy5wb3B1cFNldHRpbmdzVmlldy5yZVJlbmRlclBvcHVwKGRpcmVjdGlvbnMsIHRoaXMubW9kZSwgdGhpcy5zZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YnNjcmliZVNlbGVjdEZpbHRlciAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZmlsdGVyOnNlbGVjdCcsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb25zID0gdGhpcy5zZXR0aW5nc01vZGVsLmdldERpcmVjdGlvbk5hbWVzKCk7XG4gICAgICAgICAgICB0aGlzLm1vZGUgPSAnRic7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucG9wdXBTZXR0aW5nc1ZpZXcucmVSZW5kZXJQb3B1cChkaXJlY3Rpb25zLCB0aGlzLm1vZGUsIHRoaXMuc2VsZWN0ZWREaXJlY3Rpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmVBZGREaXJlY3Rpb24gKCkge1xuICAgICAgICBtZWRpYXRvci5zdWIoJ2RpcmVjdGlvbjphZGQnLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IHRoaXMuc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25OYW1lcygpO1xuICAgICAgICAgICAgdGhpcy5tb2RlID0gJ1QnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnBvcHVwU2V0dGluZ3NWaWV3LnJlUmVuZGVyUG9wdXAoZGlyZWN0aW9ucywgdGhpcy5tb2RlLCB0aGlzLnNlbGVjdGVkRGlyZWN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKSxcbiAgICBzZXR0aW5nc1BvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvc2V0dGluZ3NQb3B1cFRwbC5qcycpO1xuXG5jbGFzcyBQb3B1cFNldHRpbmdzVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLm1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXNldHRpbmdzJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gc2V0dGluZ3NQb3B1cFRwbChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJlUmVuZGVyUG9wdXAgKGRpcmVjdGlvbnMsIG1vZGUsIHNlbGVjdGVkRGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gc2V0dGluZ3NQb3B1cFRwbChkaXJlY3Rpb25zLCBtb2RlLCBzZWxlY3RlZERpcmVjdGlvbik7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgc2V0RGlyZWN0aW9uTmFtZXMgKGRpcmVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25zID0gZGlyZWN0aW9ucztcbiAgICB9XG5cbiAgICBvcGVuICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2Utc2V0dGluZ3MtYnRuJyksXG4gICAgICAgICAgICBkaXJlY3Rpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtc2V0dGluZ3MtZGlyZWN0aW9uJyksXG4gICAgICAgICAgICBzZWxlY3RUZXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlc3Qtc2V0dGluZ3MtYnRuJyksXG4gICAgICAgICAgICBzZWxlY3RGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlsdGVyLXNldHRpbmdzLWJ0bicpLFxuICAgICAgICAgICAgYWRkRGlyZWN0aW9uUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpcmVjdGlvbi1idG4nKSxcbiAgICAgICAgICAgIGFkZFRlc3RQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1idG4nKSxcbiAgICAgICAgICAgIGFkZEZpbHRlclBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1maWx0ZXItYnRuJyk7XG5cbiAgICAgICAgY2xvc2VHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1Yignc2V0dGluZ3NQb3B1cDpjbG9zZScpO1xuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ3NldHRpbmdzUG9wdXA6Y2xvc2UnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGlyZWN0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2RpcmVjdGlvblNlbGVjdDpjaGFuZ2UnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGVjdFRlc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ3Rlc3Q6c2VsZWN0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGVjdEZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignZmlsdGVyOnNlbGVjdCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhZGREaXJlY3Rpb25Qb3B1cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWRkRGlyZWN0aW9uUG9wdXA6b3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBhZGRUZXN0UG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBtZWRpYXRvci5wdWIoJ2FkZEZpbHRlclBvcHVwOm9wZW4nKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gYWRkRmlsdGVyUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICBtZWRpYXRvci5wdWIoJ2FkZFRlc3RQb3B1cDpvcGVuJyk7XG4gICAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRGF0YSAoKSB7XG4gICAgICAgIGxldCBncm91cE5hbWVFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsR3JvdXBOYW1lJyksXG4gICAgICAgICAgICBncm91cERpcmVjdGlvbkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWxHcm91cERpcmVjdGlvbicpLFxuICAgICAgICAgICAgZGF0YSA9IHt9O1xuXG4gICAgICAgIGRhdGEuZGlyZWN0aW9uID0gZ3JvdXBEaXJlY3Rpb25FbGVtLm9wdGlvbnNbZ3JvdXBEaXJlY3Rpb25FbGVtLnNlbGVjdGVkSW5kZXhdLnRleHQ7XG4gICAgICAgIGRhdGEubmFtZSA9IGdyb3VwTmFtZUVsZW0udmFsdWU7XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgY2xvc2UgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUG9wdXBTZXR0aW5nc1ZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZGlyZWN0aW9uTGlzdFRwbCA9IHJlcXVpcmUoJy4vZGlyZWN0aW9uTGlzdFRwbC5qcycpLFxuICAgIGZpbHRlckxpc3RUcGwgPSByZXF1aXJlKCcuL2ZpbHRlckxpc3RUcGwuanMnKSxcbiAgICB0ZXN0TGlzdFRwbCA9IHJlcXVpcmUoJy4vdGVzdExpc3RUcGwuanMnKTtcblxuZnVuY3Rpb24gc2V0dGluZ3NQb3B1cFRwbCAoZGlyZWN0aW9ucywgbW9kZSwgc2VsZWN0ZWREaXJlY3Rpb24pIHtcbiAgICBsZXQgZGlyZWN0aW9uTGlzdCA9IGRpcmVjdGlvbkxpc3RUcGwoZGlyZWN0aW9ucywgc2VsZWN0ZWREaXJlY3Rpb24ubmFtZSksXG4gICAgICAgIGZpbHRlckxpc3QgPSBmaWx0ZXJMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLmZpbHRlcnMpLFxuICAgICAgICB0ZXN0TGlzdCA9IHRlc3RMaXN0VHBsKHNlbGVjdGVkRGlyZWN0aW9uLnRlc3RzKTtcblxuICAgIHJldHVybiBgPGRpdiBpZD1cInNldHRpbmdzLXBvcHVwXCIgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtY29sdW1uLXNldHRpbmdzXCI+JHtkaXJlY3Rpb25MaXN0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tc2V0dGluZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1zZXR0aW5nc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cInRlc3Qtc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWZ0XCI+VDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZpbHRlci1zZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tZnRcIj5GPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke21vZGUgPT09ICdUJz8gdGVzdExpc3Q6IGZpbHRlckxpc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uLXNldHRpbmdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2Utc2V0dGluZ3MtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHRpbmdzUG9wdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9zZXR0aW5nc1BvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm91cFRwbCAoZ3JvdXApIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHtncm91cC5uYW1lfSAke2dyb3VwLmRpcmVjdGlvbn08L2gyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy90cGwvZ3JvdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGdyb3VwUG9wdXBUcGwgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICBsZXQgb3B0aW9ucyA9ICcnO1xuXG4gICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYDxkaXYgaWQ9XCJncm91cC1wb3B1cFwiIGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibW9kYWwtZ3JvdXAtbmFtZVwiIGNsYXNzPVwibW9kYWwtZ3JvdXAtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZ3JvdXAgbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1ncm91cC1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLWdyb3VwLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2xvc2UtZ3JvdXAtYnRuXCIgY2xhc3M9XCJidG4gYnRuLWNvZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBncm91cFBvcHVwVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwUG9wdXBUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyksXG4gICAgYWRkRGlyZWN0aW9uUG9wdXBUcGwgPSByZXF1aXJlKCcuLi8uLi9TZXR0aW5ncy9WaWV3L3RwbC9hZGREaXJlY3Rpb25Qb3B1cFRwbC5qcycpO1xuXG5jbGFzcyBQb3B1cEFkZERpcmVjdGlvblZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hZGQtZGlyZWN0aW9uJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUG9wdXAgKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGFkZERpcmVjdGlvblBvcHVwVHBsKCk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIG9wZW4gKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgY2xvc2VEaXJlY3Rpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZGlyZWN0aW9uLWJ0bicpLFxuICAgICAgICAgICAgZGlyZWN0aW9uTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGlyZWN0aW9uLW5hbWUnKTtcblxuXG4gICAgICAgIGNsb3NlRGlyZWN0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdhZGREaXJlY3Rpb25Qb3B1cDpjbG9zZScpO1xuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2FkZERpcmVjdGlvblBvcHVwOmNsb3NlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRpcmVjdGlvbk5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZERpcmVjdGlvblZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRGlyZWN0aW9uVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBMaXN0VmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gJyc7XG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcbiAgICAgICAgbGV0IGxlZnRCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbHVtbicpO1xuXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSBncm91cExpc3RUcGwoKTtcblxuICAgICAgICBsZWZ0QmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgdGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKSxcbiAgICAgICAgICAgIHNldHRpbmdzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NldHRpbmdzLWJ0bicpO1xuXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdncm91cFBvcHVwOm9wZW4nKSk7XG4gICAgICAgIHNldHRpbmdzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbWVkaWF0b3IucHViKCdzZXR0aW5nc1BvcHVwOm9wZW4nKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTGlzdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBncm91cExpc3RUcGwgKCkge1xuICAgIHJldHVybiBgPHNlY3Rpb24gaWQ9XCJncm91cC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncm91cC1ibG9jay1oZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Hcm91cDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJzZXR0aW5ncy1idG5cIiBjbGFzcz1cImJ0biBidG4tY29nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyb3VwLWJsb2NrLXdyYXBwZXIgZ3JvdXAtd3JhcHBlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBhZGQtZ3JvdXAtYnRuXCI+YWRkIGdyb3VwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ3JvdXBMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXG4gICAgUG9wdXBBZGRHcm91cFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcycpLFxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yIChncm91cExpc3QpIHtcbiAgICAgICAgdGhpcy5ncm91cExpc3QgPSBncm91cExpc3Q7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgc2hvd0dyb3VwTGlzdCAoKSB7XG4gICAgICAgIGxldCBncm91cExpc3RWaWV3ID0gbmV3IEdyb3VwTGlzdFZpZXcoKTtcblxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXBQb3B1cDpvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gbGV0IHBvcHVwQWRkR3JvdXBWaWV3ID0gbmV3IFBvcHVwQWRkR3JvdXBWaWV3KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6Y3JlYXRlZCcsICgpID0+IHtcbiAgICAgICAgICAgIC8vcG9wdXBBZGRHcm91cFZpZXcgLSDQlNC+0LvQttC90LAg0LPQtdC90LXRgNC40YDQvtCy0LDRgtGM0YHRjyDQv9GA0Lgg0YHQvtC30LTQsNC90LjQuCBhZGRHcm91cFxuICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0L7QsdGK0LXQutGCINCz0YDRg9C/0L/RiyDQsiBncm91cFBvcHVwOiBvcGVuXG4gICAgICAgICAgICAvLyDQuCDQv9C+0YLQvtC8INC/0LXRgNC10LTQsNC10Lwg0LIgZ3JvdXBQb3B1cCDRgXJlYXRlZFxuICAgICAgICAgICAgLy8gR3JvdXBMaXN0IFZpZXcg0LTQvtC70LbQtdC9INC40LzQtdGC0Ywg0LIg0YHQtdCx0LUg0LzQtdGC0L7QtCDRgdC+0LfQtNCw0L3QuNGPIEdyb3VwVmlld1xuICAgICAgICAgICAgLy8g0Jgg0L7QvdCwINC00L7Qu9C20L3QsCDRg9C80LXRgtGMINGA0LXQvdC00LXRgNC40YLRjCDQs9GA0YPQv9C/0YNcbiAgICAgICAgICAgIC8vIGdyb3VwOmNyZWF0ZWRcbiAgICAgICAgICAgIC8vINCt0YLQviDQtNC+0LvQttC90L4g0LHRi9GC0Ywg0LLRgdC1INCyINC+0LTQvdC+0Lwg0LrQvtC90YLRgNC+0LvQu9C10YDQtVxuICAgICAgICAgICAgLy8gZ3JvdXBMaXN0LmFwcGVuZFZpZXc7XG4gICAgICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpLFxuICAgICAgICAgICAgICAgIGdyb3VwRGF0YSA9IHt9LFxuICAgICAgICAgICAgICAgIGdyb3VwID0ge307XG5cbiAgICAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XG4gICAgICAgICAgICAgLy8gUG9wVXAgLSDRgdCw0Lwg0YHQtdCx0Y8g0LfQsNC60YDQvtC10YJcbiAgICAgICAgICAgIC8vIFBvcHVwQWRkR3JvdXBWaWV3LmNsb3NlKCk7XG4gICAgICAgICAgICBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBpbml0KTtcblxuZnVuY3Rpb24gaW5pdCAoKSB7XG4gICAgbGV0IERpcmVjdGlvbk1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcycpLFxuICAgICAgICBGaWx0ZXJNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMnKSxcbiAgICAgICAgVGVzdE1vZGVsID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9Nb2RlbC9UZXN0TW9kZWwuanMnKSxcbiAgICAgICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgICAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxuICAgICAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgICAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgICAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXG4gICAgICAgIGdyb3VwTGlzdFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwTGlzdFRwbC5qcycpLFxuICAgICAgICBQb3B1cEFkZEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcbiAgICAgICAgUG9wdXBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvUG9wdXBTZXR0aW5nc1ZpZXcuanMnKSxcbiAgICAgICAgUG9wdXBBZGRGaWx0ZXJWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRmlsdGVyVmlldy5qcycpLFxuICAgICAgICBQb3B1cEFkZERpcmVjdGlvblZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGREaXJlY3Rpb25WaWV3LmpzJyksXG4gICAgICAgIFBvcHVwQWRkVGVzdFZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvUG9wdXBBZGRUZXN0Vmlldy5qcycpLFxuICAgICAgICBncm91cFBvcHVwVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy90cGwvZ3JvdXBQb3B1cFRwbC5qcycpLFxuICAgICAgICBncm91cFRwbCA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvdHBsL2dyb3VwVHBsLmpzJyksXG4gICAgICAgIHNldHRpbmdzUG9wdXBUcGwgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvdHBsL3NldHRpbmdzUG9wdXBUcGwuanMnKSxcbiAgICAgICAgR3JvdXBDb250cm9sbGVyID0gcmVxdWlyZSgnLi9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzJyksXG4gICAgICAgIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyksXG4gICAgICAgIE1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xuXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcbiAgICBcbiAgICBhcHAuc3RhcnQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEZpbHRlck1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLnRlc3RzID0gdGVzdHM7XG4gICAgICAgIHRoaXMuYWN0aW9uTGlzdCA9IFsnYXZlcmFnZScsICdtYXgnLCAnbWluJywgJ2VxdWFsJ107XG4gICAgICAgIHRoaXMuY29uZGl0aW9uTGlzdCA9IFsnPicsICc+PScsICc9JywgJzw9JywgJzwnXTtcbiAgICAgICAgdGhpcy5ncmFkZSA9IGdyYWRlO1xuICAgIH1cblxuLy8gYWRkVGVzdCwgY2hhbmdlQWN0aW9uLCBjaGFuZ2VDb25kaXRpb24sIGNoYW5nZUdyYWRlXG59XG5cbm1vZHVsZS5leHBvcnQgPSBGaWx0ZXJNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUZXN0TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBtYXhHcmFkZSwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgLy8gdGhpcy5tYXhHcmFkZSA9IG1heEdyYWRlO1xuICAgICAgICAvLyB0aGlzLmdyYWRlID0gZ3JhZGU7XG4gICAgfVxuXG5cbn1cblxubW9kdWxlLmV4cG9ydCA9IFRlc3RNb2RlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBkaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0LCBzZWxlY3RlZERpcmVjdGlvbikge1xuICAgIGxldCBvcHRpb25zID0gJyc7XG5cbiAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgb3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT0nJHtpdGVtfScgJHtzZWxlY3RlZERpcmVjdGlvbiA9PT0gaXRlbT8gJ3NlbGVjdGVkJzogJyd9PiR7aXRlbX08L29wdGlvbj5gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZGlyZWN0aW9uLWxpc3Qtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJtb2RhbC1zZXR0aW5ncy1kaXJlY3Rpb25cIiBjbGFzcz1cIm1vZGFsLXNldHRpbmdzLWRpcmVjdGlvblwiPiR7b3B0aW9uc308L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGFkZC1kaXJlY3Rpb24tYnRuXCI+YWRkIGRpcmVjdGlvbjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaXJlY3Rpb25MaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvZGlyZWN0aW9uTGlzdFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZmlsdGVyTGlzdFRwbCAoZmlsdGVyTGlzdCkge1xuICAgIGxldCBmaWx0ZXJzID0gJyc7XG5cbiAgICBmaWx0ZXJMaXN0LmZvckVhY2goKGZpbHRlcikgPT4ge1xuICAgICAgICBmaWx0ZXJzICs9IGA8ZGl2IGNsYXNzPVwiZmlsdGVyXCI+JHtmaWx0ZXJ9PC9kaXY+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8aDM+RmlsdGVyczwvaDM+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlci1saXN0XCI+JHtmaWx0ZXJzfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJhZGQtZmlsdGVyLWJ0biBidG5cIj5hZGQgZmlsdGVyPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbHRlckxpc3RUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L3RwbC9maWx0ZXJMaXN0VHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiB0ZXN0TGlzdFRwbCAodGVzdHNMaXN0KSB7XG4gICAgbGV0IHRlc3RzID0gJyc7XG5cbiAgICB0ZXN0c0xpc3QuZm9yRWFjaCgodGVzdCkgPT4ge1xuICAgICAgICB0ZXN0cyArPSBgPGRpdiBjbGFzcz1cInRlc3RcIj4ke3Rlc3R9PC9kaXY+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRlc3QtbGlzdC13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgzPlRlc3RzPC9oMz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+JHt0ZXN0c308L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXRlc3QtYnRuIGJ0blwiPmFkZCB0ZXN0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRlc3RMaXN0VHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy90cGwvdGVzdExpc3RUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFkZERpcmVjdGlvblBvcHVwVHBsICgpIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGFkZC1kaXJlY3Rpb24tcG9wdXBcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC1kaXJlY3Rpb24tbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZGlyZWN0aW9uIG5hbWVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1jb2dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jaGVjayBjbG9zZS1kaXJlY3Rpb24tYnRuXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGREaXJlY3Rpb25Qb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZERpcmVjdGlvblBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIGFkZEZpbHRlclBvcHVwVHBsID0gcmVxdWlyZSgnLi4vLi4vU2V0dGluZ3MvVmlldy90cGwvYWRkRmlsdGVyUG9wdXBUcGwuanMnKTtcblxuY2xhc3MgUG9wdXBBZGRGaWx0ZXJWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLWZpbHRlcicpO1xuICAgIH1cblxuICAgIHJlbmRlclBvcHVwICh0ZXN0TGlzdCwgYWN0aW9uTGlzdCwgY29uZGl0aW9uTGlzdCkge1xuICAgICAgICB0aGlzLm1vZGFsLmlubmVySFRNTCA9IGFkZEZpbHRlclBvcHVwVHBsKHRlc3RMaXN0LCBhY3Rpb25MaXN0LCBjb25kaXRpb25MaXN0KTtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgb3BlbiAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBjbG9zZUZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1maWx0ZXItYnRuJyksXG4gICAgICAgICAgICB0ZXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LWNvbHVtbi1maWx0ZXInKSxcbiAgICAgICAgICAgIHRlc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXN0LW5hbWUnKSxcbiAgICAgICAgICAgIGFjdGlvblNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1maWx0ZXItYWN0aW9uJyksXG4gICAgICAgICAgICBjb25kaXRpb25TZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZmlsdGVyLWNvbmRpdGlvbicpLFxuICAgICAgICAgICAgdGVzdEdyYWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10ZXN0LWdyYWRlJyk7XG5cblxuICAgICAgICBjbG9zZUZpbHRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1lZGlhdG9yLnB1YignYWRkRmlsdGVyUG9wdXA6Y2xvc2UnKTtcbiAgICAgICAgICAgIG1lZGlhdG9yLnVuc3ViKCdhZGRGaWx0ZXJQb3B1cDpjbG9zZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0ZXN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRlc3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgfSk7XG5cbiAgICAgICAgYWN0aW9uU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FjdGlvblNlbGVjdDpjaGFuZ2UnLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbmRpdGlvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICAgICAgbWVkaWF0b3IucHViKCdjb25kaXRpb25TZWxlY3Q6Y2hhbmdlJywgZS50YXJnZXQudmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0ZXN0R3JhZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZSAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEZpbHRlclZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkRmlsdGVyVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gYWRkRmlsdGVyUG9wdXBUcGwgKHRlc3RMaXN0LCBhY3Rpb25MaXN0LCBjb25kaXRpb25MaXN0KSB7XG4gICAgbGV0IHRlc3RzID0gZ2VuZXJhdGVUZXN0TGlzdCh0ZXN0TGlzdCksXG4gICAgICAgIGFjdGlvbnMgPSBnZW5lcmF0ZUxpc3QoYWN0aW9uTGlzdCksXG4gICAgICAgIGNvbmRpdGlvbnMgPSBnZW5lcmF0ZUxpc3QoY29uZGl0aW9uTGlzdCk7XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUxpc3QgKGxpc3QpIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBsaXN0ICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVRlc3RMaXN0IChsaXN0KSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgbGlzdCArPSBgPGxpPiR7aXRlbX08L2xpPmA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH1cblxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnQgYWRkLWZpbHRlci1wb3B1cFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWNvbHVtbi1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICA8dWw+JHt0ZXN0c308L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1jb2x1bW4tZmlsdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC10ZXN0LW5hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRlc3QgbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJtb2RhbC1maWx0ZXItYWN0aW9uXCI+JHthY3Rpb25zfTwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cIm1vZGFsLWZpbHRlci1jb25kaXRpb25cIj4ke2NvbmRpdGlvbnN9PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImFkZC10ZXN0LWdyYWRlXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBncmFkZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1jb2cgY2xvc2UtZmlsdGVyLWJ0blwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNoZWNrXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRGaWx0ZXJQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZEZpbHRlclBvcHVwVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxuICAgIGFkZFRlc3RQb3B1cFRwbCA9IHJlcXVpcmUoJy4uLy4uL1NldHRpbmdzL1ZpZXcvdHBsL2FkZFRlc3RQb3B1cFRwbC5qcycpO1xuXG5jbGFzcyBQb3B1cEFkZFRlc3RWaWV3IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYWRkLXRlc3QnKTtcbiAgICB9XG5cbiAgICByZW5kZXJQb3B1cCAoKSB7XG4gICAgICAgIHRoaXMubW9kYWwuaW5uZXJIVE1MID0gYWRkVGVzdFBvcHVwVHBsKCk7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIG9wZW4gKCkge1xuICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xuICAgICAgICBsZXQgY2xvc2VUZXN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXRlc3QtYnRuJyksXG4gICAgICAgICAgICB0ZXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGVzdC1uYW1lJyk7XG5cblxuICAgICAgICBjbG9zZVRlc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtZWRpYXRvci5wdWIoJ2FkZFRlc3RQb3B1cDpjbG9zZScpO1xuICAgICAgICAgICAgbWVkaWF0b3IudW5zdWIoJ2FkZFRlc3RQb3B1cDpjbG9zZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0ZXN0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlICgpIHtcbiAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwQWRkVGVzdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9WaWV3L1BvcHVwQWRkVGVzdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGFkZFRlc3RQb3B1cFRwbCAoKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudCBhZGQtdGVzdC1wb3B1cFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYWRkLXRlc3QtbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGVzdCBuYW1lXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tY29nIGNsb3NlLXRlc3QtYnRuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2hlY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFRlc3RQb3B1cFRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvdHBsL2FkZFRlc3RQb3B1cFRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxuICAgIFNldHRpbmdzQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzJyksXG4gICAgdGVzdERhdGEgPSByZXF1aXJlKCcuL3Rlc3REYXRhLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEFwcCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdyb3VwTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbnMgPSB0ZXN0RGF0YS5kaXJlY3Rpb25zO1xuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cExpc3QpLFxuICAgICAgICAgICAgc2V0dGluZ3NDb250cm9sbGVyID0gbmV3IFNldHRpbmdzQ29udHJvbGxlcih0aGlzLmRpcmVjdGlvbnMpO1xuICAgICAgICBcbiAgICAgICAgZ3JvdXBDb250cm9sbGVyLnNob3dHcm91cExpc3QoKTtcbiAgICB9XG5cbiAgICBzdWJzY3JpYmUgKCkge1xuICAgICAgICAvLyBtZWRpYXRvci5zdWIoJ2dyb3VwOmNyZWF0ZWQnLCAoZ3JvdXApID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuYWRkR3JvdXAoZ3JvdXApO1xuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBhZGRHcm91cCAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy5ncm91cHMucHVzaChncm91cCk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgdGVzdERhdGEgPSB7XG4gICAgZ3JvdXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMTctanMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2dvJyxcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMjMtZ28nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3BocCcsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTI3LXBocCdcbiAgICAgICAgfVxuICAgIF0sXG5cbiAgICBkaXJlY3Rpb25zOiBbJ1VJJywgJ1BIUCcsICdHTycsICdKUyddXG5cbiAgICAvLyBkaXJlY3Rpb25zOiBbXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6ICdVSScsXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnSlMgQ29yZScsICdFc3NheSBVSSddLFxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydVSSAxJ11cbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogJ1BIUCcsXG4gICAgLy8gICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnRXNzYXkgUEhQJ10sXG4gICAgLy8gICAgICAgICBmaWx0ZXJzOiBbJ1BIUCAxJ11cbiAgICAvLyAgICAgfSxcbiAgICAvLyAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogJ0dPJyxcbiAgICAvLyAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdFc3NheSBHTyddLFxuICAgIC8vICAgICAgICAgZmlsdGVyczogWydHTyAxJ11cbiAgICAvLyAgICAgfVxuICAgIC8vIF1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdERhdGE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=