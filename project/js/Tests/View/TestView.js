'use strict';

let testViewTpl = require('./tpl/testViewTpl.js'),
    mediator = require('../../Mediator.js');

class TestView {
    constructor () {
        this.template = '';
        this.addListeners();
    }

    setTest (test) {
        this.template = testViewTpl(test);
    }

    renderTest () {
        let testsBlock = document.querySelector('.test-wrapper');

        testsBlock.insertAdjacentHTML('afterbegin', this.template);
    }

    addListeners () {
    }
}

module.exports = TestView;