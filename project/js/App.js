'use strict';

let GroupController = require('./Groups/GroupController.js'),
    SettingsController = require('./Settings/SettingsController.js'),
    mediator = require('./Mediator.js');

class App {
    constructor (groupList) {
        this.groupList = groupList;
        // this.directions = groupList.directions;
        this.subscribe();
    }

    start () {
        let groupController = new GroupController(this.groupList);
            // settingsController = new SettingsController(this.directions);
        
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
