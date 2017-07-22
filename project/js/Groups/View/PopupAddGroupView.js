'use strict';

let mediator = require('../../Mediator.js'),
    GroupView = require('../../Groups/View/GroupView.js'),
    GroupModel = require('../../Groups/Model/GroupModel.js'),
    groupPopupTpl = require('../../Groups/View/tpl/groupPopupTpl.js');

class PopupAddGroupView {
    constructor () {
        this.directionList = [];
        this.modal = document.querySelector('#modal-add-group');
    }

    /*generateDirectionListTpl (directionList) {
        let options = '';

        directionList.forEach((item) => {
            options += `<option>${item}</option>`;
        });

        return options;
    }

    addDirectionList (directionList) {
        let select = document.querySelector('#modal-add-group select');

        select.innerHTML = this.generateDirectionListTpl(directionList);
    }*/

    renderPopup () {
        this.modal.innerHTML = groupPopupTpl(this.directionList);
        this.open();
        this.addListeners();
    }

    setDirectionList (directionList) {
        this.directionList = directionList;
    }

    addListeners () {
        let closeGroupBtn = document.querySelector('#close-group-btn');

        closeGroupBtn.addEventListener('click', () => mediator.pub('group:added'));
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
        let modal = document.querySelector('#modal-add-group');
        
        modal.classList.remove('visible');
    }
}

module.exports = PopupAddGroupView;