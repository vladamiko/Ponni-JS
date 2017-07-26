'use strict';

let Test = require('../../Tests/Model/Test.js'),
    Filter = require('../../Filters/Model/Filter.js');

class DirectionModel {
    constructor (name) {
        this.name = name;
        this.testList = [];
        this.filterList = [];
    }

    addTest (testName, grade) {
        this.testList.push(new Test(testName, grade));
    }

    addFilter (testList, action, condition, grade) {
        this.filterList.push(new Filter(testList, action, condition, grade));
    }
}

module.exports = DirectionModel;