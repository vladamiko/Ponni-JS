'use strict';

function popupFormatTpl (testList) {
    let tests = '';

    testList.forEach((test) => {
        tests += `<div class="test-name">${test.name}</div>`;
    });

    return `<div id="test-list-popup" class="modal-content format">
                <div class="format-test-list">${tests}</div>
                <button class="btn add-test-btn">add test</button>
                <button class="btn btn-cog close-test-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = popupFormatTpl;