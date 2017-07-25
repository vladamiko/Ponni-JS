'use strict';

function addTestPopupTpl () {
    return `<div class="modal-content add-test-popup">
                <input type="text" class="add-test-name" placeholder="Enter test name">
                <button class="btn btn-cog close-test-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = addTestPopupTpl;