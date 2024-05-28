import { Color, Font, Label, Scene, Vector } from "excalibur";

export class Home extends Scene {
    onInitialize(engine) {
        this.winLabel = new Label({
            text: `SUCCES!`,
            pos: new Vector(600, 450),
            font: new Font({ color: Color.White, size: 30 }),
        });
        this.add(this.winLabel)

        this.scoreLabel = new Label({
            text: `Begin de Game`,
            pos: new Vector(600, 650),
            font: new Font({ color: Color.White, size: 30 }),
        });
        this.add(this.scoreLabel)
        this.scoreLabel.on('pointerdown', () => {
            engine.goToScene('level')
        });
    }

}