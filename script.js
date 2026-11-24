const container = document.getElementById('scene-container');
let scene, camera, renderer, clock, mixer;
let foxModel = null;
let actions = {};
let currentAction = null;

const ORTHO_ZOOM = 6;
const FADE_DURATION = 0.2;
const WALK_THRESHOLD = 3;
const RUN_THRESHOLD = 6;
const MOVE_SPEED_WALK = 5;
const MOVE_SPEED_RUN = 10;

let FOX_STOPPED = false;

const raycaster = new THREE.Raycaster();
const mousePos = new THREE.Vector2();
const targetPosition = new THREE.Vector3();
let intersectionPlane;

const flatGrayMaterial = new THREE.MeshBasicMaterial({ 
    color: 0x21212a,
    skinning: true,
});

function init() {
    scene = new THREE.Scene();
    clock = new THREE.Clock();
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    
    const aspect = window.innerWidth / window.innerHeight;
    camera = new THREE.OrthographicCamera(
        -ORTHO_ZOOM * aspect,
        ORTHO_ZOOM * aspect,
        ORTHO_ZOOM,
        -ORTHO_ZOOM,
        -100,
        1000
    );
    
    camera.position.set(0, 5, 5.77);
    camera.lookAt(0, 0, 0);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    const planeGeom = new THREE.PlaneGeometry(100, 100);
    const planeMat = new THREE.MeshBasicMaterial({ visible: false });
    
    directionalLight.position.set(5, 10, 7);
    intersectionPlane = new THREE.Mesh(planeGeom, planeMat);
    intersectionPlane.rotation.x = -Math.PI / 2;
    
    scene.add(ambientLight);
    scene.add(directionalLight);
    scene.add(intersectionPlane);
    
    loadFoxModel();
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchMove, { passive: true });
  
    animate();
}

function loadFoxModel() {
    const loader = new THREE.GLTFLoader();
    loader.load('fox.glb', (gltf) => {
        foxModel = gltf.scene;
        foxModel.scale.set(1, 1, 1);
        foxModel.position.set(0, 0, 0);
        foxModel.traverse(child => {
            if (child.isMesh) {
                child.material = flatGrayMaterial;
            }
        });
        scene.add(foxModel);
        mixer = new THREE.AnimationMixer(foxModel);
        const animNames = { idle: 'Idle', walk: 'Walk', run: 'Gallop' };
        actions.idle = mixer.clipAction(gltf.animations.find(clip => clip.name === animNames.idle));
        actions.walk = mixer.clipAction(gltf.animations.find(clip => clip.name === animNames.walk));
        actions.run = mixer.clipAction(gltf.animations.find(clip => clip.name === animNames.run));
        Object.values(actions).forEach(action => {
            action.setLoop(THREE.LoopRepeat);
        });
        currentAction = actions.idle;
        currentAction.play();
    });
}

function onWindowResize() {
    const aspect = window.innerWidth / window.innerHeight;
    camera.left = -ORTHO_ZOOM * aspect;
    camera.right = ORTHO_ZOOM * aspect;
    camera.top = ORTHO_ZOOM;
    camera.bottom = -ORTHO_ZOOM;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseMove(event) {
    mousePos.x = (event.clientX / window.innerWidth) * 2 - 1;
    mousePos.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mousePos, camera);
    const intersects = raycaster.intersectObject(intersectionPlane);
    if (intersects.length > 0) {
        targetPosition.copy(intersects[0].point);
    }
}

function onTouchMove(event) {
    if (event.touches.length > 0) {
        const touch = event.touches[0];
        mousePos.x = (touch.clientX / window.innerWidth) * 2 - 1;
        mousePos.y = -(touch.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mousePos, camera);
        const intersects = raycaster.intersectObject(intersectionPlane);
        if (intersects.length > 0) {
            targetPosition.copy(intersects[0].point);
        }
    }
}

function switchToAction(newAction) {
    if (currentAction === newAction) return;
    newAction.reset();
    newAction.play();
    currentAction.crossFadeTo(newAction, FADE_DURATION, true);
    currentAction = newAction;
}

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();

    if (foxModel && mixer) {
        const distance = foxModel.position.distanceTo(targetPosition);
        let moveSpeed = 0;
        let nextAction;
        if (distance > RUN_THRESHOLD) {
            nextAction = actions.run;
            moveSpeed = MOVE_SPEED_RUN;
        } else if (distance > (WALK_THRESHOLD + (FOX_STOPPED ? 1 : 0))) {
            FOX_STOPPED = false;
            nextAction = actions.walk;
            moveSpeed = MOVE_SPEED_WALK;
        } else {
            FOX_STOPPED = true;
            nextAction = actions.idle;
            moveSpeed = 0;
        }
        
        switchToAction(nextAction);
        
        if (moveSpeed > 0) {
            const direction = targetPosition.clone().sub(foxModel.position).normalize();
            foxModel.position.add(direction.multiplyScalar(moveSpeed * delta));
            const tempMatrix = new THREE.Matrix4();
            const lookAtTarget = new THREE.Vector3(targetPosition.x, 0, targetPosition.z);
            tempMatrix.lookAt(lookAtTarget, foxModel.position, foxModel.up);
            const targetQuaternion = new THREE.Quaternion().setFromRotationMatrix(tempMatrix);
            foxModel.quaternion.slerp(targetQuaternion, 0.1);
        }
        
        mixer.update(delta);
    }
    
    renderer.render(scene, camera);
}

init();
