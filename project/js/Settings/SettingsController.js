'use strict';

let PopupSettingsView = require('../Settings/View/PopupSettingsView.js'),
    PopupAddGroupView = require('../Groups/View/PopupAddGroupView.js'),
    SettingsModel = require('../Settings/Model/SettingsModel.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (settings) {
        this.settingsModel = new SettingsModel(settings);
        this.popupSettingsView = new PopupSettingsView();
        
        this.subscribe();
    }

    subscribe () {
        this.subscribeOpenPopups();
        this.subscribeSelectDirection();
        this.subscribeSelectFilter();
        this.subscribeSelectTest();
    }

    subscribeOpenPopups () {
        mediator.sub('settingsPopup:open', () => {
            let directions = this.settingsModel.getDirectionNames();

            this.selectedDirection = this.settingsModel.directions[0];
            this.mode = 'T';

            this.popupSettingsView.renderPopup(directions, this.mode, this.selectedDirection);
            this.subscribeClosePopup();
        });

        mediator.sub('groupPopup:open', () => {
            let popupAddGroupView = new PopupAddGroupView(),
                directions = this.settingsModel.getDirectionNames();

                popupAddGroupView.setDirectionList(directions);
                popupAddGroupView.renderPopup();
        });
    }

    subscribeClosePopup () {
        mediator.sub('settingsPopup:close', () => {
            this.popupSettingsView.close();
        });
    }

    subscribeSelectDirection () {
    	mediator.sub('directionSelect:change', (directionName) => {
            let directions = this.settingsModel.getDirectionNames();
            this.selectedDirection = this.settingsModel.directions.find((item) => item.name === directionName);
            this.mode = 'T';

            this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
        });
    }

    subscribeSelectTest () {
        mediator.sub('test:select', () => {
            let directions = this.settingsModel.getDirectionNames();
            this.mode = 'T';

            this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
        });
    }

    subscribeSelectFilter () {
        mediator.sub('filter:select', () => {
            let directions = this.settingsModel.getDirectionNames();
            this.mode = 'F';
            
            this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
        });
    }
}

module.exports = SettingsController;