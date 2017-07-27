'use strict';

document.addEventListener('DOMContentLoaded', init);

function init () {
    let App = require('./App.js'),
        groupList = require('./testData'),
        defaultDirections = require('./defaultDirections');


    let app = new App();

    app.settings.directions = defaultDirections;
    app.start();
}