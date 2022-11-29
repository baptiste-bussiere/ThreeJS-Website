import './style.scss'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as dat from 'lil-gui'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/**  ANIMATION JAVASCRIPT HTML **/

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

cur1.addEventListener('mouseover', (event) => {

    gsap.to(point1, {
        opacity: 1,
    })
})

cur1.addEventListener('mouseout', (event) => {
    gsap.to(point1, {
        opacity: 0,
    })
})
cur2.addEventListener('mouseover', (event) => {

    gsap.to(point2, {
        opacity: 1,
    })
})

cur2.addEventListener('mouseout', (event) => {
    gsap.to(point2, {
        opacity: 0,
    })
})
cur3.addEventListener('mouseover', (event) => {

    gsap.to(point3, {
        opacity: 1,
    })
})

cur3.addEventListener('mouseout', (event) => {
    gsap.to(point3, {
        opacity: 0,
    })
})
cur4.addEventListener('mouseover', (event) => {

    gsap.to(point4, {
        opacity: 1,
    })
})

cur4.addEventListener('mouseout', (event) => {
    gsap.to(point4, {
        opacity: 0,
    })
})
cur5.addEventListener('mouseover', (event) => {

    gsap.to(point5, {
        opacity: 1,
    })
})

cur5.addEventListener('mouseout', (event) => {
    gsap.to(point5, {
        opacity: 0,
    })
})
cur6.addEventListener('mouseover', (event) => {

    gsap.to(point6, {
        opacity: 1,
    })
})

cur6.addEventListener('mouseout', (event) => {
    gsap.to(point6, {
        opacity: 0,
    })
})
cur7.addEventListener('mouseover', (event) => {

    gsap.to(point7, {
        opacity: 1,
    })
})

cur7.addEventListener('mouseout', (event) => {
    gsap.to(point7, {
        opacity: 0,
    })
})
cur8.addEventListener('mouseover', (event) => {

    gsap.to(point8, {
        opacity: 1,
    })
})

cur8.addEventListener('mouseout', (event) => {
    gsap.to(point8, {
        opacity: 0,
    })
})

cur8.addEventListener('mouseover', (event) => {

    gsap.to(point8, {
        opacity: 1,
    })
})

cur8.addEventListener('mouseout', (event) => {
    gsap.to(point8, {
        opacity: 0,
    })
})



window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX - innerWidth
    cursor.y = event.clientY
    point1.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
    point2.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
    point3.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
    point4.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
    point5.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
    point6.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
    point7.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
    point8.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`
    curseur.style.transform = `translate(${cursor.x +9 }px, ${cursor.y- 9}px)`



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
    // scene.add(cube)





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
var loader = new GLTFLoader();

loader.load('/models/ghost.glb', function(gltf) {
    const alfa = gltf.scene;
    alfa.scale.set(2, 2, 2)

    scene.add(alfa);
    console.log(alfa.scale)
});
/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()




    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()