const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0x00ffff,
  metalness: 0.7,
  roughness: 0.2,
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const light = new THREE.PointLight(0xffffff, 1);
light.position.set(25, 50, 25);
scene.add(light);

camera.position.z = 30;

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.005;
  torusKnot.rotation.y += 0.007;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
