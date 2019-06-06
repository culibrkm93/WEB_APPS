function getUsers(searchString) {
    const baseUrl = `https://api.github.com/search/users?q=`;
    const requestUrl = `${baseUrl}${searchString}`;
    return fetch(requestUrl)
        .then(response => response.json())
        .then((data) => {
            return data.items

        })
}

function getRepositories(user, onSuccess) {
    var user = this.login
    var requestRepUrl = 'https://api.github.com/search/users/:' + user + '/repos';
    $.get(requestRepUrl, function (reps) {
        onSuccess(reps.items);
        console.log('test');
    })
}



export {
    getUsers,
    getRepositories
}
