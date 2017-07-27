'use strict';

  let testPopupTpl = require('./tpl/testPopupTpl.js'),
      mediator = require('../../Mediator.js');

class PopupAddTestView {
    constructor () {
        this.modal = document.querySelector('.modal-add-one-test'),
        this.template = '';
    }
    
    render () {
        this.template = testPopupTpl();
        this.modal.innerHTML = this.template;
        this.open();
        this.addListeners();
    }
    
    addListeners () {
        let closeTestBtn = this.modal.querySelector('.close-test-btn');

        closeTestBtn.addEventListener('click', () => {
            let data = this.getTestName();

            mediator.pub('oneTest:added', data);

            this.close();
        });
    }

    getTestName () {
        let testElement = this.modal.querySelector('.test-name'),
            testName = '';

        testName = testElement.value;

        return testName;
    }

    open () {
        this.modal.classList.add('visible');
    }

    close () {
        this.modal.classList.remove('visible');
    }

}

module.exports = PopupAddTestView;