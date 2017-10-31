/**
 * Created by HP on 31-Oct-17.
 */
export class Ship {
    constructor(ship, sea) {
        this.ship = ship;
        this.sea = sea
    }

    sail() {
        let i = 0;
        const int = setInterval(() => animate(this), randomSpeed());

        function animate (obj) {
            if(parseInt(obj.ship.style.marginLeft) > obj.sea.offsetWidth) {
                //console.log(`dlkfj ${obj.ship.offsetWidth}`)
                clearInterval(int);
                setTimeout(() =>{
                    i = 0;
                    obj.ship.style.marginLeft = `-${obj.ship.offsetWidth}px`;
                    return obj.sail();
                }, getRandomPause());
            }
            obj.ship.style.marginLeft = `${i * obj.ship.offsetWidth / 50}px`;
            i++
        }
    }
}


/**
 * Provides class with a random speed of th ship
 * @return {Number}
 * */
function randomSpeed() {
    return Math.floor(Math.random() * 30 + 15);
}

function getRandomPause() {
    return Math.floor(Math.random() * (3 - 1) + 1) * 1000;
}
