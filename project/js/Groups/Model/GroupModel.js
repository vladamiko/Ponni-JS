'use strict';

class GroupModel {
    constructor (name, direction) {
        this.name = name;
        this.direction = direction;
    }

    setTestList (testList) {
        this.testList = testList;
    }

    setFilterList (filterList) {
        this.filterList = filterList;
    }

    addTest (test) {
        this.testList.push(test);
    }
}

module.exports = GroupModel;