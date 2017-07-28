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
            filterName = document.querySelector('.add-filter-name'),
            action = document.querySelector('.modal-filter-action'),
            condition = document.querySelector('.modal-filter-condition'),
            grade = document.querySelector('.add-test-grade');
            
        closeFilterBtn.addEventListener('click', () => {
            let checkedTests = document.querySelectorAll('input:checked'),
                testNames = [];
            
            checkedTests.forEach(function(test) {
                testNames.push(test.value);
            });

            this.selectedDirection.addFilter(filterName.value, testNames, action.value, condition.value, grade.value);
            this.close();
            mediator.pub('addFilterPopup:close', this.selectedDirection);
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddFilterView;