'use strict';

class GroupView {
    constructor () {
        this.groups = [];
    }
    setGroup (group) {
        let groupTitle = group.name;

        this.groups.push(this.generateTpl(groupTitle));
    }
    generateTpl (title) {
        return `<div class="group">
                    <h2>${title}</h2>
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
        let groupsBlock = document.querySelector('#group');
        console.log(groupsBlock);

            groupsBlock.insertAdjacentHTML('beforeend', this.groups[0]);
    }
}
module.exports = GroupView;