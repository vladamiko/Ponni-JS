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
/* 1 */
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
        value: function pub(channel) {
            if (this.channels[channel]) {
                this.channels[channel].forEach(function (fn) {
                    return fn();
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
    }]);

    return Mediator;
}();

var mediator = new Mediator();

module.exports = mediator;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var generateTpl = __webpack_require__(3),
    mediator = __webpack_require__(1);

var GroupView = function () {
    function GroupView() {
        _classCallCheck(this, GroupView);

        this.group = '';
        this.addListeners();
    }

    _createClass(GroupView, [{
        key: 'setGroup',
        value: function setGroup(group) {
            var groupTitle = group.name;

            this.group = generateTpl(groupTitle);
        }
    }, {
        key: 'renderGroup',
        value: function renderGroup() {
            var groupsBlock = document.querySelector('.group_wrapper');

            groupsBlock.insertAdjacentHTML('beforeend', this.group);
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var addGroupBtn = document.querySelector('.add-group-btn');

            addGroupBtn.addEventListener('click', function () {
                return mediator.pub('Group:added');
            });
        }
    }]);

    return GroupView;
}();

module.exports = GroupView;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function generateTpl(title) {
    return '<div class="group">\n                <h2 class="group-title">' + title + '</h2>\n                <div>\n                    <button class="btn">format added</button>\n                </div>\n            </div>';
}

module.exports = generateTpl;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(1);

var GroupListView = function () {
    function GroupListView() {
        _classCallCheck(this, GroupListView);

        // this.displayGroupSection();
        this.addListeners();
    }

    _createClass(GroupListView, [{
        key: 'displayGroupSection',
        value: function displayGroupSection() {}
    }, {
        key: 'render',
        value: function render() {}
    }, {
        key: 'generateDirectionListTpl',
        value: function generateDirectionListTpl(directionList) {
            var options = void 0;

            directionList.forEach(function (item) {
                options += '<option>' + item + '</option>';
            });

            return options;
        }
    }, {
        key: 'addDirectionList',
        value: function addDirectionList(directionList) {
            var select = document.querySelector('#modal-add-group select');

            select.innerHTML = this.generateDirectionListTpl(directionList);
        }
    }, {
        key: 'addNewGroup',
        value: function addNewGroup() {
            var modal = document.querySelector('#modal-add-group'),
                btnAdd = document.querySelector('#add-group-btn'),
                btnClose = document.querySelector('#close-group-btn');

            btnAdd.addEventListener('click', function () {
                modal.classList.add('visible');
            }, false);

            btnClose.addEventListener('click', function () {
                modal.classList.add('hidden');
                // ???
            }, false);

            window.addEventListener('click', function (event) {
                if (event.target == modal) {
                    modal.classList.add('hidden');
                }
            }, false);
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var addGroupBtn = document.querySelector('.add-group-btn'),
                closeGroupBtn = document.querySelector('#close-group-btn');

            addGroupBtn.addEventListener('click', function () {
                return mediator.pub('popup:open');
            });

            // Этот слушатель должен навешиваться при создании вью попапа
            closeGroupBtn.addEventListener('click', function () {
                return mediator.pub('group:added');
            });
        }
    }]);

    return GroupListView;
}();

module.exports = GroupListView;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupView = __webpack_require__(2),
    GroupListView = __webpack_require__(4),
    GroupModel = __webpack_require__(13),
    SettingsModel = __webpack_require__(10),
    mediator = __webpack_require__(1);

