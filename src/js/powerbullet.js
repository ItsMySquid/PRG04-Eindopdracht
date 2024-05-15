import { Actor, Vector } from "excalibur"
import { Resources } from "./resources";


export class Powerbullet extends Actor {
    constructor(pos) {
        super({ radius: 10 })
        this.pos = pos
        this.vel = new Vector(-500, 0);
    }

    onInitialize(engine) {
        this.graphics.use(Resources.Bullet.toSprite());
    }
}