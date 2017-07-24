'use strict'

function addFilterTpl (filter) {
    return `<div class="filter">
                <div class="filter-name">${filter.filterName}</div>
                <div>${filter.testList}</div>
                <div>${filter.action}</div>
                <div>${filter.condition}</div>
                <div>${filter.grade}</div>
            </div>`;
}

module.exports = addFilterTpl;