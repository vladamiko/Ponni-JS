'use strict';

let GroupView = require('../Groups/View/GroupView.js'),
    mediator = require('../Mediator.js');

class GroupController {
    constructor (groups) {
        this.groups = groups;
        this.subscribe();
    }

    showAllGroups () {
        this.groups.forEach((group) => {
            let groupView = new GroupView();

            groupView.setGroup(group);
            groupView.renderGroup();
        });
    }

    subscribe () {
        mediator.sub('Group:added', ()=> console.log('openPopup'));
    }
}

module.exports = GroupController;