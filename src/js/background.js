import { Actor, Sprite, Vector } from "excalibur"
import { Resources } from "./resources"

export class Background extends Actor {

    sprite

    onInitialize(engine) {
        this.sprite = new Sprite({
            image: Resources.Background,
            sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
        })
        this.anchor = Vector.Zero
        this.graphics.use(this.sprite)
        this.scale = new Vector(1440 / 1000, 900 / 562);
    }

    onPostUpdate(engine, delta) {
        this.sprite.sourceView.x += .05 * delta;
    }
}