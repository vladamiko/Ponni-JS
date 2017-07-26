'use strict';

let mediator = require('../../Mediator.js'),
    addTestPopupTpl = require('./tpl/addTestPopupTpl.js');

class PopupAddTestView {
    constructor () {
        this.modal = document.querySelector('.modal-add-test');
    }

    renderPopup () {
        this.modal.innerHTML = addTestPopupTpl();
        this.open();
        this.addListeners();
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let closeTestBtn = document.querySelector('.close-test-btn'),
            testName = document.querySelector('.add-test-name');

        closeTestBtn.addEventListener('click', () => {
            this.close();
            mediator.pub('addPopup:close');
            // mediator.unsub('addTestPopup:close');
        });

        testName.addEventListener('input', () => {
            //
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddTestView;