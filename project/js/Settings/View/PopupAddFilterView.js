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
            filterName = document.querySelector('.add-filter-name').value,
            action = document.querySelector('.modal-filter-action').value,
            condition = document.querySelector('.modal-filter-condition').value,
            grade = document.querySelector('.add-test-grade').value;
            
        closeFilterBtn.addEventListener('click', () => {
            let checkedTests = document.querySelectorAll('input:checked'),
                testNames = [];
            
            checkedTests.forEach(function(test) {
                testNames.push(test.value);
            });

            this.selectedDirection.addFilter(filterName, testNames, action, condition, grade);
            this.close();
            mediator.pub('addFilterPopup:close', this.selectedDirection);
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddFilterView;