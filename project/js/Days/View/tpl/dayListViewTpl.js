'use strict';

function dayListViewTpl () {
    return `<section class="day-block">
                <div class="day-block-head">
                    <h1>Test Days</h1>
                </div>
                <div class="day-block-body">
                    <div class="day-block-wrapper day-wrapper"></div>
                        <button class="btn add-day-btn">add day</button>
                    </div>
            </section>`;
}

module.exports = dayListViewTpl;