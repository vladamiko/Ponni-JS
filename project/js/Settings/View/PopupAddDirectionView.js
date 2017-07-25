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
        let closeDirectionBtn = document.querySelector('.close-dir-btn');

        closeDirectionBtn.addEventListener('click', () => {
            mediator.pub('direction:added');
            mediator.unsub('direction:added');
        });
    }

    generateData () {
        let addDirectionName = document.querySelector('.add-direction-name'),
            data = {};

        data.name = addDirectionName.value;

        return data;
    }

    close () {
        this.modal.classList.remove('visible');
    }
}
module.exports = PopupAddDirectionView;