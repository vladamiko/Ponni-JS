'use strict';

let groupTpl = require('./tpl/groupTpl.js'),
    mediator = require('../../Mediator.js');

class GroupView {
    constructor () {
        this.template = '';
        this.groupsBlock = document.querySelector('.group-wrapper');
    }

    setGroup (group) {
        this.group = group;
        this.setTemplate(this.group);
    }

    setTemplate (group) {
        this.template = groupTpl(group);
    }

    renderGroup () {
        this.groupsBlock.insertAdjacentHTML('afterbegin', this.template);
        this.addListeners();
    }

    addListeners () {
        let formatGroupBtn = this.groupsBlock.querySelector('.format-added-btn');

        formatGroupBtn.addEventListener('click', () => mediator.pub('formatAdded:open', this.group));
    }
}

module.exports = GroupView;