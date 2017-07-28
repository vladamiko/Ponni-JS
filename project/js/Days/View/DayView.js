'use strict';

let dayViewTpl = require('./tpl/dayViewTpl.js'),
    mediator = require('../../Mediator.js');

class DayView {
    constructor () {
        this.template = '';
        this.daysBlock = document.querySelector('.day-wrapper');
    }

    setDay (day) {
        this.template = dayViewTpl(day);
    }

    renderDay () {
        this.daysBlock.innerHTML = this.template;
        this.addListeners();
    }

    renderDayAdd () {
        this.daysBlock.insertAdjacentHTML('beforeend', this.template);
        this.addListeners();
    }

    addListeners () {
        let addSlotBtn = this.daysBlock.querySelector('.slot-add-btn');

        addSlotBtn.addEventListener('click', () => mediator.pub('slotPopup:open'));
    }
}

module.exports = DayView;