'use strict';

function filterViewTpl (filter) {

    let filterList = filter.filterList,
        filterListName = '';

    filterList.forEach((filter) => filterListName += `<div class="filter-item">
            <input type="checkbox" class="filter-checkbox">
                <div class="filter">
                    <div class="filter-test-list">${filter.testList}</div>
                    <div class="filter-other-list">${filter.action}</div>
                    <div class="filter-other-list">${filter.condition} </div>
                    <div class="filter-other-list">${filter.grade}</div>
                </div>
            <button class="btn filter-btn">X</button>
        </div>`);

    return filterListName;
}

module.exports = filterViewTpl;