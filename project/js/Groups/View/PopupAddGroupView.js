'use strict';

let mediator = require('../../Mediator.js'),
    GroupView = require('../../Groups/View/GroupView.js'),
    GroupModel = require('../../Groups/Model/GroupModel.js');

class PopupAddGroupView {
    constructor () {
        this.addListeners();
    }

    addListeners () {
        let closeGroupBtn = document.querySelector('#close-group-btn');

        mediator.sub('group:added', () => {
            let modal = document.querySelector('#modal-add-group'),
                groupNameElement = document.querySelector('.modal-group_name'),
                groupDirectionElement = document.querySelector('.modal-group_direction'),
                groupNameText = '',
                groupDirectionValue = '';
            // Собираем текст с input
            groupNameText = groupNameElement.value;
            // Собираем значение с select
            groupDirectionValue = groupDirectionElement.options[groupDirectionElement.selectedIndex].text;
            // Создаем новый объект группы
            let group = new GroupModel(groupNameText, groupDirectionValue);
            // потом создаем view группы
            let groupView = new GroupView();
            // render
            groupView.setGroup(group);
            groupView.renderGroup();
            
            this.close();
        });

        closeGroupBtn.addEventListener('click', ()=> mediator.pub('group:added'));
    }

    close () {
        let modal = document.querySelector('#modal-add-group');

        modal.classList.remove('visible');
    }
}

module.exports = PopupAddGroupView;