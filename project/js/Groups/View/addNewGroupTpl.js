'use strict';

function addNewGroupTpl () {
    return `
        <div id="modal-add-group" class="modal">
          <div class="modal-content">
            <input type="text" placeholder="Enter group name"></input>
            <select>
              <option>UI</option>
              <option>Go</option>
              <option>PHP</option>
            </select>
            <button id="close-group-btn" class="btn btn-cog">
                <i class="fa fa-check" aria-hidden="true"></i>
            </button>
          </div>
        </div>`
}