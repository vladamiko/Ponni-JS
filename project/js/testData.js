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
            direction: 'ui',
            tests: ['Eng1', 'Eng2', 'JS Core', 'Essay'],
            filters: []
        }
    ]
};

module.exports = testData;