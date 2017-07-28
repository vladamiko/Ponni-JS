'use strict';

let mediator = require('../../Mediator.js'),
    SlotView = require('./SlotView.js'),
    Day = require('../../Days/Model/Day.js'),
    addSlotPopupTpl = require('../../Days/View/tpl/addSlotPopupTpl.js');

class AddSlotPopupView {
    constructor () {
        this.modal = document.querySelector('.modal-add-day');
        this.selectedTime = '';
        this.timeList = ['08:00', '08:30', '09:00', '09:30'];
    }

    renderPopup () {
        this.modal.innerHTML = addSlotPopupTpl(this.timeList);
        this.open();
        this.addListeners();
    }

    addListeners () {
        let closeSlotBtn = this.modal.querySelector('.close-slot-btn');

        closeSlotBtn.addEventListener('click', (e) => {
            let data = this.generateData(),
                slot = {};

            this.timeList.forEach((time) => {
               if (data.timeSlot === time) {
                   slot = data.timeSlot;
               }
            });

            mediator.pub('day:addedSlot', slot);
            this.close();
        });
    }

    generateData () {
        let timeSlot = this.modal.querySelector('.modal-slot'),
            data = '';

        data = timeSlot.options[timeSlot.selectedIndex].text;

        return data;
    }

    appendSlot () {
        let slotView = new SlotView();
        
        slotView.setSlot(this.generateData());
        slotView.renderSlot();
    }

    open () {
        this.modal.classList.add('visible');
    }
    
    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = AddSlotPopupView;