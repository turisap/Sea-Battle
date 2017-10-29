/**
 * Created by HP on 28-Oct-17.
 */

import {Gun} from './gun';

/**
 * Necessary DOM elements
 * */
const sea = document.querySelector('#window');
const gunElement = document.querySelector('#gun');


/**
 * Instances of classes to work with
 * */
let gun = new Gun(gunElement, sea);




/**
 * Event listeners
 * */
document.body.addEventListener('mousemove', (e) => {gun.rotateGun(e); gun.calculateDistance(e)});

