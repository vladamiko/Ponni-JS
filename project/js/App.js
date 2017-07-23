'use strict';

let GroupController = require('./Groups/GroupController.js'),
    SettingsController = require('./Settings/SettingsController.js');

class App {
    constructor () {
        this.groups = [];
        this.settings = [];
    }

    start () {
        let groupController = new GroupController(this.groups),
            settingsController = new SettingsController(this.settings);
        
        groupController.showGroupList();
    }

    setGroups (groups) {
        this.groups = groups;
    }
}

module.exports = App;
