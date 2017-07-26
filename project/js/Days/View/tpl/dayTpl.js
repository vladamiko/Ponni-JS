'use strict';

function dayTpl (date) {
    return `<div class="day">
                <h2 class="day-title">${date}</h2>
                <div>
                    <button class="btn slot-add-btn">add slot</button>
                </div>
            </div>`;
}

module.exports = dayTpl;