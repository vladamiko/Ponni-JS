'use strict';

function filterTpl (filterList) {
    let filters = '';

    filterList.forEach((filter) => {
        filters += `<div class="filter">${filter}</div>`;
    });

    return `<div class="filter-list-wrapper">
                <h3>Filter</h3>
                <div class="filter-list">${filters}</div>
                <button class="add-filter-btn btn">add filter</button>
            </div>`;
}

module.exports = filterTpl;