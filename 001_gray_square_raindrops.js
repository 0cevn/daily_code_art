const numSquares = 200;
let squares = [];

function setup() {
  createCanvas(400, 400);
  noStroke();

  // initiate squares
  for (let i = 0; i < numSquares; i++) {
    squares.push({
      x: random(width),
      y: random(-height, 0),  // falling from the top of screen 
      size: random(5, 15),
      speed: random(0.5, 2),
      color: color(random(100, 150))  // dark gray tone
    });
  }
}

function draw() {
  background(30);  // dark gray

  // draw squares
  for (let square of squares) {
    fill(square.color);
    rect(square.x, square.y, square.size, square.size);

    // update squares' position 
    square.y += square.speed;

    // if square leave the screen, fall back from above
    if (square.y > height) {
      square.y = random(-height, 0);
      square.x = random(width);
      square.size = random(5, 15);
      square.speed = random(0.5, 2);
    }
  }

  // Effect that gradually darkens the screen
  fill(30, 30, 30, 5);
  rect(0, 0, width, height);
}
