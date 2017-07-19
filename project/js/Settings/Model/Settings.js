'use strict';

module.export = Settings;

class Settings {
    constructor () {
        this.directionList = []; // string
    }

    addDirection (directionName) {
        this.testList.push(new Direction(directionName));
    }
}