'use strict';

function resultListViewTpl () {
    return `<section class="result-block">
                <h1>Results</h1>
                <div class="result-block-wrapper result-wrapper">
                    <div class="result">
                        <div>Last Name</div>
                        <div>Name</div>
                        <div>e-mail</div>
                        <div>grades</div>
                    </div>
                </div>
            </section>`;
}

module.exports = resultListViewTpl;