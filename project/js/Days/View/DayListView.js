'use strict';

let DayView = require('./DayView.js'),
    mediator = require('../../Mediator.js');

class DayListView {
        constructor (day) {
        this.day = day;
        this.addListeners();
    }

    addListeners () {
        let addDayBtn = document.querySelector('.add-day-btn');

        addDayBtn.addEventListener('click', () => mediator.pub('dayPopup:open'));
    }

    appendDay () {
        let dayView = new DayView();

        dayView.setDay(this.day.date);
        dayView.renderDay();
    }
}

module.exports = DayListView;