// 基本数据类型
//     String 
//     Number
//     Boolean
//     null
//     undefined
// 引用数据类型
//     object
//     function 
//     array
// 判断类型的方法
//     typeof 返回类型的字符串
//         可判断 string number boolean undefined function
//         不可判断 null和object array和object
//     instanceof 
//         判断对象的具体类型,返回true/false
//     === 
//         可判断undefined 和 null 只有一个值


//基本类型
var a;
console.log(a, typeof a, typeof a === "undefined", a === undefined);
console.log(undefined === 'undefined');

a = 4;
console.log(typeof a, typeof a === "number", typeof a === Number);

a = "hello";
console.log(typeof a === "string");

a = true;
console.log(typeof a === "boolean");

a = null;
console.log(typeof a, a === null);


//对象
var b1 = {
    b2: [1, 'abc', console.log],
    b3: function () {
        console.log("b3");
        return function () {
            return "world"
        }
    }
}

//instanceof 是实例

console.log(b1 instanceof Object, typeof b1);
console.log(b1.b2 instanceof Array, b1.b2 instanceof Object);
console.log(b1.b3 instanceof Function, b1.b3 instanceof Object);
console.log(typeof b1.b3 === "function");
console.log(typeof b1.b2, typeof b1.b2 === "array");
console.log(typeof b1.b2[2]);
console.log(b1.b3()());