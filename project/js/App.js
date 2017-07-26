'use strict';

let GroupController = require('./Groups/GroupController.js'),
    DaysController = require('./Days/DaysController.js'),
    SettingsModel = require('./Settings/Model/SettingsModel.js'),
    SettingsController = require('./Settings/SettingsController.js'),
    TestController = require('./Tests/TestController.js'),
    FilterController = require('./Filters/FilterController.js'),
    mediator = require('./Mediator.js');

class App {
    constructor (groupList) {
        this.groupList = groupList;
        this.settingsModel = new SettingsModel();

        this.subscribe();
    }

    start () {
        // settings - мы передаем в GroupController
        let groupController = new GroupController(this.groupList, this.settingsModel),
            settingsController = new SettingsController(this.settingsModel.directions, this.settingsModel.getDirectionNames()),
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
