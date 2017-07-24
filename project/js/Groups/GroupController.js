'use strict';

let GroupListView = require('../Groups/View/GroupListView.js'),
    GroupView = require('../Groups/View/GroupView.js'),
    GroupModel = require('../Groups/Model/GroupModel.js'),
    PopupAddGroupView = require('../Groups/View/PopupAddGroupView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class GroupController {
    constructor (groups) {
        this.groups = groups;
        this.subscribeOpen();
    }

    showGroupList () {
        let groupListView = new GroupListView();

        groupListView.render();
    }

    subscribeOpen () {
        mediator.sub('groupPopup:open', () => {
            this.subscribeAddGroup();
        });
    }

    subscribeAddGroup () {
        mediator.sub('group:added', () => {
            let popupAddGroupView = new PopupAddGroupView(),
                groupView = new GroupView(),
                groupData = {},
                group = {};

            groupData = popupAddGroupView.generateData();

            group = new GroupModel(groupData.name, groupData.direction);

            groupView.setGroup(group);

            popupAddGroupView.close();

            groupView.renderGroup();
        });
    }
}

module.exports = GroupController;