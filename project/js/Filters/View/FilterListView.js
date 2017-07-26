'use strict';

let filterListViewTpl = require('./tpl/filterListViewTpl.js'),
    FilterView = require('./FilterView.js'),
    mediator = require('../../Mediator.js');

class FilterListView {
    constructor (groupList) {
        this.template = '';
        this.groupList = groupList;
    }

    render () {
        let leftBlock = document.querySelector('.left-column');

        this.template = filterListViewTpl();
        leftBlock.insertAdjacentHTML('beforeend', this.template);
        this.renderFilters();
    }

    renderFilters () {
        this.groupList.forEach((filter) => {
            let filterView = new FilterView();

            filterView.setFilter(filter);

            return filterView.renderFilter();
        });
    }

    appendFilter (filter) {
        let filterView = new filterView();

        filterView.setFilter(filter);
        filterView.renderFilter();
    }
}

module.exports = FilterListView;