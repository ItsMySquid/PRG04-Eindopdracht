import { Color, Font, Label, Scene, Vector } from "excalibur";
import { Ship } from "./ship";
import { Comet } from "./comet";
import { Smallcomet } from "./smallcomet";
import { Background } from "./background";
import { UI } from "./UI";
import { Game } from "./game";

export class Level extends Scene {

    /**
     * 
     * @param {Game} engine 
     */
    onInitialize(engine) {
        this.score = 0;

    }

    onActivate(ctx) {
        // achtergrond
        this.background = new Background();
        this.add(this.background);

        // // UI invoeren
        this.ui = new UI()
        this.add(this.ui)

        // elementen in het level
        this.ship = new Ship();
        this.add(this.ship);

        this.comet = new Comet();
        this.add(this.comet)

        for (let i = 0; i < 10; i++) {
            this.smallcomet = new Smallcomet();
            this.add(this.smallcomet);
        }
        this.score = 0;
    }

    onDeactivate() {
        this.actors.forEach(actor => actor.kill());
    }

    powerupScore(score) {
        this.score += score;
        console.log(this.score);
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