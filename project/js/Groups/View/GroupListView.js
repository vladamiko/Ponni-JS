'use strict';

let groupListTpl = require('./tpl/groupListTpl.js'),
    GroupView = require('./GroupView.js'),
    mediator = require('../../Mediator.js');

class GroupListView {
    constructor () {
        this.template = '';
        this.group = {};
        this.groupView = {};
    }

    render () {
        let leftBlock = document.querySelector('.left-column');

        this.template = groupListTpl();

        leftBlock.insertAdjacentHTML('afterbegin', this.template);

        this.addListeners();
    }

    appendGroup (group) {
        this.group = group;
        this.groupView = new GroupView();
        this.groupView.setGroup(this.group);
        this.groupView.renderGroup();
    }
    
    addListeners () {
        let addGroupBtn = document.querySelector('.add-group-btn'),
            settingsBtn = document.querySelector('#settings-btn');

        addGroupBtn.addEventListener('click', () => mediator.pub('groupPopup:open'));
        settingsBtn.addEventListener('click', () => mediator.pub('settingsPopup:open'));
    }
}

module.exports = GroupListView;