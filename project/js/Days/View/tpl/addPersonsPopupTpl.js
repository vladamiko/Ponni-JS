'use strict';

function addPersonsPopupTpl () {
    return `<div class="slot-popup modal-content">
                <textarea class="slots-textarea" placeholder="Please enter people's list"></textarea>
                <button class="btn btn-cog close-slot-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = addPersonsPopupTpl;