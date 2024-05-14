// this didnt start out as an atom, so go back to the old changes first to see how you got to the atom for the portfolio

function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
  background(1000);
  
  push();
  translate(0,0,300)
  rotateY(frameCount/80)
  rotateX(frameCount/80)
  rotateZ(frameCount/80)
  fill(255, 0, 0)
  noStroke();
  sphere(50)
  // ellipse(0,0,80)
  pop();
  
  push();
  translate(0,0,300)
  rotateY(frameCount/60)
  rotateX(frameCount/60)
  rotateZ(frameCount/60)
  fill(0,0,255)
  noStroke();
  // ellipse(0,0,80)
  sphere(50)
  pop();
  
  push();
  translate(0,0,300)
  rotateY(frameCount/30)
  rotateX(frameCount/30)
  fill(255, 0, 0)
  noStroke();
  // ellipse(0,0,80)
  sphere(50)
  pop();
  
  push();
  translate(0,0,300)
  rotateY(frameCount/100)
  rotateX(frameCount/100)
  fill(0,0,255)
  noStroke();
  //ellipse(0,0,80)
  sphere(50)
  pop();
}