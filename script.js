let promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Testing 1,2,3!");
    }, 5000);
});

promiseOne.then(function (result) {
    console.log('Promise result:', result);
});

let promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello? Can you hear me?");
    }, 3000);
});

promiseTwo.then(function (result) {
    console.log('Promise result:', result);
});

let promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Something went wrong");
    }, 4000);
});

promiseThree.then(function (result) {
    console.log('Promise result:', result);
}).catch((error) => console.log('error', error));