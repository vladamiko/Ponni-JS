'use strict';

let FilterListView = require('./View/FilterListView.js'),
    FilterPopupView = require('./View/FilterPopupView.js'),
    mediator = require('../Mediator.js');

class FilterController {
    constructor (groupList) {
        this.groupList = groupList;
        this.subscribe();
    }

    subscribe () {
        mediator.sub('filterPopup:open', () => {
            let filterPopupView = new FilterPopupView(this.group);
        });

        mediator.sub('filter:created', (group) => {
            let filterListView = new FilterListView(group.filterList);

            filterListView.appendFilter();
        });

        mediator.sub('group:active', (group) => {
            let filterListView = new FilterListView(group.filterList);
            this.group = group;

            filterListView.appendFilter();
        });   
    }

    showFilterList () {
        let filterListView = new FilterListView(this.groupList);

        filterListView.render();
    }
}

module.exports = FilterController;