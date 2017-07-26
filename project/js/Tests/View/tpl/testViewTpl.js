'use strict';

function testViewTpl (test) {

    let testList = test.testList,
        testListName = '';

    testList.forEach((test) => testListName += `<div class="test">${test.name}</div>`);

    return testListName;
}

module.exports = testViewTpl;