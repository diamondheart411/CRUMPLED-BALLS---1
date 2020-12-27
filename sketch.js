var floor, ball, bin;

function setup() {
	createCanvas(800, 700);
	floor=createSprite(400,700,800,50)
	bin=createSprite(735,660,100,50)
	ball = createSprite(27,21,30,30)
}


function draw() {
  background(0);
  ball.shapeColor = color(0);
  if(keyIsDown(LEFT_ARROW)){
	  ball.x = ball.x-10;
   }
  if(keyIsDown(RIGHT_ARROW)){
    ball.x = ball.x+10;
   }
  if(keyIsDown(UP_ARROW)){
    ball.y = ball.y-10;
   }
  if(keyIsDown(DOWN_ARROW)){
    ball.y = ball.y+10;
   }

  if(ball.isTouching(bin)){
    background(0,255,0);
  }else{
    background(255,0,0);
  }
  
  drawSprites();
 
}