'use strict';

let GroupController = require('./Groups/GroupController.js'),
    SettingsController = require('./Settings/SettingsController.js'),
    testData = require('./testData.js');

class App {
    constructor () {
        this.groups = [];
        this.directions = testData.directions;
    }

    start () {
        let groupController = new GroupController(this.groups),
            settingsController = new SettingsController(this.directions);
        
        groupController.showGroupList();
    }

    setGroups (groups) {
        this.groups = groups;
    }
}

module.exports = App;
