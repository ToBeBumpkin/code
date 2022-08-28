//number
let a: number;
a = 123;

//string
let b: string = "hello";

//boolean
let c = true;

//直接使用字面量
let d: 10;
d = 10;

let e: "mail" | "nomail";
e = "mail";
e = "nomail"

let f: number | string;
f = 123;
f = "456"

//any 表示的是任意类型，一个变量使用any相当于对该变量关闭ts检查
//使用TS时，不建议用
// let g;
let g: any;
g = 123;
g = true;
g = "hello";

//unknown 表示未知类型
let h: unknown;
h = 123;
h = true;
h = "hello";
//unknown 实际就是安全的any
//unknown类型的变量 不能直接赋值给其他变量
if (typeof h === "string") {
    b = h
}
//类型断言
b = h as string
b = <string>h



function jfn(): number {
    return 123
}
function kfn(): string {
    return "123"
}
function lfn(): boolean {
    return true
}
//void 表示空，以函数为例，就是表示没有返回值
function mfn(): void {
    // return;
    // return undefined;
    // return null;
}
//never 表示永远不会有返回结果
function nfn(): never {
    throw new Error("报错了")
}








// function sum(d: number, e: number): number {
//     return d + e;
// }
// sum(123, 456)