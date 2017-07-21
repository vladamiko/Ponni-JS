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
        let groupListView = new GroupListView();

        groupListView.render();
    }

    subscribe () {
        mediator.sub('groupPopup:open', () => {
            console.log('open');
            
            let popupAddGroupView = new PopupAddGroupView(),
                settingsModel = new SettingsModel();
            
            popupAddGroupView.renderPopup();
            popupAddGroupView.addDirectionList(settingsModel.getDirectionList());
        });

        mediator.sub('group:added', () => {
            let groupNameElem = document.querySelector('.modal-group_name'),
                groupDirectionElem = document.querySelector('.modal-group_direction'),
                groupDirectionValue = '',
                groupNameText = '',
                groupView = {},
                group = {};

            groupDirectionValue = groupDirectionElem.options[groupDirectionElem.selectedIndex].text;
            groupNameText = groupNameElem.value;

            group = new GroupModel(groupNameText, groupDirectionValue);

            groupView.setGroup(group);
            groupView.renderGroup();
        });
    }
}

module.exports = GroupController;