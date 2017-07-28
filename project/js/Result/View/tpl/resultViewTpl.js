'use strict';

function resultViewTpl (resultList) {
    let resultInfoList = '';

    resultList.forEach((result) => resultInfoList += `<div class="result-item">
            <div class="result">
                <div>${result}</div>
                <div>${result}</div>
                <div>${result}</div>
                <div>${result}</div>
            </div>
        </div>`);

    return resultInfoList;
}

module.exports = resultViewTpl;