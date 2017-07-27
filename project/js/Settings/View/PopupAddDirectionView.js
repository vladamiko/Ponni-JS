'use strict';

let mediator = require('../../Mediator.js'),
    popupAddDirectionTpl = require('../../Settings/View/tpl/popupAddDirectionTpl.js');

class PopupAddDirectionView {
    constructor () {
        this.modal = document.querySelector('.modal-add-direction');
        this.render();
    }

    render () {
        this.modal.innerHTML = popupAddDirectionTpl();
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
            mediator.pub('addDirectionPopup:close', directionNameInput.value);
            this.close();
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddDirectionView;