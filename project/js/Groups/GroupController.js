'use strict';

let GroupView = require('../Groups/View/GroupView.js');

class GroupController {
    constructor (groups) {
        this.groups = groups;
    }

    showAllGroups () {
        this.groups.forEach((group) => {
            let groupView = new GroupView();

            groupView.setGroup(group);
            groupView.renderGroup();
        });
    }
}

module.exports = GroupController;