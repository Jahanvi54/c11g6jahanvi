var sea,ship;
var seaImg,shipImg;
var iceberg;
var icebergImg;


function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadImage("ship-1.png");
  icebergImg = loadImage("iceberg.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addImage("movingShip",shipImg1);
  ship.scale =0.25;


  iceberg= createSprite(200,450,20,50);
  iceberg.addImage(icebergImg);
  iceberg.scale=0.1;
  
}

function draw() {
  background(0);
  spawnIceberg();
  
  drawSprites();
}

function spawnIceberg(){
  if (frameCount%80===0){
   var icebergs= createSprite(370,300,20,50);
  icebergs.velocityX=-3;
  icebergs.addImage(icebergImg);
  icebergs.scale=0.2;
  
 }
}