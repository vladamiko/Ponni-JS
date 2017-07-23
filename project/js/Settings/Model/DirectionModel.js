'use strict';

class DirectionModel {
    constructor (directionName) {
        this.directionName = directionName;
        this.testList = [];
        this.filterList = [];
    }

    getDirectionTest (directionName) {
        let obj = {
            UI: ['Eng1', 'Eng2', 'Eng3', 'Eng4', 'Core', 'Essay'],
            GO: ['Eng1', 'Eng2', 'Eng3', 'Eng4', 'Core', 'Essay'],
            PHP: ['Eng1', 'Eng2', 'Eng3', 'Eng4', 'Core', 'Essay']
        }

        return obj[directionName];
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