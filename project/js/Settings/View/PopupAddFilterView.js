'use strict';

let mediator = require('../../Mediator.js'),
    popupAddFilterTpl = require('./tpl/popupAddFilterTpl.js');

class PopupAddFilterView {
    constructor (selectedDirection) {
        this.selectedDirection = selectedDirection;
        this.modal = document.querySelector('.modal-add-filter');
        this.modal.innerHTML = popupAddFilterTpl(this.selectedDirection.testList);
        this.render();
    }

    render () {
        this.open();
        this.addListeners();
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let closeFilterBtn = document.querySelector('.close-filter-btn'),
            tests = document.querySelector('.left-column-filter'),
            testName = document.querySelector('.add-test-name'),
            actionSelect = document.querySelector('.modal-filter-action'),
            conditionSelect = document.querySelector('.modal-filter-condition'),
            testGrade = document.querySelector('.add-test-grade');

        closeFilterBtn.addEventListener('click', () => {
            this.close();
            mediator.pub('addFilterPopup:close');
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddFilterView;