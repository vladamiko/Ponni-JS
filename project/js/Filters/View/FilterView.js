'use strict';

let filterViewTpl = require('./tpl/filterViewTpl.js'),
    mediator = require('../../Mediator.js');

class FilterView {
    constructor () {
        this.template = '';
        this.filtersBlock = document.querySelector('.filter-wrapper');
    }

    setFilter (filter) {
        this.filter = filter;
        this.setTemplate(this.filter);
    }

    setTemplate (filter) {
        this.template = filterViewTpl(filter);
    }

    renderFilter () {
        this.filtersBlock.insertAdjacentHTML('afterbegin', this.template);
    }
}

module.exports = FilterView;