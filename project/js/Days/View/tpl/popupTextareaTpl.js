'use strict';

function popupTextareaTpl () {
    return `<div id="day-popup" class="modal-content">
                <p><textarea rows="10" cols="45" class="text-input"></textarea></p>
                <button class="btn btn-cog close-textarea-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = popupTextareaTpl;