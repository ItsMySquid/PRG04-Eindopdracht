import { Vector } from "excalibur";
import { Resources } from "./resources"
import { Bullet } from "./bullet";
import { Projectile } from "./projectile";

export class Smallcomet extends Projectile {
    constructor() {
        super();
        this.graphics.use(Resources.Comet2.toSprite());
        this.scale = new Vector(0.5, 0.5);
        this.vel = new Vector(200, 0);
        this.pos = new Vector(Math.random() * -2000, Math.random() * 800);

        this.on('collisionstart', (event) => { this.hitSomething(event) });
    }

    hitSomething(event) {
        if (event.other instanceof Bullet) {
            this.kill()
            // @ts-ignore
            this.scene?.engine.updateScore(1)
            event.other.kill()
        }
    }
}
