'use strict';

let TestPopupView = require('../Tests/View/TestPopupView.js'),
    TestListView = require('../Tests/View/TestListView.js'),
    mediator = require('../Mediator.js');

class TestController {
    constructor (groupList) {
        this.groupList = groupList;
        this.subscribe();
    }

    subscribe () {
        mediator.sub('testPopup:open', () => {
            let testPopupView = new TestPopupView();

            testPopupView.renderPopup();
        });

        mediator.sub('group:active', (group) => {
            let testListView = new TestListView(group.testList);

            testListView.renderTest();
            testListView.appendTest();
        });
    }

    showTestList () {
        let testListView = new TestListView(this.groupList);

        testListView.render();
    }
}

module.exports = TestController;