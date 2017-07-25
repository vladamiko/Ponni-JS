'use strict';

function addFilterPopupTpl (testList, actionList, conditionList) {
    let tests = generateTestList(testList),
        actions = generateList(actionList),
        conditions = generateList(conditionList);

    function generateList (list) {
        list.forEach((item) => {
            list += `<option>${item}</option>`;
        });

        return list;
    }

    function generateTestList (list) {
        list.forEach((item) => {
            list += `<li>${item}</li>`;
        });

        return list;
    }

    return `<div class="modal-content add-filter-popup">
                <div class="left-column-filter">
                <ul>${tests}</ul>
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

module.exports = addFilterPopupTpl;