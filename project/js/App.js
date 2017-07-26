'use strict';

let GroupController = require('./Groups/GroupController.js'),
    DaysController = require('./Days/DaysController.js'),
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
        // settings - мы передаем в GroupController
        let groupController = new GroupController(this.groupList),
            settingsController = new SettingsController(this.settingsModel.directions, this.settingsModel.getDirectionNames()),
            daysController = new DaysController();
        
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
