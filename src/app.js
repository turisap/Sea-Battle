/**
 * Created by HP on 28-Oct-17.
 */

import {Gun} from './gun';

/**
 * Necessary DOM elements
 * */
const sea = document.querySelector('#window');
const gunElement = document.querySelector('#gun');
const projectile = document.querySelector('#projectile');


/**
 * Instances of classes to work with
 * */
let gun = new Gun(gunElement, sea, projectile);



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

