'use strict';

function filterViewTpl (filter) {
    return `<div class="filter-item">
            <input type="checkbox" class="filter-checkbox">
                <div class="filter">
                    <div class="filter-test-list">${filter}</div>
                    <div class="filter-other-list">${filter}</div>
                    <div class="filter-other-list">${filter} </div>
                    <div class="filter-other-list">${filter}</div>
                </div>
            <button class="btn filter-btn">X</button>
        </div>`;
}

module.exports = filterViewTpl;