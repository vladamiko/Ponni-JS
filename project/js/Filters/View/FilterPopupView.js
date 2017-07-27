'use strict';

let mediator = require('../../Mediator.js'),
    Filter = require('../Model/Filter.js'),
    filterPopupViewTpl = require('./tpl/filterPopupViewTpl.js');

class FilterPopupView {
    constructor () {
        this.modal = document.querySelector('.modal-filter');
    }

    renderPopup () {
        this.modal.innerHTML = filterPopupViewTpl();
        this.open();
        this.addListeners();
    }

    addListeners () {
        let closeFilterBtn = this.modal.querySelector('.close-filter-btn');

        closeFilterBtn.addEventListener('click', () => {

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

module.exports = FilterPopupView;