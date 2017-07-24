'use strict';

let mediator = require('../../Mediator.js'),
    settingsPopupTpl = require('../../Settings/View/tpl/settingsPopupTpl.js');

class PopupSettingsView {
    constructor () {
        this.modal = document.querySelector('#modal-settings');
    }

    renderPopup (testList, filterList, mode, selectedDirection) {
        this.modal.innerHTML = settingsPopupTpl(this.directionList, testList, filterList, mode, selectedDirection);
        this.open();
        this.addListeners();
    }

    reRenderPopup (testList, filterList, mode, selectedDirection) {
        this.modal.innerHTML = settingsPopupTpl(this.directionList, testList, filterList, mode, selectedDirection);
        this.addListeners();
    }

    setDirectionList (directionList) {
        this.directionList = directionList;
    }

    open () {
        this.modal.classList.add('visible');
    }

    addListeners () {
        let closeGroupBtn = document.querySelector('#close-settings-btn'),
            directionSelect = document.querySelector('#modal-settings-direction'),
            selectTestBtn = document.querySelector('#test-settings-btn'),
            selectFilterBtn = document.querySelector('#filter-settings-btn');

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