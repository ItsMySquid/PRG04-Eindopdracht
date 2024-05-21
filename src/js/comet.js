import { Vector } from "excalibur";
import { Resources } from "./resources"
import { Bullet } from "./bullet";
import { Projectile } from "./projectile";

export class Comet extends Projectile {
    constructor() {
        super();
        console.log("Big comet created");
        this.graphics.use(Resources.Comet.toSprite());
        this.scale = new Vector(0.5, 0.5);
        this.pos = new Vector(0, -100);
        this.vel = new Vector(350, 150);

        this.lives = 3

        this.on('collisionstart', (event) => { this.hitSomething(event); });
    }

    hitSomething(event) {
        if (event.other instanceof Bullet) {
            this.lives--
            if (this.lives === 0) {
                this.kill()
                // Dit zou mijn score moeten update maar werkt nog niet
                // @ts-ignore
                this.scene?.engine.updateScore(2)
            }
            event.other.kill()
        }
    }
}
