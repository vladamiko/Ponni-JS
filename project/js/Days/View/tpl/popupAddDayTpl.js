'use strict';

function popupAddDayTpl () {
    return `<div id="day-popup" class="modal-content">
                <input type="date" class="dateInput">
                <button class="btn btn-cog close-day-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = popupAddDayTpl;