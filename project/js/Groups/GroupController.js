'use strict';

let GroupView = require('../Groups/View/GroupView.js'),
    GroupListView = require('../Groups/View/GroupListView.js'),
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

    // showAllGroups () {
    //     this.groups.forEach((group) => {
    //         let groupView = new GroupView();

    //         groupView.setGroup(group);
    //         groupView.renderGroup();
    //     });
    // }

    subscribe () {
        mediator.sub('popup:open', ()=> {
            let modal = document.querySelector('#modal-add-group');

            modal.classList.add('visible');
        });

        // Этот метод должен подписываться на событие при создании view popup(аппа)
        // а внутри его view должен навешиваться слушатель на closeBtn для закрытия popup(аппа и создания группы)
        mediator.sub('group:added', ()=> {
            let modal = document.querySelector('#modal-add-group');

            modal.classList.remove('visible');
        });
    }
}

module.exports = GroupController;