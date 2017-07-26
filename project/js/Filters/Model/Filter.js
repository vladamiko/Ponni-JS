'use strict';

class Filter {
    constructor (tests, action, condition, grade) {
        this.tests = tests;
        this.actionList = ['average', 'max', 'min', 'equal'];
        this.conditionList = ['>', '>=', '=', '<=', '<'];
        this.grade = grade;
    }
}

module.exports = Filter;