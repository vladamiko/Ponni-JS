'use strict';

document.addEventListener('DOMContentLoaded', init);

function init () {
    let App = require('./App.js'),
        groupList = require('./testData');

    let app = new App(groupList);
    
    app.start();
}