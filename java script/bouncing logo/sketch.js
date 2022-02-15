let x, length = 80;
let y, breadth = 60;
let speedx;
let speedy;
let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(800, 600);
  x = 400;
  y = 300;
  speedx = 10;
  speedy = 10;
}

function draw() {
  background(0);
  fill(r, g, b);
  rect(x, y, length, breadth);
  x += speedx;
  y += speedy;

  if (x + 80 >= width || x == 0) {
    speedx = -speedx;
    col();
  }
  if (y + 60 >= height || y == 0) {
    speedy = -speedy;
    col();
  }
}

function col() {
  r = random(100, 255);
  g = random(100, 255);
  b = random(100, 255);
}