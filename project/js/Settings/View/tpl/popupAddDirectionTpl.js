'use strict';

function popupAddDirectionTpl () {
    return `<div class="modal-content add-direction-popup">
                <input type="text" class="add-direction-name" placeholder="Enter direction name">
                <button class="btn btn-cog">
                    <i class="fa fa-check close-direction-btn" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = popupAddDirectionTpl;