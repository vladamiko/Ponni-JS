'use strict';

let PopupSettingsView = require('../Settings/View/PopupSettingsView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (settings) {
        this.settings = settings;
        this.subscribeOpenPopup();
        this.subscribeSelectDirection();
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

    subscribeSelectDirection () {
    	mediator.sub('directionSelect:change', (value) => {
            let popupSettingsView = new PopupSettingsView(),
            	settingsModel = new SettingsModel(),
                currentSetting = this.settings.find((item) => item.direction === value);
                console.log(currentSetting);

            popupSettingsView.setDirectionList(settingsModel.getDirectionList());
            popupSettingsView.reRenderPopup(currentSetting.tests, currentSetting.filters, value);
        });
    }
}

module.exports = SettingsController;