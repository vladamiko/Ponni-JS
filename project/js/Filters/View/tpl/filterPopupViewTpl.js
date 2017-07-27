'use strict';

function filterPopupViewTpl () {
    return `<div class="modal-content filter-popup">
                <div class="left-column-filter">
                tests
                </div>
                <div class="right-column-filter">
                    <div>
                        <input type="text" class="add-test-name" placeholder="Enter test name">
                    </div>
                    <div>
                        <select class="modal-filter-action">actions</select>
                        <select class="modal-filter-condition">conditions</select>
                        <input type="text" class="add-test-grade" placeholder="Enter grade">
                    </div>
                </div>
                <button class="btn btn-cog close-filter-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`
}

module.exports = filterPopupViewTpl;