// var 
//     全局作用域
//     变量提升
// let
//     块级作用域
//     不存在变量提升
// const
//     必须赋初始值
//     块级作用域
//     常量值不能修改

// 箭头函数
//     this指向定义时的对象 不能使用call apply、、
//     不能作为构造函数实例对象
//     不能使用argument


// let s = new Set([1,2,3,4,5,6,6,5,4,3,2])
// console.log(s);
// s.add(9)

// console.log(s);
// let arr = [1,2,3,4,5,4,3,2,1]
// console.log([...new Set(arr)]);

let m = new Map()
m.set("name1 ",1)


console.log(m);