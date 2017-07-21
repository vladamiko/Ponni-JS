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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var generateTpl = __webpack_require__(5),
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function generateTpl(title) {
    return '<div class="group">\n                <h2 class="group-title">' + title + '</h2>\n                <div>\n                    <button class="btn">format added</button>\n                </div>\n            </div>';
}

module.exports = generateTpl;

/***/ }),
/* 6 */
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

        // addNewGroup () {
        //     var modal = document.querySelector('#modal-add-group'),
        //         btnAdd = document.querySelector('#add-group-btn'),
        //         btnClose = document.querySelector('#close-group-btn');

        //     btnAdd.addEventListener('click', () => {
        //         modal.classList.add('visible');
        //     }, false);

        //     btnClose.addEventListener('click', () => {
        //         modal.classList.add('hidden');
        //         // ???
        //     }, false);

        //     window.addEventListener('click', (event) => {
        //         if (event.target == modal) {
        //             modal.classList.add('hidden');
        //         }
        //     }, false);
        // }

    }, {
        key: 'addListeners',
        value: function addListeners() {
            var addGroupBtn = document.querySelector('.add-group-btn');

            addGroupBtn.addEventListener('click', function () {
                return mediator.pub('popup-add-group:open');
            });
        }
    }]);

    return GroupListView;
}();

module.exports = GroupListView;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupListView = __webpack_require__(6),
    PopupAddGroupView = __webpack_require__(14),
    SettingsModel = __webpack_require__(2),
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
                popupAddGroupView = new PopupAddGroupView(),
                settingsModel = new SettingsModel();

            groupListView.render();
            groupListView.addDirectionList(settingsModel.getDirectionList());
        }
    }, {
        key: 'subscribe',
        value: function subscribe() {
            mediator.sub('popup-add-group:open', function () {
                var modal = document.querySelector('#modal-add-group');

                modal.classList.add('visible');
            });
        }
    }]);

    return GroupController;
}();

module.exports = GroupController;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', init);

function init() {
    var DirectionModel = __webpack_require__(9),
        FilterModel = __webpack_require__(10),
        TestModel = __webpack_require__(11),
        SettingsModel = __webpack_require__(2),
        SettingsView = __webpack_require__(12),
        SettingsController = __webpack_require__(13),
        GroupModel = __webpack_require__(3),
        GroupView = __webpack_require__(4),
        GroupListView = __webpack_require__(6),
        generateTpl = __webpack_require__(5),
        GroupController = __webpack_require__(7),
        App = __webpack_require__(15),
        testData = __webpack_require__(16),
        Mediator = __webpack_require__(1);

    //Entry point
    var app = new App();

    app.setGroups(testData.groups);

    app.start();
}

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mediator = __webpack_require__(1),
    GroupView = __webpack_require__(4),
    GroupModel = __webpack_require__(3);

var PopupAddGroupView = function () {
    function PopupAddGroupView() {
        _classCallCheck(this, PopupAddGroupView);

        this.addListeners();
    }

    _createClass(PopupAddGroupView, [{
        key: 'addListeners',
        value: function addListeners() {
            var _this = this;

            var closeGroupBtn = document.querySelector('#close-group-btn');

            mediator.sub('group:added', function () {
                var modal = document.querySelector('#modal-add-group'),
                    groupNameElement = document.querySelector('.modal-group_name'),
                    groupDirectionElement = document.querySelector('.modal-group_direction'),
                    groupNameText = '',
                    groupDirectionValue = '';
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
                _this.close();
            });

            closeGroupBtn.addEventListener('click', function () {
                mediator.pub('group:added');console.log('closebtn');
            });
        }
    }, {
        key: 'close',
        value: function close() {
            var modal = document.querySelector('#modal-add-group');

            modal.classList.remove('visible');
        }
    }]);

    return PopupAddGroupView;
}();

