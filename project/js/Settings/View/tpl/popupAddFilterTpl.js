'use strict';

let Filter = require('../../../Filters/Model/Filter.js');

function popupAddFilterTpl (testList) {
    let tests = generateTestList(testList),
        actions = generateList(Filter.ACTION_LIST),
        conditions = generateList(Filter.CONDITION_LIST);

    function generateTestList (list) {
        return list.map((item) => `<div><input type="checkbox" value="${item.name}" name="tests" />${item.name}</div>`).join('');
    }

    function generateList (list) {
        return list.map((item) => `<option>${item}</option>`).join('');
    }

    return `<div class="modal-content add-filter-popup">
                <div class="left-column-filter">
                ${tests}
                </div>
                <div class="right-column-filter">
                    <div>
                        <input type="text" class="add-test-name" placeholder="Enter test name">
                    </div>
                    <div>
                        <select class="modal-filter-action">${actions}</select>
                        <select class="modal-filter-condition">${conditions}</select>
                        <input type="text" class="add-test-grade" placeholder="Enter grade">
                    </div>
                </div>
                <button class="btn btn-cog close-filter-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = popupAddFilterTpl;