'use strict';

function filterListTpl (filterList) {
    let filters = '';

    filterList.forEach((filter) => {
        filters += `<div class="filter">${filter.grade}</div>`;
    });

    return `<div class="filter-list-wrapper">
                <h3>Filters</h3>
                <div class="filter-list">${filters}</div>
                <button class="add-filter-btn btn">add filter</button>
            </div>`;
}

module.exports = filterListTpl;