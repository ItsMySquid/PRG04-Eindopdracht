import { Color, Font, Label, Scene, Vector } from "excalibur";
import { Ship } from "./ship";
import { Comet } from "./comet";
import { Smallcomet } from "./smallcomet";
import { Background } from "./background";
import { UI } from "./UI";

export class Level extends Scene {
    onInitialize(engine) {
        this.score = 0;
        // this.scoreLabel;

        const background = new Background();
        this.add(background);

        // UI invoeren
        this.ui = new UI()
        this.add(this.ui)

        // this.scoreLabel = new Label({
        //     text: `Score: ${this.score}`,
        //     pos: new Vector(25, 25),
        //     font: new Font({ color: Color.White, size: 30 }),
        // });
        // this.add(this.scoreLabel)

        const ship = new Ship();
        this.add(ship);

        const comet = new Comet();
        this.add(comet)

        for (let i = 0; i < 10; i++) {
            const scomet = new Smallcomet();
            this.add(scomet);
        }
    }

    onActivate(ctx) {
        // no clue wat het doet maar komt wss in de les.
        console.log("reset het level");
    }

    onPostUpdate(engine) {
        if (this.score === 10) {
            engine.goToScene('game-won')
        } else if (this.score === 15) {
            //game over
            engine.goToScene('game-over')
        }
    }
}