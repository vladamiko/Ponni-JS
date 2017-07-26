'use strict';

let GroupController = require('./Groups/GroupController.js'),
    SettingsModel = require('./Settings/Model/SettingsModel.js'),
    SettingsController = require('./Settings/SettingsController.js'),
    mediator = require('./Mediator.js');

class App {
    constructor (groupList) {
        this.groupList = groupList;
        this.settingsModel = new SettingsModel();

        this.subscribe();
    }

    start () {
        let groupController = new GroupController(this.groupList),
            settingsController = new SettingsController(this.settingsModel.directions);
        
        groupController.showGroupList();
    }

    subscribe () {
        mediator.sub('group:created', (group) => {
            this.addGroup(group);
        });
    }

    addGroup (group) {
        this.groupList.push(group);
    }
}

module.exports = App;
