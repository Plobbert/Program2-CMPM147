/* exported setup, draw */
let seed = 12345;

const sunColor = [254, 254, 254, 80]; // with opacity

const pyramidColor = "#af9071";
const pyramidSideColor = "#7e6d59";
const theSkyColor = "#b9d0e8";
const groundColor = "#af9d7f";
const smallWallColor = "#fefef8";
let shirtColor = "#ff0000";
let pantsColor = "#0000ff";
const skinColor = "#a57167";

const shirtColors = ["#ff0381", "#a7a630", "#732743", "#89d273"];
const pantsColors = ["#387ff8", "#37df02", "#da8403", "#d838a9"];

let scale, xpos, ypos;

function preload() {
    // runs before setup 
    // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
  createCanvas(800, 400);
    createButton("reroll").mousePressed(() => seed++);
    scale = 2;
    xpos = width - 50;
    ypos = height / 1.1;
}

function draw() {
  randomSeed(seed);

  background(100);

  noStroke();

  fill(theSkyColor);
  rect(0, 0, width, height / 2);

  // An example of making something respond to the mouse
  fill(...sunColor);
  ellipse(mouseX,0,30,30);
  ellipse(mouseX,0,50,50);
  ellipse(mouseX,0,100,100);
  ellipse(mouseX,0,200,200);

  fill(groundColor);
  rect(0, height / 2, width, height / 2);

    drawPyramidAt(100, 0);
    drawPyramidAt(300, 30);
    xpos -= (xpos - mouseX) / 100;
    if (ypos - ((ypos - mouseY) / 100) > height / 2) {
        ypos -= (ypos - mouseY) / 100;
    }
    drawHuman(xpos, ypos);
    drawHuman(random(width), random(height / 2, height));
    drawHuman(random(width), random(height / 2, height));
    drawHuman(random(width), random(height / 2, height));
    drawHuman(random(width), random(height / 2, height));

    function drawPyramidAt(x, offset) {
        if (mouseX > x + 100) {
            fill(pyramidSideColor);
        } else {
            fill(pyramidColor);
        }
        beginShape();
        vertex(x, height / 2 + 30 + offset);
        vertex(x + 100, height / 5 + offset);
        vertex(x + 150, height / 2 + 30 + offset);
        endShape(CLOSE);
        if (mouseX > x + 100) {
            fill(pyramidColor);
        } else {
            fill(pyramidSideColor);
        }
        beginShape();
        vertex(x + 150, height / 2 + 30 + offset);
        vertex(x + 100, height / 5 + offset);
        vertex(x + 200, height / 2 + 10 + offset);
        endShape(CLOSE);
    }

    function drawHuman(x, y) {
        fill(random(shirtColors));
        ellipse(x, y, 10 * scale, 20 * scale);
        fill(skinColor);
        ellipse(x, y - (10 * scale), 10 * scale, 10 * scale);
        drawLimbs(x, y);
    }

    function drawLimbs(x, y) {
        stroke(skinColor);
        strokeWeight(5);
        line(x + (5 * scale), y - 4, x + (15 * scale), y + random(10));
        line(x - (5 * scale), y - 4, x - (15 * scale), y - random(10));
        stroke(random(pantsColors));
        line(x + 5, y + 15, x + 5 + random(5), y + 20 + (1 * scale));
        line(x - 5, y + 15, x - 5 - random(5), y + 20 + (1 * scale));
        strokeWeight(0);
    }
}

