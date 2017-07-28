'use strict';

let filterListViewTpl = require('./tpl/filterListViewTpl.js'),
    FilterView = require('./FilterView.js'),
    mediator = require('../../Mediator.js');

class SlotListView {
    constructor (groupList) {
        this.template = '';
        this.groupList = groupList;
    }

    render () {
        let dayBlock = document.querySelector('.day');

        this.template = slotListViewTpl();
        leftBlock.insertAdjacentHTML('beforeend', this.template);
        this.addListeners();
    }

    renderFilters () {
        this.groupList.forEach((filter) => {
            let filterView = new FilterView();

            filterView.setFilter(filter.filterList);

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

module.exports = SlotListView;