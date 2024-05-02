// let p=[]
// let numParticles=150
let firework

function setup() {
  createCanvas(400, 400);
//p=new Particle(200, 200)
  // for(let i=0; i<numParticles; i++){
  //   p.push(new Particle(200, 200))
  // }
  // firework=new Firework()
  colorMode(HSB)
}

function draw() {
  background(0, 0.1);
  if(firework){
    firework.update()
  }
  
  
  // p.update()
  // p.show()
}

function mousePressed(){
  firework=new Firework(mouseX, mouseY, random(2,200))
}

class Firework{
  constructor(x,y){
    this.p=[]
    this.numParticles=50
    for(let i=0; i<this.numParticles; i++){
      this.p.push(new Particle(x,y))
    }
  }
  
  update(){
    // this.p.forEach(function(particle,i){
    //   // particle.update()
    //   // particle.show()
    //   if(particle.update()){
    //     particle.show()
    //   } else{
    //     //remove it
    //     this.p.splice(i,1)
    //   }
    // })
    
    for(let i=this.p.length-1; i>0; i--){
      if(this.p[i].update()){
        this.p[i].show()
      } else{
        //remove it
        this.p.splice(i,1)
      }
    }
    
  }
}



class Particle{
  constructor(x,y){
    this.x=x
    this.y=y
    this.a=random(TWO_PI)
    this.speed=random(2.5,4.5)
    this.fall=0
    this.gravity=0.05
    this.moveX=cos(this.a)*this.speed
    this.moveY=sin(this.a)*this.speed
    this.col=random(360)
  }
  
  update(){
  // this.x+=this.speed
//   this updates the possition allowing the ellipse to move
    this.x+=this.moveX
    this.y+=this.moveY
    this.y+=this.fall
    this.fall+=this.gravity
    return this.y<height
  }
  
  show(){
    // fill(255,0,0)
    fill(this.col, 200,200)
    noStroke()
    ellipse(this.x, this.y, 5)
  }
}