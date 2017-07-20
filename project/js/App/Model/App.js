'use strict';

let AppView = require('../View/AppView.js'),
    AppController = require('../AppController.js');

class App {
    constructor () {
        this.groups = [];
        this.settings = [];
    }
    start () {
        let appView = new AppView(),
            appController = new AppController(this.groups);
    }
    setGroups (groups) {
        this.groups = groups;
    }
}

module.exports = App;
