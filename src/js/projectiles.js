import { Actor, Vector } from "excalibur";
import { Comet } from "./comet";
import { Smallcomet } from "./smallcomet";

export class Projectiles extends Actor {
    constructor() {
        super({
            anchor: new Vector(0.5, 0.5),
            pos: new Vector(100, 100),
            width: 100,
            height: 100,
            radius: 125,
        });
    }

    onInitialize(engine) {
        console.log("Projectiles working");
    }

}
