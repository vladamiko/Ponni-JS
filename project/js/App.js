'use strict';

let GroupController = require('./Groups/GroupController.js'),
    DaysController = require('./Days/DaysController.js'),
    Settings = require('./Settings/Model/Settings.js'),
    SettingsController = require('./Settings/SettingsController.js'),
    TestController = require('./Tests/TestController.js'),
    FilterController = require('./Filters/FilterController.js'),
    mediator = require('./Mediator.js');

class App {
    constructor (groupList) {
        this.groupList = groupList;
        this.settings = new Settings();

        this.subscribe();
    }

    start () {
        let groupController = new GroupController(this.groupList),
            settingsController = new SettingsController(this.settings.directions, this.settings.getDirectionNames()),
            testController = new TestController(this.groupList),
            filterController = new FilterController(this.groupList),
            daysController = new DaysController();
        
        groupController.showGroupList();
        testController.showTestList();
        filterController.showFilterList();
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
