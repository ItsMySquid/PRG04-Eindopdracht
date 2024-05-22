import { Actor, Keys, Shape, Vector } from "excalibur";
import { Resources } from "./resources"
import { Ship } from "./ship";
import { Bullet } from "./bullet";

export class Smallship extends Actor {
    lives
    ship

    /**
     * 
     * @param {Ship} ship 
     */
    constructor(ship) {
        super({
            anchor: new Vector(0.5, 0.5),
            pos: new Vector(200, 200),
            width: 100,
            height: 100,
            radius: 500,
        });
        this.ship = ship
    }

    onInitialize(engine) {
        console.log("Ship created");
        this.graphics.use(Resources.Ship.toSprite());
        this.scale = new Vector(0.5, 0.5);
        this.pos = new Vector(1200, 450);
        // powerup gaat weg bij het verliezen van 1 leven
    }

    onPostUpdate(engine) {
        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            const bullet = new Bullet(new Vector(this.ship.pos.x + 50, this.ship.pos.y + 50));
            engine.add(bullet)
        }
    }
}
