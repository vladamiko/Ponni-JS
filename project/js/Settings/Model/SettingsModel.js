'use strict';

class SettingsModel {
    constructor () {
        this.directionList = []; // string
    }

    addDirection (directionName) {
        this.testList.push(new Direction(directionName));
    }
}

module.export = SettingsModel;