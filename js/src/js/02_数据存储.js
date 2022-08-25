// var a = { name: "tom" }
// var b = a;
// b.name = "bob"
// console.log(a.name);

// var a = { name: "tom" }
// var b = a;
// function fn(obj){
//     obj.name = "dav"
// }
// fn(a)
// console.log("a.name",a.name);
// console.log("b.name",b.name);

// var a = { name: "tom" }
// var b = a;
// function fn(obj){
//     obj = {name:"cidny"}
// }
// fn(a)
// console.log("a.name",a.name);
// console.log("b.name",b.name);

// var a = { name: "tom" }
// var b = a;
// a = { name: "ff" }
// console.log("a.name", a.name);
// console.log("b.name", b.name);

// var a = 3;
// function fn(a) {
//     a = a + 1;
// }
// fn(a)
// console.log(a);

function fn2(obj) {
    console.log(obj.name);
}
var obj = { name: "tom" }
fn2(obj)