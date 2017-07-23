'use strict';

let mediator = require('../../Mediator.js'),
    GroupView = require('../../Groups/View/GroupView.js'),
    GroupModel = require('../../Groups/Model/GroupModel.js'),
    groupPopupTpl = require('../../Groups/View/tpl/groupPopupTpl.js');

class PopupSettingsView {
    constructor () {
        this.directionList = [];
        this.modal = document.querySelector('#modal-settings');
    }

    renderPopup () {
        this.modal.innerHTML = groupPopupTpl(this.directionList);
        this.open();
    }

    setDirectionList (directionList) {
        this.directionList = directionList;
    }

    open () {
        this.modal.classList.add('visible');
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