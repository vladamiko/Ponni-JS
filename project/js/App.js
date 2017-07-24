'use strict';

let GroupController = require('./Groups/GroupController.js'),
    SettingsController = require('./Settings/SettingsController.js'),
    testData = require('./testData.js'),
    mediator = require('./Mediator.js');

class App {
    constructor () {
        this.groups = [];
        this.settings = testData.settings;
        this.subscribe();
    }

    start () {
        let groupController = new GroupController(this.groups),
            settingsController = new SettingsController(this.settings);
        
        groupController.showGroupList();
    }

    addGroup (group) {
        this.groups.push(group);
    }

    subscribe () {
        mediator.sub('group:created', (group) => {
            this.groups.push(group);
        });
    }
}

module.exports = App;
