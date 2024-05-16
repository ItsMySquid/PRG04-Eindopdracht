import { Actor, Keys, Shape, Vector } from "excalibur";
import { Resources } from "./resources"
import { Bullet } from "./bullet";
import { Projectile } from "./projectile";
import { Smallship } from "./smallship";

export class Ship extends Actor {
    lives
    ammo = 10
    bomb = 2

    constructor() {
        super({
            anchor: new Vector(0.5, 0.5),
            pos: new Vector(200, 200),
            width: 100,
            height: 100,
            radius: 500,
        });
    }

    onInitialize(engine) {
        console.log("Ship created");
        this.graphics.use(Resources.Ship.toSprite());
        this.scale = new Vector(0.1, 0.1);
        this.pos = new Vector(1200, 450);
        this.lives = 3
        // Powerup toevoegen vanaf x aantal punten
        this.addPowerup()

        this.on('collisionstart', (event) => this.hitSomething(event))
        this.on("exitviewport", (event) => this.resetPosition(event))
    }


    addPowerup() {
        const ship2 = new Smallship;
        this.addChild(ship2);
    }

    removeLife() {
        this.lives--
        console.log(`Lives: ${this.lives}`);
    }

    hitSomething(event) {
        if (event.other instanceof Projectile) {
            this.pos = new Vector(1200, 450)
            this.actions.blink(100, 100, 5)
            this.removeLife();
        }
    }

    Bombaway() {
        this.bomb--
        console.log(this.bomb);
        if (this.bomb > 0) {
            console.log("BOMMEN LOS");
        }
        // clear all projectiles when activated
        // 
        // Level.kill(Projectile)
        // Projectile.kill()
    }

    resetPosition(event) {
        this.pos = new Vector(1200, 450)
        this.removeLife();
    }

    onPostUpdate(engine) {
        if (this.lives === 0) {
            // game over scene
            engine.goToScene('game-over')
        }

        let xspeed = 0;
        let yspeed = 0;

        if (engine.input.keyboard.isHeld(Keys.W) || engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -300;
        }

        if (engine.input.keyboard.isHeld(Keys.S) || engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 300;
        }

        if (engine.input.keyboard.isHeld(Keys.D) || engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 300
        }

        if (engine.input.keyboard.isHeld(Keys.A) || engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -300
        }

        if (engine.input.keyboard.wasPressed(Keys.F)) {
            this.Bombaway()
        }

        this.vel = new Vector(xspeed, yspeed);
        this.graphics.flipHorizontal = (this.vel.x > 0)

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            if (this.ammo === 0) {
                //reload animation??
                console.log("reloading");
                this.ammo = 10
            } else {
                const bullet = new Bullet(this.pos);
                engine.add(bullet)
                this.ammo--
            }
            console.log(`dit is je aantal ammo: ${this.ammo}`);
        }
    }
}
