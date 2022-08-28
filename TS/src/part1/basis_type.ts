let z: { name: string, age?: number };
z = { name: "xiaoming" }
z = { name: "xiaohong", age: 12 }

let y: { name: string, [propName: string]: any }
y = { name: "xiaohu" }
y = { name: "xiaoliu", a: 12, b: true }

let x: (a: number, b: number) => number;
x = (c: number, d: number) => {
    return c + d
}
x = function (e: number, f: number): number {
    return e + f
}

let w: string[];
w = ["1", "2", "4"]
let v: number[];
v = [1, 2, 3]
let u: Array<number>;
u = [1, 2, 3]


//元组 就是固定长度的数组
// opq rst

let t: [string, string, string];
t = ["a", "b", "c"]
let s: [string, number, string]
s = ["a", 12, "b"]


//枚举
enum Gender {
    Male = 0,
    Female = 1
}
let r: { name: string, gender: Gender };
r = {
    name: "小明",
    gender: Gender.Male
}
// console.log(r.gender === Gender.Male);



//类型的别名
type myType = 1 | 2 | 3 | 4 | 5 | 6;
let q: myType;
q = 1;

