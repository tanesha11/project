var b1, b2,b3;
var r1,r2,r3;

function setup() {
  createCanvas(800,400);

  b1 = createSprite(400, 200, 50, 50);
  b2 = createSprite(500,100,50,50);
  b3 = createSprite(200,200,50,50);

  r1 = createSprite(300,100,60,30);
  r2 = createSprite(400,100,60,30);
  r3 = createSprite(200,100,60,30);

  r3.velocityY = 0;
  r3.velocityX = 3;
}

function draw() {
  background(255,255,255);  

  r1.x = mouseX;
  r1.y = mouseY;


  if (touching(r1,r2)) {
     r1.shapeColor = "green";
     r2.shapeColor = "green";
  }
  else{
    r1.shapeColor = "yellow";
    r2.shapeColor = "yellow";
  }

  drawSprites();
  bounce(r2,r3);
}

