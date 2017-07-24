'use strict';

let testData = {
    groups: [
        {
            direction: 'ui',
            name: 'dp-117-js'
        },
        {
            direction: 'go',
            name: 'dp-123-go'
        },
        {
            direction: 'php',
            name: 'dp-127-php'
        }
    ],
    settings: [
        {
            direction: 'UI',
            tests: ['Eng1', 'Eng2', 'JS Core', 'Essay UI'],
            filters: ['UI 1']
        },
        {
            direction: 'PHP',
            tests: ['Eng1', 'Eng2', 'Essay PHP'],
            filters: ['PHP 1']
        },
        {
            direction: 'GO',
            tests: ['Eng1', 'Eng2', 'Essay GO'],
            filters: ['GO 1']
        },
        {
            direction: 'Other',
            tests: ['Eng1', 'Eng2', 'Other', 'Other'],
            filters: ['Other 1']
        }
    ]
};

module.exports = testData;