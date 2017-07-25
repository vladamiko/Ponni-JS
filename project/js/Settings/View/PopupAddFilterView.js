'use strict';

let mediator = require('../../Mediator.js'),
    addFilterPopupTpl = require('../../Settings/View/tpl/addFilterPopupTpl.js');

class PopupAddFilterView {
    constructor () {
        this.modal = document.querySelector('.modal-add-filter');
    }

    renderPopup (testList, actionList, conditionList) {
        this.modal.innerHTML = addFilterPopupTpl(testList, actionList, conditionList);
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
            mediator.pub('filterPopup:close');
            mediator.unsub('filterPopup:close');
        });

        tests.addEventListener('click', () => {
            //
        });

        testName.addEventListener('input', () => {
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