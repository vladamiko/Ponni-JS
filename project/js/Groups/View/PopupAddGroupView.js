'use strict';

let mediator = require('../../Mediator.js'),
    GroupView = require('../../Groups/View/GroupView.js'),
    GroupModel = require('../../Groups/Model/GroupModel.js'),
    groupPopupTpl = require('../../Groups/View/tpl/groupPopupTpl.js');

class PopupAddGroupView {
    constructor (directionList) {
        this.directionList = directionList;
        this.modal = document.querySelector('#modal-add-group');
    }

    renderPopup () {
        this.modal.innerHTML = groupPopupTpl(this.directionList);
        this.open();
        this.addListeners();
    }

    addListeners () {
        let closeGroupBtn = this.modal.querySelector('#close-group-btn');

        closeGroupBtn.addEventListener('click', () => {
            let data = this.generateData(),
                group = {};

            this.directionList.forEach((direction) => {
               if (data.direction === direction.name) {
                   group = new GroupModel(data.name, direction);
               }
            });

            mediator.pub('group:created', group);

            this.close();
        });
    }

    generateData () {
        let groupNameElem = this.modal.querySelector('#modal-group-name'),
            groupDirectionElem = this.modal.querySelector('#modal-group-direction'),
            data = {};

        data.direction = groupDirectionElem.options[groupDirectionElem.selectedIndex].text;
        data.name = groupNameElem.value;

        return data;
    }

    open () {
        this.modal.classList.add('visible');
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddGroupView;