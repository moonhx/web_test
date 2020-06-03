let p1 = new Promise((res, rej) => {
    res('success p1');
});
let p2 = new Promise((res, rej) => {
    // res('success p2');
    rej('error p2');
})

async function show() {
    try {
        let res1 = await p1;
        let res2 = await p2;
        console.log(res1 + ' ' + res2);
    } catch (err) {
        console.log(err);
    }
}

show();