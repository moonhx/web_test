let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('success');
    }, 1000);
});
p1.then((res, err) => {
    if(res == 'success') {
        console.log(res);
    }
});

let p2 = new Promise((resolve, reject) => {
    resolve('success');
});

let p3 = new Promise((resolve, reject) => {
    resolve('success');
    // reject('error');
});

// all
Promise.all([p1, p2, p3]).then(([res1, res2, res3]) => {
    console.log(res1);
    console.log(res2);
    console.log(res3);
}, (err) => {
    console.log(err);
})



