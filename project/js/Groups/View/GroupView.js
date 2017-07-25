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
        let groupsBlock = document.querySelector('.group-wrapper');

        groupsBlock.insertAdjacentHTML('afterbegin', this.template);
    }

    addListeners () {
        
    }
}

module.exports = GroupView;