// Select the canvas element
const canvas = document.querySelector('.webgl')

// Create the scene
const scene = new THREE.Scene()

// Create a cube (box)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera setup (FOV, aspect ratio)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5 // Move the camera back so we can see the cube
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Render the scene
renderer.render(scene, camera)
