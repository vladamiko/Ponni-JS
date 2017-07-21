'use strict';

function groupListTpl () {
    return `<section id="group-block">
                <div class="group-block__head">
                    <h1>Group</h1>
                        <button id="add-group-btn" class="btn btn-cog">
                            <i class="fa fa-cog" aria-hidden="true"></i>
                        </button>
                </div>
                <div class="group-block__body">
                    <div class="group-block__wrapper group_wrapper"></div>
                        <button class="btn add-group-btn">add group</button>
                    </div>
            </section>`;
}

module.exports = groupListTpl;