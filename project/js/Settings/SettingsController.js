'use strict';

let PopupSettingsView = require('../Settings/View/PopupSettingsView.js'),
    Direction = require('../Settings/Model/Direction.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (directions, directionNames) {
        this.directions = directions;
        this.directionNames = directionNames;
        this.subscribe();

    }

    subscribe () {
        mediator.sub('settingsPopup:open', () => {
            let view = new PopupSettingsView(this.directions, this.directionNames);
            view.renderPopup();
        });

        mediator.sub('addPopup:close', (directionName) => {
            let newDirection = new Direction(directionName);

            this.directions.push(newDirection);
            this.directionNames.push(newDirection.name);
            
            let view = new PopupSettingsView(this.directions, this.directionNames, newDirection);
            view.renderPopup();
        });
    }
}

module.exports = SettingsController;