function fn<T>(a: T): T {
    return a
}
let res1 = fn<string>("hello")
console.log(res1);

let res2 = fn<number>(123)
console.log(res2);

function fn2<T, K>(a: T, b: K): T {
    return a
}
let res3 = fn2<string, number>("world", 234)
console.log(res3);

interface myInter2 {
    length: number;
}
function fn3<T extends myInter2>(a: T): number {
    return a.length
}
let res4 = fn3<string>("hello world")
console.log(res4);

class myClass2<T>{
    name: T;
    constructor(name: T) {
        this.name = name
    }
}
const mc = new myClass2<string>("xiaoming")
console.log(mc.name);
