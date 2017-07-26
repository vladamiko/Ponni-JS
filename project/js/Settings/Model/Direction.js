'use strict';

let Test = require('../../Tests/Model/Test.js'),
    Filter = require('../../Filters/Model/Filter.js');

class Direction {
    constructor (name) {
        this.name = name;
        this.testList = [];
        this.filterList = [];
    }

    addTest (testName) {
        let grade = 0;
        this.testList.push(new Test(testName, grade));
    }

    addFilter (name, testList, action, condition, grade) {
        this.filterList.push(new Filter(name, testList, action, condition, grade));
    }
}

module.exports = Direction;