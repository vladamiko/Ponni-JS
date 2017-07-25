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
        let groupListView = new GroupListView();

        groupListView.render();
    }

    subscribe () {
        mediator.sub('groupPopup:open', () => {
            let popupAddGroupView = new PopupAddGroupView();
        });

        mediator.sub('group:created', () => {
            let groupView = new GroupView();

            groupView.renderGroup();
            // popupAddGroupView - Должна генерироваться при создании addGroup
            // Создаем объект группы в groupPopup: open
            // и потом передаем в groupPopup сreated
            // GroupList View должен иметь в себе метод создания GroupView
            // И она должна уметь рендерить группу
            // group:created
            // Это должно быть все в одном контроллере
            // groupList.appendView;
            // let groupView = new GroupView(),
            //     groupData = {},
            //     group = {};
            //
            // groupView.setGroup(group);
            //  // PopUp - сам себя закроет
            // PopupAddGroupView.close();
        });
    }
}

module.exports = GroupController;