import { OBJLoader } from "https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/OBJLoader";
import * as THREE from "https://cdn.skypack.dev/three@0.132.2"
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls'
// import * as data from './convert.json';
//doesnt work???

// instantiate a loader
const loader = new OBJLoader();

function onDocumentMouseMove( event ) {

    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / (window.innerHeight - 0.1 * window.innerHeight) ) * 2 + 1;

}

document.querySelector('#guessbutton').addEventListener('mouseup', () => {
    colorSkeleton(document.querySelector('#guessform').value)
})
window.addEventListener('keyup', (e) => {
    if(e.key == "Enter")
        colorSkeleton(document.querySelector('#guessform').value)
})

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight-0.1*window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight-0.1*window.innerHeight );

}
const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera( window.innerWidth / -2, window.innerWidth / 2, (window.innerHeight-0.1*window.innerHeight) / 2, (window.innerHeight-0.1*window.innerHeight) / -2, 1, 1000 );
camera.zoom = 90;
camera.updateProjectionMatrix();

// const renderer = new THREE.WebGLRenderer();

let raycaster;
var mouse = new THREE.Vector2(), INTERSECTED;
// scene.add( cube );
let renderer = new THREE.WebGLRenderer( { antialias: true } );
// renderer.setClearColor( 0xf0f0f0 );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight-0.1*window.innerHeight);
renderer.sortObjects = false;

document.addEventListener( 'mousemove', onDocumentMouseMove, false );
raycaster = new THREE.Raycaster();
// renderer.setSize( window.innerWidth, window.innerHeight-0.1*window.innerHeight );
document.querySelector('#screen').appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0x00ffff } );
const cube = new THREE.Mesh( geometry, material );

//

window.addEventListener( 'resize', onWindowResize, false );
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(0, 40, -40);
scene.add(spotLight);
// var spotLight = new THREE.SpotLight(0x58380E);
// spotLight.position.set(0, -40, 0);
// scene.add(spotLight);
var spotLight = new THREE.SpotLight(0xffffff);
spotLight.position.set(0, 0, 40);
scene.add(spotLight);




// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
const vertices = {}

let line_geometry = new THREE.BufferGeometry();
// itemSize = 3 because there are 3 values (components) per vertex
line_geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const line_material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
const mesh = new THREE.Mesh( line_geometry, line_material );
scene.add(mesh);







// let mouse = {
//     isDown: false,
//     start: false,
//     startX: 0,
//     startY: 0,
//     endX: 0,
//     endY: 0,
//     vx: 0,
//     vy: 0,
//     vz: 0
// }

// window.addEventListener('mousemove', (e) => {
//     if(mouse.isDown){
//         if(mouse.start){
//             mouse.endX = e.clientX;
//             mouse.endY = e.clientY;
//             mouse.vx = (mouse.startX - mouse.endX)
//             mouse.vy = (mouse.startY - mouse.endY)
//             mouse.vz = (mouse.vx < 0 ? -1 : 1) * Math.sqrt(mouse.vy ** 2 + mouse.vx **2)
//             mouse.start = false;
//         } else{
//             mouse.start = true;
//             mouse.startX = e.clientX;
//             mouse.startY = e.clientY;
//         }
//     }
// })

// window.addEventListener('mousedown', (e) => {
//     mouse.isDown = true;
// })

// window.addEventListener('mouseup', (e) => {
//     mouse.isDown = false;
//     mouse.start = false;
//     mouse.vx = mouse.vy = mouse.vz = 0;
// })
new OrbitControls(camera, renderer.domElement)
var body_material = new THREE.MeshLambertMaterial();
let body;
let bodyParts = [];
// load a resource
loader.load(
	// resource URL
	'bodyTest.obj',
	// called when resource is loaded

	function ( object ) {
        object.traverse(
            (child) => {
                if (child instanceof THREE.Mesh){
                    console.log('is mesh')
                    child.name.includes('body') ? null : bodyParts.push(child.name);
                    child.material = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });;
                }
            }
        )
        
        object.name = "body";
        console.log('added to scene')
        body = object;
        chooseBodyPart();
		scene.add( object );
	},
	// called when loading is in progresses
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log(error);

	}
);


