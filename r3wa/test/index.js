import './main.scss'
import * as THREE from 'three';
import {add} from './wow.rs';
console.log(add(2, 3));
let camera, scene, renderer;
let geometry, material, mesh;
init();
animate();
