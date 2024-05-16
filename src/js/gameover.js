import { Color, Font, Label, Scene, Vector } from "excalibur";

export class Gameover extends Scene {
    onInitialize(engine) {
        this.scoreLabel = new Label({
            text: `GET REKT NOOB!`,
            pos: new Vector(600, 450),
            font: new Font({ color: Color.White, size: 30 }),
        });
        this.add(this.scoreLabel)
        // u lose

        // plaatje of win background
    }

}