'use strict';

let TestListView = require('../Tests/View/TestListView.js'),
    mediator = require('../Mediator.js');

class TestController {
    constructor (groupList) {
        this.groupList = groupList;
        this.subscribe();
    }

    subscribe () {
        mediator.sub('group:active', () => {
            let testListView = new TestListView(this.groupList);

            testListView.appendTest();
        });
    }

    showTestList () {
        let testListView = new TestListView(this.groupList);

        testListView.render();
    }
}

module.exports = TestController;