'use strict';

let resultListViewTpl = require('./tpl/resultListViewTpl.js'),
    ResultView = require('./ResultView.js'),
    mediator = require('../../Mediator.js');

class ResultListView {
    constructor (groupList) {
        this.template = '';
        this.groupList = groupList;
    }

    render () {
        let rightBlock = document.querySelector('.right-column');

        this.template = resultListViewTpl();
        rightBlock.insertAdjacentHTML('afterbegin', this.template);
        this.renderResult();
    }

    renderResult () {
        this.groupList.forEach((item) => {
            let resultView = new ResultView();

            resultView.setResult(item);

            return resultView.renderResult();
        });
    }

    appendResult (groupList) {
        let resultView = new ResultView();

        resultView.setResult(groupList.testList);
        resultView.renderResult();
    }
}

module.exports = ResultListView;