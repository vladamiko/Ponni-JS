'use strict';

let FilterListView = require('./View/FilterListView.js'),
    mediator = require('../Mediator.js');

class FilterController {
    constructor (groupList) {
        this.groupList = groupList;
        this.subscribe();
    }

    subscribe () {
        mediator.sub('group:active', () => {
            let filterListView = new FilterListView(this.groupList);

            filterListView.appendFilter(groupList);
        });
    }

    showFilterList () {
        let filterListView = new FilterListView(this.groupList);

        filterListView.render();
    }
}

module.exports = FilterController;