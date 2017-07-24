'use strict';

let mediator = require('../../Mediator.js'),
    addFilterPopupTpl = require('../../Settings/View/tpl/addFilterPopupTpl.js');

class PopupAddFilterView {
    constructor () {
        this.modal = document.querySelector('.modal-add-filter');
    }

    renderPopup () {
        this.modal.innerHTML = addFilterPopupTpl();
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
module.exports = PopupAddFilterView;