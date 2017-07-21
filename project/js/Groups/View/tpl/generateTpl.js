'use strict';

function generateTpl (group) {
    return `<div class="group">
                <h2 class="group-title">${group.name} ${group.direction}</h2>
                <div>
                    <button class="btn">format added</button>
                </div>
            </div>`;
}

module.exports = generateTpl;