'use strict';

let groupList = [
    {
        name: 'Dp-117',
        testList: [
            {
                name: 'Eng1',
                grade: 100
            },
            {
                name: 'Eng2',
                grade: 100
            },
            {
                name: 'Eng3',
                grade: 100
            },
            {
                name: 'Eng4',
                grade: 100
            },
            {
                name: 'JS Core',
                grade: 400
            },
            {
                name: 'Essay',
                grade: 400
            }
        ],
        filterList: [
            {
                name: 'Filter1',
                testList: ['Eng1', 'Eng2', 'Eng3', 'Eng4'],
                action: 'average',
                condition: '>',
                grade: 60
            },
            {
                name: 'Filter2',
                testList: ['JS Core'],
                action: 'average',
                condition: '>',
                grade: 80
            },
            {
                name: 'Filter3',
                testList: ['Essay'],
                action: 'min',
                condition: '>',
                grade: 75
            },
        ],
        testDays: [
            {
                date: '10/06/23',
                time: ['15:30', '17:00'] 
            },
            {
                date: '11/06/23',
                time: ['15:30', '17:00'] 
            }
        ],
        people: [
            {
                name: 'Harry',
                lastName: 'Potter',
                email: 'harry-potter@gmail.com',
                testDay: {
                    date: '10/06/23',
                    time: '15:30'
                },
                grades: {
                    Eng1: 60,
                    Eng2: 85,
                    Eng3: 70,
                    Eng4: 95,
                    Core: 300,
                    Essay: 260
                }
            },
            {
                name: 'Ron',
                lastName: 'Wisley',
                email: 'ron-wisley@gmail.com',
                testDay: {
                    date: '11/06/23',
                    time: '17:00'
                },
                grades: {
                    Eng1: 80,
                    Eng2: 90,
                    Eng3: 75,
                    Eng4: 60,
                    Core: 210,
                    Essay: 360
                }
            }
        ]
    }, {
        name: 'Dp-121',
        testList: [
            {
                name: 'Eng1',
                grade: 100
            },
            {
                name: 'Eng2',
                grade: 100
            },
            {
                name: 'Eng3',
                grade: 100
            },
            {
                name: 'Eng4',
                grade: 100
            },
            {
                name: 'Go Core',
                grade: 400
            },
            {
                name: 'Essay',
                grade: 400
            }
        ],
        filterList: [
            {
                testList: ['Eng1', 'Eng2', 'Eng3', 'Eng4'],
                action: 'average',
                condition: '>',
                grade: 60
            },
            {
                testList: ['Go Core'],
                action: 'average',
                condition: '<=',
                grade: 80
            },
            {
                testList: ['Essay'],
                action: 'max',
                condition: '>',
                grade: 75
            },
        ],
        testDays: [
            {
                date: '10/06/23',
                time: ['15:30', '17:00'] 
            },
            {
                date: '11/06/23',
                time: ['15:30', '17:00'] 
            }
        ],
        people: [
            {
                name: 'Hermione',
                lastName: 'Granger',
                email: 'hermione-granger@gmail.com',
                testDay: {
                    date: '10/06/23',
                    time: '15:30'
                },
                grades: {
                    Eng1: 60,
                    Eng2: 85,
                    Eng3: 70,
                    Eng4: 95,
                    Core: 300,
                    Essay: 260
                }
            },
            {
                name: 'Neville',
                lastName: 'Longbottom',
                email: 'neville-longbottom@gmail.com',
                testDay: {
                    date: '11/06/23',
                    time: '17:00'
                },
                grades: {
                    Eng1: 80,
                    Eng2: 90,
                    Eng3: 75,
                    Eng4: 60,
                    Core: 210,
                    Essay: 360
                }
            }
        ]
    }, {
        name: 'Dp-123',
        testList: [
            {
                name: 'Eng1',
                grade: 100
            },
            {
                name: 'Eng2',
                grade: 100
            },
            {
                name: 'Eng3',
                grade: 100
            },
            {
                name: 'Eng4',
                grade: 100
            },
            {
                name: 'PHP Core',
                grade: 400
            },
            {
                name: 'Essay',
                grade: 400
            }
        ],
        filterList: [
            {
                testList: ['Eng1', 'Eng2', 'Eng3', 'Eng4'],
                action: 'equal',
                condition: '=',
                grade: 60
            },
            {
                testList: ['PHP Core'],
                action: 'average',
                condition: '>',
                grade: 80
            },
            {
                testList: ['Essay'],
                action: 'average',
                condition: '>=',
                grade: 75
            },
        ],
        testDays: [
            {
                date: '10/06/23',
                time: ['15:30', '17:00'] 
            },
            {
                date: '11/06/23',
                time: ['15:30', '17:00'] 
            }
        ],
        people: [
            {
                name: 'Draco',
                lastName: 'Malfoy',
                email: 'draco-malfoy@gmail.com',
                testDay: {
                    date: '10/06/23',
                    time: '15:30'
                },
                grades: {
                    Eng1: 60,
                    Eng2: 85,
                    Eng3: 70,
                    Eng4: 95,
                    Core: 300,
                    Essay: 260
                }
            },
            {
                name: 'Peter',
                lastName: 'Griffin',
                email: 'peter-griffin@gmail.com',
                testDay: {
                    date: '11/06/23',
                    time: '17:00'
                },
                grades: {
                    Eng1: 80,
                    Eng2: 90,
                    Eng3: 75,
                    Eng4: 60,
                    Core: 210,
                    Essay: 360
                }
            }
        ]
    } 
];

module.exports = groupList;