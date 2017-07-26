'use strict';

let DirectionModel = require('../../Settings/Model/DirectionModel.js');

class SettingsModel {
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

module.exports = SettingsModel;