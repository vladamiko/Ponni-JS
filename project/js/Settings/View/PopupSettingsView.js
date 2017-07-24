'use strict';

let mediator = require('../../Mediator.js'),
    settingsPopupTpl = require('../../Settings/View/tpl/settingsPopupTpl.js');

class PopupSettingsView {
    constructor () {
        this.directionList = [];
        this.filterList = [];
        this.testList = [];
        this.modal = document.querySelector('#modal-settings');
    }

    renderPopup () {
        this.modal.innerHTML = settingsPopupTpl(this.directionList, this.filterList, this.testList);
        this.open();
        this.addListeners();
    }

    reRenderPopup (filterList, testList, selectedDirection) {
        this.modal.innerHTML = settingsPopupTpl(this.directionList, filterList, testList, selectedDirection);
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
            directionSelect = document.querySelector('#modal-settings-direction');

        closeGroupBtn.addEventListener('click', () => {
            mediator.pub('settingsPopup:close');
            mediator.unsub('settingsPopup:close');
        });

        directionSelect.addEventListener('change', (e) => {
            mediator.pub('directionSelect:change', e.target.value);
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