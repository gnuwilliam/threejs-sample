// ============================
// Defines the camera and scene
// ============================

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

// ====================
// Defines the renderer
// ====================

var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xEEEEEE, 1.0);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;

// ================
// Defines the axes
// ================

var axes = new THREE.AxisHelper( 20 );
scene.add(axes);

// =====================
// Defines the spotlight
// =====================

var spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( -40, 60, -10 );
spotLight.castShadow = true;
scene.add( spotLight );

// =======================
// Defines a plane element
// =======================

var planeGeometry = new THREE.PlaneGeometry(60,20);
var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
var plane = new THREE.Mesh(planeGeometry,planeMaterial);

plane.receiveShadow = true;

plane.rotation.x =- 0.5 * Math.PI;
plane.position.x = 15;
plane.position.y = 0;
plane.position.z = 0;

scene.add(plane);

// ======================
// Defines a cube element
// ======================

var cubeGeometry = new THREE.CubeGeometry(4,4,4);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

cube.castShadow = true;

cube.position.x = -4;
cube.position.y = 3;
cube.position.z = 0;

scene.add(cube);

// ========================
// Defines a sphere element
// ========================

var sphereGeometry = new THREE.SphereGeometry(4,20,20);
var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

sphere.castShadow = true;

sphere.position.x = 20;
sphere.position.y = 4;
sphere.position.z = 2;

scene.add(sphere);

// ==================
// Camera definitions
// ==================

camera.position.x = -30;
camera.position.y = 40;
camera.position.z = 30;
camera.lookAt(scene.position);

// ================
// Define the stats
// ================

function initStats () {
   var stats = new Stats();
   stats.setMode(0);
   stats.domElement.style.position = 'absolute';
   stats.domElement.style.left = '0px';
   stats.domElement.style.top = '0px';
   document.getElementById('stats').appendChild( stats.domElement );

   return stats;
};

var stats = initStats();

// ================
// Render the scene
// ================

var step = 0;
var render = function () {
    stats.update();

    requestAnimationFrame(render);

    step += 0.05;
    
    sphere.position.y = 2 + ( 10 * Math.abs( Math.sin(step) ) );

    cube.rotation.x += 0.02;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;

    renderer.render(scene, camera);
};

document.body.appendChild(renderer.domElement);
render();