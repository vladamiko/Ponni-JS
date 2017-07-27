'use strict';

let DayView = require('./DayView.js'),
    dayListViewTpl = require('./tpl/dayListViewTpl.js'),
    mediator = require('../../Mediator.js');

class DayListView {
    constructor (day) {
        this.template = '';
        this.day = day;
        // this.addListeners();
    }

    render () {
        let leftBlock = document.querySelector('.left-column');

        this.template = dayListViewTpl();

        leftBlock.insertAdjacentHTML('beforeend', this.template);

        this.renderDays();

        this.addListeners();
    }

    renderDays () {
        this.day.forEach((group) => {
            let dayView = new DayView();

            dayView.setDay(group);

            return dayView.renderDay();
        });
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