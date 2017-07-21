'use strict';

let mediator = require('../../Mediator.js'),
    GroupView = require('../../Groups/View/GroupView.js'),
    GroupModel = require('../../Groups/Model/GroupModel.js'),
    groupPopupTpl = require('../../Groups/View/tpl/groupPopupTpl.js');

class PopupAddGroupView {
    constructor () {
        this.modal = document.querySelector('#modal-add-group');
        this.renderPopup();
        this.addListeners();
    }

    renderPopup () {
        this.modal.innerHTML = groupPopupTpl();
    }

    addListeners () {
        let closeGroupBtn = document.querySelector('#close-group-btn');

        mediator.sub('group:added', () => {
            let groupNameElement = document.querySelector('.modal-group_name'),
                groupDirectionElement = document.querySelector('.modal-group_direction'),
                groupDirectionValue = groupDirectionElement.options[groupDirectionElement.selectedIndex].text,
                groupNameText = groupNameElement.value,
                group = new GroupModel(groupNameText, groupDirectionValue),
                groupView = new GroupView();

            groupView.setGroup(group);
            groupView.renderGroup();

            this.close();
        });

        closeGroupBtn.addEventListener('click', () => mediator.pub('group:added'));
    }

    close () {
        this.modal.classList.remove('visible');
    }
}

module.exports = PopupAddGroupView;