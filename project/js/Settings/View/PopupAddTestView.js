'use strict';

let mediator = require('../../Mediator.js'),
    popupAddTestTpl = require('./tpl/popupAddTestTpl.js');

class PopupAddTestView {
    constructor (selectedDirection) {
        this.modal = document.querySelector('.modal-add-test');
        this.selectedDirection = selectedDirection;
        this.render();
    }

    render () {
        this.modal.innerHTML = popupAddTestTpl();
        this.open();
        this.addListeners();
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let closeTestBtn = document.querySelector('.close-test-btn'),
            testNameInput = document.querySelector('.add-test-name');

        closeTestBtn.addEventListener('click', () => {
            this.selectedDirection.addTest(testNameInput.value);
            this.close();
            mediator.pub('addTestPopup:close', this.selectedDirection);
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddTestView;