let myFont;

let brushSizeX = 10;
let brushSizeY = 30

let noiseOffsetR = 0;
let noiseOffsetG = 10000; // Start at different offsets for each color
let noiseOffsetB = 20000; // to ensure they vary independently

function
preload() {
  myFont = loadFont('assets/IBMPlexSans-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {

  // Generate color values using Perlin noise
  let r = noise(noiseOffsetR) * 255;
  let g = noise(noiseOffsetG) * 255;
  let b = noise(noiseOffsetB) * 255;

  // Set the brush to noisy color
  fill(255,g,b);
  noStroke();
  brushSizeX = 30+random(20);
  // brushSizeY = 10+random(20);
  // brushSizeX = 20;
  // brushSizeY = 50;

  // Increment noise offsets for continuous color change
  noiseOffsetR += 0.05;
  noiseOffsetG += 0.05;
  noiseOffsetB += 0.05;
  
  //ideally this would be in proportion to window size like all variables

  
  // Draw a circle at the mouse position to reveal the text
  if (mouseIsPressed) {
    push();
        textSize(100+random(100));
        textFont(myFont);
        textAlign(CENTER, CENTER);
        stroke(255);
        strokeWeight(3);
        fill(random(255),random(255),random(255));
        // fill(r,g,b);
        text("going", mouseX, mouseY);
        pop();
    // ellipse(mouseX, mouseY, brushSizeX, brushSizeX*3);
    // ellipse(mouseX+brushSizeX, mouseY, brushSizeX, brushSizeX*3);
      // if (frameCount % 4 < 1) {
        push();
        textSize(random(200));
        textFont('Helvetica');
        textAlign(CENTER, CENTER);
        stroke(0);
        strokeWeight(3);
        fill(255);
        text("obsolete", random(width), random(height));
        pop();
    // }
  }
}