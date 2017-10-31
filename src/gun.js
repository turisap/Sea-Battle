/**
 * Created by HP on 28-Oct-17.
 */
export class Gun {
    /**
     * @param {HTMLelement} gun
     * @param {HTMLelement} sea
     * @param {HTMLelement} projectile
     * */
    constructor(gun, sea, projectile, ship, shot) {
        this.gun = gun;
        this.sea = sea;
        this.projectile = projectile;
        this.ship = ship;
        this.canShoot  = true;
        this.shot = shot;
    }

    /**
     * Rotates the gun on the screen
     * @param {event} e
     * @return {undefined}
     * */
    rotateGun(e){
        const angle = getAngle(e);
        this.gun.style.webkitTransform = `rotate(${angle}deg)`;
    }

    coordinates() {
        return this.gun.getBoundingClientRect();
    }

    /**
     *
     * @param {event} e
     * @param ship
     * @returns {Promise}
     */
    fire(e, ship) {
        return new Promise((resolve, reject) => {
            if (this.canShoot) {
                let i = 0;
                const projLen = this.projectile.offsetWidth;
                const steps = parseInt(Math.abs(calculateDistance(e, this.sea) / projLen));

                this.shot.currentTime = 0;
                this.shot.volume = 0.05;
                this.shot.play();

                this.canShoot = false;
                this.projectile.style.opacity = 1;
                let int = setInterval(() => animate(this), 20);

                function animate (self) {
                    if (stricken(self)) {
                        self.ship.sink();
                        resolve();
                        return;
                    }
                    if (i > steps) {
                        self.projectile.style.marginLeft = '0px';
                        self.projectile.style.opacity = 0;
                        self.canShoot = true;
                        clearInterval(int);
                        resolve();
                        return;
                    }
                    self.projectile.style.marginLeft = `${projLen * i}px`;
                    i++;
                }
            }
        });
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

/**
 * Calculates distance from the gun to the horizon (wedge of the parent div) in px
 * @param {event} e
 * @param {HTMLelement} sea
 * @return {Number} distance
 * */
function calculateDistance(e, sea) {
    let distance;
    let k1, k2;
    const angle = getAngle(e);
    if (angleIsSharp(angle)) {
        k1 = sea.offsetWidth / 2;
        k2 = k1 * Math.tan(Math.abs((angle + 180)/ 57));
    } else {
        k1 = sea.offsetHeight;
        k2 = k1 / Math.tan(Math.abs(angle / 57));
    }
    distance = Math.sqrt(Math.pow(k1, 2) + Math.pow(k2, 2));
    return distance;
}

function stricken(obj){
    const sh = obj.ship.coordinates();
    const pr = obj.projectile.getBoundingClientRect();
    /*console.log(`pr.left ${Math.round(pr.left)}, ship.l ${Math.round(sh.left)}, ship.r ${Math.round(sh.right)}, pr.top ${Math.round(pr.top)},
     sh.bottom ${Math.round(sh.bottom)}, sh.top ${Math.round(sh.top)}, pr.top ${Math.round(pr.top)}`);*/
    return allignedByX(sh, pr) && allignedByY(sh, pr);

    function allignedByX (sh, pr) {
        return pr.left > sh.left && pr.left < sh.right;
    }
    function allignedByY(sh, pr) {
        return pr.top < sh.bottom && pr.top > sh.top;
    }
}

