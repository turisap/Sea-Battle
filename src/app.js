/**
 * Created by HP on 28-Oct-17.
 */
import Gun from './gun';
/*const sea = document.querySelector('#window');
const gun = document.querySelector('#gun');

function rotateGun(e){
    //debugger;
    const angle = (e.pageX / window.innerWidth) * 180 - 180;
    gun.style.webkitTransform = `rotate(${angle}deg)`
}

document.body.addEventListener('mousemove', rotateGun);*/

const g = new Gun();
g.getDistance();