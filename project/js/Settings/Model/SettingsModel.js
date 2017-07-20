'use strict';

class SettingsModel {
    constructor () {
        this.directionList = ['UI', 'GO', 'PHP', 'Other']; // string
    }

    addDirection (directionName) {
        this.testList.push(new Direction(directionName));
    }

    getDirectionList () {
        return this.directionList;
    }
}

module.exports = SettingsModel;