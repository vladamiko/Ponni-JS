'use strict';

let dayTpl = require('./tpl/dayTpl.js'),
    mediator = require('../../Mediator.js');

class DayView {
    constructor () {
        this.template = '';
        this.daysBlock = document.querySelector('.day-wrapper');
        //this.subscribe();
    }

    /*subscribe () {
        mediator.sub('day:addedSlot', (day) => {
            alert('ypa');
        });
    }*/

    setDay (day) {
        this.template = dayTpl(day);
    }

    renderDay () {
        this.daysBlock.insertAdjacentHTML('afterbegin', this.template);
        this.addListeners();
    }

    addListeners () {
        let addSlotBtn = this.daysBlock.querySelector('.slot-add-btn'),
            assignUsers = this.daysBlock.querySelector('.assing-users-btn')

        addSlotBtn.addEventListener('click', () => mediator.pub('slotPopup:open')),
        assignUsers.addEventListener('click', () => mediator.pub('textareaPopup:open'));
        
    }
}

module.exports = DayView;