import './style.css'
import * as THREE from 'three'

//scene
const scene = new THREE.Scene();

//objects : include geometry,material and mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
//Mesh args (geometry, material)
const cube = new THREE.Mesh(geometry, material)
scene.add(cube);

//camera
const sizes = {
    width:1000,
    height:600
}
// PerspectiveCamera args (fov, aspectRatio, near, far)
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 1000)
camera.position.z = 5;
cube.rotation.x = 0;
cube.rotation.y = 0;
scene.add(camera)

//renderer
const canvas = document.querySelector('.webgl');
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas:canvas 
})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)

//we can't see any thing bcoz camera and cube is at center and we can see only from outside of object , if a camera is inside an object there is nothing its all black
//need to backoff the camera
//to transform an object we can use -position -rotation -scale
// position property takes x,y and z axis
//y is always UP, x is always rightside and z is forward/backward always in THREE.js
//changing camera position on line 18


