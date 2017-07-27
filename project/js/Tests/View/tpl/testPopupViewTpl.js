'use strict';

function testPopupViewTpl () {
    return `<div class="modal-content test-popup">
                <textarea class="test-textarea" placeholder="Please enter people's list"></textarea>
                <button class="btn btn-cog close-test-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`
}

module.exports = testPopupViewTpl;