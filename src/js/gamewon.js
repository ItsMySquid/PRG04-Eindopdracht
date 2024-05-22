import { Color, Font, Label, Scene, Vector } from "excalibur";

export class Gamewon extends Scene {
    onInitialize(engine) {
        this.winLabel = new Label({
            text: `Je hebt Gewonnen!`,
            pos: new Vector(600, 450),
            font: new Font({ color: Color.White, size: 30 }),
        });
        this.add(this.winLabel)

        console.log("je komt hier");

        this.scoreLabel = new Label({
            text: `Begin opnieuw`,
            pos: new Vector(600, 650),
            font: new Font({ color: Color.White, size: 30 }),
        });
        this.add(this.scoreLabel)
        this.scoreLabel.on('pointerdown', () => {
            engine.goToScene('level')
        });
        // u win
    }

}