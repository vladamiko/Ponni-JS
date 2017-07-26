'use strict';

let mediator = require('../../Mediator.js'),
    DayView = require('./DayView.js'),
    Day = require('../../Days/Model/Day.js'),
    popupAddDayTpl = require('../../Days/View/tpl/popupAddDayTpl.js');

class PopupAddDayView {
    constructor () {
        this.modal = document.querySelector('.modal-add-day');
        this.selectedDate = '';
    }

    renderPopup () {
        this.modal.innerHTML = popupAddDayTpl();
        this.open();
        this.addListeners();
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let closeDayBtn = this.modal.querySelector('.close-day-btn'),
            dateInput = this.modal.querySelector('.dateInput');

        dateInput.addEventListener('change', (e) => {
            this.selectedDate = e.target.value;
        });

        closeDayBtn.addEventListener('click', (e) => {
            let day = new Day(this.selectedDate);

            mediator.pub('day:created', day);

            this.close();
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddDayView;