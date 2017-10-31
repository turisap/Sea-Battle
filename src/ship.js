/**
 * Created by HP on 31-Oct-17.
 */
export class Ship {
    constructor(ship, sea) {
        this.ship = ship;
        this.sea = sea;
        this.stricken = false;
    }

    coordinates () {
        return this.ship.getBoundingClientRect();
    }

    sink() {
        this.stricken = true;
    }

    sail() {
        let i = 0;
        const int = setInterval(() => animate(this), randomSpeed());

        function animate (obj) {
            if(parseInt(obj.ship.style.marginLeft) > obj.sea.offsetWidth) {
                clearInterval(int);
                setTimeout(() =>{
                    i = 0;
                    obj.ship.style.marginLeft = `-${obj.ship.offsetWidth}px`;
                    return obj.sail();
                }, getRandomPause());
            }
            if(obj.stricken) {
                sendToTheBottom(obj)
                    .then(() => {
                    clearInterval(int);
                    obj.stricken = false;
                    obj.ship.style.opacity = 1;
                    obj.ship.style.marginLeft = `-${obj.ship.offsetWidth}px`;
                    setTimeout(() =>{
                        i = 0;
                        return obj.sail();
                    }, getRandomPause());
                });

            }
            obj.ship.style.marginLeft = `${i * obj.ship.offsetWidth / 50}px`;
            i++
        }
    }
}


/**
 * Provides class with a random speed of th ship
 * @return {number}
 * */
function randomSpeed() {
    return Math.floor(Math.random() * 30 + 15);
}


/**
 * Provides class with random pause between ship appearance
 * @returns {number}
 */
function getRandomPause() {
    return Math.floor(Math.random() * (3 - 1) + 1) * 1000;
}


function sendToTheBottom(ship) {
    return new Promise ((resolve, reject) => {
        ship.ship.style.opacity = 0.5;
        resolve();
    });
}
