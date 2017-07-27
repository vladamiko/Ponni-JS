'use strict';

class Observer {
    constructor () {
        this.listeners = {};
    }

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

module.exports = Observer;