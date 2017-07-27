'use strict';

document.addEventListener('DOMContentLoaded', init);

function init () {
    let App = require('./App.js'),
        groupList = require('./defaultGroups'),
        defaultDirections = require('./defaultDirections');


    let app = new App(groupList);

    app.settings.directions = defaultDirections;
    app.start();
}