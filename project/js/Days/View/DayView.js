'use strict';

let dayTpl = require('./tpl/dayTpl.js'),
    mediator = require('../../Mediator.js');

class DayView {
    constructor () {
        this.template = '';
        this.daysBlock = document.querySelector('.day-wrapper');
    }

    setDay (day) {
        this.template = dayTpl(day);
    }

    renderDay () {
        let daysBlock = document.querySelector('.day-wrapper');

        daysBlock.insertAdjacentHTML('afterbegin', this.template);
        this.addListeners();
    }

    addListeners () {
        let addSlotBtn = this.daysBlock.querySelector('.slot-add-btn');

        addSlotBtn.addEventListener('click', () => mediator.pub('day:addedSlot'));
    }
}

module.exports = DayView;