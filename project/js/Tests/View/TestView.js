'use strict';

let testViewTpl = require('./tpl/testViewTpl.js'),
    mediator = require('../../Mediator.js');

class TestView {
    constructor () {
        this.template = '';
    }

    setTest (testList) {
        this.template = testViewTpl(testList);
    }

    renderTest () {
        let testsBlock = document.querySelector('.test-wrapper');

        testsBlock.innerHTML = this.template;
        this.addListeners();
    }

    addListeners () {
        let addTestBtn = document.querySelector('.btn-test');

        addTestBtn.addEventListener('click', () => mediator.pub('testPopup:open'));
    }
}

module.exports = TestView;