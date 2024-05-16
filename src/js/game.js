import '../css/style.css'
import { Engine, DisplayMode, Label, Vector, Font, Color } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Level } from './level.js'
import { Gamewon } from './gamewon.js';
import { Gameover } from './gameover.js';

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

        this.add('level', new Level())
        this.add('game-over', new Gameover())
        this.add('game-won', new Gamewon())

        // goes to level 1
        this.goToScene('level')
    }

    updateScore() {
        this.score++
        this.scoreLabel.text = `Score: ${this.score}`
    }
}

new Game()