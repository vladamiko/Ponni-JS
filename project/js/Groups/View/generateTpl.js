'use strict';

function generateTpl (title) {
    return `<div class="group">
                <h2 class="group-title">${title}</h2>
                <div>
                    <button class="btn">format added</button>
                </div>
            </div>`;
}

module.exports = generateTpl;