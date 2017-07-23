'use strict';

let PopupSettingsView = require('../Settings/View/PopupSettingsView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (settings) {
        this.settings = settings;
        this.subscribeOpenPopup();
    }

    subscribeOpenPopup () {
        mediator.sub('settingsPopup:open', () => {
            let settingsModel = new SettingsModel(),
                popupSettingsView = new PopupSettingsView();

            popupSettingsView.setDirectionList(settingsModel.getDirectionList());
            popupSettingsView.renderPopup();
            this.subscribeClosePopup();
        });
    }

    subscribeClosePopup () {
        mediator.sub('settingsPopup:close', () => {
            let popupSettingsView = new PopupSettingsView();

            popupSettingsView.close();
        });
}

module.exports = SettingsController;