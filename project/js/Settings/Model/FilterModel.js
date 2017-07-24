'use strict';

class FilterModel {
    constructor (tests, action, condition, grade) {
        this.tests = tests;
        this.actionList = ['average', 'max', 'min', 'equal'];
        this.conditionList = ['>', '>=', '=', '<=', '<'];
        this.grade = grade;
    }

// addTest, changeAction, changeCondition, changeGrade
}

module.export = FilterModel;