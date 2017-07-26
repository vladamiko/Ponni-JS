'use strict';

let TestListView = require('../Tests/View/TestListView.js');

class TestController {
    constructor () {
        this.subscribe();
    }

    subscribe () {
        mediator.sub('group:active', () => {
            let testListView = new TestListView();

            testListView.appendTest();
        });
    }

    showTestList () {
        let testListView = new TestListView();

        testListView.render();
    }
}

module.exports = TestController;