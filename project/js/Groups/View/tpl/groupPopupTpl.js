'use strict';

function groupPopupTpl (directionList) {
    let options = '';

    directionList.directions.forEach((direction) => {
        options += `<option>${direction.name}</option>`;
    });

    return `<div id="group-popup" class="modal-content">
                <input type="text" id="modal-group-name" class="modal-group-name" placeholder="Enter group name">
                <select id="modal-group-direction" class="modal-group-direction">${options}</select>
                <button id="close-group-btn" class="btn btn-cog">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = groupPopupTpl;