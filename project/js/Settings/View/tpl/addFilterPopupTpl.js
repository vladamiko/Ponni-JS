'use strict';

function addFilterPopupTpl (testList, actionList, conditionList) {
    let actions = '',
        conditions = '';

    testList.forEach((item) => {
        tests += `<option>${item}</option>`;
    });

    actionList.forEach((item) => {
        actions += `<option>${item}</option>`;
    });

    return `<div class="modal-content add-filter-popup">
                <div class="left-column-filter">${testList}</div>
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
                <button class="btn btn-cog">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = addFilterPopupTpl;