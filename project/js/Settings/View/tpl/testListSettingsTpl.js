'use strict';

function testListSettingsTpl (testsList) {
    let tests = '';

    testsList.forEach((test) => {
        tests += `<div class="test">${test.name}</div>`;
    });

    return `<div class="test-list-wrapper">
                <h3>Tests</h3>
                <div class="test-list">${tests}</div>
                <button class="add-test-filter-btn btn">add test</button>
            </div>`;
}

module.exports = testListSettingsTpl;