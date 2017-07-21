'use strict';

let mediator = require('../../Mediator.js');

class GroupListView {
    constructor () {
        this.addListeners();
    }

    displayGroupSection () {
        
    }

    render () {

    }

    generateDirectionListTpl (directionList) {
        let options;

        directionList.forEach((item) => {
            options += `<option>${item}</option>`;
        });

        return options;
    }

    addDirectionList (directionList) {
        let select = document.querySelector('#modal-add-group select');

        select.innerHTML = this.generateDirectionListTpl(directionList);
    }

    addListeners () {
        let addGroupBtn = document.querySelector('.add-group-btn');

        addGroupBtn.addEventListener('click', ()=> mediator.pub('popup-add-group:open'));
    }
}

module.exports = GroupListView;