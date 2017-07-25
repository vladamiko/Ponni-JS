'use strict';

let GroupController = require('./Groups/GroupController.js'),
    SettingsController = require('./Settings/SettingsController.js'),
    testData = require('./testData.js'),
    mediator = require('./Mediator.js');

class App {
    constructor () {
        this.groups = [];
        this.directions = testData.directions;

        this.subscribe();
    }

    start () {
        let groupController = new GroupController(this.groups),
            settingsController = new SettingsController(this.directions);
        
        groupController.showGroupList();
    }

    subscribe () {
        mediator.sub('group:created', (group) => {
            this.addGroup(group);
        });
    }

    addGroup (group) {
        this.groups.push(group);
    }
}

module.exports = App;
