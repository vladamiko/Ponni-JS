'use strict';

let Direction = require('../../Settings/Model/Direction.js');

class Settings {
    constructor () {
        this.directions = [];
    }

    getDirectionNames () {
    	let directionNames = [];

    	this.directions.forEach((item) => {
        	directionNames.push(item.name);
    	});

        return directionNames;
    }
}

module.exports = Settings;