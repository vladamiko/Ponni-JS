'use strict';

function testListTpl (testsList) {
    let tests = '';

    testsList.forEach((test) => {
        tests += `<div class="test">${test}</div>`;
    });

    return `<div class="test-list-wrapper">
                <div class="test-list">${tests}</div>
                <button class="add-test-btn btn">add test</button>
            </div>`;
}

module.exports = testListTpl;