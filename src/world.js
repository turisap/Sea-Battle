/**
 * Created by HP on 31-Oct-17.
 */
export class World {
    constructor(background) {
        this.bg = background;
    }

    run () {
        this.bg.volume = 0.05;
        //this.bg.play();
    }
}