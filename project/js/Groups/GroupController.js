'use strict';

let GroupListView = require('../Groups/View/GroupListView.js'),
    GroupView = require('../Groups/View/GroupView.js'),
    PopupFormatView = require('./View/PopupFormatView.js'),
    GroupModel = require('../Groups/Model/GroupModel.js'),
    PopupAddGroupView = require('../Groups/View/PopupAddGroupView.js'),
    PopupAddTestView = require('../Groups/View/PopupAddTestView.js'),
    Settings = require('../Settings/Model/Settings.js'),
    mediator = require('../Mediator.js');

class GroupController {
    constructor (groupList, directionList) {
        this.groupList = groupList;
        this.directionList = directionList;
        this.subscribe();
    }

    showGroupList () {
        let groupListView = new GroupListView(this.groupList);

        groupListView.render();
    }

    subscribe () {
        mediator.sub('groupPopup:open', () => {
            let popupAddGroupView = new PopupAddGroupView(this.directionList);

            popupAddGroupView.renderPopup();
        });

        mediator.sub('group:created', (group) => {
            let groupListView = new GroupListView();

            groupListView.appendGroup(group);
        });

        mediator.sub('formatAdded:open', (group) => {
            let popupFormatView = new PopupFormatView(group);

            popupFormatView.setGroup(group);
            popupFormatView.render();
        });

        mediator.sub('save:test', (group) => {
            let groupView = new GroupView();

            groupView.setGroup(group);
        });

        mediator.sub('group:active', (group) => {
            this.groupList.forEach((groupElement) => {
                groupElement.deactivate();
            });
            group.activate();
        });

        mediator.sub('popupTest:open', () => {
            let popupAddTestView = new PopupAddTestView();

            popupAddTestView.render();
        });
    }
}

module.exports = GroupController;