let ball = {
  x: 200,
  y: 300,
  xspeed: 3,
  yspeed: 3
}

// these are all built in to p5  amking it a library of functions 
function setup() { // defining a function
  createCanvas(400, 400);
}

function draw() {
  background(220);
 display()
  bounce()
  move()
}

function display() {
  fill(150, 25,200)
  circle(ball.x, ball.y, 90) // callin a function

}

function bounce() {
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1
  }

}

function move() {
 ball.x = ball.x + ball.xspeed 
  ball.y += ball.yspeed



}
