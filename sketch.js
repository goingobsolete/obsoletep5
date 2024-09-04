// <div id="sketch-holder"></div>

// <script>


let goFont;
let goFill;
let goRatio;

let obFont;
let obFill
let obRatioLow;
let obRatioHigh;

// let targetDiv;
// let targetDivWidth;
let heightRatio;



function preload() {
  // goFont = loadFont('assets/IBMPlexSans-Bold.ttf');
  goFont = 'HELVETICA';
  obFont = goFont;
}

function setup() {

  // targetDiv = document.querySelector('.MuiStack-root.css-7e7wz2');
  // targetDivWidth = targetDiv.offsetWidth;
  heightRatio = 0.565; // 16x9

  goRatio = (1/8);
  obRatioLow = (1/35);
  obRatioHigh = (1/17);

  // createCanvas(headerWidth, windowHeight*.98);
  createCanvas(windowWidth,(windowWidth)*heightRatio);
  background(255);
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
        textSize((Math.sqrt(width*height))*goRatio);
        textFont(goFont);
        textAlign(CENTER, CENTER);
        stroke(random(255,255));
        strokeWeight(1);
        fill(goFill.r, goFill.g, goFill.b, goFill.o);
        //snag the colors from riso**** every lift switched colors
        // fill(r,g,b);
        

        translate(mouseX, mouseY, 6);
        rotate(radians((frameCount*-1)));
        text("gøing", 0, 0,0);
        pop();

      
        push();
        let obTextSize = random(width * obRatioLow, width * obRatioHigh);
        textSize(obTextSize);
        textFont(obFont);
        textAlign(CENTER, CENTER);
        stroke(goFill.r,goFill.g,goFill.b);
        strokeWeight(obTextSize*.003);
        fill(255,255,255,random(255));
        text("OBSOLETE", random(width), random(height));
        pop();
  }
}