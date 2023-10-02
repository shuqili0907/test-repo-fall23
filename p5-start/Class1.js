
let x = 0
let y = 0

let speedX = 1
function setup() {
  createCanvas(600, 600)
  frameRate(100)
}

function draw() {
  background(211, 248, 226)

 // console.log(mouseY)

  if (x > width){
    speedX = -10
  }
  if (x < 0){
    speedX = 10
  }

  // if (x > 600){
  //   speedX = -1
  // } 
  // if (x < 0){
  //   speedX = 1
  // }
  // x += deltaTime * speedX


  //x += deltaTime / 100
  //x = x+1
  //y = y+1
  x += speedX
 // ellipse(mouseX,mouseY,100,100)

 // ellipse(x,y,100,100)

  for(let i=0; i < 100; i++){
    fill(i*2,0,255 - i * 2)
  ellipse(x,y + i * 3,50,50)
  }

}

function keyPressed(){
  console.log(keyCode)
  //left is 37 
  //right is 39 

  //up arrow is 38 
  if(keyCode == 38){
    y -= 10 
  }
  // down arrow is 40
  if(keyCode == 40){
    y += 10
  }
}