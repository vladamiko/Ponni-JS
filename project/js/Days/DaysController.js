'use strict';

let DayListView = require('../Days/View/DayListView.js'),
    AddDayPopupView = require('../Days/View/AddDayPopupView.js'),
    AddSlotPopupView = require('../Days/View/AddSlotPopupView.js'),
    AddPersonPopupView = require('../Days/View/AddPersonPopupView.js'),
    Person = require('../Days/Model/Person.js'),
    ResultView = require('../Result/View/ResultView.js'),
    mediator = require('../Mediator.js');

class DaysController {
    constructor (groupList) {
        this.groupList = groupList;
        this.subscribe();
    }

    subscribe () {
        mediator.sub('dayPopup:open', () => {
            let addDayPopupView = new AddDayPopupView();

            addDayPopupView.renderPopup();
        });

        mediator.sub('day:created', (day) => {
            let addDayPopupView = new AddDayPopupView();

            addDayPopupView.appendDayAdd();
        });

        mediator.sub('group:active', (group) => {
            let dayListView = new DayListView(group.dayList);

            dayListView.appendDay();
        });

        mediator.sub('slotPopup:open', () => {
            let addSlotPopupView = new AddSlotPopupView();

            addSlotPopupView.renderPopup();
        });

        mediator.sub('day:addedSlot', (day) => {
            let addSlotPopupView = new AddSlotPopupView();

            addSlotPopupView.appendSlot();
        });

        mediator.sub('textareaPopup:open', () => {
            let addSlotPopupView = new AddPersonPopupView();

            addSlotPopupView.renderPopup();
        });

        // mediator.sub('day:assignedUsers', (people) => {
        //     let peopleList = people.match(/[^\n]+/g),
        //         result = [];

        //     peopleList.forEach((item) => {
        //         let personalInfo = item.split(' '),
        //             name = personalInfo[0],
        //             lastName = personalInfo[1],
        //             email = personalInfo[2],
        //             person = new Person(name, lastName, email);

        //         result.push(person);
        //     });

        //     this.showPeople(result);
        // });
    }

    showDayList () {
        let dayListView = new DayListView(this.groupList);

        dayListView.render();
    }

    showPeople (people) {
        let resultView = new ResultView();

        resultView.setResult(people);
        resultView.renderResult();
    }
}

module.exports = DaysController;