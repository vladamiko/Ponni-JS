'use strict';

function filterViewTpl (filter) {

    let filterList = filter.filterList,
        filterListName = '';

    filterList.forEach((filter) => filterListName += `<div class="filter">
                                                        <div>${filter.testList}</div>
                                                        <div>${filter.action} </div>
                                                        <div>${filter.condition} </div>
                                                        <div>${filter.grade}</div>
                                                    </div>`);

    return filterListName;
}

module.exports = filterViewTpl;