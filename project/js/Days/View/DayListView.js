'use strict';

let DayView = require('./DayView.js'),
    dayListViewTpl = require('./tpl/dayListViewTpl.js'),
    mediator = require('../../Mediator.js');

class DayListView {
    constructor (groupList) {
        this.template = '';
        this.groupList = groupList;
    }

    render () {
        let leftBlock = document.querySelector('.left-column');

        this.template = dayListViewTpl();
        leftBlock.insertAdjacentHTML('beforeend', this.template);
        this.addListeners();
    }

    addListeners () {
        let addDayBtn = document.querySelector('.add-day-btn');

        addDayBtn.addEventListener('click', () => mediator.pub('dayPopup:open'));
    }

    appendDay () {
        let dayView = new DayView();

        dayView.setDay(this.groupList);
        dayView.renderDay();
    }

    
}

module.exports = DayListView;