'use strict';

function filterPopupViewTpl () {
    return `<div class="modal-content filter-popup">
                <div class="left-column-filter">
                    <div class="test"><input type="checkbox" name="tests">English 1</div>
                    <div class="test"><input type="checkbox" name="tests">English 2</div>
                    <div class="test"><input type="checkbox" name="tests">English 3</div>
                    <div class="test"><input type="checkbox" name="tests">English 4</div>
                    <div class="test"><input type="checkbox" name="tests">Core</div>
                    <div class="test"><input type="checkbox" name="tests">Essay</div>
                </div>
                <div class="right-column-filter">
                    <div class="filter-name">
                        <input type="text" class="add-test-name" placeholder="Enter test name">
                    </div>
                    <div class="filter-field">
                        <select class="modal-filter-action">
                            <option>average</option>
                            <option>min</option>
                            <option>max</option>
                            <option>equal</option>
                        </select>
                        <select class="modal-filter-condition">
                            <option>></option>
                            <option><</option>
                            <option>>=</option>
                            <option><=</option>
                            <option>=</option>
                        </select>
                        <input type="text" class="add-test-grade" placeholder="Enter grade">
                    </div>
                </div>
                <button class="btn btn-cog close-filter-btn">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </button>
            </div>`
}

module.exports = filterPopupViewTpl;