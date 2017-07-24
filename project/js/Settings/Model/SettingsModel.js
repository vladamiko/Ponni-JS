'use strict';

class SettingsModel {
    constructor (directions) {
        this.directions = directions;
    }

    getDirectionNames () {
    	let directionNames = [];

    	this.directions.forEach((item) => {
        	directionNames.push(item.name);
    	});

        return directionNames;
    }

    addDirection (name) {
        this.directions.push(new Direction(name));
    }

}

module.exports = SettingsModel;