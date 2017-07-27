'use strict';

let mediator = require('../../Mediator.js'),
    DayView = require('./DayView.js'),
    Day = require('../../Days/Model/Day.js'),
    popupTextareaTpl = require('../../Days/View/tpl/popupTextareaTpl.js');

class PopupAddTextareaView {
    constructor () {
        this.modal = document.querySelector('.modal-add-day');
        this.selectedDate = '';
        this.peopleList = '';
    }

    renderPopup () {
        this.modal.innerHTML = popupTextareaTpl();
        this.open();
        this.addListeners();
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let closeTextareaBtn = this.modal.querySelector('.close-textarea-btn'),
            textInput = this.modal.querySelector('.text-input');

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

module.exports = PopupAddTextareaView;