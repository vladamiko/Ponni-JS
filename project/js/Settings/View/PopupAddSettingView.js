'use strict';

let mediator = require('../../Mediator.js'),
    GroupView = require('../../Groups/View/GroupView.js'),
    GroupModel = require('../../Groups/Model/GroupModel.js');

class PopupAddSettingView {
    constructor () {
        this.addListeners();
    }

    addListeners () {
        let closeSettingBtn = document.querySelector('#close-setting-btn');

        mediator.sub('setting:open', () => {
            let modal = document.querySelector('#modal-add-setting');
            
            this.close();
        });

        closeSettingBtn.addEventListener('click', () => mediator.pub('setting:open'));
    }

    close () {
        let modal = document.querySelector('#modal-add-setting');

        modal.classList.remove('visible');
    }
}

module.exports = PopupAddSettingView;