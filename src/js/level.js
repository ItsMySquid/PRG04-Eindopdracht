import { Color, Font, Label, Scene, Vector } from "excalibur";
import { Ship } from "./ship";
import { Comet } from "./comet";
import { Smallcomet } from "./smallcomet";
import { Background } from "./background";
import { UI } from "./UI";

export class Level extends Scene {
    onInitialize(engine) {
        this.score = 0;

        // achtergrond
        const background = new Background();
        this.add(background);

        // UI invoeren
        this.ui = new UI()
        this.add(this.ui)

        // elementen in het level
        const ship = new Ship();
        this.add(ship);

        const comet = new Comet();
        this.add(comet)

        for (let i = 0; i < 10; i++) {
            const smallcomet = new Smallcomet();
            this.add(smallcomet);
        }
    }

    onActivate(ctx) {
        // no clue wat het doet maar komt wss in de les.
        console.log("reset het level");
    }

    onPostUpdate(engine) {
        // update score

        if (this.score === 10) {
            engine.goToScene('game-won')
        } else if (this.score === 15) {
            //game over
            engine.goToScene('game-over')
        }
    }
}