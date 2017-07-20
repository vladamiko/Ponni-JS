'use strict';

let GroupView = require('../Groups/View/GroupView.js'),
    GroupListView = require('../Groups/View/GroupListView.js'),
    mediator = require('../Mediator.js');

class GroupController {
    constructor (groups) {
        this.groups = groups;
        this.subscribe();
        this.showGroupList();
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
        mediator.sub('Group:added', ()=> {
            console.log('openPopup');
            let modal = document.querySelector('#modal-add-group');

            modal.classList.add('visible');
        });
    }
}

module.exports = GroupController;