// type myType1 = {
//     name: string;
//     age: number
// }

interface myInterface {
    name: string;
    age: number
}
interface myInterface {
    gender: string;
}

const obj: myInterface = {
    name: "小白",
    age: 12,
    gender: "男"
}

interface myInter {
    name: string;
    sayHello(): void;
}

class myClass implements myInter {
    name: string;
    constructor(name: string) {
        this.name = name
    }
    sayHello() {
        console.log("哈喽，大家好");

    }
}