'use strict';

let testViewTpl = require('./tpl/testViewTpl.js'),
    mediator = require('../../Mediator.js');

class TestView {
    constructor () {
        this.template = '';
    }

    setTest (test) {
        this.template = testViewTpl(test);
    }

    renderTest () {
        let testsBlock = document.querySelector('.test-wrapper');

        testsBlock.insertAdjacentHTML('afterbegin', this.template);
        this.addListeners();
    }

    addListeners () {
        let addTestBtn = document.querySelector('.btn-test');

        addTestBtn.addEventListener('click', () => mediator.pub('testPopup:open'));
    }
}

module.exports = TestView;