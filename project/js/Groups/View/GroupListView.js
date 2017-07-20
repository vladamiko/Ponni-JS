'use strict';

let mediator = require('../../Mediator.js');

class GroupListView {
    constructor () {
        // this.displayGroupSection();
        this.addListeners();
    }

    displayGroupSection () {
        
    }

    render () {

    }

    addNewGroup () {
        var modal = document.querySelector('#modal-add-group'),
            btnAdd = document.querySelector('#add-group-btn'),
            btnClose = document.querySelector('#close-group-btn');

        btnAdd.addEventListener('click', () => {
            modal.classList.add('visible');
        }, false);

        btnClose.addEventListener('click', () => {
            modal.classList.add('hidden');
            // ???
        }, false);

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.classList.add('hidden');
            }
        }, false);
    }

    addListeners () {
        let addGroupBtn = document.querySelector('.add-group-btn'),
            closeGroupBtn = document.querySelector('#close-group-btn');

        addGroupBtn.addEventListener('click', ()=> mediator.pub('popup:open'));

        // Этот слушатель должен навешиваться при создании вью попапа
        closeGroupBtn.addEventListener('click', ()=> mediator.pub('group:added'));
    }
}

module.exports = GroupListView;