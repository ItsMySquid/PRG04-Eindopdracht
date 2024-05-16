import { Color, Font, Label, Scene, Vector } from "excalibur";

export class Gamewon extends Scene {
    onInitialize(engine) {
        this.scoreLabel = new Label({
            text: `Je hebt Gewonnen!`,
            pos: new Vector(600, 450),
            font: new Font({ color: Color.White, size: 30 }),
        });
        this.add(this.scoreLabel)
        // u win

        // plaatje of win background
    }

}