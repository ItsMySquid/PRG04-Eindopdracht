import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Ship } from './ship.js'
import { Background } from './background.js'
import { Projectiles } from './projectiles.js'

export class Game extends Engine {

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

        this.lives = 3

        const background = new Background();
        this.add(background);

        const projectiles = new Projectiles();
        this.add(projectiles)

        const ship = new Ship();
        this.add(ship);

    }
}

new Game()
