'use strict';

let mediator = require('../../Mediator.js'),
    settingsPopupTpl = require('../../Settings/View/tpl/settingsPopupTpl.js');

class PopupSettingsView {
    constructor (directions) {
        this.modal = document.querySelector('#modal-settings');

        this.renderPopup();
        this.setDirectionNames();
    }

    renderPopup (directions, mode, selectedDirection) {
        this.modal.innerHTML = settingsPopupTpl(directions, mode, selectedDirection);
        this.open();
        this.addListeners();
    }

    reRenderPopup (directions, mode, selectedDirection) {
        this.modal.innerHTML = settingsPopupTpl(directions, mode, selectedDirection);
        this.addListeners();
    }

    setDirectionNames () {
        this.directions = directions;
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let closeGroupBtn = document.querySelector('#close-settings-btn'),
            directionSelect = document.querySelector('#modal-settings-direction'),
            selectTestBtn = document.querySelector('#test-settings-btn'),
            selectFilterBtn = document.querySelector('#filter-settings-btn'),
            addDirectionPopup = document.querySelector('.add-direction-btn'),
            addTestPopup = document.querySelector('.add-test-btn'),
            addFilterPopup = document.querySelector('.add-filter-btn');

        closeGroupBtn.addEventListener('click', () => {
            mediator.pub('settingsPopup:close');
            mediator.unsub('settingsPopup:close');
        });

        directionSelect.addEventListener('change', (e) => {
            mediator.pub('directionSelect:change', e.target.value);
        });

        selectTestBtn.addEventListener('click', () => {
            mediator.pub('test:select');
        });

        selectFilterBtn.addEventListener('click', () => {
            mediator.pub('filter:select');
        });

        addDirectionPopup.addEventListener('click', () => {
            mediator.pub('addDirectionPopup:open');
        });

        // addTestPopup.addEventListener('click', () => {
        //     mediator.pub('addFilterPopup:open');
        // });

        // addFilterPopup.addEventListener('click', () => {
        //     mediator.pub('addTestPopup:open');
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
}

module.exports = PopupSettingsView;