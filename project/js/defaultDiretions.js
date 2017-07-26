'use strict';

let DirectionModel = require('./Settings/Model/DirectionModel.js');

let defaultDiretions = [
                            new DirectionModel('UI'), 
                            new DirectionModel('JS'), 
                            new DirectionModel('PHP'),
                            new DirectionModel('GO')
                        ];

defaultDiretions[0].addTest('Eng 1', 100);
defaultDiretions[0].addTest('Eng 2', 100);
defaultDiretions[0].addTest('Eng 3', 100);
defaultDiretions[0].addTest('Eng 4', 100);
defaultDiretions[0].addTest('Essay UI', 200);
defaultDiretions[1].addTest('Eng 1', 100);
defaultDiretions[1].addTest('Eng 2', 100);
defaultDiretions[1].addTest('Eng 3', 100);
defaultDiretions[1].addTest('JS Core', 100);
defaultDiretions[1].addTest('Essay JS', 200);
defaultDiretions[2].addTest('Eng 1', 100);
defaultDiretions[2].addTest('Eng 2', 100);
defaultDiretions[2].addTest('PHP Core', 100);
defaultDiretions[2].addTest('Essay PHP', 200);
defaultDiretions[3].addTest('Eng 1', 100);
defaultDiretions[3].addTest('Eng 2', 100);
defaultDiretions[3].addTest('Eng 3', 100);
defaultDiretions[3].addTest('Eng 4', 100);
defaultDiretions[3].addTest('GO Core', 200);
defaultDiretions[3].addTest('Essay GO', 300);

let testListUI = ['Eng 1', 'Eng 2', 'Eng 3',],
    testListJS = ['Eng 1',],
    testListPHP = ['PHP Core'],
    testListGO = ['Eng 1', 'Eng 2', 'Eng 3','Eng 4'];

defaultDiretions[0].addFilter(testListUI, 'average', '>', 60);
defaultDiretions[1].addFilter(testListJS, 'average', '>', 75);
defaultDiretions[2].addFilter(testListPHP, 'average', '>', 80);
defaultDiretions[3].addFilter(testListGO, 'summ', '>', 70);

module.exports = defaultDiretions;