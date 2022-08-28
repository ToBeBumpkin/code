//食物类
class Food {
    //食物div节点
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById("food")!;
        this.change()
    }
    //获取食物的横坐标
    get X() {
        return this.element.offsetLeft;
    }
    //获取食物的纵坐标
    get Y() {
        return this.element.offsetTop;
    }
    //改变食物的坐标
    change() {
        let left = Math.round(Math.random() * 29) * 10;
        let top = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + "px";
        this.element.style.top = top + "px";
    }
}

export default Food;
