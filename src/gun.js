/**
 * Created by HP on 28-Oct-17.
 */
export class Gun {
    constructor(gun) {
        this.gun = gun;
    }

    get distance() {
        //return this.calculateDistance()
    }

    calculateDistance(e) {

    }

    rotateGun(e){
        //debugger;
        const angle = (e.pageX / window.innerWidth) * 180 - 180;
        this.gun.style.webkitTransform = `rotate(${angle}deg)`
    }
}

