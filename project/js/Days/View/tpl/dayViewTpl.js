'use strict';

function dayViewTpl (day) {
    return `<div class="day">
                <h2 class="day-title">${day}</h2>
                <div class="slot-wrapper"></div>
                <button class="btn slot-add-btn">add slot</button>
            </div>`;
}

module.exports = dayViewTpl;