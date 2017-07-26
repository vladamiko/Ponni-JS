'use strict';

document.addEventListener('DOMContentLoaded', init);

function init () {
    let App = require('./App.js'),
        groupList = require('./testData'),
        defaultDiretions = require('./defaultDiretions');


    let app = new App(groupList);

    app.settingsModel.directions = defaultDiretions;
    app.start();
}