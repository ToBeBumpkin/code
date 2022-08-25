function Person(color){
    console.log(this);
    this.color = color;
    this.getColor = function(){
        console.log(this);
        return this.color;
    };
    this.setColor = function(color){
        console.log(this);
        this.color = color
    }
}

Person("red")

var p = new Person("yellow")

p.getColor()

var obj = {}

p.setColor.call(obj,"black")

var test = p.setColor
console.log(test);
test()

function fun1(){
    function fun2(){
        console.log(this);
    }
    fun2()
}
fun1()