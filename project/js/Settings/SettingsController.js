'use strict';

let PopupSettingsView = require('../Settings/View/PopupSettingsView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (settings) {
        this.settings = settings;
        this.subscribeOpenPopup();
        this.subscribeSelectDirection();
        this.popupSettingsView = new PopupSettingsView();
        this.settingsModel = new SettingsModel();
    }

    subscribeOpenPopup () {
        mediator.sub('settingsPopup:open', () => {
            this.popupSettingsView.setDirectionList(this.settingsModel.getDirectionList());
            this.popupSettingsView.renderPopup();
            this.subscribeClosePopup();
        });
    }

    subscribeClosePopup () {
        mediator.sub('settingsPopup:close', () => {
            this.popupSettingsView.close();
        });
    }

    subscribeSelectDirection () {
    	mediator.sub('directionSelect:change', (value) => {
            let currentSetting = this.settings.find((item) => item.direction === value);

            this.popupSettingsView.setDirectionList(this.settingsModel.getDirectionList());
            this.popupSettingsView.reRenderPopup(currentSetting.tests, currentSetting.filters, value);
        });
    }
}

module.exports = SettingsController;