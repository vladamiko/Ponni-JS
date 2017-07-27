'use strict';

let testListViewTpl = require('./tpl/testListViewTpl.js'),
    TestView = require('./TestView.js'),
    mediator = require('../../Mediator.js');

class TestListView {
    constructor (testList) {
        this.template = '';
        this.testList = testList;
    }

    render () {
        let leftBlock = document.querySelector('.left-column');

        this.template = testListViewTpl();
        leftBlock.insertAdjacentHTML('beforeend', this.template);
    }

    renderTest () {
        this.testList.forEach((test) => {
            let testView = new TestView();

            testView.setTest(test);

            return testView.renderTest();
        });
    }

    appendTest () {
        let testView = new TestView();

        testView.setTest(this.groupList);
        testView.renderTest();
    }
}

module.exports = TestListView;