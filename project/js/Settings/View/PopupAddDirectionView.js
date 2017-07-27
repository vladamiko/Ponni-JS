'use strict';

let mediator = require('../../Mediator.js'),
    addDirectionPopupTpl = require('../../Settings/View/tpl/addDirectionPopupTpl.js');

class PopupAddDirectionView {
    constructor () {
        this.modal = document.querySelector('.modal-add-direction');
    }

    renderPopup () {
        this.modal.innerHTML = addDirectionPopupTpl();
        this.open();
        this.addListeners();
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let closeDirectionBtn = document.querySelector('.close-direction-btn'),
            directionNameInput = document.querySelector('.add-direction-name');


        closeDirectionBtn.addEventListener('click', () => {
            mediator.pub('addPopup:close', directionNameInput.value);
            this.close();
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddDirectionView;