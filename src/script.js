import './style.scss'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**  ANIMATION JAVASCRIPT HTML **/
let cur = document.getElementById("cur");
let expo_1 = document.getElementById("expo_1");

gsap.to(".translate", {
    translateY: 0,
    delay: 0.5,
    duration: 2.5,
    ease: "expo.out"

})

const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousedown', (event) => {

})



window.addEventListener('mouseup', (event) => {

})

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX - innerWidth
    cursor.y = event.clientY


})

expo_1.addEventListener('mouseover', () => {
    console.log('coucou')

    gsap.to(cur, {
        opacity: 1,
        translateX: cursor.x,
        translateY: cursor.y
    })
    console.log(gsap)
})












/**
 * Base
 */
// Debug
// const gui = new dat.GUI()


//galaxy 



// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Test cube
 */
const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ wireframe: true })
)
scene.add(cube)







/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth / 2,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth / 2
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 3
camera.position.y = 3
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    cube.rotation.y = elapsedTime * 0.2




    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()