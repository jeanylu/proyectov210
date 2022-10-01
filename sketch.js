
function preload(){
ship_floating=loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png");
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
sea=createSprite(200,200,400,400);
sea.addImage("sea", seaImage);
sea.scale=0.25;

ship=createSprite(200,200,100,60);
ship.scale=0.15;
ship.addAnimation("floating", ship_floating);
sea.x=sea.width/8;

}

function draw() {
  background("blue");
 sea.velocityX=-2;
 
 if(sea.x<0){
   sea.x=sea.width/8;
 }
drawSprites(); 
}