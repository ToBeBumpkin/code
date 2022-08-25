// console.log(Date.prototype);
// console.log(Date.prototype.constructor === Date);

// function fun() { }
// fun.prototype.test = function(){
//     console.log("prototype.test");
// }

// console.log(fun.__proto__);
// console.log(fun.prototype);
// console.log(fun.prototype.constructor === fun);

// var f1 = new fun();
// console.log(f1.__proto__);
// f1.test()

// function Fn(){}
// console.log(Fn.prototype);

// var fn = new Fn()
// console.log(fn.__proto__);

// console.log(Fn.prototype === fn.__proto__);

// Fn.prototype.test = function(){
//     console.log("显式原型");
// }
// console.log(fn.__proto__);

// var f2 = function(){

// }


function fun(n,o){  //1 0   2 1 3 2
    console.log(o); //0 1   2
    return {
        fun:function(m){
            return fun(m,n)
        }
    }
    // function fun1(m){   //2 3
    //     return fun(m,n) //1 0   2 1     3 2
    // }
}
var a = fun(0);
a.fun(1)    //0
a.fun(2)    //1
a.fun(3)    //2