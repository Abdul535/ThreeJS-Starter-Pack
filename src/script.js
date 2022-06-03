import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

//scene
const scene = new THREE.Scene();

//Axes Helper
const AxesHelper = new THREE.AxesHelper(5)
scene.add(AxesHelper)

//Objects : include geometry,material and mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
//Mesh args (geometry, material)
const cube = new THREE.Mesh(geometry, material)
scene.add(cube);

//camera
const sizes = {
    width:window.innerWidth,
    height:window.innerHeight
}

// PerspectiveCamera args (fov, aspectRatio, near, far)
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 1000)
camera.position.z = 5;
scene.add(camera)

//renderer
const canvas = document.querySelector('.webgl');
console.log(canvas)
const renderer = new THREE.WebGLRenderer({
    canvas
})

///////////////////////////////
//resize,update logic
window.addEventListener('resize',()=>{

    //update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width,sizes.height)

})

renderer.setSize(sizes.width,sizes.height)

//pixel ratio either 2 aur less than 2
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))


////////////////////////////////////////
//fullscreen dblclick logic
window.addEventListener('dblclick',()=>{
    if(!document.fullscreenElement){
        canvas.requestFullscreen()
    }
    else{
        document.exitFullscreen()
    }
})


////////////////////////////////////////////
//using OrbitControls
const controls = new OrbitControls(camera, canvas)
controls.target.y = 1
controls.enableDamping = true
controls.enabled = true


const clock = new THREE.Clock();

////////////////////////////////////////////////
//requestAnimationFrame
const loop = () =>{

    const eTime = clock.getElapsedTime();
    controls.update()

    renderer.render(scene,camera)
    window.requestAnimationFrame(loop)
}

loop()
