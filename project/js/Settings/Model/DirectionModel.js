'use strict';

class DirectionModel {
    constructor (name) {
        this.name = name;
        this.tests = [];
        this.filters = [];
    }

    // addTest (testName) {
    //     this.tests.push(new Test(testName));
    // }

    // addFilter (tests, action, condition, grade) {
    //     this.filters.push(new Filter(tests, action, condition, grade));
    // }
}

module.exports = DirectionModel;