var GroupController = function () {
    function GroupController(groups) {
        _classCallCheck(this, GroupController);

        this.groups = groups;
        this.subscribe();
    }

    _createClass(GroupController, [{
        key: 'showGroupList',
        value: function showGroupList() {
            var groupListView = new GroupListView(),
                settingsModel = new SettingsModel();

            groupListView.render();
            groupListView.addDirectionList(settingsModel.getDirectionList());
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            mediator.sub('popup:open', function () {
                var modal = document.querySelector('#modal-add-group');

                modal.classList.add('visible');
            });

            // 1) Этот метод должен подписываться на событие при создании viewPopup(аппа)
            // 2) Внутри viewPopup должен навешиваться слушатель на closeBtn для закрытия popup(аппа и создания группы)
            // 3) Функцию описанную ниже можно разделить:
            // на 2 (1. закрытия модального окна, 2. Собирание данных с input и select);
            mediator.sub('group:added', function () {
                var modal = document.querySelector('#modal-add-group'),
                    groupNameElement = document.querySelector('.modal-group_name'),
                    groupDirectionElement = document.querySelector('.modal-group_direction'),
                    groupNameText = '',
                    groupDirectionValue = '';
                // Закрываем модальное окно
                modal.classList.remove('visible');
                // Собираем текст с input
                groupNameText = groupNameElement.value;
                // Собираем значение с select
                groupDirectionValue = groupDirectionElement.options[groupDirectionElement.selectedIndex].text;
                // Создаем новый объект группы
                var group = new GroupModel(groupNameText, groupDirectionValue);
                // потом создаем view группы
                var groupView = new GroupView();
                // render
                groupView.setGroup(group);
                groupView.renderGroup();
            });
        }
    }]);

    return GroupController;
}();

