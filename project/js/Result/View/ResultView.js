'use strict';

let resultViewTpl = require('./tpl/resultViewTpl.js'),
    mediator = require('../../Mediator.js');

class ResultView {
    constructor () {
        this.template = '';
    }

    setResult (result) {
        this.template = resultViewTpl(result);
    }

    renderResult () {
        let resultBlock = document.querySelector('.result-wrapper');

        resultBlock.innerHTML = this.template;
    }
}

module.exports = ResultView;