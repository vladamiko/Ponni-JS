'use strict';

let PopupSettingsView = require('../Settings/View/PopupSettingsView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (settings) {
        this.settings = settings;
        this.setting = this.settings[0];
        this.mode = 'T';

        this.settingsModel = new SettingsModel(this.settings);
        this.popupSettingsView = new PopupSettingsView();

        this.subscribe();
    }

    subscribe () {
        this.subscribeOpenPopup();
        this.subscribeSelectDirection();
        this.subscribeSelectFilter();
        this.subscribeSelectTest();
    }

    subscribeOpenPopup () {
        mediator.sub('settingsPopup:open', () => {
            this.popupSettingsView.renderPopup(this.setting.tests, this.setting.filters, this.mode, this.setting.direction);
            
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
            this.setting = this.settings.find((item) => item.direction === value);
            this.mode = 'T';

            this.popupSettingsView.reRenderPopup(this.setting.tests, this.setting.filters, this.mode, this.setting.direction);
        });
    }

    subscribeSelectTest () {
        mediator.sub('test:select', () => {
            this.mode = 'T';

            this.popupSettingsView.reRenderPopup(this.setting.tests, this.setting.filters, this.mode, this.setting.direction);
        });
    }

    subscribeSelectFilter () {
        mediator.sub('filter:select', () => {
            this.mode = 'F';
            
            this.popupSettingsView.reRenderPopup(this.setting.tests, this.setting.filters, this.mode, this.setting.direction);
        });
    }
}

module.exports = SettingsController;