module.exports = GroupController;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var DirectionModel = __webpack_require__(7),
        FilterModel = __webpack_require__(8),
        TestModel = __webpack_require__(9),
        SettingsModel = __webpack_require__(10),
        SettingsView = __webpack_require__(11),
        SettingsController = __webpack_require__(12),
        GroupModel = __webpack_require__(13),
        GroupView = __webpack_require__(2),
        GroupListView = __webpack_require__(4),
        generateTpl = __webpack_require__(3),
        GroupController = __webpack_require__(5),
        App = __webpack_require__(14),
        testData = __webpack_require__(15),
        Mediator = __webpack_require__(1);

    //Entry point
    var app = new App();

    app.setGroups(testData.groups);

    app.start();
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DirectionModel = function () {
    function DirectionModel(directionName) {
        _classCallCheck(this, DirectionModel);

        this.directionName = directionName;
        this.testList = []; // ['Eng1', 'Engl2', …]
        this.filterList = []; // ['filter1', 'filter2', …] 
    }

    _createClass(DirectionModel, [{
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FilterModel = function FilterModel(tests, action, condition, grade) {
    _classCallCheck(this, FilterModel);

    this.tests = tests; // array
    this.action = action; // string
    this.condition = condition; // string
    this.grade = grade; // number
}

// addTest, changeAction, changeCondition, changeGrade
;

module.export = FilterModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TestModel = function TestModel(name, maxGrade, grade) {
    _classCallCheck(this, TestModel);

    this.name = name;
    // this.maxGrade = maxGrade;
    // this.grade = grade;
}

// addResults () {

// }  
;

module.export = TestModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsModel = function () {
    function SettingsModel() {
        _classCallCheck(this, SettingsModel);

        this.directionList = ['UI', 'GO', 'PHP', 'Other']; // string
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsView = function SettingsView() {
    _classCallCheck(this, SettingsView);
};

module.export = SettingsView;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SettingsController = function SettingsController() {
    _classCallCheck(this, SettingsController);
};

module.export = SettingsController;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupModel = function () {
    function GroupModel(name, direction) {
        _classCallCheck(this, GroupModel);

        this.name = name; // string
        this.direction = direction; // string
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(5);

var App = function () {
    function App() {
        _classCallCheck(this, App);

        this.groups = [];
        this.settings = [];
    }

    _createClass(App, [{
        key: 'start',
        value: function start() {
            var groupController = new GroupController(this.groups);

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
/* 15 */
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
        direction: 'ui',
        tests: ['Eng1', 'Eng2', 'JS Core', 'Essay'],
        filters: []
    }]
};

module.exports = testData;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjUwZWZjZTkwMzExY2VkNmMxOTUiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImZvckVhY2giLCJmbiIsInB1c2giLCJtZWRpYXRvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZW5lcmF0ZVRwbCIsInJlcXVpcmUiLCJHcm91cFZpZXciLCJncm91cCIsImFkZExpc3RlbmVycyIsImdyb3VwVGl0bGUiLCJuYW1lIiwiZ3JvdXBzQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhZGRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJ0aXRsZSIsIkdyb3VwTGlzdFZpZXciLCJkaXJlY3Rpb25MaXN0Iiwib3B0aW9ucyIsIml0ZW0iLCJzZWxlY3QiLCJpbm5lckhUTUwiLCJnZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwiLCJtb2RhbCIsImJ0bkFkZCIsImJ0bkNsb3NlIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93IiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZUdyb3VwQnRuIiwiR3JvdXBNb2RlbCIsIlNldHRpbmdzTW9kZWwiLCJHcm91cENvbnRyb2xsZXIiLCJncm91cHMiLCJzdWJzY3JpYmUiLCJncm91cExpc3RWaWV3Iiwic2V0dGluZ3NNb2RlbCIsInJlbmRlciIsImFkZERpcmVjdGlvbkxpc3QiLCJnZXREaXJlY3Rpb25MaXN0Iiwic3ViIiwiZ3JvdXBOYW1lRWxlbWVudCIsImdyb3VwRGlyZWN0aW9uRWxlbWVudCIsImdyb3VwTmFtZVRleHQiLCJncm91cERpcmVjdGlvblZhbHVlIiwicmVtb3ZlIiwidmFsdWUiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImdyb3VwVmlldyIsInNldEdyb3VwIiwicmVuZGVyR3JvdXAiLCJpbml0IiwiRGlyZWN0aW9uTW9kZWwiLCJGaWx0ZXJNb2RlbCIsIlRlc3RNb2RlbCIsIlNldHRpbmdzVmlldyIsIlNldHRpbmdzQ29udHJvbGxlciIsIkFwcCIsInRlc3REYXRhIiwiYXBwIiwic2V0R3JvdXBzIiwic3RhcnQiLCJkaXJlY3Rpb25OYW1lIiwidGVzdExpc3QiLCJmaWx0ZXJMaXN0IiwidGVzdE5hbWUiLCJUZXN0IiwidGVzdHMiLCJhY3Rpb24iLCJjb25kaXRpb24iLCJncmFkZSIsIkZpbHRlciIsImV4cG9ydCIsIm1heEdyYWRlIiwiRGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwic2V0dGluZ3MiLCJncm91cENvbnRyb2xsZXIiLCJzaG93R3JvdXBMaXN0IiwiZmlsdGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckJBOzs7Ozs7SUFFTUEsUTtBQUNGLHdCQUFlO0FBQUE7O0FBQ1gsYUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOzs7OzRCQUVJQyxPLEVBQVM7QUFDVixnQkFBSSxLQUFLRCxRQUFMLENBQWNDLE9BQWQsQ0FBSixFQUE0QjtBQUN4QixxQkFBS0QsUUFBTCxDQUFjQyxPQUFkLEVBQXVCQyxPQUF2QixDQUErQixVQUFDQyxFQUFEO0FBQUEsMkJBQVFBLElBQVI7QUFBQSxpQkFBL0I7QUFDSDtBQUNKOzs7NEJBRUlGLE8sRUFBU0UsRSxFQUFJO0FBQ2QsZ0JBQUksQ0FB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SSxDQURHO0FBZVh3RSxjQUFVLENBQ047QUFDSUQsbUJBQVcsSUFEZjtBQUVJUixlQUFPLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsU0FBakIsRUFBNEIsT0FBNUIsQ0FGWDtBQUdJWSxpQkFBUztBQUhiLEtBRE07QUFmQyxDQUFmOztBQXdCQW5GLE9BQU9DLE9BQVAsR0FBaUI2RCxRQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY1MGVmY2U5MDMxMWNlZDZjMTk1IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0aWYoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgTWVkaWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xuICAgIH1cblxuICAgIHB1YiAoY2hhbm5lbCkge1xuICAgICAgICBpZiAodGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5mb3JFYWNoKChmbikgPT4gZm4oKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGFubmVsc1tjaGFubmVsXSkge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFubmVsc1tjaGFubmVsXS5wdXNoKGZuKTtcbiAgICB9XG59XG5cbmxldCBtZWRpYXRvciA9IG5ldyBNZWRpYXRvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lZGlhdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvTWVkaWF0b3IuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBnZW5lcmF0ZVRwbCA9IHJlcXVpcmUoJy4vZ2VuZXJhdGVUcGwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwVmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmdyb3VwID0gJyc7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgc2V0R3JvdXAgKGdyb3VwKSB7XG4gICAgICAgIGxldCBncm91cFRpdGxlID0gZ3JvdXAubmFtZTtcblxuICAgICAgICB0aGlzLmdyb3VwID0gZ2VuZXJhdGVUcGwoZ3JvdXBUaXRsZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyR3JvdXAgKCkge1xuICAgICAgICBsZXQgZ3JvdXBzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JvdXBfd3JhcHBlcicpO1xuXG4gICAgICAgIGdyb3Vwc0Jsb2NrLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGhpcy5ncm91cCk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKTtcblxuICAgICAgICBhZGRHcm91cEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4gbWVkaWF0b3IucHViKCdHcm91cDphZGRlZCcpKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvdXBWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVRwbCAodGl0bGUpIHtcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHt0aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG5cIj5mb3JtYXQgYWRkZWQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVUcGw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9nZW5lcmF0ZVRwbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBMaXN0VmlldyB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvLyB0aGlzLmRpc3BsYXlHcm91cFNlY3Rpb24oKTtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5R3JvdXBTZWN0aW9uICgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyICgpIHtcblxuICAgIH1cblxuICAgIGdlbmVyYXRlRGlyZWN0aW9uTGlzdFRwbCAoZGlyZWN0aW9uTGlzdCkge1xuICAgICAgICBsZXQgb3B0aW9ucztcblxuICAgICAgICBkaXJlY3Rpb25MaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMgKz0gYDxvcHRpb24+JHtpdGVtfTwvb3B0aW9uPmA7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbkxpc3QgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAgc2VsZWN0Jyk7XG5cbiAgICAgICAgc2VsZWN0LmlubmVySFRNTCA9IHRoaXMuZ2VuZXJhdGVEaXJlY3Rpb25MaXN0VHBsKGRpcmVjdGlvbkxpc3QpO1xuICAgIH1cblxuICAgIGFkZE5ld0dyb3VwICgpIHtcbiAgICAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpLFxuICAgICAgICAgICAgYnRuQWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1ncm91cC1idG4nKSxcbiAgICAgICAgICAgIGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWdyb3VwLWJ0bicpO1xuXG4gICAgICAgIGJ0bkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIGJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAvLyA/Pz9cbiAgICAgICAgfSwgZmFsc2UpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgYWRkTGlzdGVuZXJzICgpIHtcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKSxcbiAgICAgICAgICAgIGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XG5cbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IG1lZGlhdG9yLnB1YigncG9wdXA6b3BlbicpKTtcblxuICAgICAgICAvLyDQrdGC0L7RgiDRgdC70YPRiNCw0YLQtdC70Ywg0LTQvtC70LbQtdC9INC90LDQstC10YjQuNCy0LDRgtGM0YHRjyDQv9GA0Lgg0YHQvtC30LTQsNC90LjQuCDQstGM0Y4g0L/QvtC/0LDQv9CwXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IG1lZGlhdG9yLnB1YignZ3JvdXA6YWRkZWQnKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwTGlzdFZpZXc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXG4gICAgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKSxcbiAgICBTZXR0aW5nc01vZGVsID0gcmVxdWlyZSgnLi4vU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcycpLFxuICAgIG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vTWVkaWF0b3IuanMnKTtcblxuY2xhc3MgR3JvdXBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoZ3JvdXBzKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xuICAgICAgICB0aGlzLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHNob3dHcm91cExpc3QgKCkge1xuICAgICAgICBsZXQgZ3JvdXBMaXN0VmlldyA9IG5ldyBHcm91cExpc3RWaWV3KCksXG4gICAgICAgICAgICBzZXR0aW5nc01vZGVsID0gbmV3IFNldHRpbmdzTW9kZWwoKTtcblxuICAgICAgICBncm91cExpc3RWaWV3LnJlbmRlcigpO1xuICAgICAgICBncm91cExpc3RWaWV3LmFkZERpcmVjdGlvbkxpc3Qoc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25MaXN0KCkpO1xuICAgIH1cblxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YigncG9wdXA6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcblxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAxKSDQrdGC0L7RgiDQvNC10YLQvtC0INC00L7Qu9C20LXQvSDQv9C+0LTQv9C40YHRi9Cy0LDRgtGM0YHRjyDQvdCwINGB0L7QsdGL0YLQuNC1INC/0YDQuCDRgdC+0LfQtNCw0L3QuNC4IHZpZXdQb3B1cCjQsNC/0L/QsClcbiAgICAgICAgLy8gMikg0JLQvdGD0YLRgNC4IHZpZXdQb3B1cCDQtNC+0LvQttC10L0g0L3QsNCy0LXRiNC40LLQsNGC0YzRgdGPINGB0LvRg9GI0LDRgtC10LvRjCDQvdCwIGNsb3NlQnRuINC00LvRjyDQt9Cw0LrRgNGL0YLQuNGPIHBvcHVwKNCw0L/Qv9CwINC4INGB0L7Qt9C00LDQvdC40Y8g0LPRgNGD0L/Qv9GLKVxuICAgICAgICAvLyAzKSDQpNGD0L3QutGG0LjRjiDQvtC/0LjRgdCw0L3QvdGD0Y4g0L3QuNC20LUg0LzQvtC20L3QviDRgNCw0LfQtNC10LvQuNGC0Yw6XG4gICAgICAgIC8vINC90LAgMiAoMS4g0LfQsNC60YDRi9GC0LjRjyDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsCwgMi4g0KHQvtCx0LjRgNCw0L3QuNC1INC00LDQvdC90YvRhSDRgSBpbnB1dCDQuCBzZWxlY3QpO1xuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmFkZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpLFxuICAgICAgICAgICAgICAgIGdyb3VwTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZ3JvdXBfbmFtZScpLFxuICAgICAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1ncm91cF9kaXJlY3Rpb24nKSxcbiAgICAgICAgICAgICAgICBncm91cE5hbWVUZXh0ID0gJycsXG4gICAgICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25WYWx1ZSA9ICcnO1xuICAgICAgICAgICAgLy8g0JfQsNC60YDRi9Cy0LDQtdC8INC80L7QtNCw0LvRjNC90L7QtSDQvtC60L3QvlxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgICAgLy8g0KHQvtCx0LjRgNCw0LXQvCDRgtC10LrRgdGCINGBIGlucHV0XG4gICAgICAgICAgICBncm91cE5hbWVUZXh0ID0gZ3JvdXBOYW1lRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIC8vINCh0L7QsdC40YDQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSDRgSBzZWxlY3RcbiAgICAgICAgICAgIGdyb3VwRGlyZWN0aW9uVmFsdWUgPSBncm91cERpcmVjdGlvbkVsZW1lbnQub3B0aW9uc1tncm91cERpcmVjdGlvbkVsZW1lbnQuc2VsZWN0ZWRJbmRleF0udGV4dDtcbiAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQtdC8INC90L7QstGL0Lkg0L7QsdGK0LXQutGCINCz0YDRg9C/0L/Ri1xuICAgICAgICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwTW9kZWwoZ3JvdXBOYW1lVGV4dCwgZ3JvdXBEaXJlY3Rpb25WYWx1ZSk7XG4gICAgICAgICAgICAvLyDQv9C+0YLQvtC8INGB0L7Qt9C00LDQtdC8IHZpZXcg0LPRgNGD0L/Qv9GLXG4gICAgICAgICAgICBsZXQgZ3JvdXBWaWV3ID0gbmV3IEdyb3VwVmlldygpO1xuICAgICAgICAgICAgLy8gcmVuZGVyXG4gICAgICAgICAgICBncm91cFZpZXcuc2V0R3JvdXAoZ3JvdXApO1xuICAgICAgICAgICAgZ3JvdXBWaWV3LnJlbmRlckdyb3VwKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuICAgIGxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKSxcbiAgICAgICAgRmlsdGVyTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzJyksXG4gICAgICAgIFRlc3RNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzJyksXG4gICAgICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICAgICAgU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcycpLFxuICAgICAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxuICAgICAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgICAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgICAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXG4gICAgICAgIGdlbmVyYXRlVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9nZW5lcmF0ZVRwbC5qcycpLFxuICAgICAgICBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcbiAgICAgICAgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKSxcbiAgICAgICAgdGVzdERhdGEgPSByZXF1aXJlKCcuL3Rlc3REYXRhLmpzJyksXG4gICAgICAgIE1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xuXG4gICAgLy9FbnRyeSBwb2ludFxuICAgIGxldCBhcHAgPSBuZXcgQXBwKCk7XG5cbiAgICBhcHAuc2V0R3JvdXBzKHRlc3REYXRhLmdyb3Vwcyk7XG5cbiAgICBhcHAuc3RhcnQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIERpcmVjdGlvbk1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbk5hbWUgPSBkaXJlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnRlc3RMaXN0ID0gW107IC8vIFsnRW5nMScsICdFbmdsMicsIOKApl1cbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW107ICAvLyBbJ2ZpbHRlcjEnLCAnZmlsdGVyMicsIOKApl0gXG4gICAgfVxuXG4gICAgYWRkVGVzdCAodGVzdE5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIH1cblxuICAgIGRlbGV0ZVRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgZGVsZXRlRmlsdGVyICgpIHtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydCA9IERpcmVjdGlvbk1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEZpbHRlck1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLnRlc3RzID0gdGVzdHM7IC8vIGFycmF5XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247IC8vIHN0cmluZ1xuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7IC8vIG51bWJlclxuICAgIH1cblxuLy8gYWRkVGVzdCwgY2hhbmdlQWN0aW9uLCBjaGFuZ2VDb25kaXRpb24sIGNoYW5nZUdyYWRlXG59XG5cbm1vZHVsZS5leHBvcnQgPSBGaWx0ZXJNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUZXN0TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBtYXhHcmFkZSwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgLy8gdGhpcy5tYXhHcmFkZSA9IG1heEdyYWRlO1xuICAgICAgICAvLyB0aGlzLmdyYWRlID0gZ3JhZGU7XG4gICAgfVxuXG4gICAgLy8gYWRkUmVzdWx0cyAoKSB7XG5cbiAgICAvLyB9ICBcbn1cblxubW9kdWxlLmV4cG9ydCA9IFRlc3RNb2RlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IFsnVUknLCAnR08nLCAnUEhQJywgJ090aGVyJ107IC8vIHN0cmluZ1xuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbiAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IERpcmVjdGlvbihkaXJlY3Rpb25OYW1lKSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uTGlzdCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbkxpc3Q7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247IC8vIHN0cmluZ1xuICAgIH1cblxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcblxuICAgIH1cblxuICAgIGFkZFRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICgpIHtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cE1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKTtcblxuY2xhc3MgQXBwIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZ3JvdXBzID0gW107XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBbXTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIGxldCBncm91cENvbnRyb2xsZXIgPSBuZXcgR3JvdXBDb250cm9sbGVyKHRoaXMuZ3JvdXBzKTtcbiAgICAgICAgXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5zaG93R3JvdXBMaXN0KCk7XG4gICAgfVxuXG4gICAgc2V0R3JvdXBzIChncm91cHMpIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSBncm91cHM7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEFwcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgdGVzdERhdGEgPSB7XG4gICAgZ3JvdXBzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3VpJyxcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMTctanMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2dvJyxcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMjMtZ28nXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3BocCcsXG4gICAgICAgICAgICBuYW1lOiAnZHAtMTI3LXBocCdcbiAgICAgICAgfVxuICAgIF0sXG4gICAgc2V0dGluZ3M6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAndWknLFxuICAgICAgICAgICAgdGVzdHM6IFsnRW5nMScsICdFbmcyJywgJ0pTIENvcmUnLCAnRXNzYXknXSxcbiAgICAgICAgICAgIGZpbHRlcnM6IFtdXG4gICAgICAgIH1cbiAgICBdXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRlc3REYXRhO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvdGVzdERhdGEuanMiXSwic291cmNlUm9vdCI6IiJ9