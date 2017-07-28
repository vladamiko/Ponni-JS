'use strict';

function addSlotPopupTpl (timeList) {
    let options = '';

    timeList.forEach((item) => {
        options += `<option>${item}</option>`;
    });

    return `<div id="day-popup" class="modal-content">
                <select class="modal-slot">${options}</select>
                <button class="btn btn-cog close-slot-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = addSlotPopupTpl;