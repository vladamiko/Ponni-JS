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
        this.group.on('change', () => this.renderGroup);
    }

    setTemplate (group) {
        this.template = groupTpl(group);
    }

    renderGroup () {
        this.groupsBlock.insertAdjacentHTML('afterbegin', this.template);
        this.addListeners();
    }

    addListeners () {
        let formatGroupBtn = this.groupsBlock.querySelector('.format-added-btn'),
            groupElement = this.groupsBlock.querySelector('.group');

        formatGroupBtn.addEventListener('click', () => mediator.pub('formatAdded:open', this.group));
        groupElement.addEventListener('click', (e) => {
           let buttonElement = e.target.classList.contains('format-added-btn');

            if (!buttonElement) {
                groupElement.classList.add('active');
                mediator.pub('group:active', this.group);
            }
        });
    }
}

module.exports = GroupView;