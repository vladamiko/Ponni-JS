'use strict';

let Filter = require('../../Filters/Model/Filter.js');

class GroupModel {
    constructor (name, direction) {
        this.name = name;
        this.direction = direction.name;
        this.testList = direction.testList;
        this.filterList = direction.filterList;
        this.testDayList = [];
        this.selected = false;

        this.listeners = [];
    }

    addTest (test) {
        this.testList.push(test);
    }

    addFilter (name, testList, action, condition, grade) {
        this.filterList.push(new Filter(name, testList, action, condition, grade));
    }

    addDay (date) {
        this.testDayList.push(date);
    }
   
    activate () {
        this.selected = true;
    }

    deactivate () {
        if (this.selected) {
            this.selected = false;
            this.trigger('change');
        }
    }

    //Observer
    on (event, fn) {
       if (!this.listeners[event]) {
           this.listeners[event] = [];
       }
        this.listeners[event].push(fn);
    }

    trigger (event) {
        let listeners = this.listeners[event];

        if (listeners) {
            listeners.forEach((fn) => fn());
        }
    }
}

module.exports = GroupModel;