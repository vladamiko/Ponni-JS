'use strict';

class DirectionModel {
    constructor (directionName) {
        this.directionName = directionName;
        this.testList = [];
        this.filterList = [];
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