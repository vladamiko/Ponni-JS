'use strict';

function testViewTpl (test) {
    let testList = test,
        testListName = '';

    testList.forEach((test) => testListName += `<button class="btn btn-test">${test.name}</button>`);

    return testListName;
}

module.exports = testViewTpl;