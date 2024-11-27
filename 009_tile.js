// using p5js web editor 

let tileWidth = 100;
let tileHeight = 400;
let frame = 10;
let padding = 30; 
let img;

function preload() {
  img = loadImage("claude_monet_Die_Elster.jpg"); // change asset
}

function setup() {
  
  
  let windowRatio = windowWidth / windowHeight;
  let imageRatio = img.width / img.height;
  
  if (windowRatio > imageRatio) {
    img.resize(0, windowHeight - 20);
  } else {
    img.resize(windowWidth - 20, 0);
  }
  createCanvas(img.width, img.height);

  
  // let tile = img.get(200, 200, 150, 150);
  let tileAcross = floor((width - frame * 2) / (tileWidth + padding));
  let tileDown = floor((height - frame * 2) / (tileHeight + padding));
  let extraWidth = round((width - (tileAcross * (tileWidth + padding) + frame * 2 - padding)) / 2);
  let extraHeight = round((height - (tileDown * (tileHeight + padding) + frame * 2 - padding)) / 2);
  
  for (i = 0; i < tileAcross; i++) {
    for (j = 0; j < tileDown; j++) {
      let tile = img.get(floor(random(img.width - tileWidth)), floor(random(img.height - tileHeight)), tileWidth, tileHeight);
      
      let x = i * (tileWidth + padding) + frame + extraWidth;
      let y = j * (tileHeight + padding) + frame + extraHeight;   
      
      image(tile, x, y);   
    }
  } 
}

function draw() {

}