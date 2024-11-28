function setup() {
    createCanvas(800, 800, WEBGL);
    
    // Passing an options object that contains only a subset of possible options is also valid!
    setAsciiOptions({ 
      common: {
          fontSize: 8,
      },
      ascii: {
          renderMode: "brightness",
          enabled: true,
          characters: "0123456789",
          characterColor: "#27EE61",
          characterColorMode: 0,
          backgroundColor: "#250CC6",
          backgroundColorMode: 1,
          invertMode: true,
          rotationAngle: 0,
      },
      edge: {
          enabled: true,
          characters: "-/|\\-/|\\",
          characterColor: '#9DE48A',
          characterColorMode: 1,
          backgroundColor: '#592088',
          backgroundColorMode: 1,
          invertMode: false,
          rotationAngle: 0,
          sobelThreshold: 0.077,
          sampleThreshold: 64,
      } 
  });
  }
  
  function draw() {
    background(0);
    noStroke();
    
    rotateX(radians(frameCount * 3));
    rotateY(radians(frameCount));
    
    directionalLight(255, 255, 255, 0, 0, -1);
    torus(200, 50);
  }