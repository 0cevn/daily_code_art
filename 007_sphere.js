let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  strokeWeight(0.5);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  
  // 구체를 중앙에 위치
  translate(0, 0, 0);
  
  // 자연스러운 회전
  rotateY(angle);
  //rotateX(angle * 0.5);
  
  const radius = 120;  // 반지름을 150에서 100으로 줄임
  const latitudes = 12;   
  const longitudes = 12;  
  
  // 위도선 그리기 (수평선)
  for (let i = 0; i <= latitudes; i++) {
    const lat = map(i, 0, latitudes, 0, PI);
    beginShape();
    for (let j = 0; j <= 36; j++) {
      const lon = map(j, 0, 36, 0, TWO_PI);
      const x = radius * sin(lat) * cos(lon);
      const y = radius * cos(lat);
      const z = radius * sin(lat) * sin(lon);
      vertex(x, y, z);
    }
    endShape();
  }
  
  // 경도선 그리기 (수직선)
  for (let i = 0; i < longitudes; i++) {
    const lon = map(i, 0, longitudes, 0, TWO_PI);
    beginShape();
    for (let j = 0; j <= 36; j++) {
      const lat = map(j, 0, 36, 0, PI);
      const x = radius * sin(lat) * cos(lon);
      const y = radius * cos(lat);
      const z = radius * sin(lat) * sin(lon);
      vertex(x, y, z);
    }
    endShape();
  }
  
  // 회전 각도 증가
  angle += 0.008;
}