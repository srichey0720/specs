function preload() {
  Rooney = loadFont('rooneysans-cufonfonts/RooneySansBlk.OTF');
  blurry = loadImage('Specs_logo_blurred2.png');
  clear = loadImage('Specs_logo2.png');
  eyeChart = loadImage('eye_chart2.png');
}

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000, 800);
  colorMode(RGB);
  img = blurry;
}

function windowResized () {
  centerCanvas();
}

let xLeft = 0;
let xRight = 0;
let y = 0;
let eyelidTop = 180;
let eyelidBottom = 325;
let value = (249, 242, 236);
let weight = 0;


function draw () {
background(153, 51, 0);


//eyes//
strokeWeight (weight);
stroke(value);
fill(249, 242, 236);
ellipse(380, 300, 130, 130);
ellipse(550, 300, 130, 130);

//glasses bridge
fill(255, 0, 0, 0);
curve(430, 450, 445, 300, 485, 300, 510, 400);

//pupils
noStroke();
fill(0);
ellipse(xLeft, y, 50);
ellipse(xRight, y, 50);

//moving pupils
y = map(mouseY, 0, height, 270, 330, true);
xLeft = map(mouseX, 0, width, 350, 410, true);
xRight = map(mouseX, 0, width, 520, 580, true);


if (mouseX>215 && mouseX<730 && mouseY>350 && mouseY<550) {
//eyelids
fill (153, 51, 0);
rect (0, eyelidTop, 1000, 100);
rect (0, eyelidBottom, 1000, 100);
}
  //type//
  // fill(255);
  // textSize (200);
  // textFont(Rooney)
  // noStroke();
  // text('specs', 200, 500);

image(img, 170, 300);

cursor('eye_chart2.png');

}

function mouseClicked() {
  //glasses//
  img = clear;
if (value === 249, 242, 236) {
value = 153, 102, 0;
}
if (weight === 0) {
weight = 15;

if (eyelidTop === 180) {
  eyelidTop = 0;
}
if (eyelidBottom === 325) {
  eyelidBottom = 800;
}
}
else {
  value = 249, 242, 236;
  weight = 0;
  eyelidTop = 180;
  eyelidBottom = 325;
  img = blurry;
}
}
