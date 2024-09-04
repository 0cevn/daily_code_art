let w = 80; 
let cols = 5; 
let rows = 5;
let curves = []; 

function setup() {
  createCanvas(cols * w, rows * w);
  for (let i = 0; i < cols; i++) {
    curves[i] = [];
    for (let j = 0; j < rows; j++) {
      curves[i][j] = new LissajousCurve(i + 1, j + 1);
    }
  }
}

function draw() {
  background(240);
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w;
      let y = j * w;
      
      push();
      translate(x + w / 2, y + w / 2);
      curves[i][j].show();
      pop();
      
      // border of cell
      noFill();
      stroke(0);
      rect(x, y, w, w);
      
      // frequency ratio
      fill(0);
      noStroke();
      textAlign(LEFT, TOP);
      textSize(10);
      text(`${i + 1}:${j + 1}`, x + 5, y + 5);
    }
  }
}

class LissajousCurve {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    this.points = [];
    this.generatePoints();
  }
  
  generatePoints() {
    for (let t = 0; t < TWO_PI; t += 0.01) {
      let x = sin(this.a * t);
      let y = sin(this.b * t);
      this.points.push(createVector(x, y));
    }
  }
  
  show() {
    stroke(0, 50);
    noFill();
    beginShape();
    for (let p of this.points) {
      vertex(p.x * (w * 0.4), p.y * (w * 0.4));
    }
    endShape();
  }
}