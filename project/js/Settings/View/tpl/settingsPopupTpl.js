'use strict';

let directionListTpl = require('./directionListTpl.js'),
    filterListTpl = require('./filterListTpl.js'),
    testListTpl = require('./testListTpl.js');

function settingsPopupTpl (directions, tests, filters, selectedDirection) {
    let directionList = directionListTpl(directions, selectedDirection),
        filterList = filterListTpl(filters),
        testList = testListTpl(tests);

    return `<div id="settings-popup" class="modal-content">
                <div class="left-column-settings">${directionList}</div>
                <div class="right-column-settings">
                    <div class="column-settings">
                        <button id="test-settings-btn" class="btn btn-ft">T</button>
                        <button id="filter-settings-btn" class="btn btn-ft">F</button>
                    </div>
                    <div class="column-settings">
                        ${testList}
                        ${filterList}
                    </div>
                    <div class="column-settings">
                        <button id="close-settings-btn" class="btn btn-cog">
                            <i class="fa fa-check" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>`;
}

module.exports = settingsPopupTpl;