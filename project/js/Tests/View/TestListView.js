'use strict';

let testListViewTpl = require('./tpl/testListViewTpl.js'),
    TestView = require('./TestView.js'),
    mediator = require('../../Mediator.js');

class TestListView {
    constructor (groupList) {
        this.template = '';
        this.groupList = groupList;
    }

    render () {
        let leftBlock = document.querySelector('.left-column');

        this.template = testListViewTpl();
        leftBlock.insertAdjacentHTML('beforeend', this.template);
        this.renderTest();
    }

    renderTest () {
        this.groupList.forEach((item) => {
            let testView = new TestView();

            testView.setTest(item);

            return testView.renderTest();
        });
    }

    appendTest (groupList) {
        let testView = new TestView();

        testView.setTest(groupList.testList);
        testView.renderTest();
    }
}

module.exports = TestListView;