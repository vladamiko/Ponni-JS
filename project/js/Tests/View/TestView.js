'use strict';

let testViewTpl = require('./tpl/testViewTpl.js'),
    mediator = require('../../Mediator.js');

class TestView {
    constructor () {
        this.template = '';
    }

    setTest (test) {
        this.test = test;
        this.template = testViewTpl(test);
    }

    renderTest () {
        let testsBlock = document.querySelector('.test-wrapper');

        testsBlock.innerHTML = this.template;
        this.addListeners();
    }

    addListeners () {
        let addTestBtn = document.querySelector('.btn-test'),
            groupElement = document.querySelector('.test-wrapper');

        addTestBtn.addEventListener('click', () => mediator.pub('testPopup:open', this.test));
        groupElement.addEventListener('click', (e) => {
           let buttonElement = e.target.classList.contains('btn-test');

            if (!buttonElement) {
                mediator.pub('test:active', this.test);
            }
        });
    }
}

module.exports = TestView;