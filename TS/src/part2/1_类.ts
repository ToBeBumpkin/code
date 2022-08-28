/* class Person {
    //实例属性，实例调用
    name: string = "孙悟空"
    //静态属性，类直接调用
    static age: number = 12
    //readonly 只读属性
    readonly gender: string = "男"
    //只读的静态属性
    static readonly pwd: string = "password"
    say() {
        console.log("哈喽，我是实例方法，我只能实例调用");
    }
    static say() {
        console.log("哈喽，我是静态方法，我只能被类调用");

    }
}
const p = new Person()

console.log(p);

p.name = "猪八戒"

console.log("普通属性", p.name);

console.log("只读属性", p.gender);

console.log("静态属性", Person.age);

p.say()

Person.say() */


/* class Dog {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name + "汪汪汪");
    }
}
const d1 = new Dog("小黑",12);
const d2 = new Dog("小白",22)

d1.bark() */


abstract class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    abstract bark(): void;
}

class Dog extends Animal {
    breed = "狗狗";
    color: string;
    constructor(name: string, age: number, color: string) {
        super(name, age);
        this.color = color;
    }
    run() {
        console.log(`${this.breed}${this.name}跑的快`);
    }
    bark() {
        console.log(`${this.breed}${this.name}在叫`);
    }
}
class Cat extends Animal {
    breed = "咪咪";
    feature: string;
    constructor(name: string, age: number, feature: string) {
        super(name, age);
        this.feature = feature;
    }
    climb() {
        console.log(`${this.breed}${this.name}会爬树`);
    }
    bark() {
        console.log(`${this.breed}${this.name}在叫`);
    }
}
const d1 = new Dog("旺财", 1, "黄色");
const c1 = new Cat("福贵", 9, "矫健");

d1.bark()
d1.run()

c1.bark()
c1.climb()
