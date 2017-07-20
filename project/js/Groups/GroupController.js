'use strict';

let GroupView = require('../Groups/View/GroupView.js'),
    GroupListView = require('../Groups/View/GroupListView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class GroupController {
    constructor (groups) {
        this.groups = groups;
        this.subscribe();
    }

    showGroupList () {
        let groupListView = new GroupListView(),
            settingsModel = new SettingsModel();

        groupListView.render();
        groupListView.addDirectionList(settingsModel.getDirectionList());
    }

    subscribe () {
        mediator.sub('Group:added', ()=> {
            console.log('openPopup');
            let modal = document.querySelector('#modal-add-group');

            modal.classList.add('visible');
        });
    }
}

module.exports = GroupController;