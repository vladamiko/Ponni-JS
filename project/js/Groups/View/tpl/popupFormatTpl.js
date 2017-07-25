'use strict';

function popupFormatTpl (testList) {
    let tests = '';

    testList.forEach((item) => {
        tests += `<option>${item}</option>`;
    });

    return `<div id="test-list-popup" class="modal-content">
                <div class="test-list">${tests}</div>
                <button id="close-group-btn" class="btn btn-cog">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = popupFormatTpl;