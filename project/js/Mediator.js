'use strict';

class Mediator {
    constructor () {
        this.channels = {};
    }

    pub (channel) {
        if (this.channels[channel]) {
            this.channels[channel].forEach((fn) => fn());
        }
    }

    sub (channel, fn) {
        if (!this.channels[channel]) {
            this.channels[channel] = [];
        }

        this.channels[channel].push(fn);
    }
}

let mediator = new Mediator();

module.exports = mediator;