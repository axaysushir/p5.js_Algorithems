let r;
let factor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
//   createCanvas(640, 640)
  r = height / 2 - 16;
}

function getVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI);
  const v = p5.Vector.fromAngle(angle + PI);
  v.mult(r);
  return v;
}

function draw() {
  background(0);
  const total = 200; //int(map(mouseX, 0, width, 0, 200));
  factor += 0.015;

  translate(width / 2, height / 2);
  // stroke(255, 150);
  stroke(22, 99, 255)
  // stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(2);
  noFill();
  ellipse(0, 0, r * 2);

  strokeWeight(2);
  fill(255, 120)
  stroke(random(0, 255), random(0, 255), random(0, 255));
  for (let i = 0; i < total; i++) {
    const a = getVector(i, total);
    const b = getVector(i * factor, total);
    line(a.x, a.y, b.x, b.y);
  }
}