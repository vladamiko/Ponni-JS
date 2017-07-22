'use strict';

function groupPopupTpl (directionList) {
    let options = '';

    directionList.forEach((item) => {
        options += `<option>${item}</option>`;
    });

    return `<div id="group-popup" class="modal-content">
                <input type="text" class="modal-group_name" placeholder="Enter group name">
                <select class="modal-group_direction">${options}</select>
                <button id="close-group-btn" class="btn btn-cog">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
          </div>`;
}

module.exports = groupPopupTpl;