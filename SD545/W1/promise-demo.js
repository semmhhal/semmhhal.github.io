console.log('start');

const promise = new Promise((resolve, reject) => {
    console.log('inside promise-start');
    console.log('inside promise-end');
    if (Math.random() > 0.5) {
        reject('fail');
    }
    else
        resolve('success'); //function
}).then(console.log)
    .catch(err => console.log('Whoops!', err));
    //a promise can only emit one value
console.log('end')

