'use strict';

let generateGroupTpl = require('./templates/generateGroupTpl.js'),
    mediator = require('../../Mediator.js');

class GroupView {
    constructor () {
        this.template = '';
        this.addListeners();
    }

    setGroup (group) {
        this.template = generateGroupTpl(group);
    }

    renderGroup () {
        let groupsBlock = document.querySelector('.group_wrapper');

        groupsBlock.insertAdjacentHTML('beforeend', this.template);
    }

    addListeners () {
        let addGroupBtn = document.querySelector('.add-group-btn');

        addGroupBtn.addEventListener('click', ()=> mediator.pub('Group:added'));
    }
}

module.exports = GroupView;