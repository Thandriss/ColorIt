import * as THREE from "three";
// import {OBJLoader} from "three/addons/loaders/OBJLoader.js";
function applyColors(colorsList, objString, camera, rend, obj, scene) {
    console.log('upload');
    console.log(objString);
    console.log(colorsList);
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth *0.747, window.innerHeight);
    // document.body.appendChild(renderer.domElement);
    // const scene = new THREE.Scene();
    // const white = new THREE.Color( 0xffffff )
    // scene.background = white;
    // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.position.z = 5;
    // let loader = new OBJLoader();
    // var decObj = decodeURI(objString);
    // const object = loader.parse(decObj);
    var names = [];
    // scene.add(object);
    obj.traverse(function (child) {
        if (child instanceof THREE.Mesh) {
            names.push(child.name)
        }
    });
    var listConverted = [];
    for (let i = 0; i <colorsList.length; i++) {
        console.log(colorsList[i].value)
        let color = colorsList[i].value
        if (color === "") {
            listConverted.push("#000000");
        } else {
            listConverted.push(color)
        }
    }
    console.log(listConverted);
    // for (let i = 0; i <colorsList.length; i++) {
    //     let elem = object.getObjectByName(name[i]);
    //     elem.material.color.setHex(listConverted[i]);
    // }
    let i = 0;
    obj.traverse((child) => {
        if (child.material) {
            console.log(child.name);
            obj.getObjectByName(child.name).material.color.set(listConverted[i]);
            i++;
        }
    });
    rend.render( scene, camera );
}
export default applyColors