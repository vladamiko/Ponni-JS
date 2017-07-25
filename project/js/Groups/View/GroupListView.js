'use strict';

let groupListTpl = require('./tpl/groupListTpl.js'),
    GroupView = require('./GroupView.js'),
    mediator = require('../../Mediator.js');

class GroupListView {
    constructor (groupList) {
        this.template = '';
        this.groupList = groupList;
    }

    render () {
        let leftBlock = document.querySelector('.left-column');

        this.template = groupListTpl();

        leftBlock.insertAdjacentHTML('afterbegin', this.template);

        this.renderGroups();

        this.addListeners();
    }

    renderGroups () {
        this.groupList.forEach((group) => {
            let groupView = new GroupView();

            groupView.setGroup(group);

            return groupView.renderGroup();
        });
    }

    appendGroup (group) {
        let groupView = new GroupView();

        groupView.setGroup(group);
        groupView.renderGroup();
    }

    addListeners () {
        let addGroupBtn = document.querySelector('.add-group-btn'),
            settingsBtn = document.querySelector('#settings-btn');

        addGroupBtn.addEventListener('click', () => mediator.pub('groupPopup:open'));
        settingsBtn.addEventListener('click', () => mediator.pub('settingsPopup:open'));
    }
}

module.exports = GroupListView;