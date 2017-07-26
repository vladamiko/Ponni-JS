'use strict';

let testsListTpl = require('./tpl/testsListTpl.js'),
    TestView = require('./TestView.js'),
    mediator = require('../../Mediator.js');

class TestListView {
    constructor () {
        this.template = '';
    }

    render () {
        let leftBlock = document.querySelector('.left-column');

        this.template = testsListTpl();
        leftBlock.insertAdjacentHTML('afterbegin', this.template);
    }

    appendTest (test) {
        this.test = test;
        this.testView = new TestView();
        this.testView.setTest(this.test);
        this.testView.renderTest();
    }

    addListeners () {
    }
}

module.exports = GroupListView;