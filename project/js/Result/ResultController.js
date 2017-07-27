'use strict';

let ResultListView = require('../Result/View/ResultListView.js'),
    mediator = require('../Mediator.js');

class ResultController {
    constructor (groupList) {
        this.groupList = groupList;
        this.subscribe();
    }

    subscribe () {
        mediator.sub('group:active', () => {
            let resultListView = new ResultListView(this.groupList);

            resultListView.appendResult();
        });
    }

    showResult () {
        let resultListView = new ResultListView(this.groupList);

        resultListView.render();
    }
}

module.exports = ResultController;