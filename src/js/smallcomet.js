import { Actor, Vector } from "excalibur";
import { Resources } from "./resources"
import { Bullet } from "./bullet";
import { Projectiles } from "./projectiles";

export class Smallcomet extends Projectiles {
    constructor() {
        super();
        for (let i = 0; i < 10; i++) {
            this.graphics.use(Resources.Comet2.toSprite());
            this.scale = new Vector(0.5, 0.5);
            this.vel = new Vector(150, 0);


            this.pos = new Vector(100, 100);

            this.on('collisionstart', (event) => this.hitSomething(event))
        }
    }

    hitSomething(event) {
        if (event.other instanceof Bullet) {
            this.kill()
            event.other.kill()
        }
    }
}
