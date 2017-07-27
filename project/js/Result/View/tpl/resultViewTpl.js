'use strict';

function resultViewTpl (result) {
    let resultList = result,
        resultInfoList = '';

    resultList.forEach((result) => resultInfoList += `<div class="result-item">
            <div class="result">
                <div>${result}</div>
                <div>${result} </div>
                <div>${result} </div>
                <div>${result}</div>
            </div>
        </div>`);

    return resultInfoList;
}

module.exports = resultViewTpl;