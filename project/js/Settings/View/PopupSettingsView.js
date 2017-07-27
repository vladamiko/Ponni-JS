'use strict';

let mediator = require('../../Mediator.js'),
    PopupAddDirectionView = require('../../Settings/View/PopupAddDirectionView.js'),
    PopupAddTestView = require('./PopupAddTestView.js'),
    PopupAddFilterView = require('./PopupAddFilterView.js'),
    popupSettingsTpl = require('../../Settings/View/tpl/popupSettingsTpl.js');

class PopupSettingsView {
    constructor (directions, directionNames) {
        this.directions = directions;
        this.directionNames = directionNames;
        this.mode = 'T';
        this.modal = document.querySelector('#modal-settings');
    }

    render (selectedDirection = this.directions[0]) {   
        this.selectedDirection = selectedDirection;
        this.modal.innerHTML = popupSettingsTpl(this.directionNames, this.mode, this.selectedDirection);
        this.open();
        this.addListeners();
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
            this.render(this.selectedDirection);
        });

        selectTestBtn.addEventListener('click', () => {
            this.mode = 'T';
            this.render(this.selectedDirection);
        });

        selectFilterBtn.addEventListener('click', () => {
            this.mode = 'F';
            this.render(this.selectedDirection);
        });

        addDirectionPopup.addEventListener('click', () => {
            let view = new PopupAddDirectionView();

            this.close();
        });

        addFilterTestPopup.addEventListener('click', () => {
            let view;

            if (this.mode === 'T') {
                view = new PopupAddTestView(this.selectedDirection);
            } else {
                view = new PopupAddFilterView(this.selectedDirection);
            }

            this.close();
        });

        closeSettingsBtn.addEventListener('click', () => {
            this.close();
        });
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupSettingsView;