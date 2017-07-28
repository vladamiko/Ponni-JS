'use strict';

let mediator = require('../../Mediator.js'),
    DayView = require('./DayView.js'),
    Day = require('../../Days/Model/Day.js'),
    addPersonsPopupTpl = require('../../Days/View/tpl/addPersonsPopupTpl.js');

class AddPersonsPopupView {
    constructor () {
        this.modal = document.querySelector('.modal-add-day');
        this.selectedDate = '';
        this.peopleList = '';
    }

    renderPopup () {
        this.modal.innerHTML = addPersonsPopupTpl();
        this.open();
        this.addListeners();
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let closeTextareaBtn = this.modal.querySelector('.close-slot-btn'),
            textInput = this.modal.querySelector('.slots-textarea');

        textInput.addEventListener('change', (e) => {
            this.peopleList = e.target.value;
        });

        closeTextareaBtn.addEventListener('click', () => {
            mediator.pub('day:assignedUsers', this.peopleList);

            this.close();
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = AddPersonsPopupView;