'use strict';

let Direction = require('./Settings/Model/Direction.js');

let defaultDirections = [
                            new Direction('UI'), 
                            new Direction('JS'), 
                            new Direction('PHP'),
                            new Direction('GO')
                        ];

defaultDirections[0].addTest('Eng 1');
defaultDirections[0].addTest('Eng 2');
defaultDirections[0].addTest('Eng 3');
defaultDirections[0].addTest('Eng 4');
defaultDirections[0].addTest('Essay UI');
defaultDirections[1].addTest('Eng 1');
defaultDirections[1].addTest('Eng 2');
defaultDirections[1].addTest('Eng 3');
defaultDirections[1].addTest('JS Core');
defaultDirections[1].addTest('Essay JS');
defaultDirections[2].addTest('Eng 1');
defaultDirections[2].addTest('Eng 2');
defaultDirections[2].addTest('PHP Core');
defaultDirections[2].addTest('Essay PHP');
defaultDirections[3].addTest('Eng 1');
defaultDirections[3].addTest('Eng 2');
defaultDirections[3].addTest('Eng 3');
defaultDirections[3].addTest('Eng 4');
defaultDirections[3].addTest('GO Core');
defaultDirections[3].addTest('Essay GO');

let testListUI = ['Eng 1', 'Eng 2', 'Eng 3',],
    testListJS = ['Eng 1',],
    testListPHP = ['PHP Core'],
    testListGO = ['Eng 1', 'Eng 2', 'Eng 3','Eng 4'];

defaultDirections[0].addFilter('Filter1', testListUI, 'average', '>', 60);
defaultDirections[1].addFilter('Filter2', testListJS, 'average', '>', 75);
defaultDirections[2].addFilter('Filter3', testListPHP, 'average', '>', 80);
defaultDirections[3].addFilter('Filter4', testListGO, 'summ', '>', 70);

module.exports = defaultDirections;