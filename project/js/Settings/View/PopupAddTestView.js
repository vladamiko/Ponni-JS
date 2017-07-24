'use strict';

let mediator = require('../../Mediator.js'),
    addTestPopupTpl = require('../../Settings/View/tpl/addTestPopupTpl.js');

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

    }

    close () {
        this.modal.classList.remove('visible');
    }
}
module.exports = PopupAddTestView;