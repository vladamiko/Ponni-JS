'use strict';

let mediator = require('../../Mediator.js'),
    addFilterPopupTpl = require('./tpl/addFilterPopupTpl.js');

class PopupAddFilterView {
    constructor () {
        this.modal = document.querySelector('.modal-add-filter');
    }

    renderPopup (selectedDirection) {
        this.selectedDirection = selectedDirection;
        this.modal.innerHTML = addFilterPopupTpl(this.selectedDirection.testList);
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
            mediator.pub('addPopup:close');
        });

        tests.addEventListener('click', () => {
            //
        });

        actionSelect.addEventListener('change', (e) => {
            mediator.pub('actionSelect:change', e.target.value);
        });

        conditionSelect.addEventListener('change', (e) => {
            mediator.pub('conditionSelect:change', e.target.value);
        });

        testGrade.addEventListener('input', () => {
            //
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddFilterView;