'use strict';

class GroupModel {
    constructor (name, direction) {
        this.name = name;
        this.direction = direction;
        this.selected = false;

        this.listeners = [];
    }

    setTestList (testList) {
        this.testList = testList;
    }

    setFilterList (filterList) {
        this.filterList = filterList;
    }

    addTest (test) {
        this.testList.push(test);
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