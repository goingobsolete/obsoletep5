
let colorPalette = [
  // '#000000', // Black
  '#FFFFFF', // White
  '#FF5733', // Red
  '#33FF57', // Green
  '#3357FF', // Blue
  '#F0F033', // Yellow
  // '#33F0FF', // Cyan
  // '#F033FF', // Magenta
  // '#FF33F0', // Pink
  // '#33FFD5', // Turquoise
  // '#D5FF33', // Lime
  // '#FF8C33', // Orange
  // '#8C33FF', // Purple
  // '#33FF8C'  // Mint
];

let brushSizeX = 10;
let brushSizeY = 30
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

}

function draw() {
  // Set the brush color to black
  fill(random(255),random(255),random(255), 200);
  noStroke();
  brushSizeX = 30+random(20);
  // brushSizeY = 10+random(20);
  // brushSizeX = 20;
  // brushSizeY = 50;
  
  //ideally this would be in proportion to window size like all variables

  
  // Draw a circle at the mouse position to reveal the text
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, brushSizeX, brushSizeX*3);
      // if (frameCount % 4 < 1) {
        push();
        textSize(random(250));
        textFont('Helvetica');
        textAlign(CENTER, CENTER);
        // noStroke();
        stroke(0);
        strokeWeight(3);
        // fill(random(255),random(255),random(255));
        fill(random(colorPalette));
        text("obsolete", random(width), random(height));
        pop();
    // }
  }
}