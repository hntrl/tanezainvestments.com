import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import coinHref from '../assets/coin.glb'

console.log("%c⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟%c⣉⡥⠶⢶⣿⣿⣿⣿⣷⣆%c⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⡿%c⢡⡞⠁⠀⠀⠤⠈⠿⠿⠿⠿⣿%c%c⠀⢻⣦⡈%c⠻⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⡇⠘⡁⠀%c⢀⣀⣀⣀⣈⣁⣐⡒%c%c⠢⢤⡈⠛⢿⡄%c⠻⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⡇⠀%c⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄%c%c⠉⠐⠄⡈⢀%c⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⠇%c⢠⣿⣿⣿⣿⡿⢿⣿⣿⣿⠁⢈⣿⡄%c⠀%c⢀⣀%c⠸⣿⣿⣿⣿\n⣿⣿⣿⣿⡿⠟%c⣡⣶⣶⣬⣭⣥⣴%c%c⠀⣾⣿⣿⣿⣶⣾⣿⣧%c%c⠀⣼⣿⣷⣌%c⡻⢿⣿\n⣿⣿⠟%c⣋⣴⣾⣿⣿⣿⣿⣿⣿⣿⡇%c%c⢿⣿⣿⣿⣿⣿⣿⡿%c%c⢸⣿⣿⣿⣿⣷%c⠄⢻\n⡏%c⠰⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢂%c%c⣭⣿⣿⣿⣿⣿⠇%c%c⠘⠛⠛⢉⣉%c⣠⣴⣾\n⣿⣷⣦%c⣬⣍⣉⣉⣛⣛⣉⠉%c%c⣤⣶⣾⣿⣿⣿⣿⣿⣿⡿%c⢰⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧%c⡘⣿⣿⣿⣿⣿⣿⣿⣿⡇%c⣼⣿⣿⣿⣿⣿⣿⣿⣿\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇%c⢸⣿⣿⣿⣿⣿⣿⣿⠁%c⣿⣿⣿⣿⣿⣿⣿⣿⣿\n\nhey kid. wanna buy some websites?  https://hntrl.io", "font-style:italic;color:gray;","font-style:italic;color:white;","font-style:italic;color:gray;", "font-style:italic;color:white;","font-style:italic;color:gray;","font-style:italic;color:red;","font-style:italic;color:gray;", "font-style:italic;color:white;","font-style:italic;color:gray;","font-style:italic;color:red;","font-style:italic;color:gray;", "font-style:italic;color:white;","font-style:italic;color:gray;","font-style:italic;color:red;","font-style:italic;color:gray;", "font-style:italic;color:white;","font-style:italic;color:gray;","font-style:italic;color:teal;","font-style:italic;color:gray;", "font-style:italic;color:#EEBC1D;","font-style:italic;color:gray;","font-style:italic;color:white;","font-style:italic;color:gray;","font-style:italic;color:teal;","font-style:italic;color:gray;", "font-style:italic;color:#EEBC1D;","font-style:italic;color:gray;","font-style:italic;color:white;","font-style:italic;color:gray;","font-style:italic;color:teal;","font-style:italic;color:gray;", "font-style:italic;color:#EEBC1D;","font-style:italic;color:gray;","font-style:italic;color:white;","font-style:italic;color:gray;","font-style:italic;color:teal;","font-style:italic;color:gray;", "font-style:italic;color:#EEBC1D;","font-style:italic;color:gray;","font-style:italic;color:white;","font-style:italic;color:gray;", "font-style:italic;color:white;","font-style:italic;color:gray;", "font-style:italic;color:white;","font-style:italic;color:gray;")

let scene, canvas, container, coin, camera, ambientLight, light1, light2, light3, pmremGenerator, renderer;

let mouse = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2
}

init()

