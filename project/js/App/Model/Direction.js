'use strict';

class Direction {
    constructor (directionName) {
        this.directionName = directionName;
        this.testList = []; // ['Eng1', 'Engl2', …]
        this.filterList = [];  // ['filter1', 'filter2', …] 
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
module.export = Direction;