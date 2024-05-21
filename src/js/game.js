import '../css/style.css'
import { Engine, DisplayMode, Label, Vector, Font, Color } from "excalibur"
import { ResourceLoader } from './resources.js'
import { Level } from './level.js'
import { Gamewon } from './gamewon.js';
import { Gameover } from './gameover.js';

export class Game extends Engine {

    totalScore = 0;
    scoreLabel
    /**
     * @type Level
     */
    level

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

        this.level = new Level()
        this.add('level', this.level)
        this.add('game-over', new Gameover())
        this.add('game-won', new Gamewon())

        // goes to level 1
        this.goToScene('level')
    }

    updateScore(score) {
        // @ts-ignore
        this.level.ui.updateScore(score)
        // this.scoreLabel.text = `Score: ${this.score}`
    }

    updateHealth() {
        // @ts-ignore
        this.level.ui.updateHealth()
    }
}

new Game()