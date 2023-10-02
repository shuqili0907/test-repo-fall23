class Shape{
    constructor(_x, _y, _w, _h, _speedX, _speedY){
     this.x = _x 
     this.y = _y 
     this.w = _w 
     this.h = _h 
     this.speedX = _speedX 
     this.speedY = _speedY 
     this.color = [0,0,0] 
     // use array for color parameters because outside of function setup(), draw(), 
     // p5 won't recognize functions like color()
    }

    update(){
        this.x += this.speedX
        this.y += this.speedY 
    }

    display(){ 
        fill(this.color)
        rect(this.x, this.y, this.w, this.h)
    }
}

let myArray = ["it", "was", "a", "dark", "and", "stormy", "night"]

// let myObjectArr = [myRect, myOtherRect]

    //**** define an object **** //
// let myRect = { 
//     x: 200, 
//     y: 100, 
//     w: 50, 
//     h: 50, 
//     speedX: 3, 
//     speedY: 1
// }

let myRect = new Shape(200, 100, 50, 50, 3, 1)
// new instance of the class "Shape "
myRect.color = [200,20,200]

let myOtherRect = new Shape(400,500,50,50,-1, -1)



function setup(){
createCanvas(600,600)
console.log('hello!')
//console.log("20+ 37 is equal to ", sum(20,37))
console.log("triangle has sides a 7 and b 4, so side c is:",pythagorean(7,4))

console.log(myArray)
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray.length)

myOtherRect.color = color(200,150,20)

}

function draw(){
background(200)

fill(0,255,0)
ellipse(100,100,100,100)

paintItRed(ellipse, 300, 200, 100, 100)

paintItRed(rect,100,400,100,100)

// draw a rect using object 
// myRect.x += myRect.speedX;
// myRect.y += myRect.speedY; 

// fill(0,0,255)
// rect(myRect.x, myRect.y, myRect.w, myRect.h)


myRect.update()
myOtherRect.update()

myRect.display()
myOtherRect.display()

}

// sum adds two numbers together 
// function sum(a, b){
//  return a + b 
// }

function paintItRed(shape,x,y,w,h){
    fill(200,20,30)
    shape(x,y,w,h)
}



function pythagorean(a,b){
   let cSqr = pow(a,2) + pow(b,2)
   let c = sqrt(cSqr) 
   return c 
}