function init() {
  container = document.querySelector('div#crownContainer')
  canvas = document.querySelector('canvas#crown')
  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
  })
  renderer.setPixelRatio( window.devicePixelRatio );

  pmremGenerator = new THREE.PMREMGenerator(renderer);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(25);
  camera.position.set(0, 0, 10);

  ambientLight = new THREE.AmbientLight(0x000000)
  scene.add(ambientLight)

  light1 = new THREE.PointLight( 0xffffff, 1 );
  light1.position.set( 0, 50, 0 );
  scene.add( light1 );

  scene.add(new THREE.PointLightHelper(light1, 1))

  light2 = new THREE.PointLight( 0xffffff, 1, 0 );
  light2.position.set( 50, 50, 100 );
  scene.add( light2 );

  scene.add(new THREE.PointLightHelper(light2, 1))

  light3 = new THREE.PointLight( 0xffffff, 1, 0 );
  light3.position.set( - 50, - 100, - 50 );
  scene.add( light3 );

  scene.add(new THREE.PointLightHelper(light3, 1))

  const loader = new GLTFLoader();
  loader.load(coinHref, function(gtlf) {
    coin = gtlf.scene;
    scene.add(coin);

    coin.traverse(function(object) {
      if (object.isMesh) {
        object.material = new THREE.MeshStandardMaterial({
          color: 0xAF2025,
          roughness: 0.5,
          metalness: 0.35 
        });
        object.material.side = THREE.DoubleSide
        object.castShadow = true;
      }
    });

    coin.position.set(0,0,0);
    coin.rotation.y = -0.15;

    setSize();
    animate();
  }, undefined, function(error) {
    console.error(error)
  })

  window.addEventListener('resize', setSize, false);
  window.addEventListener('mousemove', onMouseMove, false);
}

function setSize() {
  let sizes = {
    width: container.offsetWidth,
    height: container.offsetHeight,
  }
  camera.aspect = sizes.width / sizes.height;
  camera.position.z = Math.max(Math.abs(-(sizes.width - 1200) * .015),10)
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
}

// On mouse move
function onMouseMove(event) {
	event.preventDefault();
  mouse.x = event.clientX
  mouse.y = event.clientY
};

function animate() {
  requestAnimationFrame(animate)
  coin.rotation.z = (mouse.x / window.innerWidth) * .25 + .2;
  coin.rotation.x = ((mouse.y / window.innerHeight) * .25 + 1) + (window.scrollY * -.001);
  renderer.render(scene, camera)
}

function createPanel() {
  const panel = new GUI( { width: 310 } );

  const oneFolder = panel.addFolder('Light1')
  oneFolder.add(light1.position, 'x', -100, 100)
  oneFolder.add(light1.position, 'y', -100, 100)
  oneFolder.add(light1.position, 'z', -100, 100)
  oneFolder.add(light1, 'intensity', 0, 5)
  oneFolder.add(light1, 'distance', 0, 5)
  oneFolder.add(light1, 'visible')

  const twoFolder = panel.addFolder('Light2')
  twoFolder.add(light2.position, 'x', -100, 100)
  twoFolder.add(light2.position, 'y', -100, 100)
  twoFolder.add(light2.position, 'z', -100, 100)
  twoFolder.add(light2, 'intensity', 0, 5)
  twoFolder.add(light2, 'distance', 0, 5)
  twoFolder.add(light2, 'visible')


  const threeFolder = panel.addFolder('Light3')
  threeFolder.add(light3.position, 'x', -100, 100)
  threeFolder.add(light3.position, 'y', -100, 100)
  threeFolder.add(light3.position, 'z', -100, 100)
  threeFolder.add(light3, 'intensity', 0, 5)
  threeFolder.add(light3, 'distance', 0, 5)
  threeFolder.add(light3, 'visible')

  // Coin Controls
  const coinFolder = panel.addFolder( 'Coin' );
  const coinPositionFolder = coinFolder.addFolder( 'Position' );
  coinPositionFolder.add(coin.position, 'x', -10, 10)
  coinPositionFolder.add(coin.position, 'y', -10, 10)
  coinPositionFolder.add(coin.position, 'z', -10, 10)
  const coinRotationFolder = coinFolder.addFolder( 'Rotation' );
  coinRotationFolder.add(coin.rotation, 'x', -1, 1, 0.001)
  coinRotationFolder.add(coin.rotation, 'y', -1, 1, 0.001)
  coinRotationFolder.add(coin.rotation, 'z', -1, 1, 0.001)

  // Camera Controls
  const cameraFolder = panel.addFolder( 'Camera' );
  const cameraControlsFolder = cameraFolder.addFolder( 'Controls' );
  cameraControlsFolder.add(camera, 'fov', 0, 180).onChange(setSize)
  const cameraPositionFolder = cameraFolder.addFolder( 'Position' );
  cameraPositionFolder.add(camera.position, 'x', -100, 100)
  cameraPositionFolder.add(camera.position, 'y', -100, 100)
  cameraPositionFolder.add(camera.position, 'z', -100, 100)
  const cameraRotationFolder = cameraFolder.addFolder( 'Rotation' );
  cameraRotationFolder.add(camera.rotation, 'x', -1, 1, 0.001)
  cameraRotationFolder.add(camera.rotation, 'y', -1, 1, 0.001)
  cameraRotationFolder.add(camera.rotation, 'z', -1, 1, 0.001)

  coinFolder.close();
  dirLightFolder.close();
  cameraFolder.close();
}

window.createPanel = createPanel