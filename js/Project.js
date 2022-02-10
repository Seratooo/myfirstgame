import {OrbitControls} from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js'



const scene = new THREE.Scene()
var keyMap = [];
const camera1 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) //Perspective cam
const camera2 = new THREE.OrthographicCamera( window.innerWidth / -10, window.innerWidth / 10, window.innerHeight / 10, window.innerHeight / -10, 0.1, 1000) //Orthographic Top
const camera3 = new THREE.OrthographicCamera(window.innerWidth / -10, window.innerWidth / 10, window.innerHeight / 10, window.innerHeight / -10, 0.1, 1000) // Orthographic Front
const camera4 = new THREE.OrthographicCamera(window.innerWidth / -10, window.innerWidth / 10, window.innerHeight / 10, window.innerHeight / -10, 0.1, 1000) //Orthographic Rigth
const camera5 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) //Perspective cam
const camera6 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) //Perspective cam
const camera7 = new THREE.OrthographicCamera(window.innerWidth / -60, window.innerWidth / 60, window.innerHeight / 60, window.innerHeight / -60, 0.1, 1000) //Orthographic Rigth

camera1.position.z = 38; camera1.position.y = 6
camera2.position.y = 180
camera3.position.z = 10; camera3.position.y = 9.8; camera3.position.x = 10
camera4.position.x = 5; camera4.position.y = 0.8; camera4.position.z = 0
camera5.position.z = 40; camera5.position.y = 30; camera5.position.x = 20;
camera6.position.z = 0; camera6.position.y = 50; camera6.position.x = 0;
camera7.position.z = 30; camera7.position.y = 1; camera7.position.x = 0;

const positionMainCamara = 0.35;

const renderer1 = new THREE.WebGLRenderer()
renderer1.setSize(window.innerWidth, window.innerHeight)
const renderer2 = new THREE.WebGLRenderer()
renderer2.setSize(window.innerWidth, window.innerHeight)
const renderer3 = new THREE.WebGLRenderer()
renderer3.setSize(window.innerWidth, window.innerHeight)
const renderer4 = new THREE.WebGLRenderer()
renderer4.setSize(window.innerWidth, window.innerHeight)
const renderer5 = new THREE.WebGLRenderer()
renderer5.setSize(window.innerWidth, window.innerHeight)
const renderer6 = new THREE.WebGLRenderer()
renderer6.setSize(window.innerWidth, window.innerHeight)
const renderer7 = new THREE.WebGLRenderer()
renderer7.setSize(window.innerWidth, window.innerHeight)


renderer1.shadowMap.enabled = true
var modeloSombra = true;
//renderer1.shadowMap.type = THREE.PCFSoftShadowMap
renderer1.shadowMap.type = THREE.PCFShadowMap




//Changing position in Dl
// var frame = 0,
// maxFrame = 100;
// var loop = function () {
//     setTimeout(loop, 33);
//     var per = frame / maxFrame,
//     r = Math.PI * 2 * per;
 
//     // change directional light position
//     light2.position.set(Math.cos(r)*10, 2, Math.sin(r)*10);
 
//     frame = (frame + 1) % maxFrame;
//     renderer1.render(scene, camera1);
// };
// loop();


// const light2 = new THREE.DirectionalLight( 0xFFFFFF );
// light2.position.set( 0, 2, 5 );
// light2.castShadow = true;
// //const helper = new THREE.DirectionalLightHelper( light2, 10 );
// const helper = new THREE.CameraHelper( light2.shadow.camera );
// scene.add( helper );




// camera2.position.y=180
// camera3.position.z =-180
// camera4.position.x = 180


document.body.appendChild(renderer1.domElement)
//scene.add(new THREE.AxesHelper(9))
var aceleration = 0
 let controls =  new OrbitControls( camera1, renderer1.domElement );
 const MainSpaceShip = mainSpaceShip()
 MainSpaceShip.position.set(-3,-0.9,25)
 MainSpaceShip.rotation.set(0.4,0,0)


 const InSpaceShipeModel1 = {
  spaceShipe: inSpaceShipe(0x11dfff,0x00ff00),
  isColision: true,
  randomPosition: Math.ceil(getRandomArbitrary(-50, 50)),
  velocity: getRandomvelocity(1,2)/2,
  position: 0,
  colision: 0,
  index: 0
}
const InSpaceShipeModel2 = {
spaceShipe: inSpaceShipe(0xff8450,0xff01ff),
isColision: false,
randomPosition: Math.ceil(getRandomArbitrary(-50, 50)),
velocity: getRandomvelocity(1,2)/2,
position: 0,
colision: 0,
index: 1
}
const InSpaceShipeModel3 = {
spaceShipe: inSpaceShipe(0x668450,0x0001ff),
isColision: false,
randomPosition: Math.ceil(getRandomArbitrary(-50, 50)),
velocity: getRandomvelocity(1,2)/2,
position: 0,
colision: 0,
index: 2
}
const InSpaceShipeModel4 = {
spaceShipe: inSpaceShipe(0xabcdef,0xfedcba),
isColision: false,
randomPosition: Math.ceil(getRandomArbitrary(-50, 50)),
velocity: getRandomvelocity(1,2)/2,
position: 0,
colision: 0,
index: 3
}
const InSpaceShipeModel5 = {
spaceShipe: inSpaceShipe(0x987654,0x456789),
isColision: false,
randomPosition: Math.ceil(getRandomArbitrary(-50, 50)),
velocity: getRandomvelocity(1,2)/2,
position: 0,
colision: 0,
index: 4
}
const InSpaceShipeModel6 = {
spaceShipe: inSpaceShipe(0x567890,0x12345f),
isColision: false,
randomPosition: Math.ceil(getRandomArbitrary(-50, 50)),
velocity: getRandomvelocity(1,2)/2,
position: 0,
colision: 0,
index: 5
}
const InSpaceShipeModel7 = {
spaceShipe: inSpaceShipe(0x777abb,0xfff1ff),
iscColision: false,
randomPosition: Math.ceil(getRandomArbitrary(-50, 50)),
velocity: getRandomvelocity(1,2)/2,
position: 0,
colision: 0,
index: 6
}
const InSpaceShipeModel8 = {
  spaceShipe: inSpaceShipe(0x11dfff,0x00ff00),
  iscColision: false,
  randomPosition: Math.ceil(getRandomArbitrary(-50, 50)),
  velocity: getRandomvelocity(1,2)/2,
  position: 0,
  colision: 0,
  index: 7
}
 const InSpaceShipe = [
     InSpaceShipeModel1,
     InSpaceShipeModel2,
     InSpaceShipeModel3,
     InSpaceShipeModel4,
     InSpaceShipeModel5,
     InSpaceShipeModel6,
     InSpaceShipeModel7,
     InSpaceShipeModel8
 ]
 
 InSpaceShipe[0].spaceShipe.position.set(0,0,-15)
 InSpaceShipe[1].spaceShipe.position.set(20,0,-15)
 InSpaceShipe[2].spaceShipe.position.set(40,0,-15)
 InSpaceShipe[3].spaceShipe.position.set(50,0,-15)
 InSpaceShipe[4].spaceShipe.position.set(-10,0,-15)
 InSpaceShipe[5].spaceShipe.position.set(-20,0,-15)
 InSpaceShipe[6].spaceShipe.position.set(-30,0,-15)
 InSpaceShipe[7].spaceShipe.position.set(10,0,-15)
 
 scene.remove(InSpaceShipe[0].spaceShipe)
 //AS PAREDES
