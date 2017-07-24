'use strict';

class SettingsModel {
    constructor (settings) {
        this.directions = settings;
    }

    getDirectionNames () {
    	let directionNames = [];

    	this.directions.forEach((item) => {
        	this.directionNames.push(item.direction);
    	});

        return this.directionNames;
    }

    addDirection (name) {
        this.directions.push(new Direction(name));
    }

}

module.exports = SettingsModel;