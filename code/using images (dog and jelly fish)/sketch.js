let pic, star
let jelly=[]
let numImages=9
let jellyNum=0

// loads everything in the function before running
function preload(){
  pic=loadImage("dog.png")
  star=loadImage("star.png")
  jelly=loadImage("images/jelly_1.png")
  for(i=0; i<numImages; i++){
    jelly[i]=loadImage("images/jelly_'+i'.png")
  }
}

function setup() {
  createCanvas(1000, 660);
  imageMode(CENTER)
  // background(pic);
  colorMode(HSB)
  
}

function draw() {
  background(50)
//   imagemode center makes the image the center, in this example its the center of the mouse
  imageMode(CENTER)
//mouseX and mouseY allows you to use the mouse. the numbers after is for sizing
//image(star,mouseX,mouseY, 50, 50)
//tint adds colour over the image. %360 allows the program to go around the whole HSB wheel and frameCount*5 is the speed it does it.
  // tint(frameCount*5%360,100,100)
  // image(pic,width/2, height/2)
//filter(POSTERIZE,16)
  image(jelly[jellyNum%numImages],mouseX, mouseY, 100, 100)
  if(framCount%4==0){
    jellyNum++
  }
}