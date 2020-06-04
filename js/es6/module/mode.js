export function sum(a, b) {
    return a + b;
}

export class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(this.name, this.age);
    }
}

let a = 100;
let b = 30;
export { a, b };

let ccccc = 'ccccccccccccc';
export default ccccc;


import asd from './mode2';
console.log(asd);