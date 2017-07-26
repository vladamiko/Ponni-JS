'use strict';

let PopupSettingsView = require('../Settings/View/PopupSettingsView.js'),
    // PopupAddGroupView = require('../Groups/View/PopupAddGroupView.js'),
    // PopupAddDirectionView = require('../Settings/View/PopupAddDirectionView.js'),
    // SettingsModel = require('../Settings/Model/SettingsModel.js'),
    // DirectionModel = require('../Settings/Model/DirectionModel.js'),
    mediator = require('../Mediator.js');

class SettingsController {
    constructor (directions, directionNames) {
        this.directions = directions;
        this.directionNames = directionNames;
        // this.settingsModel = new SettingsModel(defaultDirections);
        // this.popupSettingsView = new PopupSettingsView(directions);
        // this.popupAddDirectionView = new PopupAddDirectionView();
        this.subscribe();

    }

    subscribe () {
        mediator.sub('settingsPopup:open', () => {
             let popupSettingsView = new PopupSettingsView(this.directions, this.directionNames);
             popupSettingsView.renderPopup();
        });
    }


    // subscribe () {
    //     this.subscribeOpenPopups();
    //     this.subscribeSelectDirection();
    //     this.subscribeSelectFilter();
    //     this.subscribeSelectTest();
    // }

    // subscribeOpenPopups () {
    //     mediator.sub('settingsPopup:open', () => {
    //         let directions = this.settingsModel.getDirectionNames();



    //         this.selectedDirection = this.settingsModel.directions[0];
    //         this.mode = 'T';

    //         this.popupSettingsView.renderPopup(directions, this.mode, this.selectedDirection);
    //         this.subscribeClosePopup();
    //     });

    //     mediator.sub('groupPopup:open', () => {
    //         let popupAddGroupView = new PopupAddGroupView(),
    //             directions = this.settingsModel.getDirectionNames();

    //             popupAddGroupView.setDirectionList(directions);
    //             popupAddGroupView.renderPopup();
    //     });

    //     mediator.sub('addDirectionPopup:open', () => {
    //         let popupAddDirectionView = new PopupAddDirectionView();
            
    //         popupAddDirectionView.renderPopup();
    //         this.popupSettingsView.close();
    //         this.subscribeClosePopup();
    //     });
    // }

    // subscribeClosePopup () {
    //     mediator.sub('settingsPopup:close', () => {
    //         this.popupSettingsView.close();
    //     });

    //     mediator.sub('addDirectionPopup:close', () => {
    //         this.popupAddDirectionView.close();
    //         this.popupSettingsView.open();

    //         let directions = this.settingsModel.getDirectionNames();
    //         this.mode = 'T';

    //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
    //     });
    // }

    // subscribeSelectDirection () {
    // 	mediator.sub('directionSelect:change', (directionName) => {
    //         let directions = this.settingsModel.getDirectionNames();
    //         this.selectedDirection = this.settingsModel.directions.find((item) => item.name === directionName);
    //         this.mode = 'T';

    //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
    //     });
    // }

    // subscribeSelectTest () {
    //     mediator.sub('test:select', () => {
    //         let directions = this.settingsModel.getDirectionNames();
    //         this.mode = 'T';

    //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
    //     });
    // }

    // subscribeSelectFilter () {
    //     mediator.sub('filter:select', () => {
    //         let directions = this.settingsModel.getDirectionNames();
    //         this.mode = 'F';
            
    //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
    //     });
    // }

    // subscribeAddDirection () {
    //     mediator.sub('direction:add', () => {
    //         let directions = this.settingsModel.getDirectionNames();
    //         this.mode = 'T';
            
    //         this.popupSettingsView.reRenderPopup(directions, this.mode, this.selectedDirection);
    //     });
    // }
}

module.exports = SettingsController;