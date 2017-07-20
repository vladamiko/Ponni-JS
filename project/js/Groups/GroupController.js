'use strict';

let GroupView = require('../Groups/View/GroupView.js'),
    GroupListView = require('../Groups/View/GroupListView.js'),
    GroupModel = require('../Groups/Model/GroupModel.js'),
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
        mediator.sub('popup:open', () => {
            let modal = document.querySelector('#modal-add-group');

            modal.classList.add('visible');
        });

        // 1) Этот метод должен подписываться на событие при создании viewPopup(аппа)
        // 2) Внутри viewPopup должен навешиваться слушатель на closeBtn для закрытия popup(аппа и создания группы)
        // 3) Функцию описанную ниже можно разделить:
        // на 2 (1. закрытия модального окна, 2. Собирание данных с input и select);
        mediator.sub('group:added', () => {
            let modal = document.querySelector('#modal-add-group'),
                groupNameElement = document.querySelector('.modal-group_name'),
                groupDirectionElement = document.querySelector('.modal-group_direction'),
                groupNameText = '',
                groupDirectionValue = '';
            // Закрываем модальное окно
            modal.classList.remove('visible');
            // Собираем текст с input
            groupNameText = groupNameElement.value;
            // Собираем значение с select
            groupDirectionValue = groupDirectionElement.options[groupDirectionElement.selectedIndex].text;
            // Создаем новый объект группы
            let group = new GroupModel(groupNameText, groupDirectionValue);
            // потом создаем view группы
            let groupView = new GroupView();
            // render
            groupView.setGroup(group);
            groupView.renderGroup();
        });
    }
}

module.exports = GroupController;