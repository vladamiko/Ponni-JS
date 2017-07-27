'use strict';

let mediator = require('../../Mediator.js'),
    Test = require('../Model/Test.js'),
    testPopupViewTpl = require('./tpl/testPopupViewTpl.js');

class TestPopupView {
    constructor () {
        this.modal = document.querySelector('.modal-test');
    }

    renderPopup () {
        this.modal.innerHTML = testPopupViewTpl();
        this.open();
        this.addListeners();
    }

    addListeners () {
        let closeTestBtn = this.modal.querySelector('.close-test-btn');

        closeTestBtn.addEventListener('click', () => {

            // let filter = new Filter();

            // mediator.pub('filter:created', filter);
            this.close();
        });
    }

    open () {
        this.modal.classList.add('visible');
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = TestPopupView;