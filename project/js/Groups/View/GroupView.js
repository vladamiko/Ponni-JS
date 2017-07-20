'use strict';

let generateTpl = require('./generateTpl.js');

class GroupView {
    constructor () {
        this.group = '';
    }

    setGroup (group) {
        let groupTitle = group.name;

        this.group = generateTpl(groupTitle);
    }

    renderGroup () {
        let groupsBlock = document.querySelector('.group_wrapper');

        groupsBlock.insertAdjacentHTML('beforeend', this.group);
    }
}

module.exports = GroupView;