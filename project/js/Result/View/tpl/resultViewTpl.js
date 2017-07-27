'use strict';

function resultViewTpl (result) {

    let resultList = result.people,
        resultInfoList = '';

    resultList.forEach((result) => resultInfoList += `<div class="result-item">
            <div class="result">
                <div>${result.lastName}</div>
                <div>${result.name} </div>
                <div>${result.email} </div>
                <div>${result.grades}</div>
            </div>
        </div>`);

    return resultInfoList;
}

module.exports = resultViewTpl;