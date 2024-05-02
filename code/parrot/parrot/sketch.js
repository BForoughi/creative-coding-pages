function preload(){
  pic=loadImage("parrot.png")
}


function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
}

function draw() {
  background(220);
  image(pic,0,0)
  pic.loadPixels()
//   noStroke gets ride of the "pen"
  noStroke()
  let step=5
  for(let j=0; j<pic.height; j+=step){
    for(let i=0; i<pic.width; i+=step){
      let offset=(pic.width*j+i)*4
      let pixelRed=pic.pixels[offset]
      let pixelGreen=pic.pixels[offset+1]
      let pixelBlue=pic.pixels[offset+2]
      let shade=(pixelRed+pixelGreen+pixelBlue)/3
      // fill(pixelRed, pixelGreen, pixelBlue)
      fill(shade*frameCount/100%360,100,100)
      rect(i,j,step*shade/200,step*shade/200)
    }
  }
}