'use strict';

class Settings {
    constructor () {
        this.directionList = []; // string
    }

    addDirection (directionName) {
        this.testList.push(new Direction(directionName));
    }
}
module.export = Settings;