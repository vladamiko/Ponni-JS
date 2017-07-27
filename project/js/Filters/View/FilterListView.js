'use strict';

let filterListViewTpl = require('./tpl/filterListViewTpl.js'),
    FilterView = require('./FilterView.js'),
    mediator = require('../../Mediator.js');

class FilterListView {
    constructor (filterList) {
        this.template = '';
        this.filterList = filterList;
    }

    render () {
        let leftBlock = document.querySelector('.left-column');

        this.template = filterListViewTpl();
        leftBlock.insertAdjacentHTML('beforeend', this.template);
        // this.renderFilters();
        // this.addListeners();
    }

    renderFilters () {
        this.filterList.forEach((filter) => {
            let filterView = new FilterView();

            filterView.setFilter(filter);

            return filterView.renderFilter();
        });
    }

    appendFilter () {
        let filterView = new FilterView();

        filterView.setFilter(this.groupList);
        filterView.renderFilter();
    }

    addListeners () {
        let addFilterBtn = document.querySelector('.add-filter-btn');

        addFilterBtn.addEventListener('click', () => mediator.pub('filterPopup:open'));
    }
}

module.exports = FilterListView;