let posX, posY

function setup() {
  posX=width/2
  posY=height/2
  createCanvas(400, 400);
  frameRate(144)
  background(0);
  colorMode(HSB)
}

// function mousePressed(){
//   strokeWeight(1)
//   noFill()
//   //ellipse(mouseX, mouseY, 10)
//   fill(200, 10, 100)
//   rect(mouseX, mouseY, 10)
// }

// function mouseReleased(){
//   strokeWeight(1)
//   fill(200, 10, 100)
//   ellipse(mouseX, mouseY, 10)
// }

function keyPressed(){
  if(key=="b"){
    background(0)
  }
  
}

function draw() {
  //background(220); removing the background here and moving it to the setup function means that a new circle is drawn each time the mouse moves
  if(mouseIsPressed){
    //let d=dist(pmouseX, pmouseY, mouseX, mouseY)
    strokeWeight(10)
    stroke(frameCount%360, 100, 100)
    //line(pmouseX, pmouseY, mouseX, mouseY)
    fill(200, 10, 100)
    //line(pmouseX, pmouseY, mouseX, mouseY)
    //line(width/2, height/2, mouseX, mouseY)
    ellipse(width/2, height/2, mouseX, mouseY)
    posX+=(mouseX-posX)/40
    posY+=(mouseY-posY)/40
    
    
  }
  
}