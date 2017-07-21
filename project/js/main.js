'use strict';

document.addEventListener('DOMContentLoaded', init);

function init () {
    let DirectionModel = require('./Settings/Model/DirectionModel.js'),
        FilterModel = require('./Settings/Model/FilterModel.js'),
        TestModel = require('./Settings/Model/TestModel.js'),
        SettingsModel = require('./Settings/Model/SettingsModel.js'),
        SettingsView = require('./Settings/View/SettingsView.js'),
        SettingsController = require('./Settings/SettingsController.js'),
        GroupModel = require('./Groups/Model/GroupModel.js'),
        GroupView = require('./Groups/View/GroupView.js'),
        GroupListView = require('./Groups/View/GroupListView.js'),
        generateTpl = require('./Groups/View/templates/generateGroupTpl.js'),
        GroupController = require('./Groups/GroupController.js'),
        App = require('./App.js'),
        testData = require('./testData.js'),
        Mediator = require('./Mediator.js');

    //Entry point
    let app = new App();

    app.setGroups(testData.groups);

    app.start();
}