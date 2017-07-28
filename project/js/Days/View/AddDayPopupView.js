'use strict';

let mediator = require('../../Mediator.js'),
    DayView = require('./DayView.js'),
    Day = require('../../Days/Model/Day.js'),
    addDayPopupTpl = require('../../Days/View/tpl/addDayPopupTpl.js');

class AddDayPopupView {
    constructor () {
        this.modal = document.querySelector('.modal-add-day');
        this.selectedDate = '';
    }

    renderPopup () {
        this.modal.innerHTML = addDayPopupTpl();
        this.modal.querySelector('.current-date').valueAsDate = new Date();
        this.open();
        this.addListeners();
    }

    addListeners () {
        let closeDayBtn = this.modal.querySelector('.close-day-btn');

        closeDayBtn.addEventListener('click', (e) => {
            let day = new Day(this.generateData());

            mediator.pub('day:created', day.date);
            this.close();
        });
    }

    generateData () {
        let dateControl = document.querySelector('input[type="date"]'),
            data = '';
        
        data = dateControl.value;
        
        return data;
    }

    appendDayAdd () {
        let dayView = new DayView();

        dayView.setDay(this.generateData());
        dayView.renderDayAdd();
    }

    open () {
        this.modal.classList.add('visible');
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = AddDayPopupView;