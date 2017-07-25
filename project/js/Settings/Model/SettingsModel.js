'use strict';

let DirectionModel = require('../../Settings/Model/DirectionModel.js');

class SettingsModel {
    constructor (defaultDirections) {
        this.directions = [];
        this.render(defaultDirections);
    }

    render (defaultDirections) {
        defaultDirections.forEach((item) => {
            this.directions.push(new DirectionModel(item));
        });
    }

    getDirectionNames () {
    	let directionNames = [];

    	this.directions.forEach((item) => {
        	directionNames.push(item.name);
    	});

        return directionNames;
    }

    addDirection (name) {
        this.directions.push(new DirectionModel(name));

        defaultDirections.forEach((item) => {
            this.directions.push(new DirectionModel(item));
        });
    }

    addTests (testName) {
        this.tests.push(new Test(testName));
    }

    addFilters (tests, action, condition, grade) {
        this.filters.push(new Filter(tests, action, condition, grade));
    }
}

module.exports = SettingsModel;