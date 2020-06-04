let str = 'asdasd1231dsa32qd31ed1qdws131dsad3ads dsad12e1ds32 ';

// 1.search
let strReg = /12/;
console.log(str.search(strReg));

// 2.match
let matchReg = /\d+/g;
console.log(str.match(matchReg));

// 3.splice