camera.position.z = 5;
let rot = {
    x: 0,
    y: 0
}
let partName
let chooseBodyPart = () => {
    partName = bodyParts[Math.floor(Math.random() * bodyParts.length)];
    console.log("THe part is: " + partName)
    
}

function colorSkeleton(name){
    console.log(name);
    let ii=0, iii=0;
    let maxDist = scene.children[3].children[0].geometry.boundingSphere.center.distanceTo(scene.children[3].children[189].geometry.boundingSphere.center);
    for(let i = 0; i < scene.children[3].children.length; i++){
        //fix this dumbass make it select properly dont look for directiosn or ;
        if(name.toLowerCase() == scene.children[3].children[i].name.toLowerCase()){
            // scene.children[3].children[i].material.color = {r: 0.6+0.4*(1), g: 0.6, b:0.6}
            console.log('found')
            ii = i;
        } else if(partName == scene.children[3].children[i].name){
            console.log(scene.children[3].children[i].name.toLowerCase())
            iii=i;
        }
    }
    console.log(
        "Max dist is: ", 
        scene.children[3].children[0].geometry.boundingSphere.center.distanceTo(scene.children[3].children[189].geometry.boundingSphere.center)
    )
    console.log(ii, iii);
    let currRatio = scene.children[3].children[ii].geometry.boundingSphere.center.distanceTo(scene.children[3].children[iii].geometry.boundingSphere.center)/maxDist
    console.log(Math.sqrt(Math.sqrt(currRatio)), currRatio)
    scene.children[3].children[ii].material.color = {r: 1, g: Math.sqrt((currRatio)), b: 0}
    scene.children[3].children[scene.children[3].children.length-3].material.color = {r: 1, g: 0.6, b:0.6}
    console.log(scene.children[3].children[ii].geometry.boundingSphere.center.distanceTo(scene.children[3].children[iii].geometry.boundingSphere.center))
    
    // console.log(scene.children[3].children[1].geometry.boundingSphere.center.distanceTo(scene.children[3].children[5].geometry.boundingSphere.center))
}

function animate() {
	requestAnimationFrame( animate );

    // cube.rotation.x += 0.01
    // // body.rotation.y += 0.05
    // // body.rotation.z += 0.02;
    // // body.rotation.x += 0.03;
    // body.rotation.y +=-(mouse.vx)/100
    // // console.log(mouse.vy, THREE.MathUtils.lerp(body.rotation.x, (mouse.vy)/10, 0.1), body.rotation.x)
    // // body.rotation.z += -(mouse.vz)/1000
    // body.rotation.x += -(mouse.vy)/100
    camera.updateMatrixWorld();

    for(let i = 0; i < scene.children[3].children.length; i++){
        if(partName == scene.children[3].children[i].name){
            scene.children[3].children[i].material.color = {r: 0.2, g: 0.5, b:1}
        }
    }

    // find intersections
    // if (skull){
        raycaster.setFromCamera( mouse, camera );
        // console.log(scene.children[3].children)
        
        var intersects = raycaster.intersectObjects( scene.children, true );

        if ( intersects.length > 0 ) {

            if ( INTERSECTED != intersects[ 0 ].object ) {
                console.log(intersects[0]['object']['name'])

                if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

                INTERSECTED = intersects[ 0 ].object;
                INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
                INTERSECTED.material.emissive.setHex( 0xff0000 );

                for(let i = 0; i < scene.children[3].children.length; i++){
                    if(partName == scene.children[3].children[i].name){
                        scene.children[3].children[i].material.color = {r: 0.2, g: 0.5, b:1}
                    }
                }
                
                console.log(scene.children[3].children[0].material.color.r = 1)
            }

        } else {

            if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );

            INTERSECTED = null;

        }
        
    // }


	renderer.render( scene, camera );
    
}
// animate();
window.addEventListener('load', () => {
    animate();
})



	