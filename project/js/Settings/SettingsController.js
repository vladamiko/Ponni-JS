'use strict';

let PopupSettingsView = require('../Settings/View/PopupSettingsView.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (directions, directionNames) {
        this.directions = directions;
        this.directionNames = directionNames;
        this.subscribe();

    }

    subscribe () {
        mediator.sub('settingsPopup:open', () => {
             let popupSettingsView = new PopupSettingsView(this.directions, this.directionNames);
             popupSettingsView.renderPopup();
        });
    }
}

module.exports = SettingsController;