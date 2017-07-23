'use strict';

function settingsPopupTpl () {
    let directionList = directionListTpl(),
        filterList = filtersListTpl(),
        testList = testListTpl();

    return `<div id="settings-popup" class="modal-content">
                <div class="left-column-settings">${directionList}</div>
                <div class="right-column-settings">
                    <div class="column-settings">
                        <button id="filter-settings-btn" class="btn btn-ft">T</button>
                        <button id="test-settings-btn" class="btn btn-ft">F</button>
                    </div>
                    <div class="column-settings">
                        ${filterList}
                        ${testList}
                    </div>
                    <div class="column-settings">
                        <button id="close-settings-btn" class="btn btn-cog">
                            <i class="fa fa-check" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>`;
}

module.exports = directionListTpl;