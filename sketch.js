var fixrect, moverect;

function setup() {
  createCanvas(800, 400);
  fixrect = createSprite(200, 200, 50, 50);
  moverect = createSprite(300, 200, 50, 100);
  fixrect.shapeColor = "green";
  moverect.shapeColor = "green";
}

function draw() {
  background(255, 255, 255);
  moverect.x = World.mouseX;
  moverect.y = World.mouseY;
  if (
    moverect.x - fixrect.x < fixrect.width / 2 + moverect.width / 2 &&
    fixrect.x - moverect.x < fixrect.width / 2 + moverect.width / 2 &&
    fixrect.y - moverect.y < fixrect.width / 2 + moverect.width / 2 &&
    moverect.y - fixrect.y < fixrect.width / 2 + moverect.width / 2
  ) {
    fixrect.shapeColor = "red";
    moverect.shapeColor = "red";
  } else {
    fixrect.shapeColor = "green";
    moverect.shapeColor = "green";
  }
  drawSprites();
}
