'use strict';

var _gun = require('./src/gun');

var _gun2 = _interopRequireDefault(_gun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*const sea = document.querySelector('#window');
const gun = document.querySelector('#gun');

function rotateGun(e){
    //debugger;
    const angle = (e.pageX / window.innerWidth) * 180 - 180;
    gun.style.webkitTransform = `rotate(${angle}deg)`
}

document.body.addEventListener('mousemove', rotateGun);*/

var g = new _gun2.default(); /**
                              * Created by HP on 28-Oct-17.
                              */

g.getDistance();