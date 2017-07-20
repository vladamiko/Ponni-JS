'use strict';

document.addEventListener('DOMContentLoaded', init);

function init () {
    let Direction = require('./App/Model/Direction.js'),
        Filter = require('./App/Model/Filter.js'),
        Test = require('./App/Model/Test.js'),
        AppView = require('./App/View/AppView.js'),
        AppController = require('./App/AppController.js'),
        App = require('./App/Model/App.js'),
        Group = require('./Groups/Model/Group.js'),
        GroupView = require('./Groups/View/GroupView.js'),
        GroupController = require('./Groups/GroupController.js'),
        Settings = require('./Settings/Model/Settings.js'),
        SettingsView = require('./Settings/View/SettingsView.js'),
        SettingsController = require('./Settings/SettingsController.js');


    //Entry point
    let testData = {
        groups: [
            {
                direction: 'ui',
                name: 'dp-117-js'
            }, {
                direction: 'go',
                name: 'dp-123-go'
            }, {
                direction: 'php',
                name: 'dp-127-php'
            }
        ],
        settings: [
            {
                direction: 'ui',
                tests: ['Eng1', 'Eng2', 'JS Core', 'Essay'],
                filters: []
            }
        ]
    };

    let app = new App();

    function launchTestData () {
        app.setGroups(testData.groups);
    }
    launchTestData();

    app.start();
}



