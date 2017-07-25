'use strict';

let GroupListView = require('../Groups/View/GroupListView.js'),
    GroupView = require('../Groups/View/GroupView.js'),
    GroupModel = require('../Groups/Model/GroupModel.js'),
    PopupAddGroupView = require('../Groups/View/PopupAddGroupView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class GroupController {
    constructor (groupList) {
        this.groupList = groupList;
        this.subscribe();
    }

    showGroupList () {
        let groupListView = new GroupListView(this.groupList);

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
    }
}

module.exports = GroupController;