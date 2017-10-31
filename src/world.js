/**
 * Created by HP on 31-Oct-17.
 */
export class World {
    constructor(background) {
        this.bg = background;
    }

    run () {
        this.bg.addEventListener('ended', () => {
            this.bg.currentTime = 0;
            this.bg.play();
        }, false);
        this.bg.volume = 0.05;
        this.bg.play();
    }
}