'use strict';

let testTpl = require('./tpl/testTpl.js'),
    mediator = require('../../Mediator.js');

class TestView {
    constructor () {
        this.template = '';
        this.addListeners();
    }

    setTest (test) {
        this.template = testTpl(test);
    }

    renderTest () {
        let testsBlock = document.querySelector('.test-wrapper');

        testsBlock.insertAdjacentHTML('afterbegin', this.template);
    }

    addListeners () {
    }
}

module.exports = TestView;