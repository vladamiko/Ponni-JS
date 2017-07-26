'use strict';

let popupFormatTpl = require('./tpl/popupFormatTpl.js'),
    mediator = require('../../Mediator.js');

class PopupFormatView {
   constructor (group) {
      this.template = '';
      this.modal = document.querySelector('.modal-format-added');
      this.group = group;
   }

   setGroup () {
      this.template = popupFormatTpl(this.group.testList);
   }
   
   render () {
      this.setGroup();
      this.modal.insertAdjacentHTML('afterbegin', this.template);
      this.open();
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