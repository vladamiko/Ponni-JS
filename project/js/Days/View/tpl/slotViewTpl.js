'use strict';

function slotViewTpl (slot) {
    return `<div class="slot-block">
        <div class="slot">${slot}</div>
        <button class="btn assing-users-btn">+</button>
        </div>`;
}

module.exports = slotViewTpl;