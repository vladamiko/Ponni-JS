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
            directionName = document.querySelector('.add-direction-name');


        closeDirectionBtn.addEventListener('click', () => {
            mediator.pub('directionPopup:close');
            mediator.unsub('directionPopup:close');
        });

        directionName.addEventListener('input', () => {
            //
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}
module.exports = PopupAddDirectionView;