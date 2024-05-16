import { Actor, Color, Font, Label, ScreenElement, Vector } from "excalibur";

export class UI extends ScreenElement {
    onInitialize(engine) {
        console.log("tekst veld is toegevoegd!");

        // score
        this.score = 0;
        this.scoreLabel;

        this.scoreLabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(25, 25),
            font: new Font({ color: Color.White, size: 30 }),
        });
        this.addChild(this.scoreLabel)


        // levens
        this.healthbar = new Actor({ x: 25, y: 60, color: Color.Green, width: 200, height: 20 })
        this.healthbar.graphics.anchor = Vector.Zero
        this.addChild(this.healthbar)

        // update als ik 1 van de 3 levens verlies
        // updateScore() {
        //     this.healthbar.scale = new Vector(0.66, 1)
        // }


        // aantal bullets onderaan het scherm
    }
}