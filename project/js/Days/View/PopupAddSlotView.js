'use strict';

let mediator = require('../../Mediator.js'),
    DayView = require('./DayView.js'),
    Day = require('../../Days/Model/Day.js'),
    popupAddSlotTpl = require('../../Days/View/tpl/popupAddSlotTpl.js');

class PopupAddSlotView {
    constructor () {
        this.modal = document.querySelector('.modal-add-day');
        this.selectedTime = '';
        this.timeList = ['08:00', '08:30', '09:00', '09:30'];
    }

    renderPopup () {
        this.modal.innerHTML = popupAddSlotTpl(this.timeList);
        this.open();
        this.addListeners();
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let closeSlotBtn = this.modal.querySelector('.close-slot-btn'),
            timeSlot = this.modal.querySelector('.modal-slot');

        timeSlot.addEventListener('change', (e) => {
            this.selectedTime = e.target.value;
        });

        closeSlotBtn.addEventListener('click', (e) => {
            mediator.pub('day:addedSlot');

            this.close();
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddSlotView;