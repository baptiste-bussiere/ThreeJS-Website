import './style.scss'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import gsap from 'gsap'
import * as dat from 'lil-gui'


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


const loaderContainer = document.querySelector('.loader');
window.addEventListener('load', () => {

    gsap.to(loaderContainer, {
        opacity: 0,
        display: "none"
    })

});
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

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Models
 */


const gltfLoader = new GLTFLoader()


var t1;
var t2;
var t3;
var t4;

gltfLoader.load('/models/toile-3.glb', function(gltf) {

    t1 = gltf.scene;
    t1.position.set(0, 0, 0)
    scene.add(t1);

});

gltfLoader.load('/models/toile-2.glb', function(gltf) {

    t2 = gltf.scene;
    t2.scale.set(0.0015, 0.0015, 0.0015)

    t2.position.set(5, 5, 0)
    scene.add(t2);

});

gltfLoader.load('/models/toile-1.glb', function(gltf) {

    t3 = gltf.scene;
    t3.position.set(10, 0, 0)
    scene.add(t3);

});
gltfLoader.load('/models/toile-4.glb', function(gltf) {

    t4 = gltf.scene;
    t4.position.set(15, 0, 0)
    t4.scale.set(0.06, 0.06, 0.06)
    scene.add(t4);

});






/**
 * Floor
 */


/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
directionalLight.castShadow = true
directionalLight.shadow.mapSize.set(1024, 1024)
directionalLight.shadow.camera.far = 15
directionalLight.shadow.camera.left = -7
directionalLight.shadow.camera.top = 7
directionalLight.shadow.camera.right = 7
directionalLight.shadow.camera.bottom = -7
directionalLight.position.set(-5, 5, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth / 2,
    height: window.innerHeight
}



let click = false;



banner.addEventListener('click', (event) => {
    sizes.width = window.innerWidth
    gsap.to(sizes, {
        width: sizes.width,
    })
    gsap.to(banner, {
        display: "none",
        opacity: 0
    })
    gsap.to(cross, {
        display: "inherit",
        opacity: 1,
        delay: 1
    })


    click = true


})

cross.addEventListener('click', (event) => {

    sizes.width = window.innerWidth / 2,
        gsap.to(cross, {
            display: "none",
            opacity: 0,

        })
    gsap.to(banner, {
        display: "inherit",
        opacity: 1,
        delay: 1
    })
    click = false




})




/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 1



left.addEventListener("click", () => {
    let x = camera.position.x
    gsap.to(camera.position, {
        x: x - 5,
        duration: 3,
        ease: 'ease.out'
    })
});

right.addEventListener("click", () => {
    let x = camera.position.x

    gsap.to(camera.position, {
        x: x + 5,
        duration: 3,
        ease: 'power4.in.out'
    })
});


scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    if (t1) {

        gsap.to(t1.rotation, {
            x: cursor.y / sizes.height - 0.5,
            y: cursor.x / sizes.width / 2 + 0.5,

        })
        t1.position.y = Math.sin(elapsedTime) * 0.05


    }
    if (t2) {

        gsap.to(t2.rotation, {
            x: cursor.y / sizes.height - 0.5,
            y: cursor.x / sizes.width / 2 + 0.5,

        })
        t2.position.y = Math.sin(elapsedTime) * 0.05


    }
    if (t3) {
        gsap.to(t3.rotation, {
            x: cursor.y / sizes.height - 0.5,
            y: cursor.x / sizes.width / 2 + 0.5,
        })
        t3.position.y = Math.sin(elapsedTime) * 0.05
    }
    if (t4) {
        gsap.to(t4.rotation, {
            x: cursor.y / sizes.height - 0.5,
            y: cursor.x / sizes.width / 2 + 3.5,
        })
        t4.position.y = Math.sin(elapsedTime) * 0.05
    }


    if (camera.position.x == 0) {
        gsap.to(left, {
            display: 'none',
            opacity: 0
        })
    } else {
        gsap.to(left, {
            display: 'inherit',
            opacity: 1
        })
    }
    if (camera.position.x == 20) {
        gsap.to(right, {
            display: 'none',
            opacity: 0
        })
    } else {
        gsap.to(right, {
            display: 'inherit',
            opacity: 1
        })
    }

    if (click) {


        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })
    } else(
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
    )




    // Update controls
    // controls.update()
    // Render
    renderer.render(scene, camera)
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()