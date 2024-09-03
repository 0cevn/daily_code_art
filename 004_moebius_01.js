let angle = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  noFill();
  strokeWeight(0.5);
}

function draw() {
  background(20);
  
  rotateX(angle * 0.7);
  rotateY(angle * 0.5);
  
  stroke(255); 
  
  for (let u = 0; u < TAU; u += 0.1) {
    beginShape(QUAD_STRIP);

    // [ ] TODO
    for (let t = 0; t <= TAU; t += 0.1) {
      let x = (2 + cos(u / 2) * sin(t)) * cos(u);
      let y = (2 + cos(u / 2) * sin(t)) * sin(u);
      let z = sin(u / 2) * sin(t);
      
      vertex(x * 50, y * 50, z * 50);
      
      x = (2 + cos((u + 0.1) / 2) * sin(t)) * cos(u + 0.1);
      y = (2 + cos((u + 0.1) / 2) * sin(t)) * sin(u + 0.1);
      z = sin((u + 0.1) / 2) * sin(t);
      
      vertex(x * 50, y * 50, z * 50);
    }
    endShape();
  }
  
  angle += 0.01;
}
