'use strict';

let mediator = require('../../Mediator.js'),
    DayView = require('./DayView.js'),
    Day = require('../../Days/Model/Day.js'),
    addDayPopupTpl = require('../../Days/View/tpl/addDayPopupTpl.js');

class AddDayPopupView {
    constructor (activeGroup) {
        this.activeGroup = activeGroup;
        this.modal = document.querySelector('.modal-add-day');
        this.selectedDate = '';
    }

    renderPopup () {
        this.modal.innerHTML = addDayPopupTpl(this.activeGroup.testDayList);
        this.modal.querySelector('.current-date').valueAsDate = new Date();
        this.open();
        this.addListeners();
    }

    addListeners () {
        let closeDayBtn = this.modal.querySelector('.close-day-btn');

        closeDayBtn.addEventListener('click', () => {
            console.log(this.activeGroup);
            let day = new Day(this.generateData());

            this.activeGroup.addDay(day);
            this.close();
            mediator.pub('day:created', this.activeGroup);
            
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