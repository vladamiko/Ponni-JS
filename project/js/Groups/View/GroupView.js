'use strict';

class GroupView {
    constructor () {
        this.group = '';
    }
    setGroup (group) {
        let groupTitle = group.name;

        this.group = this.generateTpl(groupTitle);
    }
    generateTpl (title) {
        return `<div class="group">
                    <h2 class="group-title">${title}</h2>
                    <div>
                        <button class="btn">format added</button>
                    </div>
                </div>`;
    }
    renderGroup () {
        //getTemplate
        //set attr to template
        //convert tpl to dom
        //addEventListener
        let groupsBlock = document.querySelector('.group_wrapper');

            groupsBlock.insertAdjacentHTML('beforeend', this.group);
    }
}
module.exports = GroupView;