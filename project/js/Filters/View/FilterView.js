'use strict';

let filterViewTpl = require('./tpl/filterViewTpl.js'),
    mediator = require('../../Mediator.js');

class FilterView {
    constructor () {
        this.template = '';
    }

    setFilter (filter) {
        this.filter = filter;
        this.setTemplate(this.filter);
    }

    setTemplate (filter) {
        this.template = filterViewTpl(filter);
    }

    renderFilter () {
        let filtersBlock = document.querySelector('.filter-wrapper');
        filtersBlock.insertAdjacentHTML('afterbegin', this.template);
    }
}

module.exports = FilterView;