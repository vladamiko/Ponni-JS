'use strict';

let popupFormatTpl = require('./tpl/popupFormatTpl.js'),
    mediator = require('../../Mediator.js');

class PopupFormatView {
   constructor () {
      this.template = '';
      this.modal = document.querySelector('.modal-format-added');
      this.renderGroup();
   }

   setGroup (group) {
      this.template = popupFormatTpl(group);
   }
   
   renderGroup () {
      this.modal.insertAdjacentHTML('afterbegin', this.template);
      this.addListeners();
   }

   addListeners () {
   }

   open () {
      this.modal.classList.add('visible');
   }

   close () {
      this.modal.classList.remove('visible');
   }
   
}

module.exports = PopupFormatView;