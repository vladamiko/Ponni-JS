'use strict';

let DayListView = require('../Days/View/DayListView.js'),
    PopupAddDayView = require('../Days/View/PopupAddDayView.js'),
    mediator = require('../Mediator.js');

class DaysController {
    constructor (groupList) {
        this.groupList = groupList;
        this.subscribe();
        this.dayListView = new DayListView();
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
    }

    showDayList () {
        let dayListView = new DayListView(this.groupList);

        dayListView.render();
    }
}

module.exports = DaysController;