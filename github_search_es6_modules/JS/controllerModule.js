import * as ui from './uiModule.js';
import * as data from './dataModule.js'



function setupEventListeners() {
    $('.search-bar').keydown(function (e) {
        if (e.keyCode === 13) {
            var searchStr = ui.getSearchBarData();

            data.getUsers(searchStr)
                .then((users) => {
                    ui.displayUsers(users);
                });
        }
    })

}
// function newEventListener() {
//     $(ui.searchResult).click(function (e) {
//         data.getRepositories(searchResult);

//     })
// }

function init() {
    setupEventListeners();
    // newEventListener()
}

export {
    init
}