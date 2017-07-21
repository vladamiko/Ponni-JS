'use strict';

let GroupListView = require('../Groups/View/GroupListView.js'),
    PopupAddGroupView = require('../Groups/View/PopupAddGroupView.js'),
    PopupAddSettingView = require('../Settings/View/PopupAddSettingView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class GroupController {
    constructor (groups) {
        this.groups = groups;
        this.subscribe();
    }

    showGroupList () {
        let groupListView = new GroupListView(),
            popupAddGroupView = new PopupAddGroupView(),
            settingsModel = new SettingsModel();

        groupListView.render();
        groupListView.addDirectionList(settingsModel.getDirectionList());
    }

    subscribe () {
        mediator.sub('popup-add-group:open', () => {
            let modal = document.querySelector('#modal-add-group');

            modal.classList.add('visible');
        });
    }
}

module.exports = GroupController;