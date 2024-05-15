import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "./resources"
import { Bullet } from "./bullet";
import { Projectiles } from "./projectiles";

export class Comet extends Projectiles {
    constructor() {
        super();
        console.log("Big comet created");
        this.graphics.use(Resources.Comet.toSprite());
        this.scale = new Vector(0.5, 0.5);
        this.pos = new Vector(0, -100);
        this.vel = new Vector(50, 50);

        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event) {
        if (event.other instanceof Bullet) {
            this.kill()
            event.other.kill()
        }
    }
}
