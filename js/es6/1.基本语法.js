// 1.let const 块级作用域   略

// 2.结构赋值
let arr = [1, 2, 3, 4];
let arrCopy = [...arr];
console.log(arrCopy);

let json = {a: 1, b: 2};
let jsonCopy = {...json, b: 3};
console.log(jsonCopy);

let params = ['a', 1, 2, 3];
// 最后才能解构
function sum(other, ...params) {
    console.log(other);
    return params.reduce((temp, item) => temp + item)
}
console.log(sum(...params));
// 3.函数  箭头函数 略

// 4.数组新方法  map filter forEach reduce

// 5.json  JSON.stringify   JSON.parse
