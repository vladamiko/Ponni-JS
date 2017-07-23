'use strict';

function groupPopupTpl (directionList) {
    let options = '';

    directionList.forEach((item) => {
        options += `<option>${item}</option>`;
    });

    return `<div id="group-popup" class="modal-content">
                <input type="text" id="modalGroupName" class="modal-group-name" placeholder="Enter group name">
                <select id="modalGroupDirection" class="modal-group-direction">${options}</select>
                <button id="close-group-btn" class="btn btn-cog">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = groupPopupTpl;