'use strict';

let popupFormatTpl = require('./tpl/popupFormatTpl.js'),
    Test = require('../../Tests/Model/Test.js'),
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
      this.modal.innerHTML = this.template;
      this.open();
      this.addListeners();
   }

   addListeners () {
      let addTestBtn = this.modal.querySelector('.add-test-btn'),
          closeTestBtn = this.modal.querySelector('.close-test-btn');

      addTestBtn.addEventListener('click', () => mediator.pub('popupTest:open'));

      mediator.sub('oneTest:added', (data) => {
         let test = this.createTestElement(data);

         this.createTest(data);
         this.renderTest(test);
      });

      closeTestBtn.addEventListener('click', () => {
         debugger;
         this.group.addTest(this.test);
         mediator.unsub('oneTest:added');
         this.close();
      });
   }

   createTest (name) {
       this.test = new Test(name);
   }

   renderTest (test) {
      let testListElement = this.modal.querySelector('.format-test-list');

      testListElement.appendChild(test);
   }

   createTestElement(testName) {
       let testElement = document.createElement('div');

       testElement.className = 'test-name';
       testElement.innerHTML = testName;

       return testElement;
   }

   open () {
      this.modal.classList.add('visible');
   }

   close () {
      this.modal.classList.remove('visible');
   }
   
}

module.exports = PopupFormatView;