module.exports = PopupAddGroupView;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GroupController = __webpack_require__(7);

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
/* 16 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmM3ODBmYTUyZTFjMmY3ZWY5MDQiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvU2V0dGluZ3NNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL1ZpZXcvZ2VuZXJhdGVUcGwuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Hcm91cExpc3RWaWV3LmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9Nb2RlbC9EaXJlY3Rpb25Nb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwid2VicGFjazovLy8uL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHJvamVjdC9qcy9Hcm91cHMvVmlldy9Qb3B1cEFkZEdyb3VwVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sIm5hbWVzIjpbIk1lZGlhdG9yIiwiY2hhbm5lbHMiLCJjaGFubmVsIiwiZm9yRWFjaCIsImZuIiwicHVzaCIsIm1lZGlhdG9yIiwibW9kdWxlIiwiZXhwb3J0cyIsIlNldHRpbmdzTW9kZWwiLCJkaXJlY3Rpb25MaXN0IiwiZGlyZWN0aW9uTmFtZSIsInRlc3RMaXN0IiwiRGlyZWN0aW9uIiwiR3JvdXBNb2RlbCIsIm5hbWUiLCJkaXJlY3Rpb24iLCJnZW5lcmF0ZVRwbCIsInJlcXVpcmUiLCJHcm91cFZpZXciLCJncm91cCIsImFkZExpc3RlbmVycyIsImdyb3VwVGl0bGUiLCJncm91cHNCbG9jayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImluc2VydEFkamFjZW50SFRNTCIsImFkZEdyb3VwQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInB1YiIsInRpdGxlIiwiR3JvdXBMaXN0VmlldyIsIm9wdGlvbnMiLCJpdGVtIiwic2VsZWN0IiwiaW5uZXJIVE1MIiwiZ2VuZXJhdGVEaXJlY3Rpb25MaXN0VHBsIiwiUG9wdXBBZGRHcm91cFZpZXciLCJHcm91cENvbnRyb2xsZXIiLCJncm91cHMiLCJzdWJzY3JpYmUiLCJncm91cExpc3RWaWV3IiwicG9wdXBBZGRHcm91cFZpZXciLCJzZXR0aW5nc01vZGVsIiwicmVuZGVyIiwiYWRkRGlyZWN0aW9uTGlzdCIsImdldERpcmVjdGlvbkxpc3QiLCJzdWIiLCJtb2RhbCIsImNsYXNzTGlzdCIsImFkZCIsImluaXQiLCJEaXJlY3Rpb25Nb2RlbCIsIkZpbHRlck1vZGVsIiwiVGVzdE1vZGVsIiwiU2V0dGluZ3NWaWV3IiwiU2V0dGluZ3NDb250cm9sbGVyIiwiQXBwIiwidGVzdERhdGEiLCJhcHAiLCJzZXRHcm91cHMiLCJzdGFydCIsImZpbHRlckxpc3QiLCJ0ZXN0TmFtZSIsIlRlc3QiLCJ0ZXN0cyIsImFjdGlvbiIsImNvbmRpdGlvbiIsImdyYWRlIiwiRmlsdGVyIiwiZXhwb3J0IiwibWF4R3JhZGUiLCJjbG9zZUdyb3VwQnRuIiwiZ3JvdXBOYW1lRWxlbWVudCIsImdyb3VwRGlyZWN0aW9uRWxlbWVudCIsImdyb3VwTmFtZVRleHQiLCJncm91cERpcmVjdGlvblZhbHVlIiwidmFsdWUiLCJzZWxlY3RlZEluZGV4IiwidGV4dCIsImdyb3VwVmlldyIsInNldEdyb3VwIiwicmVuZGVyR3JvdXAiLCJjbG9zZSIsImNvbnNvbGUiLCJsb2ciLCJyZW1vdmUiLCJzZXR0aW5ncyIsImdyb3VwQ29udHJvbGxlciIsInNob3dHcm91cExpc3QiLCJmaWx0ZXJzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNyQkE7Ozs7OztJQUVNQSxRO0FBQ0Ysd0JBQWU7QUFBQTs7QUFDWCxhQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7Ozs7NEJBRUlDLE8sRUFBUztBQUNWLGdCQUFJLEtBQUtELFFBQUwsQ0FBY0MsT0FBZCxDQUFKLEVBQTRCO0FBQ3hCLHFCQUFLRCxRQUFMLENBQWNDLE9BQWQsRUFBdUJDLE9BQXZCLENBQStCLFVBQUNDLEVBQUQ7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LE1BQVQsRUFBaUIsU0FBakIsRUFBNEIsT0FBNUIsQ0FGWDtBQUdJeUIsaUJBQVM7QUFIYixLQURNO0FBZkMsQ0FBZjs7QUF3QkFuRixPQUFPQyxPQUFQLEdBQWlCa0QsUUFBakIsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2Yzc4MGZhNTJlMWMyZjdlZjkwNCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdGlmKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xyXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn07XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBNZWRpYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFubmVscyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YiAoY2hhbm5lbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0uZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdWIgKGNoYW5uZWwsIGZuKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5uZWxzW2NoYW5uZWxdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbm5lbHNbY2hhbm5lbF0ucHVzaChmbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBtZWRpYXRvciA9IG5ldyBNZWRpYXRvcigpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtZWRpYXRvcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL01lZGlhdG9yLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NNb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb25MaXN0ID0gWydVSScsICdHTycsICdQSFAnLCAnT3RoZXInXTsgLy8gc3RyaW5nXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRGlyZWN0aW9uIChkaXJlY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdC5wdXNoKG5ldyBEaXJlY3Rpb24oZGlyZWN0aW9uTmFtZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGlvbkxpc3QgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbkxpc3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gU2V0dGluZ3NNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBHcm91cE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBkaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lOyAvLyBzdHJpbmdcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjsgLy8gc3RyaW5nXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdGluZ1Nlc3Npb24gKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhZGRUZXN0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkRmlsdGVyICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Nb2RlbC9Hcm91cE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IGdlbmVyYXRlVHBsID0gcmVxdWlyZSgnLi9nZW5lcmF0ZVRwbC5qcycpLFxyXG4gICAgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpO1xyXG5cclxuY2xhc3MgR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmdyb3VwID0gJyc7XHJcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRHcm91cCAoZ3JvdXApIHtcclxuICAgICAgICBsZXQgZ3JvdXBUaXRsZSA9IGdyb3VwLm5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JvdXAgPSBnZW5lcmF0ZVRwbChncm91cFRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJHcm91cCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3Vwc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyb3VwX3dyYXBwZXInKTtcclxuXHJcbiAgICAgICAgZ3JvdXBzQmxvY2suaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0aGlzLmdyb3VwKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRMaXN0ZW5lcnMgKCkge1xyXG4gICAgICAgIGxldCBhZGRHcm91cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZ3JvdXAtYnRuJyk7XHJcblxyXG4gICAgICAgIGFkZEdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBtZWRpYXRvci5wdWIoJ0dyb3VwOmFkZGVkJykpO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwVmlldy5qcyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlVHBsICh0aXRsZSkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImdyb3VwLXRpdGxlXCI+JHt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuXCI+Zm9ybWF0IGFkZGVkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+YDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZVRwbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L2dlbmVyYXRlVHBsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IG1lZGlhdG9yID0gcmVxdWlyZSgnLi4vLi4vTWVkaWF0b3IuanMnKTtcclxuXHJcbmNsYXNzIEdyb3VwTGlzdFZpZXcge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIC8vIHRoaXMuZGlzcGxheUdyb3VwU2VjdGlvbigpO1xyXG4gICAgICAgIHRoaXMuYWRkTGlzdGVuZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUdyb3VwU2VjdGlvbiAoKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVEaXJlY3Rpb25MaXN0VHBsIChkaXJlY3Rpb25MaXN0KSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnM7XHJcblxyXG4gICAgICAgIGRpcmVjdGlvbkxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBvcHRpb25zICs9IGA8b3B0aW9uPiR7aXRlbX08L29wdGlvbj5gO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBhZGREaXJlY3Rpb25MaXN0IChkaXJlY3Rpb25MaXN0KSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAgc2VsZWN0Jyk7XHJcblxyXG4gICAgICAgIHNlbGVjdC5pbm5lckhUTUwgPSB0aGlzLmdlbmVyYXRlRGlyZWN0aW9uTGlzdFRwbChkaXJlY3Rpb25MaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGROZXdHcm91cCAoKSB7XHJcbiAgICAvLyAgICAgdmFyIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpLFxyXG4gICAgLy8gICAgICAgICBidG5BZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWdyb3VwLWJ0bicpLFxyXG4gICAgLy8gICAgICAgICBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1ncm91cC1idG4nKTtcclxuXHJcbiAgICAvLyAgICAgYnRuQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XHJcbiAgICAvLyAgICAgfSwgZmFsc2UpO1xyXG5cclxuICAgIC8vICAgICBidG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIC8vICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICAvLyAgICAgICAgIC8vID8/P1xyXG4gICAgLy8gICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAvLyAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgIC8vICAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSwgZmFsc2UpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGFkZEdyb3VwQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1ncm91cC1idG4nKTtcclxuXHJcbiAgICAgICAgYWRkR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IG1lZGlhdG9yLnB1YigncG9wdXAtYWRkLWdyb3VwOm9wZW4nKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gR3JvdXBMaXN0VmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4uL0dyb3Vwcy9WaWV3L0dyb3VwTGlzdFZpZXcuanMnKSxcclxuICAgIFBvcHVwQWRkR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vR3JvdXBzL1ZpZXcvUG9wdXBBZGRHcm91cFZpZXcuanMnKSxcclxuICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuLi9TZXR0aW5ncy9Nb2RlbC9TZXR0aW5nc01vZGVsLmpzJyksXHJcbiAgICBtZWRpYXRvciA9IHJlcXVpcmUoJy4uL01lZGlhdG9yLmpzJyk7XHJcblxyXG5jbGFzcyBHcm91cENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IgKGdyb3Vwcykge1xyXG4gICAgICAgIHRoaXMuZ3JvdXBzID0gZ3JvdXBzO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0dyb3VwTGlzdCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwTGlzdFZpZXcgPSBuZXcgR3JvdXBMaXN0VmlldygpLFxyXG4gICAgICAgICAgICBwb3B1cEFkZEdyb3VwVmlldyA9IG5ldyBQb3B1cEFkZEdyb3VwVmlldygpLFxyXG4gICAgICAgICAgICBzZXR0aW5nc01vZGVsID0gbmV3IFNldHRpbmdzTW9kZWwoKTtcclxuXHJcbiAgICAgICAgZ3JvdXBMaXN0Vmlldy5yZW5kZXIoKTtcclxuICAgICAgICBncm91cExpc3RWaWV3LmFkZERpcmVjdGlvbkxpc3Qoc2V0dGluZ3NNb2RlbC5nZXREaXJlY3Rpb25MaXN0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1YnNjcmliZSAoKSB7XHJcbiAgICAgICAgbWVkaWF0b3Iuc3ViKCdwb3B1cC1hZGQtZ3JvdXA6b3BlbicsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWFkZC1ncm91cCcpO1xyXG5cclxuICAgICAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEdyb3VwQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9Hcm91cENvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgaW5pdCk7XHJcblxyXG5mdW5jdGlvbiBpbml0ICgpIHtcclxuICAgIGxldCBEaXJlY3Rpb25Nb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRGlyZWN0aW9uTW9kZWwuanMnKSxcclxuICAgICAgICBGaWx0ZXJNb2RlbCA9IHJlcXVpcmUoJy4vU2V0dGluZ3MvTW9kZWwvRmlsdGVyTW9kZWwuanMnKSxcclxuICAgICAgICBUZXN0TW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1Rlc3RNb2RlbC5qcycpLFxyXG4gICAgICAgIFNldHRpbmdzTW9kZWwgPSByZXF1aXJlKCcuL1NldHRpbmdzL01vZGVsL1NldHRpbmdzTW9kZWwuanMnKSxcclxuICAgICAgICBTZXR0aW5nc1ZpZXcgPSByZXF1aXJlKCcuL1NldHRpbmdzL1ZpZXcvU2V0dGluZ3NWaWV3LmpzJyksXHJcbiAgICAgICAgU2V0dGluZ3NDb250cm9sbGVyID0gcmVxdWlyZSgnLi9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMnKSxcclxuICAgICAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi9Hcm91cHMvTW9kZWwvR3JvdXBNb2RlbC5qcycpLFxyXG4gICAgICAgIEdyb3VwVmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXHJcbiAgICAgICAgR3JvdXBMaXN0VmlldyA9IHJlcXVpcmUoJy4vR3JvdXBzL1ZpZXcvR3JvdXBMaXN0Vmlldy5qcycpLFxyXG4gICAgICAgIGdlbmVyYXRlVHBsID0gcmVxdWlyZSgnLi9Hcm91cHMvVmlldy9nZW5lcmF0ZVRwbC5qcycpLFxyXG4gICAgICAgIEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpLFxyXG4gICAgICAgIEFwcCA9IHJlcXVpcmUoJy4vQXBwLmpzJyksXHJcbiAgICAgICAgdGVzdERhdGEgPSByZXF1aXJlKCcuL3Rlc3REYXRhLmpzJyksXHJcbiAgICAgICAgTWVkaWF0b3IgPSByZXF1aXJlKCcuL01lZGlhdG9yLmpzJyk7XHJcblxyXG4gICAgLy9FbnRyeSBwb2ludFxyXG4gICAgbGV0IGFwcCA9IG5ldyBBcHAoKTtcclxuXHJcbiAgICBhcHAuc2V0R3JvdXBzKHRlc3REYXRhLmdyb3Vwcyk7XHJcblxyXG4gICAgYXBwLnN0YXJ0KCk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL21haW4uanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBEaXJlY3Rpb25Nb2RlbCB7XHJcbiAgICBjb25zdHJ1Y3RvciAoZGlyZWN0aW9uTmFtZSkge1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uTmFtZSA9IGRpcmVjdGlvbk5hbWU7XHJcbiAgICAgICAgdGhpcy50ZXN0TGlzdCA9IFtdOyAvLyBbJ0VuZzEnLCAnRW5nbDInLCDigKZdXHJcbiAgICAgICAgdGhpcy5maWx0ZXJMaXN0ID0gW107ICAvLyBbJ2ZpbHRlcjEnLCAnZmlsdGVyMicsIOKApl0gXHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGVzdCAodGVzdE5hbWUpIHtcclxuICAgICAgICB0aGlzLnRlc3RMaXN0LnB1c2gobmV3IFRlc3QodGVzdE5hbWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRGaWx0ZXIgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcclxuICAgICAgICB0aGlzLmZpbHRlckxpc3QucHVzaChuZXcgRmlsdGVyKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUZXN0ICgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlRmlsdGVyICgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnQgPSBEaXJlY3Rpb25Nb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0RpcmVjdGlvbk1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgRmlsdGVyTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IgKHRlc3RzLCBhY3Rpb24sIGNvbmRpdGlvbiwgZ3JhZGUpIHtcclxuICAgICAgICB0aGlzLnRlc3RzID0gdGVzdHM7IC8vIGFycmF5XHJcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247IC8vIHN0cmluZ1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uOyAvLyBzdHJpbmdcclxuICAgICAgICB0aGlzLmdyYWRlID0gZ3JhZGU7IC8vIG51bWJlclxyXG4gICAgfVxyXG5cclxuLy8gYWRkVGVzdCwgY2hhbmdlQWN0aW9uLCBjaGFuZ2VDb25kaXRpb24sIGNoYW5nZUdyYWRlXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnQgPSBGaWx0ZXJNb2RlbDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL1NldHRpbmdzL01vZGVsL0ZpbHRlck1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgVGVzdE1vZGVsIHtcclxuICAgIGNvbnN0cnVjdG9yIChuYW1lLCBtYXhHcmFkZSwgZ3JhZGUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIC8vIHRoaXMubWF4R3JhZGUgPSBtYXhHcmFkZTtcclxuICAgICAgICAvLyB0aGlzLmdyYWRlID0gZ3JhZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkUmVzdWx0cyAoKSB7XHJcblxyXG4gICAgLy8gfSAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnQgPSBUZXN0TW9kZWw7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvTW9kZWwvVGVzdE1vZGVsLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY2xhc3MgU2V0dGluZ3NWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0ID0gU2V0dGluZ3NWaWV3O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvU2V0dGluZ3MvVmlldy9TZXR0aW5nc1ZpZXcuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jbGFzcyBTZXR0aW5nc0NvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnQgPSBTZXR0aW5nc0NvbnRyb2xsZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcHJvamVjdC9qcy9TZXR0aW5ncy9TZXR0aW5nc0NvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5sZXQgbWVkaWF0b3IgPSByZXF1aXJlKCcuLi8uLi9NZWRpYXRvci5qcycpLFxyXG4gICAgR3JvdXBWaWV3ID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL1ZpZXcvR3JvdXBWaWV3LmpzJyksXHJcbiAgICBHcm91cE1vZGVsID0gcmVxdWlyZSgnLi4vLi4vR3JvdXBzL01vZGVsL0dyb3VwTW9kZWwuanMnKTtcclxuXHJcbmNsYXNzIFBvcHVwQWRkR3JvdXBWaWV3IHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmFkZExpc3RlbmVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgbGV0IGNsb3NlR3JvdXBCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtZ3JvdXAtYnRuJyk7XHJcblxyXG4gICAgICAgIG1lZGlhdG9yLnN1YignZ3JvdXA6YWRkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1hZGQtZ3JvdXAnKSxcclxuICAgICAgICAgICAgICAgIGdyb3VwTmFtZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZ3JvdXBfbmFtZScpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWdyb3VwX2RpcmVjdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBOYW1lVGV4dCA9ICcnLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25WYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAvLyDQodC+0LHQuNGA0LDQtdC8INGC0LXQutGB0YIg0YEgaW5wdXRcclxuICAgICAgICAgICAgZ3JvdXBOYW1lVGV4dCA9IGdyb3VwTmFtZUVsZW1lbnQudmFsdWU7XHJcbiAgICAgICAgICAgIC8vINCh0L7QsdC40YDQsNC10Lwg0LfQvdCw0YfQtdC90LjQtSDRgSBzZWxlY3RcclxuICAgICAgICAgICAgZ3JvdXBEaXJlY3Rpb25WYWx1ZSA9IGdyb3VwRGlyZWN0aW9uRWxlbWVudC5vcHRpb25zW2dyb3VwRGlyZWN0aW9uRWxlbWVudC5zZWxlY3RlZEluZGV4XS50ZXh0O1xyXG4gICAgICAgICAgICAvLyDQodC+0LfQtNCw0LXQvCDQvdC+0LLRi9C5INC+0LHRitC10LrRgiDQs9GA0YPQv9C/0YtcclxuICAgICAgICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwTW9kZWwoZ3JvdXBOYW1lVGV4dCwgZ3JvdXBEaXJlY3Rpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgIC8vINC/0L7RgtC+0Lwg0YHQvtC30LTQsNC10LwgdmlldyDQs9GA0YPQv9C/0YtcclxuICAgICAgICAgICAgbGV0IGdyb3VwVmlldyA9IG5ldyBHcm91cFZpZXcoKTtcclxuICAgICAgICAgICAgLy8gcmVuZGVyXHJcbiAgICAgICAgICAgIGdyb3VwVmlldy5zZXRHcm91cChncm91cCk7XHJcbiAgICAgICAgICAgIGdyb3VwVmlldy5yZW5kZXJHcm91cCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNsb3NlR3JvdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHttZWRpYXRvci5wdWIoJ2dyb3VwOmFkZGVkJyk7IGNvbnNvbGUubG9nKCdjbG9zZWJ0bicpfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UgKCkge1xyXG4gICAgICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtYWRkLWdyb3VwJyk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG5cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cEFkZEdyb3VwVmlldztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL0dyb3Vwcy9WaWV3L1BvcHVwQWRkR3JvdXBWaWV3LmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IEdyb3VwQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vR3JvdXBzL0dyb3VwQ29udHJvbGxlci5qcycpO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgbGV0IGdyb3VwQ29udHJvbGxlciA9IG5ldyBHcm91cENvbnRyb2xsZXIodGhpcy5ncm91cHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdyb3VwQ29udHJvbGxlci5zaG93R3JvdXBMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0R3JvdXBzIChncm91cHMpIHtcclxuICAgICAgICB0aGlzLmdyb3VwcyA9IGdyb3VwcztcclxuICAgIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Byb2plY3QvanMvQXBwLmpzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxubGV0IHRlc3REYXRhID0ge1xyXG4gICAgZ3JvdXBzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXHJcbiAgICAgICAgICAgIG5hbWU6ICdkcC0xMTctanMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ2dvJyxcclxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyMy1nbydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAncGhwJyxcclxuICAgICAgICAgICAgbmFtZTogJ2RwLTEyNy1waHAnXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIHNldHRpbmdzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246ICd1aScsXHJcbiAgICAgICAgICAgIHRlc3RzOiBbJ0VuZzEnLCAnRW5nMicsICdKUyBDb3JlJywgJ0Vzc2F5J10sXHJcbiAgICAgICAgICAgIGZpbHRlcnM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB0ZXN0RGF0YTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wcm9qZWN0L2pzL3Rlc3REYXRhLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==