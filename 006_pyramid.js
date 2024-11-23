let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  strokeWeight(0.5);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  
  // 캔버스를 약간 위로 이동
  translate(0, -30, 0);
  
  // x축을 기준으로 회전
  rotateY(angle);
  
  // 피라미드 그리기
  beginShape(TRIANGLES);
  
  // 밑면
  vertex(-100, 100, -100);
  vertex(100, 100, -100);
  vertex(-100, 100, -100);
  
  // 앞면
  vertex(0, -100, 0);
  vertex(-100, 100, 100);
  vertex(100, 100, 100);
  
  // 뒷면
  vertex(0, -100, 0);
  vertex(100, 100, -100);
  vertex(-100, 100, -100);
  
  // 왼쪽면
  vertex(0, -100, 0);
  vertex(-100, 100, -100);
  vertex(-100, 100, 100);
  
  // 오른쪽면
  vertex(0, -100, 0);
  vertex(100, 100, 100);
  vertex(100, 100, -100);
  
  endShape();
  
  // 회전 각도 증가
  angle += 0.015;
}