//  const BoxLeft = box(1,5,30,1,1,1,0x077777)
//  BoxLeft.position.set(-100.00,0.00,0.00)
//  BoxLeft.scale.set(1.00,2.00,2.00)

//  const BoxRight = box(1,5,30,1,1,1,0x077777)
//  BoxRight.position.set(100.00,0.00,0.00)
//  BoxRight.scale.set(1.00,2.00,2.00)

//  const BoxFront = box(1,5,30,1,1,1,0x066666)
//  BoxFront.rotation.set(0.00,80.111,0.00)
//  BoxFront.position.set(0.00,0.00,-30.00)
//  BoxFront.scale.set(2.00,2.00,6.7)

//  const BoxBase = box(1,5,30,1,7,1,0x0bbbbb)
//  BoxBase.position.set(0.00,-5.00,0.00)
//  BoxBase.scale.set(200.00,0.00,2.00)
//  BoxBase.rotation.set(210.48,0.00,0.00)
var Pontuacao = 1;
var paredeEsquerdaGeometry = new THREE.BoxGeometry(1, 30, 60);

const texturaParedeEsquerda = new THREE.TextureLoader().load("./images/Mona_Lisa.jpg")
// var paredeEsquerdaMaterial = new THREE.MeshLambertMaterial({
//   color: '#fff', emissive: color,
//   map: texturaParedeEsquerda,

// })
var paredeEsquerdaMaterial = new THREE.MeshBasicMaterial({ map: texturaParedeEsquerda, wireframe: false });
const BoxLeft = new THREE.Mesh(paredeEsquerdaGeometry, paredeEsquerdaMaterial);
BoxLeft.position.set(-50.00, 10.00, 0.00)

var paredeDireitaGeometry = new THREE.BoxGeometry(1, 30, 60);

const texturaParedeDireita = new THREE.TextureLoader().load("./images/o_grito.jpg")
var paredeDireitaMaterial = new THREE.MeshBasicMaterial({ map: texturaParedeDireita, wireframe: false });
const BoxRight = new THREE.Mesh(paredeDireitaGeometry, paredeDireitaMaterial);
BoxRight.position.set(50.00, 10.00, 0.00)

// const BoxRight = box(1, 5, 30, 1, 1, 1, 0x077777)
// BoxRight.position.set(50.00, 0.00, 0.00)
// BoxRight.scale.set(1.00, 2.00, 2.00)

const BoxFront = box(1, 5, 15, 1, 1, 1, 0x066666)
BoxFront.rotation.set(0.00, 80.111, 0.00)
BoxFront.position.set(0.00, 0.00, -30.00)
BoxFront.scale.set(2.00, 2.00, 6.7)


var chaoGeometry = new THREE.BoxGeometry(100, 1, 60);
const texturaChao = new THREE.TextureLoader().load("./images/chao2.jpg")
var chaoMaterial = new THREE.MeshBasicMaterial({ map: texturaChao, wireframe: false });
const chao = new THREE.Mesh(chaoGeometry, chaoMaterial);
chao.position.set(0.00, -5.00, 0.00)

 var velocityShpere1 = 1, velocityShpere2=0;
 var SphereFirtBangShot = []
 

scene.add(BoxLeft)
scene.add(BoxRight)
scene.add(BoxFront)
scene.add(chao)
  

//LIGHTS
// const light = new THREE.PointLight(0xffffff, 4.0, 3000)
// light.position.set(0, 200, 0)
// light.target = MainSpaceShip
// light.castShadow = true;
// //light.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(100, 1,500,1000));
// light.shadow.bias = 0.0001;
// light.shadow.mapSize.width = 2048 * 2;
// light.shadow.mapSize.height = 2048 * 2;
// scene.add(light)
const light2 = new THREE.DirectionalLight( 0xFFFFFF, 1000 );
 light2.position.set( 150, 100, 190 );
 light2.castShadow = true;
//const helper = new THREE.DirectionalLightHelper( light2, 10 );
 const helper = new THREE.CameraHelper( light2.shadow.camera );
 //scene.add( helper );
 //scene.add(light2)
var directionalLight = false;


 //Set up shadow properties for the light
light2.shadow.mapSize.width = 512; // default
light2.shadow.mapSize.height = 512; // default
light2.shadow.camera.near = 0.5; // default
light2.shadow.camera.far = 500; // default

//  const light3 = new THREE.SpotLight(0xfff333, 4.0, 1000)
//  light3.position.set(0, 200, 0)
//  light3.target = BoxBase
//  BoxBase.castShadow = true;
//  BoxBase.receiveShadow = true;
//  scene.add(light3)

