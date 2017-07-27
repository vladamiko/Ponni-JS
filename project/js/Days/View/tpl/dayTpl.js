'use strict';

function dayTpl (day) {
    return `<div class="day">
                <h2 class="day-title">${day}</h2>
                <div>
                    <button class="btn slot-add-btn">add slot</button>
                </div>
            </div>`;
}

module.exports = dayTpl;



//не срабатывает кнопка добавления дня (галка)
/*
function dayTpl (day) {
    let dayList = day.testDays,
        dayInfoList = '';

    dayList.forEach((day) => dayInfoList += `<div class="day">
                <h2 class="day-title">${day.date}</h2>
                <div>
                    <button class="btn slot-add-btn">add slot</button>
                </div>
            </div>`);

    return dayInfoList;
}

module.exports = dayTpl;
*/