function setup() {
  createCanvas(500, 500, WEBGL);
  cam = createCamera();
  cam.setPosition(0, 0, 0);
}

function draw() {
  background(0);
  orbitControl();
  
  let x = mouseX - height / 2;
  let y = mouseY - width / 2;
  
  ambientLight(50);
  directionalLight(255, 0, 0, 0.25, 0.25, 0);
  spotLight(0, 255, 0, 50, 0, 50, 0, 0, -1);
  pointLight(0, 0, 255, x, y, 250);
  
  push();
  translate(0,0,300)
  rotateY(frameCount/80)
  rotateX(frameCount/80)
  rotateZ(frameCount/80)
  //fill(255, 0, 0)
  noStroke();
  specularMaterial(250);
  sphere(50)
  // ellipse(0,0,80)
  pop();
  
  push();
  translate(0,0,300)
  rotateY(frameCount/60)
  rotateX(frameCount/60)
  rotateZ(frameCount/60)
  //fill(0,0,255)
  noStroke();
  // ellipse(0,0,80)
  specularMaterial(250);
  sphere(50)
  pop();
  
  push();
  translate(0,0,300)
  rotateY(frameCount/30)
  rotateX(frameCount/30)
  //fill(255, 0, 0)
  noStroke();
  // ellipse(0,0,80)
  sphere(50)
  specularMaterial(250);
  pop();
  
  push();
  translate(0,0,300)
  rotateY(frameCount/100)
  rotateX(frameCount/100)
  //fill(0,0,255)
  noStroke();
  specularMaterial(250);
  //ellipse(0,0,80)
  sphere(50)
  pop();
  
  // push();
  // translate(0,0,100)
  // //rotateY(frameCount/100)
  // //rotateX(frameCount/100)
  // rotateZ(frameCount/50)
  // fill(255, 0, 127)
  // //sphere(100)
  // torus(100,50)
  // pop();
  
  push();
  rotateY(frameCount/30)
  rotateX(frameCount/30)
  //rotateZ(frameCount/50)
  //fill(255,0,0)
  specularMaterial(250);
  noStroke()
  translate(140,140,100)  
  sphere(10)
  pop();
  
  push();
  rotateY(frameCount/30)
  rotateX(frameCount/30)
  //rotateZ(frameCount/50)
  //fill(0,0,255)
  specularMaterial(250);
  noStroke()
  translate(-140,-140,-100)
  sphere(10)
  pop();
  
  push();
  rotateY(frameCount/30)
  rotateX(frameCount/30)
  //rotateZ(frameCount/50)
  //fill(0,255,0)
  specularMaterial(250);
  noStroke()
  translate(140,-140,100)
  sphere(10)
  pop();
}