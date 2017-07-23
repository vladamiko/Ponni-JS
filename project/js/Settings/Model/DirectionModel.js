'use strict';

class DirectionModel {
    constructor (directionName) {
        this.directionName = directionName;
        this.testList = [];
        this.filterList = [];
    }

    getDirectionTest (test) {
        let obj = {
            UI: () => {
                this.testList = ['Eng1', 'Eng2', 'Eng3', 'Eng4', 'Core', 'Essay'];
            },
            GO: () => {
                this.testList = ['Eng1', 'Eng2', 'Eng3', 'Eng4', 'Core', 'Essay'];
            },
            PHP: () => {
                this.testList = ['Eng1', 'Eng2', 'Eng3', 'Eng4', 'Core', 'Essay'];
            }
        }

        return obj[test]();
    }

    getDirectionFilter (direction) {
        let obj = {
            UI: () => {
                this.filterList = [{
                    name: 'English 1',
                    action: action;
                    condition: condition;
                    grade: 60%;
                }, {
                    name: 'English 2',
                    action: action;
                    condition: condition;
                    grade: 60%;
                }, {
                    name: 'English 3',
                    action: action;
                    condition: condition;
                    grade: 60%;
                }, {
                    name: 'English 4',
                    action: action;
                    condition: condition;
                    grade: 60%;
                }, {
                    name: 'Core',
                    action: action;
                    condition: condition;
                    grade: 60%;
                }, {
                    name: 'Essay',
                    action: action;
                    condition: condition;
                    grade: 60%;
                }];
            },
            GO: () => {
                this.filterList = [];
            },
            PHP: () => {
                this.filterList = [];
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