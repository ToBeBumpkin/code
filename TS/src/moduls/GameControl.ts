import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from './Snake'

class GameControl {
    food: Food;
    scorePanel: ScorePanel;
    snake: Snake;

    direction: string = 'Right';

    isLive: boolean = true;

    constructor() {
        this.food = new Food();
        this.scorePanel = new ScorePanel()
        this.snake = new Snake();

        this.init()
    }

    init() {
        document.addEventListener("keydown", this.keydownHandel.bind(this))
        this.run()
    }
    keydownHandel(event: KeyboardEvent) {
        this.direction = event.key;
    }
    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        this.checkEat(X, Y)

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (error) {
            this.isLive = false
            console.error(error + " GAME OVER");
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }
    checkEat(X: number, Y: number) {

        if (X === this.food.X && Y === this.food.Y) {
            console.log("蛇吃到食物了");
            this.scorePanel.addScore()
            this.food.change()
            this.snake.addBody()
        }
    }
}
export default GameControl;