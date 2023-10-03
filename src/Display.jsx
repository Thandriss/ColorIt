import * as THREE from "three";
import {OBJLoader} from "three/addons/loaders/OBJLoader.js";
// import THREE.OBJLoader from "https://cdn.jsdelivr.net/npm/three@0.116.1/examples/js/loaders/OBJLoader.js"

function display(objString) {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth *0.747, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    document.addEventListener('wheel', function () {
        camera.position.z = camera.position.z + event.deltaY * 0.001;
    });
    document.addEventListener('keydown', function () {
        switch (event.key) {
            case 'ArrowLeft':
                object.rotation.y -= 0.1;
                break;
            case 'ArrowRight':
                object.rotation.y += 0.1;
                break;
            case 'ArrowUp':
                object.rotation.x += 0.1;
                break;
            case 'ArrowDown':
                object.rotation.x -= 0.1;
                break;
        }
    });
    let loader = new OBJLoader();
    var decObj = decodeURI(objString);
    const object = loader.parse(decObj);
    scene.add(object);
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);
    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(-3, 10, -10);
    scene.add(dirLight);
    const animate = function () {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();
}
export default display