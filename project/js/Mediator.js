'use strict';

class Mediator {
    constructor () {
        this.channels = {};
    }

    pub (channel, data) {
        if (this.channels[channel]) {
            this.channels[channel].forEach((fn) => fn(data));
        }
    }

    sub (channel, fn) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }

        this.channels[channel].push(fn);
    }

    unsub (channel) {
        delete this.channels[channel];
    }
}

let mediator = new Mediator();

module.exports = mediator;