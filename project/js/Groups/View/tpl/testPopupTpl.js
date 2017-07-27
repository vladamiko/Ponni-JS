'use strict';

function testPopupTpl () {
    return `<div id="test-popup" class="modal-content">
                <input class="test-name" type="text" placeholder="Enter test name">
                <button class="btn btn-cog close-test-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = testPopupTpl;