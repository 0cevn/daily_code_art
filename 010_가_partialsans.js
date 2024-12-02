let points = [];
let font;

function preload() {
  font = loadFont("fonts/PartialSansKR.otf");
}

function setup() {
  createCanvas(1024, 1024);

  // 텍스트의 크기와 위치
  const textSize = 720;
  const text = "가";
  const bounds = font.textBounds(text, 0, 0, textSize);

  // 중심점으로 이동하도록 조정
  const xOffset = (width - bounds.w) / 2 - bounds.x;
  const yOffset = (height - bounds.h) / 2 - bounds.y;

  // 텍스트를 점으로 변환
  points = font.textToPoints(text, xOffset, yOffset, textSize);
}

function draw() {
  background("#00ff");

  // 점으로 텍스트 그리기
  for (let i = 0; i < points.length; i+=2) {
    ellipse(points[i].x, points[i].y, 60, 60);
  }
}
