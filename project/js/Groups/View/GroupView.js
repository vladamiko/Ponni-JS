'use strict';

let generateTpl = require('./generateTpl.js'),
    mediator = require('../../Mediator.js');

class GroupView {
    constructor () {
        this.group = '';
        this.addListeners();
    }

    setGroup (group) {
        let groupTitle = group.name;

        this.group = generateTpl(groupTitle);
    }

    renderGroup () {
        let groupsBlock = document.querySelector('.group_wrapper');

        groupsBlock.insertAdjacentHTML('beforeend', this.group);
    }

    addListeners () {
        let addGroupBtn = document.querySelector('.add-group-btn');

        addGroupBtn.addEventListener('click', ()=> mediator.pub('Group:added'));
    }
}

module.exports = GroupView;