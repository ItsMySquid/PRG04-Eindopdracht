import { Actor, Color, Font, Label, ScreenElement, Vector } from "excalibur";

export class UI extends ScreenElement {

    healthbar;
    score = 0
    scoreLabel

    onInitialize(engine) {
        // console.log("tekst veld is toegevoegd!");

        // score
        this.score = 0;
        this.scoreLabel;

        this.scoreLabel = new Label({
            text: `Score: ${this.score}`,
            pos: new Vector(25, 25),
            font: new Font({ color: Color.White, size: 30 }),
        });
        this.addChild(this.scoreLabel)

        this.goalText = new Label({
            text: `Behaal 10 punten!`,
            pos: new Vector(250, 25),
            font: new Font({ color: Color.White, size: 30 }),
        });
        this.addChild(this.goalText)

        // backdrop levens
        let barbackground = new Actor({ x: 20, y: 55, color: Color.Gray, width: 210, height: 30 })
        barbackground.graphics.anchor = Vector.Zero
        this.addChild(barbackground)

        // levens
        this.healthbar = new Actor({ x: 25, y: 60, color: Color.Green, width: 200, height: 20 })
        this.healthbar.graphics.anchor = Vector.Zero
        this.addChild(this.healthbar)

    }
    // update als ik 1 van de 3 levens verlies
    updateScore(score) {
        console.log("test");
        this.score += score;
        this.scoreLabel.text = `Score: ${this.score}`
    }


    // update health
    updateHealth(hp) {
        this.healthbar.scale = new Vector(hp, 1)
    }


    // aantal bullets onderaan het scherm
}