'use strict';

let mediator = require('../../Mediator.js'),
    settingsPopupTpl = require('../../Settings/View/tpl/settingsPopupTpl.js');

class PopupSettingsView {
    constructor (directions, directionNames) {
        this.directions = directions;
        this.directionNames = directionNames;
        this.selectedDirection = directions[0];
        this.mode = 'T';


        this.setDirectionNames();
        this.modal = document.querySelector('#modal-settings');
    }

    renderPopup () {
        this.modal.innerHTML = settingsPopupTpl(this.directionNames, this.mode, this.selectedDirection);
        this.open();
        this.addListeners();
    }



    reRenderPopup (directions, mode, selectedDirection) {
        this.modal.innerHTML = settingsPopupTpl(directions, mode, selectedDirection);
        this.addListeners();
    }

    setDirectionNames () {
        // let directionSelect = document.querySelector('.direction-select'),
        //     optionList = '',
        //     tpl = '';

        // this.settings.directionList.forEach((direction, i) => {
        //     optionList += `
        //         <option ${(i = 0) ? 'selected' : ''} value="${direction.name}">
        //             ${direction.name}
        //         </option>
        //     `;
        // });
        

        let directionNames = [];

        this.directions.forEach((item) => {
            directionNames.push(item.name);
        });
console.log(this.directions);
        return directionNames;
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