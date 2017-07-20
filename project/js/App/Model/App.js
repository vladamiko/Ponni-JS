'use strict';

class App {
    constructor () {
        this.groups = [];
        this.settings = [];
    }
    start () {
        console.log('started');
        let appView = new AppView(),
            appController = new AppController(this.groups);
        // Нам нужно определиться какое View  и какой Контроллер будут создаваться
        // newView
        // newController
    }
}

module.exports = App;
