var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX=speed;

  wall=createSprite(1500,200,50,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<= wall.width/2+car.width/2){
    
    car.velocityX=0;
    deformation=(0.5*speed*speed*weight)/22500;
    console.log(deformation);

    if(deformation<100){
       car.shapeColor="green";
    }
    if(deformation>=100&&deformation<=180){
       car.shapeColor="yellow";
    }
    if(deformation>180){
       car.shapeColor="red";

    
    }

  }
  drawSprites();
}