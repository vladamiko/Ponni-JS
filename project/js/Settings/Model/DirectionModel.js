'use strict';

class DirectionModel {
    constructor (directionName) {
        this.directionName = directionName;
        this.testList = [];
        this.filterList = [];
    }

    getDirectionTest (direction) {
        let obj = {
            UI: () => {
                this.testList = ['English 1', 'English 2', 'English 3', 'English 4', 'JS Core', 'Essay'];
            },
            GO: () => {
                this.testList = ['English 1', 'English 2', 'English 3', 'English 4', 'GO Core', 'Essay'];
            },
            PHP: () => {
                this.testList = ['English 1', 'English 2', 'English 3', 'English 4', 'PHP Core', 'Essay'];
            }
        }

        return obj[direction]();
    }

    getDirectionFilter (direction) {
        let obj = {
            UI: () => {
                this.filterList = [{
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
            GO: () => {
                this.filterList = [{
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
            PHP: () => {
                this.filterList = [{
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
        }

        return obj[direction]();
    }

    addTest (testName) {
        this.testList.push(new Test(testName));
    }

    addFilter (tests, action, condition, grade) {
        this.filterList.push(new Filter(tests, action, condition, grade));
    }

    deleteTest () {

    }

    deleteFilter () {

    }
}

module.export = DirectionModel;