//  const light4 = new THREE.AmbientLight( 0xFFFFFF, 0.5);
//  scene.add(light4)
const GeometricHolofote1 = holofotes()
GeometricHolofote1.position.set(150, 50, 0);
GeometricHolofote1.rotation.set(0.00,0.0,-170.40)
scene.add(GeometricHolofote1)

const GeometricHolofote2 = holofotes()
GeometricHolofote2.position.set(-150, 50, 0);
GeometricHolofote2.rotation.set(0.00,0.0,170.40)
scene.add(GeometricHolofote2)

const GeometricHolofote3 = holofotes()
GeometricHolofote3.position.set(0, 50, 100);
GeometricHolofote3.rotation.set(0.00,1.50,170.40)
scene.add(GeometricHolofote3)

const GeometricHolofote4 = holofotes()
GeometricHolofote4.position.set(0, 50, -100);
GeometricHolofote4.rotation.set(0.00,-1.50,170.40)
scene.add(GeometricHolofote4)


var iSpotLight1 = false;
var spotLight1 = holofoteLight()
spotLight1.position.set(80, 50, 0);
spotLight1.rotation.set(0.00,0.0,-170.00)

var iSpotLight2 = false;
var spotLight2 = holofoteLight()
spotLight2.position.set(-80, 50, 0);
spotLight2.rotation.set(0.00,0.0, 170.00)

var iSpotLight3 = false;
var spotLight3 = holofoteLight()
spotLight3.position.set(0, 60, 50);
spotLight3.rotation.set(-100.10,0.0, 0)

var iSpotLight4 = false;
var spotLight4 = holofoteLight()
spotLight4.position.set(0, 60, -50);
spotLight4.rotation.set(100.10,0.0, 0)

//spotLight.target= meshLight;
var isPontLight1 = false;
var pointLight1 = POintLight()
pointLight1.position.set(0, 30, 40);

