'use strict';

class Filter {
    constructor (name, tests, action, condition, grade) {
    	this.name = name;
        this.tests = tests;
        this.actionList = ['average', 'max', 'min', 'equal'];
        this.conditionList = ['>', '>=', '=', '<=', '<'];
        this.grade = grade;
    }
}

module.exports = Filter;