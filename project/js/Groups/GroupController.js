'use strict';

let GroupListView = require('../Groups/View/GroupListView.js'),
    GroupView = require('../Groups/View/GroupView.js'),
    PopupFormatView = require('./View/PopupFormatView.js'),
    GroupModel = require('../Groups/Model/GroupModel.js'),
    PopupAddGroupView = require('../Groups/View/PopupAddGroupView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class GroupController {
    constructor (groupList, groupDirection) {
        this.groupList = groupList;
        this.groupDirection = groupDirection;
        console.log(this.groupDirection);
        this.subscribe();
    }

    showGroupList () {
        let groupListView = new GroupListView(this.groupList, this.groupDirection);

        groupListView.render();
    }

    subscribe () {
        mediator.sub('groupPopup:open', () => {
            let popupAddGroupView = new PopupAddGroupView();

            popupAddGroupView.renderPopup();
        });

        mediator.sub('group:created', (group) => {
            let groupListView = new GroupListView();

            groupListView.appendGroup(group);
        });

        mediator.sub('group:formatted', (group) => {
            let popupFormatView = new PopupFormatView(group);

            popupFormatView.render();
        });
    }
}

module.exports = GroupController;