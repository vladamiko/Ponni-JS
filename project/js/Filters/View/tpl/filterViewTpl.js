'use strict';

function filterViewTpl (filter) {

    let filterList = filter.filterList,
        filterListName = '';

    filterList.forEach((filter) => filterListName += `<div class="filter-item">
            <input type="checkbox" class="filter-checkbox">
                <div class="filter">
                    <div>${filter.testList}</div>
                    <div>${filter.action} </div>
                    <div>${filter.condition} </div>
                    <div>${filter.grade}</div>
                </div>
            <button class="btn filter-btn">123</button>
        </div>`);

    return filterListName;
}

module.exports = filterViewTpl;