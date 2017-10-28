/**
 * Created by HP on 28-Oct-17.
 */
const sea = document.querySelector('#window');
const gun = document.querySelector('#gun');

function rotateGun(e){
    const angle = (e.pageX / window.innerWidth) * 180 - 180;
    //console.warn(gun);
    gun.style.webkitTransform = `rotate(${angle}deg)`
}

document.body.addEventListener('mousemove', rotateGun);