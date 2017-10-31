/**
 * Created by HP on 28-Oct-17.
 */

import {Gun} from './gun';
import {Ship} from './ship';

/**
 * Necessary DOM elements
 * */
const sea = document.querySelector('#window');
const gunElement = document.querySelector('#gun');
const projectile = document.querySelector('#projectile');
const shipElement = document.querySelector('#ship');


/**
 * Instances of classes to work with
 * */
const gun = new Gun(gunElement, sea, projectile);
const ship = new Ship(shipElement, sea);
ship.sail();



/**
 * Event listeners
 * */
document.body.addEventListener('mousemove', rotate);
document.body.addEventListener('click', (e) => {
    document.body.removeEventListener('mousemove', rotate); // ?????????????????
    gun.fire(e)
        .then(() => document.body.addEventListener('mousemove', rotate))
        .catch(err => console.warn(err));
});

function rotate(e) {
    gun.rotateGun(e)
}

