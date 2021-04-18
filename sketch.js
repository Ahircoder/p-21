var bullet, wall;
var speed, weight;
var thickness;
function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 20, 50);

  wall = createSprite(1200, 200, thickness, height / 2);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255, 255, 255);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0, 0, 0);
  drawSprites();
  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / (thickness * thickness);

    if (damage > 10) {
      wall.shapeColor(255, 0, 0);
    }
    if (damage <= 10);
    {
      wall.shapeColor(0, 255, 0);
    }
  }
}
function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
}
