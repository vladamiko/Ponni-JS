'use strict';

class Filter {
    constructor (name, tests, action, condition, grade) {
    	this.name = name;
        this.tests = tests;
        this.action = action;
        this.condition = condition;
        this.grade = grade;
    }
}

Filter.ACTION_LIST = ['average', 'max', 'min', 'equal'];
Filter.CONDITION_LIST = ['>', '>=', '=', '<=', '<'];

module.exports = Filter;