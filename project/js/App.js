'use strict';

let GroupController = require('./Groups/GroupController.js');

class App {
    constructor () {
        this.groups = [];
        this.settings = [];
    }

    start () {
        let groupController = new GroupController(this.groups);
        
        // groupController.showAllGroups();
    }

    setGroups (groups) {
        this.groups = groups;
    }
}

module.exports = App;
