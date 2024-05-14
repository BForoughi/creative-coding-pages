// this didnt start out as an atom, so go back to the old changes first to see how you got to the atom for the portfolio

function setup() {
  createCanvas(700, 700, WEBGL);
}

function draw() {
  background(1000);
  push();
  translate(0,0,100)
  rotateY(frameCount/100)
  rotateX(frameCount/100)
  rotateZ(frameCount/50)
  fill(255, 0, 127)
  ellipse(100,100,100)
  pop();

}