'use strict';

function groupTpl (group) {
    return `<div class="group">
                <h2 class="group-title">${group.name}</h2>
                <div>
                    <button class="btn format-added-btn">format added</button>
                </div>
            </div>`;
}

module.exports = groupTpl;