/**
 * Created by HP on 28-Oct-17.
 */
export class Gun {
    /**
     * @param {HTMLelement} gun
     * @param {HTMLelement} sea
     * */
    constructor(gun, sea) {
        this.gun = gun;
        this.sea = sea;
    }

    get distance() {
        //return this.calculateDistance()
    }

    /**
     * Calculates distance from the gun to the horizon (wedge of the parent div) in px
     * @param {event} e
     * @return {Number} distance
     * */
     calculateDistance(e) {
        let distance;
        let k1, k2;
        const angle = getAngle(e);
        if (angleIsSharp(angle)) {
            //console.log(Math.tan(Math.abs(angle / 57)));
            k1 = this.sea.offsetWidth / 2;
            k2 = k1 * Math.tan(Math.abs((angle + 180)/ 57));
        } else {
            k1 = this.sea.offsetHeight;
            k2 = k1 / Math.tan(Math.abs(angle / 57));
        }
        distance = Math.sqrt(Math.pow(k1, 2) + Math.pow(k2, 2));
        //console.clear();
        //console.log(`Distance ${Math.round(distance)}`);
        return distance;
     }

    /**
     * Rotates the gun on the screen
     * @param {event} e
     * @return {undefined}
     * */
    rotateGun(e){
        const angle = getAngle(e);
        //console.log(Math.round(angle));
        this.gun.style.webkitTransform = `rotate(${angle}deg)`;
    }

    fire() {
        
    }
}

/**
 * Calculates the angle between the gun element and horizon
 * @param {event} e
 * return {Number}
 * */
function getAngle(e){
    return (e.pageX / window.innerWidth) * 180 - 180;
}

/**
 * Decides whether angle between the gun and horizon is sharp or not
 * @param {Number} angle
 * @return {Boolean}
 * */
function angleIsSharp(angle) {
    return ((angle > -180 && angle < -168) || (angle < 0 && angle > - 11));
}
