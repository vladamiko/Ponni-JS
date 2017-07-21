'use strict';

let groupTpl = require('./tpl/groupTpl.js'),
    mediator = require('../../Mediator.js');

class GroupView {
    constructor () {
        this.template = '';
        this.addListeners();
    }

    setGroup (group) {
        this.template = groupTpl(group);
    }

    renderGroup () {
        let groupsBlock = document.querySelector('.group_wrapper');

        groupsBlock.insertAdjacentHTML('beforeend', this.template);
    }

    addListeners () {
    }
}

module.exports = GroupView;