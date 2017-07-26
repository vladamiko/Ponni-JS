'use strict';

function popupFormatTpl (testList) {
    console.log(testList);
    let tests = '';

    testList.forEach((test) => {
        tests += `<div class="test-name">${test.name}</div>`;
    });

    return `<div id="test-list-popup" class="modal-content format">
                <div class="format-test-list">${tests}
                    <button class="btn add-test-btn">add test</button>
                </div>
                <button id="close-group-btn" class="btn btn-cog">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`;
}

module.exports = popupFormatTpl;