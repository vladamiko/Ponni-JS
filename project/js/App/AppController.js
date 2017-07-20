'use strict';

let GroupView = require('../Groups/View/GroupView.js');

class AppController {
    constructor (groups) {
        this.groups = groups;
        this.showAllGroups();
    }

    showAllGroups () {
        this.groups.forEach((group) => {
            let groupView = new GroupView();

            groupView.setGroup(group);
            groupView.renderGroup();
        })
    }
}

module.exports = AppController;