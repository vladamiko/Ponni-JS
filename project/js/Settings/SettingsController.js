'use strict';

let PopupSettingsView = require('../Settings/View/PopupSettingsView.js'),
    Direction = require('../Settings/Model/Direction.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (settings) {
        this.settings = settings;
        this.directions = this.settings.directions;
        this.directionNames = this.settings.getDirectionNames();
        this.view = new PopupSettingsView(this.directions, this.directionNames);
        this.subscribe();
    }

    subscribe () {
        mediator.sub('settingsPopup:open', () => {
            this.view.render();
        });

        mediator.sub('addDirectionPopup:close', (directionName) => {
            let newDirection = new Direction(directionName);

            this.directions.push(newDirection);
            this.directionNames.push(newDirection.name);
            this.view.render(newDirection);
        });

        mediator.sub('addTestPopup:close', (selectedDirection) => {
            this.view.render(selectedDirection);
        });

        mediator.sub('addFilterPopup:close', (selectedDirection) => {
            console.log(selectedDirection);
            this.view.render(selectedDirection);
        });        
    }
}

module.exports = SettingsController;