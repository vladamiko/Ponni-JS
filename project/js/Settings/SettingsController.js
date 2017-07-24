'use strict';

let PopupSettingsView = require('../Settings/View/PopupSettingsView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (settingList) {
        this.settingList = settingList;
        this.setting = this.settingList[0];
        this.mode = 'T';

        this.subscribeOpenPopup();
        this.subscribeSelectDirection();
        this.subscribeSelectFilter();
        this.subscribeSelectTest();

        this.popupSettingsView = new PopupSettingsView();
        this.settingsModel = new SettingsModel();
    }

    subscribeOpenPopup () {
        mediator.sub('settingsPopup:open', () => {
            this.popupSettingsView.setDirectionList(this.settingsModel.getDirectionList());
            this.popupSettingsView.renderPopup(this.setting.tests, this.setting.filters, this.mode, this.setting);
            
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
            this.setting = this.settingList.find((item) => item.direction === value);
            this.mode = 'T';

            this.popupSettingsView.setDirectionList(this.settingsModel.getDirectionList());
            this.popupSettingsView.reRenderPopup(this.setting.tests, this.setting.filters, this.mode, value);
        });
    }

    subscribeSelectTest () {
        mediator.sub('test:select', () => {
            this.mode = 'T';
            this.popupSettingsView.reRenderPopup(this.setting.tests, this.setting.filters, this.mode, this.setting);
        });
    }

    subscribeSelectFilter () {
        mediator.sub('filter:select', () => {
            this.mode = 'F';
            this.popupSettingsView.reRenderPopup(this.setting.tests, this.setting.filters, this.mode, this.setting);
        });
    }
}

module.exports = SettingsController;