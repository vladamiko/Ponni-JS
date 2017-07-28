'use strict';

class Test {
    constructor (name, grade) {
        this.name = name;
        this.grade = grade;
        this.selected = false;

        this.listeners = [];
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

module.exports = Test;
