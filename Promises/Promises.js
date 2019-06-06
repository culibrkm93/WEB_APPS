// 1.Create a sample promise that:
// Resolves to current time
// Prints received time in console when resolved (in then())


const time = new Promise((resolve, reject) => {
    const currentTime = new Date();
    resolve(currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds());
}).then((data => {
    console.log(data);
}));


// 2. Create a console app that:
// Creates 100 promises;
// Each promise has its own ID (0..99);
// Each promise is resolved after a random time interval (up to 500ms);
// After being resolved, each promise will log its id in the console.

const promiseArr = [];
for (let id = 0; id < 100; id++) {

    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('HI BITCH' + id);
        }, (Math.random() * 500))

    }).then((data => {
        console.log(data)
    }))
    promiseArr.push(newPromise);
};

// 3. Modify the app so it prints an ID of the promise that is completed first.

const promiseArr = [];
for (let id = 0; id < 100; id++) {
    const delay = Math.floor(Math.random() * 500)
    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`SORPRESA PUTA  ${id} ${delay}ms`);
        }, delay)

    }).then((data => {
        console.log(data)
    }))
    promiseArr.push(newPromise);
};

// 4. Modify the app so it prints a message that all promises are completed.


const promiseArr = [];
for (let id = 0; id < 100; id++) {

    const newPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('ID ' + id);
        }, (Math.random() * 500))


    }).then((data => {
        console.log(data)
    }))
    promiseArr.push(newPromise);

}

Promise.all(promiseArr)
    .then(() => {
        console.log('Done.')
    })

