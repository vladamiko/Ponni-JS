'use strict';

let slotViewTpl = require('./tpl/slotViewTpl.js'),
    mediator = require('../../Mediator.js');

class SlotView {
    constructor () {
        this.template = '';
        this.slotBlock = document.querySelector('.slot-wrapper');
    }

    setSlot (day) {
        this.template = slotViewTpl(day);
    }

    renderSlot () {
        this.slotBlock.insertAdjacentHTML('beforeend', this.template);
        this.addListeners();
    }

    addListeners () {
        let assignUsers = this.slotBlock.querySelector('.assing-users-btn');

        assignUsers.addEventListener('click', () => mediator.pub('textareaPopup:open'));
    }
}

module.exports = SlotView;