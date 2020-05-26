var wall,thickness;
var bullet,speed,weight;

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true 
  }
  return false;
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  thickness=random(22,83);
  speed=random(223,32);
  weight=random(30,52);
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thikness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(225,0,0);

    }

    if(damage<10){
      wall.shapeColor=color(0,225,0);
    }
  }
  

}

function draw() {
  drawSprites();
  background(255,255,255);  
  hasCollided(wall,bullet);
  
}