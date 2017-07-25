'use strict';

document.addEventListener('DOMContentLoaded', init);

function init () {
    let DirectionModel = require('./Settings/Model/DirectionModel.js'),
        Filter = require('./Filters/Model/Filter.js'),
        Test = require('./Tests/Model/Test.js'),
        SettingsModel = require('./Settings/Model/SettingsModel.js'),
        SettingsController = require('./Settings/SettingsController.js'),
        GroupModel = require('./Groups/Model/GroupModel.js'),
        GroupView = require('./Groups/View/GroupView.js'),
        GroupListView = require('./Groups/View/GroupListView.js'),
        groupListTpl = require('./Groups/View/tpl/groupListTpl.js'),
        PopupAddGroupView = require('./Groups/View/PopupAddGroupView.js'),
        PopupSettingsView = require('./Settings/View/PopupSettingsView.js'),
        PopupAddFilterView = require('./Filters/View/PopupAddFilterView.js'),
        PopupAddDirectionView = require('./Settings/View/PopupAddDirectionView.js'),
        PopupAddTestView = require('./Tests/View/PopupAddTestView.js'),
        groupPopupTpl = require('./Groups/View/tpl/groupPopupTpl.js'),
        groupTpl = require('./Groups/View/tpl/groupTpl.js'),
        settingsPopupTpl = require('./Settings/View/tpl/settingsPopupTpl.js'),
        GroupController = require('./Groups/GroupController.js'),
        App = require('./App.js'),
        Mediator = require('./Mediator.js');

    let app = new App();
    
    app.start();
}