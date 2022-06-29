/* exported setup, draw */
let seed = 12345;

const grassColor = "#e1ac4a";
const hillColor = "#1e273f";
const treeColor = "#3d1803";
const leaveColor = "#233610";
const sunColor = [254, 254, 254, 80]; // with opacity

const pyramidColor = "#af9071";
const pyramidSideColor = "#7e6d59";
const theSkyColor = "#b9d0e8";
const groundColor = "#af9d7f";
const smallWallColor = "#fefef8";
const shirtColor = "#ff0000";
const pantsColor = "#0000ff";
const skinColor = "#815044";

let scale;

function preload() {
    // runs before setup 
    // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
  createCanvas(800, 400);
    createButton("reroll").mousePressed(() => seed++);
    scale = 1;
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

  // An example of drawing an irregular polygon
  //const steps = 10;
  /*for (let i = 0; i < steps + 1; i++) {
    let x = (width * i) / steps;
    let y =
      height / 2 - (random() * random() * random() * height) / 8 - height / 50;
    vertex(x, y);
  } */

    drawPyramidAt(100, 0);
    drawPyramidAt(300, 30)
    drawHuman(width - 50, height / 1.1);
  const trees = 5*random();
  for (let i = 0; i < trees; i++) {
    //drawLtree();
  }

    function drawPyramidAt(x, offset) {
        fill(pyramidColor);
        beginShape();
        vertex(x, height / 2 + 30 + offset);
        vertex(x + 100, height / 5 + offset);
        vertex(x + 150, height / 2 + 30 + offset);
        endShape(CLOSE);
        fill(pyramidSideColor);
        beginShape();
        vertex(x + 150, height / 2 + 30 + offset);
        vertex(x + 100, height / 5 + offset);
        vertex(x + 200, height / 2 + 10 + offset);
        endShape(CLOSE);
    }

    function drawHuman(x, y) {
        scale = 2;
        fill(shirtColor);
        ellipse(x, y, 10 * scale, 20 * scale);
        fill(skinColor);
        ellipse(x, y - (10 * scale), 5 * scale, 5 * scale);
        drawLimbs(x, y);
    }

    function drawLimbs(x, y) {
        stroke(skinColor);
        strokeWeight(5);
        line(x + (5 * scale), y, x + (15 * scale), y + random(5));
        line(x - (5 * scale), y, x - (15 * scale), y - random(5));
        fill(pantsColor);
        line(x + 5, y + 10, x + random(3), y + 15 + (1 * scale));
        line(x - 5, y + 10, x - random(3), y + 15 + (1 * scale));
    }
/*
  // An example of recursively drawing an L-tree 
  function drawLtree() {
    let x = width * random();
    let y = height/2 + height/8 * random();
    let s = width/200 + (y - height/2)/2;
    let jitter = (mouseX - width/2) / width * 2 * Math.PI / 180;
    drawLtreeBranch(x, y, s, (-90 * Math.PI / 180) + jitter, 0, 5); // this angle points north (0 is east)
  }  

  function drawLtreeBranch(x, y, s, angle, max_limit, branch_weight) { // s is length of a segment
    stroke(treeColor);
    strokeWeight(branch_weight);
    let v = p5.Vector.fromAngle(angle, s);
    let vx = v.x;
    let vy = v.y;
    let x1 = x;
    let y1 = y;
    let x2 = x1 + vx;
    let y2 = y1 + vy;
    line(x1, y1, x2, y2);

    let new_s = s * 0.7;
    let new_max = max_limit + random();
    let new_branch_weight = branch_weight - 1;
    new_branch_weight = max(new_branch_weight, 1);

    if (max_limit < 3) {
        if (random() < 1/3) {
            drawLtreeBranch(x2, y2, new_s, (-35 * Math.PI / 180) + angle, new_max, new_branch_weight);
        } else if (random() > 1/3) {
            drawLtreeBranch(x2, y2, new_s, (35 * Math.PI / 180) + angle, new_max, new_branch_weight);
        } else {
            drawLtreeBranch(x2, y2, new_s, (-35 * Math.PI / 180) + angle, new_max, new_branch_weight);
            drawLtreeBranch(x2, y2, new_s, (35 * Math.PI / 180) + angle, new_max, new_branch_weight);
        }
        drawLtreeBranch(x2, y2, new_s, angle, new_max, new_branch_weight);
    }
    else {
        if (random() < 1/3) {
            drawLeave(x2, y2, new_s, (-35 * Math.PI / 180) + angle);
        } else if (random() > 1/3) {
            drawLeave(x2, y2, new_s, (35 * Math.PI / 180) + angle);
        } else {
            drawLeave(x2, y2, new_s, (-35 * Math.PI / 180) + angle);
            drawLeave(x2, y2, new_s, (35 * Math.PI / 180) + angle);
        }
    }

  }

  function drawLeave(x, y, s, angle) {
    fill(leaveColor);
    noStroke();
    let v = p5.Vector.fromAngle(angle, s);
    let vx = v.x;
    let vy = v.y; 
    let x1 = x;
    let y1 = y; 
    let x2 = x1 + vx;
    let y2 = y1 + vy;
    line(x1, y1, x2, y2);
    circle(x2, y2, 3);

  }
  */
}

