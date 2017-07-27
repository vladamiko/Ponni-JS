'use strict';

let defaultDirections = require('./defaultDirections.js'),
    Group = require('./Groups/Model/GroupModel.js'),
    Test = require('./Tests/Model/Test.js');

let defaultGroups = [
    new Group('Dp-117', defaultDirections[0]),
    new Group('Dp-118', defaultDirections[1]),
    new Group('Dp-119', defaultDirections[2])
];

module.exports = defaultGroups;