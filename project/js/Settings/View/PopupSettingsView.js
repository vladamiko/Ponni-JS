'use strict';

let mediator = require('../../Mediator.js'),
    PopupAddDirectionView = require('../../Settings/View/PopupAddDirectionView.js'),
    PopupAddTestView = require('./PopupAddTestView.js'),
    PopupAddFilterView = require('./PopupAddFilterView.js'),
    settingsPopupTpl = require('../../Settings/View/tpl/settingsPopupTpl.js');

class PopupSettingsView {
    constructor (directions, directionNames) {
        this.directions = directions;
        this.directionNames = directionNames;
        this.selectedDirection = directions[0];
        this.mode = 'T';

        this.modal = document.querySelector('#modal-settings');
    }

    renderPopup () {
        this.modal.innerHTML = settingsPopupTpl(this.directionNames, this.mode, this.selectedDirection);
        this.open();
        this.addListeners();
        this.subscribe();
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let directionSelect = document.querySelector('#modal-settings-direction'),
            closeSettingsBtn = document.querySelector('#close-settings-btn'),
            selectTestBtn = document.querySelector('#test-settings-btn'),
            selectFilterBtn = document.querySelector('#filter-settings-btn'),
            addDirectionPopup = document.querySelector('.add-direction-btn'),
            addFilterTestPopup = document.querySelector('.add-test-filter-btn');

        directionSelect.addEventListener('change', (e) => {
            this.selectedDirection = this.directions.find((item) => item.name === e.target.value);
            this.mode = 'T';
            this.renderPopup();
        });

        selectTestBtn.addEventListener('click', () => {
            this.mode = 'T';
            this.renderPopup();
        });

        selectFilterBtn.addEventListener('click', () => {
            this.mode = 'F';
            this.renderPopup();
        });

        addDirectionPopup.addEventListener('click', () => {
            let popupAddDirectionView = new PopupAddDirectionView();
            
            popupAddDirectionView.renderPopup();
            this.close();
        });

        addFilterTestPopup.addEventListener('click', () => {
            let popup = this.mode === 'T'? new PopupAddTestView(): new PopupAddFilterView(this.directions.testList, this.directions.actionList, this.directions.conditionList);

            popup.renderPopup();
            this.close();
        });

        closeSettingsBtn.addEventListener('click', () => {
            this.close();
        });
    }

    generateData () {
        let groupNameElem = document.querySelector('#modalGroupName'),
            groupDirectionElem = document.querySelector('#modalGroupDirection'),
            data = {};

        data.direction = groupDirectionElem.options[groupDirectionElem.selectedIndex].text;
        data.name = groupNameElem.value;

        return data;
    }

    close () {
        this.modal.classList.remove('visible');
    }

    subscribe () {
        mediator.sub('addPopup:close', () => {
            this.open();
        });

        // mediator.sub('groupPopup:open', () => {
        //     return this.directionNames;
        // });
    }
}

module.exports = PopupSettingsView;