var isPontLight2 = false;
var pointLight2 = POintLight()
pointLight2.position.set(0, 10, -22);





 function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 function getRandomvelocity(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 
// var randomNumber = Math.ceil(getRandomArbitrary(-40, 40))
// var randomNumber2 = Math.ceil(getRandomArbitrary(-40, 40))
// var randomNumber3 = Math.ceil(getRandomArbitrary(-40, 40))

function RandomMove1(InSpaceShipe0){
  
  InSpaceShipe0.position = InSpaceShipe0.spaceShipe.position.x;
  if(InSpaceShipe0.position != InSpaceShipe0.randomPosition){
    if(InSpaceShipe0.randomPosition>InSpaceShipe0.position){
      InSpaceShipe0.spaceShipe.position.x += 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position++
    }else{
      InSpaceShipe0.spaceShipe.position.x -= 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position--
    }
  }else{
    InSpaceShipe0.randomPosition = Math.ceil(getRandomArbitrary(-50, 50))
    InSpaceShipe0.position=0;
  }

}
function RandomMove2(InSpaceShipe1){
  
  InSpaceShipe1.position = InSpaceShipe1.spaceShipe.position.x;
  if(InSpaceShipe1.position != InSpaceShipe1.randomPosition){
    if(InSpaceShipe1.randomPosition>InSpaceShipe1.position){
      InSpaceShipe1.spaceShipe.position.x += 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe1.position++
    }else{
      InSpaceShipe1.spaceShipe.position.x -= 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe1.position--
    }
  }else{
    InSpaceShipe1.randomPosition = Math.ceil(getRandomArbitrary(-50, 50))
    InSpaceShipe1.position=0;
  }

}
function RandomMove3(InSpaceShipe2){
  
  InSpaceShipe2.position = InSpaceShipe2.spaceShipe.position.x;
  if(InSpaceShipe2.position != InSpaceShipe2.randomPosition){
    if(InSpaceShipe2.randomPosition>InSpaceShipe2.position){
      InSpaceShipe2.spaceShipe.position.x += 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe2.position++
    }else{
      InSpaceShipe2.spaceShipe.position.x -= 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe2.position--
    }
  }else{
    InSpaceShipe2.randomPosition = Math.ceil(getRandomArbitrary(-50, 50))
    InSpaceShipe2.position=0;
  }

}
function RandomMove4(InSpaceShipe0){
  
  InSpaceShipe0.position = InSpaceShipe0.spaceShipe.position.x;
  if(InSpaceShipe0.position != InSpaceShipe0.randomPosition){
    if(InSpaceShipe0.randomPosition>InSpaceShipe0.position){
      InSpaceShipe0.spaceShipe.position.x += 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position++
    }else{
      InSpaceShipe0.spaceShipe.position.x -= 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position--
    }
  }else{
    InSpaceShipe0.randomPosition = Math.ceil(getRandomArbitrary(-50, 50))
    InSpaceShipe0.position=0;
  }

}
function RandomMove5(InSpaceShipe0){
  
  InSpaceShipe0.position = InSpaceShipe0.spaceShipe.position.x;
  if(InSpaceShipe0.position != InSpaceShipe0.randomPosition){
    if(InSpaceShipe0.randomPosition>InSpaceShipe0.position){
      InSpaceShipe0.spaceShipe.position.x += 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position++
    }else{
      InSpaceShipe0.spaceShipe.position.x -= 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position--
    }
  }else{
    InSpaceShipe0.randomPosition = Math.ceil(getRandomArbitrary(-50, 50))
    InSpaceShipe0.position=0;
  }

}
function RandomMove6(InSpaceShipe0){
  
  InSpaceShipe0.position = InSpaceShipe0.spaceShipe.position.x;
  if(InSpaceShipe0.position != InSpaceShipe0.randomPosition){
    if(InSpaceShipe0.randomPosition>InSpaceShipe0.position){
      InSpaceShipe0.spaceShipe.position.x += 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position++
    }else{
      InSpaceShipe0.spaceShipe.position.x -= 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position--
    }
  }else{
    InSpaceShipe0.randomPosition = Math.ceil(getRandomArbitrary(-50, 50))
    InSpaceShipe0.position=0;
  }

}
function RandomMove7(InSpaceShipe0){
  
  InSpaceShipe0.position = InSpaceShipe0.spaceShipe.position.x;
  if(InSpaceShipe0.position != InSpaceShipe0.randomPosition){
    if(InSpaceShipe0.randomPosition>InSpaceShipe0.position){
      InSpaceShipe0.spaceShipe.position.x += 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position++
    }else{
      InSpaceShipe0.spaceShipe.position.x -= 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position--
    }
  }else{
    InSpaceShipe0.randomPosition = Math.ceil(getRandomArbitrary(-50, 50))
    InSpaceShipe0.position=0;
  }

}
function RandomMove8(InSpaceShipe0){
  
  InSpaceShipe0.position = InSpaceShipe0.spaceShipe.position.x;
  if(InSpaceShipe0.position != InSpaceShipe0.randomPosition){
    if(InSpaceShipe0.randomPosition>InSpaceShipe0.position){
      InSpaceShipe0.spaceShipe.position.x += 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position++
    }else{
      InSpaceShipe0.spaceShipe.position.x -= 0.5 //getRandomvelocity(1,2)/2
      InSpaceShipe0.position--
    }
  }else{
    InSpaceShipe0.randomPosition = Math.ceil(getRandomArbitrary(-50, 50))
    InSpaceShipe0.position=0;
  }

}

function detectCollisions(){
  let obj1;
  let obj2;

  // Start checking for collisions
  for (let i = 0; i < InSpaceShipe.length; i++)
  {
      obj1 = InSpaceShipe[i].spaceShipe;
      let box01 = new THREE.Box3().setFromObject(obj1)
      for (let j = i + 1; j < InSpaceShipe.length; j++)
      {
          obj2 = InSpaceShipe[j].spaceShipe;
          let box02 = new THREE.Box3().setFromObject(obj2)

          // Compare object1 with object2
          // if (rectIntersect(box01.max.x, box01.max.y, box01.min.x, box01.min.y, box02.max.x, box02.max.y, box02.min.x, box02.min.y)){
          //  InSpaceShipe[i].randomPosition = Math.ceil(getRandomArbitrary(1, 90))
          //  InSpaceShipe[i].position = 0
            
          //   InSpaceShipe[j].randomPosition = -1 * Math.ceil(getRandomArbitrary(1, 90))
          //   InSpaceShipe[j].position = 0
          //   return true
          //  }
          if(!InSpaceShipe[i].isColision || !InSpaceShipe[j].isColision)
           if(box01.max.x > box02.min.x && box01.min.x < box02.max.x && box01.max.y > box02.min.y && box01.min.y < box02.max.y && box01.max.z > box02.min.z && box01.min.z < box02.max.z){
              InSpaceShipe[i].randomPosition = Math.ceil(getRandomArbitrary(1, 45))
              InSpaceShipe[i].position = 0
            
               InSpaceShipe[j].randomPosition = -1 * Math.ceil(getRandomArbitrary(1, 45))
               InSpaceShipe[j].position = 0
               return true
           }
         
          
      }
  }
}


function detectCollisions2(SphereFirtBangShot){
  // Start checking for collisions
  // for (let i = 0; i < InSpaceShipe.length; i++)
  // {
  //     for (let j = i + 1; j < InSpaceShipe.length; j++)
  //     {
  //         // Compare object1 with object2
  //         if ((Math.ceil(InSpaceShipe[j].spaceShipe.position.x) === Math.ceil(SphereFirtBangShot.position.x )) && (Math.ceil(InSpaceShipe[j].spaceShipe.position.z) === Math.ceil(SphereFirtBangShot.position.z ))){
  //           return j
  //          }
          
  //     }
  // }

  let obj1;
  let obj2;

  // Start checking for collisions

      obj1 = SphereFirtBangShot;
      let box01 = new THREE.Box3().setFromObject(obj1)
      for (let j = 0; j < InSpaceShipe.length; j++)
      {
          obj2 = InSpaceShipe[j].spaceShipe;
          let box02 = new THREE.Box3().setFromObject(obj2)

          // Compare object1 with object2
          // if (rectIntersect(box01.max.x, box01.max.y, box01.min.x, box01.min.y, box02.max.x, box02.max.y, box02.min.x, box02.min.y)){
          //  InSpaceShipe[i].randomPosition = Math.ceil(getRandomArbitrary(1, 90))
          //  InSpaceShipe[i].position = 0
            
          //   InSpaceShipe[j].randomPosition = -1 * Math.ceil(getRandomArbitrary(1, 90))
          //   InSpaceShipe[j].position = 0
          //   return true
          //  }
      if(!InSpaceShipe[j].isColision)
           if(box01.max.x > box02.min.x && box01.min.x < box02.max.x && box01.max.y > box02.min.y && box01.min.y < box02.max.y && box01.max.z > box02.min.z && box01.min.z < box02.max.z){
              // InSpaceShipe[i].randomPosition = Math.ceil(getRandomArbitrary(1, 90))
              // InSpaceShipe[i].position = 0
            
              //  InSpaceShipe[j].randomPosition = -1 * Math.ceil(getRandomArbitrary(1, 90))
              //  InSpaceShipe[j].position = 0
              //alert('colidiu')
              InSpaceShipe[j].colision++;
              return InSpaceShipe[j].index
           }
         
          
      }

}

function moveBomb() {
 
  for(let i = 0; i < SphereFirtBangShot.length; i++){
    
      if(Math.round(SphereFirtBangShot[i].velocityShot) == -0){
       SphereFirtBangShot[i].friction = 0
       SphereFirtBangShot[i].velocityShot = 0

       SphereFirtBangShot[i].velocityShot2 = 0;
      SphereFirtBangShot[i].friction2 = 0
      SphereFirtBangShot[i].life = true;
      scene.remove(SphereFirtBangShot[i].shot)

     }
     

    SphereFirtBangShot[i].velocityShot -= SphereFirtBangShot[i].friction;
    SphereFirtBangShot[i].velocityShot2 -= SphereFirtBangShot[i].friction2;

    SphereFirtBangShot[i].shot.position.z -= SphereFirtBangShot[i].velocityShot;
    SphereFirtBangShot[i].shot.position.x += SphereFirtBangShot[i].velocityShot2;

    //console.log(SphereFirtBangShot[i].velocityShot)
    if(!SphereFirtBangShot[i].life)
    if(detectCollisions2(SphereFirtBangShot[i].shot)){
      //InSpaceShipe[detectCollisions2()].colision++
      if(InSpaceShipe[detectCollisions2(SphereFirtBangShot[i].shot)].colision>30){
         scene.remove(InSpaceShipe[detectCollisions2(SphereFirtBangShot[i].shot)].spaceShipe)
         Pontuacao++
         InSpaceShipe[detectCollisions2(SphereFirtBangShot[i].shot)].isColision = true;
        render()
      }
    }

   if(Math.ceil(BoxFront.position.z) === Math.ceil(SphereFirtBangShot[i].shot.position.z)){
       SphereFirtBangShot[i].velocityShot *= -1; 
       SphereFirtBangShot[i].friction = -0.012
   }
    
   if(Math.ceil(BoxLeft.position.x) === Math.ceil(SphereFirtBangShot[i].shot.position.x) || Math.ceil(BoxRight.position.x) === Math.ceil(SphereFirtBangShot[i].shot.position.x)){
      SphereFirtBangShot[i].velocityShot2 *= -1;
      SphereFirtBangShot[i].friction2 = -0.012
   }

   console.log(Pontuacao+ "P"+InSpaceShipe.length)
   if(Pontuacao === InSpaceShipe.length){
    const Banner = document.querySelector('.end');
    Banner.style.display = 'flex';

    const EndBtn = document.querySelector('.endbtn')
    EndBtn.addEventListener('click',recomecar)
   }
    
  }
  
}
function recomecar(){
  for(let i=1; i<InSpaceShipe.length;i++){
    InSpaceShipe[i].isColision = false;
    scene.add(InSpaceShipe[i].spaceShipe)
  }
  
  InSpaceShipe[0].isColision = false;
  Pontuacao=1;
  const Banner = document.querySelector('div.end');
  Banner.style.display = 'none';
}
function colisionBomb(SphereFirtBangShot){
  // for(let i = 0; i < SphereFirtBangShot.length; i++){

  //   if(Math.ceil(BoxFront.position.z) === Math.ceil(SphereFirtBangShot.position.z)){
  //     velocityShpere1 *= -1;
  //     SphereFirtBangShot[i].position.z -= velocityShpere1;
  //   }
    
  //   if(Math.ceil(BoxLeft.position.x) === Math.ceil(SphereFirtBangShot[i].position.x) || Math.ceil(BoxRight.position.x) === Math.ceil(SphereFirtBangShot[i].position.x)){
  //      velocityShpere2 *= -1;
  //      SphereFirtBangShot[i].position.x += velocityShpere2;
  //   }

  // }
}
var velocRotacao = .02;
var update = function(){
     window.addEventListener('resize', onWindowResize, true)
     window.addEventListener('keydown', handleKeyDown)
     window.addEventListener('keyup',handleKeyUp)
     checkGameKeys()
    
     if(InSpaceShipe[0]) RandomMove1(InSpaceShipe[0])
     if(InSpaceShipe[1]) RandomMove2(InSpaceShipe[1])
     if(InSpaceShipe[2]) RandomMove3(InSpaceShipe[2])
     if(InSpaceShipe[3]) RandomMove4(InSpaceShipe[3])
     if(InSpaceShipe[4]) RandomMove5(InSpaceShipe[4])
     if(InSpaceShipe[5]) RandomMove6(InSpaceShipe[5])
     if(InSpaceShipe[6]) RandomMove7(InSpaceShipe[6])
     if(InSpaceShipe[7]) RandomMove8(InSpaceShipe[7])
     
     detectCollisions()
     //camera5.rotation.x +=0.08

    //  camera5.position.x +=0.008
    //  camera5.position.y =-0.008
    //  camera5.position.z = camera5.rotation.y + 10
     
    //  camera5.rotation.y -=0.008
     var x = camera5.position.x,
     y = camera5.position.y,
     z = camera5.position.z;
 
  
    camera5.position.x = x * Math.cos(velocRotacao) + z * Math.sin(velocRotacao);
    camera5.position.z = z * Math.cos(velocRotacao) - x * Math.sin(velocRotacao);
  
    camera5.lookAt(scene.position);
     //console.log(camera5.rotation.y)

    // camera5.rotation.z8 +=0.08


    // SphereFirtBangShot[SphereFirtBangShot.length - 1].position.z -= velocityShpere1;
    // SphereFirtBangShot[SphereFirtBangShot.length - 1].position.x += velocityShpere2;
    moveBomb()
    // if(Math.ceil(BoxFront.position.z) === Math.ceil(SphereFirtBangShot.position.z)){
    //   velocityShpere1 *= -1
    // }
    
    // if(Math.ceil(BoxLeft.position.x) === Math.ceil(SphereFirtBangShot.position.x) || Math.ceil(BoxRight.position.x) === Math.ceil(SphereFirtBangShot.position.x)){
    //   velocityShpere2 *= -1
    // }

   
    
    
    }
   var render = function(){
    renderer1.render(scene, camera1)
    renderer2.render(scene, camera2)
    renderer3.render(scene, camera3)
    renderer4.render(scene, camera4)
    renderer5.render(scene, camera5)
    renderer6.render(scene, camera6)
    renderer7.render(scene, camera7)
   }
   var Gameloop = function(){
     
     requestAnimationFrame (Gameloop)
     update()
     render()
   }
   Gameloop()


function box (width,height,depth,widthSegments,heightSegments,depthSegments, color,isAllMaterial){
  const geometry = new THREE.BoxGeometry(width,height,depth,widthSegments,heightSegments,depthSegments)
  
  const material = new THREE.MeshBasicMaterial({
    color: color,
    wireframe: false,
  })
  
  const material2 = new THREE.MeshLambertMaterial({
    color: '#fff', emissive: color
  
  })
  const material3 = new THREE.MeshPhongMaterial({
    color: color, shininess: 100
  })

  const allMaterial = [material, material2, material3]

  geometry.groups.forEach(function (face, i) {
    face.materialIndex = Math.floor(i % allMaterial.length);
  });

  const cube = new THREE.Mesh(geometry, allMaterial)
  cube.castShadow = true; //default is false
  cube.receiveShadow = false; //default
  //scene.add(cube)
  return cube
}
function POintLight(){
  var pointLight = new THREE.PointLight('white');
  pointLight.add(new THREE.Mesh( 
    new THREE.SphereGeometry(1, 10, 10), 
    new THREE.MeshBasicMaterial({
    color: 'white'
    })));
  return pointLight;
}
function holofotes(){
  const GeometricHolofote = new THREE.Group();

  const meshLight = cylinder( 0, 15, 50, 20, 4,0xfff000,true)
  meshLight.castShadow = true;
  meshLight.position.set(0, 38, 0);
  
  const esfera = sphere(17,128,64,6,6,6,6, 0xfff000);
  esfera.position.set(0,0,0);

  GeometricHolofote.add(esfera);
  GeometricHolofote.add(meshLight);
  scene.add(GeometricHolofote)
  return GeometricHolofote
}
function holofoteLight(){
 const spotLight = new THREE.SpotLight(0xffffff,4.5,150);
  spotLight.castShadow = true;
  spotLight.penumbra = .5;
  spotLight.angle = Math.PI / 12;
  const spotLightHelper = new THREE.SpotLightHelper(spotLight);
  spotLight.add(spotLightHelper);
  //scene.add(spotLight);
  scene.add(spotLight.target);
  return spotLight;
}
function plane(width,height,widthSeg,heightSeg,color){
  const geometry = new THREE.PlaneGeometry( width, height, widthSeg, heightSeg);
 // const material = new THREE.MeshBasicMaterial( {color: color, side: THREE.DoubleSide} );
  const material = new THREE.MeshBasicMaterial({
    color: color,
    side: THREE.DoubleSide,
  })
  
  const material2 = new THREE.MeshLambertMaterial({
    color: '#fff', emissive: color
  
  })
  const allMaterial = [material2, material]
  
  geometry.groups.forEach(function (face, i) {
    face.materialIndex = Math.floor(i % allMaterial.length);
  });
  
  const plane = new THREE.Mesh( geometry, material2  );
  plane.castShadow = false; //default is false
  plane.receiveShadow = true; //default
  //scene.add( plane )
  return plane
}
function cylinder(radiosTop, radioBottom, height,radialSeg,heightSeg,Color,isAllMaterial){
const geometry = new THREE.CylinderGeometry(radiosTop, radioBottom, height, radialSeg, heightSeg);

if(isAllMaterial){
  
  const material = new THREE.MeshBasicMaterial({
    color: Color,
    wireframe: false,
  })
  
  const material2 = new THREE.MeshLambertMaterial({
    color: '#Fff', emissive: Color
  
  })
  const material3 = new THREE.MeshPhongMaterial({
    color: Color, shininess: 100
  })
  
  const allMaterial = [material2, material, material3]
  
  geometry.groups.forEach(function (face, i) {
    face.materialIndex = Math.floor(i % allMaterial.length);
  });

  const cylinder = new THREE.Mesh( geometry, allMaterial );
  cylinder.castShadow = true; //default is false
  cylinder.receiveShadow = false; //default
  
  return cylinder
 }else{
 
  const material = new THREE.MeshBasicMaterial({
    color: Color,
    wireframe: false,
  })
  
  const material2 = new THREE.MeshLambertMaterial({
    color: '#Fff', emissive: Color
  
  })
  const allMaterial = [material, material2]
  
  geometry.groups.forEach(function (face, i) {
    face.materialIndex = Math.floor(i % allMaterial.length);
  });

  const cylinder = new THREE.Mesh( geometry, allMaterial );
  cylinder.castShadow = true; //default is false
  cylinder.receiveShadow = false; //default

  return cylinder
 }

//scene.add( cylinder );

}

function sphere(radius,widthSegments,heightSegments,phiStart,phiLength,thetaStart,thetaLength, Color){
  const geometry = new THREE.SphereGeometry(radius,widthSegments,heightSegments,phiStart,phiLength,thetaStart,thetaLength);
  //const material = new THREE.MeshBasicMaterial( { color: Color } );
  const material = new THREE.MeshBasicMaterial({
    color: Color,
    wireframe: false,
  })
  
  const material2 = new THREE.MeshLambertMaterial({
    color: '#fff', emissive: Color
  
  })
  const material3 = new THREE.MeshPhongMaterial({
    color: Color, shininess: 100
  })
  
  const allMaterial = [material, material2, material3]
  
  geometry.groups.forEach(function (face, i) {
    face.materialIndex = Math.floor(i % allMaterial.length);
  });

  const sphere = new THREE.Mesh( geometry, material2 );
  //scene.add( sphere )
  return sphere
}
function circle(radius,segments,thetaStart,thetaLength,color){
  const geometry = new THREE.CircleGeometry(radius,segments,thetaStart,thetaLength);
  //const material = new THREE.MeshBasicMaterial( { color: color} );
  
  const material = new THREE.MeshBasicMaterial({
    color: color,
    wireframe: false,
  })
  
  const material2 = new THREE.MeshLambertMaterial({
    color: '#fff', emissive: color
  
  })
  const material3 = new THREE.MeshPhongMaterial({
    color: color, shininess: 100
  })
  
  const allMaterial = [material, material2, material3]
  
  geometry.groups.forEach(function (face, i) {
    face.materialIndex = Math.floor(i % allMaterial.length);
  });

  const circle = new THREE.Mesh( geometry, material2);
  //scene.add( circle );
  return circle
}

function onWindowResize() {
    camera1.aspect = window.innerWidth / window.innerHeight
    camera1.updateProjectionMatrix()
    renderer1.setSize(window.innerWidth, window.innerHeight)
    render()
}

function mainSpaceShip(){
  const Cylinder = cylinder(1.0,1.10,5.68,59,129,0xaaa000,false)
  Cylinder.rotation.set(-90.00,0.00,0.00)
  Cylinder.position.set(0,1.850,0)
 
  const Plane1 = plane(4.51,1.55,1,1,0x333333) 
  Plane1.position.set(-0.700,1.850,0.310)
  Plane1.rotation.set(92.40,0.20,-108.70)
 
  const Plane2 = plane(4.0,1.55,1,1,0x333333) 
  Plane2.position.set(0.700,1.850,0.310)
  Plane2.rotation.set(92.40,-0.20,108.70)
 
  const TinyCylinder1 = cylinder(0.60,0.00,2.72,48,1,0x444444,false) 
  TinyCylinder1.position.set(-0.720,2.95,1.18)
  TinyCylinder1.rotation.set(92.40,-0.80,-91.10)
  
  const TinyCylinder2 = cylinder(0.60,0.00,2.72,48,1,0x444444,false) 
  TinyCylinder2.position.set(0.720,2.95,1.18)
  TinyCylinder2.rotation.set(92.40,-0.80,-91.10)
 
 const FrontCylinder = cylinder(1,0,2,64,1.3,0x333333,false)
 FrontCylinder.position.set(0.000,0.20,-3.380)
 FrontCylinder.rotation.set(-80.55,0.00,0.00)

 const BagShotCylinder1 = cylinder(0.19,0.70,4.72,48,1,0x444444,false) 
 BagShotCylinder1.position.set(0.00,2.95,0)
 BagShotCylinder1.rotation.set(92.29,0.00,91.10)
  
 const BagShotCylinder2 = cylinder(0.0,0.40,1.72,48,1,0x3333339,false) 
 BagShotCylinder2.position.set(0.90,1.2,-1.5)
 BagShotCylinder2.rotation.set(92.29,0.00,-91.190)

 const BagShotCylinder3 = cylinder(0.0,0.40,1.72,48,1,0x3333339,false) 
 BagShotCylinder3.position.set(-0.90,1.2,-1.5)
 BagShotCylinder3.rotation.set(92.29,0.00,-91.190)
 
 const MainSpaceShipe = new THREE.Group();
 MainSpaceShipe.add(Cylinder)
 MainSpaceShipe.add(Plane1)
 MainSpaceShipe.add(Plane2)
 MainSpaceShipe.add(TinyCylinder1)
 MainSpaceShipe.add(TinyCylinder2)
 MainSpaceShipe.add(FrontCylinder)
 MainSpaceShipe.add(BagShotCylinder1)
 MainSpaceShipe.add(BagShotCylinder2)
 MainSpaceShipe.add(BagShotCylinder3)
 scene.add(MainSpaceShipe)
 return MainSpaceShipe   
} 
function inSpaceShipe(PrimaryColor,SecondColor){
  const Box = box(1.00,1.00,1.00,1,1,1,SecondColor)
  Box.scale.set(1.020,0.940,5.590)
  Box.position.set(0.000,0.000,0.000)
 
  const Cylinder = cylinder(1.00,1.00,1.00,8,1,PrimaryColor,true)
  Cylinder.position.set(0.000,0.000,0.000)
  Cylinder.rotation.set(0.00,-52.51,0.00)
 
  const Box1 = box(1.91,0.64,0.90,1,1,1,SecondColor)
  Box1.scale.set(1.000,1.000,1.000)
  Box1.position.set(0.000,0.000,0.000)
  Box1.rotation.set(0.00,0.00,309.45)
 
  const TyneCylinder1 = cylinder(0.34,0.16,3.04,23,1,PrimaryColor,true)
  TyneCylinder1.position.set(-0.600,0.00,-2.140)
  TyneCylinder1.rotation.set(-89.56,0.00,0.00)
  TyneCylinder1.scale.set(1.00,1.00,1.00)
 
  const TyneCylinder2 = cylinder(0.34,0.16,3.04,23,1,PrimaryColor,true)
  TyneCylinder2.position.set(0.600,0.00,-2.140)
  TyneCylinder2.rotation.set(-89.56,0.00,0.00)
  TyneCylinder2.scale.set(1.00,1.00,1.00)
 
  const Circle = circle(1.00,8,0.00,360,PrimaryColor)
  Circle.position.set(1.190,0.180,-0.030)
  Circle.rotation.set(-83.20,0.00,0.00)
  Circle.scale.set(0.920,2.800,1.00)
 
  const Circle1 = circle(1.00,8,0.00,360,PrimaryColor)
  Circle1.position.set(-1.190,0.180,-0.030)
  Circle1.rotation.set(-83.20,0.00,0.00)
  Circle1.scale.set(0.920,2.800,1.00)

  const InSpaceShipe = new THREE.Group();
  InSpaceShipe.add(Box)
  InSpaceShipe.add(Cylinder)
  InSpaceShipe.add(Box1)
  InSpaceShipe.add(TyneCylinder1)
  InSpaceShipe.add(TyneCylinder2)
  InSpaceShipe.add(Circle)
  InSpaceShipe.add(Circle1)
  
  scene.add(InSpaceShipe)
  return InSpaceShipe
}
let colorBomb = 0x0fff00;
function Bomb(){

  const SphereShot = {
    shot:sphere(1,64,32,6,6,6,6, colorBomb),
    velocityShot: 2.5,
    velocityShot2: velocityShpere2,
    friction: 0.05,
    friction2: 0,
    life: false,
  }

 // const  SphereFirtBangShot = sphere(1,64,32,6,6,6,6,colorBomb);
  SphereShot.shot.position.set(MainSpaceShip.position.x,MainSpaceShip.position.y,MainSpaceShip.position.z)
  scene.add(SphereShot.shot)
  return SphereShot;
}

function handleKeyDown(e) {
  // aceleration = aceleration + 0.3
   if(!keyMap.includes(e.keyCode)){
    keyMap.push(e.keyCode);
   }
   
   if(e.keyCode == 49){
    // const child = document.querySelector('body > canvas')
    // document.body.removeChild(child)
    // document.body.appendChild(renderer2.domElement)
    // controls =  new OrbitControls( camera2, renderer2.domElement );

    if(iSpotLight1){
      scene.remove(spotLight1);
      iSpotLight1 = false;
    }else{
      scene.add(spotLight1)
      iSpotLight1 = true;
    }
  }
  if(e.keyCode == 80){

    if(isPontLight1){
      scene.remove(pointLight1);
      isPontLight1 = false;
    }else{
      scene.add(pointLight1)
      isPontLight1 = true;
    }
  }

  if(e.keyCode == 68){

    if(isPontLight2){
      scene.remove(pointLight2);
      isPontLight2 = false;
    }else{
      scene.add(pointLight2)
      isPontLight2 = true;
    }
  }

  if(e.keyCode == 50){
    // const child = document.querySelector('body > canvas')
    // document.body.removeChild(child)
    // document.body.appendChild(renderer4.domElement)
    // controls =  new OrbitControls( camera4, renderer4.domElement );
    
    if(iSpotLight2){
      scene.remove(spotLight2);
      iSpotLight2 = false;
    }else{
      scene.add(spotLight2)
      iSpotLight2 = true;
    }
  }
  if(e.keyCode == 51){
    // const child = document.querySelector('body > canvas')
    // document.body.removeChild(child)
    // document.body.appendChild(renderer3.domElement)
    // controls =  new OrbitControls( camera3, renderer3.domElement );

    if(iSpotLight3){
      scene.remove(spotLight3);
      iSpotLight3 = false;
    }else{
      scene.add(spotLight3)
      iSpotLight3 = true;
    }
  }
  if (e.keyCode == 53) {
    const child = document.querySelector('body > canvas')
    document.body.removeChild(child)
    document.body.appendChild(renderer6.domElement)
    controls = new OrbitControls(camera6, renderer6.domElement);
  }
  if (e.keyCode == 54) {
    const child = document.querySelector('body > canvas')
    document.body.removeChild(child)
    document.body.appendChild(renderer7.domElement)
    controls = new OrbitControls(camera7, renderer7.domElement);
  }

  if(e.keyCode == 57){
    const child = document.querySelector('body > canvas')
    document.body.removeChild(child)
    document.body.appendChild(renderer1.domElement)
    controls =  new OrbitControls( camera1, renderer1.domElement );
  }
  if(e.keyCode == 56){
    const child = document.querySelector('body > canvas')
    document.body.removeChild(child)
    document.body.appendChild(renderer5.domElement)
    controls =  new OrbitControls( camera5, renderer5.domElement );
  }

  if(e.keyCode == 52){
    if(iSpotLight4){
      scene.remove(spotLight4);
      iSpotLight4 = false;
    }else{
      scene.add(spotLight4)
      iSpotLight4 = true;
    }
  }
  if(e.keyCode==78){
    scene.traverse(function (node){
      if(node instanceof THREE.Mesh){
        node.material.wireframe = !node.material.wireframe;
      }
    });
  }
  if(e.keyCode == 87){
    velocityShpere2 = 0;
    colorBomb = 0x0fff00;

    if(directionalLight){
      scene.remove(light2)
      directionalLight = false;
    }else{
      scene.add(light2)
      directionalLight = true;
    }
  }
  if(e.keyCode == 81){
    velocityShpere2 = -0.2;
    colorBomb= 0x0000ff;

    if(modeloSombra){
      renderer1.shadowMap.type = THREE.PCFSoftShadowMap
      modeloSombra= false;
      render()
    }else{
      renderer1.shadowMap.type = THREE.PCFShadowMap
      modeloSombra= true;
      render()
    }

  }
  if(e.keyCode == 69){
    velocityShpere2 = 0.2;
    colorBomb= 0xff0000;
  }
  
   if(e.keyCode == 32){
     SphereFirtBangShot.push(Bomb());
     //SphereFirtBangShot.position.set(MainSpaceShip.position.x,MainSpaceShip.position.y,MainSpaceShip.position.z)
  }

}
function handleKeyUp(e) {
  if(keyMap.includes(e.keyCode)){
    keyMap.splice(keyMap.indexOf(e.keyCode), 1);
  } 
  //aceleration = 0
}

function key(x){
  return (keyMap.includes(x));
}

function checkGameKeys(){ 
  if (key(38)){
    //Arrow
    if(Math.ceil(MainSpaceShip.position.z) === 11){
      //* aceleration;
    }else{
      MainSpaceShip.position.z += -0.4 
      camera1.position.z -= positionMainCamara;
    }
  }  
  
  if (key(83) || key(40)){
    //S
    if(Math.ceil(MainSpaceShip.position.z)===25){
      
    }else{
      
      MainSpaceShip.position.z += 0.4 //* aceleration;
      camera1.position.z += positionMainCamara;
    }
  }  

  if (key(68) || key(39)){
    //D
    //MainSpaceShip.position.x +=0.4 //* aceleration;   
    if(Math.ceil(MainSpaceShip.position.x)=== 35){ 
    }else{
      MainSpaceShip.position.x += 0.4 //* aceleration;
      camera1.position.x += positionMainCamara;
    }
  } 

  if (key(65) || key(37)){
   //MainSpaceShip.position.x -= 0.4 //* aceleration;
    if(Math.ceil(MainSpaceShip.position.x)=== -35){ 
    }else{
      MainSpaceShip.position.x -= 0.4 //* aceleration;
      camera1.position.x -= positionMainCamara;
    }
  }  //A
}

