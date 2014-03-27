var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.3, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.querySelector('.container').appendChild( renderer.domElement );

var geometry = new THREE.CubeGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.04;
}

render();