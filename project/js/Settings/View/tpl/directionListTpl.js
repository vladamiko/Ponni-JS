'use strict';

function directionListTpl (directionList) {
    let options = '';

    directionList.forEach((item) => {
        options += `<option>${item}</option>`;
    });

    return `<div class="direction-list-wrapper">
                <select id="modal-settings-direction" class="modal-settings-direction">${options}</select>
                <button class="add-direction-btn btn-cog">add direction</button>
            </div>`;
}

module.exports = directionListTpl;