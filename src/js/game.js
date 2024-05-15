import '../css/style.css'
import { Engine, DisplayMode, Label, Vector, Font, Color } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Ship } from './ship.js'
import { Background } from './background.js'
import { Comet } from './comet.js'
import { Smallcomet } from './smallcomet.js'

export class Game extends Engine {

    score = 10;
    scoreLabel;

    constructor() {
        super({
            width: 1440,
            height: 900,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
        })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        const background = new Background();
        this.add(background);

        this.scoreLabel = new Label({
            text: 'Score: 0',
            pos: new Vector(25, 25),
            font: new Font({ color: Color.White, size: 30 }),
        });

        this.add(this.scoreLabel);

        const ship = new Ship();
        this.add(ship);

        const comet = new Comet();
        this.add(comet)

        for (let i = 0; i < 10; i++) {
            const scomet = new Smallcomet();
            this.add(scomet);
        }
    }

    updateScore() {
        this.score++
        this.scoreLabel.text = `Score: ${this.score}`
    }
}

new Game()