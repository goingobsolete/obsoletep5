let goFont;
let goFill;
let goSize;
let goRatio;

let obFont;




function preload() {
  // goFont = loadFont('assets/IBMPlexSans-Bold.ttf');
  goFont = 'HELVETICA'
  obFont = goFont
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {

  // Going Object Fill
  goFill = {
    r: random(255),
    g: random(255),
    b: random(255),
    o: 255
  };
  
  //ideally this would be in proportion to window size like all variables

  if (mouseIsPressed) {
        push();
        textSize(300);
        textFont(goFont);
        textAlign(CENTER, CENTER);
        stroke(255);
        strokeWeight(random(3));
        fill(goFill.r, goFill.g, goFill.b, goFill.o);
        //snag the colors from riso**** every lift switched colors
        // fill(r,g,b);
        

        translate(mouseX, mouseY, 6);
        // rotate(radians(frameCount*-1));
        text("GOING", 0, 0,0);
        pop();

      // if (frameCount % 4 < 1) {
        push();
        textSize(random(150));
        textFont(obFont);
        textAlign(CENTER, CENTER);
        stroke(0);
        strokeWeight(3);
        fill(255,255,255,random(215,216));
        text("obsolete", random(width), random(height));
        pop();
    // }
  }
}