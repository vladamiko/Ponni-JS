'use strict';

let groupListTpl = require('./tpl/groupListTpl.js'),
    mediator = require('../../Mediator.js');

class GroupListView {
    constructor () {
        this.template = '';
    }

    render () {
        let leftBlock = document.querySelector('.left-column');

        this.template = groupListTpl();

        leftBlock.insertAdjacentHTML('afterbegin', this.template);

        this.addListeners();
    }
    
    addListeners () {
        let addGroupBtn = document.querySelector('.add-group-btn');

        addGroupBtn.addEventListener('click', () => mediator.pub('groupPopup:open'));
    }
}

module.exports = GroupListView;