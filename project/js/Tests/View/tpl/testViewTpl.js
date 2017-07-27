'use strict';

function testViewTpl (testList) {
    console.log(testList);
    
    let testListName = '';

    testList.forEach((test) => testListName += `<button class="btn btn-test">${test.name}</button>`);

    return testListName;
}

module.exports = testViewTpl;