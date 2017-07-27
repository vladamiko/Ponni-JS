'use strict';

let mediator = require('../../Mediator.js'),
    PopupAddDirectionView = require('../../Settings/View/PopupAddDirectionView.js'),
    PopupAddTestView = require('./PopupAddTestView.js'),
    PopupAddFilterView = require('./PopupAddFilterView.js'),
    settingsPopupTpl = require('../../Settings/View/tpl/settingsPopupTpl.js');

class PopupSettingsView {
    constructor (directions, directionNames, selectedDirection = directions[0]) {
        this.directions = directions;
        this.directionNames = directionNames;
        this.selectedDirection = selectedDirection;
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
            // closeAddFilterPopup = 
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
            let view;

            if (this.mode === 'T') {
                view = new PopupAddTestView();
                view.renderPopup();
            } else {
                view = new PopupAddFilterView();
                view.renderPopup(this.selectedDirection);
            }

            this.close();
        });

        closeSettingsBtn.addEventListener('click', () => {
            this.close();
        });

        // closeAddFilterPopup.addEventListener('click', () => {
        //     mediator
        // });
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