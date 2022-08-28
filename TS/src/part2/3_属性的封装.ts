class Person {
    private _name: string;
    private _age: number;
    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
    // getName() {
    //     return this._name
    // }
    // setName(value: string) {
    //     this._name = value
    // }
    // setAge(value: number) {
    //     if (value >= 0) {
    //         this._age = value
    //     }
    // }
    get name() {
        return this._name
    }
    set name(value: string) {
        this._name = value
    }
    get age() {
        return this._age
    }
    set age(value: number) {
        if (value >= 0) {
            this._age = value
        } else {
            throw new Error("年龄必须大于等于零")
        }
    }
}
const p = new Person("小明", 2)
p.age = 12
console.log(p.age);


class Dog1{
    constructor(public name:string,public age:number){
    }
}