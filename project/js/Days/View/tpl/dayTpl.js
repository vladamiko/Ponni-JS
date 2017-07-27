'use strict';

function dayTpl (day, slot) {
    return `<div class="day">
                <h2 class="day-title">${day}</h2>
                <h3 class="slot-title">${slot}</h3>
                <div>
                    <button class="btn slot-add-btn">add slot</button>
                </div>
                <div>
                    <button class="btn assing-users-btn">assing users</button>
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