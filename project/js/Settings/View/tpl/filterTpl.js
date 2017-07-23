'use strict';

function filterTpl () {
    return `<div class="filter-list-wrapper">
                <div class="filter-list">
                    <h3>Filter</h3>
                    <div class="filter"></div>
                </div>
                <button class="add-filter-btn btn">add filter</button>
            </div>`;
}

module.exports = filterTpl;