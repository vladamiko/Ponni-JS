'use strict';

function filterListSettingsTpl (filterList) {
    let filters = '';

    filterList.forEach((filter) => {
        filters += `<div class="filter">${filter.name}</div>`;
    });

    return `<div class="filter-list-wrapper">
                <h3>Filters</h3>
                <div class="filter-list">${filters}</div>
                <button class="add-test-filter-btn btn">add filter</button>
            </div>`;
}

module.exports = filterListSettingsTpl;