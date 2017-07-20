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
        // showGroup () {
        //     this.groups.forEach((group) => {
        //         let groupView = new GroupView();
        //
        //         groupView.setGroup(group);
        //         groupView.renderGroup();
        //     });
        // }

    }, {
        key: 'subscribe',
        value: function subscribe() {
            mediator.sub('popup:open', function () {
                var modal = document.querySelector('#modal-add-group');

                modal.classList.add('visible');
            });

            // Этот метод должен подписываться на событие при создании view popup(аппа)
            // а внутри его view должен навешиваться слушатель на closeBtn для закрытия popup(аппа и создания группы)
            mediator.sub('group:added', function () {
                var modal = document.querySelector('#modal-add-group');

                modal.classList.remove('visible');

                // Создаем новый объект группы

                // потом создаем view группы
                // viewGroup.render();
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
/* WEBPACK VAR INJECTION */(function(module) {

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

module.export = GroupModel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmY4ODUxMDllODVlYTBmZGRlOGUiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvU2V0dGluZ3NDb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJuYW1lcyI6WyJNZWRpYXRvciIsImNoYW5uZWxzIiwiY2hhbm5lbCIsImZvckVhY2giLCJmbiIsInB1c2giLCJtZWRpYXRvciIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZW5lcmF0ZVRwbCIsInJlcXVpcmUiLCJHcm91cFZpZXciLCJncm91cCIsImFkZExpc3RlbmVycyIsImdyb3VwVGl0bGUiLCJuYW1lIiwiZ3JvdXBzQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJhZGRHcm91cEJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwdWIiLCJ0aXRsZSIsIkdyb3VwTGlzdFZpZXciLCJkaXJlY3Rpb25MaXN0Iiwib3B0aW9ucyIsIml0ZW0iLCJzZWxlY3QiLCJpbm5lckhUTUwiLCJnZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwiLCJtb2RhbCIsImJ0bkFkZCIsImJ0bkNsb3NlIiwiY2xhc3NMaXN0IiwiYWRkIiwid2luZG93IiwiZXZlbnQiLCJ0YXJnZXQiLCJjbG9zZUdyb3VwQnRuIiwiR3JvdXBNb2RlbCIsIlNldHRpbmdzTW9kZWwiLCJHcm91cENvbnRyb2xsZXIiLCJncm91cHMiLCJzdWJzY3JpYmUiLCJncm91cExpc3RWaWV3Iiwic2V0dGluZ3NNb2RlbCIsInJlbmRlciIsImFkZERpcmVjdGlvbkxpc3QiLCJnZXREaXJlY3Rpb25MaXN0Iiwic3ViIiwicmVtb3ZlIiwiaW5pdCIsIkRpcmVjdGlvbk1vZGVsIiwiRmlsdGVyTW9kZWwiLCJUZXN0TW9kZWwiLCJTZXR0aW5nc1ZpZXciLCJTZXR0aW5nc0NvbnRyb2xsZXIiLCJBcHAiLCJ0ZXN0RGF0YSIsImFwcCIsInNldEdyb3VwcyIsInN0YXJ0IiwiZGlyZWN0aW9uTmFtZSIsInRlc3RMaXN0IiwiZmlsdGVyTGlzdCIsInRlc3ROYW1lIiwiVGVzdCIsInRlc3RzIiwiYWN0aW9uIiwiY29uZGl0aW9uIiwiZ3JhZGUiLCJGaWx0ZXIiLCJleHBvcnQiLCJtYXhHcmFkZSIsIkRpcmVjdGlvbiIsImRpcmVjdGlvbiIsInNldHRpbmdzIiwiZ3JvdXBDb250cm9sbGVyIiwi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TCxHQUFnQixFQUFoQjtBQUNIOzs7O2dDQUVRO0FBQ0wsZ0JBQUlDLGtCQUFrQixJQUFJcEMsZUFBSixDQUFvQixLQUFLQyxNQUF6QixDQUF0Qjs7QUFFQW1DLDRCQUFnQkMsYUFBaEI7QUFDSDs7O2tDQUVVcEMsTSxFQUFRO0FBQ2YsaUJBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNIOzs7Ozs7QUFHTHBDLE9BQU9DLE9BQVAsR0FBaUJrRCxHQUFqQixDOzs7Ozs7O0FDckJBOztBQUVBLElBQUlDLFdBQVc7QUFDWGhCLFlBQVEsQ0FDSjtBQUNJaUMsbUJBQVcsSUFEZjtBQUVJN0QsY0FBTTtBQUZWLEtBREksRUFLSjtBQUNJNkQsbUJBQVcsSUFEZjtBQUVJN0QsY0FBTTtBQUZWLEtBTEksRUFTSjtBQUNJNkQsbUJBQVcsS0FEZjtBQUVJN0QsY0FBTTtBQUZWLEtBVEksQ0FERztBQWVYOEQsY0FBVSxDQUNOO0FBQ0lELG1CQUFXLElBRGY7QUFFSVIsZUFBTyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFNBQWpCLEVBQTRCLE9BQTVCLENBRlg7QUFHSVksaUJBQVM7QUFIYixLQURNO0FBZkMsQ0FBZjs7QUF3QkF6RSxPQUFPQyxPQUFQLEdBQWlCbUQsUUFBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyZjg4NTEwOWU4NWVhMGZkZGU4ZSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIE1lZGlhdG9yIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSB7fTtcbiAgICB9XG5cbiAgICBwdWIgKGNoYW5uZWwpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0uZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3ViIChjaGFubmVsLCBmbikge1xuICAgICAgICBpZiAoIXRoaXMuY2hhbm5lbHNbY2hhbm5lbF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XG4gICAgfVxufVxuXG5sZXQgbWVkaWF0b3IgPSBuZXcgTWVkaWF0b3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgZ2VuZXJhdGVUcGwgPSByZXF1aXJlKCcuL2dlbmVyYXRlVHBsLmpzJyksXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xuXG5jbGFzcyBHcm91cFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5ncm91cCA9ICcnO1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHNldEdyb3VwIChncm91cCkge1xuICAgICAgICBsZXQgZ3JvdXBUaXRsZSA9IGdyb3VwLm5hbWU7XG5cbiAgICAgICAgdGhpcy5ncm91cCA9IGdlbmVyYXRlVHBsKGdyb3VwVGl0bGUpO1xuICAgIH1cblxuICAgIHJlbmRlckdyb3VwICgpIHtcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwX3dyYXBwZXInKTtcblxuICAgICAgICBncm91cHNCbG9jay5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRoaXMuZ3JvdXApO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyk7XG5cbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IG1lZGlhdG9yLnB1YignR3JvdXA6YWRkZWQnKSk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ2VuZXJhdGVUcGwgKHRpdGxlKSB7XG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJncm91cC10aXRsZVwiPiR7dGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5gO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRlVHBsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCBtZWRpYXRvciA9IHJlcXVpcmUoJy4uLy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwTGlzdFZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy8gdGhpcy5kaXNwbGF5R3JvdXBTZWN0aW9uKCk7XG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gICAgfVxuXG4gICAgZGlzcGxheUdyb3VwU2VjdGlvbiAoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJlbmRlciAoKSB7XG5cbiAgICB9XG5cbiAgICBnZW5lcmF0ZURpcmVjdGlvbkxpc3RUcGwgKGRpcmVjdGlvbkxpc3QpIHtcbiAgICAgICAgbGV0IG9wdGlvbnM7XG5cbiAgICAgICAgZGlyZWN0aW9uTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG5cbiAgICBhZGREaXJlY3Rpb25MaXN0IChkaXJlY3Rpb25MaXN0KSB7XG4gICAgICAgIGxldCBzZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwIHNlbGVjdCcpO1xuXG4gICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSB0aGlzLmdlbmVyYXRlRGlyZWN0aW9uTGlzdFRwbChkaXJlY3Rpb25MaXN0KTtcbiAgICB9XG5cbiAgICBhZGROZXdHcm91cCAoKSB7XG4gICAgICAgIHZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKSxcbiAgICAgICAgICAgIGJ0bkFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtZ3JvdXAtYnRuJyksXG4gICAgICAgICAgICBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1idG4nKTtcblxuICAgICAgICBidG5BZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgLy8gPz8/XG4gICAgICAgIH0sIGZhbHNlKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cblxuICAgIGFkZExpc3RlbmVycyAoKSB7XG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyksXG4gICAgICAgICAgICBjbG9zZUdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nsb3NlLWdyb3VwLWJ0bicpO1xuXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBtZWRpYXRvci5wdWIoJ3BvcHVwOm9wZW4nKSk7XG5cbiAgICAgICAgLy8g0K3RgtC+0YIg0YHQu9GD0YjQsNGC0LXQu9GMINC00L7Qu9C20LXQvSDQvdCw0LLQtdGI0LjQstCw0YLRjNGB0Y8g0L/RgNC4INGB0L7Qt9C00LDQvdC40Lgg0LLRjNGOINC/0L7Qv9Cw0L/QsFxuICAgICAgICBjbG9zZUdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBtZWRpYXRvci5wdWIoJ2dyb3VwOmFkZGVkJykpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cExpc3RWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwVmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgIEdyb3VwTGlzdFZpZXcgPSByZXF1aXJlKCcuLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXG4gICAgR3JvdXBNb2RlbCA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzJyksXG4gICAgU2V0dGluZ3NNb2RlbCA9IHJlcXVpcmUoJy4uL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XG5cbmNsYXNzIEdyb3VwQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IgKGdyb3Vwcykge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICBzaG93R3JvdXBMaXN0ICgpIHtcbiAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpLFxuICAgICAgICAgICAgc2V0dGluZ3NNb2RlbCA9IG5ldyBTZXR0aW5nc01vZGVsKCk7XG5cbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5yZW5kZXIoKTtcbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5hZGREaXJlY3Rpb25MaXN0KHNldHRpbmdzTW9kZWwuZ2V0RGlyZWN0aW9uTGlzdCgpKTtcbiAgICB9XG4gICAgLy8gc2hvd0dyb3VwICgpIHtcbiAgICAvLyAgICAgdGhpcy5ncm91cHMuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAvLyAgICAgICAgIGxldCBncm91cFZpZXcgPSBuZXcgR3JvdXBWaWV3KCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XG4gICAgLy8gICAgICAgICBncm91cFZpZXcucmVuZGVyR3JvdXAoKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICAgIHN1YnNjcmliZSAoKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YigncG9wdXA6b3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKTtcblxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDQrdGC0L7RgiDQvNC10YLQvtC0INC00L7Qu9C20LXQvSDQv9C+0LTQv9C40YHRi9Cy0LDRgtGM0YHRjyDQvdCwINGB0L7QsdGL0YLQuNC1INC/0YDQuCDRgdC+0LfQtNCw0L3QuNC4IHZpZXcgcG9wdXAo0LDQv9C/0LApXG4gICAgICAgIC8vINCwINCy0L3Rg9GC0YDQuCDQtdCz0L4gdmlldyDQtNC+0LvQttC10L0g0L3QsNCy0LXRiNC40LLQsNGC0YzRgdGPINGB0LvRg9GI0LDRgtC10LvRjCDQvdCwIGNsb3NlQnRuINC00LvRjyDQt9Cw0LrRgNGL0YLQuNGPIHBvcHVwKNCw0L/Qv9CwINC4INGB0L7Qt9C00LDQvdC40Y8g0LPRgNGD0L/Qv9GLKVxuICAgICAgICBtZWRpYXRvci5zdWIoJ2dyb3VwOmFkZGVkJywgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xuXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG5cbiAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQtdC8INC90L7QstGL0Lkg0L7QsdGK0LXQutGCINCz0YDRg9C/0L/Ri1xuXG4gICAgICAgICAgICAvLyDQv9C+0YLQvtC8INGB0L7Qt9C00LDQtdC8IHZpZXcg0LPRgNGD0L/Qv9GLXG4gICAgICAgICAgICAvLyB2aWV3R3JvdXAucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcm91cENvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvR3JvdXBDb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQgKCkge1xuICAgIGxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKSxcbiAgICAgICAgRmlsdGVyTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzJyksXG4gICAgICAgIFRlc3RNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzJyksXG4gICAgICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcbiAgICAgICAgU2V0dGluZ3NWaWV3ID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9WaWV3L1NldHRpbmdzVmlldy5qcycpLFxuICAgICAgICBTZXR0aW5nc0NvbnRyb2xsZXIgPSByZXF1aXJlKCcuL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcycpLFxuICAgICAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxuICAgICAgICBHcm91cFZpZXcgPSByZXF1aXJlKCcuL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcycpLFxuICAgICAgICBHcm91cExpc3RWaWV3ID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzJyksXG4gICAgICAgIGdlbmVyYXRlVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9nZW5lcmF0ZVRwbC5qcycpLFxuICAgICAgICBHcm91cENvbnRyb2xsZXIgPSByZXF1aXJlKCcuL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMnKSxcbiAgICAgICAgQXBwID0gcmVxdWlyZSgnLi9BcHAuanMnKSxcbiAgICAgICAgdGVzdERhdGEgPSByZXF1aXJlKCcuL3Rlc3REYXRhLmpzJyksXG4gICAgICAgIE1lZGlhdG9yID0gcmVxdWlyZSgnLi9NZWRpYXRvci5qcycpO1xuXG4gICAgLy9FbnRyeSBwb2ludFxuICAgIGxldCBhcHAgPSBuZXcgQXBwKCk7XG5cbiAgICBhcHAuc2V0R3JvdXBzKHRlc3REYXRhLmdyb3Vwcyk7XG5cbiAgICBhcHAuc3RhcnQoKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIERpcmVjdGlvbk1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLmRpcmVjdGlvbk5hbWUgPSBkaXJlY3Rpb25OYW1lO1xuICAgICAgICB0aGlzLnRlc3RMaXN0ID0gW107IC8vIFsnRW5nMScsICdFbmdsMicsIOKApl1cbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW107ICAvLyBbJ2ZpbHRlcjEnLCAnZmlsdGVyMicsIOKApl0gXG4gICAgfVxuXG4gICAgYWRkVGVzdCAodGVzdE5hbWUpIHtcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBUZXN0KHRlc3ROYW1lKSk7XG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICh0ZXN0cywgYWN0aW9uLCBjb25kaXRpb24sIGdyYWRlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyTGlzdC5wdXNoKG5ldyBGaWx0ZXIodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkpO1xuICAgIH1cblxuICAgIGRlbGV0ZVRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgZGVsZXRlRmlsdGVyICgpIHtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydCA9IERpcmVjdGlvbk1vZGVsO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XG5cbmNsYXNzIEZpbHRlck1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAodGVzdHMsIGFjdGlvbiwgY29uZGl0aW9uLCBncmFkZSkge1xuICAgICAgICB0aGlzLnRlc3RzID0gdGVzdHM7IC8vIGFycmF5XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247IC8vIHN0cmluZ1xuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7IC8vIG51bWJlclxuICAgIH1cblxuLy8gYWRkVGVzdCwgY2hhbmdlQWN0aW9uLCBjaGFuZ2VDb25kaXRpb24sIGNoYW5nZUdyYWRlXG59XG5cbm1vZHVsZS5leHBvcnQgPSBGaWx0ZXJNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBUZXN0TW9kZWwge1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBtYXhHcmFkZSwgZ3JhZGUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgLy8gdGhpcy5tYXhHcmFkZSA9IG1heEdyYWRlO1xuICAgICAgICAvLyB0aGlzLmdyYWRlID0gZ3JhZGU7XG4gICAgfVxuXG4gICAgLy8gYWRkUmVzdWx0cyAoKSB7XG5cbiAgICAvLyB9ICBcbn1cblxubW9kdWxlLmV4cG9ydCA9IFRlc3RNb2RlbDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc01vZGVsIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTGlzdCA9IFsnVUknLCAnR08nLCAnUEhQJywgJ090aGVyJ107IC8vIHN0cmluZ1xuICAgIH1cblxuICAgIGFkZERpcmVjdGlvbiAoZGlyZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IERpcmVjdGlvbihkaXJlY3Rpb25OYW1lKSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aW9uTGlzdCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbkxpc3Q7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNldHRpbmdzTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgXG4gICAgfVxufVxubW9kdWxlLmV4cG9ydCA9IFNldHRpbmdzQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL1NldHRpbmdzQ29udHJvbGxlci5qcyIsIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgR3JvdXBNb2RlbCB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyAvLyBzdHJpbmdcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247IC8vIHN0cmluZ1xuICAgIH1cblxuICAgIGFkZFRlc3RpbmdTZXNzaW9uICgpIHtcblxuICAgIH1cblxuICAgIGFkZFRlc3QgKCkge1xuXG4gICAgfVxuXG4gICAgYWRkRmlsdGVyICgpIHtcblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydCA9IEdyb3VwTW9kZWw7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcyIsIid1c2Ugc3RyaWN0JztcblxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpO1xuXG5jbGFzcyBBcHAge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5ncm91cHMgPSBbXTtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IFtdO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgbGV0IGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cHMpO1xuICAgICAgICBcbiAgICAgICAgZ3JvdXBDb250cm9sbGVyLnNob3dHcm91cExpc3QoKTtcbiAgICB9XG5cbiAgICBzZXRHcm91cHMgKGdyb3Vwcykge1xuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9BcHAuanMiLCIndXNlIHN0cmljdCc7XG5cbmxldCB0ZXN0RGF0YSA9IHtcbiAgICBncm91cHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAndWknLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTExNy1qcydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAnZ28nLFxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyMy1nbydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAncGhwJyxcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMjctcGhwJ1xuICAgICAgICB9XG4gICAgXSxcbiAgICBzZXR0aW5nczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXG4gICAgICAgICAgICB0ZXN0czogWydFbmcxJywgJ0VuZzInLCAnSlMgQ29yZScsICdFc3NheSddLFxuICAgICAgICAgICAgZmlsdGVyczogW11cbiAgICAgICAgfVxuICAgIF1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdGVzdERhdGE7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy90ZXN0RGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=