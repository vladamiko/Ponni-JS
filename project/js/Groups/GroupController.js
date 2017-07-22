'use strict';

let GroupListView = require('../Groups/View/GroupListView.js'),
    GroupView = require('../Groups/View/GroupView.js'),
    GroupModel = require('../Groups/Model/GroupModel.js'),
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
        let groupListView = new GroupListView();

        groupListView.render();
    }

    subscribe () {
        mediator.sub('groupPopup:open', () => {
            let settingsModel = new SettingsModel(),
                popupAddGroupView = new PopupAddGroupView();

            popupAddGroupView.setDirectionList(settingsModel.getDirectionList());
            popupAddGroupView.renderPopup();
        });

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