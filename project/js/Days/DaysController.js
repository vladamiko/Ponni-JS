'use strict';

let DayListView = require('../Days/View/DayListView.js'),
    PopupAddDayView = require('../Days/View/PopupAddDayView.js'),
    PopupAddSlotView = require('../Days/View/PopupAddSlotView.js'),
    PopupTextareaView = require('../Days/View/PopupTextareaView.js'),
    mediator = require('../Mediator.js');

class DaysController {
    constructor (groupList) {
        this.groupList = groupList;
        this.subscribe();
    }

    subscribe () {
        mediator.sub('dayPopup:open', () => {
            let popupAddDayView = new PopupAddDayView();

            popupAddDayView.renderPopup();
        });

        mediator.sub('day:created', (day) => {
            let dayListView = new DayListView(day);

            dayListView.appendDay();
        });

        mediator.sub('slotPopup:open', () => {
            let popupAddSlotView = new PopupAddSlotView();

            popupAddSlotView.renderPopup();
        });

        mediator.sub('day:addedSlot', (day) => {
            alert('ypa');
        });

        mediator.sub('textareaPopup:open', () => {
            let popupAddSlotView = new PopupTextareaView();

            popupAddSlotView.renderPopup();
        });

        mediator.sub('day:assignedUsers', (day) => {
            alert('ypa');
        });
    }

    showDayList () {
        let dayListView = new DayListView(this.groupList);

        dayListView.render();
    }
}

module.exports = DaysController;