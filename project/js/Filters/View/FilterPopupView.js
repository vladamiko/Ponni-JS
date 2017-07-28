'use strict';

let mediator = require('../../Mediator.js'),
    Filter = require('../Model/Filter.js'),
    filterPopupViewTpl = require('./tpl/filterPopupViewTpl.js');

class FilterPopupView {
    constructor (activeGroup) {
        this.activeGroup = activeGroup;
        this.modal = document.querySelector('.modal-add-filter');
        this.modal.innerHTML = filterPopupViewTpl(this.activeGroup.testList);
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

            this.activeGroup.addFilter(filterName.value, testNames, action.value, condition.value, grade.value);
            this.close();
            mediator.pub('filter:created', this.activeGroup);
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = FilterPopupView;